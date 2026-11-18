"""Deploy the static portfolio to InfinityFree over encrypted FTP.

Credentials are supplied by GitHub Actions secrets. This script deliberately
uploads only public website files and never deletes remote files.
"""

from ftplib import FTP_TLS, error_perm
from pathlib import Path
import os

LOCAL_ROOT = Path(__file__).resolve().parents[1]
REMOTE_ROOT = "/htdocs"
UPLOAD_PATHS = (
    LOCAL_ROOT / "index.html",
    LOCAL_ROOT / "styles.css",
    LOCAL_ROOT / "script.js",
    LOCAL_ROOT / "assets",
    LOCAL_ROOT / "exam",
)


def required_env(name: str) -> str:
    value = os.environ.get(name, "").strip()
    if not value:
        raise RuntimeError(f"Required environment variable {name} is missing")
    return value


def ensure_directory(ftp: FTP_TLS, remote_directory: str) -> None:
    current = ""
    for part in remote_directory.strip("/").split("/"):
        current += f"/{part}"
        try:
            ftp.mkd(current)
        except error_perm as error:
            # InfinityFree returns 550 when a directory already exists.
            if not str(error).startswith("550"):
                raise


def website_files():
    for path in UPLOAD_PATHS:
        if path.is_file():
            yield path
        elif path.is_dir():
            yield from (item for item in path.rglob("*") if item.is_file())


def main() -> None:
    ftp = FTP_TLS(timeout=60)
    ftp.connect(required_env("FTP_SERVER"), 21)
    ftp.auth()
    ftp.login(required_env("FTP_USERNAME"), required_env("FTP_PASSWORD"))
    ftp.prot_p()

    uploaded = 0
    for local_file in website_files():
        relative = local_file.relative_to(LOCAL_ROOT).as_posix()
        remote_file = f"{REMOTE_ROOT}/{relative}"
        ensure_directory(ftp, str(Path(remote_file).parent).replace("\\", "/"))
        with local_file.open("rb") as stream:
            ftp.storbinary(f"STOR {remote_file}", stream, blocksize=64 * 1024)
        print(f"Uploaded {relative}")
        uploaded += 1

    ftp.quit()
    print(f"Deployment complete: {uploaded} files uploaded securely")


if __name__ == "__main__":
    main()
