window.QUESTION_BANK = [
  {
    "id": "P0102-001",
    "type": "mcq",
    "question": "Which network benefit specifically optimizes the use of printers, storage, and software?",
    "options": [
      "Resource sharing",
      "Business continuity",
      "Signal theory",
      "Congestion control"
    ],
    "answer": "Resource sharing",
    "explanation": "The notes identify resource sharing as the network benefit that optimizes devices such as printers and storage, as well as software.",
    "source": "Part01_02",
    "pages": "2",
    "likelihood": "High",
    "topic": "Importance of networks"
  },
  {
    "id": "P0102-002",
    "type": "mcq",
    "question": "According to the notes, which networking benefit lets an IT infrastructure grow with increasing users, data, and devices?",
    "options": [
      "Scalability and flexibility",
      "Error control",
      "Static channel allocation",
      "Store-and-forward switching"
    ],
    "answer": "Scalability and flexibility",
    "explanation": "Scalability and flexibility are explicitly tied to growth with business demands in users, data, and devices.",
    "source": "Part01_02",
    "pages": "3",
    "likelihood": "Medium",
    "topic": "Importance of networks"
  },
  {
    "id": "P0102-003",
    "type": "mcq",
    "question": "Which model is cited as a structured methodology for diagnosing connectivity failures?",
    "options": [
      "OSI Model",
      "Client-server model",
      "Master-slave model",
      "Shannon-Hartley model"
    ],
    "answer": "OSI Model",
    "explanation": "The troubleshooting discussion names the OSI Model as an example of a structured diagnostic methodology.",
    "source": "Part01_02",
    "pages": "4",
    "likelihood": "High",
    "topic": "Troubleshooting and security"
  },
  {
    "id": "P0102-004",
    "type": "comparison",
    "question": "Compare the scope of computer networks with that of communication systems as presented in the notes.",
    "options": [],
    "answer": "Computer networks address the logical rules and architecture of data communication. Communication systems address the physical mechanism and science that make data transfer possible. The latter includes conversion of bits into electrical, optical, or radio-frequency signals and the behavior of physical media; the two bodies of knowledge therefore complement one another.",
    "explanation": "This distinction is the stated conclusion of the section linking network architecture to its physical communication foundation.",
    "source": "Part01_02",
    "pages": "7-10",
    "likelihood": "High",
    "topic": "Networks and communication systems"
  },
  {
    "id": "P0102-005",
    "type": "mcq",
    "question": "What two channel properties determine the maximum theoretical data rate in the stated Shannon-Hartley concept?",
    "options": [
      "Bandwidth and noise level",
      "Distance and routing algorithm",
      "Address size and packet length",
      "Topology and ownership"
    ],
    "answer": "Bandwidth and noise level",
    "explanation": "The notes state that channel capacity is based on bandwidth and noise level.",
    "source": "Part01_02",
    "pages": "8",
    "likelihood": "High",
    "topic": "Communication theory"
  },
  {
    "id": "P0102-006",
    "type": "mcq",
    "question": "Which pair is given as examples of techniques rooted in communication theory for reliable data transfer over noisy links?",
    "options": [
      "CRC and forward error correction",
      "Multiplexing and routing",
      "Broadcasting and multicasting",
      "Token passing and round robin"
    ],
    "answer": "CRC and forward error correction",
    "explanation": "CRC and forward error correction are the examples listed under error control.",
    "source": "Part01_02",
    "pages": "8",
    "likelihood": "High",
    "topic": "Error control"
  },
  {
    "id": "P0102-007",
    "type": "comparison",
    "question": "Compare broadcast links and point-to-point links.",
    "options": [],
    "answer": "A broadcast network has one communication channel shared by all machines; a packet address identifies its recipient, and a packet may target all destinations (broadcasting) or a subset (multicasting). Point-to-point links connect individual pairs, and a packet may pass through intermediate machines before reaching its destination.",
    "explanation": "The contrast combines the two transmission technologies and their defining delivery behavior.",
    "source": "Part01_02",
    "pages": "19-20",
    "likelihood": "High",
    "topic": "Transmission technology"
  },
  {
    "id": "P0102-008",
    "type": "mcq",
    "question": "In a broadcast network, what identifies the intended recipient?",
    "options": [
      "An address in the packet",
      "A dedicated physical channel",
      "A token-ring timer",
      "The routing algorithm alone"
    ],
    "answer": "An address in the packet",
    "explanation": "Although the channel is shared, an address carried in the packet identifies the recipient.",
    "source": "Part01_02",
    "pages": "20",
    "likelihood": "High",
    "topic": "Transmission technology"
  },
  {
    "id": "P0102-009",
    "type": "mcq",
    "question": "Addressing a packet to a subset of destinations is called what?",
    "options": [
      "Multicasting",
      "Broadcasting",
      "Store-and-forwarding",
      "Demultiplexing"
    ],
    "answer": "Multicasting",
    "explanation": "The notes distinguish broadcasting to all destinations from multicasting to a subset.",
    "source": "Part01_02",
    "pages": "20",
    "likelihood": "High",
    "topic": "Transmission technology"
  },
  {
    "id": "P0102-010",
    "type": "mcq",
    "question": "Which standard is identified as Ethernet?",
    "options": [
      "IEEE 802.3",
      "IEEE 802.5",
      "IEEE 802.11",
      "IEEE 802.16"
    ],
    "answer": "IEEE 802.3",
    "explanation": "IEEE 802.3 is named as Ethernet and described as a broadcast network that resolves collision by waiting a random time.",
    "source": "Part01_02",
    "pages": "22",
    "likelihood": "High",
    "topic": "LAN standards"
  },
  {
    "id": "P0102-011",
    "type": "mcq",
    "question": "Which standard is associated with token ring in the notes?",
    "options": [
      "IEEE 802.5",
      "IEEE 802.3",
      "IEEE 802.11",
      "IEEE 802.16"
    ],
    "answer": "IEEE 802.5",
    "explanation": "The LAN discussion explicitly associates ring-based token ring with IEEE 802.5.",
    "source": "Part01_02",
    "pages": "22",
    "likelihood": "High",
    "topic": "LAN standards"
  },
  {
    "id": "P0102-012",
    "type": "comparison",
    "question": "Compare static and dynamic channel allocation for a broadcast network as described in the notes.",
    "options": [],
    "answer": "Static channel allocation uses time slots and a round-robin algorithm, but wastes channel capacity. Dynamic allocation may be centralized or decentralized and operates with a preset order.",
    "explanation": "These are the two listed subdivisions of broadcast-network channel allocation.",
    "source": "Part01_02",
    "pages": "22",
    "likelihood": "High",
    "topic": "Channel allocation"
  },
  {
    "id": "P0102-013",
    "type": "mcq",
    "question": "Which allocation method is specifically said to waste channel capacity?",
    "options": [
      "Static channel allocation",
      "Dynamic decentralized allocation",
      "Packet switching",
      "Multicasting"
    ],
    "answer": "Static channel allocation",
    "explanation": "Static allocation uses time slots and round robin; the notes explicitly state that it wastes channel capacity.",
    "source": "Part01_02",
    "pages": "22",
    "likelihood": "High",
    "topic": "Channel allocation"
  },
  {
    "id": "P0102-014",
    "type": "mcq",
    "question": "Which complete set contains only topology names listed in the notes?",
    "options": [
      "Bus, star, ring, token-ring, tree, mesh, fully connected",
      "Bus, star, ring, gateway, subnet, host, router",
      "Tree, mesh, Ethernet, Wi-Fi, LTE, GSM, GPRS",
      "Star, protocol, service, peer, layer, interface, stack"
    ],
    "answer": "Bus, star, ring, token-ring, tree, mesh, fully connected",
    "explanation": "The seven names in the correct option reproduce the topology list on pages 24 and 27.",
    "source": "Part01_02",
    "pages": "24, 27",
    "likelihood": "High",
    "topic": "Network topologies"
  },
  {
    "id": "P0102-015",
    "type": "comparison",
    "question": "State the criteria the notes require when comparing bus, star, ring, token-ring, tree, mesh, and fully connected topologies.",
    "options": [],
    "answer": "Compare them by: (1) architecture/organization, (2) delay/response time, (3) complexity, (4) security, (5) congestion control, (6) routing methodology, (7) reliability, and (8) cost.",
    "explanation": "The notes provide these eight comparison dimensions without supplying a full scored comparison table.",
    "source": "Part01_02",
    "pages": "26-27",
    "likelihood": "High",
    "topic": "Network topologies"
  },
  {
    "id": "P0102-016",
    "type": "mcq",
    "question": "Which item is NOT one of the stated criteria for comparing network topologies?",
    "options": [
      "Signal modulation",
      "Reliability",
      "Routing methodology",
      "Cost"
    ],
    "answer": "Signal modulation",
    "explanation": "Reliability, routing methodology, and cost are listed comparison criteria; signal modulation is not.",
    "source": "Part01_02",
    "pages": "26-27",
    "likelihood": "Medium",
    "topic": "Network topologies"
  },
  {
    "id": "P0102-017",
    "type": "mcq",
    "question": "In the WAN description, what are switching elements that connect three or more lines called?",
    "options": [
      "Routers",
      "Hosts",
      "Radio modems",
      "Gateways only"
    ],
    "answer": "Routers",
    "explanation": "The WAN consists of hosts, communication lines, and switching elements identified as routers that connect at least three lines.",
    "source": "Part01_02",
    "pages": "30",
    "likelihood": "High",
    "topic": "Wide area networks"
  },
  {
    "id": "P0102-018",
    "type": "mcq",
    "question": "Which exception is attached to the statement that a WAN works on a store-and-forward packet-switched subnet?",
    "options": [
      "Satellite-linked WANs cannot be packet switched",
      "Ethernet WANs cannot use routers",
      "Wireless LANs cannot connect to wired networks",
      "Token rings cannot carry packets"
    ],
    "answer": "Satellite-linked WANs cannot be packet switched",
    "explanation": "This exception appears as a note immediately after the store-and-forward description.",
    "source": "Part01_02",
    "pages": "30",
    "likelihood": "Medium",
    "topic": "Wide area networks"
  },
  {
    "id": "P0102-019",
    "type": "mcq",
    "question": "How are packets handled in the described WAN?",
    "options": [
      "They are transmitted individually and assembled at the destination",
      "They are assembled before entering the subnet and never separated",
      "They are always broadcast to every host",
      "They bypass all switching elements"
    ],
    "answer": "They are transmitted individually and assembled at the destination",
    "explanation": "Individual transmission and destination assembly are explicit WAN characteristics in the notes.",
    "source": "Part01_02",
    "pages": "30",
    "likelihood": "High",
    "topic": "Wide area networks"
  },
  {
    "id": "P0102-020",
    "type": "comparison",
    "question": "Compare the three categories into which wireless networks are divided in the notes.",
    "options": [],
    "answer": "System interconnection uses short-range radio; Bluetooth is given as an example and the simplest arrangement is master-slave. A wireless LAN uses IEEE 802.11 and is stated as operating above 50 Mbps. A wireless WAN includes mobile networks, is stated as below 1 Mbps in the category summary, and is exemplified as low-bandwidth mobile communication.",
    "explanation": "The answer integrates the category list with the immediately following descriptions of each category.",
    "source": "Part01_02",
    "pages": "32-35",
    "likelihood": "High",
    "topic": "Wireless networks"
  },
  {
    "id": "P0102-021",
    "type": "mcq",
    "question": "Which technology is given as the example of a short-range wireless network?",
    "options": [
      "Bluetooth",
      "LTE",
      "GPRS",
      "UMTS"
    ],
    "answer": "Bluetooth",
    "explanation": "Bluetooth is explicitly used as the example of short-range system interconnection.",
    "source": "Part01_02",
    "pages": "33",
    "likelihood": "High",
    "topic": "Wireless networks"
  },
  {
    "id": "P0102-022",
    "type": "mcq",
    "question": "Which standard is specified for wireless LANs?",
    "options": [
      "IEEE 802.11",
      "IEEE 802.16",
      "IEEE 802.5",
      "IEEE 802.3"
    ],
    "answer": "IEEE 802.11",
    "explanation": "The wireless LAN section names IEEE 802.11 and notes that each computer has a radio modem and antenna.",
    "source": "Part01_02",
    "pages": "32, 34",
    "likelihood": "High",
    "topic": "Wireless standards"
  },
  {
    "id": "P0102-023",
    "type": "mcq",
    "question": "Which standard is named as a high-speed wireless WAN standard?",
    "options": [
      "IEEE 802.16",
      "IEEE 802.11",
      "IEEE 802.5",
      "IEEE 802.3"
    ],
    "answer": "IEEE 802.16",
    "explanation": "The mobile/wireless WAN section explicitly names IEEE 802.16 as the high-speed standard.",
    "source": "Part01_02",
    "pages": "35",
    "likelihood": "High",
    "topic": "Wireless standards"
  },
  {
    "id": "P0102-024",
    "type": "comparison",
    "question": "Compare the first four mobile generations by their stated primary capability.",
    "options": [],
    "answer": "First generation: analog voice. Second generation: digital voice. Third generation: digital voice plus data. Fourth generation: Long Term Evolution (LTE).",
    "explanation": "This is the four-step generation sequence listed in the mobile-network section.",
    "source": "Part01_02",
    "pages": "35",
    "likelihood": "High",
    "topic": "Mobile generations"
  },
  {
    "id": "P0102-025",
    "type": "mcq",
    "question": "What theoretical maximum is stated for 4G LTE?",
    "options": [
      "100 Mbps or a bit more",
      "42 Mbps exactly",
      "10 Mbps",
      "384 Kbps"
    ],
    "answer": "100 Mbps or a bit more",
    "explanation": "The notes state that the theoretical maximum reaches 100 Mbps or a little more, while actual performance is lower.",
    "source": "Part01_02",
    "pages": "36",
    "likelihood": "High",
    "topic": "Mobile data rates"
  },
  {
    "id": "P0102-026",
    "type": "mcq",
    "question": "Which mobile standard is described as a software upgrade to UMTS, with a theoretical rate of 42 Mbps?",
    "options": [
      "HSPA",
      "EDGE",
      "GPRS",
      "GSM"
    ],
    "answer": "HSPA",
    "explanation": "HSPA is explicitly described as a software upgrade to UMTS and assigned a theoretical 42 Mbps.",
    "source": "Part01_02",
    "pages": "36",
    "likelihood": "High",
    "topic": "Mobile data rates"
  },
  {
    "id": "P0102-027",
    "type": "mcq",
    "question": "Which pairing matches the stated real-life speed range?",
    "options": [
      "EDGE: 120 Kbps to 384 Kbps",
      "GSM: 3 Mbps to 10 Mbps",
      "UMTS: 35 Kbps to 171 Kbps",
      "GPRS: 600 Kbps to 10 Mbps"
    ],
    "answer": "EDGE: 120 Kbps to 384 Kbps",
    "explanation": "The table gives EDGE (2.75G) as 120-384 Kbps; the other ranges belong to different technologies.",
    "source": "Part01_02",
    "pages": "36",
    "likelihood": "High",
    "topic": "Mobile data rates"
  },
  {
    "id": "P0102-028",
    "type": "comparison",
    "question": "Distinguish a subnet, a network, and an internetwork, and identify the role of a gateway.",
    "options": [],
    "answer": "A subnet is the collection of routers and communication lines owned by the network operator. A network is the subnet plus hosts. An internetwork is formed when distinct networks, possibly under different owners or using different technologies, are connected; the Internet is the best example given. Gateways connect different and possibly incompatible networks.",
    "explanation": "The notes warn that these terms are often confused and give explicit definitions for all three.",
    "source": "Part01_02",
    "pages": "38",
    "likelihood": "High",
    "topic": "Subnetworks and internetworks"
  },
  {
    "id": "P03-001",
    "type": "mcq",
    "question": "Why are networks organized as a stack of layers or levels?",
    "options": [
      "To reduce complexity",
      "To eliminate all interfaces",
      "To ensure every layer uses the same protocol",
      "To transfer data directly between all peer layers"
    ],
    "answer": "To reduce complexity",
    "explanation": "The first stated motivation for layered organization is reducing network complexity.",
    "source": "Part03",
    "pages": "3",
    "likelihood": "High",
    "topic": "Layered architecture"
  },
  {
    "id": "P03-002",
    "type": "mcq",
    "question": "What is the purpose of each layer in the stated layered model?",
    "options": [
      "To offer service to the higher layers",
      "To communicate only with noncorresponding layers",
      "To replace the physical medium",
      "To hide all services from users"
    ],
    "answer": "To offer service to the higher layers",
    "explanation": "Each layer is described as a virtual machine whose purpose is to offer service upward.",
    "source": "Part03",
    "pages": "3",
    "likelihood": "High",
    "topic": "Layered architecture"
  },
  {
    "id": "P03-003",
    "type": "mcq",
    "question": "What are entities in corresponding layers on different machines called?",
    "options": [
      "Peers",
      "Interfaces",
      "Primitives",
      "Gateways"
    ],
    "answer": "Peers",
    "explanation": "The notes define entities comprising corresponding layers as peers.",
    "source": "Part03",
    "pages": "3",
    "likelihood": "High",
    "topic": "Layered architecture"
  },
  {
    "id": "P03-004",
    "type": "comparison",
    "question": "Distinguish a protocol, a network architecture, and a protocol stack.",
    "options": [],
    "answer": "A protocol is an agreement between communicating parties. A network architecture is the set of layers and protocols. A protocol stack is the list of protocols used by one machine.",
    "explanation": "These three compact definitions appear together and are easy to confuse.",
    "source": "Part03",
    "pages": "3",
    "likelihood": "High",
    "topic": "Layered architecture"
  },
  {
    "id": "P03-005",
    "type": "mcq",
    "question": "At which layer does data actually transfer directly through the physical medium?",
    "options": [
      "The lowest layer",
      "Every peer layer",
      "Only the highest layer",
      "Every interface equally"
    ],
    "answer": "The lowest layer",
    "explanation": "The notes emphasize that no data is directly transferred between peer layers except at the lowest layer via the physical medium.",
    "source": "Part03",
    "pages": "3",
    "likelihood": "High",
    "topic": "Layered architecture"
  },
  {
    "id": "P03-006",
    "type": "comparison",
    "question": "Explain the two stated design benefits of clean interfaces between layers.",
    "options": [],
    "answer": "First, a clean interface minimizes the amount of information that must pass between layers. Second, it makes it simpler to replace the implementation of one layer completely without forcing changes elsewhere, provided the interface is preserved.",
    "explanation": "The second point is illustrated by translators changing their common language or secretaries changing the transmission method without disturbing other layers.",
    "source": "Part03",
    "pages": "4, 8",
    "likelihood": "High",
    "topic": "Layer interfaces"
  },
  {
    "id": "P03-007",
    "type": "mcq",
    "question": "In the philosopher-translator-secretary analogy, what represents the layer 2 protocol?",
    "options": [
      "The agreed neutral language used by the translators",
      "The philosophers' original languages",
      "The interface between philosopher and translator",
      "The physical fax paper alone"
    ],
    "answer": "The agreed neutral language used by the translators",
    "explanation": "The translators agree on Dutch; the choice of that shared language is identified as the layer 2 protocol.",
    "source": "Part03",
    "pages": "6-7",
    "likelihood": "High",
    "topic": "Layering analogy"
  },
  {
    "id": "P03-008",
    "type": "mcq",
    "question": "What change can the secretary peers make without disturbing other layers, provided their interfaces remain unchanged?",
    "options": [
      "Switch from fax to e-mail or telephone",
      "Remove the layer 2/3 interface",
      "Make the philosophers share a language",
      "Pass peer-only information upward"
    ],
    "answer": "Switch from fax to e-mail or telephone",
    "explanation": "The analogy uses this as evidence that a protocol can change independently when surrounding interfaces do not change.",
    "source": "Part03",
    "pages": "8",
    "likelihood": "Medium",
    "topic": "Layering analogy"
  },
  {
    "id": "P03-009",
    "type": "comparison",
    "question": "Compare the encapsulation actions performed by layers 4, 3, and 2 in the example.",
    "options": [],
    "answer": "Layer 4 places header H4 on message M, possibly including a serial number. Layer 3 may divide the message into M1 and M2 and adds its own H3 header to each part. Layer 2 may add both a header H2 and a trailer T2.",
    "explanation": "The item tests both segmentation and the distinct control information added at successive layers.",
    "source": "Part03",
    "pages": "10",
    "likelihood": "High",
    "topic": "Encapsulation"
  },
  {
    "id": "P03-010",
    "type": "mcq",
    "question": "Which layer in the example may break message M into M1 and M2?",
    "options": [
      "Layer 3",
      "Layer 4",
      "Layer 2",
      "The physical medium only"
    ],
    "answer": "Layer 3",
    "explanation": "Layer 3 may segment the message and add H3 to each resulting part.",
    "source": "Part03",
    "pages": "10",
    "likelihood": "High",
    "topic": "Encapsulation"
  },
  {
    "id": "P03-011",
    "type": "mcq",
    "question": "Which mechanism matches sender and receiver speeds?",
    "options": [
      "Flow control",
      "Addressing",
      "Routing",
      "Multiplexing"
    ],
    "answer": "Flow control",
    "explanation": "The network design issues list explicitly defines flow control in terms of matching sender and receiver speeds.",
    "source": "Part03",
    "pages": "11",
    "likelihood": "High",
    "topic": "Network design issues"
  },
  {
    "id": "P03-012",
    "type": "mcq",
    "question": "Why are sequence numbers inserted into sub-messages?",
    "options": [
      "To let the receiver assemble the full message",
      "To select the physical medium",
      "To replace destination addresses",
      "To avoid all acknowledgements"
    ],
    "answer": "To let the receiver assemble the full message",
    "explanation": "Sequence numbers permit correct reconstruction after a message has been divided into sub-messages.",
    "source": "Part03",
    "pages": "11",
    "likelihood": "High",
    "topic": "Network design issues"
  },
  {
    "id": "P03-013",
    "type": "comparison",
    "question": "Compare connection-oriented and connectionless service using the characteristics stated in the notes.",
    "options": [],
    "answer": "Connection-oriented service resembles the telephone system: establish a connection, use it, then release it; bits arrive in sent order, and sender and receiver may negotiate maximum message size and quality of service. In connectionless service, every message carries the full destination address, is routed independently, and sub-messages may arrive out of order. Connectionless delivery may be acknowledged; unacknowledged connectionless service is called datagram service, and request-reply is another important service.",
    "explanation": "This point-by-point contrast captures setup, addressing, routing, ordering, negotiation, and acknowledgement behavior.",
    "source": "Part03",
    "pages": "12-14",
    "likelihood": "High",
    "topic": "Service types"
  },
  {
    "id": "P03-014",
    "type": "mcq",
    "question": "What is the correct sequence for connection-oriented service?",
    "options": [
      "Establish, use, release",
      "Use, establish, acknowledge",
      "Route, broadcast, release",
      "Listen, disconnect, connect"
    ],
    "answer": "Establish, use, release",
    "explanation": "The telephone-system analogy gives these three stages in this exact order.",
    "source": "Part03",
    "pages": "13",
    "likelihood": "High",
    "topic": "Service types"
  },
  {
    "id": "P03-015",
    "type": "mcq",
    "question": "Which service name denotes unacknowledged connectionless service?",
    "options": [
      "Datagram service",
      "Byte-stream service",
      "Connection-oriented service",
      "LISTEN service"
    ],
    "answer": "Datagram service",
    "explanation": "The connectionless-service discussion explicitly defines unacknowledged service as datagram service.",
    "source": "Part03",
    "pages": "14",
    "likelihood": "High",
    "topic": "Service types"
  },
  {
    "id": "P03-016",
    "type": "mcq",
    "question": "Why might acknowledgement be undesirable for digitized voice or other real-time multimedia?",
    "options": [
      "It may add delay",
      "It removes the destination address",
      "It guarantees packet reordering",
      "It prevents all routing"
    ],
    "answer": "It may add delay",
    "explanation": "The notes caution that acknowledgements can introduce delays in multimedia and real-time systems.",
    "source": "Part03",
    "pages": "14, 16",
    "likelihood": "High",
    "topic": "Reliability and delay"
  },
  {
    "id": "P03-017",
    "type": "mcq",
    "question": "How is a service formally specified?",
    "options": [
      "By a set of primitives available to a user process",
      "By a topology comparison table",
      "By a single packet header",
      "By the physical medium alone"
    ],
    "answer": "By a set of primitives available to a user process",
    "explanation": "Service primitives are operations through which a user process accesses a service or receives reports about peer actions.",
    "source": "Part03",
    "pages": "17",
    "likelihood": "High",
    "topic": "Service primitives"
  },
  {
    "id": "P03-018",
    "type": "mcq",
    "question": "When a protocol stack resides in the operating system, what are its service primitives normally?",
    "options": [
      "System calls",
      "Routing tables",
      "Radio signals",
      "Peer headers"
    ],
    "answer": "System calls",
    "explanation": "Such primitives are normally system calls that trap to kernel mode and give control to the operating system.",
    "source": "Part03",
    "pages": "17",
    "likelihood": "High",
    "topic": "Service primitives"
  },
  {
    "id": "P03-019",
    "type": "comparison",
    "question": "Describe the roles and blocking behavior of LISTEN, CONNECT, RECEIVE, SEND, and DISCONNECT in the simple client-server example.",
    "options": [],
    "answer": "LISTEN is issued by the server to announce readiness and is commonly blocking until a connection request arrives. CONNECT is issued by the client with the server address and suspends the client until a response. RECEIVE prepares a process to accept data and blocks it until data arrives. SEND transmits the client's request or the server's answer. DISCONNECT terminates the connection; the initial client call is usually blocking, the server responds with its own DISCONNECT, and the returning packet releases the client.",
    "explanation": "The model answer distinguishes all five primitives and links each to the side that uses it and its effect on process state.",
    "source": "Part03",
    "pages": "19, 21-25",
    "likelihood": "High",
    "topic": "Client-server primitives"
  },
  {
    "id": "P03-020",
    "type": "mcq",
    "question": "What normally happens to the server immediately after it executes a blocking LISTEN?",
    "options": [
      "It is blocked until a connection request appears",
      "It sends the application reply immediately",
      "It disconnects the client",
      "It begins receiving before any request can exist"
    ],
    "answer": "It is blocked until a connection request appears",
    "explanation": "LISTEN indicates readiness, and the server process remains blocked until an incoming connection request arrives.",
    "source": "Part03",
    "pages": "21",
    "likelihood": "High",
    "topic": "Client-server primitives"
  },
  {
    "id": "P03-021",
    "type": "mcq",
    "question": "When the server operating system finds a listener for an incoming connection request, which two actions does it take?",
    "options": [
      "Unblocks the listener and sends an acknowledgement",
      "Blocks the listener and discards the request",
      "Sends the application answer and disconnects",
      "Queues the listener and removes the client address"
    ],
    "answer": "Unblocks the listener and sends an acknowledgement",
    "explanation": "These are the two explicit operating-system actions; arrival of the acknowledgement releases the client.",
    "source": "Part03",
    "pages": "22",
    "likelihood": "High",
    "topic": "Client-server primitives"
  },
  {
    "id": "P03-022",
    "type": "mcq",
    "question": "After the server is released from LISTEN, which primitive does it normally execute to prepare for the first request?",
    "options": [
      "RECEIVE",
      "DISCONNECT",
      "CONNECT",
      "LISTEN again"
    ],
    "answer": "RECEIVE",
    "explanation": "The server normally issues RECEIVE immediately; that call blocks it until the client's request arrives.",
    "source": "Part03",
    "pages": "23",
    "likelihood": "High",
    "topic": "Client-server primitives"
  },
  {
    "id": "P03-023",
    "type": "comparison",
    "question": "Compare the ideal packet count for simple connectionless request-reply with the packet count in the presented connection-oriented protocol, and explain why the latter can still be justified.",
    "options": [],
    "answer": "In a perfect world, connectionless request-reply needs two packets: one request and one reply. The presented connection-oriented protocol requires six packets to establish, exchange data, and release the connection. The extra mechanism is justified in the real world by large multi-packet messages, transmission errors, lost packets, uncertainty about missing or final pieces, and the need to distinguish packets belonging to successive files.",
    "explanation": "The comparison tests both the numerical fact and the reliability problems that make a bare two-packet exchange inadequate.",
    "source": "Part03",
    "pages": "25-28",
    "likelihood": "High",
    "topic": "Connection protocol rationale"
  },
  {
    "id": "P03-024",
    "type": "mcq",
    "question": "How many packets are required to complete the connection-oriented protocol discussed in the notes?",
    "options": [
      "Six",
      "Two",
      "Four",
      "Eight"
    ],
    "answer": "Six",
    "explanation": "The notes explicitly state that six packets complete the presented protocol.",
    "source": "Part03",
    "pages": "25, 27",
    "likelihood": "High",
    "topic": "Connection protocol rationale"
  },
  {
    "id": "P03-025",
    "type": "mcq",
    "question": "Which ambiguity is used to show a problem with simple request-reply over an unreliable network when a client asks for a second file?",
    "options": [
      "A packet 1 may be from the second file or a delayed packet 1 from the first",
      "The server address becomes identical to the client address",
      "The physical medium changes into an interface",
      "Every packet necessarily arrives twice"
    ],
    "answer": "A packet 1 may be from the second file or a delayed packet 1 from the first",
    "explanation": "The example highlights the difficulty of associating delayed or lost packets with the correct transfer.",
    "source": "Part03",
    "pages": "27",
    "likelihood": "High",
    "topic": "Connection protocol rationale"
  },
  {
    "id": "P03-026",
    "type": "comparison",
    "question": "Compare a service and a protocol in terms of definition, relationship, and freedom to change.",
    "options": [],
    "answer": "A service is the set of primitives a lower layer provides to the layer above; it defines what operations are available but not how they are implemented, and it belongs to the interface between provider and user layers. A protocol is the set of rules governing the format and meaning of packets or messages exchanged by peer entities within a layer; peer entities use it to implement services. A protocol may be changed as long as the service visible to users remains unchanged.",
    "explanation": "Services describe what is offered vertically at an interface, whereas protocols describe how peers communicate horizontally across machines.",
    "source": "Part03",
    "pages": "29-33",
    "likelihood": "High",
    "topic": "Services versus protocols"
  },
  {
    "id": "P03-027",
    "type": "mcq",
    "question": "Which statement correctly captures the relationship between services and protocols?",
    "options": [
      "Services relate to interfaces between layers; protocols relate to packets exchanged by peer entities",
      "Services define packet formats; protocols only list user operations",
      "Services and protocols are identical concepts",
      "Protocols may change only if the visible service also changes"
    ],
    "answer": "Services relate to interfaces between layers; protocols relate to packets exchanged by peer entities",
    "explanation": "This is the notes' final concise distinction between the two frequently confused concepts.",
    "source": "Part03",
    "pages": "31-33",
    "likelihood": "High",
    "topic": "Services versus protocols"
  },
  {
    "id": "Q001",
    "type": "mcq",
    "question": "Which OSI design principle specifically concerns layer boundaries?",
    "options": [
      "Maximize information flow",
      "Minimize information flow across interfaces",
      "Combine distinct functions",
      "Always add layers"
    ],
    "answer": "Minimize information flow across interfaces",
    "explanation": "Boundaries should minimize interface information flow; layers should have well-defined functions and remain manageable.",
    "source": "Part04",
    "pages": "4",
    "likelihood": "High",
    "topic": "OSI design principles"
  },
  {
    "id": "Q002",
    "type": "mcq",
    "question": "Which issue belongs to the OSI physical layer?",
    "options": [
      "Voltage representing a bit",
      "Dynamic routing",
      "Dialog control",
      "Data syntax"
    ],
    "answer": "Voltage representing a bit",
    "explanation": "Physical covers raw bits and mechanical, electrical, timing, direction, connection, and connector properties.",
    "source": "Part04",
    "pages": "5",
    "likelihood": "High",
    "topic": "Physical layer"
  },
  {
    "id": "Q003",
    "type": "mcq",
    "question": "What is the main task of the data link layer?",
    "options": [
      "Translate syntax",
      "Make a raw facility appear free of undetected errors to network layer",
      "Route heterogeneous networks",
      "Establish sessions"
    ],
    "answer": "Make a raw facility appear free of undetected errors to network layer",
    "explanation": "It uses data frames, acknowledgements, and rate regulation.",
    "source": "Part04",
    "pages": "6",
    "likelihood": "High",
    "topic": "Data link layer"
  },
  {
    "id": "Q004",
    "type": "mcq",
    "question": "What data-link addition may regulate access to a shared broadcast channel?",
    "options": [
      "Presentation translator",
      "Medium access control sublayer",
      "Transport gateway",
      "Session token"
    ],
    "answer": "Medium access control sublayer",
    "explanation": "The MAC sublayer controls shared-channel access.",
    "source": "Part04",
    "pages": "6",
    "likelihood": "High",
    "topic": "MAC"
  },
  {
    "id": "Q005",
    "type": "mcq",
    "question": "Which is a network-layer responsibility?",
    "options": [
      "Routing and congestion control",
      "Pin assignment",
      "Token management",
      "E-mail service"
    ],
    "answer": "Routing and congestion control",
    "explanation": "It controls the subnet, QoS, and heterogeneous interconnection; routing may be static or dynamic.",
    "source": "Part04",
    "pages": "7",
    "likelihood": "High",
    "topic": "Network layer"
  },
  {
    "id": "Q006",
    "type": "mcq",
    "question": "When may an OSI network layer be absent?",
    "options": [
      "In point-to-point networks",
      "In broadcast networks where routing is nonexistent",
      "Whenever TCP is used",
      "Whenever frames are acknowledged"
    ],
    "answer": "In broadcast networks where routing is nonexistent",
    "explanation": "The slide explicitly notes this exception.",
    "source": "Part04",
    "pages": "7",
    "likelihood": "Medium",
    "topic": "Network layer"
  },
  {
    "id": "Q007",
    "type": "mcq",
    "question": "Which best describes the transport layer?",
    "options": [
      "Defines voltage",
      "Splits upper-layer data, passes units down, and ensures correct end-to-end arrival",
      "Only controls shared access",
      "Defines HTTP"
    ],
    "answer": "Splits upper-layer data, passes units down, and ensures correct end-to-end arrival",
    "explanation": "It also isolates upper layers from lower-layer technology changes.",
    "source": "Part04",
    "pages": "8",
    "likelihood": "High",
    "topic": "Transport layer"
  },
  {
    "id": "Q008",
    "type": "mcq",
    "question": "Which functions belong to the session layer?",
    "options": [
      "Routing and QoS",
      "Dialog control, token management, crash synchronization",
      "Pins and timing",
      "Syntax translation"
    ],
    "answer": "Dialog control, token management, crash synchronization",
    "explanation": "They support sessions between users on different machines.",
    "source": "Part04",
    "pages": "9",
    "likelihood": "High",
    "topic": "Session layer"
  },
  {
    "id": "Q009",
    "type": "mcq",
    "question": "Which layer handles syntax and semantics across different data representations?",
    "options": [
      "Presentation",
      "Physical",
      "Network",
      "Data link"
    ],
    "answer": "Presentation",
    "explanation": "Its role enables computers with different representations to communicate.",
    "source": "Part04",
    "pages": "10",
    "likelihood": "High",
    "topic": "Presentation layer"
  },
  {
    "id": "Q010",
    "type": "mcq",
    "question": "Which are application-layer examples?",
    "options": [
      "HTTP, e-mail, file transfer",
      "Voltages, pins, timing",
      "Routing, jitter, congestion",
      "Frames, ACKs, MAC"
    ],
    "answer": "HTTP, e-mail, file transfer",
    "explanation": "These are explicitly listed application protocols/services.",
    "source": "Part04",
    "pages": "11",
    "likelihood": "High",
    "topic": "Application layer"
  },
  {
    "id": "Q011",
    "type": "mcq",
    "question": "What problem helped motivate TCP/IP?",
    "options": [
      "Connector pin count",
      "Internetworking leased-line ARPANET with satellite and radio networks",
      "Lack of e-mail",
      "Mechanical Teletype replacement"
    ],
    "answer": "Internetworking leased-line ARPANET with satellite and radio networks",
    "explanation": "Surviving loss of subnet hardware was another key goal.",
    "source": "Part04",
    "pages": "12",
    "likelihood": "High",
    "topic": "TCP/IP origins"
  },
  {
    "id": "Q012",
    "type": "mcq",
    "question": "What official protocol does the TCP/IP Internet layer define?",
    "options": [
      "HTTP",
      "IP",
      "TELNET",
      "SMTP"
    ],
    "answer": "IP",
    "explanation": "Routing is its major concern, making it similar to the OSI network layer.",
    "source": "Part04",
    "pages": "14",
    "likelihood": "High",
    "topic": "Internet layer"
  },
  {
    "id": "Q013",
    "type": "mcq",
    "question": "Which pair are TCP/IP transport protocols?",
    "options": [
      "HTTP and FTP",
      "IP and DNS",
      "TCP and UDP",
      "SMTP and TELNET"
    ],
    "answer": "TCP and UDP",
    "explanation": "Both are explicitly introduced at the transport layer.",
    "source": "Part04",
    "pages": "17",
    "likelihood": "High",
    "topic": "Transport protocols"
  },
  {
    "id": "Q014",
    "type": "mcq",
    "question": "Which statement characterizes TCP?",
    "options": [
      "Unreliable and connectionless",
      "Reliable connection-oriented byte stream with flow control",
      "Only one-shot queries",
      "Promptness over accuracy"
    ],
    "answer": "Reliable connection-oriented byte stream with flow control",
    "explanation": "TCP fragments the stream and prevents a fast sender from swamping a slow receiver.",
    "source": "Part04",
    "pages": "18",
    "likelihood": "High",
    "topic": "TCP"
  },
  {
    "id": "Q015",
    "type": "mcq",
    "question": "Which workload is a principal UDP use?",
    "options": [
      "Error-free streams",
      "One-shot client-server request-reply queries",
      "Leased-line emulation",
      "Reserved-resource setup"
    ],
    "answer": "One-shot client-server request-reply queries",
    "explanation": "UDP is unreliable/connectionless and also suits speech/video where promptness outranks accuracy.",
    "source": "Part04",
    "pages": "19",
    "likelihood": "High",
    "topic": "UDP"
  },
  {
    "id": "Q016",
    "type": "mcq",
    "question": "Which TCP/IP weakness is stated on page 20?",
    "options": [
      "No application protocols",
      "Host-to-network is barely defined and varies greatly",
      "Seven overfull layers",
      "Cannot route IP"
    ],
    "answer": "Host-to-network is barely defined and varies greatly",
    "explanation": "This contrasts with its many named high-level protocols.",
    "source": "Part04",
    "pages": "20",
    "likelihood": "High",
    "topic": "TCP/IP limitations"
  },
  {
    "id": "Q017",
    "type": "mcq",
    "question": "Why is OSI described as general and unbiased?",
    "options": [
      "It preceded its protocols",
      "It merged lower layers",
      "It used only UNIX",
      "It omitted services"
    ],
    "answer": "It preceded its protocols",
    "explanation": "TCP/IP, unlike OSI, did not distinguish services, interfaces, and protocols clearly.",
    "source": "Part04",
    "pages": "21",
    "likelihood": "Medium",
    "topic": "OSI model"
  },
  {
    "id": "Q018",
    "type": "mcq",
    "question": "Which set gives the four lessons for OSI's failure?",
    "options": [
      "Routing, billing, framing, syntax",
      "Bad timing, technology, implementations, politics",
      "Voltages, sessions, connectors, apps",
      "Standards, packets, cells, circuits"
    ],
    "answer": "Bad timing, technology, implementations, politics",
    "explanation": "These four are explicitly enumerated.",
    "source": "Part04",
    "pages": "24",
    "likelihood": "High",
    "topic": "OSI failure"
  },
  {
    "id": "Q019",
    "type": "mcq",
    "question": "When should a standard ideally be written?",
    "options": [
      "Before research",
      "During initial research burst",
      "In the trough between research and investment waves",
      "After incompatible investments"
    ],
    "answer": "In the trough between research and investment waves",
    "explanation": "Too early means poor understanding; too late means entrenched investments.",
    "source": "Part04",
    "pages": "25",
    "likelihood": "High",
    "topic": "Standards timing"
  },
  {
    "id": "Q020",
    "type": "mcq",
    "question": "Which criticism is made of the seven OSI layers?",
    "options": [
      "All equally full",
      "Session/presentation nearly empty; data link/network overfull",
      "Physical/application omitted",
      "Only routing repeats"
    ],
    "answer": "Session/presentation nearly empty; data link/network overfull",
    "explanation": "The seven-layer choice was called more political than technical.",
    "source": "Part04",
    "pages": "28",
    "likelihood": "High",
    "topic": "OSI technology"
  },
  {
    "id": "Q021",
    "type": "mcq",
    "question": "What aided TCP/IP adoption?",
    "options": [
      "Expensive government systems",
      "A good free Berkeley UNIX implementation",
      "Mandatory dual stacks",
      "Very large printed standards"
    ],
    "answer": "A good free Berkeley UNIX implementation",
    "explanation": "It drove a user-community/improvement feedback loop, unlike poor initial OSI implementations.",
    "source": "Part04",
    "pages": "29",
    "likelihood": "High",
    "topic": "Adoption"
  },
  {
    "id": "Q022",
    "type": "mcq",
    "question": "What is the TCP/IP host-to-network layer said really to be?",
    "options": [
      "Application layer",
      "Interface between network and data link layers",
      "TCP replacement",
      "Session protocol"
    ],
    "answer": "Interface between network and data link layers",
    "explanation": "It is not a layer in the normal layered-protocol sense.",
    "source": "Part04",
    "pages": "31",
    "likelihood": "High",
    "topic": "TCP/IP limitations"
  },
  {
    "id": "Q023",
    "type": "mcq",
    "question": "Which layers does TCP/IP not distinguish or even mention?",
    "options": [
      "Session/application",
      "Transport/network",
      "Physical/data link",
      "Presentation/application"
    ],
    "answer": "Physical/data link",
    "explanation": "This is a stated model criticism.",
    "source": "Part04",
    "pages": "32",
    "likelihood": "High",
    "topic": "TCP/IP limitations"
  },
  {
    "id": "Q024",
    "type": "mcq",
    "question": "What final framework does Part 4 adopt?",
    "options": [
      "Pure OSI",
      "Pure TCP/IP",
      "Hybrid/modified OSI emphasizing TCP/IP-related protocols",
      "Telephone model"
    ],
    "answer": "Hybrid/modified OSI emphasizing TCP/IP-related protocols",
    "explanation": "The OSI model is useful for discussion, while TCP/IP protocols are widely used.",
    "source": "Part04",
    "pages": "33-34",
    "likelihood": "High",
    "topic": "Hybrid model"
  },
  {
    "id": "Q025",
    "type": "mcq",
    "question": "Which facts describe the original ARPANET subnet?",
    "options": [
      "56-kbps IMPs, each linked to at least two others",
      "622-Mbps ATM cells",
      "X.25 3-byte packets only",
      "Ethernet permanent circuits"
    ],
    "answer": "56-kbps IMPs, each linked to at least two others",
    "explanation": "IMPs were Interface Message Processors; ARPANET was a datagram network.",
    "source": "Part05",
    "pages": "3",
    "likelihood": "High",
    "topic": "ARPANET"
  },
  {
    "id": "Q026",
    "type": "mcq",
    "question": "What gives a connectionless subnet fault tolerance?",
    "options": [
      "One fixed route",
      "Independent packet routing and dynamic rerouting after failures",
      "Failure always aborts session",
      "Advance reservation"
    ],
    "answer": "Independent packet routing and dynamic rerouting after failures",
    "explanation": "Later packets can use different routes if routers fail.",
    "source": "Part05",
    "pages": "7",
    "likelihood": "High",
    "topic": "Connectionless networks"
  },
  {
    "id": "Q027",
    "type": "mcq",
    "question": "In telephone-style connection-oriented service, what precedes data?",
    "options": [
      "Independent routing",
      "Connection setup establishing a maintained route",
      "No route selection",
      "Receiver-only reservation"
    ],
    "answer": "Connection setup establishing a maintained route",
    "explanation": "All packets follow it; path failure aborts the call.",
    "source": "Part05",
    "pages": "8",
    "likelihood": "High",
    "topic": "Connection-oriented networks"
  },
  {
    "id": "Q028",
    "type": "mcq",
    "question": "Why do telephone companies favor connections?",
    "options": [
      "Routing and framing",
      "Quality of service and billing",
      "Syntax and semantics",
      "Pins and errors"
    ],
    "answer": "Quality of service and billing",
    "explanation": "Setup enables resource reservation and makes connect-time charging easy.",
    "source": "Part05",
    "pages": "9-11",
    "likelihood": "High",
    "topic": "Connection rationale"
  },
  {
    "id": "Q029",
    "type": "mcq",
    "question": "How can connection setup improve QoS?",
    "options": [
      "Remove headers",
      "Reserve buffers/CPU and reject calls if resources are insufficient",
      "Retransmit everything",
      "Remove routing tables"
    ],
    "answer": "Reserve buffers/CPU and reject calls if resources are insufficient",
    "explanation": "An admitted call then receives good service.",
    "source": "Part05",
    "pages": "10",
    "likelihood": "High",
    "topic": "QoS"
  },
  {
    "id": "Q030",
    "type": "mcq",
    "question": "Which statement about X.25 is correct?",
    "options": [
      "First connectionless public network",
      "First connection-oriented public data network, deployed in 1970s",
      "Replaced frame relay",
      "Used 53-byte cells"
    ],
    "answer": "First connection-oriented public data network, deployed in 1970s",
    "explanation": "A remote connection received a connection number used in data packets.",
    "source": "Part05",
    "pages": "12",
    "likelihood": "High",
    "topic": "X.25"
  },
  {
    "id": "Q031",
    "type": "mcq",
    "question": "What X.25 packet format is stated?",
    "options": [
      "5-byte header + 48 data",
      "3-byte header + up to 128 data",
      "12-byte header + 56 data",
      "No header + 128 data"
    ],
    "answer": "3-byte header + up to 128 data",
    "explanation": "Header fields included a 12-bit connection number, sequence and acknowledgement numbers.",
    "source": "Part05",
    "pages": "13",
    "likelihood": "High",
    "topic": "X.25 format"
  },
  {
    "id": "Q032",
    "type": "mcq",
    "question": "Which combination characterizes frame relay?",
    "options": [
      "Connectionless with controls",
      "Connection-oriented, no error/flow control, in-order",
      "Fixed 53-byte cells",
      "Connectionless ordered"
    ],
    "answer": "Connection-oriented, no error/flow control, in-order",
    "explanation": "It resembles a Wide Area LAN and interconnected company LANs.",
    "source": "Part05",
    "pages": "14",
    "likelihood": "High",
    "topic": "Frame relay"
  },
  {
    "id": "Q033",
    "type": "mcq",
    "question": "Why is ATM called asynchronous?",
    "options": [
      "Variable cells",
      "Telephone transmission is mostly synchronous whereas ATM is not",
      "No connections",
      "Software routing"
    ],
    "answer": "Telephone transmission is mostly synchronous whereas ATM is not",
    "explanation": "This contrast explains the name.",
    "source": "Part05",
    "pages": "15",
    "likelihood": "Medium",
    "topic": "ATM"
  },
  {
    "id": "Q034",
    "type": "mcq",
    "question": "What happens while an ATM setup packet crosses the subnet?",
    "options": [
      "Tables are discarded",
      "Routers record the connection and reserve resources",
      "Cell size changes",
      "Service becomes datagram"
    ],
    "answer": "Routers record the connection and reserve resources",
    "explanation": "ATM requires setup because it is connection-oriented.",
    "source": "Part05",
    "pages": "17",
    "likelihood": "High",
    "topic": "ATM setup"
  },
  {
    "id": "Q035",
    "type": "mcq",
    "question": "What is an ATM permanent virtual circuit?",
    "options": [
      "Independent route per cell",
      "Permanent distant-host connection like a leased line",
      "Physical circuit without ID",
      "Broadcast copy"
    ],
    "answer": "Permanent distant-host connection like a leased line",
    "explanation": "Temporary and permanent connections each have a unique identifier.",
    "source": "Part05",
    "pages": "19",
    "likelihood": "High",
    "topic": "ATM circuits"
  },
  {
    "id": "Q036",
    "type": "mcq",
    "question": "What is an ATM cell exactly?",
    "options": [
      "53 bytes: 5 header + 48 payload",
      "48: 5 + 43",
      "128: 3 + 125",
      "56: 8 + 48"
    ],
    "answer": "53 bytes: 5 header + 48 payload",
    "explanation": "The header contains connection-identifying information for routing.",
    "source": "Part05",
    "pages": "20",
    "likelihood": "High",
    "topic": "ATM cells"
  },
  {
    "id": "Q037",
    "type": "mcq",
    "question": "Which is NOT a stated benefit of short fixed ATM cells?",
    "options": [
      "Efficient hardware routers",
      "Copying to multiple outputs",
      "Less line blocking helps QoS",
      "No cell can be lost"
    ],
    "answer": "No cell can be lost",
    "explanation": "Delivery is not guaranteed; the other three are stated advantages.",
    "source": "Part05",
    "pages": "22-23",
    "likelihood": "High",
    "topic": "ATM cells"
  },
  {
    "id": "Q038",
    "type": "mcq",
    "question": "Which common ATM speeds are stated?",
    "options": [
      "56/128 kbps",
      "10/100 Mbps",
      "155/622 Mbps",
      "1/10 Gbps"
    ],
    "answer": "155/622 Mbps",
    "explanation": "155.52 matches SONET; 622 carries four 155-Mbps channels, and 155 approximates HDTV need.",
    "source": "Part05",
    "pages": "24",
    "likelihood": "High",
    "topic": "ATM speeds"
  },
  {
    "id": "Q039",
    "type": "comparison",
    "question": "Compare OSI physical and data link responsibilities.",
    "options": [],
    "answer": "Physical transmits raw bits and specifies mechanical/electrical/timing/connector details. Data link creates an apparently undetected-error-free line using frames, acknowledgements, rate regulation, and possibly MAC.",
    "explanation": "Framing/ACKs are data-link, not physical.",
    "source": "Part04",
    "pages": "5-6",
    "likelihood": "High",
    "topic": "OSI lower layers"
  },
  {
    "id": "Q040",
    "type": "comparison",
    "question": "Compare OSI network and transport layers.",
    "options": [],
    "answer": "Network controls the subnet: routing, congestion, QoS, and heterogeneous interconnection. Transport splits upper data, passes units down, ensures correct end-to-end arrival, and isolates upper layers from lower technology.",
    "explanation": "Network is subnet-oriented; transport is end-to-end.",
    "source": "Part04",
    "pages": "7-8",
    "likelihood": "High",
    "topic": "Network vs transport"
  },
  {
    "id": "Q041",
    "type": "comparison",
    "question": "Compare session, presentation, and application layers.",
    "options": [],
    "answer": "Session provides dialog control, tokens, and crash synchronization; presentation handles syntax/semantics across representations; application includes HTTP, e-mail, and file transfer.",
    "explanation": "The three distinct roles are conversation, representation, and user protocol.",
    "source": "Part04",
    "pages": "9-11",
    "likelihood": "High",
    "topic": "Upper layers"
  },
  {
    "id": "Q042",
    "type": "comparison",
    "question": "Compare TCP and UDP.",
    "options": [],
    "answer": "TCP is reliable, connection-oriented, byte-stream based, fragments input, and controls flow. UDP is unreliable, connectionless, used for one-shot queries and promptness-sensitive speech/video.",
    "explanation": "This is the central transport trade-off in the source.",
    "source": "Part04",
    "pages": "17-19",
    "likelihood": "High",
    "topic": "TCP vs UDP"
  },
  {
    "id": "Q043",
    "type": "comparison",
    "question": "Compare OSI and TCP/IP model/protocol relationships and adoption.",
    "options": [],
    "answer": "OSI preceded its protocols, distinguishes service/interface/protocol, and is a useful general discussion model, but OSI protocols failed. TCP/IP lacks clear distinctions and generality, yet its protocols are widely used.",
    "explanation": "The source states this model/protocol adoption reversal.",
    "source": "Part04",
    "pages": "21,31-33",
    "likelihood": "High",
    "topic": "OSI vs TCP/IP"
  },
  {
    "id": "Q044",
    "type": "comparison",
    "question": "Compare writing standards too early versus too late.",
    "options": [],
    "answer": "Too early: unfinished research and poor understanding yield bad standards. Too late: incompatible corporate investment makes standards ignored. The ideal is the trough between research and investment waves.",
    "explanation": "Timing helps explain why deployed TCP/IP overtook OSI.",
    "source": "Part04",
    "pages": "25-27",
    "likelihood": "High",
    "topic": "Standards timing"
  },
  {
    "id": "Q045",
    "type": "comparison",
    "question": "Compare initial OSI and TCP/IP implementation dynamics.",
    "options": [],
    "answer": "OSI implementations were huge, slow, and unwieldy, creating a lasting poor-quality image. Good free Berkeley UNIX TCP/IP prompted adoption, community growth, and iterative improvement.",
    "explanation": "Initial implementation quality created opposite feedback loops.",
    "source": "Part04",
    "pages": "29",
    "likelihood": "Medium",
    "topic": "Adoption history"
  },
  {
    "id": "Q046",
    "type": "comparison",
    "question": "Compare connectionless and connection-oriented routing under failure.",
    "options": [],
    "answer": "Connectionless independently routes packets and can dynamically reroute later packets after failures. Connection-oriented setup fixes a maintained route for all packets; failure on it aborts the call.",
    "explanation": "This explains DoD/datagram versus telephone preferences.",
    "source": "Part05",
    "pages": "6-8",
    "likelihood": "High",
    "topic": "Subnet models"
  },
  {
    "id": "Q047",
    "type": "comparison",
    "question": "Compare their QoS and resource behavior.",
    "options": [],
    "answer": "Connection-oriented setup reserves buffers/CPU and rejects under-resourced calls, supporting predictable admitted service. Connectionless overload may lose packets, trigger retransmission, and make audio/video jerky.",
    "explanation": "Advance reservation is the telephone-company QoS rationale.",
    "source": "Part05",
    "pages": "9-10",
    "likelihood": "High",
    "topic": "QoS models"
  },
  {
    "id": "Q048",
    "type": "comparison",
    "question": "Compare X.25 and frame relay.",
    "options": [],
    "answer": "Both are connection-oriented. X.25 was the first public such network and used connection, sequence, and ACK fields in 3-byte headers with up to 128 data bytes. Frame relay replaced it, omitted error/flow control, retained in-order delivery, and linked office LANs.",
    "explanation": "Connection-oriented does not imply frame relay performs error/flow control.",
    "source": "Part05",
    "pages": "12-14",
    "likelihood": "High",
    "topic": "X.25 vs frame relay"
  },
  {
    "id": "Q049",
    "type": "comparison",
    "question": "Compare ATM cells and Internet IP packets.",
    "options": [],
    "answer": "ATM has fixed 53-byte cells routed in hardware on one route; cells may be lost but arriving cells remain ordered. IP packets are variable-length/software-routed in the source and may be lost or reordered.",
    "explanation": "ATM guarantees order, not delivery.",
    "source": "Part05",
    "pages": "20,22-23",
    "likelihood": "High",
    "topic": "ATM vs Internet"
  },
  {
    "id": "Q050",
    "type": "comparison",
    "question": "Compare temporary and permanent ATM virtual circuits.",
    "options": [],
    "answer": "Both are connections with unique identifiers. Temporary circuits use setup packets that create router entries and reservations; permanent circuits are standing distant-host connections analogous to leased lines. Either side can transmit once established.",
    "explanation": "They differ in permanence/setup status, not cell format or identifiers.",
    "source": "Part05",
    "pages": "17,19",
    "likelihood": "Medium",
    "topic": "ATM virtual circuits"
  },
  {
    "id": 1,
    "type": "mcq",
    "question": "Which topology is NOT included in Assignment #1's required comparison?",
    "options": [
      "Bus",
      "Star",
      "Hybrid",
      "Mesh"
    ],
    "answer": "Hybrid",
    "explanation": "The assignment lists Bus, Star, Ring, Token-ring, Tree, Mesh, and Fully connected. Hybrid is not in that list.",
    "source": "Assignment 1",
    "pages": "1",
    "likelihood": "High",
    "topic": "Assignment scope"
  },
  {
    "id": 2,
    "type": "mcq",
    "question": "How many named network topologies must be compared in Assignment #1?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": "7",
    "explanation": "The required list contains seven entries: Bus, Star, Ring, Token-ring, Tree, Mesh, and Fully connected.",
    "source": "Assignment 1",
    "pages": "1",
    "likelihood": "High",
    "topic": "Assignment scope"
  },
  {
    "id": 3,
    "type": "mcq",
    "question": "Which item is explicitly one of Assignment #1's comparison criteria?",
    "options": [
      "Programming language",
      "Routing methodology",
      "Screen resolution",
      "File format conversion"
    ],
    "answer": "Routing methodology",
    "explanation": "Routing methodology is one of the eight stated comparison dimensions in the assignment.",
    "source": "Assignment 1",
    "pages": "1",
    "likelihood": "High",
    "topic": "Assignment criteria"
  },
  {
    "id": 4,
    "type": "mcq",
    "question": "Which pair consists entirely of criteria explicitly required by Assignment #1?",
    "options": [
      "Reliability and cost",
      "Bandwidth and modulation",
      "Framing and encryption",
      "Power and frequency"
    ],
    "answer": "Reliability and cost",
    "explanation": "Reliability and cost both appear in the assignment's minimum comparison list; the other pairs do not.",
    "source": "Assignment 1",
    "pages": "1",
    "likelihood": "High",
    "topic": "Assignment criteria"
  },
  {
    "id": 5,
    "type": "mcq",
    "question": "Under which required assignment criterion would a report discuss how quickly a topology serves a request?",
    "options": [
      "Delay/Response time",
      "Security",
      "Architecture/Organization",
      "Cost"
    ],
    "answer": "Delay/Response time",
    "explanation": "Delay/Response time is the assignment's explicit category for timing and responsiveness.",
    "source": "Assignment 1",
    "pages": "1",
    "likelihood": "High",
    "topic": "Assignment criteria"
  },
  {
    "id": 6,
    "type": "mcq",
    "question": "Under which required criterion should resistance to failures be compared?",
    "options": [
      "Reliability",
      "Routing methodology",
      "Complexity",
      "Congestion control"
    ],
    "answer": "Reliability",
    "explanation": "Reliability is explicitly required and is the direct category for comparing continued operation and failure concerns.",
    "source": "Assignment 1",
    "pages": "1",
    "likelihood": "High",
    "topic": "Assignment criteria"
  },
  {
    "id": 7,
    "type": "mcq",
    "question": "Which required criterion most directly addresses how traffic overload is handled?",
    "options": [
      "Congestion control",
      "Security",
      "Cost",
      "Architecture/Organization"
    ],
    "answer": "Congestion control",
    "explanation": "Congestion control is explicitly listed as a required comparison criterion.",
    "source": "Assignment 1",
    "pages": "1",
    "likelihood": "High",
    "topic": "Assignment criteria"
  },
  {
    "id": 8,
    "type": "mcq",
    "question": "According to the lecture material supporting Assignment #1, which topology is associated with IEEE 802.5?",
    "options": [
      "Token ring",
      "Bus",
      "Tree",
      "Fully connected"
    ],
    "answer": "Token ring",
    "explanation": "Part01 states that in a ring, IEEE 802.5 is the token ring; the assignment includes Token-ring among the topologies to compare.",
    "source": "Assignment 1 + Part01",
    "pages": "Assignment 1 p.1; Part01 pp.22-24",
    "likelihood": "High",
    "topic": "Token-ring topology"
  },
  {
    "id": 9,
    "type": "mcq",
    "question": "Which standard does the supporting lecture identify as the most popular LAN standard and a kind of broadcast network?",
    "options": [
      "IEEE 802.3 Ethernet",
      "IEEE 802.5 Token Ring",
      "IEEE 802.11 WiFi",
      "IEEE 802.4 Token Bus"
    ],
    "answer": "IEEE 802.3 Ethernet",
    "explanation": "Part01 identifies IEEE 802.3 Ethernet as the most popular LAN standard and says it is a kind of broadcast network.",
    "source": "Assignment 1 + Part01",
    "pages": "Assignment 1 p.1; Part01 p.22",
    "likelihood": "High",
    "topic": "Bus/Ethernet concepts"
  },
  {
    "id": 10,
    "type": "comparison",
    "question": "Compare broadcast links and point-to-point links as concepts useful when discussing topology organization and routing.",
    "options": [],
    "answer": "A broadcast network has one communication channel shared by all machines, and an address in each packet identifies the recipient; it can also broadcast to all or multicast to a subset. Point-to-point links connect individual pairs, and a packet may have to visit intermediate machines before reaching its destination.",
    "explanation": "This comparison directly uses Part01's transmission-technology definitions and supports the assignment's Architecture/Organization and Routing methodology dimensions without asserting unsupported performance rankings for a particular topology.",
    "source": "Assignment 1 + Part01",
    "pages": "Assignment 1 p.1; Part01 pp.19-20",
    "likelihood": "High",
    "topic": "Transmission organization"
  },
  {
    "id": 11,
    "type": "comparison",
    "question": "Compare static and dynamic channel allocation as presented in the lecture, in a way relevant to the assignment's congestion-control criterion.",
    "options": [],
    "answer": "Static channel allocation uses time slots and a round-robin algorithm, but the lecture notes that it wastes channel capacity. Dynamic allocation may be centralized or decentralized and operates with a preset order.",
    "explanation": "Part01 presents these as two ways to divide access in broadcast networks. They provide grounded access-control concepts for the assignment comparison.",
    "source": "Assignment 1 + Part01",
    "pages": "Assignment 1 p.1; Part01 p.22",
    "likelihood": "Medium",
    "topic": "Channel allocation"
  },
  {
    "id": 12,
    "type": "comparison",
    "question": "Compare Ethernet's collision handling with token ring's permission-to-send method.",
    "options": [],
    "answer": "Ethernet permits contention: a station listens before sending, detects interference while transmitting, jams after a detected collision, and retries after a random backoff that grows after repeated collisions. In token ring, a token is passed around the ring; only the computer holding it may transmit, after which it returns the token, thereby avoiding collisions.",
    "explanation": "The answer contrasts contention/backoff with controlled token access, grounding the assignment's congestion-control and organization comparison in Part06.",
    "source": "Assignment 1 + Part06",
    "pages": "Assignment 1 p.1; Part06 pp.8-9, 13",
    "likelihood": "High",
    "topic": "Ethernet versus token ring"
  },
  {
    "id": 13,
    "type": "comparison",
    "question": "Compare token bus and token ring in topology and token movement.",
    "options": [],
    "answer": "Token bus uses the same linear-cable topology as Ethernet, while computers take turns by passing a token from computer to computer. Token ring passes the token around a ring; the holder transmits and then puts the token back on the ring. Both restrict transmission to the token holder and thus avoid collisions, but their stated physical organizations differ.",
    "explanation": "Part06 explicitly gives the linear cable for token bus, the ring for token ring, and token possession as the send permission in both.",
    "source": "Assignment 1 + Part06",
    "pages": "Assignment 1 p.1; Part06 pp.12-13",
    "likelihood": "High",
    "topic": "Token bus versus token ring"
  },
  {
    "id": 14,
    "type": "comparison",
    "question": "Compare the historical outcomes of Ethernet, IEEE 802.4 token bus, and IEEE 802.5 token ring.",
    "options": [],
    "answer": "Ethernet won the LAN standards competition and continued evolving. IEEE 802.4 token bus basically vanished. IEEE 802.5 token ring was used at some IBM sites but virtually nowhere outside them, and the lecture judged it unlikely to catch Ethernet despite work on a gigabit version.",
    "explanation": "This is the lecture's stated historical comparison, not an invented technical ranking. Part06 attributes Ethernet's win mostly to arriving first and to weaker challengers.",
    "source": "Assignment 1 + Part06",
    "pages": "Assignment 1 p.1; Part06 pp.11-14",
    "likelihood": "Medium",
    "topic": "LAN standards comparison"
  },
  {
    "id": 15,
    "type": "comparison",
    "question": "Compare the organization of original Ethernet with the token-bus proposal described in Part06.",
    "options": [],
    "answer": "Both used a linear shared cable organization. Original Ethernet attached multiple machines in parallel to a thick coaxial multidrop cable and used carrier sensing plus collision detection/backoff. Token bus retained a linear cable but imposed turns by passing a token, so a computer could send only while holding the token.",
    "explanation": "This grounded contrast addresses the assignment's Architecture/Organization and congestion-control categories.",
    "source": "Assignment 1 + Part06",
    "pages": "Assignment 1 p.1; Part06 pp.6, 8-9, 12-13",
    "likelihood": "High",
    "topic": "Ethernet versus token bus"
  },
  {
    "id": 16,
    "type": "mcq",
    "question": "Why did the Hawaii researchers turn to short-range radios for ALOHANET?",
    "options": [
      "Undersea cabling was not practical",
      "The central computer had no storage",
      "Token passing required radio",
      "Ethernet had already replaced cables"
    ],
    "answer": "Undersea cabling was not practical",
    "explanation": "The researchers needed to connect remote islands to Honolulu, and stringing their own cables under the Pacific was not in the cards.",
    "source": "Part06",
    "pages": "3-4",
    "likelihood": "Medium",
    "topic": "ALOHANET origins"
  },
  {
    "id": 17,
    "type": "mcq",
    "question": "In ALOHANET, what did a terminal infer from the lack of an acknowledgement after upstream contention?",
    "options": [
      "It should try again",
      "It had acquired a token",
      "The downstream channel collided",
      "It should permanently disconnect"
    ],
    "answer": "It should try again",
    "explanation": "A terminal noticed the missing downstream acknowledgement when upstream contention occurred and retried.",
    "source": "Part06",
    "pages": "4",
    "likelihood": "High",
    "topic": "ALOHANET access"
  },
  {
    "id": 18,
    "type": "mcq",
    "question": "Why were there no downstream collisions in the described ALOHANET?",
    "options": [
      "Only the central computer sent downstream",
      "Every terminal had a private cable",
      "A token controlled downstream access",
      "Downstream traffic used no packets"
    ],
    "answer": "Only the central computer sent downstream",
    "explanation": "The central computer was the sole sender on the downstream channel, eliminating competition among downstream transmitters.",
    "source": "Part06",
    "pages": "4",
    "likelihood": "High",
    "topic": "ALOHANET channels"
  },
  {
    "id": 19,
    "type": "comparison",
    "question": "Compare ALOHANET's and original Ethernet's behavior before transmitting.",
    "options": [],
    "answer": "An ALOHANET terminal transmitted its packet on the upstream channel without first being able to sense distant island transmissions, then relied on acknowledgement and retry. Ethernet first listened to its single cable; if another transmission was present, it waited until that transmission finished. This carrier sensing avoided disrupting an already active transmission and improved efficiency.",
    "explanation": "Part06 says distant islands could not sense one another, whereas machines on one cable could listen before sending.",
    "source": "Part06",
    "pages": "4, 8",
    "likelihood": "High",
    "topic": "ALOHANET versus Ethernet"
  },
  {
    "id": 20,
    "type": "mcq",
    "question": "Under what traffic condition did ALOHANET bog down badly?",
    "options": [
      "Heavy upstream traffic",
      "No downstream traffic",
      "A single idle terminal",
      "Only wired traffic"
    ],
    "answer": "Heavy upstream traffic",
    "explanation": "The lecture says ALOHANET worked fairly well at low traffic but bogged down when upstream traffic was heavy.",
    "source": "Part06",
    "pages": "5",
    "likelihood": "High",
    "topic": "ALOHANET performance"
  },
  {
    "id": 21,
    "type": "mcq",
    "question": "Who designed and implemented the first local area network described in Part06?",
    "options": [
      "Bob Metcalfe and David Boggs",
      "Norman Abramson and IBM",
      "DEC and General Motors",
      "Intel and the IEEE alone"
    ],
    "answer": "Bob Metcalfe and David Boggs",
    "explanation": "At Xerox PARC, Metcalfe and his colleague David Boggs designed and implemented the first LAN described in the lecture.",
    "source": "Part06",
    "pages": "5-6",
    "likelihood": "Medium",
    "topic": "Ethernet history"
  },
  {
    "id": 22,
    "type": "mcq",
    "question": "Which set correctly describes the original Ethernet in Part06?",
    "options": [
      "2.94 Mbps, thick coaxial cable, up to 256 machines",
      "10 Mbps, fiber only, up to 16 machines",
      "54 Mbps, radio, unlimited machines",
      "1 Mbps, token ring, up to 8 machines"
    ],
    "answer": "2.94 Mbps, thick coaxial cable, up to 256 machines",
    "explanation": "The original system used thick coaxial cable, supported up to 256 attached machines, and ran at 2.94 Mbps.",
    "source": "Part06",
    "pages": "6",
    "likelihood": "High",
    "topic": "Original Ethernet"
  },
  {
    "id": 23,
    "type": "mcq",
    "question": "What is a multidrop cable?",
    "options": [
      "A cable with multiple machines attached in parallel",
      "A private cable between exactly two routers",
      "A radio channel with two frequencies",
      "A ring that carries two tokens"
    ],
    "answer": "A cable with multiple machines attached in parallel",
    "explanation": "Part06 explicitly defines a cable with multiple machines attached to it in parallel as a multidrop cable.",
    "source": "Part06",
    "pages": "6",
    "likelihood": "High",
    "topic": "Ethernet architecture"
  },
  {
    "id": 24,
    "type": "mcq",
    "question": "What does an Ethernet sender do immediately after detecting interference during its own transmission?",
    "options": [
      "Jams the ether to alert all senders",
      "Passes a token clockwise",
      "Switches to the downstream ALOHA channel",
      "Waits for a base-station handoff"
    ],
    "answer": "Jams the ether to alert all senders",
    "explanation": "The sender listens while transmitting; on interference it jams the ether, then backs off for a random interval before retrying.",
    "source": "Part06",
    "pages": "9",
    "likelihood": "High",
    "topic": "Ethernet collision handling"
  },
  {
    "id": 25,
    "type": "mcq",
    "question": "How does the described Ethernet backoff change after a second collision?",
    "options": [
      "The random waiting time is doubled",
      "The waiting time becomes zero",
      "The station receives a permanent token",
      "The cable speed is halved"
    ],
    "answer": "The random waiting time is doubled",
    "explanation": "After a second collision, the random wait is doubled, and it continues increasing to spread competing transmissions.",
    "source": "Part06",
    "pages": "9",
    "likelihood": "High",
    "topic": "Ethernet backoff"
  },
  {
    "id": 26,
    "type": "mcq",
    "question": "Which organizations drew up the 1978 DIX Ethernet standard?",
    "options": [
      "DEC, Intel, and Xerox",
      "IBM, GM, and Xerox",
      "IEEE, MIT, and Harvard",
      "3Com, ALOHA, and PARC"
    ],
    "answer": "DEC, Intel, and Xerox",
    "explanation": "DIX takes its name from DEC, Intel, and Xerox, which produced the 10-Mbps standard in 1978.",
    "source": "Part06",
    "pages": "10",
    "likelihood": "Medium",
    "topic": "Ethernet standardization"
  },
  {
    "id": 27,
    "type": "mcq",
    "question": "With two minor changes, what did the DIX standard become in 1983?",
    "options": [
      "IEEE 802.3",
      "IEEE 802.4",
      "IEEE 802.5",
      "IEEE 802.11"
    ],
    "answer": "IEEE 802.3",
    "explanation": "Part06 states that the DIX Ethernet standard became IEEE 802.3 in 1983 after two minor changes.",
    "source": "Part06",
    "pages": "10",
    "likelihood": "High",
    "topic": "Ethernet standardization"
  },
  {
    "id": 28,
    "type": "comparison",
    "question": "Compare the access rules of token bus and token ring according to Part06.",
    "options": [],
    "answer": "In token bus, computers on a linear cable take turns as a short token packet is passed from computer to computer; only its possessor may send. In token ring, the token circulates around the ring; the holder may transmit and then returns the token to the ring. Thus both avoid collisions through exclusive token possession, while the stated topology and token path differ.",
    "explanation": "The comparison combines the exact access and topology descriptions on pages 12-13.",
    "source": "Part06",
    "pages": "12-13",
    "likelihood": "High",
    "topic": "Token-controlled LANs"
  },
  {
    "id": 29,
    "type": "mcq",
    "question": "What practical incompatibility motivated creation of a wireless LAN standard?",
    "options": [
      "A brand X radio might not work with a brand Y base station",
      "Ethernet could not carry IP packets",
      "All notebooks lacked batteries",
      "Radio signals had infinite range"
    ],
    "answer": "A brand X radio might not work with a brand Y base station",
    "explanation": "Early wireless LAN products from different companies were incompatible, prompting IEEE standardization.",
    "source": "Part06",
    "pages": "15-17",
    "likelihood": "High",
    "topic": "Wireless LAN standardization"
  },
  {
    "id": 30,
    "type": "comparison",
    "question": "Compare 802.11 infrastructure mode with ad hoc mode.",
    "options": [],
    "answer": "With a base station present, all communication goes through that base station, called an access point in 802.11 terminology. Without a base station, computers send directly to one another; this is called ad hoc networking.",
    "explanation": "The standard was required to support both modes, and Part06 explicitly defines their communication paths.",
    "source": "Part06",
    "pages": "17-18",
    "likelihood": "High",
    "topic": "802.11 modes"
  },
  {
    "id": 31,
    "type": "mcq",
    "question": "Which was one of the wireless LAN design challenges listed in Part06?",
    "options": [
      "Maintaining user privacy",
      "Making radio range infinite",
      "Eliminating all base stations",
      "Replacing IP above the data link layer"
    ],
    "answer": "Maintaining user privacy",
    "explanation": "The challenges included frequency availability, finite range, privacy, battery life, safety, mobility, and economically viable bandwidth.",
    "source": "Part06",
    "pages": "19",
    "likelihood": "Medium",
    "topic": "Wireless LAN challenges"
  },
  {
    "id": 32,
    "type": "comparison",
    "question": "Compare 802.11 and Ethernet above the data link layer versus at the physical and data link layers.",
    "options": [],
    "answer": "Above the data link layer, 802.11 was designed to be compatible with Ethernet, so an IP packet could be sent over the wireless LAN in the same manner as over wired Ethernet. At the physical and data link layers, inherent wireless differences remained and required special solutions, including finite sensing range, multipath fading, mobility, and handoff.",
    "explanation": "Part06 explicitly distinguishes intended upper-layer compatibility from lower-layer differences.",
    "source": "Part06",
    "pages": "20-25",
    "likelihood": "High",
    "topic": "802.11 and Ethernet compatibility"
  },
  {
    "id": 33,
    "type": "mcq",
    "question": "In the wireless example, why can computer C incorrectly conclude that it is safe to transmit to B?",
    "options": [
      "C is outside A's radio range and cannot hear A",
      "B always hides its acknowledgements",
      "C is holding an Ethernet token",
      "A transmits only through a portal"
    ],
    "answer": "C is outside A's radio range and cannot hear A",
    "explanation": "A may be transmitting to B while its signal is too weak to reach C; C hears an idle medium even though its transmission would interfere at B.",
    "source": "Part06",
    "pages": "21-22",
    "likelihood": "High",
    "topic": "Wireless carrier sensing"
  },
  {
    "id": 34,
    "type": "mcq",
    "question": "What is multipath fading?",
    "options": [
      "Interference caused when reflected radio signals arrive along multiple paths",
      "A random doubling of Ethernet waiting time",
      "Loss caused only by token duplication",
      "A portal changing an IP address"
    ],
    "answer": "Interference caused when reflected radio signals arrive along multiple paths",
    "explanation": "A radio signal may reflect from solid objects and be received multiple times along different paths; the resulting interference is called multipath fading.",
    "source": "Part06",
    "pages": "23",
    "likelihood": "High",
    "topic": "Multipath fading"
  },
  {
    "id": 35,
    "type": "mcq",
    "question": "Which example illustrates software being unaware of mobility?",
    "options": [
      "A word processor retains an invalid printer list after moving",
      "A cable uses repeaters every 500 meters",
      "A token holder transmits and returns the token",
      "A collision doubles random backoff"
    ],
    "answer": "A word processor retains an invalid printer list after moving",
    "explanation": "Part06 notes that moving a computer to a new environment can make a word processor's built-in printer list invalid.",
    "source": "Part06",
    "pages": "24",
    "likelihood": "Medium",
    "topic": "Mobility awareness"
  },
  {
    "id": 36,
    "type": "mcq",
    "question": "What wireless problem occurs when a notebook moves from one base station's range into another's?",
    "options": [
      "Handoff is needed",
      "A multidrop cable is needed",
      "DIX standardization is repeated",
      "The downstream ALOHA channel collides"
    ],
    "answer": "Handoff is needed",
    "explanation": "The notebook must be handed from its current base station to the new one, a mobility issue not present in Ethernet.",
    "source": "Part06",
    "pages": "25",
    "likelihood": "High",
    "topic": "Wireless handoff"
  },
  {
    "id": 37,
    "type": "comparison",
    "question": "Compare a multi-cell 802.11 system's internal organization with how it should appear externally.",
    "options": [],
    "answer": "Internally, the envisioned network contains multiple cells, each with its own base station, and the base stations are connected by Ethernet. Externally, the whole system should look like one Ethernet. The connection from the 802.11 system to the outside world is called a portal.",
    "explanation": "This comparison captures the internal cell/base-station structure, the Ethernet interconnection, and the intended unified external appearance.",
    "source": "Part06",
    "pages": "26-27",
    "likelihood": "High",
    "topic": "802.11 system architecture"
  },
  {
    "id": 38,
    "type": "mcq",
    "question": "What speeds did the 1997 802.11 wireless LAN standard support?",
    "options": [
      "1 or 2 Mbps",
      "10 or 100 Mbps",
      "11 or 54 Mbps",
      "100 or 1000 Mbps"
    ],
    "answer": "1 or 2 Mbps",
    "explanation": "The standard produced in 1997 described a wireless LAN running at either 1 Mbps or 2 Mbps.",
    "source": "Part06",
    "pages": "28",
    "likelihood": "High",
    "topic": "Original 802.11"
  },
  {
    "id": 39,
    "type": "comparison",
    "question": "Compare 802.11a and 802.11b as described in Part06.",
    "options": [],
    "answer": "802.11a uses a wider frequency band and reaches speeds up to 54 Mbps. 802.11b uses the same frequency band as the original 1/2-Mbps 802.11 but applies a different modulation technique to reach 11 Mbps.",
    "explanation": "The two 1999 standards differ in frequency-band choice, modulation relationship, and stated maximum speed.",
    "source": "Part06",
    "pages": "29",
    "likelihood": "High",
    "topic": "802.11a versus 802.11b"
  },
  {
    "id": 40,
    "type": "mcq",
    "question": "Why did the lecture call 802.11b's 11-Mbps speed psychologically important?",
    "options": [
      "It exceeded original wired Ethernet's 10 Mbps",
      "It equaled 802.11a's 54 Mbps",
      "It eliminated radio reflection",
      "It was the first speed below 1 Mbps"
    ],
    "answer": "It exceeded original wired Ethernet's 10 Mbps",
    "explanation": "Part06 notes that some viewed 11 Mbps as important because it was faster than original 10-Mbps wired Ethernet.",
    "source": "Part06",
    "pages": "29",
    "likelihood": "Medium",
    "topic": "802.11b speed"
  },
  {
    "id": 41,
    "type": "mcq",
    "question": "Which combination describes 802.11g in Part06?",
    "options": [
      "802.11a modulation with the 802.11b frequency band",
      "802.11b modulation with an Ethernet cable",
      "Original 802.11 modulation with token ring",
      "802.11a frequency band with ALOHA acknowledgements"
    ],
    "answer": "802.11a modulation with the 802.11b frequency band",
    "explanation": "Part06 defines 802.11g as combining the modulation technique of 802.11a with the frequency band of 802.11b.",
    "source": "Part06",
    "pages": "30",
    "likelihood": "High",
    "topic": "802.11g"
  },
  {
    "id": 42,
    "type": "comparison",
    "question": "Compare the original 1997 802.11 standard with the 1999 802.11a and 802.11b standards by stated speed.",
    "options": [],
    "answer": "The 1997 standard ran at 1 or 2 Mbps. In 1999, 802.11a raised the stated maximum to 54 Mbps using a wider frequency band, while 802.11b reached 11 Mbps in the original frequency band through a different modulation technique.",
    "explanation": "The speed comparison explains why users quickly complained that the 1997 version was too slow and why faster variants followed.",
    "source": "Part06",
    "pages": "28-29",
    "likelihood": "High",
    "topic": "802.11 evolution"
  },
  {
    "id": 43,
    "type": "comparison",
    "question": "Compare collision possibility in ALOHANET's upstream and downstream channels.",
    "options": [],
    "answer": "The upstream channel had many possible terminal senders, so simultaneous transmissions could contend and cause a missing acknowledgement followed by retry. The downstream channel had only one sender—the central computer—so the lecture states that collisions never occurred there.",
    "explanation": "The difference follows directly from the number of potential senders on each channel.",
    "source": "Part06",
    "pages": "4",
    "likelihood": "High",
    "topic": "ALOHANET channel comparison"
  },
  {
    "id": 44,
    "type": "mcq",
    "question": "What is the connection between an 802.11 system and the outside world called?",
    "options": [
      "Portal",
      "Transceiver tap",
      "Token",
      "Repeater interval"
    ],
    "answer": "Portal",
    "explanation": "Part06 names the connection between the 802.11 system and the outside world a portal.",
    "source": "Part06",
    "pages": "26",
    "likelihood": "High",
    "topic": "802.11 portal"
  },
  {
    "id": 45,
    "type": "mcq",
    "question": "Why could multiple Ethernet computers still collide even though each listened before transmitting?",
    "options": [
      "They could all wait for one transmission to finish and then start together",
      "Listening was allowed only on the downstream channel",
      "Every station always held the same token",
      "Reflections forced every packet onto multiple cables"
    ],
    "answer": "They could all wait for one transmission to finish and then start together",
    "explanation": "Carrier sensing does not prevent two waiting computers from observing the end of a transmission and beginning simultaneously; collision detection, jamming, and random backoff address this case.",
    "source": "Part06",
    "pages": "9",
    "likelihood": "High",
    "topic": "Ethernet collision scenario"
  }
];
