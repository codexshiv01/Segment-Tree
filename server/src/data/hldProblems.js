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
    },
    {
        title: "Design a Unique ID Generator (Snowflake)",
        slug: "design-unique-id-generator",
        description: "Design a distributed unique ID generator like Twitter Snowflake that generates unique, time-sortable IDs.",
        difficulty: "Medium",
        companies: ["Twitter", "Discord", "Instagram"],
        functional_requirements: [
            "Generate unique IDs.",
            "IDs should be sortable by time.",
            "IDs should be 64-bit numeric.",
            "High availability and low latency."
        ],
        non_functional_requirements: [
            "Availability: 99.999% uptime.",
            "Latency: ID generation in microseconds.",
            "Scalability: Handle thousands of ID requests per second."
        ],
        expected_components: [
            "ID Generation Service",
            "Zookeeper (Worker ID assignment)",
            "NTP (Time synchronization)"
        ]
    },
    {
        title: "Design a Web Search Engine (Google Search)",
        slug: "design-web-search-engine",
        description: "Design a scalable web search engine that indexes the web and serves relevant search results.",
        difficulty: "Hard",
        companies: ["Google", "Microsoft", "Amazon"],
        functional_requirements: [
            "Crawl the web.",
            "Index web pages.",
            "Serve search results based on query relevance.",
            "Support typeahead suggestions."
        ],
        non_functional_requirements: [
            "Scalability: Index billions of pages.",
            "Latency: Search results in < 200ms.",
            "Availability: High availability.",
            "Freshness: Frequent updates to index."
        ],
        expected_components: [
            "Crawler",
            "Indexer",
            "PageRank Algorithm",
            "Searcher / Query Processor",
            "Document Store (BigTable)",
            "Cache"
        ]
    },
    {
        title: "Design a Distributed Cache (Redis)",
        slug: "design-distributed-cache",
        description: "Design a distributed caching system like Redis or Memcached.",
        difficulty: "Hard",
        companies: ["Amazon", "Microsoft", "Facebook"],
        functional_requirements: [
            "Put(key, value) and Get(key) operations.",
            "TTL (Time To Live) support.",
            "Eviction policies (LRU, LFU).",
            "Data persistence (optional)."
        ],
        non_functional_requirements: [
            "Latency: Sub-millisecond read/write.",
            "Scalability: Horizontal scaling via sharding.",
            "Availability: High availability.",
            "Consistency: Eventual or Strong depending on config."
        ],
        expected_components: [
            "Cache Nodes",
            "Consistent Hashing Ring",
            "Proxy / Client Library",
            "Gossip Protocol",
            "Persistence Manager"
        ]
    },
    {
        title: "Design a Message Queue (Kafka)",
        slug: "design-message-queue",
        description: "Design a distributed message queue like Apache Kafka or RabbitMQ.",
        difficulty: "Hard",
        companies: ["LinkedIn", "Uber", "Confluent"],
        functional_requirements: [
            "Publish messages to topics.",
            "Subscribe to topics.",
            "Message persistence.",
            "Message ordering within a partition.",
            "At-least-once or exactly-once delivery."
        ],
        non_functional_requirements: [
            "Throughput: Handle millions of messages per second.",
            "Latency: Low latency delivery.",
            "Scalability: Scale topics and partitions.",
            "Durability: No message loss."
        ],
        expected_components: [
            "Broker",
            "ZooKeeper / Controller",
            "Producer API",
            "Consumer API",
            "Log Storage",
            "Replication Manager"
        ]
    },
    {
        title: "Design a Live Streaming Platform (Twitch)",
        slug: "design-live-streaming",
        description: "Design a live video streaming platform like Twitch or YouTube Live.",
        difficulty: "Hard",
        companies: ["Amazon", "Google", "Facebook"],
        functional_requirements: [
            "Streamers can broadcast live video.",
            "Viewers can watch live streams.",
            "Live chat.",
            "Record streams for VOD.",
            "Support different resolutions (ABR)."
        ],
        non_functional_requirements: [
            "Latency: Low latency (seconds).",
            "Scalability: Handle millions of concurrent viewers.",
            "Availability: High availability.",
            "Reliability: Smooth playback."
        ],
        expected_components: [
            "Ingest Server (RTMP)",
            "Transcoder (FFmpeg)",
            "CDN",
            "Chat Service",
            "Metadata Database",
            "Protocol Converter (HLS/DASH)"
        ]
    },
    {
        title: "Design a Collaborative Whiteboard (Miro)",
        slug: "design-collaborative-whiteboard",
        description: "Design a real-time collaborative whiteboard like Miro or Excalidraw.",
        difficulty: "Hard",
        companies: ["Adobe", "Microsoft", "Google"],
        functional_requirements: [
            "Draw shapes, text, lines.",
            "Multiple users edit simultaneously.",
            "Real-time updates.",
            "Undo/Redo support.",
            "Save board state."
        ],
        non_functional_requirements: [
            "Latency: Real-time sync (< 100ms).",
            "Consistency: Conflict resolution.",
            "Scalability: Support many users per board.",
            "Reliability: No data loss."
        ],
        expected_components: [
            "WebSocket Gateway",
            "Canvas State Service",
            "CRDT / OT Engine",
            "Snapshot Service",
            "Redis Pub/Sub",
            "Database"
        ]
    },
    {
        title: "Design a Feature Flag Management System",
        slug: "design-feature-flag",
        description: "Design a system to manage feature toggles for gradual rollouts and A/B testing.",
        difficulty: "Medium",
        companies: ["Facebook", "Google", "Netflix"],
        functional_requirements: [
            "Create and update feature flags.",
            "Evaluate flags for users (Boolean, Multivariate).",
            "Target specific user segments.",
            "Audit logs for flag changes.",
            "SDKs for different languages."
        ],
        non_functional_requirements: [
            "Latency: Extremely low latency evaluation.",
            "Availability: 100% availability (fallback to defaults).",
            "Scalability: Handle billions of evaluations.",
            "Consistency: Fast propagation of updates."
        ],
        expected_components: [
            "Management Dashboard",
            "Evaluation Service",
            "Configuration Distribution (CDN/Edge)",
            "Client SDK (Local evaluation)",
            "Database",
            "Audit Service"
        ]
    },
    {
        title: "Design a Distributed Tracing System (Jaeger)",
        slug: "design-distributed-tracing",
        description: "Design a distributed tracing system to monitor microservices architecture.",
        difficulty: "Hard",
        companies: ["Uber", "Google", "Datadog"],
        functional_requirements: [
            "Collect traces from services.",
            "Visualize call graphs (Spans).",
            "Search traces by tags/latency.",
            "Analyze dependencies.",
            "Identify bottlenecks."
        ],
        non_functional_requirements: [
            "Throughput: Handle massive trace volume.",
            "Overhead: Minimal impact on application performance.",
            "Scalability: Store petabytes of trace data.",
            "Latency: Near real-time availability."
        ],
        expected_components: [
            "Trace Agent / Collector",
            "Ingestion Pipeline (Kafka)",
            "Storage Backend (Cassandra/Elasticsearch)",
            "Query Service",
            "UI Dashboard",
            "Sampler"
        ]
    },
    {
        title: "Design a Crash Reporting System (Sentry)",
        slug: "design-crash-reporting",
        description: "Design a system to collect and analyze application crashes and errors.",
        difficulty: "Medium",
        companies: ["Microsoft", "Google", "Meta"],
        functional_requirements: [
            "Capture crash reports/stack traces.",
            "Group similar crashes.",
            "Alert developers.",
            "Filter and search crashes.",
            "Symbolication of stack traces."
        ],
        non_functional_requirements: [
            "Throughput: Handle bursty traffic during outages.",
            "Reliability: No report loss.",
            "Scalability: Scale with user base.",
            "Security: PII scrubbing."
        ],
        expected_components: [
            "Ingestion API",
            "Processing Worker",
            "Symbolication Service",
            "Grouping Engine",
            "Database (ClickHouse/Postgres)",
            "Notification Service"
        ]
    },
    {
        title: "Design a CI/CD Pipeline Service",
        slug: "design-cicd-pipeline",
        description: "Design a continuous integration and deployment service like Jenkins or GitHub Actions.",
        difficulty: "Hard",
        companies: ["Google", "Netflix", "Amazon"],
        functional_requirements: [
            "Trigger builds on code commit.",
            "Run tests and linting.",
            "Build artifacts (Docker images, binaries).",
            "Deploy to environments.",
            "Pipeline visualization."
        ],
        non_functional_requirements: [
            "Isolation: Secure build environments.",
            "Scalability: Concurrent builds.",
            "Reliability: Accurate build status.",
            "Performance: Fast build times (Caching)."
        ],
        expected_components: [
            "Workflow Orchestrator",
            "Build Agents / Runners",
            "Artifact Repository",
            "Log Service",
            "Trigger Service (Webhooks)",
            "Database"
        ]
    },
    {
        title: "Design a Digital Signature Service (DocuSign)",
        slug: "design-digital-signature",
        description: "Design a service for secure digital document signing.",
        difficulty: "Medium",
        companies: ["Adobe", "Google", "Microsoft"],
        functional_requirements: [
            "Upload documents.",
            "Add signature fields.",
            "Send for signing via email.",
            "Sign documents securely.",
            "Audit trail."
        ],
        non_functional_requirements: [
            "Security: Non-repudiation and encryption.",
            "Compliance: Legal standards (eIDAS).",
            "Availability: High availability.",
            "Reliability: Document integrity."
        ],
        expected_components: [
            "Document Service",
            "Signing Service (PKI)",
            "Notification Service",
            "Audit Log Service",
            "Storage (S3)",
            "Identity Verification"
        ]
    },
    {
        title: "Design a Virtual Waiting Room",
        slug: "design-virtual-waiting-room",
        description: "Design a system to manage traffic surges by placing users in a queue.",
        difficulty: "Medium",
        companies: ["Ticketmaster", "Amazon", "Cloudflare"],
        functional_requirements: [
            "Intercept traffic to protected pages.",
            "Assign queue position to users.",
            "Redirect users when it's their turn.",
            "Estimate wait time.",
            "Fairness (FIFO)."
        ],
        non_functional_requirements: [
            "Scalability: Handle millions of users in queue.",
            "Latency: Minimal overhead for passed traffic.",
            "Availability: High availability.",
            "Security: Prevent queue jumping."
        ],
        expected_components: [
            "Edge Proxy / Load Balancer",
            "Queue Service",
            "Token/Ticket Service",
            "State Store (Redis)",
            "Client Polling / WebSocket",
            "Configuration Service"
        ]
    },
    {
        title: "Design a Real-time Ad Bidding System",
        slug: "design-ad-bidding",
        description: "Design a Real-Time Bidding (RTB) system for programmatic advertising.",
        difficulty: "Hard",
        companies: ["Google", "Meta", "The Trade Desk"],
        functional_requirements: [
            "Receive bid requests from SSPs.",
            "Select best ad to bid.",
            "Submit bid within deadline.",
            "Budget pacing.",
            "Click/Conversion tracking."
        ],
        non_functional_requirements: [
            "Latency: Strict SLA (< 100ms total).",
            "Throughput: Millions of QPS.",
            "Availability: High availability.",
            "Consistency: Accurate budget tracking."
        ],
        expected_components: [
            "Bidder Service",
            "Budget Service",
            "Ad Index / Retrieval",
            "User Profile Store",
            "Prediction Engine (CTR/CVR)",
            "Data Pipeline"
        ]
    },
    {
        title: "Design a Price Comparison Engine",
        slug: "design-price-comparison",
        description: "Design a system that scrapes and compares prices from multiple e-commerce sites.",
        difficulty: "Medium",
        companies: ["Amazon", "Google", "Expedia"],
        functional_requirements: [
            "Crawl e-commerce sites for product prices.",
            "Normalize and match products.",
            "Display price history.",
            "Alert users on price drops.",
            "Search products."
        ],
        non_functional_requirements: [
            "Freshness: Prices must be up-to-date.",
            "Scalability: Track millions of products.",
            "Accuracy: Correct product matching.",
            "Politeness: Respect crawl limits."
        ],
        expected_components: [
            "Crawler / Scraper",
            "Product Matcher (ML)",
            "Price History Database",
            "Alert Service",
            "Search Engine",
            "Proxy Manager"
        ]
    },
    {
        title: "Design a Translation Service (Google Translate)",
        slug: "design-translation-service",
        description: "Design a scalable machine translation service.",
        difficulty: "Medium",
        companies: ["Google", "Microsoft", "Meta"],
        functional_requirements: [
            "Translate text between languages.",
            "Detect source language.",
            "Support document translation.",
            "Voice translation (optional).",
            "Crowdsourced corrections."
        ],
        non_functional_requirements: [
            "Latency: Fast translation for text.",
            "Scalability: Handle high request volume.",
            "Accuracy: High quality translation.",
            "Availability: High availability."
        ],
        expected_components: [
            "Translation API",
            "Inference Engine (NMT Models)",
            "Language Detection Service",
            "Cache (Common phrases)",
            "Training Pipeline",
            "Feedback Loop"
        ]
    },
    {
        title: "Design a MapReduce Framework",
        slug: "design-mapreduce",
        description: "Design a distributed processing framework like Hadoop MapReduce.",
        difficulty: "Hard",
        companies: ["Google", "Amazon", "Hadoop"],
        functional_requirements: [
            "User submits Map and Reduce jobs.",
            "Split input data.",
            "Distribute tasks to workers.",
            "Shuffle and Sort intermediate data.",
            "Store output."
        ],
        non_functional_requirements: [
            "Fault Tolerance: Handle worker failures.",
            "Scalability: Scale to thousands of nodes.",
            "Efficiency: Data locality optimization.",
            "Reliability: Correct results."
        ],
        expected_components: [
            "Job Tracker / Master",
            "Task Tracker / Worker",
            "Distributed File System (DFS)",
            "Scheduler",
            "Shuffle Handler",
            "Heartbeat Monitor"
        ]
    },
    {
        title: "Design a Location History Service",
        slug: "design-location-history",
        description: "Design a service to store and query user location history like Google Timeline.",
        difficulty: "Medium",
        companies: ["Google", "Uber", "Apple"],
        functional_requirements: [
            "Ingest location data points periodically.",
            "Store trajectory data.",
            "Query history by time range.",
            "Detect places visited.",
            "Delete history."
        ],
        non_functional_requirements: [
            "Write Heavy: High ingestion rate.",
            "Privacy: Strict data access controls.",
            "Scalability: Store petabytes of location data.",
            "Efficiency: Compression of trajectories."
        ],
        expected_components: [
            "Ingestion Service",
            "Trajectory Compression (Kalman Filter)",
            "Time Series Database / Cassandra",
            "Geospatial Index",
            "Query Service",
            "Privacy/Encryption Service"
        ]
    },
    {
        title: "Design a Podcast Hosting Platform",
        slug: "design-podcast-platform",
        description: "Design a platform to host and distribute podcasts like Spotify or Apple Podcasts.",
        difficulty: "Medium",
        companies: ["Spotify", "Apple", "Amazon"],
        functional_requirements: [
            "Upload audio episodes.",
            "RSS feed generation.",
            "Analytics (downloads, listens).",
            "Search and discovery.",
            "Monetization (Ads/Subscription)."
        ],
        non_functional_requirements: [
            "Availability: High availability for RSS feeds.",
            "Scalability: Serve large audio files globally.",
            "Latency: Fast download/streaming.",
            "Consistency: Analytics accuracy."
        ],
        expected_components: [
            "Upload Service",
            "RSS Generator",
            "CDN (Audio files)",
            "Analytics Engine",
            "Search Service",
            "Database"
        ]
    },
    {
        title: "Design a Newsletter Platform (Substack)",
        slug: "design-newsletter-platform",
        description: "Design a platform for creating and sending newsletters.",
        difficulty: "Medium",
        companies: ["Twitter", "LinkedIn", "Substack"],
        functional_requirements: [
            "Create and edit posts.",
            "Subscribe/Unsubscribe users.",
            "Send bulk emails.",
            "Paid subscriptions.",
            "Analytics (Open rate, CTR)."
        ],
        non_functional_requirements: [
            "Reliability: High email deliverability.",
            "Throughput: Send millions of emails quickly.",
            "Scalability: Handle large mailing lists.",
            "Availability: High availability."
        ],
        expected_components: [
            "Editor Service",
            "Subscription Service",
            "Email Sender / MTA",
            "Queue (Kafka/RabbitMQ)",
            "Analytics Service",
            "Payment Gateway"
        ]
    },
    {
        title: "Design a Survey System (SurveyMonkey)",
        slug: "design-survey-system",
        description: "Design a system to create surveys and collect responses.",
        difficulty: "Medium",
        companies: ["Google", "Qualtrics", "Microsoft"],
        functional_requirements: [
            "Create surveys with various question types.",
            "Collect responses.",
            "Analyze results (Charts/Graphs).",
            "Export data.",
            "Logic branching."
        ],
        non_functional_requirements: [
            "Consistency: No lost responses.",
            "Scalability: Handle viral surveys.",
            "Availability: High availability.",
            "Security: Data privacy."
        ],
        expected_components: [
            "Survey Builder Service",
            "Response Collection Service",
            "Analytics Engine",
            "Database (Document Store)",
            "Cache",
            "Export Service"
        ]
    },
    {
        title: "Design a Platform as a Service (Heroku)",
        slug: "design-paas",
        description: "Design a Platform as a Service (PaaS) that allows developers to build, run, and operate applications entirely in the cloud.",
        difficulty: "Hard",
        companies: ["Salesforce", "Google", "Amazon"],
        functional_requirements: [
            "Deploy applications from code (Git push).",
            "Manage application lifecycle (Start, Stop, Restart).",
            "Scale applications (Vertical/Horizontal).",
            "Add-ons marketplace (Databases, Caches).",
            "View logs and metrics."
        ],
        non_functional_requirements: [
            "Isolation: Secure containerization.",
            "Scalability: Handle thousands of apps.",
            "Availability: High uptime for hosted apps.",
            "Performance: Fast deployment."
        ],
        expected_components: [
            "Build Service (Buildpacks)",
            "Container Orchestrator (K8s/Diego)",
            "Router / Load Balancer",
            "Log Aggregator",
            "Service Broker",
            "Database"
        ]
    },
    {
        title: "Design a Serverless Compute Platform (AWS Lambda)",
        slug: "design-serverless-platform",
        description: "Design a serverless compute service that runs code in response to events.",
        difficulty: "Hard",
        companies: ["Amazon", "Google", "Microsoft"],
        functional_requirements: [
            "Upload and manage functions.",
            "Trigger functions via events (HTTP, Queue, Timer).",
            "Auto-scaling based on request volume.",
            "Billing based on execution time.",
            "Support multiple runtimes."
        ],
        non_functional_requirements: [
            "Latency: Low cold start latency.",
            "Isolation: Secure execution environment (Firecracker/gVisor).",
            "Scalability: Handle bursty traffic.",
            "Reliability: Guaranteed execution."
        ],
        expected_components: [
            "Frontend / API Gateway",
            "Worker Manager",
            "Function Scheduler",
            "MicroVM Manager",
            "Storage (Code)",
            "Metric/Billing Service"
        ]
    },
    {
        title: "Design an Object Storage Service (Amazon S3)",
        slug: "design-object-storage",
        description: "Design a scalable object storage service for storing and retrieving any amount of data.",
        difficulty: "Hard",
        companies: ["Amazon", "Google", "Microsoft"],
        functional_requirements: [
            "Create buckets.",
            "Upload/Download objects (PUT/GET).",
            "Delete objects.",
            "List objects.",
            "Access control policies."
        ],
        non_functional_requirements: [
            "Durability: 99.999999999% durability (11 9s).",
            "Availability: High availability.",
            "Scalability: Exabyte scale.",
            "Throughput: High read/write throughput."
        ],
        expected_components: [
            "Frontend / API Node",
            "Metadata Service",
            "Storage Node / Data Node",
            "Placement Driver",
            "Replication Manager",
            "Garbage Collector"
        ]
    },
    {
        title: "Design a Domain Name System (DNS)",
        slug: "design-dns",
        description: "Design a hierarchical and decentralized naming system for computers, services, or other resources connected to the Internet.",
        difficulty: "Hard",
        companies: ["Google", "Cloudflare", "Amazon"],
        functional_requirements: [
            "Resolve domain names to IP addresses.",
            "Register new domains.",
            "Update DNS records (A, CNAME, MX).",
            "Support caching (TTL).",
            "Hierarchical structure (Root, TLD, Authoritative)."
        ],
        non_functional_requirements: [
            "Availability: Extremely high availability.",
            "Latency: Ultra-low latency resolution.",
            "Consistency: Eventual consistency for updates.",
            "Scalability: Handle global traffic."
        ],
        expected_components: [
            "Root Name Servers",
            "TLD Name Servers",
            "Authoritative Name Servers",
            "Recursive Resolvers",
            "Caching Layer",
            "Management API"
        ]
    },
    {
        title: "Design a Virtual Private Network (VPN)",
        slug: "design-vpn",
        description: "Design a VPN service to provide secure and private internet access.",
        difficulty: "Medium",
        companies: ["Cisco", "Palo Alto Networks", "Google"],
        functional_requirements: [
            "Authenticate users.",
            "Establish secure tunnel.",
            "Encrypt traffic.",
            "Mask user IP address.",
            "Support multiple protocols (OpenVPN, WireGuard)."
        ],
        non_functional_requirements: [
            "Security: Strong encryption.",
            "Privacy: No logs policy.",
            "Performance: Minimal speed loss.",
            "Availability: Global server network."
        ],
        expected_components: [
            "VPN Client",
            "VPN Server / Gateway",
            "Authentication Service (Radius/LDAP)",
            "Key Management Service",
            "Tunneling Protocol",
            "Load Balancer"
        ]
    },
    {
        title: "Design a Peer-to-Peer File Sharing System (BitTorrent)",
        slug: "design-p2p-file-sharing",
        description: "Design a decentralized P2P file sharing protocol.",
        difficulty: "Hard",
        companies: ["Bram Cohen", "Tron", "Filecoin"],
        functional_requirements: [
            "Share files (Seed).",
            "Download files (Leech).",
            "Discover peers.",
            "Chunk file into pieces.",
            "Verify file integrity."
        ],
        non_functional_requirements: [
            "Scalability: Decentralized scaling.",
            "Robustness: Handle peer churn.",
            "Efficiency: Parallel downloads.",
            "Fairness: Tit-for-tat mechanism."
        ],
        expected_components: [
            "Tracker (Centralized/DHT)",
            "Peer Client",
            "Piece Selection Algorithm",
            "Choking Algorithm",
            "File Hasher",
            "Network Protocol (TCP/UDP)"
        ]
    },
    {
        title: "Design a Blockchain Ledger (Bitcoin)",
        slug: "design-blockchain",
        description: "Design a decentralized, distributed ledger technology.",
        difficulty: "Hard",
        companies: ["Coinbase", "Binance", "Ripple"],
        functional_requirements: [
            "Create transactions.",
            "Broadcast transactions.",
            "Mine/Validate blocks.",
            "Chain blocks (Consensus).",
            "Wallet management."
        ],
        non_functional_requirements: [
            "Security: Cryptographically secure.",
            "Decentralization: No central authority.",
            "Immutability: Ledger cannot be altered.",
            "Consistency: Global consensus."
        ],
        expected_components: [
            "P2P Network",
            "Mempool",
            "Miner / Validator",
            "Consensus Engine (PoW/PoS)",
            "Ledger Storage (LevelDB)",
            "Wallet"
        ]
    },
    {
        title: "Design a NFT Marketplace (OpenSea)",
        slug: "design-nft-marketplace",
        description: "Design a marketplace for buying, selling, and creating Non-Fungible Tokens.",
        difficulty: "Medium",
        companies: ["OpenSea", "Coinbase", "Rarible"],
        functional_requirements: [
            "Mint NFTs.",
            "List NFTs for sale (Fixed price/Auction).",
            "Buy NFTs.",
            "Wallet integration (MetaMask).",
            "Search and filter collections."
        ],
        non_functional_requirements: [
            "Consistency: Blockchain sync.",
            "Availability: High availability for browsing.",
            "Security: Smart contract security.",
            "Scalability: Handle hype drops."
        ],
        expected_components: [
            "Blockchain Indexer",
            "Smart Contracts",
            "Marketplace API",
            "Metadata Storage (IPFS)",
            "Search Engine",
            "Wallet Connector"
        ]
    },
    {
        title: "Design a Password Manager (LastPass)",
        slug: "design-password-manager",
        description: "Design a secure password management service.",
        difficulty: "Medium",
        companies: ["LogMeIn", "1Password", "Google"],
        functional_requirements: [
            "Store passwords securely.",
            "Generate strong passwords.",
            "Auto-fill credentials.",
            "Sync across devices.",
            "Secure sharing."
        ],
        non_functional_requirements: [
            "Security: Zero-knowledge architecture.",
            "Privacy: End-to-end encryption.",
            "Availability: Access passwords anytime.",
            "Reliability: No data loss."
        ],
        expected_components: [
            "Client App (Encryption/Decryption)",
            "Sync Service",
            "Storage Service (Encrypted blobs)",
            "Authentication Service (MFA)",
            "Key Derivation Function",
            "Audit Log"
        ]
    },
    {
        title: "Design a Two-Factor Authentication System (Authy)",
        slug: "design-2fa",
        description: "Design a system to provide 2FA via SMS, Email, or TOTP.",
        difficulty: "Medium",
        companies: ["Twilio", "Google", "Microsoft"],
        functional_requirements: [
            "Generate OTP/TOTP.",
            "Send OTP via SMS/Email.",
            "Validate OTP.",
            "Rate limiting.",
            "Recovery codes."
        ],
        non_functional_requirements: [
            "Security: Prevent brute force.",
            "Latency: Fast delivery of OTP.",
            "Reliability: High delivery rate.",
            "Availability: High availability."
        ],
        expected_components: [
            "OTP Generation Service",
            "Validation Service",
            "SMS/Email Gateway",
            "Rate Limiter",
            "Database (Short-lived tokens)",
            "Secret Store"
        ]
    },
    {
        title: "Design an Identity Provider (Auth0)",
        slug: "design-identity-provider",
        description: "Design an Identity and Access Management (IAM) system.",
        difficulty: "Hard",
        companies: ["Okta", "Microsoft", "Ping Identity"],
        functional_requirements: [
            "User registration and login.",
            "SSO (Single Sign-On).",
            "OAuth2 / OIDC support.",
            "MFA support.",
            "User management dashboard."
        ],
        non_functional_requirements: [
            "Security: Industry standard protocols.",
            "Availability: Critical dependency for apps.",
            "Scalability: Handle millions of logins.",
            "Compliance: GDPR/SOC2."
        ],
        expected_components: [
            "Authentication Server",
            "Authorization Server",
            "Directory Service",
            "Token Service (JWT)",
            "Risk Engine",
            "Database"
        ]
    },
    {
        title: "Design a Web Application Firewall (WAF)",
        slug: "design-waf",
        description: "Design a firewall to protect web applications from common attacks.",
        difficulty: "Hard",
        companies: ["Cloudflare", "Akamai", "Imperva"],
        functional_requirements: [
            "Inspect HTTP traffic.",
            "Block SQL Injection, XSS, etc.",
            "Rate limiting / DDoS protection.",
            "Custom rules engine.",
            "Logging and reporting."
        ],
        non_functional_requirements: [
            "Latency: Minimal inspection overhead.",
            "Accuracy: Low false positives.",
            "Scalability: Handle massive traffic.",
            "Reliability: Fail open/close config."
        ],
        expected_components: [
            "Reverse Proxy",
            "Rules Engine",
            "Signature Database",
            "Anomaly Detection (ML)",
            "Log Analyzer",
            "Configuration Plane"
        ]
    },
    {
        title: "Design a DDoS Protection System",
        slug: "design-ddos-protection",
        description: "Design a system to mitigate Distributed Denial of Service attacks.",
        difficulty: "Hard",
        companies: ["Cloudflare", "Google", "Amazon"],
        functional_requirements: [
            "Detect traffic anomalies.",
            "Scrub malicious traffic.",
            "Challenge suspicious users (CAPTCHA).",
            "Block IP addresses.",
            "Traffic shaping."
        ],
        non_functional_requirements: [
            "Latency: Real-time mitigation.",
            "Throughput: Handle Tbps attacks.",
            "Availability: Always on.",
            "Accuracy: Distinguish legitimate traffic."
        ],
        expected_components: [
            "Traffic Monitor / Sampler",
            "Scrubbing Centers",
            "BGP Anycast Network",
            "Challenge Service",
            "Fingerprinting Engine",
            "Control Plane"
        ]
    },
    {
        title: "Design a CAPTCHA System (reCAPTCHA)",
        slug: "design-captcha",
        description: "Design a system to distinguish between human users and bots.",
        difficulty: "Medium",
        companies: ["Google", "hCaptcha", "Cloudflare"],
        functional_requirements: [
            "Generate challenges (Image, Audio, Puzzle).",
            "Validate user response.",
            "Risk analysis score.",
            "Accessibility support.",
            "Adaptive difficulty."
        ],
        non_functional_requirements: [
            "Security: Hard for bots to solve.",
            "Usability: Easy for humans.",
            "Latency: Fast generation/validation.",
            "Scalability: High volume."
        ],
        expected_components: [
            "Challenge Generator",
            "Validation Service",
            "Risk Analysis Engine (ML)",
            "Asset CDN",
            "Telemetry Collector",
            "Database"
        ]
    },
    {
        title: "Design a Plagiarism Checker (Turnitin)",
        slug: "design-plagiarism-checker",
        description: "Design a system to detect plagiarism in submitted documents.",
        difficulty: "Medium",
        companies: ["Turnitin", "Grammarly", "Google"],
        functional_requirements: [
            "Upload documents.",
            "Compare against database of sources.",
            "Generate similarity report.",
            "Highlight matching text.",
            "Exclude quotes/bibliography."
        ],
        non_functional_requirements: [
            "Accuracy: Detect paraphrasing.",
            "Scalability: Index billions of documents.",
            "Performance: Reasonable check time.",
            "Privacy: Document security."
        ],
        expected_components: [
            "Document Parser",
            "Fingerprinting / Hashing (Winnowing)",
            "Index / Search Engine",
            "Comparison Engine",
            "Report Generator",
            "Database"
        ]
    },
    {
        title: "Design a Crowdfunding Platform (Kickstarter)",
        slug: "design-crowdfunding",
        description: "Design a platform for funding creative projects.",
        difficulty: "Medium",
        companies: ["Kickstarter", "Indiegogo", "GoFundMe"],
        functional_requirements: [
            "Create project campaigns.",
            "Back projects (Pledge).",
            "All-or-nothing funding model.",
            "Payment processing.",
            "Project updates."
        ],
        non_functional_requirements: [
            "Consistency: Accurate funding totals.",
            "Scalability: Handle viral campaigns.",
            "Availability: High availability.",
            "Security: Financial data."
        ],
        expected_components: [
            "Campaign Service",
            "Pledge Service",
            "Payment Gateway",
            "Notification Service",
            "Search Service",
            "Database"
        ]
    },
    {
        title: "Design a Blogging Platform (Medium)",
        slug: "design-blogging-platform",
        description: "Design a publishing platform for articles and blogs.",
        difficulty: "Medium",
        companies: ["Medium", "WordPress", "Tumblr"],
        functional_requirements: [
            "Write and publish articles.",
            "Rich text editor.",
            "Follow authors/topics.",
            "Claps/Likes and Comments.",
            "Personalized feed."
        ],
        non_functional_requirements: [
            "Read Heavy: High read throughput.",
            "Availability: High availability.",
            "SEO Friendly.",
            "Scalability: Handle viral articles."
        ],
        expected_components: [
            "Content Management Service",
            "User Graph Service",
            "Feed Service",
            "Recommendation Engine",
            "CDN",
            "Database"
        ]
    },
    {
        title: "Design a Telemedicine Platform (Practo)",
        slug: "design-telemedicine",
        description: "Design a platform for online doctor consultations.",
        difficulty: "Medium",
        companies: ["Teladoc", "Practo", "Amwell"],
        functional_requirements: [
            "Search doctors.",
            "Book appointments.",
            "Video consultation.",
            "Digital prescriptions.",
            "Health records storage."
        ],
        non_functional_requirements: [
            "Security: HIPAA compliance.",
            "Reliability: Stable video calls.",
            "Privacy: Patient data protection.",
            "Availability: High availability."
        ],
        expected_components: [
            "Appointment Service",
            "Video Service (WebRTC)",
            "EHR (Electronic Health Record) System",
            "Notification Service",
            "Payment Gateway",
            "Search Service"
        ]
    },
    {
        title: "Design a Bike Sharing System (Lime)",
        slug: "design-bike-sharing",
        description: "Design a dockless bike or scooter sharing system.",
        difficulty: "Medium",
        companies: ["Lime", "Uber", "Lyft"],
        functional_requirements: [
            "Locate nearby bikes.",
            "Unlock bike (QR code).",
            "Track ride duration/distance.",
            "Lock bike and payment.",
            "Report issues."
        ],
        non_functional_requirements: [
            "Real-time: Accurate location tracking.",
            "Connectivity: IoT communication.",
            "Scalability: Handle city-wide fleets.",
            "Reliability: Payment processing."
        ],
        expected_components: [
            "IoT Gateway",
            "Location Service",
            "Ride Service",
            "Payment Service",
            "Geofencing Service",
            "Database"
        ]
    },
    {
        title: "Design a Smart Home Automation System",
        slug: "design-smart-home",
        description: "Design a system to control and monitor smart home devices.",
        difficulty: "Medium",
        companies: ["Google (Nest)", "Amazon (Ring)", "Apple"],
        functional_requirements: [
            "Connect devices (Lights, Thermostat).",
            "Remote control via app.",
            "Automation rules (Scenes).",
            "Voice control integration.",
            "Alerts and notifications."
        ],
        non_functional_requirements: [
            "Latency: Fast device response.",
            "Security: Secure device communication.",
            "Reliability: Local fallback.",
            "Scalability: Support many devices."
        ],
        expected_components: [
            "IoT Hub / Gateway",
            "Device Shadow Service",
            "Rule Engine",
            "User API",
            "Notification Service",
            "Database (Time-series)"
        ]
    },
    {
        title: "Design a Supply Chain Management System",
        slug: "design-supply-chain",
        description: "Design a system to track goods from manufacturing to delivery.",
        difficulty: "Hard",
        companies: ["Amazon", "Maersk", "SAP"],
        functional_requirements: [
            "Track inventory levels.",
            "Order processing.",
            "Shipment tracking.",
            "Supplier management.",
            "Demand forecasting."
        ],
        non_functional_requirements: [
            "Consistency: Accurate inventory.",
            "Scalability: Global supply chain.",
            "Integration: Connect with various logistics partners.",
            "Availability: High uptime."
        ],
        expected_components: [
            "Inventory Service",
            "Order Management System",
            "Logistics Service",
            "Forecasting Engine (ML)",
            "ERP Integration",
            "Database"
        ]
    },
    {
        title: "Design a Traffic Control System",
        slug: "design-traffic-control",
        description: "Design a smart city traffic control system to optimize flow.",
        difficulty: "Hard",
        companies: ["Siemens", "IBM", "Google"],
        functional_requirements: [
            "Monitor traffic flow (Sensors/Cameras).",
            "Control traffic lights.",
            "Detect accidents/congestion.",
            "Prioritize emergency vehicles.",
            "Analytics dashboard."
        ],
        non_functional_requirements: [
            "Real-time: Instant response to traffic conditions.",
            "Reliability: Fail-safe mechanisms.",
            "Scalability: City-wide coverage.",
            "Security: Prevent hacking."
        ],
        expected_components: [
            "Sensor Ingestion",
            "Control Logic Engine",
            "Traffic Light Controller",
            "Computer Vision Service",
            "Analytics Platform",
            "Edge Computing Nodes"
        ]
    },
    {
        title: "Design a Weather Forecasting System",
        slug: "design-weather-system",
        description: "Design a system to ingest weather data and provide forecasts.",
        difficulty: "Medium",
        companies: ["IBM (The Weather Company)", "Google", "AccuWeather"],
        functional_requirements: [
            "Ingest data from stations/satellites.",
            "Run forecast models.",
            "Serve current weather API.",
            "Serve forecast API.",
            "Weather alerts."
        ],
        non_functional_requirements: [
            "Accuracy: Reliable forecasts.",
            "Latency: Fast API response.",
            "Scalability: Handle global requests.",
            "Data Volume: Process massive datasets."
        ],
        expected_components: [
            "Data Ingestion Pipeline",
            "HPC / Model Runner",
            "API Gateway",
            "Cache (CDN/Redis)",
            "Alerting Service",
            "Big Data Storage"
        ]
    },
    {
        title: "Design a Digital Library System",
        slug: "design-digital-library",
        description: "Design a system for borrowing and reading digital books.",
        difficulty: "Medium",
        companies: ["OverDrive", "Amazon (Kindle)", "Google Books"],
        functional_requirements: [
            "Catalog of books.",
            "Borrow/Return books (DRM).",
            "Read books online/offline.",
            "Search and discovery.",
            "User reviews."
        ],
        non_functional_requirements: [
            "Availability: High availability.",
            "Scalability: Large catalog and user base.",
            "Consistency: License management.",
            "Performance: Fast page loading."
        ],
        expected_components: [
            "Catalog Service",
            "Lending Service (License Manager)",
            "Reader App / Web Reader",
            "Search Service",
            "Content Storage (Encrypted)",
            "Database"
        ]
    },
    {
        title: "Design a Video Transcoding Service (Handbrake Cloud)",
        slug: "design-video-transcoding",
        description: "Design a scalable service to convert videos into multiple formats.",
        difficulty: "Medium",
        companies: ["Netflix", "YouTube", "Amazon"],
        functional_requirements: [
            "Upload source video.",
            "Specify target formats/resolutions.",
            "Process transcoding jobs.",
            "Notify on completion.",
            "Store output videos."
        ],
        non_functional_requirements: [
            "Scalability: Parallel processing.",
            "Efficiency: Optimize compute usage.",
            "Reliability: Retry failed jobs.",
            "Performance: Fast turnaround."
        ],
        expected_components: [
            "Job Queue",
            "Worker Pool (Spot Instances)",
            "Storage (S3)",
            "Metadata Database",
            "Notification Service",
            "API Gateway"
        ]
    },
    {
        title: "Design a Distributed Database (CockroachDB)",
        slug: "design-distributed-database",
        description: "Design a distributed SQL database that offers strong consistency and horizontal scalability.",
        difficulty: "Hard",
        companies: ["Google", "Cockroach Labs", "Yugabyte"],
        functional_requirements: [
            "Execute SQL queries.",
            "Support ACID transactions.",
            "Geo-replication.",
            "Automatic sharding/rebalancing.",
            "High availability."
        ],
        non_functional_requirements: [
            "Consistency: Serializable isolation.",
            "Availability: Survive region failures.",
            "Scalability: Scale to thousands of nodes.",
            "Latency: Low latency for local reads."
        ],
        expected_components: [
            "SQL Layer (Parser/Planner)",
            "Transaction Manager",
            "Key-Value Storage Engine (RocksDB)",
            "Replication Group (Raft)",
            "Gossip Protocol",
            "Time Synchronization (TrueTime/HLC)"
        ]
    },
    {
        title: "Design a Time-Series Database (InfluxDB)",
        slug: "design-time-series-db",
        description: "Design a database optimized for storing and querying time-series data.",
        difficulty: "Hard",
        companies: ["InfluxData", "Prometheus", "Google"],
        functional_requirements: [
            "Ingest high-volume metric data.",
            "Query data by time range.",
            "Downsampling and aggregation.",
            "Data retention policies.",
            "Tag-based filtering."
        ],
        non_functional_requirements: [
            "Write Throughput: Handle millions of writes/sec.",
            "Compression: High compression ratio (Gorilla).",
            "Latency: Fast range queries.",
            "Scalability: Horizontal scaling."
        ],
        expected_components: [
            "Write Ahead Log (WAL)",
            "In-memory Buffer",
            "TSM (Time Structured Merge) Tree",
            "Query Engine",
            "Compactor",
            "Retention Enforcer"
        ]
    },
    {
        title: "Design a Vector Database (Pinecone)",
        slug: "design-vector-db",
        description: "Design a database optimized for storing and querying high-dimensional vectors for AI applications.",
        difficulty: "Hard",
        companies: ["Pinecone", "Milvus", "Google"],
        functional_requirements: [
            "Insert vectors with metadata.",
            "Nearest Neighbor Search (k-NN).",
            "Filter by metadata.",
            "Update/Delete vectors.",
            "Real-time indexing."
        ],
        non_functional_requirements: [
            "Latency: Low latency similarity search.",
            "Recall: High accuracy (Approximate NN).",
            "Scalability: Billions of vectors.",
            "Availability: High availability."
        ],
        expected_components: [
            "Vector Index (HNSW/IVF)",
            "Storage Engine",
            "Query Coordinator",
            "Index Builder",
            "Metadata Store",
            "API Gateway"
        ]
    },
    {
        title: "Design a Graph Database (Neo4j)",
        slug: "design-graph-db",
        description: "Design a database optimized for storing and traversing graph relationships.",
        difficulty: "Hard",
        companies: ["Neo4j", "Amazon", "Meta"],
        functional_requirements: [
            "Store nodes and relationships.",
            "Execute graph traversal queries (Cypher/Gremlin).",
            "ACID transactions.",
            "Index-free adjacency.",
            "Property graph model."
        ],
        non_functional_requirements: [
            "Performance: Constant time traversal per hop.",
            "Scalability: Sharding large graphs.",
            "Consistency: Strong consistency.",
            "Availability: High availability."
        ],
        expected_components: [
            "Graph Storage Engine",
            "Traversal Engine",
            "Query Parser",
            "Transaction Manager",
            "Cache (Page Cache)",
            "Lock Manager"
        ]
    },
    {
        title: "Design a Service Mesh (Istio)",
        slug: "design-service-mesh",
        description: "Design a dedicated infrastructure layer for facilitating service-to-service communications.",
        difficulty: "Hard",
        companies: ["Google", "Lyft", "Microsoft"],
        functional_requirements: [
            "Traffic management (Routing, Splitting).",
            "Security (mTLS, AuthZ).",
            "Observability (Metrics, Tracing).",
            "Resilience (Retries, Circuit Breaking).",
            "Policy enforcement."
        ],
        non_functional_requirements: [
            "Latency: Minimal overhead per hop.",
            "Scalability: Support thousands of services.",
            "Reliability: No single point of failure.",
            "Transparency: No code changes required."
        ],
        expected_components: [
            "Data Plane (Sidecar Proxy - Envoy)",
            "Control Plane (Pilot)",
            "Certificate Authority (Citadel)",
            "Mixer/Telemetry",
            "Configuration API",
            "Service Discovery"
        ]
    },
    {
        title: "Design a Distributed Configuration System (Etcd)",
        slug: "design-distributed-config",
        description: "Design a strongly consistent, distributed key-value store for configuration and service discovery.",
        difficulty: "Hard",
        companies: ["CoreOS", "Google", "HashiCorp"],
        functional_requirements: [
            "Store key-value pairs.",
            "Watch for changes.",
            "Lease/TTL support.",
            "Distributed locking primitives.",
            "Cluster membership management."
        ],
        non_functional_requirements: [
            "Consistency: Linearizable reads/writes.",
            "Availability: High availability (Quorum).",
            "Reliability: Durability of data.",
            "Performance: Fast reads."
        ],
        expected_components: [
            "Consensus Module (Raft)",
            "Storage Engine (B+ Tree/BoltDB)",
            "WAL (Write Ahead Log)",
            "Snapshot Manager",
            "gRPC Server",
            "Watch Stream"
        ]
    },
    {
        title: "Design a Secrets Management System (Vault)",
        slug: "design-secrets-management",
        description: "Design a system to securely store and access secrets like API keys, passwords, and certificates.",
        difficulty: "Hard",
        companies: ["HashiCorp", "AWS", "Google"],
        functional_requirements: [
            "Store static secrets.",
            "Generate dynamic secrets.",
            "Encryption as a Service.",
            "Access control policies.",
            "Secret revocation/rotation."
        ],
        non_functional_requirements: [
            "Security: Encryption at rest and in transit.",
            "Availability: Critical path dependency.",
            "Auditability: Log every access.",
            "Isolation: Secure memory handling."
        ],
        expected_components: [
            "Barrier (Encryption Core)",
            "Storage Backend (Consul/S3)",
            "Auth Methods",
            "Secret Engines",
            "Audit Logger",
            "API Server"
        ]
    },
    {
        title: "Design a Build System (Bazel)",
        slug: "design-build-system",
        description: "Design a scalable, hermetic build system for large monorepos.",
        difficulty: "Hard",
        companies: ["Google", "Meta", "Twitter"],
        functional_requirements: [
            "Define build targets and dependencies.",
            "Execute builds.",
            "Run tests.",
            "Cache build artifacts.",
            "Remote execution."
        ],
        non_functional_requirements: [
            "Correctness: Hermetic builds (Reproducibility).",
            "Performance: Incremental builds.",
            "Scalability: Parallel execution.",
            "Efficiency: Remote caching."
        ],
        expected_components: [
            "Build Graph (DAG) Analyzer",
            "Scheduler",
            "Execution Engine (Sandboxed)",
            "Artifact Cache (CAS)",
            "Remote Executor",
            "File System Watcher"
        ]
    },
    {
        title: "Design an LSM Tree Storage Engine",
        slug: "design-lsm-tree",
        description: "Design a Log-Structured Merge-tree storage engine used in databases like RocksDB or Cassandra.",
        difficulty: "Hard",
        companies: ["Meta", "Google", "LinkedIn"],
        functional_requirements: [
            "Put(key, value).",
            "Get(key).",
            "Delete(key).",
            "Range Scan.",
            "Persistence."
        ],
        non_functional_requirements: [
            "Write Throughput: Optimized for writes.",
            "Space Efficiency: Compression.",
            "Read Performance: Bloom filters to minimize disk seeks.",
            "Durability: Crash recovery."
        ],
        expected_components: [
            "MemTable (SkipList)",
            "WAL (Write Ahead Log)",
            "SSTables (Sorted String Tables)",
            "Compaction Process",
            "Bloom Filter",
            "Block Cache"
        ]
    },
    {
        title: "Design a B-Tree Storage Engine",
        slug: "design-btree-engine",
        description: "Design a B-Tree based storage engine used in databases like PostgreSQL or MySQL.",
        difficulty: "Hard",
        companies: ["Oracle", "Microsoft", "PostgreSQL"],
        functional_requirements: [
            "Insert/Update/Delete records.",
            "Point lookup.",
            "Range scan.",
            "ACID transactions.",
            "Crash recovery."
        ],
        non_functional_requirements: [
            "Read Performance: Optimized for reads.",
            "Consistency: ACID compliance.",
            "Concurrency: Row-level locking.",
            "Durability: Write Ahead Logging."
        ],
        expected_components: [
            "Buffer Pool Manager",
            "Page Manager",
            "Lock Manager",
            "Log Manager (WAL)",
            "B-Tree Index Structure",
            "Recovery Manager (ARIES)"
        ]
    },
    {
        title: "Design a Distributed Transaction Manager",
        slug: "design-transaction-manager",
        description: "Design a system to manage distributed transactions across microservices (Two-Phase Commit / Sagas).",
        difficulty: "Hard",
        companies: ["Uber", "Amazon", "Google"],
        functional_requirements: [
            "Begin, Commit, Rollback transactions.",
            "Coordinate participants.",
            "Handle failures (timeouts, crashes).",
            "Deadlock detection.",
            "Compensation logic (Sagas)."
        ],
        non_functional_requirements: [
            "Consistency: Atomicity across services.",
            "Availability: High availability.",
            "Latency: Minimal locking duration.",
            "Reliability: Durable state."
        ],
        expected_components: [
            "Transaction Coordinator",
            "Participant Interface",
            "Transaction Log",
            "Recovery Manager",
            "Lock Service",
            "Timeout Monitor"
        ]
    },
    {
        title: "Design a Change Data Capture (CDC) System",
        slug: "design-cdc-system",
        description: "Design a system to capture and propagate data changes from a database to downstream systems.",
        difficulty: "Hard",
        companies: ["Red Hat (Debezium)", "LinkedIn", "Netflix"],
        functional_requirements: [
            "Capture inserts, updates, deletes.",
            "Stream changes to message queue.",
            "Schema evolution support.",
            "Initial snapshotting.",
            "Filter/Transform events."
        ],
        non_functional_requirements: [
            "Latency: Near real-time propagation.",
            "Reliability: At-least-once delivery.",
            "Ordering: Preserve commit order.",
            "Impact: Minimal load on source DB."
        ],
        expected_components: [
            "Log Miner / Connector",
            "Schema Registry",
            "Snapshotter",
            "Offset Manager",
            "Message Producer (Kafka)",
            "Transformation Engine"
        ]
    },
    {
        title: "Design a Data Lakehouse (Delta Lake)",
        slug: "design-data-lakehouse",
        description: "Design a storage layer that brings ACID transactions to Big Data workloads on object storage.",
        difficulty: "Hard",
        companies: ["Databricks", "Uber", "Netflix"],
        functional_requirements: [
            "ACID transactions on file storage.",
            "Schema enforcement.",
            "Time travel (Query old snapshots).",
            "Upsert/Delete support.",
            "Batch and Streaming unification."
        ],
        non_functional_requirements: [
            "Scalability: Exabyte scale.",
            "Performance: Optimized query execution.",
            "Reliability: Data integrity.",
            "Openness: Open formats (Parquet)."
        ],
        expected_components: [
            "Transaction Log (Delta Log)",
            "Metadata Manager",
            "File Manager (Object Store)",
            "Query Optimizer",
            "Compaction Service",
            "Vacuum Service"
        ]
    },
    {
        title: "Design a Real-time Fraud Detection System",
        slug: "design-fraud-detection",
        description: "Design a system to detect and block fraudulent transactions in real-time.",
        difficulty: "Hard",
        companies: ["Stripe", "PayPal", "Visa"],
        functional_requirements: [
            "Ingest transaction events.",
            "Evaluate rules and ML models.",
            "Approve/Reject/Challenge transactions.",
            "Feature calculation (aggregates).",
            "Case management for manual review."
        ],
        non_functional_requirements: [
            "Latency: < 100ms decision time.",
            "Throughput: Thousands of TPS.",
            "Accuracy: Low false positives.",
            "Availability: High availability."
        ],
        expected_components: [
            "Event Ingestor",
            "Feature Store (Redis)",
            "Rule Engine",
            "ML Inference Service",
            "Case Management UI",
            "Data Lake (Training)"
        ]
    },
    {
        title: "Design a Privacy-Preserving Analytics System",
        slug: "design-privacy-analytics",
        description: "Design an analytics system that collects usage data without compromising user privacy (Differential Privacy).",
        difficulty: "Hard",
        companies: ["Apple", "Google", "Mozilla"],
        functional_requirements: [
            "Collect telemetry data.",
            "Apply noise (Local Differential Privacy).",
            "Aggregate data.",
            "Query aggregate statistics.",
            "Privacy budget management."
        ],
        non_functional_requirements: [
            "Privacy: Mathematical privacy guarantees.",
            "Accuracy: Useful aggregate insights.",
            "Scalability: Millions of devices.",
            "Security: Secure transmission."
        ],
        expected_components: [
            "Client SDK (Noise Injection)",
            "Ingestion Service",
            "Shuffler / Aggregator",
            "Privacy Budget Accountant",
            "Query Engine",
            "Storage"
        ]
    },
    {
        title: "Design a Workflow Orchestration Engine (Airflow)",
        slug: "design-workflow-engine",
        description: "Design a platform to programmatically author, schedule, and monitor workflows.",
        difficulty: "Hard",
        companies: ["Airbnb", "Netflix", "Uber"],
        functional_requirements: [
            "Define workflows as DAGs.",
            "Schedule execution (Time/Event based).",
            "Manage task dependencies.",
            "Retry failed tasks.",
            "Monitor execution status."
        ],
        non_functional_requirements: [
            "Reliability: Tasks must execute.",
            "Scalability: Concurrent workflow execution.",
            "Extensibility: Custom operators.",
            "Availability: High availability."
        ],
        expected_components: [
            "Scheduler",
            "Executor (Kubernetes/Celery)",
            "Metadata Database",
            "Web Server (UI)",
            "DAG Parser",
            "Worker Nodes"
        ]
    },
    {
        title: "Design a Real-time Collaborative Spreadsheet",
        slug: "design-collaborative-spreadsheet",
        description: "Design a web-based spreadsheet with real-time collaboration like Google Sheets.",
        difficulty: "Hard",
        companies: ["Google", "Microsoft", "Airtable"],
        functional_requirements: [
            "Edit cells (Values, Formulas).",
            "Real-time updates to collaborators.",
            "Formula evaluation and dependency tracking.",
            "Formatting and styling.",
            "Version history."
        ],
        non_functional_requirements: [
            "Latency: Instant updates.",
            "Consistency: Convergent state.",
            "Performance: Handle large sheets.",
            "Availability: High availability."
        ],
        expected_components: [
            "OT/CRDT Engine",
            "Calculation Engine (Dependency Graph)",
            "Sparse Matrix Storage",
            "WebSocket Gateway",
            "Presence Service",
            "Snapshot Service"
        ]
    },
    {
        title: "Design a Browser Engine (Chrome)",
        slug: "design-browser-engine",
        description: "Design the core rendering engine of a web browser.",
        difficulty: "Hard",
        companies: ["Google", "Apple", "Mozilla"],
        functional_requirements: [
            "Parse HTML, CSS, JavaScript.",
            "Construct DOM and CSSOM.",
            "Calculate layout.",
            "Paint pixels to screen.",
            "Handle user input."
        ],
        non_functional_requirements: [
            "Performance: 60fps rendering.",
            "Security: Sandboxing.",
            "Compatibility: Web standards compliance.",
            "Efficiency: Memory and battery usage."
        ],
        expected_components: [
            "HTML Parser",
            "CSS Parser",
            "JavaScript Engine (V8)",
            "Layout Engine",
            "Paint/Compositor",
            "Network Stack"
        ]
    },
    {
        title: "Design a JavaScript Runtime (Node.js)",
        slug: "design-js-runtime",
        description: "Design an asynchronous event-driven JavaScript runtime.",
        difficulty: "Hard",
        companies: ["Joyent", "Google", "Deno"],
        functional_requirements: [
            "Execute JavaScript code.",
            "Non-blocking I/O operations.",
            "Module system.",
            "Native bindings (C++).",
            "Debugger support."
        ],
        non_functional_requirements: [
            "Performance: High throughput for I/O bound tasks.",
            "Concurrency: Event loop model.",
            "Stability: Robust error handling.",
            "Compatibility: ES standards."
        ],
        expected_components: [
            "JS Engine (V8)",
            "Event Loop (Libuv)",
            "Task/Microtask Queues",
            "Thread Pool (for DNS/FS)",
            "Bindings Layer",
            "Core Modules"
        ]
    },
    {
        title: "Design a Virtual Machine (JVM)",
        slug: "design-virtual-machine",
        description: "Design a process virtual machine to execute bytecode.",
        difficulty: "Hard",
        companies: ["Oracle", "Google", "Azul"],
        functional_requirements: [
            "Load and verify class files.",
            "Execute bytecode (Interpreter/JIT).",
            "Manage memory (Allocation/GC).",
            "Thread management.",
            "Native Interface (JNI)."
        ],
        non_functional_requirements: [
            "Performance: Near-native execution speed.",
            "Portability: Write once, run anywhere.",
            "Security: Sandbox execution.",
            "Reliability: Robust memory management."
        ],
        expected_components: [
            "Class Loader",
            "Runtime Data Areas (Heap/Stack)",
            "Execution Engine (Interpreter/JIT)",
            "Garbage Collector",
            "Native Method Interface",
            "Thread Scheduler"
        ]
    },
    {
        title: "Design a Load Balancer (NGINX)",
        slug: "design-load-balancer",
        description: "Design a high-performance software load balancer and reverse proxy.",
        difficulty: "Hard",
        companies: ["F5", "NGINX", "Cloudflare"],
        functional_requirements: [
            "Distribute traffic to upstream servers.",
            "Health checks.",
            "SSL Termination.",
            "Load balancing algorithms (Round Robin, Least Conn).",
            "Caching and Compression."
        ],
        non_functional_requirements: [
            "Throughput: Handle 100k+ concurrent connections.",
            "Latency: Negligible overhead.",
            "Reliability: High availability.",
            "Scalability: Event-driven architecture."
        ],
        expected_components: [
            "Event Loop / Worker Processes",
            "Connection Manager",
            "Upstream Manager",
            "SSL Handshake Engine",
            "Cache Manager",
            "Configuration Reloader"
        ]
    },
    {
        title: "Design a VPN Protocol (WireGuard)",
        slug: "design-vpn-protocol",
        description: "Design a modern, secure, and high-performance VPN protocol.",
        difficulty: "Hard",
        companies: ["Tailscale", "Cloudflare", "Cisco"],
        functional_requirements: [
            "Establish secure tunnels.",
            "Authenticate peers.",
            "Encapsulate/Decapsulate packets.",
            "Handle roaming (IP changes).",
            "Key management."
        ],
        non_functional_requirements: [
            "Security: State-of-the-art cryptography.",
            "Performance: High throughput, low CPU.",
            "Simplicity: Small codebase.",
            "Privacy: Identity hiding."
        ],
        expected_components: [
            "Handshake Mechanism (Noise)",
            "Crypto Routing Table (Cryptokey Routing)",
            "Packet Processor",
            "Timer Wheel (Rekeying)",
            "Network Interface",
            "Cookie Mechanism (DDoS protection)"
        ]
    },
    {
        title: "Design an Onion Routing Network (Tor)",
        slug: "design-onion-routing",
        description: "Design a network for anonymous communication.",
        difficulty: "Hard",
        companies: ["Tor Project", "Brave", "Privacy Tech"],
        functional_requirements: [
            "Anonymize user traffic.",
            "Multi-hop routing.",
            "Encryption layering.",
            "Directory service for nodes.",
            "Hidden services (.onion)."
        ],
        non_functional_requirements: [
            "Privacy: Unlinkability of sender and receiver.",
            "Security: Resistance to traffic analysis.",
            "Decentralization: No central point of failure.",
            "Usability: Reasonable latency."
        ],
        expected_components: [
            "Directory Authorities",
            "Relay Nodes (Guard, Middle, Exit)",
            "Circuit Builder",
            "Cell Processor",
            "Encryption Engine",
            "SOCKS Proxy"
        ]
    },
    {
        title: "Design a DFS Metadata Service (NameNode)",
        slug: "design-namenode",
        description: "Design the metadata management component of a distributed file system.",
        difficulty: "Hard",
        companies: ["Google", "Hadoop", "Cloudera"],
        functional_requirements: [
            "Manage file system namespace (Tree).",
            "Map files to blocks.",
            "Map blocks to DataNodes.",
            "Handle block replication.",
            "Client requests (Open, Close, Rename)."
        ],
        non_functional_requirements: [
            "Consistency: Strong consistency.",
            "Availability: High availability (Active/Standby).",
            "Scalability: Handle millions of files.",
            "Durability: Persist metadata."
        ],
        expected_components: [
            "In-memory Namespace Tree",
            "Edit Log",
            "FsImage",
            "Block Manager",
            "DataNode Registry",
            "RPC Server"
        ]
    },
    {
        title: "Design a Garbage Collector",
        slug: "design-garbage-collector",
        description: "Design an automatic memory management system for a programming language.",
        difficulty: "Hard",
        companies: ["Google (Go)", "Oracle (Java)", "Microsoft (.NET)"],
        functional_requirements: [
            "Allocate memory.",
            "Identify live objects.",
            "Reclaim dead memory.",
            "Defragment memory (Compaction).",
            "Handle finalizers."
        ],
        non_functional_requirements: [
            "Performance: Minimal pause times.",
            "Throughput: High allocation rate.",
            "Overhead: Low CPU/Memory overhead.",
            "Safety: No dangling pointers."
        ],
        expected_components: [
            "Allocator (Bump Pointer/Free List)",
            "Marking Engine (Tracing)",
            "Sweeper / Compactor",
            "Write Barriers",
            "Root Scanner",
            "Generation Manager"
        ]
    }
];
