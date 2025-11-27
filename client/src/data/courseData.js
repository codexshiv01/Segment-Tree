export const courseChapters = [
    {
        id: 1,
        slug: "fundamentals",
        title: "System Design Fundamentals",
        icon: "🎯",
        duration: "45 min read",
        description: "Master the core principles that govern distributed systems, including scalability, reliability, and the trade-offs inherent in large-scale architecture.",
        sections: [
            {
                id: "intro",
                title: "Introduction to System Design",
                content: `System design is not just about connecting boxes with lines; it is the art and science of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements. In the modern tech landscape, this often means building systems that can handle millions of concurrent users, store petabytes of data, and remain available even when individual components fail.

At its core, system design is about **trade-offs**. There is rarely a single "correct" design for any given problem. Instead, there are multiple approaches, each with its own set of pros and cons. A good engineer knows how to evaluate these trade-offs based on the specific constraints of the project—whether that's budget, time-to-market, or strict consistency requirements.

**Why System Design Matters:**
When you build a small application for a few hundred users, a simple monolithic architecture with a single database is often sufficient. However, as your user base grows to millions, that same architecture will crumble under the load. You will face challenges like:
- **Latency:** How do you ensure the site loads quickly for users in Tokyo when your servers are in Virginia?
- **Availability:** What happens if your primary database server catches fire?
- **Consistency:** If two users buy the last concert ticket at the exact same millisecond, who gets it?

Mastering these concepts is the key to transitioning from a junior developer who writes code to a senior engineer who builds systems.`
            },
            {
                id: "scalability",
                title: "Scalability: The Holy Grail",
                content: `Scalability is the measure of a system's ability to handle growing amounts of work by adding resources to the system. It is often confused with performance, but they are distinct: performance is about "how fast," while scalability is about "how much." A scalable system is one that can maintain its performance levels even as the workload increases significantly.

There are two primary ways to scale a system, often described using the analogy of a pizza shop. If your shop gets too busy, you have two choices: get a bigger oven (Vertical Scaling) or buy more ovens (Horizontal Scaling).

### Vertical Scaling (Scale Up)

Vertical scaling involves adding more power (CPU, RAM, Storage) to your existing machine. In our analogy, this is like buying a massive industrial oven that can cook 100 pizzas at once.

**The Reality of Scaling Up:**
Vertical scaling is often the easiest first step. It requires no code changes; you simply upgrade your AWS EC2 instance from a \`t3.medium\` to an \`m5.2xlarge\`. It works wonderfully for small to medium-sized applications.

However, it has a hard ceiling. There is a limit to how much RAM or CPU you can stuff into a single server. Furthermore, the cost grows exponentially—a supercomputer is vastly more expensive than the sum of its parts. Most critically, it leaves you with a **Single Point of Failure (SPOF)**. If that one massive server goes down, your entire business stops.

### Horizontal Scaling (Scale Out)

Horizontal scaling means adding more machines to your pool of resources. Instead of one super-server, you have ten or a hundred commodity servers working in parallel. In the pizza shop, this is buying ten regular ovens.

**Why Scale Out?**
This is the preferred approach for large-scale distributed systems (like Google, Facebook, Amazon).
- **Infinite Scale:** Theoretically, you can keep adding servers forever.
- **Resilience:** If one server fails, the others pick up the slack.
- **Cost-Efficiency:** Standard hardware is cheap.

**The Hidden Complexity:**
Horizontal scaling introduces significant complexity. You now need a **Load Balancer** to distribute traffic. Your application must be **stateless**, meaning it shouldn't store user sessions locally (since the next request might hit a different server). You have to deal with data consistency issues—if User A updates their profile on Server 1, how does Server 2 know about it? This leads us to distributed databases and complex caching strategies.`
            },
            {
                id: "cap-theorem",
                title: "The CAP Theorem",
                content: `In the world of distributed systems, the CAP theorem is a fundamental principle that helps engineers understand the necessary trade-offs when designing a data store. Proposed by Eric Brewer, it states that a distributed data store can effectively provide only **two** of the following three guarantees:

![CAP Theorem Diagram](/images/cap-theorem.png)

1.  **Consistency (C):** Every read receives the most recent write or an error. This means that if you write data to one node, any subsequent read from any other node will return that new data immediately. The system acts as if it were a single machine.
2.  **Availability (A):** Every request receives a (non-error) response, without the guarantee that it contains the most recent write. The system always answers, even if some nodes are down or haven't caught up with the latest data.
3.  **Partition Tolerance (P):** The system continues to operate despite an arbitrary number of messages being dropped or delayed by the network between nodes.

**The "2 out of 3" Misconception:**
In a distributed system, network partitions (P) are inevitable. Cables get cut, switches fail, and packets get lost. Therefore, you **must** choose Partition Tolerance. This leaves you with a binary choice when a partition occurs:
-   **CP (Consistency + Partition Tolerance):** You choose to keep data consistent. If a partition occurs and nodes can't talk to each other, the system will refuse writes or return errors to ensure it doesn't accept conflicting data. (e.g., Banking systems, MongoDB, HBase).
-   **AP (Availability + Partition Tolerance):** You choose to keep the system up. If a partition occurs, nodes will keep accepting writes even if they can't sync with others. This leads to temporary inconsistency, which must be resolved later. (e.g., Social media feeds, Cassandra, DynamoDB).

**Real-World Implication:**
You rarely need "perfect" consistency for everything. If your Instagram follower count is off by one for a few seconds, nobody cares (AP is fine). But if your bank balance is off, it's a disaster (CP is required).`
            },
            {
                id: "consistency-models",
                title: "Consistency Models: The Spectrum",
                content: `Consistency isn't just "Strong" or "Weak"; it's a spectrum. Choosing the right model is about balancing the user experience against the cost and performance of the system.

### Strong Consistency
This is what we are used to in a single-server SQL database. Once a write is confirmed, nobody sees the old data ever again.
-   **Pros:** Easy to reason about. Application logic is simple.
-   **Cons:** High latency (must wait for replication). Poor availability during partitions.

### Eventual Consistency
This is the standard for modern high-scale systems. The guarantee is simply that "if no new updates are made to a given data item, eventually all accesses to that item will return the last updated value."
-   **The Reality:** "Eventually" might mean milliseconds, or it might mean seconds.
-   **Example:** You post a photo on Facebook. Your friend in the same room might not see it on their feed for 5 seconds. This is acceptable for social media.

### Causal Consistency
This is a middle ground. It ensures that operations that are causally related are seen by everyone in the same order.
-   **Example:** If Comment B is a reply to Comment A, the system guarantees that no user will see Comment B before they see Comment A. Unrelated comments might still appear out of order.

### Read-Your-Writes Consistency
This is a specific guarantee that is crucial for user experience. It ensures that if *I* make an update, *I* will see it immediately, even if no one else does.
-   **Scenario:** You update your profile bio. If you refresh the page and see the old bio, you'll think the app is broken. The system must ensure your read goes to the replica that handled your write, or use sticky sessions.`
            }
        ],
        practiceProblems: [
            "design-url-shortener",
            "design-pastebin"
        ]
    },
    {
        id: 2,
        slug: "back-of-envelope",
        title: "Back-of-Envelope Calculations",
        icon: "🧮",
        duration: "30 min read",
        description: "Learn the art of quick estimation to validate your architectural decisions before writing a single line of code.",
        sections: [
            {
                id: "intro",
                title: "Why Estimation is a Superpower",
                content: `In a system design interview (and in real life), you are often asked to design a system like "Twitter" or "YouTube." One of the first things you must do is estimate the scale. Is this a hobby project or a global platform?

Back-of-envelope calculations allow you to quickly sanity-check your design. If you calculate that you need to store 50PB of data per day, you instantly know that a single MySQL instance won't cut it. You need these numbers to decide on:
-   **Storage:** HDD vs. SSD vs. Object Storage (S3).
-   **Database:** SQL vs. NoSQL.
-   **Bandwidth:** Do we need a dedicated CDN?
-   **Compute:** How many servers do we need?

**The Golden Rule:** You don't need exact numbers. You need the right *order of magnitude*. 100TB is effectively the same engineering challenge as 120TB, but it is a completely different beast from 100GB.`
            },
            {
                id: "power-of-two",
                title: "The Powers of Two",
                content: `Computers work in binary. While we think in base-10, knowing your powers of 2 helps you approximate data sizes intuitively.

| Power | Exact Value | Approximation | Name |
|-------|-------------|---------------|------|
| 10 | 1,024 | 1 Thousand | 1 KB |
| 20 | 1,048,576 | 1 Million | 1 MB |
| 30 | 1,073,741,824 | 1 Billion | 1 GB |
| 40 | 1,099,511,627,776 | 1 Trillion | 1 TB |
| 50 | 1,125,899,906,842,624 | 1 Quadrillion | 1 PB |

**Mental Shortcut:**
-   $2^{10} \approx 10^3$ (Thousand)
-   $2^{20} \approx 10^6$ (Million)
-   $2^{30} \approx 10^9$ (Billion)

If you need to store 4 billion integers (4 bytes each), that's $4 \times 10^9 \times 4$ bytes $\approx 16$ GB. This fits in RAM on a modern server!`
            },
            {
                id: "latency-numbers",
                title: "Latency Numbers Every Programmer Should Know",
                content: `Originally compiled by Jeff Dean at Google, these numbers give you an intuition for how long things take. The absolute values change over time, but the *ratios* remain fairly constant.

| Operation | Time | Analogy |
|-----------|------|---------|
| L1 cache reference | 0.5 ns | One heartbeat |
| L2 cache reference | 7 ns | Yawning |
| Mutex lock/unlock | 100 ns | Making a coffee |
| Main memory reference | 100 ns | ... |
| Send 2K bytes over 1 Gbps network | 20,000 ns | ... |
| SSD random read | 150,000 ns (150 μs) | Weekend trip |
| Read 1 MB sequentially from memory | 250,000 ns (250 μs) | ... |
| Round trip within same datacenter | 500,000 ns (0.5 ms) | ... |
| Read 1 MB sequentially from SSD | 1,000,000 ns (1 ms) | ... |
| Disk seek (HDD) | 10,000,000 ns (10 ms) | Months of work |
| Read 1 MB sequentially from network | 10,000,000 ns (10 ms) | ... |
| Read 1 MB sequentially from disk | 30,000,000 ns (30 ms) | ... |
| Send packet CA -> Netherlands -> CA | 150,000,000 ns (150 ms) | Years |

**Key Takeaways:**
1.  **Memory is fast.** Reading from RAM is ~100x faster than reading from SSD.
2.  **Disk seeks are slow.** Avoid random disk I/O on HDDs at all costs. Sequential writes are much faster.
3.  **The Network is the bottleneck.** A round trip across the world takes forever (relatively). This is why CDNs and edge caching are critical.`
            },
            {
                id: "estimation-example",
                title: "Deep Dive: Estimating Twitter's Scale",
                content: `Let's walk through a real interview scenario. "Design Twitter." First, we estimate the load.

**1. Traffic Estimates (QPS)**
-   **DAU (Daily Active Users):** 300 Million.
-   **Write Volume:** Average user posts 2 tweets/day.
    -   $300M \times 2 = 600$ million tweets/day.
    -   $600M / 86400 \text{ sec} \approx 7,000$ tweets/second.
    -   **Peak Traffic:** Usually 2-3x average. Let's say ~15,000 TPS.
-   **Read Volume:** Average user views 100 tweets/day.
    -   $300M \times 100 = 30$ billion impressions/day.
    -   $30B / 86400 \approx 350,000$ QPS.
    -   **Ratio:** Read:Write ratio is roughly 50:1. This is a **read-heavy** system.

**2. Storage Estimates**
-   **Tweet Size:**
    -   tweet_id (8 bytes)
    -   user_id (8 bytes)
    -   text (140 chars * 2 bytes = 280 bytes)
    -   media_link (50 bytes)
    -   Total $\approx 350$ bytes. Let's round to 500 bytes for metadata.
-   **Daily Storage:**
    -   $600M \text{ tweets} \times 500 \text{ bytes} = 300 \text{ GB/day}$.
-   **Media Storage (The real beast):**
    -   Assume 10% of tweets have images/videos.
    -   Avg media size = 1MB.
    -   $60M \text{ media tweets} \times 1 \text{ MB} = 60 \text{ TB/day}$.
-   **5-Year Retention:**
    -   Text: $300 \text{ GB} \times 365 \times 5 \approx 550 \text{ TB}$. (Manageable)
    -   Media: $60 \text{ TB} \times 365 \times 5 \approx 110 \text{ PB}$. (Requires specialized object storage like S3/Glacier).

**3. Bandwidth Estimates**
-   **Ingress (Incoming):** $60 \text{ TB/day} / 86400 \approx 700 \text{ MB/sec}$.
-   **Egress (Outgoing):** Read traffic is 50x write traffic.
    -   $700 \text{ MB/sec} \times 50 \approx 35 \text{ GB/sec}$.
    -   This is massive. You absolutely need a CDN to offload this traffic, or your servers will melt.`
            }
        ],
        practiceProblems: [
            "design-youtube",
            "design-instagram",
            "design-twitter"
        ]
    },
    {
        id: 3,
        slug: "consistent-hashing",
        title: "Consistent Hashing",
        icon: "💍",
        duration: "35 min read",
        description: "The secret algorithm behind scalable distributed databases like DynamoDB and Cassandra.",
        sections: [
            {
                id: "problem",
                title: "The Rebalancing Nightmare",
                content: `Imagine you are building a distributed cache with $N$ servers. You need to decide which server stores key $k$. The simplest approach is modular hashing:
\`server_index = hash(key) % N\`

This works perfectly... until it doesn't.

**The Scenario:**
You have 4 servers.
-   Key "user_abc" hashes to 10. $10 \% 4 = 2$. Stored on Server 2.
-   Key "video_xyz" hashes to 25. $25 \% 4 = 1$. Stored on Server 1.

Now, Server 2 crashes. You are left with 3 servers. The formula becomes \`hash(key) % 3\`.
-   Key "user_abc" (hash 10): $10 \% 3 = 1$.
-   Key "video_xyz" (hash 25): $25 \% 3 = 1$.

**The Catastrophe:**
Almost *every single key* in your system has just changed its destination server.
1.  All clients suddenly get cache misses because they are looking for data on the wrong servers.
2.  They all hit the database simultaneously to fetch the data.
3.  The database gets overwhelmed and crashes.
4.  This is called a **Cache Avalanche**.

We need a way to distribute keys such that adding or removing a server only affects a small fraction of the keys.`
            },
            {
                id: "solution",
                title: "Enter Consistent Hashing",
                content: `Consistent hashing solves this problem by mapping both the data (keys) and the servers (nodes) onto a common "ring."

**The Mechanism:**
1.  **The Ring:** Imagine a circle representing the entire range of possible hash values (e.g., 0 to $2^{32}-1$).
2.  **Hashing Servers:** We hash the IP address or name of each server and place it on the ring.
3.  **Hashing Keys:** We hash the data key and place it on the same ring.
4.  **The Rule:** To find which server stores a key, go **clockwise** from the key's position on the ring until you find a server.

![Consistent Hashing Ring](/images/consistent-hashing.png)

**Why this is magic:**
If Server C goes down, only the keys that were previously mapping to Server C will now continue clockwise to the next server (Server D). The keys mapping to Server A and Server B are completely unaffected.
-   **Impact:** If you have $N$ servers and remove one, only $1/N$ of the keys need to move.
-   **Result:** No cache avalanche. The system remains stable.`
            },
            {
                id: "virtual-nodes",
                title: "Refining the Ring: Virtual Nodes",
                content: `The basic consistent hashing approach has a flaw: **Non-uniform distribution**.
It's possible that the random hashes of your servers place them very close together on the ring. This would result in one server handling a tiny slice of the ring, while another server handles a massive chunk (a "hotspot").

**The Solution: Virtual Nodes (Vnodes)**
Instead of placing a server on the ring once, we hash it multiple times using different hash functions (or by appending numbers like "ServerA-1", "ServerA-2").
-   Server A appears at 100 different positions on the ring.
-   Server B appears at 100 different positions.

**Benefits:**
1.  **Load Balancing:** The "slices" of the ring are now much smaller and more randomly interleaved. This statistically guarantees a more even distribution of keys across servers.
2.  **Heterogeneity:** If Server A is twice as powerful as Server B, you can assign it 200 virtual nodes while Server B gets 100. Server A will naturally attract twice as much traffic.`
            }
        ],
        practiceProblems: [
            "design-kv-store",
            "design-distributed-cache",
            "design-cdn"
        ]
    },
    {
        id: 4,
        slug: "message-queues",
        title: "Message Queues & Kafka",
        icon: "📬",
        duration: "40 min read",
        description: "Decoupling systems and handling massive data streams with asynchronous architecture.",
        sections: [
            {
                id: "why-queues",
                title: "The Power of Asynchrony",
                content: `In a tightly coupled system, Component A calls Component B directly. If Component B is slow, A waits. If B is down, A fails. This is fragile. Message queues introduce a buffer between components, allowing them to operate independently.

**Core Benefits:**
1.  **Decoupling:** The producer doesn't need to know who (or if anyone) is listening. It just drops a message in the box and moves on.
2.  **Load Leveling (Peak Shaving):** Imagine a flash sale. 10,000 orders arrive in one second. Your database can only handle 500 writes/sec. Without a queue, the database crashes. With a queue, the orders pile up in the buffer, and your workers process them at a steady 500/sec rate until the queue is empty. No crash, just a slight delay.
3.  **Reliability:** If the consumer crashes, the message stays in the queue. When the consumer restarts, it picks up right where it left off.`
            },
            {
                id: "rabbitmq-vs-kafka",
                title: "RabbitMQ vs. Apache Kafka",
                content: `These are the two giants of the messaging world, but they are fundamentally different.

**RabbitMQ: The Smart Broker**
RabbitMQ is a traditional message broker. It thinks of messages as "tasks" to be done.
-   **Model:** Push-based. The broker pushes messages to consumers.
-   **State:** Once a consumer acknowledges a message, RabbitMQ deletes it. It doesn't keep history.
-   **Routing:** Extremely powerful routing capabilities (Exchanges, Bindings). You can send messages to specific queues based on complex rules.
-   **Best For:** Complex routing, task processing, job queues where individual message delivery guarantees matter most.

**Apache Kafka: The Dumb Broker (Smart Consumer)**
Kafka is a distributed event streaming platform. It thinks of messages as a "log" of events.
-   **Model:** Pull-based. Consumers poll Kafka for new messages.
-   **State:** Kafka **stores** messages on disk for a set period (e.g., 7 days), even after they are consumed.
-   **Throughput:** Insanely high. Kafka is designed to move massive amounts of data with minimal overhead.
-   **Best For:** Analytics, log aggregation, event sourcing, stream processing, and high-throughput data pipelines.`
            },
            {
                id: "kafka-deep-dive",
                title: "Deep Dive: Kafka Architecture",
                content: `To understand Kafka, you must understand its unique structure. It is not just a queue; it is a partitioned commit log.

![Kafka Architecture Diagram](/images/kafka-architecture.png)

**1. Topics and Partitions**
A **Topic** is a category (e.g., "user-clicks"). A topic is split into **Partitions**.
-   A partition is an ordered, immutable sequence of records.
-   Kafka guarantees order *only within a partition*, not across the entire topic.

**2. The Consumer Group**
This is Kafka's magic trick for scalability.
-   A **Consumer Group** is a set of instances reading from a topic.
-   **Rule:** Each partition is consumed by exactly *one* consumer in the group.
-   If you have a topic with 4 partitions and a group with 2 consumers, each consumer reads from 2 partitions.
-   If you add 2 more consumers, each gets 1 partition.
-   **Scalability:** This allows you to parallelize processing. To process faster, add more partitions and more consumers.

**3. Offsets**
Since Kafka keeps messages around, how does it know what you've read? The **Offset**.
-   The offset is a simple integer pointing to the last message a consumer group processed.
-   Consumers track their own offsets. This means Consumer Group A can be at offset 100 (real-time), while Consumer Group B (a nightly batch job) is at offset 0, reading the same data from yesterday.`
            }
        ],
        practiceProblems: [
            "design-message-queue",
            "design-notification-system",
            "design-distributed-logging"
        ]
    },
    {
        id: 5,
        slug: "databases",
        title: "Database Design",
        icon: "🗄️",
        duration: "50 min read",
        description: "The heart of any system. Deep dive into SQL vs NoSQL, Sharding, Replication, and the internals of data storage.",
        sections: [
            {
                id: "sql-vs-nosql",
                title: "The Great Debate: SQL vs. NoSQL",
                content: `For decades, Relational Databases (RDBMS) like MySQL and Oracle ruled the world. Then came the web scale era, and NoSQL was born. Neither is "better"; they solve different problems.

**SQL (Relational)**
-   **Structure:** Rigid schema. Data is normalized into tables with rows and columns.
-   **Power:** JOINS. You can query relationships easily ("Find all users who live in NY and bought a hat").
-   **Guarantees:** ACID (Atomicity, Consistency, Isolation, Durability). Transactions are safe.
-   **Scaling:** Great at vertical scaling. Hard to scale horizontally (sharding is manual and painful).
-   **Use Case:** Financial systems, ERP, apps where data integrity is paramount.

**NoSQL (Non-Relational)**
-   **Structure:** Flexible. Documents (JSON), Key-Value pairs, or Wide-Column stores.
-   **Power:** Speed and Scale. Designed to run across clusters of cheap servers.
-   **Guarantees:** Often BASE (Basically Available, Soft state, Eventual consistency).
-   **Scaling:** Native horizontal scaling.
-   **Use Case:** Content management, real-time big data, user profiles, high-velocity ingestion.`
            },
            {
                id: "sharding",
                title: "Database Sharding: Breaking the Monolith",
                content: `When your dataset grows to 10TB, it won't fit on a single hard drive. When you get 100,000 writes per second, a single CPU can't handle the locks. You must shard.

![Database Sharding Diagram](/images/database-sharding.png)

Sharding means splitting your data across multiple machines. But how do you decide which data goes where?

**1. Range Based Sharding**
-   Users A-M go to Server 1. Users N-Z go to Server 2.
-   **Problem:** What if everyone's name starts with 'A'? Server 1 melts, Server 2 is idle. This is the "Hotspot" problem.

**2. Hash Based Sharding**
-   \`Shard_ID = hash(User_ID) % Total_Shards\`
-   **Pros:** Uniform distribution.
-   **Cons:** Resharding is a nightmare (see Consistent Hashing).

**3. Directory Based Sharding**
-   Keep a lookup table: "User 123 is on Shard 4".
-   **Pros:** Ultimate flexibility. You can move individual users.
-   **Cons:** The lookup table itself becomes a bottleneck and a single point of failure.`
            },
            {
                id: "replication",
                title: "Replication Strategies",
                content: `Replication means keeping copies of your data on multiple machines. We do this for **Availability** (if one fails, use the other) and **Read Scalability** (spread reads across copies).

**Master-Slave Replication (Leader-Follower)**
-   **The Master:** Handles ALL writes. Replicates data to slaves.
-   **The Slaves:** Read-only copies.
-   **Flow:** App writes to Master → Master writes to log → Slaves copy log → Slaves update themselves.
-   **Pros:** Simple. Great for read-heavy apps (most apps).
-   **Cons:** If Master fails, you have downtime while promoting a slave. Master is a write bottleneck.

**Master-Master Replication**
-   Two servers can both accept writes and sync to each other.
-   **Pros:** High write availability.
-   **Cons:** Conflict resolution is hell. What if User A sets \`age=20\` on Server 1 and \`age=30\` on Server 2 at the same time?

**Leaderless Replication (Dynamo Style)**
-   Any node can accept a write.
-   **Quorums:** To read, you ask $N$ nodes. If $W$ nodes say "success" for write, and $R$ nodes agree on read, and $R+W > N$, you are guaranteed consistency.
-   **Pros:** No single point of failure. Extremely robust.
-   **Cons:** Complex to implement. Read repair needed.`
            }
        ],
        practiceProblems: [
            "design-instagram",
            "design-amazon",
            "design-google-drive"
        ]
    },
    {
        id: 6,
        slug: "caching",
        title: "Caching Strategies",
        icon: "⚡",
        duration: "35 min read",
        description: "The single most effective way to speed up a system. Learn about caching layers, eviction policies, and invalidation.",
        sections: [
            {
                id: "intro",
                title: "The Memory Hierarchy",
                content: `Caching works because of the principle of **Locality of Reference**: data accessed once is likely to be accessed again soon.
Reading from memory (RAM) is roughly **100,000 times faster** than reading from a network call to a database.

**Where to Cache:**
1.  **Browser:** Cache static assets (images, CSS) locally.
2.  **CDN:** Cache content at the network edge, close to the user.
3.  **Load Balancer:** Termination of SSL and caching of hot routes.
4.  **Application:** In-memory objects.
5.  **Database:** Internal buffer pools and query caches.`
            },
            {
                id: "patterns",
                title: "Caching Patterns",
                content: `How you interact with the cache matters.

![Cache Patterns Diagram](/images/cache-patterns.png)

**1. Cache-Aside (Lazy Loading)**
This is the most common pattern.
-   App checks Cache.
-   **Miss:** App queries DB, writes to Cache, returns to user.
-   **Hit:** Returns immediately.
-   **Pros:** Resilient. If cache fails, system works (just slower). Data model in cache can differ from DB.
-   **Cons:** First request is always slow (Cold start).

**2. Write-Through**
-   App writes to Cache AND DB synchronously.
-   **Pros:** Cache is never stale. Data is safe.
-   **Cons:** Writes are slower (two steps).

**3. Write-Back (Write-Behind)**
-   App writes ONLY to Cache. Cache asynchronously writes to DB later.
-   **Pros:** Blazing fast writes.
-   **Cons:** **Data Loss Risk.** If cache crashes before syncing to DB, data is gone forever. Use only for non-critical data (e.g., likes, view counts).`
            },
            {
                id: "eviction",
                title: "Eviction Policies: What to Delete?",
                content: `A cache has limited size. When it's full, you must delete something to make room.

**LRU (Least Recently Used)**
-   Discard the item that hasn't been used for the longest time.
-   **Logic:** If you haven't looked at it recently, you probably won't look at it soon.
-   **Use Case:** Social media feeds, most web apps. This is the gold standard.

**LFU (Least Frequently Used)**
-   Count how many times an item is accessed. Discard the one with the lowest count.
-   **Logic:** Keep the popular stuff, even if it hasn't been accessed in the last 5 minutes.
-   **Use Case:** CDN assets, popular videos.

**TTL (Time To Live)**
-   Not strictly an eviction policy based on space, but on time. "Delete this after 5 minutes."
-   **Use Case:** Authentication tokens, volatile data (stock prices).`
            }
        ],
        practiceProblems: [
            "design-youtube",
            "design-netflix",
            "design-cdn"
        ]
    },
    {
        id: 7,
        slug: "load-balancing",
        title: "Load Balancing & Scalability",
        icon: "⚖️",
        duration: "30 min read",
        description: "The traffic cop of the internet. How to distribute millions of requests across thousands of servers.",
        sections: [
            {
                id: "load-balancer",
                title: "The Traffic Cop",
                content: `A Load Balancer (LB) sits between the client and the server farm. It accepts incoming network and application traffic and distributes the traffic across multiple backend servers.

![Load Balancer Diagram](/images/load-balancer.png)

**Why use one?**
1.  **Scalability:** You can add 10 more servers behind the LB, and the client never knows.
2.  **Availability:** The LB performs **Health Checks**. If Server 3 crashes, the LB stops sending it traffic. The user sees no error.
3.  **Security:** The LB can handle SSL Termination (decrypting HTTPS), shielding your backend servers from the internet.

**Hardware vs. Software LBs**
-   **Hardware (F5, Citrix):** Expensive, proprietary boxes. Insanely fast. Used by banks/enterprises.
-   **Software (Nginx, HAProxy):** Open source, runs on commodity Linux servers. Flexible and free. Used by almost everyone else.`
            },
            {
                id: "algorithms",
                title: "Routing Algorithms",
                content: `How does the LB decide which server gets the request?

**1. Round Robin**
-   Sequential: Server 1, then 2, then 3, then 1...
-   **Pros:** Dumb and simple.
-   **Cons:** Assumes all servers are equal. If Server 1 is a supercomputer and Server 2 is a raspberry pi, Server 2 will die.

**2. Least Connections**
-   Send traffic to the server with the fewest open connections.
-   **Pros:** Smart. Adapts to load. If Server 1 is stuck processing a heavy video upload, it won't get new requests.

**3. IP Hash (Sticky Sessions)**
-   Hash the client's IP address. User A *always* goes to Server 1.
-   **Pros:** Great for stateful apps (where session data is stored locally).
-   **Cons:** If Server 1 dies, User A loses their session. Hard to balance load if one user is very active.`
            }
        ],
        practiceProblems: [
            "design-uber",
            "design-amazon",
            "design-ticketmaster"
        ]
    },
    {
        id: 8,
        slug: "microservices",
        title: "Microservices Architecture",
        icon: "🧩",
        duration: "40 min read",
        description: "Decomposing monolithic applications into small, independent services.",
        sections: [
            {
                id: "monolith-vs-microservices",
                title: "Monolith vs. Microservices",
                content: `**The Monolith**
A single codebase where all components (UI, API, DB Access) live together.
-   **Pros:** Simple to develop, test, and deploy initially.
-   **Cons:** Tightly coupled. A bug in one module can crash the whole app. Scaling requires scaling the entire application, even if only one part is heavy.

**Microservices**
An architectural style where an application is a collection of small, independent services.
-   **Pros:**
    -   **Independent Scaling:** Scale the User Service separately from the Order Service.
    -   **Technology Agnostic:** Write one service in Go, another in Python.
    -   **Fault Isolation:** If the Payment Service fails, users can still browse products.
-   **Cons:**
    -   **Complexity:** Distributed systems are hard. Network latency, partial failures.
    -   **Data Consistency:** No cross-service transactions (JOINs).

![Microservices Architecture Diagram](/images/microservices.png)`
            },
            {
                id: "api-gateway",
                title: "The API Gateway",
                content: `In a microservices world, you don't want clients talking to 50 different services directly. Enter the API Gateway.

**Role of API Gateway:**
-   **Single Entry Point:** Clients talk to \`api.example.com\`.
-   **Routing:** Forwards \`/users\` to User Service, \`/orders\` to Order Service.
-   **Cross-Cutting Concerns:** Handles Authentication, SSL Termination, Rate Limiting, and Logging centrally.
-   **Protocol Translation:** Can convert external REST calls to internal gRPC calls.

**Popular Gateways:**
-   Kong
-   AWS API Gateway
-   Zuul (Netflix)`
            }
        ],
        practiceProblems: [
            "design-uber",
            "design-netflix"
        ]
    },
    {
        id: 9,
        slug: "api-design",
        title: "API Design & Communication",
        icon: "🔌",
        duration: "35 min read",
        description: "REST, GraphQL, gRPC, and how services talk to each other.",
        sections: [
            {
                id: "rest",
                title: "REST (Representational State Transfer)",
                content: `The standard for web APIs.
-   **Resource Based:** Everything is a resource (\`/users/123\`).
-   **Verbs:** GET (read), POST (create), PUT (update), DELETE (remove).
-   **Pros:** Simple, cacheable, universal support.
-   **Cons:** Over-fetching (getting too much data) or Under-fetching (need multiple requests).

![API Patterns Diagram](/images/api-patterns.png)`
            },
            {
                id: "graphql",
                title: "GraphQL",
                content: `Developed by Facebook to solve REST's inefficiencies.
-   **Query Language:** Client asks for exactly what it needs.
    \`\`\`graphql
    query {
      user(id: "123") {
        name
        email
      }
    }
    \`\`\`
-   **Pros:** No over-fetching. Strongly typed schema.
-   **Cons:** Complex caching. Can be slow if queries are too deep.`
            },
            {
                id: "grpc",
                title: "gRPC (Google Remote Procedure Call)",
                content: `High-performance RPC framework.
-   **Protocol Buffers:** Uses binary format instead of JSON. Much smaller and faster.
-   **HTTP/2:** Supports streaming and multiplexing.
-   **Use Case:** Internal microservices communication where speed is critical. Not usually for public APIs (browser support is limited).`
            }
        ],
        practiceProblems: [
            "design-news-feed",
            "design-chat-system"
        ]
    },
    {
        id: 10,
        slug: "rate-limiting",
        title: "Rate Limiting",
        icon: "🛑",
        duration: "30 min read",
        description: "Protecting your system from abuse and traffic spikes.",
        sections: [
            {
                id: "why-limit",
                title: "Why Rate Limit?",
                content: `**1. Prevent Abuse:** Stop DoS attacks and brute-force login attempts.
**2. Cost Control:** Prevent a single user from using all your resources.
**3. Fairness:** Ensure all users get a slice of the pie.

**Types:**
-   **User Rate Limiting:** "User X can make 100 requests/hour".
-   **Server Rate Limiting:** "Server Y can handle 1000 requests/sec".`
            },
            {
                id: "algorithms",
                title: "Algorithms",
                content: `**1. Token Bucket**
-   A bucket holds tokens. Tokens are added at a fixed rate.
-   Each request needs a token. If bucket is empty, request is dropped.
-   **Pros:** Allows bursts of traffic.

![Rate Limiting Diagram](/images/rate-limiting.png)

**2. Leaky Bucket**
-   Requests enter a queue (bucket) and are processed at a constant rate.
-   **Pros:** Smooths out traffic.
-   **Cons:** Bursts are slowed down.

**3. Fixed Window Counter**
-   "100 requests per minute". Reset counter at 12:00, 12:01, etc.
-   **Problem:** Spike at edges. 100 requests at 12:00:59 and 100 at 12:01:01 = 200 requests in 2 seconds!

**4. Sliding Window Log**
-   Keep timestamp of every request. Count how many in last minute.
-   **Pros:** Accurate.
-   **Cons:** High memory usage.`
            }
        ],
        practiceProblems: [
            "design-api-rate-limiter"
        ]
    },
    {
        id: 11,
        slug: "id-generation",
        title: "Distributed ID Generation",
        icon: "🆔",
        duration: "25 min read",
        description: "Generating unique IDs in a distributed system without a central database.",
        sections: [
            {
                id: "problem",
                title: "The Problem with Auto-Increment",
                content: `In a single MySQL database, \`AUTO_INCREMENT\` works great.
But in a sharded database, you can't use it.
-   Shard 1 generates ID 100.
-   Shard 2 generates ID 100.
-   **Conflict!**

**Requirements:**
-   **Unique:** No collisions.
-   **Sortable:** Ideally by time (older IDs < newer IDs).
-   **Compact:** 64-bit integers are better than 128-bit strings for indexing.`
            },
            {
                id: "solutions",
                title: "Solutions",
                content: `**1. UUID (Universally Unique Identifier)**
-   128-bit string. Generated locally.
-   **Pros:** Simple. No coordination needed.
-   **Cons:** Huge (128 bits). Not sortable. Bad for DB indexing.

**2. Ticket Server**
-   Centralized database just for IDs.
-   **Pros:** Simple numeric IDs.
-   **Cons:** Single Point of Failure.

**3. Twitter Snowflake**
-   64-bit integer.
-   **Structure:**
    -   1 bit: Sign bit (unused).
    -   41 bits: Timestamp (milliseconds since epoch).
    -   10 bits: Machine ID (allows 1024 servers).
    -   12 bits: Sequence number (allows 4096 IDs per millisecond per server).

![Snowflake ID Diagram](/images/snowflake-id.png)

-   **Pros:** Sortable by time. Distributed. High performance.
-   **Used By:** Twitter, Discord, Instagram.`
            }
        ],
        practiceProblems: [
            "design-unique-id-generator",
            "design-url-shortener"
        ]
    }
];
