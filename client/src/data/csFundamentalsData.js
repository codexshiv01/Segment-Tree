export const csFundamentalsData = [
    {
        id: "cn",
        title: "Computer Networks",
        icon: "🌐",
        description: "Master the protocols that power the internet, from TCP/IP to HTTP and DNS.",
        questions: [
            {
                id: 1,
                question: "Which layer of the OSI model is responsible for end-to-end communication and reliability?",
                options: [
                    "Network Layer",
                    "Transport Layer",
                    "Session Layer",
                    "Data Link Layer"
                ],
                correctAnswer: 1,
                explanation: "The Transport Layer (Layer 4) ensures reliable data transfer between end systems (e.g., TCP). The Network layer handles routing."
            },
            {
                id: 2,
                question: "What is the primary difference between TCP and UDP?",
                options: [
                    "TCP is connectionless, UDP is connection-oriented",
                    "TCP is reliable, UDP is unreliable",
                    "UDP is slower than TCP",
                    "TCP uses datagrams, UDP uses segments"
                ],
                correctAnswer: 1,
                explanation: "TCP provides reliable, ordered, and error-checked delivery. UDP is connectionless and does not guarantee delivery, making it faster but unreliable."
            },
            {
                id: 3,
                question: "Which protocol is used to resolve an IP address to a MAC address?",
                options: [
                    "DNS",
                    "DHCP",
                    "ARP",
                    "RARP"
                ],
                correctAnswer: 2,
                explanation: "ARP (Address Resolution Protocol) maps an IP address to a physical machine address (MAC address) on a local network."
            },
            {
                id: 4,
                question: "What is the default port number for HTTPS traffic?",
                options: [
                    "80",
                    "443",
                    "8080",
                    "22"
                ],
                correctAnswer: 1,
                explanation: "HTTPS uses port 443 by default. HTTP uses port 80, and SSH uses port 22."
            },
            {
                id: 5,
                question: "In the TCP 3-way handshake, what is the correct sequence of flags?",
                options: [
                    "SYN, ACK, SYN-ACK",
                    "SYN, SYN-ACK, ACK",
                    "ACK, SYN, SYN-ACK",
                    "SYN-ACK, SYN, ACK"
                ],
                correctAnswer: 1,
                explanation: "The client sends SYN, the server responds with SYN-ACK, and the client sends ACK to establish the connection."
            },
            {
                id: 6,
                question: "Which HTTP status code indicates 'Not Found'?",
                options: [
                    "200",
                    "301",
                    "404",
                    "500"
                ],
                correctAnswer: 2,
                explanation: "404 indicates that the requested resource could not be found. 200 is OK, 301 is Moved Permanently, and 500 is Internal Server Error."
            },
            {
                id: 7,
                question: "What does DNS stand for?",
                options: [
                    "Domain Name System",
                    "Data Network Service",
                    "Digital Name Server",
                    "Distributed Network System"
                ],
                correctAnswer: 0,
                explanation: "DNS (Domain Name System) translates human-readable domain names (like google.com) into IP addresses."
            },
            {
                id: 8,
                question: "Which of the following is a private IP address range?",
                options: [
                    "8.8.8.0 - 8.8.8.255",
                    "172.16.0.0 - 172.31.255.255",
                    "1.1.1.1 - 1.1.1.255",
                    "200.0.0.0 - 200.255.255.255"
                ],
                correctAnswer: 1,
                explanation: "172.16.0.0/12 is a reserved private IP range (RFC 1918), along with 10.0.0.0/8 and 192.168.0.0/16."
            },
            {
                id: 9,
                question: "Which protocol is used for sending emails?",
                options: [
                    "POP3",
                    "IMAP",
                    "SMTP",
                    "HTTP"
                ],
                correctAnswer: 2,
                explanation: "SMTP (Simple Mail Transfer Protocol) is used for sending emails. POP3 and IMAP are used for retrieving emails."
            },
            {
                id: 10,
                question: "What is the maximum size of a TCP segment's payload determined by?",
                options: [
                    "MTU (Maximum Transmission Unit)",
                    "MSS (Maximum Segment Size)",
                    "Window Size",
                    "Bandwidth"
                ],
                correctAnswer: 1,
                explanation: "MSS (Maximum Segment Size) specifies the largest amount of data, specified in bytes, that a computer or communications device can handle in a single, unfragmented piece."
            },
            {
                id: 11,
                question: "Which command is used to test the reachability of a host on an IP network?",
                options: [
                    "traceroute",
                    "ping",
                    "netstat",
                    "ipconfig"
                ],
                correctAnswer: 1,
                explanation: "Ping uses ICMP Echo Request messages to test reachability and measure round-trip time."
            },
            {
                id: 12,
                question: "What is the purpose of a Subnet Mask?",
                options: [
                    "To encrypt data packets",
                    "To identify the network and host portions of an IP address",
                    "To assign IP addresses dynamically",
                    "To resolve domain names"
                ],
                correctAnswer: 1,
                explanation: "A subnet mask splits the IP address into the network address and the host address."
            },
            {
                id: 13,
                question: "Which layer of the OSI model does a Router operate at?",
                options: [
                    "Physical Layer",
                    "Data Link Layer",
                    "Network Layer",
                    "Transport Layer"
                ],
                correctAnswer: 2,
                explanation: "Routers operate at Layer 3 (Network Layer) to forward packets between networks based on IP addresses."
            },
            {
                id: 14,
                question: "What is the main function of NAT (Network Address Translation)?",
                options: [
                    "To translate domain names to IPs",
                    "To map private IP addresses to a public IP address",
                    "To encrypt network traffic",
                    "To assign MAC addresses"
                ],
                correctAnswer: 1,
                explanation: "NAT allows multiple devices on a private network to share a single public IP address, conserving IPv4 addresses."
            },
            {
                id: 15,
                question: "Which of these is NOT a valid HTTP method?",
                options: [
                    "GET",
                    "POST",
                    "FETCH",
                    "DELETE"
                ],
                correctAnswer: 2,
                explanation: "FETCH is not a standard HTTP method (though it is a JavaScript API). Valid methods include GET, POST, PUT, DELETE, PATCH, etc."
            },
            {
                id: 16,
                question: "In a Class C IP address, how many bits are used for the Network ID?",
                options: [
                    "8",
                    "16",
                    "24",
                    "32"
                ],
                correctAnswer: 2,
                explanation: "Class C addresses use the first 24 bits for the Network ID and the last 8 bits for the Host ID."
            },
            {
                id: 17,
                question: "What does the 'S' in HTTPS stand for?",
                options: [
                    "Standard",
                    "System",
                    "Secure",
                    "Simple"
                ],
                correctAnswer: 2,
                explanation: "HTTPS stands for HyperText Transfer Protocol Secure. It uses TLS/SSL for encryption."
            },
            {
                id: 18,
                question: "Which protocol is stateless?",
                options: [
                    "TCP",
                    "FTP",
                    "HTTP",
                    "SMTP"
                ],
                correctAnswer: 2,
                explanation: "HTTP is a stateless protocol; each request is independent and the server does not retain session information by default (cookies are used to add state)."
            },
            {
                id: 19,
                question: "What is the term for the delay caused by the time it takes for a signal to travel from sender to receiver?",
                options: [
                    "Transmission Delay",
                    "Propagation Delay",
                    "Queuing Delay",
                    "Processing Delay"
                ],
                correctAnswer: 1,
                explanation: "Propagation delay is the time it takes for the signal to travel through the medium (distance / speed of light)."
            },
            {
                id: 20,
                question: "Which mechanism is used by TCP to handle congestion?",
                options: [
                    "Flow Control",
                    "Congestion Window (CWND)",
                    "Sequence Numbers",
                    "Checksums"
                ],
                correctAnswer: 1,
                explanation: "TCP uses a Congestion Window (CWND) and algorithms like Slow Start and Congestion Avoidance to control the amount of data sent into the network."
            }
        ]
    },
    {
        id: "os",
        title: "Operating Systems",
        icon: "💻",
        description: "Master the core concepts of Operating Systems, including Processes, Threads, Deadlocks, and Memory Management.",
        questions: [
            {
                id: 1,
                question: "What is the main function of the Kernel in an Operating System?",
                options: [
                    "To run user applications",
                    "To manage system resources and hardware",
                    "To provide a graphical user interface",
                    "To compile code"
                ],
                correctAnswer: 1,
                explanation: "The kernel is the core component of an OS that has complete control over everything in the system. It manages hardware and system resources."
            },
            {
                id: 2,
                question: "Which of the following is NOT a state of a process?",
                options: [
                    "Running",
                    "Ready",
                    "Blocked",
                    "Finished"
                ],
                correctAnswer: 3,
                explanation: "The standard process states are New, Ready, Running, Waiting (Blocked), and Terminated. 'Finished' is not a formal state name (Terminated is used)."
            },
            {
                id: 3,
                question: "What is a Deadlock?",
                options: [
                    "When a process crashes",
                    "When two or more processes are waiting for each other to release resources",
                    "When the CPU is idle",
                    "When memory is full"
                ],
                correctAnswer: 1,
                explanation: "Deadlock is a situation where a set of processes are blocked because each process is holding a resource and waiting for another resource acquired by some other process."
            },
            {
                id: 4,
                question: "Which scheduling algorithm suffers from the Convoy Effect?",
                options: [
                    "Round Robin",
                    "FCFS (First Come First Serve)",
                    "SJF (Shortest Job First)",
                    "Priority Scheduling"
                ],
                correctAnswer: 1,
                explanation: "In FCFS, if a long CPU-bound process arrives first, many short I/O-bound processes have to wait behind it, creating a 'convoy' effect."
            },
            {
                id: 5,
                question: "What is Virtual Memory?",
                options: [
                    "Memory used by virtual machines",
                    "A technique that allows the execution of processes that are not completely in memory",
                    "A type of RAM",
                    "Cloud storage"
                ],
                correctAnswer: 1,
                explanation: "Virtual memory maps memory addresses used by a program, called virtual addresses, into physical addresses in computer memory, allowing programs to use more memory than physically available."
            },
            {
                id: 6,
                question: "What is the difference between a Process and a Thread?",
                options: [
                    "Threads are heavier than processes",
                    "Processes share memory, threads do not",
                    "Threads share the same memory space of the parent process",
                    "There is no difference"
                ],
                correctAnswer: 2,
                explanation: "A process is an instance of a program in execution. A thread is a lightweight process. Threads within the same process share the same memory space (heap, code, data)."
            },
            {
                id: 7,
                question: "Which component is responsible for translating logical addresses to physical addresses?",
                options: [
                    "CPU",
                    "MMU (Memory Management Unit)",
                    "ALU",
                    "Hard Disk"
                ],
                correctAnswer: 1,
                explanation: "The MMU (Memory Management Unit) is a hardware component responsible for handling memory accesses requested by the CPU, including translation of virtual addresses to physical addresses."
            },
            {
                id: 8,
                question: "What is a Semaphore?",
                options: [
                    "A type of memory",
                    "A synchronization primitive used to control access to a common resource",
                    "A scheduling algorithm",
                    "A file system type"
                ],
                correctAnswer: 1,
                explanation: "A semaphore is a variable or abstract data type used to control access to a common resource by multiple processes in a concurrent system."
            },
            {
                id: 9,
                question: "What is Thrashing?",
                options: [
                    "High CPU usage",
                    "Excessive paging activity causing low CPU utilization",
                    "A disk error",
                    "A network collision"
                ],
                correctAnswer: 1,
                explanation: "Thrashing occurs when a computer's virtual memory resources are overused, leading to a constant state of paging and page faults, inhibiting most application-level processing."
            },
            {
                id: 10,
                question: "Which of the following is a condition for Deadlock?",
                options: [
                    "Mutual Exclusion",
                    "Hold and Wait",
                    "No Preemption",
                    "All of the above"
                ],
                correctAnswer: 3,
                explanation: "The four necessary conditions for deadlock are: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait."
            },
            {
                id: 11,
                question: "What is Context Switching?",
                options: [
                    "Switching between user mode and kernel mode",
                    "Saving the state of a process and loading the state of another process",
                    "Moving data from RAM to Disk",
                    "Changing the priority of a process"
                ],
                correctAnswer: 1,
                explanation: "Context switching is the process of storing the state of a process or thread, so that it can be restored and resume execution later, and then restoring a different process or thread."
            },
            {
                id: 12,
                question: "What is a Page Fault?",
                options: [
                    "An error in the page code",
                    "When a program accesses a page not currently in main memory",
                    "When the hard disk fails",
                    "A security violation"
                ],
                correctAnswer: 1,
                explanation: "A page fault occurs when a program attempts to access a block of memory (a page) that is not currently stored in the physical RAM."
            },
            {
                id: 13,
                question: "Which scheduling algorithm is best for time-sharing systems?",
                options: [
                    "FCFS",
                    "SJF",
                    "Round Robin",
                    "Priority Scheduling"
                ],
                correctAnswer: 2,
                explanation: "Round Robin is designed for time-sharing systems. It assigns a fixed time unit (quantum) per process and cycles through them."
            },
            {
                id: 14,
                question: "What is Fragmentation?",
                options: [
                    "Breaking a large file into smaller pieces",
                    "Wasted memory space that cannot be used",
                    "Splitting a process into threads",
                    "Corrupted data"
                ],
                correctAnswer: 1,
                explanation: "Fragmentation is a phenomenon in which storage space is used inefficiently, reducing capacity or performance. It can be internal or external."
            },
            {
                id: 15,
                question: "What is the purpose of the 'fork()' system call?",
                options: [
                    "To create a new thread",
                    "To create a new process",
                    "To delete a process",
                    "To stop a process"
                ],
                correctAnswer: 1,
                explanation: "The fork() system call is used to create a new process, which is called the child process, which runs concurrently with the process that makes the fork() call (parent process)."
            },
            {
                id: 16,
                question: "What is a Race Condition?",
                options: [
                    "Two processes competing for the CPU",
                    "The behavior of software where the output depends on the sequence or timing of other uncontrollable events",
                    "A fast process",
                    "A network speed test"
                ],
                correctAnswer: 1,
                explanation: "A race condition occurs when two or more threads can access shared data and they try to change it at the same time."
            },
            {
                id: 17,
                question: "Which of these is a non-preemptive scheduling algorithm?",
                options: [
                    "Round Robin",
                    "SRTF (Shortest Remaining Time First)",
                    "FCFS",
                    "Multilevel Queue"
                ],
                correctAnswer: 2,
                explanation: "FCFS (First Come First Serve) is non-preemptive. Once the CPU has been allocated to a process, that process keeps the CPU until it releases it."
            },
            {
                id: 18,
                question: "What is an Inode?",
                options: [
                    "Input Node",
                    "Internet Node",
                    "A data structure in a Unix-style file system that describes a file-system object",
                    "Internal Node"
                ],
                correctAnswer: 2,
                explanation: "An inode (index node) is a data structure in a Unix-style file system that describes a file-system object such as a file or a directory."
            },
            {
                id: 19,
                question: "What is Belady's Anomaly?",
                options: [
                    "Adding more RAM slows down the computer",
                    "Increasing the number of page frames results in more page faults",
                    "A deadlock condition",
                    "A scheduling error"
                ],
                correctAnswer: 1,
                explanation: "Belady's anomaly is the phenomenon in which increasing the number of page frames results in an increase in the number of page faults for certain memory access patterns (specifically with FIFO)."
            },
            {
                id: 20,
                question: "What is the 'Banker's Algorithm' used for?",
                options: [
                    "Calculating interest",
                    "Deadlock Avoidance",
                    "Memory Allocation",
                    "CPU Scheduling"
                ],
                correctAnswer: 1,
                explanation: "The Banker's algorithm is a resource allocation and deadlock avoidance algorithm that tests for safety by simulating the allocation for predetermined maximum possible amounts of all resources."
            }
        ]
    },
    {
        id: "db",
        title: "Database Management",
        icon: "🗄️",
        description: "Master the core concepts of Databases, including SQL, Normalization, ACID Properties, and Indexing.",
        questions: [
            {
                id: 1,
                question: "What does ACID stand for in the context of databases?",
                options: [
                    "Atomicity, Consistency, Isolation, Durability",
                    "Accuracy, Consistency, Isolation, Durability",
                    "Atomicity, Concurrency, Isolation, Durability",
                    "Atomicity, Consistency, Integrity, Durability"
                ],
                correctAnswer: 0,
                explanation: "ACID stands for Atomicity, Consistency, Isolation, and Durability. These are the standard properties that guarantee reliable processing of database transactions."
            },
            {
                id: 2,
                question: "Which SQL command is used to remove a table and all its data from the database?",
                options: [
                    "DELETE TABLE",
                    "DROP TABLE",
                    "REMOVE TABLE",
                    "TRUNCATE TABLE"
                ],
                correctAnswer: 1,
                explanation: "DROP TABLE removes the table definition and all its data. DELETE removes rows but keeps the table. TRUNCATE removes all rows but keeps the table structure."
            },
            {
                id: 3,
                question: "What is Normalization?",
                options: [
                    "The process of organizing data to minimize redundancy",
                    "The process of backing up data",
                    "The process of encrypting data",
                    "The process of creating indexes"
                ],
                correctAnswer: 0,
                explanation: "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity."
            },
            {
                id: 4,
                question: "Which normal form deals with partial dependency?",
                options: [
                    "First Normal Form (1NF)",
                    "Second Normal Form (2NF)",
                    "Third Normal Form (3NF)",
                    "Boyce-Codd Normal Form (BCNF)"
                ],
                correctAnswer: 1,
                explanation: "Second Normal Form (2NF) requires that the table is in 1NF and all non-key attributes are fully functional dependent on the primary key (no partial dependency)."
            },
            {
                id: 5,
                question: "What is a Primary Key?",
                options: [
                    "A key that allows duplicate values",
                    "A key that uniquely identifies each record in a table",
                    "A key that links two tables",
                    "A key used for encryption"
                ],
                correctAnswer: 1,
                explanation: "A Primary Key is a column (or set of columns) that uniquely identifies each row in a table. It cannot contain NULL values."
            },
            {
                id: 6,
                question: "What is a Foreign Key?",
                options: [
                    "A key used to encrypt data",
                    "A field (or collection of fields) in one table that refers to the PRIMARY KEY in another table",
                    "A unique identifier for a record",
                    "A key used for indexing"
                ],
                correctAnswer: 1,
                explanation: "A Foreign Key is a field (or collection of fields) in one table that refers to the PRIMARY KEY in another table. It enforces referential integrity."
            },
            {
                id: 7,
                question: "Which of the following is a NoSQL database?",
                options: [
                    "MySQL",
                    "PostgreSQL",
                    "MongoDB",
                    "Oracle"
                ],
                correctAnswer: 2,
                explanation: "MongoDB is a popular NoSQL document database. MySQL, PostgreSQL, and Oracle are relational (SQL) databases."
            },
            {
                id: 8,
                question: "What is the purpose of an Index in a database?",
                options: [
                    "To encrypt data",
                    "To speed up data retrieval operations",
                    "To store backup data",
                    "To enforce foreign key constraints"
                ],
                correctAnswer: 1,
                explanation: "Indexes are used to quickly locate data without having to search every row in a database table every time a database table is accessed."
            },
            {
                id: 9,
                question: "What is a Transaction?",
                options: [
                    "A single SQL query",
                    "A sequence of operations performed as a single logical unit of work",
                    "A backup operation",
                    "A connection to the database"
                ],
                correctAnswer: 1,
                explanation: "A transaction is a sequence of operations performed as a single logical unit of work. A transaction must be either entirely completed or aborted (all-or-nothing)."
            },
            {
                id: 10,
                question: "What does the 'Isolation' property in ACID guarantee?",
                options: [
                    "That data is saved permanently",
                    "That transactions are executed independently of one another",
                    "That all parts of a transaction succeed or fail together",
                    "That the database remains in a consistent state"
                ],
                correctAnswer: 1,
                explanation: "Isolation ensures that concurrent execution of transactions leaves the database in the same state that would have been obtained if the transactions were executed sequentially."
            },
            {
                id: 11,
                question: "Which SQL clause is used to filter the results of a GROUP BY query?",
                options: [
                    "WHERE",
                    "HAVING",
                    "ORDER BY",
                    "LIMIT"
                ],
                correctAnswer: 1,
                explanation: "The HAVING clause was added to SQL because the WHERE keyword could not be used with aggregate functions."
            },
            {
                id: 12,
                question: "What is a View?",
                options: [
                    "A physical table",
                    "A virtual table based on the result-set of an SQL statement",
                    "A backup of a table",
                    "A type of index"
                ],
                correctAnswer: 1,
                explanation: "A view is a virtual table based on the result-set of an SQL statement. It contains rows and columns, just like a real table."
            },
            {
                id: 13,
                question: "What is the difference between CHAR and VARCHAR?",
                options: [
                    "CHAR is variable length, VARCHAR is fixed length",
                    "CHAR is fixed length, VARCHAR is variable length",
                    "Both are the same",
                    "CHAR stores numbers, VARCHAR stores text"
                ],
                correctAnswer: 1,
                explanation: "CHAR is a fixed-length string data type, while VARCHAR is a variable-length string data type."
            },
            {
                id: 14,
                question: "Which join returns all records when there is a match in either left or right table?",
                options: [
                    "INNER JOIN",
                    "LEFT JOIN",
                    "RIGHT JOIN",
                    "FULL OUTER JOIN"
                ],
                correctAnswer: 3,
                explanation: "FULL OUTER JOIN returns all records when there is a match in either left or right table records."
            },
            {
                id: 15,
                question: "What is SQL Injection?",
                options: [
                    "A way to optimize queries",
                    "A code injection technique used to attack data-driven applications",
                    "A method to import data",
                    "A type of database backup"
                ],
                correctAnswer: 1,
                explanation: "SQL injection is a code injection technique where an attacker can execute malicious SQL statements that control a web application's database server."
            },
            {
                id: 16,
                question: "What is a Stored Procedure?",
                options: [
                    "A temporary table",
                    "A prepared SQL code that you can save, so the code can be reused over and over again",
                    "A type of index",
                    "A database trigger"
                ],
                correctAnswer: 1,
                explanation: "A stored procedure is a prepared SQL code that you can save, so the code can be reused over and over again."
            },
            {
                id: 17,
                question: "Which property ensures that once a transaction is committed, it will remain so, even in the event of power loss?",
                options: [
                    "Atomicity",
                    "Consistency",
                    "Isolation",
                    "Durability"
                ],
                correctAnswer: 3,
                explanation: "Durability guarantees that once a transaction has been committed, it will remain so, even in the event of power loss, crashes, or errors."
            },
            {
                id: 18,
                question: "What is a Cartesian Product in SQL?",
                options: [
                    "The result of a CROSS JOIN",
                    "The result of an INNER JOIN",
                    "The result of a LEFT JOIN",
                    "A mathematical function"
                ],
                correctAnswer: 0,
                explanation: "A Cartesian product is the result of joining every row of one table to every row of another table. This happens when you don't specify a condition in a join (CROSS JOIN)."
            },
            {
                id: 19,
                question: "What is Denormalization?",
                options: [
                    "The process of normalizing data",
                    "The process of trying to improve the read performance of a database, at the expense of losing some write performance, by adding redundant copies of data",
                    "Deleting data",
                    "Encrypting data"
                ],
                correctAnswer: 1,
                explanation: "Denormalization is the process of adding redundant data to a normalized database to improve read performance."
            },
            {
                id: 20,
                question: "Which command is used to modify an existing table structure?",
                options: [
                    "UPDATE TABLE",
                    "MODIFY TABLE",
                    "ALTER TABLE",
                    "CHANGE TABLE"
                ],
                correctAnswer: 2,
                explanation: "The ALTER TABLE statement is used to add, delete, or modify columns in an existing table."
            }
        ]
    },
    {
        id: "oop",
        title: "Object-Oriented Programming",
        icon: "🧩",
        description: "Master the core concepts of OOP, including Inheritance, Polymorphism, Encapsulation, and Design Patterns.",
        questions: [
            {
                id: 1,
                question: "Which of the following is NOT a pillar of Object-Oriented Programming?",
                options: [
                    "Encapsulation",
                    "Polymorphism",
                    "Compilation",
                    "Inheritance"
                ],
                correctAnswer: 2,
                explanation: "The four pillars of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism. Compilation is a process of converting code."
            },
            {
                id: 2,
                question: "What is Encapsulation?",
                options: [
                    "Hiding the implementation details and exposing only the functionality",
                    "Creating new classes from existing ones",
                    "The ability of an object to take on many forms",
                    "Wrapping data and methods into a single unit"
                ],
                correctAnswer: 3,
                explanation: "Encapsulation is the bundling of data (variables) and methods (functions) that operate on the data into a single unit (class), often restricting direct access to some components."
            },
            {
                id: 3,
                question: "What is Polymorphism?",
                options: [
                    "The ability of a message to be displayed in more than one form",
                    "Hiding data",
                    "Inheriting properties",
                    "Creating multiple objects"
                ],
                correctAnswer: 0,
                explanation: "Polymorphism allows objects of different classes to be treated as objects of a common superclass. It allows the same method to behave differently based on the object calling it."
            },
            {
                id: 4,
                question: "Which concept allows a class to derive properties and behavior from another class?",
                options: [
                    "Polymorphism",
                    "Inheritance",
                    "Encapsulation",
                    "Abstraction"
                ],
                correctAnswer: 1,
                explanation: "Inheritance allows a new class (subclass) to acquire the properties and methods of an existing class (superclass)."
            },
            {
                id: 5,
                question: "What is an Abstract Class?",
                options: [
                    "A class that cannot be instantiated",
                    "A class with no methods",
                    "A class with only static methods",
                    "A final class"
                ],
                correctAnswer: 0,
                explanation: "An abstract class is a class that cannot be instantiated on its own and is meant to be subclassed. It often contains abstract methods that must be implemented by subclasses."
            },
            {
                id: 6,
                question: "What is Method Overloading?",
                options: [
                    "Defining multiple methods with the same name but different parameters",
                    "Redefining a method in a subclass",
                    "Hiding a method",
                    "Calling a method from another method"
                ],
                correctAnswer: 0,
                explanation: "Method Overloading occurs when multiple methods in the same class have the same name but different parameter lists (compile-time polymorphism)."
            },
            {
                id: 7,
                question: "What is Method Overriding?",
                options: [
                    "Defining multiple methods with the same name but different parameters",
                    "Providing a specific implementation of a method that is already provided by the superclass",
                    "Creating a new method",
                    "Deleting a method"
                ],
                correctAnswer: 1,
                explanation: "Method Overriding occurs when a subclass provides a specific implementation for a method that is already defined in its superclass (runtime polymorphism)."
            },
            {
                id: 8,
                question: "Which access modifier makes members visible only within the same class?",
                options: [
                    "Public",
                    "Private",
                    "Protected",
                    "Default"
                ],
                correctAnswer: 1,
                explanation: "Private members are only accessible within the class they are declared in."
            },
            {
                id: 9,
                question: "What is a Constructor?",
                options: [
                    "A method to delete an object",
                    "A special method used to initialize objects",
                    "A static method",
                    "A variable"
                ],
                correctAnswer: 1,
                explanation: "A constructor is a special method that is called when an object is instantiated. It is used to initialize the object's state."
            },
            {
                id: 10,
                question: "What is the 'Singleton' design pattern?",
                options: [
                    "A pattern that ensures a class has only one instance",
                    "A pattern to create multiple objects",
                    "A pattern to hide implementation",
                    "A pattern to chain requests"
                ],
                correctAnswer: 0,
                explanation: "The Singleton pattern ensures that a class has only one instance and provides a global point of access to it."
            },
            {
                id: 11,
                question: "What is an Interface?",
                options: [
                    "A class with implementation",
                    "A blueprint of a class that contains only abstract methods and constants",
                    "A graphical user interface",
                    "A variable type"
                ],
                correctAnswer: 1,
                explanation: "An interface is a reference type in Java (and other languages) that is similar to a class. It is a collection of abstract methods. A class implements an interface, thereby inheriting the abstract methods of the interface."
            },
            {
                id: 12,
                question: "What is 'Composition' in OOP?",
                options: [
                    "Inheriting from a class",
                    "A 'has-a' relationship where objects are combined to create more complex objects",
                    "Writing code",
                    "Compiling code"
                ],
                correctAnswer: 1,
                explanation: "Composition is a design principle where a class is composed of one or more objects of other classes (Has-A relationship), as opposed to Inheritance (Is-A relationship)."
            },
            {
                id: 13,
                question: "Which of the following is true about a Static method?",
                options: [
                    "It belongs to the instance of the class",
                    "It belongs to the class itself, not instances",
                    "It cannot be called without creating an object",
                    "It can access non-static members directly"
                ],
                correctAnswer: 1,
                explanation: "Static methods belong to the class rather than any specific instance. They can be called without creating an object of the class."
            },
            {
                id: 14,
                question: "What is the 'Factory' design pattern?",
                options: [
                    "A pattern to create a single instance",
                    "A pattern that uses a superclass to define an interface for creating objects, but allows subclasses to alter the type of objects that will be created",
                    "A pattern to structure classes",
                    "A pattern to handle events"
                ],
                correctAnswer: 1,
                explanation: "The Factory Method pattern defines an interface for creating an object, but let subclasses decide which class to instantiate."
            },
            {
                id: 15,
                question: "What is the difference between an Interface and an Abstract Class?",
                options: [
                    "Interfaces can have state, Abstract Classes cannot",
                    "A class can implement multiple interfaces but extend only one abstract class",
                    "Abstract classes are faster",
                    "Interfaces are for UI only"
                ],
                correctAnswer: 1,
                explanation: "Multiple inheritance is supported through interfaces (a class can implement multiple interfaces), but a class can only extend one abstract class."
            },
            {
                id: 16,
                question: "What is 'Coupling'?",
                options: [
                    "The degree of dependency between modules",
                    "The number of methods in a class",
                    "Connecting to a database",
                    "Writing comments"
                ],
                correctAnswer: 0,
                explanation: "Coupling refers to the degree of direct knowledge that one element has of another. Loose coupling is desirable in software design."
            },
            {
                id: 17,
                question: "What is 'Cohesion'?",
                options: [
                    "Sticking code together",
                    "The degree to which the elements inside a module belong together",
                    "The size of a class",
                    "The speed of execution"
                ],
                correctAnswer: 1,
                explanation: "Cohesion refers to the degree to which the elements inside a module belong together. High cohesion is desirable (a class should do one thing well)."
            },
            {
                id: 18,
                question: "What is the 'Observer' design pattern?",
                options: [
                    "A pattern to watch videos",
                    "A subscription mechanism to notify multiple objects about any events that happen to the object they're observing",
                    "A pattern to create objects",
                    "A pattern to secure data"
                ],
                correctAnswer: 1,
                explanation: "The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically."
            },
            {
                id: 19,
                question: "What is a Destructor?",
                options: [
                    "A method to create an object",
                    "A method called when an object is destroyed/garbage collected",
                    "A method to delete a file",
                    "A virus"
                ],
                correctAnswer: 1,
                explanation: "A destructor is a method which is automatically invoked when the object is destroyed or goes out of scope. It is used to release resources."
            },
            {
                id: 20,
                question: "Which principle states that 'Software entities should be open for extension, but closed for modification'?",
                options: [
                    "Single Responsibility Principle",
                    "Open/Closed Principle",
                    "Liskov Substitution Principle",
                    "Interface Segregation Principle"
                ],
                correctAnswer: 1,
                explanation: "The Open/Closed Principle (OCP) states that software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification."
            }
        ]
    }
];
