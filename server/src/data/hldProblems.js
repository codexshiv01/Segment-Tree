export const hldProblems = [
    {
        title: "Design a URL Shortener (TinyURL)",
        slug: "design-url-shortener",
        description: "Design a scalable URL shortening service like TinyURL or bit.ly. The service should allow users to convert long URLs into short, unique aliases and redirect users to the original URL when they access the short alias.",
        difficulty: "Easy",
        companies: ["Google", "Meta", "Amazon", "Microsoft"],
        functional_requirements: [
            "Given a long URL, generate a unique short URL.",
            "When a user accesses a short URL, redirect them to the original long URL.",
            "Users should optionally be able to pick a custom short link for their URL.",
            "Links should expire after a default timespan, but users should be able to specify the expiration time."
        ],
        non_functional_requirements: [
            "Highly available: The system should be up 99.99% of the time.",
            "Low latency: URL redirection should happen in milliseconds.",
            "Scalable: The system should handle millions of reads/writes per day.",
            "Durable: Short links should persist for the configured duration."
        ],
        expected_components: [
            "API Gateway",
            "Load Balancer",
            "Application Server",
            "Distributed Cache (Redis)",
            "NoSQL Database (Key-Value Store)",
            "Key Generation Service (KGS)"
        ]
    },
    {
        title: "Design Instagram (Photo Sharing)",
        slug: "design-instagram",
        description: "Design a photo-sharing social networking service like Instagram where users can upload photos, follow other users, and view a feed of photos from people they follow.",
        difficulty: "Medium",
        companies: ["Meta", "ByteDance", "Snapchat"],
        functional_requirements: [
            "Users can upload photos.",
            "Users can follow other users.",
            "Users can view a news feed of photos from people they follow.",
            "Users can search for other users.",
            "Users can like and comment on photos."
        ],
        non_functional_requirements: [
            "Highly reliable: No uploaded photos should be lost.",
            "Acceptable latency: News feed generation should be fast (under 200ms).",
            "Consistency: Eventual consistency is acceptable for the feed.",
            "High storage capacity: The system must store petabytes of photo data."
        ],
        expected_components: [
            "Load Balancer",
            "Web Servers",
            "Application Servers",
            "Object Storage (S3)",
            "Relational Database (User Metadata)",
            "NoSQL Database (User Feed)",
            "Cache (Redis/Memcached)",
            "CDN"
        ]
    },
    {
        title: "Design a Rate Limiter",
        slug: "design-rate-limiter",
        description: "Design a distributed rate limiter that limits the number of requests a user can send to an API within a specific time window.",
        difficulty: "Medium",
        companies: ["Stripe", "Google", "Lyft", "Airbnb"],
        functional_requirements: [
            "Limit the number of requests an entity (user/IP) can send to an API within a time window (e.g., 10 requests per second).",
            "The API should return an HTTP 429 Too Many Requests error when the limit is exceeded.",
            "The system should support different rate limits for different APIs or user tiers."
        ],
        non_functional_requirements: [
            "Low latency: The rate limiter should not slow down API requests significantly.",
            "Accurate: The rate limiting logic should be precise.",
            "Scalable: The system should handle a high volume of traffic.",
            "Fault tolerant: If the rate limiter fails, it should fail open (allow requests) to avoid blocking legitimate traffic (optional tradeoff)."
        ],
        expected_components: [
            "API Gateway",
            "Rate Limiter Service",
            "Distributed Cache (Redis)",
            "Configuration Service"
        ]
    },
    {
        title: "Design a Chat System (WhatsApp)",
        slug: "design-chat-system",
        description: "Design a real-time chat application like WhatsApp or Facebook Messenger that supports one-on-one and group chats.",
        difficulty: "Hard",
        companies: ["Meta", "Uber", "Discord", "Slack"],
        functional_requirements: [
            "One-on-one chat between users.",
            "Group chats with multiple users.",
            "Online/Offline status indicators.",
            "Sent, Delivered, and Read receipts.",
            "Persistent chat history."
        ],
        non_functional_requirements: [
            "Low latency: Messages should be delivered in real-time.",
            "Consistency: Messages should be ordered correctly.",
            "Availability: The system should be highly available.",
            "Scalability: Support hundreds of millions of daily active users."
        ],
        expected_components: [
            "Load Balancer",
            "Chat Servers (WebSocket)",
            "Presence Servers",
            "API Servers",
            "NoSQL Database (Cassandra/HBase for chat history)",
            "Relational Database (User data)",
            "Message Queue (Kafka)",
            "Push Notification Service"
        ]
    },
    {
        title: "Design a Notification System",
        slug: "design-notification-system",
        description: "Design a scalable notification system that sends notifications to millions of users across different channels (Email, SMS, Push Notifications).",
        difficulty: "Medium",
        companies: ["Amazon", "Netflix", "LinkedIn", "Twitter"],
        functional_requirements: [
            "Send notifications via Email, SMS, and Push Notifications.",
            "Support bulk notifications (e.g., marketing campaigns).",
            "Support transactional notifications (e.g., OTP, order updates).",
            "Users can opt-out of specific notification types.",
            "Prioritize urgent notifications."
        ],
        non_functional_requirements: [
            "Reliability: Notifications must not be lost.",
            "Scalability: Handle millions of notifications per day.",
            "Throughput: High throughput for bulk notifications.",
            "Extensibility: Easy to add new notification channels."
        ],
        expected_components: [
            "Load Balancer",
            "Notification Service",
            "Message Queues (RabbitMQ/Kafka)",
            "Workers (Email, SMS, Push)",
            "Database (User preferences, logs)",
            "Third-party Providers (SendGrid, Twilio, FCM)"
        ]
    },
    {
        title: "Design YouTube (Video Streaming)",
        slug: "design-youtube",
        description: "Design a scalable video streaming platform like YouTube where users can upload, view, rate, and comment on videos.",
        difficulty: "Hard",
        companies: ["Google", "Netflix", "Twitch", "Hulu"],
        functional_requirements: [
            "Users can upload videos.",
            "Users can watch videos.",
            "Users can search for videos by title.",
            "Users can like/dislike and comment on videos.",
            "System records video view counts."
        ],
        non_functional_requirements: [
            "High Availability: The system should be always up.",
            "Scalability: Handle huge amounts of video data and traffic.",
            "Performance: Minimal buffering for video playback.",
            "Reliability: No uploaded video should be lost."
        ],
        expected_components: [
            "CDN",
            "Blob Storage (S3)",
            "Transcoding Servers",
            "Metadata Database (SQL/NoSQL)",
            "Cache (Redis)",
            "Queue (Kafka)"
        ]
    },
    {
        title: "Design Google Drive (File Storage)",
        slug: "design-google-drive",
        description: "Design a file storage and synchronization service like Google Drive or Dropbox.",
        difficulty: "Hard",
        companies: ["Google", "Dropbox", "Microsoft", "Apple"],
        functional_requirements: [
            "Users can upload and download files.",
            "File synchronization across multiple devices.",
            "File sharing with other users.",
            "Offline editing support.",
            "File versioning."
        ],
        non_functional_requirements: [
            "Reliability: Data loss is unacceptable.",
            "Availability: High availability for file access.",
            "Scalability: Support massive amounts of storage.",
            "Performance: Fast upload/download speeds."
        ],
        expected_components: [
            "Block Server",
            "Metadata Database",
            "Synchronization Service",
            "Message Queue",
            "Cloud Storage (S3)",
            "Notification Service"
        ]
    },
    {
        title: "Design Twitter (Social Graph & Feed)",
        slug: "design-twitter",
        description: "Design a microblogging platform like Twitter where users can post tweets, follow others, and view a timeline.",
        difficulty: "Medium",
        companies: ["Twitter", "Meta", "LinkedIn"],
        functional_requirements: [
            "Post tweets (text, images, videos).",
            "Follow other users.",
            "View home timeline (tweets from followed users).",
            "Search tweets.",
            "Trending topics."
        ],
        non_functional_requirements: [
            "Availability: System should be highly available.",
            "Latency: Timeline generation should be fast.",
            "Consistency: Eventual consistency is acceptable.",
            "Scalability: Handle read-heavy traffic."
        ],
        expected_components: [
            "Load Balancer",
            "User Service",
            "Tweet Service",
            "Timeline Service (Fan-out)",
            "Redis Cache",
            "Graph Database"
        ]
    },
    {
        title: "Design Uber (Ride Hailing)",
        slug: "design-uber",
        description: "Design a ride-hailing service like Uber or Lyft that connects passengers with drivers.",
        difficulty: "Hard",
        companies: ["Uber", "Lyft", "Grab", "Ola"],
        functional_requirements: [
            "Riders can request a ride.",
            "Drivers can accept ride requests.",
            "Real-time location tracking for drivers and riders.",
            "Fare calculation and payment.",
            "Rating system."
        ],
        non_functional_requirements: [
            "Real-time: Location updates must be real-time.",
            "Availability: High availability is critical.",
            "Consistency: Ride matching must be consistent (no double booking).",
            "Scalability: Handle high concurrency during peak hours."
        ],
        expected_components: [
            "QuadTree / Geohash Service",
            "Dispatch Service",
            "Location Service",
            "Payment Gateway",
            "Notification Service",
            "Database (PostgreSQL/Cassandra)"
        ]
    },
    {
        title: "Design a Web Crawler",
        slug: "design-web-crawler",
        description: "Design a scalable web crawler like the one used by Google Search to index the web.",
        difficulty: "Hard",
        companies: ["Google", "Microsoft", "Amazon"],
        functional_requirements: [
            "Crawl web pages starting from seed URLs.",
            "Extract and store content.",
            "Follow links to discover new pages.",
            "Respect robots.txt.",
            "Avoid duplicate crawling."
        ],
        non_functional_requirements: [
            "Scalability: Crawl billions of pages.",
            "Politeness: Do not overwhelm target servers.",
            "Extensibility: Support different content types.",
            "Robustness: Handle malformed HTML and server errors."
        ],
        expected_components: [
            "URL Frontier",
            "HTML Downloader",
            "DNS Resolver",
            "Content Parser",
            "Duplicate Eliminator",
            "Storage"
        ]
    },
    {
        title: "Design Amazon (E-commerce)",
        slug: "design-amazon",
        description: "Design an e-commerce platform like Amazon where users can browse products, add to cart, and purchase.",
        difficulty: "Medium",
        companies: ["Amazon", "Flipkart", "Walmart", "Shopify"],
        functional_requirements: [
            "Browse and search products.",
            "Add/remove items from shopping cart.",
            "Checkout and payment processing.",
            "Order history and tracking.",
            "Inventory management."
        ],
        non_functional_requirements: [
            "Availability: High availability for browsing.",
            "Consistency: Inventory must be consistent during checkout.",
            "Scalability: Handle traffic spikes (e.g., Black Friday).",
            "Security: Secure payment processing."
        ],
        expected_components: [
            "Product Service",
            "Cart Service",
            "Order Service",
            "Inventory Service",
            "Payment Gateway",
            "Database (SQL/NoSQL)"
        ]
    },
    {
        title: "Design Ticketmaster (Booking System)",
        slug: "design-ticketmaster",
        description: "Design a ticket booking system for events like concerts or movies.",
        difficulty: "Medium",
        companies: ["Ticketmaster", "BookMyShow", "Airbnb"],
        functional_requirements: [
            "Search for events.",
            "View available seats.",
            "Book tickets.",
            "Hold seats for a specific time during checkout.",
            "Payment processing."
        ],
        non_functional_requirements: [
            "Consistency: No double booking of seats.",
            "Concurrency: Handle high demand for popular events.",
            "Availability: High availability for browsing.",
            "Fairness: First come, first served."
        ],
        expected_components: [
            "Booking Service",
            "Seat Management Service",
            "Payment Service",
            "Queue (ActiveMQ/Kafka)",
            "Cache (Redis)",
            "Database (ACID compliant)"
        ]
    },
    {
        title: "Design Tinder (Location-based Matching)",
        slug: "design-tinder",
        description: "Design a location-based dating app like Tinder.",
        difficulty: "Medium",
        companies: ["Tinder", "Bumble", "Hinge"],
        functional_requirements: [
            "User profiles with photos.",
            "Swipe left/right mechanism.",
            "Match users based on location and preferences.",
            "Chat with matched users.",
            "Push notifications."
        ],
        non_functional_requirements: [
            "Low Latency: Swiping should be fast.",
            "Scalability: Handle millions of active users.",
            "Availability: High availability.",
            "Consistency: Matches should be consistent."
        ],
        expected_components: [
            "Geo-sharding Service",
            "Recommendation Engine",
            "Image Storage",
            "Chat Service",
            "User Database",
            "Cache"
        ]
    },
    {
        title: "Design Google Maps (Location Service)",
        slug: "design-google-maps",
        description: "Design a mapping and navigation service like Google Maps.",
        difficulty: "Hard",
        companies: ["Google", "Uber", "Apple"],
        functional_requirements: [
            "Calculate shortest path between two points.",
            "Estimate Arrival Time (ETA).",
            "Real-time traffic updates.",
            "Turn-by-turn navigation.",
            "Search for places (POIs)."
        ],
        non_functional_requirements: [
            "Accuracy: Routes and ETAs must be accurate.",
            "Latency: Fast route calculation.",
            "Availability: High availability.",
            "Scalability: Handle global map data."
        ],
        expected_components: [
            "Graph Processing Engine",
            "Traffic Service",
            "Location Service",
            "Map Tile Server",
            "CDN",
            "Database (Spatial)"
        ]
    },
    {
        title: "Design Zoom (Video Conferencing)",
        slug: "design-zoom",
        description: "Design a video conferencing system like Zoom or Microsoft Teams.",
        difficulty: "Hard",
        companies: ["Zoom", "Microsoft", "Google", "Cisco"],
        functional_requirements: [
            "1-on-1 and Group video calls.",
            "Screen sharing.",
            "Chat during calls.",
            "Recording meetings.",
            "Mute/Unmute participants."
        ],
        non_functional_requirements: [
            "Low Latency: Real-time communication is critical.",
            "Reliability: Stable connection.",
            "Scalability: Support large meetings.",
            "Bandwidth Efficiency: Adaptive video quality."
        ],
        expected_components: [
            "Signaling Server",
            "Media Server (SFU/MCU)",
            "UDP/TCP Protocols",
            "Load Balancer",
            "Redis",
            "Database"
        ]
    },
    {
        title: "Design Spotify (Audio Streaming)",
        slug: "design-spotify",
        description: "Design a music streaming service like Spotify.",
        difficulty: "Medium",
        companies: ["Spotify", "Apple", "Amazon"],
        functional_requirements: [
            "Stream music.",
            "Search for songs, artists, albums.",
            "Create and share playlists.",
            "Offline playback.",
            "Music recommendations."
        ],
        non_functional_requirements: [
            "Low Latency: Instant playback start.",
            "Availability: High availability.",
            "Scalability: Handle millions of songs and users.",
            "Reliability: No audio stuttering."
        ],
        expected_components: [
            "CDN",
            "Metadata Service",
            "Playlist Service",
            "Search Service",
            "Recommendation Engine",
            "Object Storage"
        ]
    },
    {
        title: "Design Reddit (Discussion Forum)",
        slug: "design-reddit",
        description: "Design a social news aggregation and discussion website like Reddit.",
        difficulty: "Medium",
        companies: ["Reddit", "Quora", "StackOverflow"],
        functional_requirements: [
            "Create posts (text, link, image).",
            "Upvote/Downvote posts and comments.",
            "Comment threads (nested).",
            "Subreddits (communities).",
            "Feed generation (Hot, New, Top)."
        ],
        non_functional_requirements: [
            "Latency: Fast feed loading.",
            "Availability: High availability.",
            "Consistency: Eventual consistency for votes.",
            "Scalability: Handle viral posts."
        ],
        expected_components: [
            "Post Service",
            "Vote Service",
            "Comment Service",
            "Feed Service",
            "Cache (Redis)",
            "Database (SQL/NoSQL)"
        ]
    },
    {
        title: "Design Airbnb (Hotel Booking)",
        slug: "design-airbnb",
        description: "Design a vacation rental online marketplace like Airbnb.",
        difficulty: "Medium",
        companies: ["Airbnb", "Booking.com", "Expedia"],
        functional_requirements: [
            "Hosts can list properties.",
            "Guests can search and book properties.",
            "Reviews and ratings.",
            "Payment processing.",
            "Messaging between host and guest."
        ],
        non_functional_requirements: [
            "Consistency: No double bookings.",
            "Availability: High availability for search.",
            "Latency: Fast search results.",
            "Security: Secure payments and data."
        ],
        expected_components: [
            "Search Service (Elasticsearch)",
            "Booking Service",
            "Payment Service",
            "Review Service",
            "Database (Relational)",
            "Image Storage"
        ]
    },
    {
        title: "Design Dropbox (File Sync)",
        slug: "design-dropbox",
        description: "Design a file hosting service like Dropbox that offers cloud storage and file synchronization.",
        difficulty: "Hard",
        companies: ["Dropbox", "Google", "Microsoft"],
        functional_requirements: [
            "Upload and download files.",
            "Sync files across devices.",
            "File versioning/history.",
            "Share files/folders.",
            "Offline access."
        ],
        non_functional_requirements: [
            "Reliability: Data durability is paramount.",
            "Performance: Fast sync speeds.",
            "Scalability: Store exabytes of data.",
            "Consistency: Strong consistency for file versions."
        ],
        expected_components: [
            "Block Server",
            "Metadata Server",
            "Notification Server",
            "Object Storage (S3)",
            "Local Client Database",
            "Queue"
        ]
    },
    {
        title: "Design Discord (Voice & Chat)",
        slug: "design-discord",
        description: "Design a VoIP and instant messaging social platform like Discord.",
        difficulty: "Hard",
        companies: ["Discord", "Slack", "Microsoft"],
        functional_requirements: [
            "Real-time text chat.",
            "Voice channels (low latency).",
            "Server/Guild management.",
            "User presence.",
            "Notifications."
        ],
        non_functional_requirements: [
            "Low Latency: Critical for voice.",
            "Scalability: Handle millions of concurrent users.",
            "Availability: High uptime.",
            "Consistency: Message ordering."
        ],
        expected_components: [
            "Gateway Server (WebSocket)",
            "Voice Server (WebRTC)",
            "Guild Service",
            "Chat Service",
            "Cassandra (Messages)",
            "Redis (State)"
        ]
    },
    {
        title: "Design Payment Gateway (Stripe)",
        slug: "design-payment-gateway",
        description: "Design a payment processing system like Stripe or PayPal.",
        difficulty: "Hard",
        companies: ["Stripe", "PayPal", "Square", "Visa"],
        functional_requirements: [
            "Process payments (Credit Card, Bank).",
            "Handle refunds.",
            "Payouts to merchants.",
            "Transaction history.",
            "Fraud detection."
        ],
        non_functional_requirements: [
            "Security: PCI-DSS compliance.",
            "Reliability: Zero transaction loss.",
            "Consistency: ACID transactions.",
            "Availability: High availability."
        ],
        expected_components: [
            "Payment Service",
            "Ledger Service",
            "Fraud Detection Service",
            "Wallet Service",
            "Database (ACID compliant)",
            "Message Queue"
        ]
    },
    {
        title: "Design Leaderboard System",
        slug: "design-leaderboard",
        description: "Design a real-time leaderboard system for a massive multiplayer online game.",
        difficulty: "Medium",
        companies: ["Activision", "EA", "Supercell"],
        functional_requirements: [
            "Update user scores.",
            "Get top K players (Global).",
            "Get user's rank.",
            "Get surrounding players (Friends/Neighbors).",
            "Real-time updates."
        ],
        non_functional_requirements: [
            "Low Latency: Real-time rank updates.",
            "Scalability: Handle millions of players.",
            "Availability: High availability.",
            "Accuracy: Correct ranking."
        ],
        expected_components: [
            "Score Service",
            "Leaderboard Service",
            "Redis (Sorted Sets)",
            "Database (Persistent storage)",
            "API Gateway",
            "Queue"
        ]
    },
    {
        title: "Design Typeahead Suggestion",
        slug: "design-typeahead",
        description: "Design a real-time search autocomplete system like Google Search suggestions.",
        difficulty: "Medium",
        companies: ["Google", "Amazon", "Bing"],
        functional_requirements: [
            "Suggest top K search terms based on prefix.",
            "Update suggestions based on trending searches.",
            "Spell check/correction.",
            "Personalized suggestions."
        ],
        non_functional_requirements: [
            "Low Latency: Suggestions in < 200ms.",
            "Availability: High availability.",
            "Scalability: Handle billions of queries.",
            "Freshness: Update trends frequently."
        ],
        expected_components: [
            "Trie Data Structure",
            "Suggestion Service",
            "Assembler/Aggregator",
            "Cache (Redis/Memcached)",
            "NoSQL Database",
            "Load Balancer"
        ]
    },
    {
        title: "Design Distributed Key-Value Store",
        slug: "design-kv-store",
        description: "Design a distributed key-value store like DynamoDB or Cassandra.",
        difficulty: "Hard",
        companies: ["Amazon", "Facebook", "Google"],
        functional_requirements: [
            "put(key, value) operation.",
            "get(key) operation.",
            "Configurable consistency (Strong/Eventual).",
            "High availability.",
            "Partition tolerance."
        ],
        non_functional_requirements: [
            "Scalability: Horizontal scaling.",
            "Fault Tolerance: Handle node failures.",
            "Performance: Low latency read/write.",
            "Durability: Data persistence."
        ],
        expected_components: [
            "Consistent Hashing",
            "Gossip Protocol",
            "Replication Manager",
            "Storage Engine (LSM Tree/B-Tree)",
            "Coordinator Node",
            "Merkle Trees"
        ]
    },
    {
        title: "Design News Feed System",
        slug: "design-news-feed",
        description: "Design a news feed system like Facebook News Feed.",
        difficulty: "Hard",
        companies: ["Meta", "LinkedIn", "Twitter"],
        functional_requirements: [
            "Generate news feed for user.",
            "Support different types of content (text, image, video).",
            "Append new posts to feed.",
            "Support 'Like' and 'Comment' activities.",
            "Rank posts by relevance."
        ],
        non_functional_requirements: [
            "Latency: Fast feed retrieval.",
            "Availability: High availability.",
            "Scalability: Handle millions of users.",
            "Freshness: New posts should appear quickly."
        ],
        expected_components: [
            "Feed Generation Service",
            "Feed Publishing Service",
            "Ranking Service",
            "Fan-out Service",
            "Redis Cache",
            "Graph Database"
        ]
    },
    {
        title: "Design Google Docs (Collaborative Editing)",
        slug: "design-google-docs",
        description: "Design a real-time collaborative document editing service like Google Docs.",
        difficulty: "Hard",
        companies: ["Google", "Microsoft", "Notion"],
        functional_requirements: [
            "Multiple users can edit a document simultaneously.",
            "Real-time updates to all connected users.",
            "Conflict resolution for concurrent edits.",
            "View edit history/version control.",
            "Offline support."
        ],
        non_functional_requirements: [
            "Low Latency: Edits should appear instantly.",
            "Consistency: All users must eventually see the same document state.",
            "Availability: High availability.",
            "Reliability: No data loss."
        ],
        expected_components: [
            "Operational Transformation (OT) / CRDTs",
            "WebSocket Server",
            "Document Service",
            "History Service",
            "Redis (Session state)",
            "NoSQL Database (Document storage)"
        ]
    },
    {
        title: "Design a Distributed Job Scheduler",
        slug: "design-job-scheduler",
        description: "Design a distributed job scheduler service like Cron or Quartz that can schedule and execute millions of jobs.",
        difficulty: "Hard",
        companies: ["Google", "Amazon", "Microsoft"],
        functional_requirements: [
            "Schedule one-time and recurring jobs.",
            "Execute jobs at the specified time.",
            "Support job dependencies.",
            "Retry failed jobs.",
            "Monitor job status."
        ],
        non_functional_requirements: [
            "Reliability: Jobs must be executed exactly once (or at least once).",
            "Scalability: Handle millions of jobs.",
            "Availability: High availability.",
            "Fault Tolerance: Handle node failures without missing jobs."
        ],
        expected_components: [
            "Scheduler Service",
            "Worker Nodes",
            "Job Queue (Kafka/RabbitMQ)",
            "Metadata Database",
            "Coordination Service (Zookeeper/Etcd)",
            "Dead Letter Queue"
        ]
    },
    {
        title: "Design a Metrics Monitoring System",
        slug: "design-metrics-monitoring",
        description: "Design a scalable metrics monitoring and alerting system like Prometheus or Datadog.",
        difficulty: "Hard",
        companies: ["Datadog", "Google", "Amazon"],
        functional_requirements: [
            "Collect metrics from various services.",
            "Store metrics as time-series data.",
            "Query and visualize metrics.",
            "Send alerts based on thresholds.",
            "Support custom tags/dimensions."
        ],
        non_functional_requirements: [
            "Write Heavy: Handle high ingestion rate.",
            "Scalability: Store petabytes of metric data.",
            "Availability: Always available for monitoring.",
            "Latency: Fast query execution."
        ],
        expected_components: [
            "Data Collection Agent",
            "Ingestion Service",
            "Time Series Database (TSDB)",
            "Query Service",
            "Alerting Service",
            "Visualization Dashboard"
        ]
    },
    {
        title: "Design a Distributed Logging System",
        slug: "design-logging-system",
        description: "Design a distributed logging system like ELK Stack (Elasticsearch, Logstash, Kibana) or Splunk.",
        difficulty: "Medium",
        companies: ["Splunk", "Elastic", "Google"],
        functional_requirements: [
            "Collect logs from multiple services.",
            "Index logs for searching.",
            "Search and filter logs.",
            "Visualize log data.",
            "Archive old logs."
        ],
        non_functional_requirements: [
            "Scalability: Handle massive log volume.",
            "Latency: Near real-time indexing.",
            "Reliability: No log loss.",
            "Durability: Long-term retention."
        ],
        expected_components: [
            "Log Agent (Filebeat/Fluentd)",
            "Log Aggregator (Logstash/Kafka)",
            "Indexer (Elasticsearch)",
            "Search Interface (Kibana)",
            "Archival Storage (S3)",
            "Buffer Queue"
        ]
    },
    {
        title: "Design a Stock Exchange",
        slug: "design-stock-exchange",
        description: "Design a high-frequency stock trading platform like NASDAQ or NYSE.",
        difficulty: "Hard",
        companies: ["Jane Street", "Citadel", "Coinbase"],
        functional_requirements: [
            "Place buy/sell orders (Limit, Market).",
            "Match orders in real-time.",
            "Broadcast market data (Ticker).",
            "Manage order book.",
            "Execute trades and settle."
        ],
        non_functional_requirements: [
            "Ultra Low Latency: Microsecond matching speed.",
            "Consistency: Strong consistency is mandatory.",
            "Fairness: FIFO order matching.",
            "Availability: High availability during trading hours."
        ],
        expected_components: [
            "Matching Engine",
            "Order Gateway",
            "Market Data Publisher",
            "Order Book (In-memory)",
            "Sequencer (UDP Multicast)",
            "Clearing House"
        ]
    },
    {
        title: "Design DoorDash (Food Delivery)",
        slug: "design-doordash",
        description: "Design a food delivery platform like DoorDash, UberEats, or Swiggy.",
        difficulty: "Medium",
        companies: ["DoorDash", "Uber", "Swiggy", "Zomato"],
        functional_requirements: [
            "Users can browse restaurants and menus.",
            "Users can place orders.",
            "Restaurants receive and accept orders.",
            "Couriers receive delivery requests.",
            "Real-time order tracking."
        ],
        non_functional_requirements: [
            "Real-time: Updates for all parties.",
            "Consistency: Order state must be consistent.",
            "Availability: High availability.",
            "Scalability: Handle peak meal times."
        ],
        expected_components: [
            "Order Service",
            "Restaurant Service",
            "Courier Dispatch Service",
            "Location Service",
            "Notification Service",
            "State Machine Engine"
        ]
    },
    {
        title: "Design Nearby Friends",
        slug: "design-nearby-friends",
        description: "Design a feature like Facebook's Nearby Friends that allows users to share their real-time location with friends.",
        difficulty: "Medium",
        companies: ["Meta", "Google", "Snapchat"],
        functional_requirements: [
            "Users can enable/disable location sharing.",
            "View friends who are nearby within a radius.",
            "Real-time location updates.",
            "Distance calculation.",
            "Privacy controls."
        ],
        non_functional_requirements: [
            "Low Latency: Location updates should be fast.",
            "Battery Efficiency: Minimize client-side battery usage.",
            "Scalability: Handle millions of concurrent users.",
            "Accuracy: Reasonable location accuracy."
        ],
        expected_components: [
            "Location Ingestion Service",
            "Geospatial Index (Redis Geo/QuadTree)",
            "Notification Service",
            "User Graph Service",
            "WebSocket Server",
            "Database"
        ]
    },
    {
        title: "Design a Distributed Lock Manager",
        slug: "design-distributed-lock",
        description: "Design a distributed lock manager like Google Chubby or Apache Zookeeper.",
        difficulty: "Hard",
        companies: ["Google", "Amazon", "Apache"],
        functional_requirements: [
            "Acquire lock.",
            "Release lock.",
            "Handle lock expiration (Leases).",
            "Watch for lock changes.",
            "Hierarchical locking (optional)."
        ],
        non_functional_requirements: [
            "Consistency: Strong consistency (CP system).",
            "Availability: High availability via replication.",
            "Reliability: No split-brain scenarios.",
            "Performance: Fast lock acquisition."
        ],
        expected_components: [
            "Consensus Algorithm (Paxos/Raft)",
            "Replicated Log",
            "Leader Election",
            "Client Library",
            "Persistent Storage",
            "Watch Mechanism"
        ]
    },
    {
        title: "Design an Ad Click Aggregator",
        slug: "design-ad-aggregator",
        description: "Design a system to aggregate ad clicks and impressions in real-time for billing and analytics.",
        difficulty: "Hard",
        companies: ["Google", "Meta", "Amazon"],
        functional_requirements: [
            "Track ad clicks and impressions.",
            "Filter invalid/fraudulent clicks.",
            "Aggregate metrics by ad, campaign, user.",
            "Real-time reporting dashboard.",
            "Billing generation."
        ],
        non_functional_requirements: [
            "Throughput: Handle millions of events per second.",
            "Accuracy: Exact counting for billing.",
            "Latency: Real-time analytics.",
            "Fault Tolerance: No data loss."
        ],
        expected_components: [
            "Event Collector",
            "Streaming Engine (Flink/Spark Streaming)",
            "Message Queue (Kafka)",
            "OLAP Database (Druid/ClickHouse)",
            "Fraud Detection Service",
            "Aggregation Service"
        ]
    },
    {
        title: "Design an Online Code Judge",
        slug: "design-code-judge",
        description: "Design an online code evaluation system like LeetCode, HackerRank, or Codeforces.",
        difficulty: "Medium",
        companies: ["Google", "Amazon", "Atlassian"],
        functional_requirements: [
            "Submit code in various languages.",
            "Compile and execute code against test cases.",
            "Measure execution time and memory usage.",
            "Return verdict (Accepted, TLE, Runtime Error).",
            "Security isolation."
        ],
        non_functional_requirements: [
            "Security: Prevent malicious code execution.",
            "Isolation: Sandboxed execution environment.",
            "Scalability: Handle concurrent submissions.",
            "Responsiveness: Fast feedback."
        ],
        expected_components: [
            "Submission Service",
            "Job Queue",
            "Execution Worker (Docker/Sandbox)",
            "Storage (Code & Test Cases)",
            "Result Service",
            "Load Balancer"
        ]
    },
    {
        title: "Design a CDN (Content Delivery Network)",
        slug: "design-cdn",
        description: "Design a global Content Delivery Network to serve static assets with low latency.",
        difficulty: "Hard",
        companies: ["Cloudflare", "Akamai", "AWS"],
        functional_requirements: [
            "Serve static content (images, JS, CSS).",
            "Cache content at edge locations.",
            "Origin fetch on cache miss.",
            "Cache invalidation/purging.",
            "Geo-routing to nearest edge."
        ],
        non_functional_requirements: [
            "Latency: Minimize TTFB (Time To First Byte).",
            "Availability: High availability.",
            "Scalability: Handle massive traffic.",
            "Efficiency: Optimize bandwidth costs."
        ],
        expected_components: [
            "Edge Servers (Reverse Proxy)",
            "Origin Servers",
            "DNS (Geo-DNS)",
            "Routing System",
            "Cache Manager",
            "Health Check Service"
        ]
    },
    {
        title: "Design a Digital Wallet",
        slug: "design-digital-wallet",
        description: "Design a digital wallet system like Paytm, Venmo, or PayPal for peer-to-peer money transfer.",
        difficulty: "Hard",
        companies: ["PayPal", "Stripe", "Google"],
        functional_requirements: [
            "Add money to wallet (from bank).",
            "Send money to another user.",
            "Withdraw money to bank.",
            "View transaction history.",
            "Balance check."
        ],
        non_functional_requirements: [
            "Consistency: Strong consistency (ACID) is non-negotiable.",
            "Security: Encryption and fraud prevention.",
            "Reliability: Zero transaction loss.",
            "Performance: Fast transaction processing."
        ],
        expected_components: [
            "Wallet Service",
            "Ledger Database (Double-entry bookkeeping)",
            "Payment Gateway Integration",
            "Fraud Detection",
            "Notification Service",
            "Distributed Lock"
        ]
    },
    {
        title: "Design a Fantasy Sports System",
        slug: "design-fantasy-sports",
        description: "Design a fantasy sports platform like Dream11 or DraftKings.",
        difficulty: "Medium",
        companies: ["Dream11", "DraftKings", "FanDuel"],
        functional_requirements: [
            "Create teams.",
            "Join contests.",
            "Real-time score updates based on live match events.",
            "Leaderboard generation.",
            "Wallet/Payment integration."
        ],
        non_functional_requirements: [
            "Real-time: Scores must update instantly.",
            "Scalability: Handle millions of concurrent users during matches.",
            "Consistency: Accurate scoring and ranking.",
            "Availability: High uptime during live events."
        ],
        expected_components: [
            "Scoring Engine",
            "Event Ingestion Service",
            "Leaderboard Service",
            "User Team Database",
            "Cache (Redis)",
            "Queue (Kafka)"
        ]
    },
    {
        title: "Design an IoT Fleet Management System",
        slug: "design-iot-fleet",
        description: "Design a system to monitor and manage a fleet of IoT devices (e.g., trucks, sensors).",
        difficulty: "Hard",
        companies: ["Tesla", "Uber", "Amazon"],
        functional_requirements: [
            "Ingest telemetry data (location, speed, fuel) from devices.",
            "Real-time monitoring dashboard.",
            "Alerts for anomalies (e.g., breakdown).",
            "Send commands to devices.",
            "Historical data analysis."
        ],
        non_functional_requirements: [
            "Throughput: Handle high volume of sensor data.",
            "Latency: Real-time alerts.",
            "Connectivity: Handle intermittent network.",
            "Scalability: Support millions of devices."
        ],
        expected_components: [
            "MQTT Broker",
            "Data Ingestion Service",
            "Time Series Database (InfluxDB)",
            "Rule Engine",
            "Command Service",
            "Dashboard"
        ]
    },
    {
        title: "Design a Distributed File System",
        slug: "design-dfs",
        description: "Design a distributed file system like HDFS or GFS for storing large datasets.",
        difficulty: "Hard",
        companies: ["Google", "Hadoop", "Facebook"],
        functional_requirements: [
            "Store large files (TB/PB size).",
            "Read/Write file operations.",
            "Replication for fault tolerance.",
            "Rack awareness.",
            "Automatic recovery."
        ],
        non_functional_requirements: [
            "Throughput: Optimize for high throughput (batch processing).",
            "Reliability: Handle hardware failures.",
            "Scalability: Scale to thousands of nodes.",
            "Consistency: Write-once-read-many model."
        ],
        expected_components: [
            "NameNode (Metadata)",
            "DataNodes (Storage)",
            "Client Library",
            "Replication Manager",
            "Heartbeat Mechanism",
            "Journal/Edit Log"
        ]
    },
    {
        title: "Design a Malware Scanning Service",
        slug: "design-malware-scanner",
        description: "Design a scalable service to scan uploaded files for malware and viruses.",
        difficulty: "Medium",
        companies: ["Google", "Dropbox", "Microsoft"],
        functional_requirements: [
            "Users upload files for scanning.",
            "Scan files using multiple antivirus engines.",
            "Report scan results.",
            "Quarantine malicious files.",
            "Update virus definitions."
        ],
        non_functional_requirements: [
            "Scalability: Handle large file volumes.",
            "Performance: Fast scan times.",
            "Reliability: Accurate detection.",
            "Security: Isolate scanning process."
        ],
        expected_components: [
            "Upload Service",
            "Scan Orchestrator",
            "Scanning Workers (Sandboxed)",
            "Result Database",
            "Notification Service",
            "Storage (Quarantine)"
        ]
    },
    {
        title: "Design a Flash Sale System",
        slug: "design-flash-sale",
        description: "Design a system to handle flash sales with extremely high concurrency and limited inventory.",
        difficulty: "Hard",
        companies: ["Amazon", "Flipkart", "Alibaba"],
        functional_requirements: [
            "Users can view flash sale items.",
            "Purchase items within a time window.",
            "Strict inventory control (no overselling).",
            "Queue users if traffic exceeds capacity.",
            "Payment processing."
        ],
        non_functional_requirements: [
            "Consistency: Strong inventory consistency.",
            "Scalability: Handle millions of requests per second.",
            "Availability: System must stay up under load.",
            "Fairness: First come, first served."
        ],
        expected_components: [
            "Rate Limiter",
            "Queueing Service",
            "Inventory Service (Redis Lua)",
            "Order Service",
            "Payment Gateway",
            "Static Content CDN"
        ]
    },
    {
        title: "Design a Recommendation System",
        slug: "design-recommendation-system",
        description: "Design a generic recommendation engine to serve personalized content to users.",
        difficulty: "Hard",
        companies: ["Netflix", "Amazon", "YouTube"],
        functional_requirements: [
            "Collect user behavior data.",
            "Generate candidate items.",
            "Rank items based on relevance.",
            "Serve recommendations via API.",
            "A/B testing support."
        ],
        non_functional_requirements: [
            "Latency: Fast recommendation serving.",
            "Scalability: Handle large user/item base.",
            "Freshness: Adapt to recent user actions.",
            "Accuracy: High relevance."
        ],
        expected_components: [
            "Data Collection Service",
            "Training Pipeline (Offline)",
            "Candidate Generation Service",
            "Ranking Service (Online)",
            "Feature Store",
            "Cache"
        ]
    },
    {
        title: "Design a Top-K Frequent Elements Service",
        slug: "design-top-k",
        description: "Design a service to find the top K most frequent elements in a real-time data stream (e.g., Trending Hashtags).",
        difficulty: "Medium",
        companies: ["Twitter", "Google", "Amazon"],
        functional_requirements: [
            "Ingest stream of elements.",
            "Query top K elements over a time window.",
            "Support sliding/tumbling windows.",
            "Handle heavy hitters."
        ],
        non_functional_requirements: [
            "Accuracy: Approximate results are acceptable (Count-Min Sketch).",
            "Latency: Real-time query response.",
            "Scalability: Handle massive data ingestion.",
            "Memory Efficiency: Bounded memory usage."
        ],
        expected_components: [
            "Stream Processor",
            "Count-Min Sketch / Heavy Hitter Algorithm",
            "Aggregation Service",
            "Query Service",
            "Load Balancer",
            "API Gateway"
        ]
    },
    {
        title: "Design a Distributed Counter",
        slug: "design-distributed-counter",
        description: "Design a distributed counter service that can handle millions of write requests per second (e.g., YouTube view count).",
        difficulty: "Medium",
        companies: ["YouTube", "Facebook", "Twitter"],
        functional_requirements: [
            "Increment counter.",
            "Get current counter value.",
            "Support multiple counters.",
            "Idempotency support."
        ],
        non_functional_requirements: [
            "Throughput: Extremely high write throughput.",
            "Consistency: Eventual consistency is acceptable.",
            "Scalability: Horizontal scaling.",
            "Availability: High availability."
        ],
        expected_components: [
            "Counter Service",
            "Sharded Counters (In-memory)",
            "Aggregation Service",
            "Persistent Storage",
            "Write-Behind Cache",
            "Load Balancer"
        ]
    },
    {
        title: "Design Robinhood (Stock Trading App)",
        slug: "design-robinhood",
        description: "Design a commission-free stock trading application like Robinhood or Zerodha.",
        difficulty: "Hard",
        companies: ["Robinhood", "Zerodha", "Groww"],
        functional_requirements: [
            "View real-time stock prices.",
            "Place buy/sell orders.",
            "View portfolio and holdings.",
            "Fund transfer.",
            "Market news feed."
        ],
        non_functional_requirements: [
            "Real-time: Price updates must be instantaneous.",
            "Security: Financial data must be secure.",
            "Consistency: Accurate portfolio balance.",
            "Compliance: Regulatory reporting."
        ],
        expected_components: [
            "Market Data Service",
            "Order Management System (OMS)",
            "Portfolio Service",
            "Payment Gateway",
            "Notification Service",
            "Database (ACID)"
        ]
    },
    {
        title: "Design Splitwise (Expense Sharing)",
        slug: "design-splitwise",
        description: "Design an expense sharing application like Splitwise.",
        difficulty: "Medium",
        companies: ["Splitwise", "Google", "Microsoft"],
        functional_requirements: [
            "Create groups and add friends.",
            "Add expenses and split them (equally, unequally).",
            "Simplify debts (minimize transactions).",
            "View balances.",
            "Settle up."
        ],
        non_functional_requirements: [
            "Consistency: Balances must be accurate.",
            "Availability: High availability.",
            "Latency: Fast expense addition.",
            "Offline support."
        ],
        expected_components: [
            "User Service",
            "Expense Service",
            "Group Service",
            "Debt Simplification Algorithm (Graph)",
            "Notification Service",
            "Database (Relational)"
        ]
    },
    {
        title: "Design Cricinfo (Live Sports Scoring)",
        slug: "design-cricinfo",
        description: "Design a live sports scoring and commentary platform like ESPNcricinfo.",
        difficulty: "Medium",
        companies: ["ESPN", "Dream11", "Cricbuzz"],
        functional_requirements: [
            "Live score updates (ball-by-ball).",
            "Text commentary.",
            "Match schedules and player stats.",
            "News and articles.",
            "Push notifications for wickets/milestones."
        ],
        non_functional_requirements: [
            "Latency: Updates must be near real-time.",
            "Scalability: Handle millions of concurrent users during matches.",
            "Availability: High uptime.",
            "Caching: Aggressive caching for static data."
        ],
        expected_components: [
            "Score Ingestion Service",
            "Live Feed Service (WebSocket)",
            "Content Management System (CMS)",
            "CDN",
            "Cache (Redis)",
            "Database"
        ]
    },
    {
        title: "Design Pastebin (Text Storage)",
        slug: "design-pastebin",
        description: "Design a text storage service like Pastebin where users can store and share plain text.",
        difficulty: "Easy",
        companies: ["Google", "Amazon", "Microsoft"],
        functional_requirements: [
            "Upload text and get a unique URL.",
            "Set expiration time for pastes.",
            "Access text via URL.",
            "Syntax highlighting (optional).",
            "Private/Password protected pastes."
        ],
        non_functional_requirements: [
            "Availability: High availability.",
            "Latency: Fast read/write.",
            "Durability: No data loss.",
            "Scalability: Handle millions of pastes."
        ],
        expected_components: [
            "Paste Service",
            "Key Generation Service",
            "Object Storage / Database",
            "Cache (Redis)",
            "Rate Limiter",
            "CDN"
        ]
    },
    {
        title: "Design Google Calendar (Scheduling)",
        slug: "design-google-calendar",
        description: "Design a calendar and scheduling service like Google Calendar.",
        difficulty: "Hard",
        companies: ["Google", "Microsoft", "Apple"],
        functional_requirements: [
            "Create, update, delete events.",
            "Invite users to events.",
            "Recurring events.",
            "Reminders/Notifications.",
            "Check availability (Free/Busy)."
        ],
        non_functional_requirements: [
            "Consistency: No double bookings.",
            "Availability: High availability.",
            "Latency: Fast sync across devices.",
            "Scalability: Handle global user base."
        ],
        expected_components: [
            "Calendar Service",
            "Event Service",
            "Notification Service",
            "Availability Service",
            "Database (NoSQL/SQL)",
            "Queue"
        ]
    },
    {
        title: "Design Yelp (Local Search)",
        slug: "design-yelp",
        description: "Design a local search and discovery service like Yelp or Google Maps Places.",
        difficulty: "Hard",
        companies: ["Yelp", "Google", "TripAdvisor"],
        functional_requirements: [
            "Search for businesses by name, category, location.",
            "View business details (hours, photos, reviews).",
            "Add reviews and photos.",
            "Filter by rating, price, distance.",
            "Nearby search."
        ],
        non_functional_requirements: [
            "Latency: Fast search results.",
            "Accuracy: Relevant search results.",
            "Availability: High availability.",
            "Scalability: Handle geo-spatial queries."
        ],
        expected_components: [
            "Search Service (Elasticsearch)",
            "Business Service",
            "Review Service",
            "Geospatial Index (QuadTree)",
            "CDN (Photos)",
            "Database"
        ]
    },
    {
        title: "Design Pinterest (Visual Discovery)",
        slug: "design-pinterest",
        description: "Design a visual discovery engine like Pinterest.",
        difficulty: "Hard",
        companies: ["Pinterest", "Instagram", "Google"],
        functional_requirements: [
            "Upload images (Pins).",
            "Organize images into collections (Boards).",
            "Follow users and boards.",
            "Home feed based on interests.",
            "Search for images."
        ],
        non_functional_requirements: [
            "Latency: Fast image loading.",
            "Scalability: Store petabytes of images.",
            "Availability: High availability.",
            "Performance: Efficient recommendation."
        ],
        expected_components: [
            "Pin Service",
            "Board Service",
            "Feed Service (Smart Feed)",
            "Image Storage (S3)",
            "Graph Database",
            "Machine Learning Service"
        ]
    },
    {
        title: "Design Coursera (Learning Platform)",
        slug: "design-coursera",
        description: "Design an online learning platform (MOOC) like Coursera or Udemy.",
        difficulty: "Medium",
        companies: ["Coursera", "Udemy", "LinkedIn"],
        functional_requirements: [
            "Browse and search courses.",
            "Enroll in courses.",
            "Watch video lectures.",
            "Take quizzes and assignments.",
            "Track progress and issue certificates."
        ],
        non_functional_requirements: [
            "Availability: High availability.",
            "Latency: Smooth video streaming.",
            "Scalability: Handle millions of students.",
            "Reliability: Accurate progress tracking."
        ],
        expected_components: [
            "Course Service",
            "Enrollment Service",
            "Video Streaming Service",
            "Progress Service",
            "Database",
            "CDN"
        ]
    },
    {
        title: "Design Zepto (Quick Commerce)",
        slug: "design-zepto",
        description: "Design a 10-minute grocery delivery service like Zepto or Blinkit.",
        difficulty: "Hard",
        companies: ["Zepto", "Blinkit", "Swiggy"],
        functional_requirements: [
            "Browse inventory from nearest dark store.",
            "Real-time inventory updates.",
            "Place orders.",
            "Assign delivery partner.",
            "Track order in real-time."
        ],
        non_functional_requirements: [
            "Latency: Ultra-low latency for inventory check.",
            "Consistency: Strict inventory consistency.",
            "Availability: High availability.",
            "Scalability: Handle demand spikes."
        ],
        expected_components: [
            "Inventory Service",
            "Order Service",
            "Dark Store Management",
            "Logistics/Dispatch Engine",
            "Geospatial Service",
            "Database"
        ]
    },
    {
        title: "Design IRCTC (Railway Booking)",
        slug: "design-irctc",
        description: "Design a railway reservation system capable of handling massive traffic spikes (Tatkal).",
        difficulty: "Hard",
        companies: ["IRCTC", "MakeMyTrip", "Expedia"],
        functional_requirements: [
            "Search trains between stations.",
            "Check seat availability.",
            "Book tickets for passengers.",
            "Handle payments.",
            "PNR status enquiry."
        ],
        non_functional_requirements: [
            "Concurrency: Handle millions of requests at 10 AM/11 AM.",
            "Consistency: No double booking (ACID).",
            "Availability: High availability.",
            "Performance: Fast transaction processing."
        ],
        expected_components: [
            "Booking Engine",
            "Inventory Management",
            "Payment Gateway",
            "Queue (Kafka)",
            "In-memory Database (Redis/Hazelcast)",
            "Relational Database"
        ]
    },
    {
        title: "Design UrbanCompany (Home Services)",
        slug: "design-urban-company",
        description: "Design an on-demand home service platform like UrbanCompany.",
        difficulty: "Medium",
        companies: ["UrbanCompany", "Uber", "TaskRabbit"],
        functional_requirements: [
            "Browse services (Cleaning, Repair).",
            "Book a professional for a slot.",
            "Match professional with user.",
            "Payments and Ratings.",
            "Service tracking."
        ],
        non_functional_requirements: [
            "Consistency: No double booking of professionals.",
            "Availability: High availability.",
            "Scalability: Handle city-wise scaling.",
            "Trust: Verification and safety."
        ],
        expected_components: [
            "Service Catalog",
            "Booking Service",
            "Partner Matching Engine",
            "Scheduling Service",
            "Database",
            "Notification Service"
        ]
    },
    {
        title: "Design LinkedIn (Professional Network)",
        slug: "design-linkedin",
        description: "Design a professional social networking platform like LinkedIn.",
        difficulty: "Hard",
        companies: ["LinkedIn", "Microsoft", "Meta"],
        functional_requirements: [
            "User profiles (Resume, Skills).",
            "Connections (Graph).",
            "Job posting and application.",
            "News feed.",
            "Messaging."
        ],
        non_functional_requirements: [
            "Scalability: Handle complex graph queries.",
            "Availability: High availability.",
            "Latency: Fast profile loading.",
            "Consistency: Eventual consistency for feed."
        ],
        expected_components: [
            "Profile Service",
            "Graph Service (Connections)",
            "Job Service",
            "Feed Service",
            "Search Service (Elasticsearch)",
            "Graph Database (Neo4j)"
        ]
    },
    {
        title: "Design Gmail (Email Service)",
        slug: "design-gmail",
        description: "Design a scalable email service like Gmail or Outlook.",
        difficulty: "Hard",
        companies: ["Google", "Microsoft", "Yahoo"],
        functional_requirements: [
            "Send and receive emails.",
            "Organize emails (Labels/Folders).",
            "Search emails.",
            "Spam filtering.",
            "Drafts and attachments."
        ],
        non_functional_requirements: [
            "Reliability: No email loss.",
            "Latency: Fast email delivery.",
            "Scalability: Store petabytes of email data.",
            "Availability: High availability."
        ],
        expected_components: [
            "SMTP/IMAP/POP3 Servers",
            "Mail Transfer Agent (MTA)",
            "Spam Filter",
            "Storage Service (BigTable/HBase)",
            "Search Index",
            "User Service"
        ]
    },
    {
        title: "Design Google Photos (Cloud Photo Storage)",
        slug: "design-google-photos",
        description: "Design a cloud-based photo storage and sharing service like Google Photos.",
        difficulty: "Hard",
        companies: ["Google", "Apple", "Amazon"],
        functional_requirements: [
            "Auto-backup photos from device.",
            "Organize by date, location, people (Face recognition).",
            "Search photos by content (e.g., 'Beach').",
            "Share albums.",
            "Edit photos."
        ],
        non_functional_requirements: [
            "Reliability: High durability.",
            "Scalability: Exabyte scale storage.",
            "Performance: Fast upload/download.",
            "Intelligence: AI-based organization."
        ],
        expected_components: [
            "Upload Service",
            "Image Processing Service",
            "Metadata Service",
            "AI/ML Service (Vision API)",
            "Blob Storage (Cold/Hot)",
            "CDN"
        ]
    },
    {
        title: "Design Truecaller (Caller Identification)",
        slug: "design-truecaller",
        description: "Design a caller identification and spam blocking service like Truecaller.",
        difficulty: "Medium",
        companies: ["Truecaller", "Google", "Apple"],
        functional_requirements: [
            "Identify incoming calls (Name lookup).",
            "Block spam calls.",
            "Search phone numbers.",
            "User profile management.",
            "Crowdsourced spam reporting."
        ],
        non_functional_requirements: [
            "Latency: Ultra-low latency lookup (< 200ms) during call.",
            "Scalability: Handle billions of numbers.",
            "Availability: High availability.",
            "Accuracy: Up-to-date directory."
        ],
        expected_components: [
            "Search Service",
            "Directory Service",
            "Spam Detection Engine",
            "User Graph",
            "KV Store (Redis/DynamoDB)",
            "Database"
        ]
    },
    {
        title: "Design Wikipedia (Knowledge Base)",
        slug: "design-wikipedia",
        description: "Design a collaborative online encyclopedia like Wikipedia.",
        difficulty: "Medium",
        companies: ["Wikimedia", "Google", "Quora"],
        functional_requirements: [
            "View articles.",
            "Search articles.",
            "Edit articles (Version control).",
            "View edit history.",
            "Moderation tools."
        ],
        non_functional_requirements: [
            "Read Heavy: Extremely high read-to-write ratio.",
            "Availability: High availability.",
            "Latency: Fast page loads.",
            "Consistency: Edits should appear quickly."
        ],
        expected_components: [
            "Article Service",
            "Edit Service",
            "Search Service",
            "Caching Layer (Varnish/CDN)",
            "Database (MediaWiki)",
            "Object Storage"
        ]
    },
    {
        title: "Design GitHub (Version Control Hosting)",
        slug: "design-github",
        description: "Design a web-based hosting service for version control using Git, like GitHub or GitLab.",
        difficulty: "Hard",
        companies: ["Microsoft", "GitLab", "Atlassian"],
        functional_requirements: [
            "Create repositories.",
            "Push/Pull code (Git operations).",
            "Pull Requests and Code Review.",
            "Issue tracking.",
            "CI/CD integration."
        ],
        non_functional_requirements: [
            "Reliability: No code loss.",
            "Availability: High availability.",
            "Performance: Fast git operations.",
            "Consistency: Strong consistency for repo state."
        ],
        expected_components: [
            "Git Service (RPC)",
            "Repository Storage (Gitaly)",
            "Metadata Database",
            "Web Server",
            "Background Workers",
            "Object Storage (LFS)"
        ]
    },
    {
        title: "Design StackOverflow (Q&A Platform)",
        slug: "design-stackoverflow",
        description: "Design a question and answer website for programmers like StackOverflow.",
        difficulty: "Medium",
        companies: ["StackOverflow", "Quora", "Reddit"],
        functional_requirements: [
            "Post questions.",
            "Post answers.",
            "Vote and Comment.",
            "Tagging system.",
            "Reputation system."
        ],
        non_functional_requirements: [
            "Read Heavy: High read traffic.",
            "Availability: High availability.",
            "Latency: Fast search and retrieval.",
            "Consistency: Eventual consistency for votes/views."
        ],
        expected_components: [
            "Q&A Service",
            "Vote Service",
            "Search Service (Elasticsearch)",
            "Tag Service",
            "Cache (Redis)",
            "Database (SQL Server)"
        ]
    },
    {
        title: "Design CodeSandbox (Online IDE)",
        slug: "design-codesandbox",
        description: "Design an online code editor and prototyping tool like CodeSandbox or Replit.",
        difficulty: "Hard",
        companies: ["CodeSandbox", "Replit", "Google"],
        functional_requirements: [
            "Write and edit code in browser.",
            "Run/Preview web applications.",
            "Install dependencies (npm).",
            "Collaborative editing.",
            "Share sandboxes."
        ],
        non_functional_requirements: [
            "Performance: Fast container startup.",
            "Security: Sandboxed execution.",
            "Scalability: Handle concurrent containers.",
            "Reliability: Auto-save."
        ],
        expected_components: [
            "Editor Service",
            "Container Orchestrator (K8s)",
            "File System Service",
            "Proxy Service",
            "Collaboration Service (OT)",
            "Database"
        ]
    },
    {
        title: "Design Canva (Online Graphic Design)",
        slug: "design-canva",
        description: "Design an online graphic design platform like Canva.",
        difficulty: "Hard",
        companies: ["Canva", "Adobe", "Figma"],
        functional_requirements: [
            "Drag-and-drop design editor.",
            "Templates and assets library.",
            "Export designs (PDF, PNG).",
            "Collaborative editing.",
            "Cloud storage for designs."
        ],
        non_functional_requirements: [
            "Performance: Smooth editor experience (WebGL/Canvas).",
            "Scalability: Handle millions of assets.",
            "Availability: High availability.",
            "Reliability: Auto-save."
        ],
        expected_components: [
            "Editor Service",
            "Asset Service",
            "Rendering Engine",
            "Collaboration Service",
            "Storage Service",
            "Database"
        ]
    }
];
