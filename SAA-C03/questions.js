// SAA-C03 Questions Bank
// AWS Certified Solutions Architect Associate
// Enriched with NotebookLM explanations

window.QUESTIONS = [
  {
    "id": "saa_0035cc0b66",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 3,
    "pregunta": "A company receives 10 TB of instrumentation data each day from several machines located at a single factory. The data consists of JSON files stored on a storage area network (SAN) in an onpremises data center located within the factory. The company wants to send this data to Amazon S3 where it can be accessed by several additional systems that provide critical near-real-lime analytics. A secure transfer is important because the data is considered sensitive. Which solution offers the MOST reliable data transfer?",
    "opciones": [
      "AWS DataSync over public internet",
      "AWS DataSync over AWS Direct Connect",
      "AWS Database Migration Service (AWS DMS) over public internet",
      "AWS Database Migration Service (AWS DMS) over AWS Direct Connect"
    ],
    "correcta": 1,
    "explicacion": "Explanation: These are some of the main use cases for AWS DataSync: - Data migration - Move active datasets rapidly over the network into Amazon S3, Amazon EFS, or FSx for Windows File Server. DataSync includes automatic encryption and data integrity validation to help make sure that your data arrives securely, intact, and ready to use. DataSync includes encryption and integrity validation to help make sure your data arrives securely, intact, and ready to use. https://aws.amazon.com/datasync/faqs/",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nEFS is strictly for Linux (NFS). For Windows servers, choose Amazon FSx for Windows File Server.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | EFS = Elastic File Share for Linux."
  },
  {
    "id": "saa_010ed297e2",
    "materia": "Design Resilient Architectures",
    "tema": "lambda",
    "dificultad": 2,
    "pregunta": "A serverless workflow needs to coordinate multiple Lambda functions with conditional logic, parallel execution, and error handling. Which service should be used?",
    "opciones": [
      "Amazon SQS with multiple queues",
      "Amazon SNS with message filtering",
      "AWS Step Functions",
      "Amazon EventBridge <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - AWS Step Functions orchestrates serverless workflows - Visual workflow designer - Built-in error handling and retries - Parallel execution, conditional logic, wait states - Integration with 200+ AWS services Step Functions State Machine Example: json { \"Comment\": \"Order Processing Workflow\", \"StartAt\": \"ValidateOrder\", \"States\": { \"ValidateOrder\": { \"Type\": \"Task\", \"Resource\": \"arn:aws:lambda:...:function:ValidateOrder\", \"Next\": \"CheckInventory\", \"Catch\": [{ \"ErrorEquals\": [\"ValidationError\"], \"Next\": \"OrderFailed\" }] }, \"CheckInventory\": { \"Type\": \"Task\", \"Resource\": \"arn:aws:lambda:...:function:CheckInventory\", \"Next\": \"InventoryAvailable?\" }, \"InventoryAvailable?\": { \"Type\": \"Choice\", \"Choices\": [{ \"Variable\": \"$.inventoryAvailable\", \"BooleanEquals\": true, \"Next\": \"ParallelProcessing\" }], \"Default\": \"OutOfStock\" }, \"ParallelProcessing\": { \"Type\": \"Parallel\", \"Branches\": [ { \"StartAt\": \"ProcessPayment\", \"States\": { \"ProcessPayment\": { \"Type\": \"Task\", \"Resource\": \"arn:aws:lambda:...:function:ProcessPayment\", \"End\": true } } }, { \"StartAt\": \"ReserveInventory\", \"States\": { \"ReserveInventory\": { \"Type\": \"Task\", \"Resource\": \"arn:aws:lambda:...:function:ReserveInventory\", \"End\": true } } }, { \"StartAt\": \"SendConfirmation\", \"States\": { \"SendConfirmation\": { \"Type\": \"Task\", \"Resource\": \"arn:aws:lambda:...:function:SendEmail\", \"End\": true } } } ], \"Next\": \"CreateShipment\" }, \"CreateShipment\": { \"Type\": \"Task\", \"Resource\": \"arn:aws:lambda:...:function:CreateShipment\", \"End\": true }, \"OutOfStock\": { \"Type\": \"Task\", \"Resource\": \"arn:aws:lambda:...:function:NotifyOutOfStock\", \"End\": true }, \"OrderFailed\": { \"Type\": \"Fail\", \"Error\": \"OrderValidationFailed\", \"Cause\": \"Order validation failed\" } } } Step Functions State Types: | State Type | Purpose | Example | |------------|---------|---------| | Task | Execute work (Lambda, ECS, SNS, etc.) | Call API, process data | | Choice | Conditional logic (if/else) | Check inventory status | | Parallel | Execute branches simultaneously | Payment + Inventory + Email | | Wait | Delay (seconds, timestamp) | Wait for approval | | Pass | Pass input to output, transform | Data transformation | | Map | Iterate over array | Process batch items | | Succeed | Successful termination | Order complete | | Fail | Failed termination | Validation failed | Error Handling:",
    "explicacion_correcta": "Serverless compute service running code without provisioning/managing servers, auto-scales on demand.\n\nWhen to use: Event-driven architectures, serverless microservices, real-time file processing (S3 triggers), scheduled CRON jobs (EventBridge).\n\nKey differences: EC2 = manage OS, pay for running time. Lambda = abstracted infrastructure, pay for exact execution time. Fargate = serverless containers. Lambda = Function-as-a-Service.",
    "analisis_distractores": "Lambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nUse SNS+SQS fan-out for reliable task processing (SNS alone can lose messages if endpoint offline).\n\nDon't chain Lambda functions directly. Use Step Functions to orchestrate complex workflows.",
    "tip": "Lambda = Limit of 15 minutes for serverless code. | SNS = Send Notifications Simultaneously (Broadcast/Push)."
  },
  {
    "id": "saa_018285e215",
    "materia": "Design Secure Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "RDS Proxy for Connection Pooling (Similar to PT6) A serverless application has 1,000 concurrent Lambda functions connecting to RDS MySQL, causing \"Too many connections\" errors. Which solution resolves this?",
    "opciones": [
      "Increase RDS max_connections parameter",
      "RDS Proxy to pool connections",
      "ElastiCache in front of RDS",
      "Read replicas <details> <summary>✅ Click to reveal answer</summary> Key Concept: RDS Proxy = Connection pooling for serverless applications </details> ---"
    ],
    "correcta": 1,
    "explicacion": "Explanation: RDS Proxy: Without RDS Proxy: ❌ Lambda (1,000 concurrent) → RDS (max 150 connections) └── Error: \"Too many connections\" With RDS Proxy: ✅ Lambda (1,000 concurrent) → RDS Proxy → RDS (50 connections) └── Proxy pools and reuses connections RDS Proxy Features: Connection Pooling: ├── Maintains pool of DB connections ├── Lambda functions share connections ├── Reduces connection overhead └── Prevents max_connections errors ✅ Additional Benefits: ├── IAM authentication ├── Secrets Manager integration ├── Failover <30 seconds (vs 2+ minutes) └── Preserves connections during failover Architecture: ┌──────────────┐ │ Lambda │───┐ │ Function 1 │ │ └──────────────┘ │ │ ┌──────────────┐ │ ┌─────────────┐ ┌──────────┐ │ Lambda │───┼─────►│ RDS Proxy │─────►│ RDS │ │ Function 2 │ │ │ (connection │ │ (MySQL) │ └──────────────┘ │ │ pooling) │ │ 50 conn │ │ └─────────────┘ └──────────┘ ┌──────────────┐ │ │ Lambda │───┘ │ Function N │ └──────────────┘ 1,000 Lambda invocations → 50 RDS connections (pooled) Why others wrong:",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_01917f38de",
    "materia": "Design High-Performing Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "Aurora Serverless v2 vs Provisioned (Similar to PT6) A development team has a database with highly variable workload (idle at night, busy during day). Which Aurora configuration optimizes cost?",
    "opciones": [
      "Aurora Provisioned with largest instance",
      "Aurora Provisioned with scheduled scaling",
      "Aurora Serverless v2 with auto-scaling",
      "Aurora Global Database <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: Aurora Serverless v2: Purpose: Automatically scales capacity based on load ✅ ├── Scaling: Sub-second granularity ├── Range: 0.5 ACU to 128 ACU ├── No downtime: Scales without interruption ├── Cost: Pay only for ACU-hours used ✅ └── Ideal: Variable, unpredictable workloads Aurora Provisioned: ├── Fixed instance size (e.g., db.r6g.xlarge) ├── Manual scaling (requires instance change + downtime) ├── Cost: Pay for provisioned capacity (even if idle) ❌ └── Ideal: Steady, predictable workloads Cost Comparison: Scenario: Dev database (8 hrs busy, 16 hrs idle per day) Provisioned (db.r6g.large): ├── Size: 2 vCPU, 16 GB RAM (always running) ├── Cost: $0.35/hr × 24 hrs = $8.40/day └── Monthly: ~$252 Serverless v2: ├── Busy hours: 16 ACU × 8 hrs = 128 ACU-hours ├── Idle hours: 0.5 ACU × 16 hrs = 8 ACU-hours ├── Total: 136 ACU-hours/day ├── Cost: 136 × $0.12/ACU-hr = $16.32/day └── Monthly: ~$490 (wait, this is MORE expensive!) Actually, better comparison: Serverless v2 with scale-to-zero capability: ├── Busy: 16 ACU × 8 hrs = 128 ACU-hours ├── Idle: 0.5 ACU × 16 hrs = 8 ACU-hours ├── Cost: ~$16/day = $480/month Provisioned with scheduled stop (not possible with Aurora) ❌ Real benefit: Variable workload ├── Serverless: Scales instantly to 128 ACU during spike ├── Provisioned: Fixed at 8 ACU (performance degradation) When to Use Each: Aurora Serverless v2: ✅ ├── Variable workload (dev/test, infrequent apps) ✅ ├── Spiky traffic patterns ├── Multi-tenant applications └── Cost: ~$0.12 per ACU-hour Aurora Provisioned: ├── Steady, predictable workload ├── Production databases (24/7) ├── Cost-effective at scale (large consistent load) └── Cost: Starting $0.29/hr (db.t4g.medium) Configuration: bash # Create Aurora Serverless v2 cluster aws rds create-db-cluster \\ --db-cluster-identifier dev-database \\ --engine aurora-mysql \\ --engine-version 8.0.mysql_aurora.3.02.0 \\ --master-username admin \\ --master-user-password 'SecurePassword123!' \\ --serverless-v2-scaling-configuration '{ \"MinCapacity\": 0.5, \"MaxCapacity\": 16 }' # Create Serverless v2 instance aws rds create-db-instance \\ --db-instance-identifier dev-database-instance \\ --db-cluster-identifier dev-database \\ --db-instance-class db.serverless \\ --engine aurora-mysql Key Concept: Aurora Serverless v2 = Auto-scales capacity for variable workloads </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nAurora storage auto-scales in 10GB increments up to 128TB. No need for read replicas for HA (6 copies already).\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Aurora = 6 copies, 3 AZs, self-healing, no manual HA setup."
  },
  {
    "id": "saa_0272dc2f57",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "s3",
    "dificultad": 3,
    "pregunta": "VPC Endpoints - Gateway vs Interface (Similar to PT1-Q15) A financial services company has EC2 instances in private subnets that need to access Amazon S3 and Amazon SQS. The security team requires that all traffic must remain within the AWS network and not traverse the internet. The solution should be cost-effective. Which VPC endpoint configuration should the architect implement?",
    "opciones": [
      "Gateway endpoint for both S3 and SQS",
      "Interface endpoint (PrivateLink) for both S3 and SQS",
      "Gateway endpoint for S3, Interface endpoint for SQS",
      "NAT Gateway with private routes to S3 and SQS <details> <summary>✅ Click to reveal answer</summary> Key Concept: Gateway endpoints (FREE) = S3 & DynamoDB only; Everything else = Interface endpoints (PAID) </details> ---"
    ],
    "correcta": 2,
    "explicacion": "Explanation: VPC Endpoint Types: | Service | Endpoint Type | Cost | Why | |---------|---------------|------|-----| | S3 | Gateway ✅ | FREE | Supported by gateway endpoints | | DynamoDB | Gateway ✅ | FREE | Supported by gateway endpoints | | SQS | Interface | $0.01/hour/AZ | Only interface endpoints available | | SNS | Interface | $0.01/hour/AZ | Only interface endpoints available | | Most other AWS services | Interface | $0.01/hour/AZ | - | Gateway Endpoint (S3/DynamoDB only): - Added to route table (target prefix list) - No ENI created - No hourly charge - No data processing charge - Scales automatically Interface Endpoint (PrivateLink): - Creates ENI in subnet - Gets private IP address - Costs $0.01/hour per AZ + data processing - Required for all services except S3/DynamoDB Why others are wrong:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nUse SNS+SQS fan-out for reliable task processing (SNS alone can lose messages if endpoint offline).",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_02dbc94679",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "cloudtrail",
    "dificultad": 2,
    "pregunta": "A security analyst needs to investigate and visualize relationships between AWS resources and suspicious activity for a security incident. Which AWS service should they use?",
    "opciones": [
      "Amazon Detective",
      "AWS Security Hub",
      "Amazon GuardDuty",
      "AWS Config <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - Amazon Detective helps analyze, investigate, and visualize security incidents - Integrates with GuardDuty, Security Hub, CloudTrail - Security Hub aggregates findings, not investigation - GuardDuty detects threats, not investigation - Config tracks resource changes, not relationships References: Amazon Detective, Security Investigation </details> ---",
    "explicacion_correcta": "Governance, compliance, operational auditing by capturing API calls made to your AWS account.\n\nWhen to use: Track user activity, troubleshoot by identifying API calls, audit for regulatory compliance (HIPAA).\n\nKey differences: CloudWatch = what is happening (performance). CloudTrail = who did it (API activity).",
    "analisis_distractores": "Management events enabled by default (90 days free). Data events (S3 uploads, Lambda invocations) NOT enabled by default, extra cost. 15-minute delay.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "CloudTrail = Leaves audit Trail of API activity (Who did what). | Config = Configuration compliance and history."
  },
  {
    "id": "saa_0387df07b9",
    "materia": "general",
    "tema": "lambda",
    "dificultad": 2,
    "pregunta": "API Gateway Mapping Templates (Similar to PT1-Q1) A serverless application receives client requests in XML format but the backend Lambda function expects JSON. Which API Gateway feature transforms the request format?",
    "opciones": [
      "Method Request validation models",
      "Method Response models",
      "Integration Request mapping templates using VTL",
      "Lambda proxy integration <details> <summary>✅ Click to reveal answer</summary> Key Concept: Mapping Templates = Request/response transformation layer in API Gateway </details> ---"
    ],
    "correcta": 2,
    "explicacion": "Explanation: API Gateway Request/Response Flow: Client → Method Request → Integration Request → Backend (Mapping Template) Backend → Integration Response → Method Response → Client (Mapping Template) Mapping Templates: - Written in Velocity Template Language (VTL) - Transform payload format (XML ↔ JSON) - Located in Integration Request/Response - Access request data via $input variable Example VTL Template: vtl #set($inputRoot = $input.path('$')) { \"name\": \"$inputRoot.user.name\", \"email\": \"$inputRoot.user.email\" } Why others wrong: - A/B: Models validate schema, don't transform data",
    "explicacion_correcta": "Serverless compute service running code without provisioning/managing servers, auto-scales on demand.\n\nWhen to use: Event-driven architectures, serverless microservices, real-time file processing (S3 triggers), scheduled CRON jobs (EventBridge).\n\nKey differences: EC2 = manage OS, pay for running time. Lambda = abstracted infrastructure, pay for exact execution time. Fargate = serverless containers. Lambda = Function-as-a-Service.",
    "analisis_distractores": "Lambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nAPI Gateway integrates with Lambda (no VPC needed) and HTTP backends (needs VPC link for private). WebSocket APIs for bidirectional communication.",
    "tip": "Lambda = Limit of 15 minutes for serverless code. | API Gateway = Gatekeeper for your APIs (throttle, cache, secure)."
  },
  {
    "id": "saa_03ce9b8b43",
    "materia": "general",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A real-time analytics application needs to ingest clickstream data from a website, process it with custom business logic, and store results in DynamoDB. Which AWS service should be used for data ingestion?",
    "opciones": [
      "Amazon Kinesis Data Streams",
      "Amazon Kinesis Data Firehose",
      "Amazon SQS",
      "AWS DataSync <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - Kinesis Data Streams is for real-time streaming with custom processing - Supports custom consumers (Lambda, EC2, KCL) - Real-time processing capability - Firehose is for loading data to destinations (S3, Redshift, etc.) - SQS is for message queuing, not streaming analytics - DataSync is for file transfers References: Kinesis Data Streams, Real-Time Processing </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_03d59a2913",
    "materia": "Design Resilient Architectures",
    "tema": "rds",
    "dificultad": 3,
    "pregunta": "ElastiCache for Multi-AZ High Availability (Similar to PT5-Q26) A social media application experiences frequent cache misses during peak hours, causing slow database queries. The database team wants to implement a caching layer with automatic failover to a standby cache node in another AZ if the primary fails. Which ElastiCache configuration provides Multi-AZ automatic failover?",
    "opciones": [
      "ElastiCache for Memcached with multiple nodes across AZs",
      "ElastiCache for Redis with Cluster Mode disabled and Multi-AZ with automatic failover enabled",
      "ElastiCache for Memcached with Auto Discovery enabled",
      "ElastiCache for Redis with Cluster Mode enabled (multiple shards) <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: ElastiCache Engines Comparison: ElastiCache for Memcached: ├── Architecture: Distributed caching ├── Multi-node: Yes (sharding) ├── High Availability: ❌ NO automatic failover ├── Data Persistence: ❌ No (in-memory only) ├── Replication: ❌ No ├── Use case: Simple caching, partition data across nodes └── Failure: If node fails, data lost; app handles retry ElastiCache for Redis: ├── Architecture: Master-replica replication ├── Multi-AZ Failover: ✅ YES (automatic) ├── Data Persistence: ✅ YES (snapshots, AOF) ├── Replication: ✅ YES (0-5 read replicas) ├── Use case: Session store, leaderboards, pub/sub └── Failure: Automatic failover to replica (30-60 seconds) Redis Multi-AZ Architecture: AZ-1 (us-east-1a): ├── Primary Node (Master) │ ├── Accepts writes │ ├── Replicates to replicas │ └── IP: 10.0.1.50 AZ-2 (us-east-1b): ├── Replica Node (Read-only) │ ├── Async replication from primary │ ├── Promoted to primary on failover ✅ │ └── IP: 10.0.2.50 Failure Scenario: ├── Primary node fails in AZ-1 ❌ ├── ElastiCache detects failure (30 seconds) ├── Promotes replica in AZ-2 to primary ✅ ├── DNS endpoint updated (automatic) ├── Application connections redirect to new primary └── Downtime: 30-60 seconds Configuration (AWS Console):",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nMulti-AZ is for resilience, NOT read scaling. Converting Single-AZ to Multi-AZ is zero-downtime.\n\nRead Replicas don't failover automatically (manual promotion). Cross-region incurs data transfer fees; same-region is free.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Multi-AZ = Automatic Zero-data-loss standby (DR, not reads)."
  },
  {
    "id": "saa_04e0ed2919",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "A company wants to run VMware workloads on AWS with seamless integration and management using familiar VMware tools. Which solution should they use?",
    "opciones": [
      "VMware Cloud on AWS",
      "AWS Outposts",
      "Amazon EC2 Dedicated Hosts",
      "AWS Snowball Edge <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - VMware Cloud on AWS integrates VMware vSphere, NSX, and vSAN with AWS infrastructure - Enables seamless migration and hybrid operations - Managed by both AWS and VMware - Outposts is for running AWS services on-premises - Dedicated Hosts are for compliance - Snowball Edge is for edge computing References: VMware Cloud on AWS, Hybrid VMware </details> ---",
    "explicacion_correcta": "Physical rugged device delivered by AWS to securely transfer massive data offline.\n\nWhen to use: Large-scale data migrations, data center decommissioning when internet transfer would take weeks/months.\n\nKey differences: DataSync is online transfer over VPN/Direct Connect. Snowball is offline physical transport. Snowball Edge includes local compute.",
    "analisis_distractores": "Snowball for 10TB-10PB. Snowmobile (shipping container) for 10PB-100PB. Don't confuse scales.",
    "tip": "Snowball = Roll massive data physically into AWS."
  },
  {
    "id": "saa_05adc9af8a",
    "materia": "Design High-Performing Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "A Kinesis Data Stream has 4 shards. Producers are writing 5,000 records per second. What is the likely issue and solution?",
    "opciones": [
      "Shards are over capacity; add more shards",
      "Retention period is too short; increase it",
      "No issue, this is within limits",
      "Use Kinesis Data Firehose instead <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - Each shard supports 1,000 records/sec write capacity - 4 shards = 4,000 records/sec capacity - 5,000 records/sec exceeds capacity - Need at least 5 shards (or use on-demand mode) - Will receive ProvisionedThroughputExceededException - Retention doesn't affect write capacity - Firehose is for different use cases Calculation: 4 shards × 1,000 records/sec = 4,000 records/sec < 5,000 needed References: Kinesis Data Streams, Shard Capacity </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nKinesis Data Streams for custom processing. Kinesis Data Firehose for automatic delivery to S3/Redshift/Elasticsearch (no code needed).",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Kinesis = Kinetic (moving) data streams in real-time."
  },
  {
    "id": "saa_0612b861d2",
    "materia": "Design Secure Architectures",
    "tema": "ec2",
    "dificultad": 1,
    "pregunta": "A company wants to ensure that IAM users cannot create EC2 instances larger than t3.medium. How can this be enforced?",
    "opciones": [
      "Use IAM policy with condition checking instance type",
      "Use AWS Config rules",
      "Use AWS Budgets",
      "Use EC2 instance limits <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - IAM policy conditions can restrict EC2 instance types - Condition key: ec2:InstanceType Policy Example: json { \"Version\": \"2012-10-17\", \"Statement\": [ { \"Effect\": \"Allow\", \"Action\": \"ec2:RunInstances\", \"Resource\": \"arn:aws:ec2:*:*:instance/*\", \"Condition\": { \"StringEquals\": { \"ec2:InstanceType\": [\"t3.micro\", \"t3.small\", \"t3.medium\"] } } }, { \"Effect\": \"Allow\", \"Action\": \"ec2:RunInstances\", \"Resource\": [ \"arn:aws:ec2:*:*:subnet/*\", \"arn:aws:ec2:*:*:network-interface/*\", \"arn:aws:ec2:*:*:volume/*\", \"arn:aws:ec2:*:*:key-pair/*\", \"arn:aws:ec2:*:*:security-group/*\", \"arn:aws:ec2:*::image/*\" ] } ] } - Option B: Config rules detect compliance, don't prevent actions - Option C: Budgets monitor costs, don't restrict actions - Option D: Service limits are for account-wide quotas, not policy-based restrictions References: IAM Policy Conditions, EC2 Instance Type Restrictions </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_061950e8ac",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "cloudwatch",
    "dificultad": 2,
    "pregunta": "An organization wants to track the progress of migrating 200 applications across multiple AWS accounts and regions. Which service provides centralized visibility?",
    "opciones": [
      "AWS CloudWatch",
      "AWS Migration Hub",
      "AWS Systems Manager",
      "AWS Config <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Migration Hub provides centralized tracking of migrations - Aggregates progress from multiple migration tools - Supports multi-account and multi-region tracking - Integrates with DMS, Application Migration Service, etc. - CloudWatch monitors resources, not migrations - Systems Manager manages infrastructure - Config tracks configuration compliance References: AWS Migration Hub, Migration Tracking </details> ---",
    "explicacion_correcta": "Monitoring and observability service collecting logs, metrics, events from AWS services.\n\nWhen to use: Real-time performance visualization, alarms triggering Auto Scaling/SNS, centralizing app/OS logs.\n\nKey differences: AWS Config = configuration history. CloudTrail = API audit. CloudWatch = performance metrics and logs.",
    "analisis_distractores": "CloudWatch does NOT monitor internal OS metrics (memory, disk space) by default. Must install CloudWatch Agent.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "CloudWatch = Watches your performance metrics. | Config = Configuration compliance and history."
  },
  {
    "id": "saa_06bf134aa9",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "rds",
    "dificultad": 3,
    "pregunta": "Aurora Serverless A SaaS company has a customer-facing application with highly unpredictable traffic patterns. During business hours, traffic spikes to 10,000 requests/min, but at night, it drops to near zero. The database is currently on RDS Aurora provisioned, which is expensive to run 24/7. What is the MOST cost-effective solution?",
    "opciones": [
      "Use Aurora with scheduled vertical scaling",
      "Migrate to Aurora Serverless",
      "Use Aurora Multi-AZ with Auto Scaling read replicas",
      "Switch to DynamoDB Exam Clue: \"Unpredictable traffic\" + \"cost-effective database\" + \"no manual management\" = Aurora Serverless ---"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Aurora Serverless: - Auto-scales compute capacity (ACUs) based on load - Starts/stops automatically when inactive - Pay per second only when active - Scales in seconds without connection drops Perfect For: - Infrequent/unpredictable workloads - Development/test databases - Variable traffic patterns - Applications with long idle periods Pricing: - ~$0.06 per ACU-hour - Storage: $0.10/GB-month - No charges when paused Why Not Others:",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nAurora storage auto-scales in 10GB increments up to 128TB. No need for read replicas for HA (6 copies already).",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Aurora = 6 copies, 3 AZs, self-healing, no manual HA setup."
  },
  {
    "id": "saa_07d1ff62fc",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A mobile gaming company needs to deliver ultra-low latency multiplayer experiences to users on 5G networks in major cities. The solution must run AWS compute and storage services at the edge of telecom networks. Which AWS service should they use?",
    "opciones": [
      "AWS Wavelength",
      "Amazon CloudFront",
      "AWS Outposts",
      "AWS Direct Connect <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - AWS Wavelength brings AWS compute and storage to the edge of 5G networks - Minimizes latency by running workloads at telecom provider locations - Ideal for mobile apps, gaming, AR/VR, IoT requiring <10ms latency - CloudFront is a CDN for static/dynamic content, not edge compute - Outposts is for on-premises data centers, not telecom edge - Direct Connect is for dedicated network connectivity References: AWS Wavelength, Edge Computing </details> --- ## Summary Total Questions: 21 Topics Covered: - Amazon VPC (CIDR, Subnets, Route Tables) - NAT Gateway vs NAT Instance - VPC Endpoints (Gateway vs Interface) - Security Groups vs Network ACLs - AWS Direct Connect - AWS Transit Gateway vs VPC Peering - Route 53 Routing Policies - Elastic Load Balancing (ALB, NLB features) - CloudFront with Custom Domains - AWS PrivateLink - AWS Global Accelerator - Route 53 Resolver - AWS WAF and Shield Exam Tips: VPC Fundamentals: - Public Subnet: Route to Internet Gateway - Private Subnet: Route to NAT Gateway - AWS reserves 5 IPs per subnet (.0, .1, .2, .3, .255) Connectivity: - VPC Peering: 1-to-1, non-transitive - Transit Gateway: Hub-and-spoke, transitive - Direct Connect: Dedicated connection - VPN: Internet-based, encrypted Security: - Security Groups: Stateful, instance-level, allow only - NACLs: Stateless, subnet-level, allow and deny - WAF: Application-level filtering - Shield: DDoS protection VPC Endpoints: - Gateway: S3, DynamoDB (free) - Interface: Most services (hourly charge) DNS: - Route 53: DNS service with multiple routing policies - Resolver: Hybrid DNS between on-premises and AWS Load Balancers: - ALB: Layer 7, HTTP/HTTPS, advanced routing - NLB: Layer 4, TCP/UDP, static IP, extreme performance - CLB: Legacy Global Services: - CloudFront: CDN, caching - Global Accelerator: Static IPs, TCP/UDP, no caching Next Steps: - Understand when to use each connectivity option - Know difference between Security Groups and NACLs - Memorize Route 53 routing policies and use cases - Practice VPC design scenarios",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Gateway for Big Two (S3 & DynamoDB); Interface for the Rest."
  },
  {
    "id": "saa_07f1da59fd",
    "materia": "Design Resilient Architectures",
    "tema": "cloudtrail",
    "dificultad": 2,
    "pregunta": "A company has regulatory requirements to ensure that data stored in AWS does not leave a specific geographic location. How can this be achieved?",
    "opciones": [
      "Enable AWS GuardDuty",
      "Choose the appropriate AWS Region and do not enable cross-region features",
      "Use AWS Organizations with Service Control Policies",
      "Enable AWS CloudTrail <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Data in an AWS Region stays in that Region unless you explicitly configure otherwise - No cross-region replication, backups, or data transfer ensures data residency - GuardDuty is for threat detection, not data residency - SCPs can enforce policies but the key is choosing the right Region - CloudTrail is for logging, not data residency - Primary control: select Region and don't configure cross-region services References: AWS Regions, Data Sovereignty, Compliance </details> ---",
    "explicacion_correcta": "Governance, compliance, operational auditing by capturing API calls made to your AWS account.\n\nWhen to use: Track user activity, troubleshoot by identifying API calls, audit for regulatory compliance (HIPAA).\n\nKey differences: CloudWatch = what is happening (performance). CloudTrail = who did it (API activity).",
    "analisis_distractores": "Management events enabled by default (90 days free). Data events (S3 uploads, Lambda invocations) NOT enabled by default, extra cost. 15-minute delay.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "CloudTrail = Leaves audit Trail of API activity (Who did what). | Config = Configuration compliance and history."
  },
  {
    "id": "saa_0827f08c56",
    "materia": "Design Secure Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "A company wants to allow users to change their own passwords but nothing else. Which AWS managed policy should be attached?",
    "opciones": [
      "IAMFullAccess",
      "IAMUserChangePassword",
      "IAMReadOnlyAccess",
      "PowerUserAccess <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - IAMUserChangePassword is an AWS managed policy for self-service password changes - Follows principle of least privilege - Allows users to manage only their own passwords - Option A: Too permissive, full IAM access - Option C: Read-only, can't change passwords - Option D: Almost full access except IAM Alternative: Create custom policy: json { \"Version\": \"2012-10-17\", \"Statement\": [ { \"Effect\": \"Allow\", \"Action\": [ \"iam:ChangePassword\", \"iam:GetAccountPasswordPolicy\" ], \"Resource\": \"arn:aws:iam::*:user/${aws:username}\" } ] } References: AWS Managed Policies, Self-Service Password Management </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_0833d028ad",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 1,
    "pregunta": "Which IAM entity can have both trust policy and permissions policy?",
    "opciones": [
      "IAM User",
      "IAM Group",
      "IAM Role",
      "IAM Policy <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - IAM Roles have two types of policies: - Trust Policy: Defines who can assume the role (principal) - Permissions Policy: Defines what the role can do (actions) - Users and Groups don't have trust policies - Policies are documents, not entities with other policies Trust Policy Example: json { \"Version\": \"2012-10-17\", \"Statement\": [ { \"Effect\": \"Allow\", \"Principal\": { \"Service\": \"ec2.amazonaws.com\" }, \"Action\": \"sts:AssumeRole\" } ] } Permissions Policy Example: json { \"Version\": \"2012-10-17\", \"Statement\": [ { \"Effect\": \"Allow\", \"Action\": \"s3:GetObject\", \"Resource\": \"arn:aws:s3:::my-bucket/*\" } ] } References: IAM Roles, Trust Policies, Role Assumption </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_08fad5fbcc",
    "materia": "Design Resilient Architectures",
    "tema": "direct-connect",
    "dificultad": 1,
    "pregunta": "A company needs a highly available solution for connecting on-premises data center to AWS. What should be implemented?",
    "opciones": [
      "Single Direct Connect connection",
      "Redundant Direct Connect connections to different locations",
      "Site-to-Site VPN as backup to Direct Connect",
      "Both B and C (Maximum redundancy) <details> <summary>Show Answer</summary>"
    ],
    "correcta": 3,
    "explicacion": "Explanation: Maximum High Availability: - Multiple Direct Connect connections in different locations - Site-to-Site VPN as backup - Redundant customer routers - Multiple VPN tunnels HA Architecture Layers:",
    "explicacion_correcta": "Dedicated physical fiber-optic connection from on-premises data center to AWS.\n\nWhen to use: Consistent ultra-low latency, high-bandwidth transfers, bypass public internet for security/compliance.\n\nKey differences: Site-to-Site VPN uses public internet (inconsistent latency), setup in hours. DX is dedicated line with consistent speeds but weeks/months to provision.",
    "analisis_distractores": "DX is NOT encrypted by default. If scenario needs dedicated line + encryption → IPSec VPN over DX. DX has no inherent resilience (need multiple connections).",
    "tip": "DX = Dedicated physical line, Delayed setup, Default is unencrypted."
  },
  {
    "id": "saa_09459e4e14",
    "materia": "general",
    "tema": "rds",
    "dificultad": 1,
    "pregunta": "Which service records API calls made in your AWS account?",
    "opciones": [
      "CloudWatch",
      "CloudTrail",
      "AWS Config",
      "X-Ray"
    ],
    "correcta": 1,
    "explicacion": "",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience."
  },
  {
    "id": "saa_0982f09799",
    "materia": "Design High-Performing Architectures",
    "tema": "route-53",
    "dificultad": 2,
    "pregunta": "A company wants to route traffic based on the geographic location of users. Which Route 53 routing policy should be used?",
    "opciones": [
      "Simple Routing",
      "Weighted Routing",
      "Geolocation Routing",
      "Latency-based Routing <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Geolocation Routing routes based on user's geographic location - Routes by continent, country, or state - Use cases: Content localization, compliance, load distribution Route 53 Routing Policies: | Policy | Use Case | |--------|----------| | Simple | Single resource | | Weighted | A/B testing, gradual rollout | | Latency | Best performance for users | | Failover | Active-passive DR | | Geolocation | Route by user location | | Geoproximity | Route by resource location + bias | | Multivalue | Multiple IPs, health checks | Geolocation vs Latency: - Geolocation: Based on WHERE user is - Latency: Based on WHICH region has lowest latency References: Route 53 Routing Policies, Geolocation Routing </details> ---",
    "explicacion_correcta": "Highly available, scalable cloud DNS for domain registration, routing, and health checking.\n\nWhen to use: Intelligent global routing based on latency, geolocation, or failover (active-passive DR).\n\nKey differences: ALIAS records map to AWS resources and work at zone apex (unlike CNAME). Simple, weighted, latency, failover, geolocation, geoproximity, multivalue routing policies.",
    "analisis_distractores": "ALIAS vs CNAME: ALIAS is free, works at apex, resolves to IP. CNAME maps name to name, can't be at apex.",
    "tip": "Route 53 = DNS + ALIAS = Route 53's superpower."
  },
  {
    "id": "saa_0a2331a9e8",
    "materia": "Design High-Performing Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "An application running on EC2 instances needs to maintain client connections to the same instance for session persistence. Which load balancer feature should be enabled?",
    "opciones": [
      "Cross-Zone Load Balancing",
      "Connection Draining",
      "Sticky Sessions",
      "Health Checks <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Sticky Sessions (Session Affinity) routes requests from same client to same instance - Uses cookies to track sessions - Duration-based or application-based cookies ALB Sticky Session Types: - Duration-based: LB-generated cookie (AWSALB) - Application-based: Application-generated cookie Sticky Sessions Limitations: - Can cause uneven load distribution - Instance failure = lost sessions Better Alternative: - Store sessions in ElastiCache or DynamoDB - True stateless architecture References: Sticky Sessions, Session Persistence </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nElastiCache requires application code changes (unlike DAX). Don't select Memcached if scenario needs DR, replication, or pub/sub.\n\nReduce latency to microseconds → DAX (DynamoDB Accelerator). Active-active multi-region → Global Tables. Unpredictable workloads → On-Demand capacity.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | ElastiCache = Extra code changes required for Cache."
  },
  {
    "id": "saa_0afce29a64",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company stores infrequently accessed data in S3 Standard-IA. They need to access this data immediately when required. What is the retrieval time?",
    "opciones": [
      "12 hours",
      "3-5 hours",
      "1-5 minutes",
      "Milliseconds (immediate) <details> <summary>Show Answer</summary>"
    ],
    "correcta": 3,
    "explicacion": "Explanation: - S3 Standard-IA provides immediate access (milliseconds) - \"IA\" means Infrequent Access, not slow access - Lower storage cost than Standard - Retrieval fees apply per GB - Minimum storage duration: 30 days - Minimum object size: 128 KB S3 Retrieval Times: - Standard/Standard-IA/One Zone-IA: Milliseconds - Intelligent-Tiering: Milliseconds - Glacier Instant Retrieval: Milliseconds - Glacier Flexible Retrieval: - Expedited: 1-5 minutes - Standard: 3-5 hours - Bulk: 5-12 hours - Glacier Deep Archive: - Standard: 12 hours - Bulk: 48 hours References: S3 Standard-IA, S3 Retrieval Times </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCannot upload directly to Glacier via console. Must use S3 Lifecycle policy or CLI/SDK. Data must pass through S3 first.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Glacier = Frozen data; cheap to store but takes time to thaw."
  },
  {
    "id": "saa_0b9016eff0",
    "materia": "Design High-Performing Architectures",
    "tema": "ebs",
    "dificultad": 2,
    "pregunta": "A database workload requires a single EBS volume that can support up to 20,000 IOPS. Which EBS volume type meets this requirement? Options:",
    "opciones": [
      "Throughput Optimized HDD",
      "Provisioned IOPS SSD",
      "General Purpose SSD",
      "Cold HDD"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Provisioned IOPS SSD (io1/io2) volumes are designed for I/O-intensive applications that require sustained IOPS performance and can provide up to 64,000 IOPS per volume. ### CloudWatch Custom Metrics",
    "explicacion_correcta": "Persistent block-level storage volumes attached to EC2 instances. Behave like raw hard drives.\n\nWhen to use: Boot volumes for EC2, database storage, applications requiring consistent low-latency block storage.\n\nKey differences: EBS locked to single AZ. EFS spans multiple AZs and mounts to hundreds of instances. EBS is persistent, Instance Store is ephemeral.",
    "analisis_distractores": "EBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.\n\nCloudWatch does NOT monitor internal OS metrics (memory, disk space) by default. Must install CloudWatch Agent.",
    "tip": "EBS = Elastic Block Store; one AZ, one instance, persistent. | CloudWatch = Watches your performance metrics."
  },
  {
    "id": "saa_0beb219c4d",
    "materia": "Design Resilient Architectures",
    "tema": "s3",
    "dificultad": 3,
    "pregunta": "Direct Connect BGP Community Tags (Similar to PT7-Q1) A company has a Direct Connect connection with a public virtual interface to access AWS public services (S3, DynamoDB). To optimize routing and reduce data transfer costs, the network team wants to ensure that traffic to S3 in us-east-1 only uses AWS infrastructure within the us-east-1 region and does NOT traverse to other regions. Which BGP configuration should be applied?",
    "opciones": [
      "Configure NO_EXPORT BGP community tag",
      "Configure local preference BGP community tag with value 200",
      "Configure BGP community tag 7224:9100 (local region preference)",
      "Configure BGP community tag 7224:9300 (global preference) <details> <summary>✅ Click to reveal answer</summary> Key Concept: Public VIF + 7224:9100 = Local region routing only (cost optimization) </details> ---"
    ],
    "correcta": 2,
    "explicacion": "Explanation: Direct Connect BGP Community Tags: AWS BGP Community Tags (Public VIF only): ├── 7224:9100 → Local AWS region only ✅ │ └── Use case: Keep traffic in same region as Direct Connect │ ├── 7224:9200 → All regions in same continent │ └── Use case: US regions, or EU regions, etc. │ ├── 7224:9300 → Global (all AWS regions) [default] │ └── Use case: Access any AWS region │ └── NO_EXPORT → Don't advertise beyond AS └── Use case: Prevent route propagation Scenario Architecture: On-Premises Data Center (Virginia): ├── Direct Connect Location (us-east-1) │ └── Public Virtual Interface │ ├── BGP community: 7224:9100 ✅ │ └── VLAN: 100 │ └── Traffic Flow with 7224:9100: ├── S3 us-east-1: Uses local region ✅ (lowest latency) ├── S3 us-west-2: ❌ NOT advertised (must use internet) └── DynamoDB us-east-1: Uses local region ✅ Without 7224:9100 (default 7224:9300): ├── S3 us-east-1: Uses local region ├── S3 us-west-2: Uses Direct Connect → Cross-region transfer $$ └── May route through longer path BGP Configuration (Cisco Example): cisco router bgp 65000 neighbor 169.254.0.1 remote-as 7224 neighbor 169.254.0.1 description AWS-Direct-Connect address-family ipv4 neighbor 169.254.0.1 activate neighbor 169.254.0.1 soft-reconfiguration inbound ! Apply community tag 7224:9100 to routes advertised to AWS neighbor 169.254.0.1 send-community neighbor 169.254.0.1 route-map SET-AWS-LOCAL out exit-address-family route-map SET-AWS-LOCAL permit 10 set community 7224:9100 ! Local region only Cost Impact: Scenario 1: Without 7224:9100 (default global) ├── Direct Connect to S3 us-east-1: $0.02/GB (Data Transfer Out) ├── Direct Connect to S3 us-west-2: │ ├── Data Transfer Out: $0.02/GB │ ├── Cross-region transfer: $0.02/GB │ └── Total: $0.04/GB ❌ (expensive) Scenario 2: With 7224:9100 (local region) ├── Direct Connect to S3 us-east-1: $0.02/GB ✅ ├── Direct Connect to S3 us-west-2: Uses internet instead │ └── May use VPN or public internet (application decides) Virtual Interface Types: | VIF Type | Supports BGP Community Tags | Use Case | |----------|---------------------------|----------| | Public VIF | 7224:9100, 7224:9200, 7224:9300, NO_EXPORT ✅ | AWS public services (S3, DynamoDB) | | Private VIF | Local preference (NOT 7224:xxxx) | VPC resources | | Transit VIF | Local preference (NOT 7224:xxxx) | Transit Gateway | Why others are wrong:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.\n\nDX is NOT encrypted by default. If scenario needs dedicated line + encryption → IPSec VPN over DX. DX has no inherent resilience (need multiple connections).",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Gateway for Big Two (S3 & DynamoDB); Interface for the Rest."
  },
  {
    "id": "saa_0d7de12e54",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company needs to provide third-party vendors access to specific S3 buckets without creating IAM users. What is the BEST approach?",
    "opciones": [
      "Share root account credentials",
      "Create cross-account IAM roles with external ID",
      "Make S3 buckets public",
      "Use S3 pre-signed URLs <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Cross-account roles allow external accounts to access resources - External ID adds security layer preventing confused deputy problem - Vendor assumes role from their AWS account - No need to manage IAM users Setup:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_0d8982fcbd",
    "materia": "general",
    "tema": "sqs",
    "dificultad": 1,
    "pregunta": "What is the maximum message size in SQS?",
    "opciones": [
      "64 KB",
      "128 KB",
      "256 KB",
      "1 MB"
    ],
    "correcta": 2,
    "explicacion": "",
    "explicacion_correcta": "Fully managed message queuing service for decoupling microservices and distributed systems.\n\nWhen to use: Async processing, background tasks, buffering requests to absorb traffic spikes.\n\nKey differences: SQS = pull-based point-to-point. SNS = push-based pub/sub broadcast. Kinesis = real-time streaming with replay.",
    "analisis_distractores": "Standard = unlimited throughput, at-least-once (duplicates possible). FIFO = exactly-once, strict ordering, 300 msgs/sec (3000 with batching).",
    "tip": "SQS = Send Queued Stuff (pull-based, 1-to-1 decoupling)."
  },
  {
    "id": "saa_0e413a06c5",
    "materia": "general",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company stores application logs in Amazon S3 in CSV format. A data analyst needs to run ad-hoc SQL queries on this data without setting up infrastructure. Which AWS service should be used?",
    "opciones": [
      "Amazon EMR",
      "Amazon Athena",
      "Amazon Redshift",
      "AWS Glue <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Athena is serverless and queries S3 data using SQL - No infrastructure to manage - Pay per query (per TB scanned) - Perfect for ad-hoc querying - EMR requires cluster management - Redshift requires data warehouse setup - Glue is for ETL, not querying References: Amazon Athena, Serverless Analytics </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCommon pattern: optimize S3 data for Athena → use Glue to transform to Parquet/ORC columnar format.\n\nAthena costs $5/TB scanned. Optimize by partitioning data and using Parquet/ORC columnar format.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Glue = The glue that sticks raw data to analytics tools."
  },
  {
    "id": "saa_0e8610cf2c",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company wants to automatically move S3 objects to cheaper storage classes based on access patterns. They don't want to manage this manually. What should they use?",
    "opciones": [
      "S3 Lifecycle Policies",
      "S3 Intelligent-Tiering",
      "Manual scripts",
      "AWS Lambda functions <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - S3 Intelligent-Tiering automatically moves objects between tiers - Monitors access patterns - No retrieval fees (unlike IA classes) - Small monthly monitoring fee per object Intelligent-Tiering Access Tiers:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nFor predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Intelligent-Tiering = Smart automatic cost optimization."
  },
  {
    "id": "saa_0eb2e06282",
    "materia": "Design High-Performing Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company needs to store frequently accessed data with the lowest latency and highest throughput. Cost is not the primary concern. Which S3 storage class should be used?",
    "opciones": [
      "S3 Standard",
      "S3 Intelligent-Tiering",
      "S3 Standard-IA",
      "S3 One Zone-IA <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - S3 Standard provides: - Millisecond latency - High throughput - 99.99% availability - 11 9's durability - Designed for frequently accessed data S3 Storage Classes Comparison: - Standard: Frequent access, highest cost - Intelligent-Tiering: Unknown/changing patterns, automatic tiering - Standard-IA: Infrequent access, lower cost, retrieval fees - One Zone-IA: Infrequent, single AZ, lowest IA cost - Glacier: Archive, minutes to hours retrieval - Glacier Deep Archive: Long-term archive, 12+ hours retrieval References: S3 Storage Classes, S3 Standard </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCannot upload directly to Glacier via console. Must use S3 Lifecycle policy or CLI/SDK. Data must pass through S3 first.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Glacier = Frozen data; cheap to store but takes time to thaw."
  },
  {
    "id": "saa_12279127e5",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company needs to ensure S3 objects cannot be deleted for 7 years and even the root account cannot override this. Which feature should be configured?",
    "opciones": [
      "S3 Versioning with Lifecycle policies",
      "S3 Object Lock in Compliance Mode",
      "S3 Object Lock in Governance Mode",
      "MFA Delete <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - S3 Object Lock in Compliance Mode enforces WORM (Write Once Read Many) - Cannot be overridden by anyone, including root account - Retention period cannot be shortened - Object versions cannot be deleted during retention period Object Lock Modes: | Feature | Governance Mode | Compliance Mode | |---------|----------------|-----------------| | Override | Yes (with special permission) | No (even root cannot) | | Delete | Can be deleted with permission | Cannot be deleted | | Retention Change | Can shorten with permission | Cannot shorten | | Use Case | Internal governance | Regulatory compliance | Object Lock Components:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Config = Configuration compliance and history."
  },
  {
    "id": "saa_12665cdbab",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "cloudwatch",
    "dificultad": 2,
    "pregunta": "A company wants to use AWS DataSync to transfer data but needs to verify that files are identical at source and destination. Which DataSync feature ensures this?",
    "opciones": [
      "DataSync doesn't verify data",
      "Built-in data integrity verification",
      "Manual MD5 checksum comparison",
      "Use CloudWatch to monitor transfers <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - DataSync automatically verifies data integrity - Checks data at source and destination - Ensures data consistency after transfer - Built-in feature, no manual intervention needed - CloudWatch monitors progress but doesn't verify integrity References: AWS DataSync, Data Integrity </details> ---",
    "explicacion_correcta": "Monitoring and observability service collecting logs, metrics, events from AWS services.\n\nWhen to use: Real-time performance visualization, alarms triggering Auto Scaling/SNS, centralizing app/OS logs.\n\nKey differences: AWS Config = configuration history. CloudTrail = API audit. CloudWatch = performance metrics and logs.",
    "analisis_distractores": "CloudWatch does NOT monitor internal OS metrics (memory, disk space) by default. Must install CloudWatch Agent.",
    "tip": "CloudWatch = Watches your performance metrics."
  },
  {
    "id": "saa_126d0ff2c9",
    "materia": "Design High-Performing Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "EC2 Placement Groups - Cluster vs Spread (Similar to PT4) A high-frequency trading application requires single-digit millisecond latency between instances. Which placement group type should be used?",
    "opciones": [
      "Cluster placement group",
      "Spread placement group",
      "Partition placement group",
      "Default VPC placement <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: Placement Group Types: Cluster: ✅ ├── Packs instances close together in single AZ ├── Latency: <1ms (single-digit microseconds) ├── Network: 10-25 Gbps between instances ├── Use: HPC, low-latency applications ✅ └── Risk: Single AZ failure affects all instances Spread: ├── Instances on separate hardware ├── Max: 7 instances per AZ per group ├── Use: Critical instances that must survive hardware failure └── Latency: Normal inter-AZ latency Partition: ├── Instances in logical partitions (separate racks) ├── Max: 7 partitions per AZ ├── Use: Distributed databases (Hadoop, Cassandra) └── Latency: Normal Cluster Placement Group Architecture: Availability Zone 1: └── Single Physical Rack ├── Instance 1 ─┐ ├── Instance 2 ├─► Ultra-low latency network ├── Instance 3 │ (<1ms, 25 Gbps) └── Instance 4 ─┘ Ideal for: ├── High-frequency trading ✅ ├── Distributed ML training └── Tightly coupled HPC workloads Key Concept: Cluster = Maximum performance, minimum latency (same rack, single AZ) </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_12e55a5434",
    "materia": "Design Secure Architectures",
    "tema": "sqs",
    "dificultad": 2,
    "pregunta": "SQS Cross-Account Access Company A has an SQS queue in account 111111 for analytics data. Company B (account 222222) needs to send messages to this queue. What is the MOST efficient way to enable this?",
    "opciones": [
      "Create an IAM role in account 111111 that allows SQS:SendMessage, and have account 222222 assume this role",
      "Configure an SQS queue policy in account 111111 to allow account 222222 to perform SQS:SendMessage",
      "Share the AWS access keys from account 111111 with account 222222",
      "Set up VPC peering between the two accounts Rule of Thumb: For cross-account resource access in AWS, prefer resource-based policies over IAM roles when available (S3, SQS, SNS, Lambda). ---"
    ],
    "correcta": 1,
    "explicacion": "Explanation: SQS Queue Policy (Recommended): json { \"Effect\": \"Allow\", \"Principal\": {\"AWS\": \"arn:aws:iam::222222:root\"}, \"Action\": \"sqs:SendMessage\", \"Resource\": \"arn:aws:sqs:region:111111:MyQueue\" } - ✅ Simple and direct - ✅ No temporary credentials needed - ✅ Resource-based policy (attached to queue) - ✅ No AssumeRole overhead IAM Role (Option A - More Complex): - Requires AssumeRole in every request - Need to manage trust relationships - Handle temporary credentials - More API calls = higher latency Why Others Are Wrong:",
    "explicacion_correcta": "Fully managed service to securely control access using users, groups, roles, and identity-based policies.\n\nWhen to use: Implement least privilege, manage MFA, define permissions for humans/apps/services interacting with AWS.\n\nKey differences: IAM manages permissions within one AWS account. Organizations (SCPs) manages boundaries across accounts. Cognito handles app end-user auth.",
    "analisis_distractores": "Explicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.\n\nStandard = unlimited throughput, at-least-once (duplicates possible). FIFO = exactly-once, strict ordering, 300 msgs/sec (3000 with batching).",
    "tip": "IAM = I Am Managing who can do what. | SQS = Send Queued Stuff (pull-based, 1-to-1 decoupling)."
  },
  {
    "id": "saa_142aa5a479",
    "materia": "Design Resilient Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "A company wants to implement a disaster recovery solution for their production database. They can tolerate a 1-hour data loss (RPO) and 4-hour recovery time (RTO). Which DR strategy is MOST cost-effective?",
    "opciones": [
      "Multi-site active-active",
      "Warm standby",
      "Pilot light",
      "Backup and restore <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Pilot light maintains core services (like database replication) - RPO: Minutes (database replication lag) - RTO: Hours (time to scale up remaining services) - More cost-effective than warm standby - Meets the 1-hour RPO and 4-hour RTO requirements - Multi-site is expensive and over-engineered - Warm standby costs more than necessary - Backup and restore may not meet RPO/RTO References: Disaster Recovery Strategies, Pilot Light </details> ---"
  },
  {
    "id": "saa_147c1b2e8d",
    "materia": "general",
    "tema": "aws-architect",
    "dificultad": 3,
    "pregunta": "A company that operates a web application on premises is preparing to launch a newer version of the application on AWS. The company needs to route requests to either the AWS-hosted or the on-premises-hosted application based on the URL query string. The on-premises application is not available from the internet, and a VPN connection is established between Amazon VPC and the company's data center. The company wants to use an Application Load Balancer (ALB) for this launch. Which solution meets these requirements?",
    "opciones": [
      "Use two ALBs: one for on-premises and one for the AWS resource. Add hosts to each target group of each ALB. Route with Amazon Route 53 based on the URL query string.",
      "Use two ALBs: one for on-premises and one for the AWS resource. Add hosts to the target group of each ALB. Create a software router on an EC2 instance based on the URL query string.",
      "Use one ALB with two target groups: one for the AWS resource and one for on premises. Add hosts to each target group of the ALB. Configure listener rules based on the URL query string.",
      "Use one ALB with two AWS Auto Scaling groups: one for the AWS resource and one for on premises. Add hosts to each Auto Scaling group. Route with Amazon Route 53 based on the URL query string."
    ],
    "correcta": 2,
    "explicacion": "Explanation: https://aws.amazon.com/blogs/aws/new-advanced-request-routing-for-aws-application-loadbalancers/ The host-based routing feature allows you to write rules that use the Host header to route traffic to the desired target group. Today we are extending and generalizing this feature, giving you the ability to write rules (and route traffic) based on standard and custom HTTP headers and methods, the query string, and the source IP address. Get Latest & Actual SAA-C03 Exam's Question and Answers from Lead2pass. https://www.lead2pass.com 11 ★ Instant Download ★ PDF And VCE ★ 100% Passing Guarantee ★ 100% Money Back Guarantee Thank You for Trying Our Product Lead2pass Certification Exam Features: ★ More than 99,900 Satisfied Customers Worldwide. ★ Average 99.9% Success Rate. ★ Free Update to match latest and real exam scenarios. ★ Instant Download Access! No Setup required. ★ Questions & Answers are downloadable in PDF format and VCE test engine format. ★ Multi-Platform capabilities - Windows, Laptop, Mac, Android, iPhone, iPod, iPad. ★ 100% Guaranteed Success or 100% Money Back Guarantee. ★ Fast, helpful support 24x7. View list of all certification exams: http://www.lead2pass.com/all-products.html 10% Discount Coupon Code: ASTR14 Get Latest & Actual SAA-C03 Exam's Question and Answers from Lead2pass. https://www.lead2pass.com 12",
    "explicacion_correcta": "Connect VPC to AWS services privately without Internet Gateway, NAT, VPN, or Direct Connect.\n\nWhen to use: Private subnets must access AWS services without traversing public internet.\n\nKey differences: Gateway Endpoints only for S3 and DynamoDB (route table prefix lists). Interface Endpoints (PrivateLink) for almost all other services (ENI with private IP).",
    "analisis_distractores": "Gateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Gateway for Big Two (S3 & DynamoDB); Interface for the Rest."
  },
  {
    "id": "saa_14e8d6ad09",
    "materia": "Design Secure Architectures",
    "tema": "iam",
    "dificultad": 2,
    "pregunta": "An organization has multiple AWS accounts. They want to centrally manage permissions across all accounts. What is the BEST solution?",
    "opciones": [
      "Create identical IAM policies in each account",
      "Use AWS Organizations with Service Control Policies (SCPs)",
      "Use IAM roles in each account",
      "Share IAM users across accounts <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Service Control Policies (SCPs) set permission boundaries for entire AWS accounts - Applied at organization, OU, or account level - Centrally managed from master/management account - Maximum permissions available, individual IAM policies still needed - Option A: Not centralized, difficult to maintain - Option C: Roles help with cross-account access but don't centrally manage permissions - Option D: IAM users cannot be shared across accounts SCP Example (Deny all regions except us-east-1): json { \"Version\": \"2012-10-17\", \"Statement\": [ { \"Effect\": \"Deny\", \"Action\": \"*\", \"Resource\": \"*\", \"Condition\": { \"StringNotEquals\": { \"aws:RequestedRegion\": \"us-east-1\" } } } ] } References: AWS Organizations, Service Control Policies </details> ---",
    "explicacion_correcta": "Fully managed service to securely control access using users, groups, roles, and identity-based policies.\n\nWhen to use: Implement least privilege, manage MFA, define permissions for humans/apps/services interacting with AWS.\n\nKey differences: IAM manages permissions within one AWS account. Organizations (SCPs) manages boundaries across accounts. Cognito handles app end-user auth.",
    "analisis_distractores": "Explicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.\n\nSCPs don't grant permissions, they only restrict. Root user in member accounts is blocked by default with full deny SCP.\n\nSCPs don't grant permissions, they only restrict. Root user in member accounts is blocked by default with full deny SCP.",
    "tip": "IAM = I Am Managing who can do what. | Organizations = SCPs restrict, never grant."
  },
  {
    "id": "saa_157dadc1c0",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "S3 Bucket Keys for SSE-KMS Cost Reduction (Similar to PT3) An application stores millions of small objects in S3 with SSE-KMS encryption. KMS costs are very high due to API request volume. Which feature reduces KMS costs?",
    "opciones": [
      "Use SSE-S3 instead",
      "Enable S3 Bucket Keys",
      "Use client-side encryption",
      "Reduce KMS key rotation frequency <details> <summary>✅ Click to reveal answer</summary> Key Concept: S3 Bucket Keys = Reuse KMS-generated key for multiple objects (99% cost reduction) </details> ---"
    ],
    "correcta": 1,
    "explicacion": "Explanation: S3 Bucket Keys: Without Bucket Keys: Each object → Separate KMS API call → $0.03 per 10K requests ├── 1 million objects = 1M KMS requests └── Cost: 1M ÷ 10K × $0.03 = $3.00 With Bucket Keys: ✅ S3 requests bucket key from KMS → Uses bucket key for all objects ├── 1 million objects = ~1 KMS request (reused key) └── Cost: ~$0.00003 (99% reduction!) How It Works: Traditional SSE-KMS: Object 1 → KMS API call (generate data key) → Encrypt → S3 Object 2 → KMS API call (generate data key) → Encrypt → S3 Object 3 → KMS API call (generate data key) → Encrypt → S3 └── N objects = N KMS calls ❌ With S3 Bucket Keys: Step 1: S3 calls KMS once → Get bucket key Step 2: S3 generates data keys from bucket key (no KMS) Object 1 → Encrypt with bucket key-derived key → S3 Object 2 → Encrypt with bucket key-derived key → S3 Object 3 → Encrypt with bucket key-derived key → S3 └── N objects = 1 KMS call ✅ Cost Comparison: 1 million PUTs per day: Without Bucket Keys: ├── KMS requests: 1,000,000 ├── Cost: 100 × $0.03 = $3.00/day └── Monthly: $90 With Bucket Keys: ✅ ├── KMS requests: ~1 (bucket key cached) ├── Cost: ~$0.00003/day └── Monthly: ~$0.001 Savings: 99.99% reduction in KMS costs Enable Bucket Keys: bash # New bucket aws s3api create-bucket \\ --bucket my-bucket \\ --create-bucket-configuration LocationConstraint=us-west-2 aws s3api put-bucket-encryption \\ --bucket my-bucket \\ --server-side-encryption-configuration '{ \"Rules\": [{ \"ApplyServerSideEncryptionByDefault\": { \"SSEAlgorithm\": \"aws:kms\", \"KMSMasterKeyID\": \"arn:aws:kms:us-west-2:123456789012:key/abcd-1234\" }, \"BucketKeyEnabled\": true }] }' # Existing bucket aws s3api put-bucket-encryption \\ --bucket existing-bucket \\ --server-side-encryption-configuration '{ \"Rules\": [{ \"ApplyServerSideEncryptionByDefault\": { \"SSEAlgorithm\": \"aws:kms\", \"KMSMasterKeyID\": \"arn:aws:kms:us-west-2:123456789012:key/abcd-1234\" }, \"BucketKeyEnabled\": true }] }' Trade-offs: Benefits: ├── 99% reduction in KMS costs ✅ ├── Reduced KMS throttling risk ├── No application changes needed └── Works with existing buckets Considerations: ├── Bucket key cached for 5 minutes (rotation delay) ├── CloudTrail shows bucket ARN, not object ARN in KMS logs └── No downside for most use cases Why others wrong:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCannot enable encryption on existing RDS/EBS directly. Must snapshot → copy with encryption → restore.\n\nManagement events enabled by default (90 days free). Data events (S3 uploads, Lambda invocations) NOT enabled by default, extra cost. 15-minute delay.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | KMS = Keeps Master Secrets safe."
  },
  {
    "id": "saa_15e44d3146",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A company wants to automatically patch all EC2 instances in their fleet during a scheduled maintenance window. Which AWS service should they use?",
    "opciones": [
      "AWS CloudFormation with custom scripts",
      "AWS Systems Manager Patch Manager",
      "Amazon EventBridge with Lambda",
      "AWS Config with remediation actions <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Patch Manager automates OS and application patching - Maintenance windows define when to patch - Patch baselines specify which patches to install - CloudFormation is for infrastructure as code, not patching - EventBridge could trigger patching but isn't purpose-built - Config evaluates compliance but doesn't patch References: Systems Manager Patch Manager, Maintenance Windows </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.\n\nEventBridge is CloudWatch Events v2. Always prefer EventBridge over CloudWatch Events for event routing.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | Config = Configuration compliance and history."
  },
  {
    "id": "saa_160161001f",
    "materia": "Design Resilient Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "Aurora Global Database Failover (Similar to PT6) A global application uses Aurora Global Database with primary in us-east-1 and secondary in eu-west-1. The us-east-1 region fails. What's the recovery process?",
    "opciones": [
      "Automatic failover to eu-west-1 (no action needed)",
      "Promote eu-west-1 to primary (manual, <1 minute)",
      "Restore from snapshot in eu-west-1",
      "Wait for us-east-1 to recover <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Aurora Global Database Failover: Normal Operation: us-east-1 (Primary) → Replicates → eu-west-1 (Secondary, read-only) ├── Replication lag: <1 second └── RPO: <1 second, RTO: <1 minute Regional Failure: us-east-1 fails ❌ Manual Promotion Required: ├── 1. Detach eu-west-1 from global database ├── 2. Promote eu-west-1 to standalone cluster ├── 3. Update application endpoint └── Time: <1 minute (manual steps) Why NOT Automatic: Aurora Global Database: ├── Cross-region DR ✅ ├── Automatic failover: ❌ NO (manual promotion required) ├── Reason: Protects against accidental region promotion └── RPO: ~1 second, RTO: <1 minute (manual) Aurora Multi-AZ (same region): ├── Within-region HA ✅ ├── Automatic failover: ✅ YES (<30 seconds) └── RPO: 0 (synchronous), RTO: 30 seconds Failover Steps: bash # 1. Remove secondary from global cluster aws rds remove-from-global-cluster \\ --global-cluster-identifier my-global-cluster \\ --db-cluster-identifier eu-west-1-cluster # 2. Promote becomes standalone cluster automatically # 3. Update application DNS/endpoint # From: my-global-cluster.cluster-ro-xxx.eu-west-1.rds.amazonaws.com # To: eu-west-1-cluster.cluster-xxx.eu-west-1.rds.amazonaws.com Key Concept: Aurora Global = Manual failover (protects against accidents), <1 min RTO </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nAurora storage auto-scales in 10GB increments up to 128TB. No need for read replicas for HA (6 copies already).\n\nMulti-AZ is for resilience, NOT read scaling. Converting Single-AZ to Multi-AZ is zero-downtime.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Aurora = 6 copies, 3 AZs, self-healing, no manual HA setup."
  },
  {
    "id": "saa_16407dac42",
    "materia": "Design Secure Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A company wants to enforce that all new EC2 instances must have encrypted EBS volumes. How can this be enforced across the organization?",
    "opciones": [
      "AWS Config rule with manual remediation",
      "Service Control Policy (SCP) in AWS Organizations",
      "IAM policy on each user",
      "AWS Lambda function to check instances <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Service Control Policies (SCPs) provide centralized, preventive controls - Applied at organization, OU, or account level - Cannot be overridden by anyone in member accounts - Maximum permission boundaries SCP Example - Enforce Encrypted EBS: json { \"Version\": \"2012-10-17\", \"Statement\": [ { \"Sid\": \"DenyUnencryptedEBSVolumes\", \"Effect\": \"Deny\", \"Action\": [ \"ec2:RunInstances\", \"ec2:CreateVolume\" ], \"Resource\": \"arn:aws:ec2:*:*:volume/*\", \"Condition\": { \"Bool\": { \"ec2:Encrypted\": \"false\" } } } ] } SCPs vs Other Controls: | Method | Prevention | Detection | Scope | Override | |--------|-----------|-----------|-------|----------| | SCP | Yes | No | Organization/OU/Account | Cannot override | | IAM Policy | Yes | No | User/Role/Group | Admin can change | | Config Rule | No | Yes | Account | Detection only | | Lambda | Possible | Yes | Custom | Complex | SCP Best Practices:",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | EBS = Elastic Block Store; one AZ, one instance, persistent."
  },
  {
    "id": "saa_186c995e3e",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A Lambda function is configured with 3008 MB memory but only uses 512 MB. The function runs 10 million times per month. What should be done to optimize costs?",
    "opciones": [
      "Increase memory to 10 GB",
      "Reduce memory allocation to 512 MB",
      "Switch to EC2",
      "Keep current configuration <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Lambda charges based on GB-seconds (memory × duration) - Allocating 3008 MB when only 512 MB is used wastes money - Reducing to 512 MB reduces costs ~6x - Right-sizing memory is critical for Lambda cost optimization - Increasing memory increases costs - EC2 adds operational overhead - Current configuration is wasteful Calculation: 3008 MB vs 512 MB = 5.86x cost reduction References: Lambda Pricing, Right-Sizing </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_1891961bb3",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 3,
    "pregunta": "A company needs to protect S3 objects from both accidental deletion and overwriting. What combination provides the best protection? (Select TWO) Options:",
    "opciones": [
      "Enable Versioning",
      "Provide access through pre-signed URLs only",
      "Disallow S3 Delete using IAM bucket policy",
      "Enable S3 Intelligent-Tiering - E. Enable Multi-Factor Authentication Delete"
    ],
    "correcta": 0,
    "explicacion": ", E Explanation: S3 Versioning allows recovery from accidental deletion or overwrite by keeping multiple versions. MFA Delete adds an extra security layer requiring multi-factor authentication for changing versioning state or permanently deleting object versions. ## Domain 3: Design High-Performing Architectures (24% of exam) ### High IOPS Storage",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization."
  },
  {
    "id": "saa_1a7d0927f8",
    "materia": "Design Secure Architectures",
    "tema": "iam",
    "dificultad": 3,
    "pregunta": "Your organization has an AWS setup and planning to build Single Sign-On for users to authenticate with on-premise Microsoft Active Directory Federation Services (ADFS) and let users log in to the AWS console using AWS STS Enterprise Identity Federation. Which of the following services do you need to call from AWS STS service after you authenticate with your on-premise?",
    "opciones": [
      "AssumeRoleWithSAML",
      "GetFederationToken",
      "AssumeRoleWithWebIdentity",
      "GetCallerIdentity"
    ],
    "correcta": 0,
    "explicacion": "https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithSAML. html https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html",
    "explicacion_correcta": "Fully managed service to securely control access using users, groups, roles, and identity-based policies.\n\nWhen to use: Implement least privilege, manage MFA, define permissions for humans/apps/services interacting with AWS.\n\nKey differences: IAM manages permissions within one AWS account. Organizations (SCPs) manages boundaries across accounts. Cognito handles app end-user auth.",
    "analisis_distractores": "Explicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_1bdfadaf4e",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A solutions architect needs to process CloudWatch Logs in real-time and send filtered data to an analytics application. Which solution should be used?",
    "opciones": [
      "Export logs to S3 and use Athena",
      "Use CloudWatch Logs Subscriptions with Kinesis Data Streams",
      "Use CloudWatch Logs Insights with scheduled queries",
      "Export logs to S3 and use Lambda <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - CloudWatch Logs Subscriptions enable real-time processing - Can send to Kinesis Data Streams for real-time analytics - Also supports Kinesis Data Firehose and Lambda - S3 export is not real-time (batch process) - Logs Insights is for ad-hoc queries, not streaming References: CloudWatch Logs Subscriptions, Real-Time Processing </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nKinesis Data Streams for custom processing. Kinesis Data Firehose for automatic delivery to S3/Redshift/Elasticsearch (no code needed).",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_1c8bd59210",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company has data in S3 Standard storage. Objects accessed within 30 days should remain in Standard, but older objects should move to S3 Glacier. How can this be automated?",
    "opciones": [
      "S3 Intelligent-Tiering",
      "S3 Lifecycle Policies",
      "AWS Lambda function",
      "Manual migration <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - S3 Lifecycle Policies automate transitions and expiration - Rule-based transitions between storage classes - Can filter by prefix or tags - No code required Lifecycle Policy Example: json { \"Rules\": [ { \"Id\": \"MoveToGlacier\", \"Status\": \"Enabled\", \"Transitions\": [ { \"Days\": 30, \"StorageClass\": \"GLACIER\" } ] } ] } Lifecycle Actions: - Transition: Move to different storage class - Expiration: Delete objects - NoncurrentVersionTransition: Transition previous versions - NoncurrentVersionExpiration: Delete previous versions - AbortIncompleteMultipartUpload: Clean up incomplete uploads Transition Rules: - Standard → Standard-IA (30 days min) - Standard → Glacier (0 days min) - Can't transition backwards (Glacier → Standard) References: S3 Lifecycle Policies, Storage Class Transitions </details> --- ## Summary Total Questions: 20 Topics Covered: - S3 Storage Classes and Use Cases - S3 Encryption (SSE-S3, SSE-KMS, SSE-C) - S3 Versioning and Object Lock - S3 Replication (CRR, SRR) - S3 Lifecycle Policies - S3 Event Notifications - EBS Volume Types (gp3, io2, st1, sc1) - EBS Snapshots and Archive - Amazon EFS (Shared NFS File Storage) - Amazon FSx (Windows, Lustre) - Instance Store - VPC Endpoints for S3 - CloudFront with S3 Exam Tips: S3 Storage Classes Decision Tree:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nMulti-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | RDS: Relational, Replicas for Reads, Multi-AZ for Resilience."
  },
  {
    "id": "saa_1e59d87a31",
    "materia": "Design High-Performing Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "A company is planning a large-scale migration to AWS and needs to assess their current environment, plan the migration, and track progress. Which AWS service provides this comprehensive approach?",
    "opciones": [
      "AWS Migration Hub",
      "AWS Application Discovery Service",
      "Both Migration Hub and Application Discovery Service",
      "AWS CloudEndure <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Application Discovery Service discovers on-premises resources - Collects server specifications, performance data, dependencies - Migration Hub tracks migration progress - Together they provide complete migration solution - Application Discovery feeds data into Migration Hub - CloudEndure is now AWS Application Migration Service References: Migration Hub, Application Discovery Service </details> ---"
  },
  {
    "id": "saa_1e6730194b",
    "materia": "Design High-Performing Architectures",
    "tema": "s3",
    "dificultad": 3,
    "pregunta": "You will be launching and terminating EC2 instances on a need basis for your workloads. You need to run some shell scripts and perform certain checks connecting to the AWS S3 bucket when the instance is getting launched. Which of the following options will allow performing any tasks during launch? (choose multiple)",
    "opciones": [
      "Use Instance user data for shell scripts.",
      "Use Instance metadata for shell scripts.",
      "Use AutoScaling Group lifecycle hooks and trigger AWS Lambda function through CloudWatch events.",
      "Use Placement Groups and set “InstanceLaunch” state to trigger AWS Lambda functions."
    ],
    "correcta": 0,
    "explicacion": ", C Option A is correct. Option C is correct. https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html#prepari ng-for-notification",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_1ecf9f9e76",
    "materia": "Design High-Performing Architectures",
    "tema": "s3",
    "dificultad": 3,
    "pregunta": "A large media company hosts a web application on AWS. The company wants to start caching confidential media files so that users around the world will have reliable access to the files. The content is stored in Amazon S3 buckets. The company must deliver the content quickly, regardless of where the requests originate geographically. Which solution will meet these requirements?",
    "opciones": [
      "Use AWS DataSync to connect the S3 buckets to the web application.",
      "Deploy AWS Global Accelerator to connect the S3 buckets to the web application.",
      "Deploy Amazon CloudFront to connect the S3 buckets to CloudFront edge servers.",
      "Use Amazon Simple Queue Service (Amazon SQS) to connect the S3 buckets to the web application."
    ],
    "correcta": 2,
    "explicacion": "Explanation: CloudFront uses a local cache to provide the response, AWS Global accelerator proxies requests and connects to the application all the time for the response. https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-contentrestricting-access-to-s3.html#private-content-granting-permissions-to-oai Get Latest & Actual SAA-C03 Exam's Question and Answers from Lead2pass. https://www.lead2pass.com 8 ★ Instant Download ★ PDF And VCE ★ 100% Passing Guarantee ★ 100% Money Back Guarantee",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nNon-HTTP traffic or need static IPs → Global Accelerator. HTTP caching → CloudFront. Instant failover with health checks.\n\nNon-HTTP traffic or need static IPs → Global Accelerator. HTTP caching → CloudFront. Instant failover with health checks.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Global Accelerator = Accelerate global traffic with static anycast IPs."
  },
  {
    "id": "saa_1ed650293c",
    "materia": "general",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company needs to transfer 50 TB of data from their on-premises data center to AWS. They have limited bandwidth (10 Mbps). What is the most appropriate solution?",
    "opciones": [
      "Use AWS Direct Connect",
      "Upload via S3 Transfer Acceleration",
      "Use AWS Snowball Edge",
      "Use AWS DataSync <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "At 10 Mbps, transferring 50 TB would take approximately 46 days. AWS Snowball Edge is designed for this scenario - physical device shipped to customer, data loaded locally, then shipped to AWS. </details> --- ## 🔗 Additional Resources - [S3 User Guide](https://docs.aws.amazon.com/s3/) - [EBS User Guide](https://docs.aws.amazon.com/ebs/) - [EFS User Guide](https://docs.aws.amazon.com/efs/) - [Storage Gateway Guide](https://docs.aws.amazon.com/storagegateway/) --- Estimated Study Time: 6-8 hours Difficulty: ⭐⭐⭐ [⬅️ Previous: Compute](../03-Compute/README.md) | [Next: Database ➡️](../05-Database/README.md) | [📚 Main](../README.md)",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.\n\nEFS is strictly for Linux (NFS). For Windows servers, choose Amazon FSx for Windows File Server.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | EBS = Elastic Block Store; one AZ, one instance, persistent."
  },
  {
    "id": "saa_1f07bfa666",
    "materia": "Design Resilient Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "An application needs to store relationships between data entities (social network connections, fraud detection). Which database is MOST suitable?",
    "opciones": [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Neptune",
      "Amazon DocumentDB <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Amazon Neptune is graph database - Store and query highly connected data - Supports Gremlin and SPARQL - Fast relationship queries - Multi-AZ replication Neptune Use Cases: - Social networks - Fraud detection - Recommendation engines - Knowledge graphs - Network topology - Supply chain Graph vs Relational: - Graph: Complex relationships, traversals - Relational: Joins become expensive for deep relationships - Graph databases optimize for relationship queries References: Amazon Neptune, Graph Databases </details> ---",
    "explicacion_correcta": "Database deployment with synchronous standby replica in different AZ for high availability.\n\nWhen to use: Disaster recovery, surviving AZ outage, network loss, or compute failure.\n\nKey differences: Synchronous replication for HA. Read Replicas use asynchronous for performance scaling. Standby cannot serve reads.",
    "analisis_distractores": "Multi-AZ is for resilience, NOT read scaling. Converting Single-AZ to Multi-AZ is zero-downtime.",
    "tip": "Multi-AZ = Automatic Zero-data-loss standby (DR, not reads)."
  },
  {
    "id": "saa_1f5deacd66",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "aws-architect",
    "dificultad": 3,
    "pregunta": "Which of the following actions require MFA for the root account according to AWS best practices? (Choose TWO)",
    "opciones": [
      "Logging into AWS Console",
      "Changing account settings",
      "Launching EC2 instances",
      "Deleting S3 buckets E. Viewing billing information <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": ", B Explanation: - AWS best practices: Enable MFA on root account immediately - Root account should be protected with MFA - MFA required for sensitive operations - Some actions like changing account settings require root + MFA Root Account Best Practices:"
  },
  {
    "id": "saa_1f795c0ec8",
    "materia": "Design High-Performing Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "A real-time application needs guaranteed ordering of events for each user. Events should be processed in the order they arrive per user. Which Kinesis feature ensures this?",
    "opciones": [
      "Use the same shard for all records",
      "Use the user ID as the partition key",
      "Enable Kinesis enhanced fan-out",
      "Use multiple shards with round-robin distribution <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Partition key determines which shard receives the record - Same partition key always goes to the same shard - Records in a shard are ordered by sequence number - Using user ID ensures all user events go to same shard (ordered) - One shard doesn't scale - Enhanced fan-out is for parallel consumers - Round-robin breaks ordering References: Kinesis Data Streams, Ordering Guarantees </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nKinesis Data Streams for custom processing. Kinesis Data Firehose for automatic delivery to S3/Redshift/Elasticsearch (no code needed).",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Kinesis = Kinetic (moving) data streams in real-time."
  },
  {
    "id": "saa_202f968768",
    "materia": "general",
    "tema": "aws-architect",
    "dificultad": 1,
    "pregunta": "Which VPC component allows outbound internet access for private subnets?",
    "opciones": [
      "Internet Gateway",
      "NAT Gateway",
      "Virtual Private Gateway",
      "VPC Peering"
    ],
    "correcta": 1,
    "explicacion": "",
    "explicacion_correcta": "Connect VPC to AWS services privately without Internet Gateway, NAT, VPN, or Direct Connect.\n\nWhen to use: Private subnets must access AWS services without traversing public internet.\n\nKey differences: Gateway Endpoints only for S3 and DynamoDB (route table prefix lists). Interface Endpoints (PrivateLink) for almost all other services (ENI with private IP).",
    "analisis_distractores": "Gateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Gateway for Big Two (S3 & DynamoDB); Interface for the Rest."
  },
  {
    "id": "saa_211b314d5a",
    "materia": "general",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company wants to route events from multiple AWS services to different targets based on event content. Which service provides centralized event routing?",
    "opciones": [
      "Amazon SNS",
      "Amazon SQS",
      "Amazon EventBridge",
      "AWS Step Functions <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Amazon EventBridge is serverless event bus for application and AWS service events - Content-based routing using event patterns - 100+ AWS service integrations as event sources - 20+ AWS services as targets EventBridge Architecture: Event Sources ├─ AWS Services (EC2, S3, Lambda, etc.) ├─ Custom Applications ├─ SaaS Partners (Salesforce, Datadog, etc.) ↓ EventBridge Bus ↓ Event Rules (filtering) ↓ Targets ├─ Lambda ├─ Step Functions ├─ SQS ├─ SNS ├─ Kinesis └─ API Gateway EventBridge Components:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_227225509a",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "aws-architect",
    "dificultad": 1,
    "pregunta": "A company wants to track costs by department (Engineering, Marketing, Finance). How should they implement this?",
    "opciones": [
      "Create separate AWS accounts for each department",
      "Use Cost Allocation Tags and activate them in the Billing console",
      "Use different regions for each department",
      "Create separate VPCs for each department <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Cost Allocation Tags enable tracking costs by custom dimensions - Tag resources with \"Department\" key and values - Activate tags in Billing console to appear in reports - View costs grouped by department in Cost Explorer - Separate accounts add management overhead - Regions don't affect cost tracking - VPCs don't enable cost tracking References: Cost Allocation Tags, Cost Tracking </details> ---",
    "explicacion_correcta": "Connect VPC to AWS services privately without Internet Gateway, NAT, VPN, or Direct Connect.\n\nWhen to use: Private subnets must access AWS services without traversing public internet.\n\nKey differences: Gateway Endpoints only for S3 and DynamoDB (route table prefix lists). Interface Endpoints (PrivateLink) for almost all other services (ENI with private IP).",
    "analisis_distractores": "Gateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Gateway for Big Two (S3 & DynamoDB); Interface for the Rest."
  },
  {
    "id": "saa_22e4e69084",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "s3",
    "dificultad": 1,
    "pregunta": "A company wants to ensure deleted S3 objects can be recovered for 30 days. What should be enabled?",
    "opciones": [
      "S3 Lifecycle Policies",
      "S3 Versioning",
      "S3 Object Lock",
      "MFA Delete <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - S3 Versioning preserves all versions of objects - Deleted objects become delete markers (recoverable) - Previous versions retained - Protection against accidental deletion S3 Versioning Features: - Stores all versions (including deleted) - Recover from accidental deletes - Recover from application failures - Can suspend (not disable completely) - Each version counted for storage costs Related Features: - MFA Delete: Requires MFA to delete versions or suspend versioning - Object Lock: WORM (Write Once Read Many), compliance - Lifecycle: Transition or delete versions after time period Best Practice: Enable versioning + lifecycle to delete old versions References: S3 Versioning, Data Protection </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization."
  },
  {
    "id": "saa_231196e818",
    "materia": "Design Resilient Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "An EC2 instance needs low-latency, high-throughput connectivity to other instances in the same cluster. Which placement group should be used?",
    "opciones": [
      "Cluster Placement Group",
      "Spread Placement Group",
      "Partition Placement Group",
      "No placement group needed <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - Cluster Placement Group places instances close together in single AZ - Low-latency network (10 Gbps between instances) - High throughput, enhanced networking - All instances in same rack/physical proximity Placement Group Types: | Type | Purpose | AZ | Max Instances | |------|---------|----|----| | Cluster | Low latency, high throughput | Single AZ | Limited by instance type | | Spread | Reduce correlated failures | Multi-AZ | 7 per AZ | | Partition | Large distributed workloads | Multi-AZ | 7 partitions per AZ | Use Cases: - Cluster: HPC, big data, low-latency apps - Spread: Critical applications (each instance separate rack) - Partition: Hadoop, Cassandra, Kafka (partition = rack) Limitations: - Cluster: Single AZ only - Spread: Max 7 instances per AZ - Not all instance types supported References: EC2 Placement Groups </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nMulti-AZ is for resilience, NOT read scaling. Converting Single-AZ to Multi-AZ is zero-downtime.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | Multi-AZ = Automatic Zero-data-loss standby (DR, not reads)."
  },
  {
    "id": "saa_2312a1c7bb",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "An organization uses AWS Glue Crawlers to discover schemas for data in S3. The crawler should run automatically whenever new data arrives. How can this be configured?",
    "opciones": [
      "Manually run the crawler daily",
      "Use EventBridge to trigger the crawler on S3 PutObject events",
      "Use AWS Config to detect changes",
      "Crawlers cannot be triggered automatically <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - EventBridge (formerly CloudWatch Events) can trigger on S3 events - S3 PutObject events can invoke Glue Crawler - Automated schema discovery when new data arrives - Manual running isn't automatic - Config tracks configuration, doesn't trigger workflows - Glue supports multiple trigger types References: AWS Glue, EventBridge Integration </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCommon pattern: optimize S3 data for Athena → use Glue to transform to Parquet/ORC columnar format.\n\nCommon pattern: optimize S3 data for Athena → use Glue to transform to Parquet/ORC columnar format.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Glue = The glue that sticks raw data to analytics tools."
  },
  {
    "id": "saa_233b7bb352",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "What does the following IAM policy condition do? json \"Condition\": { \"IpAddress\": { \"aws:SourceIp\": \"203.0.113.0/24\" } }",
    "opciones": [
      "Allows access only from the specified IP range",
      "Denies access from the specified IP range",
      "Logs access from the specified IP range",
      "Routes traffic through the specified IP range <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - Condition restricts policy effectiveness to requests from specified IP range - When used with \"Effect\": \"Allow\", grants access only from those IPs - When used with \"Effect\": \"Deny\", denies access from those IPs - Does not log or route traffic - Use Case: Restrict access to corporate network IPs Complete Policy Example: json { \"Version\": \"2012-10-17\", \"Statement\": [ { \"Effect\": \"Allow\", \"Action\": \"s3:*\", \"Resource\": \"*\", \"Condition\": { \"IpAddress\": { \"aws:SourceIp\": \"203.0.113.0/24\" } } } ] } References: IAM Policy Conditions, IP-based Access Control </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_234ecae108",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "s3",
    "dificultad": 3,
    "pregunta": "S3 Glacier Retrieval and Migration (Similar to PT3-Q4) A media company has 300 TB of video files in S3 Glacier Deep Archive. The marketing team now needs frequent access to these files for the next 6 months. The architect wants to move files to S3 Intelligent-Tiering for automatic cost optimization. What is the correct migration approach?",
    "opciones": [
      "Change bucket default storage class to Intelligent-Tiering; existing objects automatically migrate",
      "Create S3 Lifecycle policy to transition from Glacier Deep Archive to Intelligent-Tiering",
      "Restore objects from Glacier Deep Archive, copy to Intelligent-Tiering during restoration, delete archived versions",
      "Use AWS DataSync to transfer files from Glacier to Intelligent-Tiering <details> <summary>✅ Click to reveal answer</summary> Key Concept: Glacier Deep Archive → Restore → Copy → Delete original (required workflow) </details> ---"
    ],
    "correcta": 2,
    "explicacion": "Explanation: S3 Storage Class Transition Rules: Allowed Direct Transitions: ├── Standard → Standard-IA ✅ ├── Standard → Intelligent-Tiering ✅ ├── Standard → Glacier Instant Retrieval ✅ ├── Standard → Glacier Flexible Retrieval ✅ ├── Standard → Glacier Deep Archive ✅ │ └── Glacier Deep Archive → Other classes ❌ BLOCKED │ │ Must restore first! └── Glacier Deep Archive → Temporary Restore → Copy to new class Correct Migration Process: Step 1: Restore from Glacier Deep Archive ├── Retrieval Options: │ ├── Standard: 12-48 hours ($0.02/GB) │ └── Bulk: 48 hours ($0.0025/GB) ✅ Cost-effective ├── Specify days accessible: 1-365 days └── Objects remain in Glacier + temporary accessible copy created Step 2: Copy During Restoration Window ├── While objects are restored (accessible) ├── Copy to Intelligent-Tiering └── Original Glacier copies still exist Step 3: Delete Glacier Versions └── Delete original Glacier Deep Archive versions to avoid double storage costs AWS CLI Commands: bash # Step 1: Initiate restore (bulk for cost savings) aws s3api restore-object \\ --bucket media-archive \\ --key videos/video001.mp4 \\ --restore-request '{\"Days\":30,\"GlacierJobParameters\":{\"Tier\":\"Bulk\"}}' # Step 2: After restoration completes, copy to Intelligent-Tiering aws s3 cp \\ s3://media-archive/videos/video001.mp4 \\ s3://media-archive/videos/video001.mp4 \\ --storage-class INTELLIGENT_TIERING \\ --metadata-directive COPY # Step 3: Delete original Glacier version (optional) aws s3api delete-object \\ --bucket media-archive \\ --key videos/video001.mp4 \\ --version-id <glacier-version-id> Cost Calculation (300 TB): - Restoration: 300 TB × $0.0025/GB = $768 (bulk tier) - Storage during transition: ~$3,840/month (30 days both copies) - Final cost: $0.0125/GB/month (Intelligent-Tiering Archive tier) Why others are wrong:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCannot upload directly to Glacier via console. Must use S3 Lifecycle policy or CLI/SDK. Data must pass through S3 first.\n\nFor predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Glacier = Frozen data; cheap to store but takes time to thaw."
  },
  {
    "id": "saa_2398c704f1",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "ec2",
    "dificultad": 3,
    "pregunta": "GuardDuty Threat Detection (Similar to PT2) A security team needs to implement continuous threat detection for AWS accounts that can identify: - Compromised EC2 instances communicating with known malicious IPs - Unusual API calls indicating credential compromise - Cryptocurrency mining activity on EC2 instances The solution should require minimal operational overhead and no agent installation. Which AWS service should be implemented?",
    "opciones": [
      "AWS Config with custom conformance packs",
      "Amazon Macie for sensitive data detection",
      "AWS GuardDuty for intelligent threat detection",
      "Amazon Inspector for vulnerability scanning <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: GuardDuty Features: AWS GuardDuty - Intelligent Threat Detection ├── Data Sources (Automatic) │ ├── VPC Flow Logs ✅ │ ├── CloudTrail Events ✅ │ ├── DNS Logs ✅ │ └── Kubernetes Audit Logs ✅ │ ├── Threat Intelligence │ ├── AWS threat intelligence │ ├── CrowdStrike threat intelligence │ ├── Proofpoint threat intelligence │ └── Known malicious IP/domain lists │ ├── Machine Learning │ ├── Anomaly detection │ ├── Behavioral analysis │ └── Baseline learning (7-14 days) │ └── Findings (Severity levels) ├── HIGH: Cryptocurrency mining ⛏️ ├── MEDIUM: Unusual API calls 🔑 └── LOW: Port scanning 🔍 Key Advantages: - ✅ No agent installation - analyzes existing AWS logs - ✅ No infrastructure management - fully managed service - ✅ Continuous monitoring - real-time threat detection - ✅ Minimal setup - enable with one click Example Findings:",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.\n\nManagement events enabled by default (90 days free). Data events (S3 uploads, Lambda invocations) NOT enabled by default, extra cost. 15-minute delay.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | Gateway for Big Two (S3 & DynamoDB); Interface for the Rest."
  },
  {
    "id": "saa_2533cc730f",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "Systems Manager Session Manager (Similar to PT7) A security team wants to access EC2 instances for troubleshooting without opening SSH port 22 or managing SSH keys. Which solution provides secure shell access?",
    "opciones": [
      "EC2 Instance Connect",
      "Systems Manager Session Manager",
      "Bastion host with key management",
      "Systems Manager Run Command <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Session Manager Benefits: Session Manager: ✅ ├── No open inbound ports (no port 22) ✅ ├── No SSH keys to manage ✅ ├── IAM-based access control ├── Session logging to S3/CloudWatch ├── Works via AWS API (SSM agent) └── Cross-platform (Linux, Windows) Architecture: No Session Manager: User → Internet → Security Group (port 22) → EC2 └── Requires: Open port, SSH key, public IP With Session Manager: ✅ User → IAM Auth → SSM Service → SSM Agent → EC2 └── Requires: SSM agent, IAM role, no open ports Security Group: No inbound rules needed: ├── Port 22: CLOSED ✅ ├── Port 3389: CLOSED (RDP) └── All traffic blocked Outbound rules: └── HTTPS (443) to SSM endpoints (for agent) Prerequisites:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_25412f109f",
    "materia": "Design Resilient Architectures",
    "tema": "aurora",
    "dificultad": 3,
    "pregunta": "AWS Resource Access Manager (RAM) Your company has 20 AWS accounts in an AWS Organization. Each account has provisioned its own VPC, subnets, and Transit Gateway attachments to connect to the corporate network. This duplication is causing high costs and management overhead. How can you reduce costs and centralize resource management?",
    "opciones": [
      "Use VPC peering between all accounts",
      "Create resources in one account and share using AWS Resource Access Manager (RAM)",
      "Use AWS Organizations consolidated billing only",
      "Merge all accounts into one"
    ],
    "correcta": 1,
    "explicacion": "Explanation: AWS Resource Access Manager (RAM): - Share AWS resources across accounts - No data duplication - Centralized management - Works within AWS Organizations Shareable Resources: - VPC subnets - Transit Gateway attachments - Route 53 Resolver rules - License Manager configurations - Aurora DB clusters - CodeBuild projects - And more... Example: Sharing VPC Subnets Scenario: - Network Account (111111): Owns VPC, subnets, Transit Gateway - App Accounts (222222, 333333): Need to deploy resources Steps:",
    "explicacion_correcta": "Cloud-native relational DB with built-in resilience: 6 copies across 3 AZs, self-healing storage.\n\nWhen to use: Enterprise workloads needing automatic failover, up to 15 read replicas, cross-region Global Database.\n\nKey differences: Aurora Multi-Master allows writes to multiple instances. Global Database provides <1s cross-region replication.",
    "analisis_distractores": "Aurora storage auto-scales in 10GB increments up to 128TB. No need for read replicas for HA (6 copies already).\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.\n\nSCPs don't grant permissions, they only restrict. Root user in member accounts is blocked by default with full deny SCP.",
    "tip": "Aurora = 6 copies, 3 AZs, self-healing, no manual HA setup. | Gateway for Big Two (S3 & DynamoDB); Interface for the Rest."
  },
  {
    "id": "saa_257056eba5",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "sns",
    "dificultad": 1,
    "pregunta": "A company wants to receive alerts when their monthly AWS costs exceed a threshold. Which service should they use?",
    "opciones": [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Pricing Calculator",
      "AWS Trusted Advisor <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - AWS Budgets allows setting custom cost/usage budgets with alerts - Can send notifications via SNS when thresholds are exceeded - Cost Explorer visualizes historical costs but doesn't send alerts - Pricing Calculator estimates future costs - Trusted Advisor provides best practice recommendations - For threshold alerts: AWS Budgets References: AWS Budgets, Cost Management </details> ---",
    "explicacion_correcta": "Fully managed push-based pub/sub messaging for decoupling microservices and broadcasting notifications.\n\nWhen to use: Fan-out pattern (single event to multiple subscribers): email, SMS, mobile push, multiple SQS queues, Lambda functions.\n\nKey differences: SNS = push-based pub/sub broadcast. SQS = pull-based point-to-point. EventBridge = complex rule-based filtering + SaaS integrations.",
    "analisis_distractores": "Use SNS+SQS fan-out for reliable task processing (SNS alone can lose messages if endpoint offline).",
    "tip": "SNS = Send Notifications Simultaneously (Broadcast/Push)."
  },
  {
    "id": "saa_2733da1223",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "sqs",
    "dificultad": 3,
    "pregunta": "A company has a service that produces event data. The company wants to use AWS to process the event data as it is received. The data is written in a specific order that must be maintained throughout processing. The company wants to implement a solution that minimizes operational overhead. How should a solutions architect accomplish this?",
    "opciones": [
      "Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue to hold messages. Set up an AWS Lambda function to process messages from the queue.",
      "Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an AWS Lambda function as a subscriber.",
      "Create an Amazon Simple Queue Service (Amazon SQS) standard queue to hold messages. Set up an AWS Lambda function to process messages from the queue independently.",
      "Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an Amazon Simple Queue Service (Amazon SQS) queue as a subscriber."
    ],
    "correcta": 0,
    "explicacion": "Explanation: The details are revealed in below url: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFOqueues.html FIFO (First-In-First-Out) queues are designed to enhance messaging between applications when the order of operations and events is critical, or where duplicates can't be tolerated. Examples of situations where you might use FIFO queues include the following: To make sure that userentered commands are run in the right order. To display the correct product price by sending price modifications in the right order. To prevent a student from enrolling in a course before registering for an account.",
    "explicacion_correcta": "Fully managed message queuing service for decoupling microservices and distributed systems.\n\nWhen to use: Async processing, background tasks, buffering requests to absorb traffic spikes.\n\nKey differences: SQS = pull-based point-to-point. SNS = push-based pub/sub broadcast. Kinesis = real-time streaming with replay.",
    "analisis_distractores": "Standard = unlimited throughput, at-least-once (duplicates possible). FIFO = exactly-once, strict ordering, 300 msgs/sec (3000 with batching).",
    "tip": "SQS = Send Queued Stuff (pull-based, 1-to-1 decoupling)."
  },
  {
    "id": "saa_278e783441",
    "materia": "Design Secure Architectures",
    "tema": "rds",
    "dificultad": 3,
    "pregunta": "You have launched an RDS instance with MySQL database with default configuration for your file sharing application to store all the transactional information. Due to security compliance, your organization wants to encrypt all the databases and storage on the cloud. They approached you to perform this activity on your MySQL RDS database. How can you achieve this?",
    "opciones": [
      "Copy snapshot from the latest snapshot of your RDS instance, select encryption during copy and restore a new DB instance from the newly encrypted snapshot.",
      "Stop the RDS instance, modify and select the encryption option. Start the RDS instance, it may take a while to start an RDS instance as existing data is getting encrypted.",
      "Create a case with AWS support to enable encryption for your RDS instance.",
      "AWS RDS is a managed service and the data at rest in all RDS instances are encrypted by default."
    ],
    "correcta": 0,
    "explicacion": "https://aws.amazon.com/blogs/aws/amazon-rds-update-share-encrypted-snapshots-enc rypt-existing-instances/",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Config = Configuration compliance and history."
  },
  {
    "id": "saa_2956cdaf36",
    "materia": "Design Secure Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "VPC Flow Logs for Security Analysis (Similar to PT6) A security team needs to analyze all network traffic to/from EC2 instances for compliance. Which feature captures this data?",
    "opciones": [
      "CloudTrail logs",
      "VPC Flow Logs",
      "CloudWatch Logs",
      "AWS Config <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: VPC Flow Logs: Captures: ├── Source/destination IP addresses ✅ ├── Source/destination ports ├── Protocol (TCP/UDP/ICMP) ├── Bytes transferred ├── Accept/Reject decisions ✅ └── Does NOT capture: Packet contents, DNS queries Scope: ├── VPC-level: All ENIs in VPC ├── Subnet-level: All ENIs in subnet └── ENI-level: Specific instance Flow Log Record Example: 2 123456789012 eni-1234567890abcdef0 \\",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | Gateway for Big Two (S3 & DynamoDB); Interface for the Rest."
  },
  {
    "id": "saa_299bb8053d",
    "materia": "general",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "A media company needs to search, visualize, and analyze large volumes of log and event data in near real-time. Which AWS service is best suited for this use case?",
    "opciones": [
      "Amazon OpenSearch Service",
      "Amazon Athena",
      "Amazon Redshift",
      "AWS Glue <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - OpenSearch Service (formerly Elasticsearch) is designed for log analytics, search, and visualization - Provides near real-time indexing and querying - Integrates with Kibana for dashboards - Athena is for ad-hoc SQL queries, not real-time search - Redshift is for data warehousing - Glue is for ETL, not search/visualization References: Amazon OpenSearch Service, Log Analytics </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nCommon pattern: optimize S3 data for Athena → use Glue to transform to Parquet/ORC columnar format.\n\nAthena costs $5/TB scanned. Optimize by partitioning data and using Parquet/ORC columnar format.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Glue = The glue that sticks raw data to analytics tools."
  },
  {
    "id": "saa_2b15b7d320",
    "materia": "Design High-Performing Architectures",
    "tema": "dynamodb",
    "dificultad": 2,
    "pregunta": "A company needs to ensure their web application can handle a sudden 10x traffic increase during product launches. Which architectural pattern should be implemented?",
    "opciones": [
      "Static capacity with manual scaling",
      "Auto Scaling with target tracking based on CPU utilization",
      "Pre-warming with scheduled scaling",
      "Serverless architecture with Lambda and DynamoDB on-demand <details> <summary>Show Answer</summary>"
    ],
    "correcta": 3,
    "explicacion": "Explanation: - Serverless scales automatically without pre-warming - Lambda scales to thousands of concurrent executions - DynamoDB on-demand scales with traffic - No capacity planning required - Option A doesn't scale - Option B has lag time for scaling - Option C requires predicting launch time - Serverless handles unpredictable spikes best References: Serverless Architecture, Elastic Scaling </details> ---",
    "explicacion_correcta": "Serverless compute service running code without provisioning/managing servers, auto-scales on demand.\n\nWhen to use: Event-driven architectures, serverless microservices, real-time file processing (S3 triggers), scheduled CRON jobs (EventBridge).\n\nKey differences: EC2 = manage OS, pay for running time. Lambda = abstracted infrastructure, pay for exact execution time. Fargate = serverless containers. Lambda = Function-as-a-Service.",
    "analisis_distractores": "Lambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nReduce latency to microseconds → DAX (DynamoDB Accelerator). Active-active multi-region → Global Tables. Unpredictable workloads → On-Demand capacity.",
    "tip": "Lambda = Limit of 15 minutes for serverless code. | Dynamo = Dynamic infinite scaling for NoSQL."
  },
  {
    "id": "saa_2b3fb18d56",
    "materia": "Design High-Performing Architectures",
    "tema": "ec2",
    "dificultad": 3,
    "pregunta": "A company runs a high performance computing (HPC) workload on AWS. The workload required low-latency network performance and high network throughput with tightly coupled node-to-node communication. The Amazon EC2 instances are properly sized for compute and storage capacity, and are launched using default options. What should a solutions architect propose to improve the performance of the workload?",
    "opciones": [
      "Choose a cluster placement group while launching Amazon EC2 instances.",
      "Choose dedicated instance tenancy while launching Amazon EC2 instances.",
      "Choose an Elastic Inference accelerator while launching Amazon EC2 instances.",
      "Choose the required capacity reservation while launching Amazon EC2 instances."
    ],
    "correcta": 0,
    "explicacion": "Explanation: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2placementgroup.html A cluster placement group is a logical grouping of instances within a single Availability Zone that benefit from low network latency, high network throughput.",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_2ba30720e9",
    "materia": "Design High-Performing Architectures",
    "tema": "cloudfront",
    "dificultad": 1,
    "pregunta": "A company wants to use custom domain name with CloudFront distribution. What must be configured?",
    "opciones": [
      "Route 53 CNAME record only",
      "SSL/TLS certificate in ACM and Route 53 alias",
      "CloudFront custom origin",
      "S3 bucket name matching domain <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Requirements for custom domain:",
    "explicacion_correcta": "CDN that delivers data globally with low latency by caching at 400+ edge locations.\n\nWhen to use: Static/dynamic web content acceleration, video streaming, reducing origin server load.\n\nKey differences: CloudFront = Layer 7 HTTP/HTTPS caching. Global Accelerator = Layer 4 TCP/UDP path optimization with static anycast IPs.",
    "analisis_distractores": "Caching HTTP content → CloudFront. Non-HTTP or static IPs needed → Global Accelerator. Use OAI/OAC to protect S3 origins.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "CloudFront = Sits in front of your web app to cache HTTP. | Config = Configuration compliance and history."
  },
  {
    "id": "saa_2ce6769e71",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A company wants to identify which EC2 instances are underutilized and could be downsized to reduce costs. Which AWS tool provides this recommendation?",
    "opciones": [
      "AWS Budgets",
      "AWS Cost Explorer with Right-Sizing Recommendations",
      "AWS Trusted Advisor",
      "Both B and C <details> <summary>Show Answer</summary>"
    ],
    "correcta": 3,
    "explicacion": "Explanation: - Cost Explorer provides right-sizing recommendations - Trusted Advisor also provides underutilized instance recommendations - Both analyze CloudWatch metrics (CPU, memory, network) - Both suggest smaller instance types and estimate savings - Budgets sets spending limits but doesn't analyze utilization - Using both tools provides comprehensive insights References: Cost Explorer, Trusted Advisor, Right-Sizing </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nCloudWatch does NOT monitor internal OS metrics (memory, disk space) by default. Must install CloudWatch Agent.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | CloudWatch = Watches your performance metrics."
  },
  {
    "id": "saa_2db5e6e11f",
    "materia": "general",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A startup company wants to deploy an application without managing servers, operating systems, or runtime environments. Which AWS service category best fits this requirement?",
    "opciones": [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
      "Function as a Service (FaaS) <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - PaaS services (like Elastic Beanstalk) abstract infrastructure management - Users deploy code without managing servers or OS - IaaS (like EC2) requires managing virtual machines - SaaS is fully managed applications (like Amazon Chime) - FaaS (like Lambda) is event-driven, not for full applications typically - PaaS is the best fit for deploying applications without infrastructure management References: AWS Service Categories, Cloud Computing Models </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_2db7fbc86b",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A company wants to monitor the memory utilization of its EC2 instances and trigger an alarm when memory usage exceeds 80%. Which combination of actions should the solutions architect take?",
    "opciones": [
      "Enable detailed monitoring on EC2 instances and create a CloudWatch alarm on the default memory metric",
      "Install the CloudWatch Agent on EC2 instances, configure it to send memory metrics, and create a CloudWatch alarm",
      "Use AWS Systems Manager Session Manager to view memory metrics and manually create alerts",
      "Enable CloudTrail logging and use CloudWatch Logs Insights to query memory usage <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - EC2 instances do NOT send memory metrics by default - The CloudWatch Agent must be installed to collect memory metrics - Once the agent sends metrics to CloudWatch, you can create alarms - Option A is incorrect because memory is not a default metric - Option C doesn't provide automated alerting - Option D is for auditing API calls, not performance metrics References: CloudWatch Agent, EC2 Monitoring, Custom Metrics </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nCloudWatch does NOT monitor internal OS metrics (memory, disk space) by default. Must install CloudWatch Agent.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | CloudWatch = Watches your performance metrics."
  },
  {
    "id": "saa_2dc0cc525a",
    "materia": "Design Resilient Architectures",
    "tema": "config",
    "dificultad": 3,
    "pregunta": "Which of the following is a benefit of using AWS Regions? (Choose TWO)",
    "opciones": [
      "Reduced latency for users in specific geographic areas",
      "Automatic data replication across all Regions",
      "Compliance with data sovereignty requirements",
      "Lower costs compared to using a single Region E. Automatic failover between Regions <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": ", C Explanation: - A is correct: Deploying in Regions closer to users reduces latency - C is correct: Regions enable meeting data residency/sovereignty requirements - B is incorrect: Replication is NOT automatic, must be configured - D is incorrect: Multiple Regions typically increase costs - E is incorrect: Failover is NOT automatic, requires architecture design References: AWS Regions, Global Infrastructure Benefits </details> ---",
    "explicacion_correcta": "Continuously records configuration changes of AWS resources over time into configuration histories.\n\nWhen to use: Enforce compliance by tracking configuration changes, identifying compliant/non-compliant services.\n\nKey differences: CloudTrail = API call that requested change. Config = actual configuration state resulting from change.",
    "analisis_distractores": "Config is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Config = Configuration compliance and history."
  },
  {
    "id": "saa_2dfddc316a",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A company wants to deploy a web application with automatic scaling, load balancing, and health monitoring without managing infrastructure. Which service should be used?",
    "opciones": [
      "AWS Lambda",
      "Amazon EC2 with Auto Scaling",
      "AWS Elastic Beanstalk",
      "Amazon Lightsail <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - AWS Elastic Beanstalk is PaaS (Platform as a Service) - Upload code, Beanstalk handles deployment - Automatic provisioning: EC2, ALB, Auto Scaling, RDS, monitoring - Multiple platforms: Java, .NET, PHP, Node.js, Python, Ruby, Go, Docker Elastic Beanstalk Features: - Automatic capacity provisioning - Load balancing - Auto Scaling - Health monitoring - Platform updates - Still have full control over resources (not completely abstracted) Deployment Options: - All at once: Fastest, downtime - Rolling: Partial batches, reduced capacity - Rolling with additional batch: Maintains full capacity - Immutable: New instances, safest - Blue/Green: Manual via swap URLs Beanstalk vs Others: - Lambda: Functions, not full applications - EC2 + Auto Scaling: More manual configuration - Lightsail: Simpler, less scalable References: AWS Elastic Beanstalk, PaaS </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_2e161a19ae",
    "materia": "Design Resilient Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "You have successfully set up a VPC peering connection in your account between two VPCs – VPC A and VPC B, each in a different region. When you are trying to make a request from VPC A to VPC B, the request fails. Which of the following could be a reason?",
    "opciones": [
      "Cross-region peering is not supported in AWS",
      "CIDR blocks of both VPCs might be overlapping.",
      "Routes not configured in route tables for peering connections.",
      "VPC A security group default outbound rules not allowing traffic to VPC B IP range."
    ],
    "correcta": 2,
    "explicacion": "Option A is not correct. Cross-region VPC peering is supported in AWS. Option B is not correct. When the VPC IP CIDR blocks are overlapping, you cannot create a peering connection. Question states the peering connection was successful. Option C is correct. To send private IPv4 traffic from your instance to an instance in a peer VPC, you must add a route to the route table that's associated with your subnet in which your instance resides. The route points to the CIDR block (or portion of the CIDR block) of the peer VPC in the VPC peering connection. https://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/vpc-peering-routing.h tml Option D is not correct. A security group’s default outbound rule allows all traffic to go out from the resources attached to the security group. https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.ht ml#Defaul",
    "explicacion_correcta": "Connect VPC to AWS services privately without Internet Gateway, NAT, VPN, or Direct Connect.\n\nWhen to use: Private subnets must access AWS services without traversing public internet.\n\nKey differences: Gateway Endpoints only for S3 and DynamoDB (route table prefix lists). Interface Endpoints (PrivateLink) for almost all other services (ENI with private IP).",
    "analisis_distractores": "Gateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Gateway for Big Two (S3 & DynamoDB); Interface for the Rest."
  },
  {
    "id": "saa_2e3ad75352",
    "materia": "Design Secure Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "CloudFormation Custom Resources (Similar to PT1-Q10) A CloudFormation template needs to generate a unique database password and store it in Secrets Manager. Which resource type handles this dynamic value generation?",
    "opciones": [
      "CloudFormation parameter with NoEcho",
      "CloudFormation output exported value",
      "Custom resource backed by Lambda function",
      "CloudFormation intrinsic function <details> <summary>✅ Click to reveal answer</summary> Key Concept: Custom Resources = Lambda functions for dynamic/complex CloudFormation operations </details> ---"
    ],
    "correcta": 2,
    "explicacion": "Explanation: CloudFormation Custom Resource: When to use Custom Resources: ├── Dynamic value generation (passwords, random strings) ├── Call external APIs during stack operations ├── Complex logic not supported by CloudFormation └── Cleanup of resources outside CloudFormation Flow: CloudFormation → Lambda (Custom Resource) → Generate password → Store in Secrets Manager → Return ARN to CloudFormation Example: yaml Resources: PasswordGenerator: Type: Custom::PasswordGenerator Properties: ServiceToken: !GetAtt PasswordGenLambda.Arn Length: 32 PasswordGenLambda: Type: AWS::Lambda::Function Properties: Runtime: python3.11 Handler: index.handler Code: ZipFile: | import secrets import cfnresponse def handler(event, context): password = secrets.token_urlsafe(32) cfnresponse.send(event, context, cfnresponse.SUCCESS, {'Password': password}) Why others wrong:",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_2ee27fc5ad",
    "materia": "Design Secure Architectures",
    "tema": "waf",
    "dificultad": 2,
    "pregunta": "WAF Managed Rules vs Custom Rules (Similar to PT7) An application needs protection against SQL injection and cross-site scripting attacks. Which AWS WAF configuration provides this quickest?",
    "opciones": [
      "Create custom WAF rules using regular expressions",
      "Use AWS Managed Rules for SQL injection and XSS",
      "Enable GuardDuty for web application protection",
      "Use AWS Shield Advanced <details> <summary>✅ Click to reveal answer</summary> Key Concept: AWS Managed Rules = Quick, pre-built protection (SQL injection, XSS) </details> ---"
    ],
    "correcta": 1,
    "explicacion": "Explanation: AWS WAF Managed Rules: AWS Managed Rules: ✅ ├── Pre-configured rule groups ├── Maintained by AWS security team ├── Free (included with WAF pricing) ├── Rules: │ ├── SQL injection ✅ │ ├── Cross-site scripting (XSS) ✅ │ ├── Known bad inputs │ └── IP reputation lists └── Setup: 5 minutes (add to web ACL) Custom Rules: ├── Manual regex patterns ├── Maintenance overhead ├── Testing required └── Use: Specific business logic protection Configuration: bash # Create Web ACL with managed rules aws wafv2 create-web-acl \\ --name MyWebACL \\ --scope REGIONAL \\ --default-action Allow={} \\ --rules file://rules.json # rules.json [ { \"Name\": \"AWSManagedRulesCommonRuleSet\", \"Priority\": 0, \"Statement\": { \"ManagedRuleGroupStatement\": { \"VendorName\": \"AWS\", \"Name\": \"AWSManagedRulesCommonRuleSet\" } }, \"OverrideAction\": {\"None\": {}}, \"VisibilityConfig\": {...} }, { \"Name\": \"AWSManagedRulesSQLiRuleSet\", \"Priority\": 1, \"Statement\": { \"ManagedRuleGroupStatement\": { \"VendorName\": \"AWS\", \"Name\": \"AWSManagedRulesSQLiRuleSet\" } }, \"OverrideAction\": {\"None\": {}}, \"VisibilityConfig\": {...} } ] Available Managed Rule Groups: ├── Core Rule Set (CRS) - Common attacks ├── SQL Database - SQL injection ├── Known Bad Inputs - Malformed requests ├── IP Reputation - Known malicious IPs ├── Anonymous IP - Tor, VPN, proxies ├── Linux/Windows - OS-specific exploits └── PHP/WordPress - Application-specific Why others wrong:",
    "explicacion_correcta": "Web application firewall that protects web applications from common exploits (SQL injection, XSS).\n\nWhen to use: Protecting applications behind CloudFront, ALB, or API Gateway from OWASP top 10 threats.\n\nKey differences: WAF operates at Layer 7 (HTTP/HTTPS). Shield protects against DDoS (Layer 3/4). GuardDuty detects threats intelligently.",
    "analisis_distractores": "WAF for app-level attacks (SQLi, XSS). Shield for DDoS. Don't confuse them.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "WAF = Web Application Filter (Layer 7 rules). | Config = Configuration compliance and history."
  },
  {
    "id": "saa_2f2f68e273",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "cloudtrail",
    "dificultad": 2,
    "pregunta": "A company needs to query 5 years of CloudTrail logs to investigate security incidents. What is the MOST efficient solution?",
    "opciones": [
      "Download all logs from S3 and use local tools",
      "Use Amazon Athena to query CloudTrail logs in S3",
      "Use CloudTrail Lake to query logs with SQL",
      "Import logs into Elasticsearch <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - CloudTrail Lake is purpose-built for querying CloudTrail logs - Uses SQL to query events - Can retain events for up to 7 years - Aggregates logs from multiple accounts/regions - Athena could work but CloudTrail Lake is optimized for this use case - Option A is inefficient and not scalable - Elasticsearch adds unnecessary complexity References: CloudTrail Lake, Log Query and Analysis </details> --- ## Summary ### Key Concepts Tested:",
    "explicacion_correcta": "Serverless interactive query service analyzing data directly in S3 using standard SQL.\n\nWhen to use: Ad-hoc data analysis, querying VPC flow logs, CloudTrail logs, ELB logs from S3 without ETL.\n\nKey differences: Athena = serverless, per query/byte scanned, runs against S3. Redshift = provisioned data warehouse, load data into clusters.",
    "analisis_distractores": "Athena costs $5/TB scanned. Optimize by partitioning data and using Parquet/ORC columnar format.\n\nManagement events enabled by default (90 days free). Data events (S3 uploads, Lambda invocations) NOT enabled by default, extra cost. 15-minute delay.",
    "tip": "Athena = SQL queries on S3, serverless, pay per byte scanned. | CloudTrail = Leaves audit Trail of API activity (Who did what)."
  },
  {
    "id": "saa_2f396475b5",
    "materia": "Design Secure Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "During a database migration, AWS DMS replication instance is in the same VPC as the target RDS database but cannot connect. What is the MOST likely cause?",
    "opciones": [
      "The replication instance is too small",
      "The target RDS security group doesn't allow inbound traffic from the replication instance",
      "DMS doesn't support RDS as a target",
      "SSL must be disabled on RDS <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Security groups must allow traffic between DMS and RDS - Common misconfiguration during DMS setup - Need to add inbound rule to RDS security group - Instance size doesn't affect connectivity - DMS fully supports RDS as target - SSL is optional, not a blocker References: AWS DMS, VPC Security Groups </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Gateway for Big Two (S3 & DynamoDB); Interface for the Rest."
  },
  {
    "id": "saa_2f78a22d01",
    "materia": "Design High-Performing Architectures",
    "tema": "ec2",
    "dificultad": 3,
    "pregunta": "A company has a dynamic web application hosted on two Amazon EC2 instances. The company has its own SSL certificate, which is on each instance to perform SSL termination. There has been an increase in traffic recently, and the operations team determined that SSL encryption and decryption is causing the compute capacity of the web servers to reach their maximum limit. What should a solutions architect do to increase the application's performance?",
    "opciones": [
      "Create a new SSL certificate using AWS Certificate Manager (ACM) install the ACM certificate on each instance.",
      "Create an Amazon S3 bucket Migrate the SSL certificate to the S3 bucket. Configure the EC2 instances to reference the bucket for SSL termination.",
      "Create another EC2 instance as a proxy server Migrate the SSL certificate to the new instance and configure it to direct connections to the existing EC2 instances",
      "Import the SSL certificate into AWS Certificate Manager (ACM). Create an Application Load Balancer with an HTTPS listener that uses the SSL certificate from ACM."
    ],
    "correcta": 3,
    "explicacion": "Explanation: https://aws.amazon.com/certificate-manager/: \"With AWS Certificate Manager, you can quickly request a certificate, deploy it on ACMintegrated AWS resources, such as Elastic Load Balancers, Amazon CloudFront distributions, and APIs on API Gateway, and let AWS Certificate Manager handle certificate renewals. It also enables you to create private certificates for your internal resources and manage the certificate lifecycle centrally.\"",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nCaching HTTP content → CloudFront. Non-HTTP or static IPs needed → Global Accelerator. Use OAI/OAC to protect S3 origins.\n\nCaching HTTP content → CloudFront. Non-HTTP or static IPs needed → Global Accelerator. Use OAI/OAC to protect S3 origins.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | CloudFront = Sits in front of your web app to cache HTTP."
  },
  {
    "id": "saa_2fe5c2f930",
    "materia": "Design Resilient Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "Which pillar of the AWS Well-Architected Framework focuses on the ability to recover from failures and dynamically acquire computing resources to meet demand?",
    "opciones": [
      "Operational Excellence",
      "Security",
      "Reliability",
      "Performance Efficiency <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Reliability pillar focuses on recovery from failures and maintaining workload functionality - Key aspects: fault tolerance, disaster recovery, self-healing - Operational Excellence focuses on operations and monitoring - Security focuses on protecting information and systems - Performance Efficiency focuses on using resources efficiently References: AWS Well-Architected Framework - Reliability Pillar </details> ---"
  },
  {
    "id": "saa_317cc7e708",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company needs to store CloudWatch Logs for 10 years to meet compliance requirements. What is the MOST cost-effective approach?",
    "opciones": [
      "Keep logs in CloudWatch Logs with 10-year retention",
      "Export logs to S3, then transition to S3 Glacier Deep Archive",
      "Export logs to S3, then use S3 Intelligent-Tiering",
      "Stream logs to Kinesis Data Firehose and store in Redshift <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - CloudWatch Logs retention is expensive for long-term storage - Export to S3 for cost-effective long-term storage - S3 Glacier Deep Archive is cheapest for archival ($0.00099 per GB/month) - S3 Intelligent-Tiering is more expensive than Glacier Deep Archive - Redshift is for analytics, not cost-effective archival References: CloudWatch Logs Export, S3 Glacier Deep Archive, Cost Optimization </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nRedshift Spectrum allows querying S3 data directly without loading. Redshift is NOT for OLTP.\n\nCannot upload directly to Glacier via console. Must use S3 Lifecycle policy or CLI/SDK. Data must pass through S3 first.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Redshift = Heavy OLAP data warehouse, columnar storage, complex BI queries."
  },
  {
    "id": "saa_3341419e63",
    "materia": "general",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A SaaS company needs to automate the transfer of customer data from Salesforce to Amazon S3 for analytics. The solution must be fully managed and require minimal code. Which AWS service should be used?",
    "opciones": [
      "Amazon AppFlow",
      "AWS Glue",
      "Amazon Kinesis Data Firehose",
      "AWS DataSync <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - Amazon AppFlow is a fully managed integration service - Automates data transfer between SaaS apps (e.g., Salesforce) and AWS - No code required, supports scheduling and transformation - Glue is for ETL, not direct SaaS integration - Firehose is for streaming, not SaaS connectors - DataSync is for file transfers, not SaaS data References: Amazon AppFlow, SaaS Integration </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCommon pattern: optimize S3 data for Athena → use Glue to transform to Parquet/ORC columnar format.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Glue = The glue that sticks raw data to analytics tools."
  },
  {
    "id": "saa_33d340f225",
    "materia": "Design High-Performing Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A data engineering team needs to ingest streaming data from Apache Kafka into AWS for analytics and storage. Which AWS service provides a fully managed, highly available Kafka environment?",
    "opciones": [
      "Amazon MSK",
      "Amazon Kinesis Data Streams",
      "Amazon SQS",
      "AWS Glue Streaming <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - Amazon MSK (Managed Streaming for Apache Kafka) provides a fully managed Kafka service - Handles provisioning, patching, and scaling - Integrates with Kinesis, Lambda, S3, Redshift - Kinesis is a separate streaming service, not Kafka-compatible - SQS is for message queuing, not streaming - Glue Streaming is for ETL, not Kafka management References: Amazon MSK, Streaming Data </details> --- ## Summary ### Key Concepts Tested:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCommon pattern: optimize S3 data for Athena → use Glue to transform to Parquet/ORC columnar format.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Glue = The glue that sticks raw data to analytics tools."
  },
  {
    "id": "saa_3404eaa896",
    "materia": "Design Secure Architectures",
    "tema": "kms",
    "dificultad": 2,
    "pregunta": "A company wants to implement defense-in-depth security for their web application. Which combination of services should be used?",
    "opciones": [
      "Security Groups only",
      "WAF + Shield + Security Groups + NACLs + KMS encryption",
      "IAM policies and Security Groups",
      "CloudFront with HTTPS only <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Defense-in-depth requires multiple security layers - WAF: Application layer protection (OWASP Top 10) - Shield: DDoS protection - Security Groups: Instance-level firewall - NACLs: Subnet-level firewall - KMS: Data encryption - Layered approach provides comprehensive security - Single layer security is insufficient References: Defense in Depth, Security Patterns </details> ---",
    "explicacion_correcta": "Managed service to create, store, and control cryptographic keys for encrypting data at rest and in transit.\n\nWhen to use: Encrypting data in S3, RDS, EBS, DynamoDB. Centralized auditing of key usage via CloudTrail.\n\nKey differences: Handles symmetric/asymmetric/HMAC keys up to 4KB; larger data uses envelope encryption. CloudHSM is single-tenant FIPS 140-2 Level 3.",
    "analisis_distractores": "Cannot enable encryption on existing RDS/EBS directly. Must snapshot → copy with encryption → restore.\n\nWAF for app-level attacks (SQLi, XSS). Shield for DDoS. Don't confuse them.",
    "tip": "KMS = Keeps Master Secrets safe. | WAF = Web Application Filter (Layer 7 rules)."
  },
  {
    "id": "saa_361ed3c2df",
    "materia": "Design Secure Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "A company needs to secure Redis commands including MULTI EXEC commands and require users to enter a password. What should be implemented? Options:",
    "opciones": [
      "Generate an IAM authentication token using AWS credentials",
      "Set up a Redis replication group and enable AtRestEncryptionEnabled parameter",
      "Authenticate users using Redis AUTH by creating a Redis Cluster with --transit-encryption-enabled and --auth-token parameters",
      "Enable in-transit encryption for Redis replication groups"
    ],
    "correcta": 2,
    "explicacion": "Explanation: Redis AUTH command improves data security by requiring users to enter a password before executing Redis commands. Both transit encryption and auth token are needed for complete security. ### VPC Private Connectivity",
    "explicacion_correcta": "Connect VPC to AWS services privately without Internet Gateway, NAT, VPN, or Direct Connect.\n\nWhen to use: Private subnets must access AWS services without traversing public internet.\n\nKey differences: Gateway Endpoints only for S3 and DynamoDB (route table prefix lists). Interface Endpoints (PrivateLink) for almost all other services (ENI with private IP).",
    "analisis_distractores": "Gateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Gateway for Big Two (S3 & DynamoDB); Interface for the Rest."
  },
  {
    "id": "saa_3647c557b5",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A solutions architect needs to run a script on all EC2 instances fleet-wide without SSH access. The script should install security updates. Which service provides this capability?",
    "opciones": [
      "AWS Systems Manager Run Command",
      "AWS Lambda with EC2 API",
      "Amazon CloudWatch Events",
      "AWS Config Remediation <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - Run Command executes commands on managed instances remotely - No SSH required, uses IAM permissions - Provides rate control and error handling - Command history recorded in CloudTrail - Lambda could invoke Run Command but isn't the direct solution - CloudWatch Events can trigger Run Command but isn't the execution service - Config Remediation uses SSM Automation Documents References: Systems Manager Run Command, Fleet Management </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_379726c002",
    "materia": "Design High-Performing Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "S3 Transfer Acceleration vs CloudFront (Similar to PT3) A global application needs to upload large files (5 GB) to S3 from users worldwide with minimal latency. Which feature optimizes uploads?",
    "opciones": [
      "S3 Transfer Acceleration",
      "CloudFront with S3 origin",
      "S3 Multipart Upload",
      "S3 Cross-Region Replication <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: S3 Transfer Acceleration: Without Transfer Acceleration: User (Sydney) → Direct S3 (us-east-1) → 250ms+ latency With Transfer Acceleration: ✅ User (Sydney) → CloudFront Edge (Sydney) → AWS Network → S3 (us-east-1) └── 50-500% faster uploads via edge locations How It Works:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCaching HTTP content → CloudFront. Non-HTTP or static IPs needed → Global Accelerator. Use OAI/OAC to protect S3 origins.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | CloudFront = Sits in front of your web app to cache HTTP."
  },
  {
    "id": "saa_385b91099d",
    "materia": "Design High-Performing Architectures",
    "tema": "cloudfront",
    "dificultad": 2,
    "pregunta": "A solutions architect needs to ensure that users in Asia experience low latency when accessing static web content hosted in us-east-1. What should they use?",
    "opciones": [
      "Deploy the application in ap-southeast-1 region",
      "Use Amazon CloudFront",
      "Create a VPC in Asia",
      "Use Route 53 geoproximity routing <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: CloudFront uses Edge Locations globally to cache content closer to users, reducing latency. This is more cost-effective than deploying in multiple regions (A) for static content. </details> --- ## 🔗 Additional Resources ### AWS Official Documentation - [AWS Global Infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/) - [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/) - [Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/) - [AWS Management Console](https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/getting-started.html) ### Hands-On Labs",
    "explicacion_correcta": "CDN that delivers data globally with low latency by caching at 400+ edge locations.\n\nWhen to use: Static/dynamic web content acceleration, video streaming, reducing origin server load.\n\nKey differences: CloudFront = Layer 7 HTTP/HTTPS caching. Global Accelerator = Layer 4 TCP/UDP path optimization with static anycast IPs.",
    "analisis_distractores": "Caching HTTP content → CloudFront. Non-HTTP or static IPs needed → Global Accelerator. Use OAI/OAC to protect S3 origins.",
    "tip": "CloudFront = Sits in front of your web app to cache HTTP."
  },
  {
    "id": "saa_38ccd927fd",
    "materia": "general",
    "tema": "sqs",
    "dificultad": 1,
    "pregunta": "How can you send a single message to multiple SQS queues?",
    "opciones": [
      "Use SQS fanout",
      "Use SNS topic with multiple SQS subscribers",
      "Use Lambda to forward messages",
      "Not possible"
    ],
    "correcta": 1,
    "explicacion": "",
    "explicacion_correcta": "Fully managed message queuing service for decoupling microservices and distributed systems.\n\nWhen to use: Async processing, background tasks, buffering requests to absorb traffic spikes.\n\nKey differences: SQS = pull-based point-to-point. SNS = push-based pub/sub broadcast. Kinesis = real-time streaming with replay.",
    "analisis_distractores": "Standard = unlimited throughput, at-least-once (duplicates possible). FIFO = exactly-once, strict ordering, 300 msgs/sec (3000 with batching).",
    "tip": "SQS = Send Queued Stuff (pull-based, 1-to-1 decoupling)."
  },
  {
    "id": "saa_38dc7b8d9b",
    "materia": "Design Resilient Architectures",
    "tema": "aws-architect",
    "dificultad": 1,
    "pregunta": "What is the primary purpose of Availability Zones within an AWS Region?",
    "opciones": [
      "To provide different pricing tiers",
      "To enable fault tolerance and high availability",
      "To support different AWS services",
      "To reduce data transfer costs <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Availability Zones are isolated locations within a Region - Primary purpose: fault tolerance and high availability - Each AZ has independent power, cooling, networking - Deploying across AZs protects against single point of failure - Not for pricing, service availability, or cost reduction - Core purpose: resilience and availability References: AWS Availability Zones, High Availability Architecture </details> ---"
  },
  {
    "id": "saa_39648b5c4d",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "A company wants to estimate the cost of running their planned AWS infrastructure before deployment. Which AWS tool should they use?",
    "opciones": [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Pricing Calculator",
      "AWS Cost and Usage Report <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - AWS Pricing Calculator estimates costs for planned architectures - Cost Explorer analyzes existing/historical costs - AWS Budgets sets budget alerts - Cost and Usage Report provides detailed billing data - For estimation BEFORE deployment, Pricing Calculator is correct References: AWS Pricing Tools, Cost Management </details> ---"
  },
  {
    "id": "saa_397ee4ac20",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company needs to grant temporary access to external auditors to review CloudTrail logs in S3. The access should expire after 7 days. What is the BEST solution?",
    "opciones": [
      "Create IAM users for auditors and delete them after 7 days",
      "Create IAM roles and provide auditors with temporary security credentials using AWS STS",
      "Share the root account credentials for 7 days",
      "Create an S3 pre-signed URL valid for 7 days <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - AWS STS (Security Token Service) generates temporary credentials - IAM roles can be assumed by external users via federation - Credentials automatically expire based on session duration - Option A: Requires manual deletion, operational overhead - Option C: Never share root credentials - Option D: Pre-signed URLs work but IAM roles are more comprehensive - Best for temporary access: STS with IAM roles References: AWS STS, Temporary Security Credentials, Cross-Account Access </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.\n\nManagement events enabled by default (90 days free). Data events (S3 uploads, Lambda invocations) NOT enabled by default, extra cost. 15-minute delay.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_3abc2a070c",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A solutions architect needs to reduce S3 storage costs for 500 TB of log data. Logs older than 30 days are rarely accessed but must be retained for 7 years for compliance. What should be done?",
    "opciones": [
      "Keep all data in S3 Standard",
      "Use S3 lifecycle policies to transition data to S3 Glacier Deep Archive after 30 days",
      "Delete logs after 30 days",
      "Use S3 Intelligent-Tiering for all data <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - S3 Glacier Deep Archive is cheapest storage class ($0.00099/GB/month) - Lifecycle policies automatically transition objects - Meets 7-year retention requirement - Transition after 30 days when access becomes rare - S3 Standard costs $0.023/GB/month (23x more expensive) - Deleting violates compliance - Intelligent-Tiering costs more than Glacier Deep Archive Savings: 500 TB × ($0.023 - $0.00099) × 12 months = ~$132,000/year References: S3 Lifecycle Policies, S3 Glacier Deep Archive </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCannot upload directly to Glacier via console. Must use S3 Lifecycle policy or CLI/SDK. Data must pass through S3 first.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Glacier = Frozen data; cheap to store but takes time to thaw."
  },
  {
    "id": "saa_3b147b3849",
    "materia": "general",
    "tema": "aws-architect",
    "dificultad": 1,
    "pregunta": "Which service provides exactly-once message processing with strict ordering?",
    "opciones": [
      "SQS Standard",
      "SQS FIFO",
      "SNS Standard",
      "SNS FIFO"
    ],
    "correcta": 1,
    "explicacion": ""
  },
  {
    "id": "saa_3b334dc30f",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 1,
    "pregunta": "Never expose encryption keys outside AWS Which KMS key types should you use?",
    "opciones": [
      "Symmetric keys for both use cases",
      "Asymmetric keys for both use cases",
      "Symmetric key for S3 encryption, asymmetric key for digital signing",
      "Asymmetric key for S3 encryption, symmetric key for digital signing"
    ],
    "correcta": 2,
    "explicacion": "Explanation: Symmetric Keys (256-bit AES): - Same key for encryption and decryption - Never leaves AWS KMS unencrypted - Integrated with AWS services (S3, EBS, RDS, DynamoDB) - Fastest performance Use Cases: - ✅ Data at rest encryption (S3, EBS) - ✅ Database encryption (RDS, DynamoDB) - ✅ Secrets Manager, Parameter Store API Operations: python # Encrypt response = kms.encrypt( KeyId='alias/my-symmetric-key', Plaintext=b'sensitive data' ) # Decrypt response = kms.decrypt( CiphertextBlob=encrypted_data ) Asymmetric Keys (RSA or ECC): - Public key (can be exported) + Private key (stays in KMS) - Different operations: Encrypt/decrypt, Sign/verify Use Cases: - ✅ Digital signatures (code signing, JWT tokens) - ✅ Public key encryption (offline encryption) - ✅ TLS certificate generation API Operations: python # Sign response = kms.sign( KeyId='alias/my-asymmetric-key', Message=b'software package hash', SigningAlgorithm='RSASSA_PSS_SHA_256' ) # Get public key (for verification) response = kms.get_public_key( KeyId='alias/my-asymmetric-key' ) # Public key can be distributed to verify signatures Quick Decision Tree: - Need to encrypt/decrypt in AWS? → Symmetric - Need to sign/verify? → Asymmetric - Need public key distribution? → Asymmetric Exam Trap: Digital signatures ALWAYS require asymmetric keys --- ## Domain 4: Design Cost-Optimized Architectures",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nMulti-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | RDS: Relational, Replicas for Reads, Multi-AZ for Resilience."
  },
  {
    "id": "saa_3cc7719aba",
    "materia": "Design Secure Architectures",
    "tema": "iam",
    "dificultad": 2,
    "pregunta": "A security team wants to prevent all member accounts in their AWS Organization from creating resources in any region except us-east-1 and eu-west-1. How should this be implemented?",
    "opciones": [
      "Create IAM policies in each account restricting regions",
      "Use AWS Config rules to detect non-compliant resources",
      "Create a Service Control Policy (SCP) denying actions in other regions",
      "Use AWS Firewall Manager to block region access <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Service Control Policies (SCPs) provide centralized, preventive controls - SCPs can restrict which AWS regions can be used - Applied at the Organization, OU, or account level - Cannot be overridden by users in member accounts - IAM policies (A) can be changed by account administrators - Config rules (B) are detective, not preventive - Firewall Manager (D) is for security group/WAF rules, not region restrictions SCP Example: json { \"Version\": \"2012-10-17\", \"Statement\": [{ \"Effect\": \"Deny\", \"Action\": \"*\", \"Resource\": \"*\", \"Condition\": { \"StringNotEquals\": { \"aws:RequestedRegion\": [\"us-east-1\", \"eu-west-1\"] } } }] } References: Service Control Policies, AWS Organizations, Region Restrictions </details> ---",
    "explicacion_correcta": "Fully managed service to securely control access using users, groups, roles, and identity-based policies.\n\nWhen to use: Implement least privilege, manage MFA, define permissions for humans/apps/services interacting with AWS.\n\nKey differences: IAM manages permissions within one AWS account. Organizations (SCPs) manages boundaries across accounts. Cognito handles app end-user auth.",
    "analisis_distractores": "Explicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.\n\nSCPs don't grant permissions, they only restrict. Root user in member accounts is blocked by default with full deny SCP.\n\nSCPs don't grant permissions, they only restrict. Root user in member accounts is blocked by default with full deny SCP.",
    "tip": "IAM = I Am Managing who can do what. | Organizations = SCPs restrict, never grant."
  },
  {
    "id": "saa_3d0d0e6d8c",
    "materia": "Design Resilient Architectures",
    "tema": "dynamodb",
    "dificultad": 2,
    "pregunta": "A global application requires DynamoDB tables to be replicated across multiple AWS regions with low-latency local reads and writes. Which feature should be used?",
    "opciones": [
      "DynamoDB Streams",
      "DynamoDB Global Tables",
      "DynamoDB Cross-Region Replication",
      "AWS Database Migration Service <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - DynamoDB Global Tables: - Multi-region, multi-active replication - Bi-directional replication - Local read/write in each region - Sub-second latency - Conflict resolution (last writer wins) Global Tables Requirements: - DynamoDB Streams enabled - Same table name across regions - Same primary key structure Use Cases: - Global applications - Disaster recovery - Multi-region high availability - Reduce latency for global users References: DynamoDB Global Tables, Multi-Region </details> ---",
    "explicacion_correcta": "Fully managed serverless NoSQL key-value/document database with single-digit ms latency.\n\nWhen to use: Highly scalable web/mobile backends, IoT, gaming leaderboards, shopping carts.\n\nKey differences: Schema-less vs RDS/Aurora (relational). Horizontal scaling without managing instances.",
    "analisis_distractores": "Reduce latency to microseconds → DAX (DynamoDB Accelerator). Active-active multi-region → Global Tables. Unpredictable workloads → On-Demand capacity.",
    "tip": "Dynamo = Dynamic infinite scaling for NoSQL."
  },
  {
    "id": "saa_3d5660e05a",
    "materia": "Design Resilient Architectures",
    "tema": "route-53",
    "dificultad": 1,
    "pregunta": "Which Route 53 routing policy would you use for active-passive failover?",
    "opciones": [
      "Simple",
      "Weighted",
      "Failover",
      "Latency"
    ],
    "correcta": 2,
    "explicacion": "",
    "explicacion_correcta": "Highly available, scalable cloud DNS for domain registration, routing, and health checking.\n\nWhen to use: Intelligent global routing based on latency, geolocation, or failover (active-passive DR).\n\nKey differences: ALIAS records map to AWS resources and work at zone apex (unlike CNAME). Simple, weighted, latency, failover, geolocation, geoproximity, multivalue routing policies.",
    "analisis_distractores": "ALIAS vs CNAME: ALIAS is free, works at apex, resolves to IP. CNAME maps name to name, can't be at apex.",
    "tip": "Route 53 = DNS + ALIAS = Route 53's superpower."
  },
  {
    "id": "saa_3dbff6f673",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "ec2",
    "dificultad": 1,
    "pregunta": "A company needs to run Docker containers without managing EC2 instances. Which service should be used?",
    "opciones": [
      "Amazon ECS with EC2 launch type",
      "Amazon ECS with Fargate launch type",
      "Amazon EKS",
      "AWS Elastic Beanstalk <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - AWS Fargate is serverless container platform - No EC2 instance management required - Pay for vCPU and memory resources used - Works with both ECS and EKS Container Service Options: | Service | Description | Management | |---------|-------------|------------| | ECS + EC2 | Container orchestration on EC2 | Manage instances | | ECS + Fargate | Serverless containers | No instance management | | EKS + EC2 | Kubernetes on EC2 | Manage instances + K8s | | EKS + Fargate | Serverless Kubernetes | No instance management | Fargate Benefits: - No instance provisioning/scaling - No patching/securing instances - Pay per task - Simpler operations When to use Fargate vs EC2: - Fargate: Simplicity, less operational overhead - EC2: Need specific instance types, GPU, cost optimization for sustained workloads References: AWS Fargate, Amazon ECS </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nIf scenario mentions Kubernetes specifically, answer is EKS. If it says containers but no Kubernetes preference, ECS may be simpler.\n\nIf prompt mentions minimizing operational overhead, serverless, or managing infrastructure → Fargate. If deep OS-level access needed → EC2 mode.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | EKS = Elastic Kubernetes Service; Kubernetes on AWS."
  },
  {
    "id": "saa_3dc78010b6",
    "materia": "Design High-Performing Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "An application requires sub-millisecond latency for database queries. The data is accessed in a key-value pattern. Which database solution should be used?",
    "opciones": [
      "Amazon RDS with read replicas",
      "DynamoDB with DAX (DynamoDB Accelerator)",
      "Amazon Aurora",
      "Amazon Redshift <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - DAX provides microsecond latency for DynamoDB - In-memory cache specifically for DynamoDB - Key-value access pattern is perfect for DynamoDB - Meets sub-millisecond requirement - RDS/Aurora have millisecond latency - Redshift is for analytics, not operational workloads References: DynamoDB DAX, Low Latency </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nAurora storage auto-scales in 10GB increments up to 128TB. No need for read replicas for HA (6 copies already).\n\nRedshift Spectrum allows querying S3 data directly without loading. Redshift is NOT for OLTP.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Aurora = 6 copies, 3 AZs, self-healing, no manual HA setup."
  },
  {
    "id": "saa_3e511a4304",
    "materia": "Design Secure Architectures",
    "tema": "iam",
    "dificultad": 2,
    "pregunta": "A company has multiple development teams that need separate AWS accounts for isolation. They want consolidated billing. What should they implement?",
    "opciones": [
      "AWS Control Tower",
      "AWS Organizations with consolidated billing",
      "Multiple IAM users in one account",
      "AWS Resource Groups <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - AWS Organizations provides consolidated billing across multiple accounts - Each team gets isolated account with separate resources - Single bill for entire organization - Control Tower helps set up Organizations but Organizations is the direct answer - IAM users don't provide account-level isolation - Resource Groups organize resources, not billing References: AWS Organizations, Consolidated Billing </details> ---",
    "explicacion_correcta": "Fully managed service to securely control access using users, groups, roles, and identity-based policies.\n\nWhen to use: Implement least privilege, manage MFA, define permissions for humans/apps/services interacting with AWS.\n\nKey differences: IAM manages permissions within one AWS account. Organizations (SCPs) manages boundaries across accounts. Cognito handles app end-user auth.",
    "analisis_distractores": "Explicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.\n\nSCPs don't grant permissions, they only restrict. Root user in member accounts is blocked by default with full deny SCP.\n\nSCPs don't grant permissions, they only restrict. Root user in member accounts is blocked by default with full deny SCP.",
    "tip": "IAM = I Am Managing who can do what. | Organizations = SCPs restrict, never grant."
  },
  {
    "id": "saa_3f81c02d1f",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "ecs",
    "dificultad": 2,
    "pregunta": "A company needs to deploy containerized workloads to on-premises servers and manage them using AWS services. Which solution should they use?",
    "opciones": [
      "Amazon ECS Anywhere",
      "Amazon EKS Anywhere",
      "AWS Outposts",
      "AWS Fargate <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - ECS Anywhere extends ECS to on-premises servers - Centralized management from AWS Console - EKS Anywhere is for Kubernetes, not ECS - Outposts is for running AWS infrastructure on-premises - Fargate is serverless containers in AWS only References: Amazon ECS Anywhere, Hybrid Deployments </details> ---",
    "explicacion_correcta": "Managed Kubernetes service for running Kubernetes on AWS without installing the control plane.\n\nWhen to use: Containerized applications using Kubernetes orchestration, multi-cloud portability.\n\nKey differences: EKS uses Kubernetes; ECS uses AWS-native orchestration. Fargate removes server management for both.",
    "analisis_distractores": "If scenario mentions Kubernetes specifically, answer is EKS. If it says containers but no Kubernetes preference, ECS may be simpler.\n\nIf prompt mentions minimizing operational overhead, serverless, or managing infrastructure → Fargate. If deep OS-level access needed → EC2 mode.\n\nMinimize operational overhead → Fargate launch type. Need to manage hosts, use RIs → EC2 mode.",
    "tip": "EKS = Elastic Kubernetes Service; Kubernetes on AWS. | Fargate = Forget managing servers; just run containers."
  },
  {
    "id": "saa_40b0d5ccc4",
    "materia": "general",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company needs to ensure S3 objects are never deleted or overwritten for regulatory compliance. Which feature should be used?",
    "opciones": [
      "S3 Versioning",
      "S3 Object Lock",
      "MFA Delete",
      "S3 Lifecycle Policies <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - S3 Object Lock provides WORM (Write Once Read Many) - Prevents deletion/overwrite for specified retention period - Compliance and governance modes Object Lock Modes: - Compliance: Can't be overwritten/deleted by anyone (even root) - Governance: Users with special permissions can override - Legal Hold: Indefinite protection, manually removed Object Lock vs Versioning: - Versioning: Protects but versions can be deleted - Object Lock: Enforces retention, truly immutable Requirements: - Versioning must be enabled - Set at bucket creation - Retention period or legal hold Use Cases: - Financial records - Healthcare data (HIPAA) - Legal documents - Regulatory compliance References: S3 Object Lock, WORM Compliance </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nMulti-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | RDS: Relational, Replicas for Reads, Multi-AZ for Resilience."
  },
  {
    "id": "saa_4137eea2ae",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "AWS Compute Optimizer Recommendations (Similar to PT4) An organization wants to right-size EC2 instances based on actual utilization data. Which AWS service analyzes usage and recommends optimal instance types?",
    "opciones": [
      "AWS Cost Explorer with recommendations",
      "AWS Compute Optimizer",
      "AWS Trusted Advisor",
      "CloudWatch metrics manual analysis <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: AWS Compute Optimizer: Purpose: ML-driven rightsizing recommendations ✅ ├── Analyzes: 14 days of CloudWatch metrics ├── Recommendations for: │ ├── EC2 instances ✅ │ ├── Auto Scaling groups │ ├── EBS volumes │ └── Lambda functions ├── Metrics: CPU, memory, network, disk └── Output: Recommended instance type + projected savings Features: ├── Historical usage patterns ├── Performance risk assessment ├── Projected cost savings ├── Export to S3 for analysis └── Free service (no charge) Example Recommendation: Current: ├── Instance: m5.2xlarge (8 vCPU, 32 GB RAM) ├── Utilization: 10% CPU, 15% memory (over-provisioned) └── Cost: $280/month Recommendation: ✅ ├── Instance: m5.large (2 vCPU, 8 GB RAM) ├── Performance risk: Low ├── Projected cost: $70/month └── Savings: $210/month (75% reduction) Comparison: Compute Optimizer: ✅ ├── ML-based recommendations ├── Analyzes actual usage patterns ├── Multiple resource types ├── Free └── Use: Right-sizing, cost optimization ✅ Cost Explorer: ├── Shows spending trends ├── Basic instance recommendations └── Use: Cost visibility, budgeting Trusted Advisor: ├── Best practice checks ├── Limited EC2 recommendations └── Use: Broad AWS guidance CloudWatch: ├── Provides metrics ├── Manual analysis required ❌ └── Use: Monitoring, not recommendations Enable Compute Optimizer: bash # Opt in to Compute Optimizer aws compute-optimizer update-enrollment-status \\ --status Active # Get recommendations aws compute-optimizer get-ec2-instance-recommendations \\ --instance-arns arn:aws:ec2:us-east-1:123456789012:instance/i-1234567890abcdef0 # Export recommendations to S3 aws compute-optimizer export-ec2-instance-recommendations \\ --s3-destination-config '{ \"bucket\": \"my-recommendations-bucket\", \"keyPrefix\": \"compute-optimizer/\", \"format\": \"Csv\" }' Key Concept: Compute Optimizer = ML-driven rightsizing recommendations (free, automated) </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_4242900513",
    "materia": "Design Secure Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A company wants to ensure EC2 instances can only launch in approved VPCs and subnets. How can this be enforced at the organization level?",
    "opciones": [
      "IAM policy condition checking VPC ID",
      "Service Control Policy (SCP) in AWS Organizations",
      "AWS Config rule",
      "Security Group rules <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Service Control Policy (SCP) provides organization-wide preventive control - Can restrict actions based on VPC/subnet - Cannot be bypassed by member accounts - Enforced before IAM policies SCP Example - Restrict to Approved VPCs: json { \"Version\": \"2012-10-17\", \"Statement\": [ { \"Sid\": \"RequireApprovedVPC\", \"Effect\": \"Deny\", \"Action\": \"ec2:RunInstances\", \"Resource\": \"arn:aws:ec2:*:*:subnet/*\", \"Condition\": { \"StringNotEquals\": { \"ec2:Vpc\": [ \"arn:aws:ec2:us-east-1:123456789012:vpc/vpc-approved1\", \"arn:aws:ec2:us-west-2:123456789012:vpc/vpc-approved2\" ] } } } ] } SCP Example - Restrict to Approved Subnets: json { \"Version\": \"2012-10-17\", \"Statement\": [ { \"Sid\": \"RequireApprovedSubnets\", \"Effect\": \"Deny\", \"Action\": \"ec2:RunInstances\", \"Resource\": \"arn:aws:ec2:*:*:subnet/*\", \"Condition\": { \"StringNotLike\": { \"ec2:Subnet\": [ \"arn:aws:ec2:*:*:subnet/subnet-12345678\", \"arn:aws:ec2:*:*:subnet/subnet-87654321\" ] } } } ] } Useful EC2 Condition Keys: | Condition Key | Use Case | |---------------|----------| | ec2:Vpc | Restrict to specific VPCs | | ec2:Subnet | Restrict to specific subnets | | ec2:InstanceType | Limit instance types | | ec2:Region | Region restrictions | | ec2:Tenancy | Dedicated vs default | | ec2:RootDeviceType | EBS vs instance store | Multi-Layer Enforcement: Layer 1 - SCP (Preventive): json { \"Effect\": \"Deny\", \"Action\": \"ec2:RunInstances\", \"Resource\": \"*\", \"Condition\": { \"StringNotEquals\": { \"ec2:Vpc\": \"arn:aws:ec2:*:*:vpc/vpc-approved*\" } } } Layer 2 - IAM Policy (Preventive): json { \"Effect\": \"Allow\", \"Action\": \"ec2:RunInstances\", \"Resource\": \"*\", \"Condition\": { \"StringEquals\": { \"ec2:Subnet\": [ \"arn:aws:ec2:*:*:subnet/subnet-prod1\", \"arn:aws:ec2:*:*:subnet/subnet-prod2\" ] } } } Layer 3 - Config (Detective): json { \"ConfigRuleName\": \"instances-in-approved-subnets\", \"Source\": { \"Owner\": \"CUSTOM_LAMBDA\", \"SourceIdentifier\": \"arn:aws:lambda:...\" } } Why SCP is Best:",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | EBS = Elastic Block Store; one AZ, one instance, persistent."
  },
  {
    "id": "saa_4276c3d402",
    "materia": "Design High-Performing Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "Redshift AQUA Performance (Similar to PT1-Q48) A data analytics team has a 100 TB Redshift cluster with slow query performance on large scans. Which feature accelerates queries by pushing computation closer to storage?",
    "opciones": [
      "Redshift Spectrum",
      "AQUA (Advanced Query Accelerator)",
      "Concurrency Scaling",
      "Short Query Acceleration <details> <summary>✅ Click to reveal answer</summary> Key Concept: AQUA = Push query operations to storage layer (10x scan performance) </details> ---"
    ],
    "correcta": 1,
    "explicacion": "Explanation: AQUA (Advanced Query Accelerator): Without AQUA: S3 (Redshift Managed Storage) → Network → Compute Nodes → Query Result └── All data travels to compute With AQUA: ✅ S3 → AQUA Cache (near storage) → Pre-filtered data → Compute → Result └── 10x faster for scan-heavy queries How AQUA Works: Query: SELECT * FROM sales WHERE year = 2025 Traditional Redshift: ├── Read 100 TB from S3 ├── Transfer to compute nodes ├── Filter WHERE year = 2025 └── Result: 5 TB With AQUA: ├── AQUA reads 100 TB from S3 ├── AQUA filters WHERE year = 2025 (near storage) ✅ ├── Transfer only 5 TB to compute └── Result: 5 TB (95% less data movement) AQUA Features: - Available on RA3 node types only - Automatic (no code changes) - Free (included with RA3 pricing) - Best for: Scans, aggregations, filters Why others wrong:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nRedshift Spectrum allows querying S3 data directly without loading. Redshift is NOT for OLTP.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Redshift = Heavy OLAP data warehouse, columnar storage, complex BI queries."
  },
  {
    "id": "saa_42a5b5f6ab",
    "materia": "Design Resilient Architectures",
    "tema": "config",
    "dificultad": 3,
    "pregunta": "Auto Scaling Termination Policies Your company uses Auto Scaling groups to deploy web servers across multiple AZs. After updating to a new AMI, you want to ensure that instances launched with old AMIs are terminated first during scale-in events. Which Auto Scaling termination policy should you configure?",
    "opciones": [
      "OldestInstance",
      "OldestLaunchConfiguration",
      "OldestLaunchTemplate",
      "Default"
    ],
    "correcta": 2,
    "explicacion": "Explanation: Termination Policies: | Policy | Terminates | Use Case | |--------|-----------|----------| | Default | Multi-step: AZ balance → oldest launch config → closest to billing hour | General purpose | | OldestInstance | Longest-running instance | Rotate instances regularly | | NewestInstance | Most recently launched | Prefer mature instances | | OldestLaunchConfiguration | Instance from oldest launch config version | Phase out old configs | | OldestLaunchTemplate | Instance from oldest launch template version | Phase out old AMIs ✅ | | ClosestToNextInstanceHour | Instance closest to next billing hour | Cost optimization | | AllocationStrategy | For Spot instances only | Spot Fleet management | Why OldestLaunchTemplate: - Launch templates specify AMI IDs - Newer template version = newer AMI - Policy ensures old AMIs are phased out first Configuration: bash aws autoscaling update-auto-scaling-group \\ --auto-scaling-group-name my-asg \\ --termination-policies \"OldestLaunchTemplate\" Exam Scenario: \"Updated AMI\" + \"phase out old instances\" = OldestLaunchTemplate ---",
    "explicacion_correcta": "Automatically adds/removes EC2 instances for horizontal scaling and elasticity.\n\nWhen to use: Maintain performance during traffic spikes, reduce costs by terminating instances when demand drops.\n\nKey differences: Horizontal scaling (more instances) vs vertical scaling (bigger instance). Uses dynamic scaling policies like Target Tracking.",
    "analisis_distractores": "Default termination policy: most instances in AZ → oldest launch template → closest to billing hour. Enable scale-in protection for stateful workloads.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "ASG = Automatically Sizes Groups horizontally. | Config = Configuration compliance and history."
  },
  {
    "id": "saa_43b43f48cb",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "A company has a mix of Convertible and Standard Reserved Instances. They want to change instance families due to application changes. Which RIs can be modified?",
    "opciones": [
      "Only Standard RIs",
      "Only Convertible RIs",
      "Both can be modified",
      "Neither can be modified <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Convertible RIs can change instance family, OS, and tenancy - Provides flexibility for changing requirements - Standard RIs cannot change instance family - Standard RIs can only change instance size within same family - Trade-off: Convertible RIs have lower discount (54% vs 72%) References: Reserved Instances, Convertible vs Standard </details> ---"
  },
  {
    "id": "saa_448fa28fd9",
    "materia": "Design High-Performing Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A company needs block storage for an EC2 instance running a database that requires consistent high IOPS. Which storage option should be used?",
    "opciones": [
      "Instance Store",
      "EBS General Purpose SSD (gp3)",
      "EBS Provisioned IOPS SSD (io2)",
      "Amazon EFS <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - EBS Provisioned IOPS SSD (io2/io2 Block Express) for high-performance databases - Consistent IOPS performance - Up to 64,000 IOPS per volume (io2) - Up to 256,000 IOPS (io2 Block Express) - 99.999% durability EBS Volume Types: | Type | Use Case | IOPS | Throughput | |------|----------|------|------------| | gp3 | General purpose | 16,000 | 1,000 MB/s | | io2 | High-performance databases | 64,000 | 1,000 MB/s | | io2 Block Express | Largest databases | 256,000 | 4,000 MB/s | | st1 | Big data, data warehouses | 500 | 500 MB/s | | sc1 | Cold storage | 250 | 250 MB/s | When to Use: - io2: Databases needing high, consistent IOPS - gp3: Most workloads, cost-effective - st1: Throughput-intensive, sequential - Instance Store: Temporary, highest performance References: EBS Volume Types, Provisioned IOPS </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | EBS = Elastic Block Store; one AZ, one instance, persistent."
  },
  {
    "id": "saa_44bc480dd6",
    "materia": "general",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "Direct Connect BGP Community Tags (Similar to PT7-Q1) Direct Connect public VIF to S3. Traffic should stay in local region only (us-east-1). Which BGP tag?",
    "opciones": [
      "NO_EXPORT",
      "Local preference 200",
      "BGP community 7224:9100 (local region)",
      "BGP community 7224:9300 (global) <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: AWS BGP Community Tags (Public VIF):",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDX is NOT encrypted by default. If scenario needs dedicated line + encryption → IPSec VPN over DX. DX has no inherent resilience (need multiple connections).",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | DX = Dedicated physical line, Delayed setup, Default is unencrypted."
  },
  {
    "id": "saa_45a9ed1c62",
    "materia": "Design High-Performing Architectures",
    "tema": "sqs",
    "dificultad": 2,
    "pregunta": "An application needs to decouple components with message buffering. Messages must be processed exactly once in strict order. Which service should be used?",
    "opciones": [
      "Amazon SQS Standard Queue",
      "Amazon SQS FIFO Queue",
      "Amazon SNS",
      "Amazon Kinesis Data Streams <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Amazon SQS FIFO Queue provides exactly-once processing with strict ordering - Messages processed in the order received - Content-based deduplication prevents duplicates - Message groups enable parallel processing SQS Standard vs FIFO: | Feature | Standard | FIFO | |---------|----------|------| | Ordering | Best-effort | Guaranteed (FIFO) | | Delivery | At-least-once | Exactly-once | | Throughput | Unlimited | 300 msg/s (3000 batched) | | Deduplication | No | Yes (5 min window) | | Use Case | High throughput | Order critical | FIFO Queue Features:",
    "explicacion_correcta": "Fully managed message queuing service for decoupling microservices and distributed systems.\n\nWhen to use: Async processing, background tasks, buffering requests to absorb traffic spikes.\n\nKey differences: SQS = pull-based point-to-point. SNS = push-based pub/sub broadcast. Kinesis = real-time streaming with replay.",
    "analisis_distractores": "Standard = unlimited throughput, at-least-once (duplicates possible). FIFO = exactly-once, strict ordering, 300 msgs/sec (3000 with batching).\n\nStandard = unlimited throughput, at-least-once (duplicates possible). FIFO = exactly-once, strict ordering, 300 msgs/sec (3000 with batching).",
    "tip": "SQS = Send Queued Stuff (pull-based, 1-to-1 decoupling). | SQS = Send Queued Stuff (pull-based, 1-to-1 decoupling)."
  },
  {
    "id": "saa_46d61114d9",
    "materia": "Design High-Performing Architectures",
    "tema": "rds",
    "dificultad": 3,
    "pregunta": "ElastiCache for Redis An e-commerce website needs to show personalized product recommendations in real-time based on user behavior. The recommendation engine must handle millions of read/write operations per second with sub-millisecond latency. Which database service should you use?",
    "opciones": [
      "Amazon RDS with Read Replicas",
      "Amazon DynamoDB with DAX",
      "Amazon ElastiCache for Redis",
      "Amazon Aurora Serverless"
    ],
    "correcta": 2,
    "explicacion": "Explanation: Amazon ElastiCache for Redis: - In-memory data store (fastest possible) - Sub-millisecond latency for read/write - High throughput: Millions of ops/sec - Data structures: Strings, Hashes, Lists, Sets, Sorted Sets Perfect Use Cases: - Real-time recommendations - Session management - Leaderboards - Chat applications - Real-time analytics - Caching layer Why Best for Recommendations:",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.\n\nElastiCache requires application code changes (unlike DAX). Don't select Memcached if scenario needs DR, replication, or pub/sub.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | EBS = Elastic Block Store; one AZ, one instance, persistent."
  },
  {
    "id": "saa_46ed62630c",
    "materia": "Design Secure Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "An application uses RDS MySQL. The company wants to encrypt an existing unencrypted database. What is the correct approach?",
    "opciones": [
      "Enable encryption on the existing database",
      "Create encrypted snapshot, restore to new encrypted instance",
      "Use AWS KMS to encrypt in-place",
      "Export data and re-import to encrypted instance <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Cannot encrypt existing RDS instance directly - Must create encrypted copy Encryption Process:",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience."
  },
  {
    "id": "saa_4724c38eb1",
    "materia": "Design Resilient Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "A company wants to deploy a web application that must remain available even if an entire AWS data center becomes unavailable. What should they do?",
    "opciones": [
      "Deploy the application in multiple Regions",
      "Deploy the application across multiple Availability Zones",
      "Deploy the application using multiple Edge Locations",
      "Use AWS CloudFormation for deployment <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Deploying across multiple Availability Zones within a region ensures the application remains available even if one AZ (data center) fails. Multi-Region (A) would be for disaster recovery across regions. Edge Locations (C) are for content delivery. CloudFormation (D) is for infrastructure as code. </details>"
  },
  {
    "id": "saa_47307091ad",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 3,
    "pregunta": "ECS Task Components (Similar to PT1-Q2) A software company is migrating a microservices application to AWS. Each microservice needs specific configurations including: - Container image from Amazon ECR - 1 vCPU and 2GB memory allocation - Environment variables for database connections - Port 8080 exposed for application traffic - IAM permissions to access S3 and DynamoDB Which AWS component should the architect create to define these container specifications for ECS?",
    "opciones": [
      "ECS Service definition with desired task count",
      "ECS Cluster configuration with EC2 launch type",
      "ECS Task Definition in JSON/YAML format",
      "ECS Container Instance with user data script <details> <summary>✅ Click to reveal answer</summary> Key Concept: Task Definition = Recipe; Task = Cooked meal; Service = Kitchen maintaining meals </details> ---"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - ECS Task Definition is the blueprint that defines container specifications - Contains: image URL, CPU/memory, port mappings, environment variables, IAM roles - Format: JSON or YAML - Versioned (e.g., my-task:5 for revision 5) Why others are wrong:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.\n\nMinimize operational overhead → Fargate launch type. Need to manage hosts, use RIs → EC2 mode.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_47c910a043",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company needs to store compliance data that must be retained for 7 years and accessed once or twice per year. Cost optimization is critical. Which storage solution is MOST cost-effective?",
    "opciones": [
      "S3 Standard",
      "S3 Glacier Flexible Retrieval",
      "S3 Glacier Deep Archive",
      "S3 Intelligent-Tiering <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - S3 Glacier Deep Archive is cheapest S3 storage class - Designed for long-term retention (7-10+ years) - Retrieval time: 12-48 hours (acceptable for rare access) - Lowest cost per GB - Perfect for compliance, regulatory archives Cost Comparison (approximate): - Deep Archive: $0.00099/GB/month (cheapest) - Glacier Flexible: $0.0036/GB/month - Standard-IA: $0.0125/GB/month - Standard: $0.023/GB/month When to Use: - Deep Archive: Rarely accessed, 7+ years retention - Glacier Flexible: Occasionally accessed archives - Standard-IA: Monthly access - Standard: Frequent access References: S3 Glacier Deep Archive, Archive Storage </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCannot upload directly to Glacier via console. Must use S3 Lifecycle policy or CLI/SDK. Data must pass through S3 first.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Glacier = Frozen data; cheap to store but takes time to thaw."
  },
  {
    "id": "saa_48d0678888",
    "materia": "Design Resilient Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "A solutions architect needs to design a system that follows the \"Design for Failure\" principle of the Well-Architected Framework. Which approach should be taken?",
    "opciones": [
      "Use only the largest EC2 instance types to prevent failures",
      "Design the application to handle component failures gracefully",
      "Deploy all resources in a single Availability Zone for simplicity",
      "Rely on AWS Support to handle all failures <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - \"Design for Failure\" means assuming components will fail and planning accordingly - Applications should handle failures gracefully with retry logic, health checks, etc. - Larger instances don't prevent failures - Single AZ deployment increases failure risk - You must design for failure, not rely solely on support - Proper approach: graceful degradation, automatic recovery References: AWS Well-Architected Framework - Reliability Pillar </details> ---"
  },
  {
    "id": "saa_48d419e0a2",
    "materia": "general",
    "tema": "dynamodb",
    "dificultad": 2,
    "pregunta": "DynamoDB Global Secondary Index (Similar to PT2) An application queries DynamoDB table by user_id (partition key) and needs to query by email address. What should the architect add?",
    "opciones": [
      "Local Secondary Index (LSI)",
      "Global Secondary Index (GSI) with email as partition key",
      "DynamoDB Scan operation",
      "Add email to sort key <details> <summary>✅ Click to reveal answer</summary> Key Concept: GSI = New partition key for alternate query pattern (can add anytime) </details> ---"
    ],
    "correcta": 1,
    "explicacion": "Explanation: DynamoDB Index Types: Local Secondary Index (LSI): ├── Same partition key as base table ├── Different sort key ├── Created at table creation (cannot add later) ❌ └── Limit: 5 LSIs per table Global Secondary Index (GSI): ✅ ├── Different partition key (email) ✅ ├── Can be created anytime (even after table exists) ├── Has its own RCU/WCU capacity └── Limit: 20 GSIs per table Example: Base Table: ├── Partition Key: user_id └── Attributes: email, name, created_at GSI (EmailIndex): ├── Partition Key: email ✅ ├── Projected attributes: user_id, name └── Query by email now efficient Query Examples: python # Without GSI (SLOW - requires Scan) response = table.scan( FilterExpression=Attr('email').eq('user@example.com') ) # Reads entire table ❌ # With GSI (FAST - direct query) response = table.query( IndexName='EmailIndex', KeyConditionExpression=Key('email').eq('user@example.com') ) # Reads only matching items ✅ Why others wrong:",
    "explicacion_correcta": "Fully managed serverless NoSQL key-value/document database with single-digit ms latency.\n\nWhen to use: Highly scalable web/mobile backends, IoT, gaming leaderboards, shopping carts.\n\nKey differences: Schema-less vs RDS/Aurora (relational). Horizontal scaling without managing instances.",
    "analisis_distractores": "Reduce latency to microseconds → DAX (DynamoDB Accelerator). Active-active multi-region → Global Tables. Unpredictable workloads → On-Demand capacity.",
    "tip": "Dynamo = Dynamic infinite scaling for NoSQL."
  },
  {
    "id": "saa_49442a5ca2",
    "materia": "general",
    "tema": "ec2",
    "dificultad": 3,
    "pregunta": "CloudFormation Cross-Stack References (Similar to PT1-Q25) A development team manages infrastructure using multiple CloudFormation stacks. The network stack creates a VPC with public and private subnets. The application stack needs to launch EC2 instances in the subnets created by the network stack. How should the architect enable the application stack to reference the subnet IDs from the network stack?",
    "opciones": [
      "Use CloudFormation StackSets to deploy both stacks together",
      "Export subnet IDs using Outputs in network stack, import using Fn::ImportValue in application stack",
      "Store subnet IDs in Parameter Store, retrieve in application stack using dynamic references",
      "Use nested stacks with the network stack as parent <details> <summary>✅ Click to reveal answer</summary> Key Concept: Outputs + Export in source stack; Fn::ImportValue in dependent stack </details> ---"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Cross-Stack References Pattern: Network Stack (exports values): yaml Resources: PublicSubnet1: Type: AWS::EC2::Subnet Properties: VpcId: !Ref VPC CidrBlock: 10.0.1.0/24 AvailabilityZone: us-east-1a Outputs: PublicSubnet1Id: Description: Public Subnet 1 ID Value: !Ref PublicSubnet1 Export: Name: NetworkStack-PublicSubnet1 # Export name must be unique in region Application Stack (imports values): yaml Resources: WebServer: Type: AWS::EC2::Instance Properties: ImageId: ami-12345678 InstanceType: t3.micro SubnetId: !ImportValue NetworkStack-PublicSubnet1 # Import exported value Key Rules: - Export names must be unique within a region - Cannot delete stack with exports if other stacks import them - Export names cannot be updated without breaking dependent stacks Why others are wrong:",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | EBS = Elastic Block Store; one AZ, one instance, persistent."
  },
  {
    "id": "saa_49d38f2be4",
    "materia": "general",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "A company has a VPC with CIDR 10.0.0.0/16. They want to divide it into subnets. How many IP addresses are available in a /24 subnet?",
    "opciones": [
      "128",
      "256",
      "251",
      "254 <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - /24 subnet has 256 total IP addresses (2^8) - AWS reserves 5 IP addresses in each subnet: - .0: Network address - .1: VPC router - .2: DNS server - .3: Future use - .255: Broadcast - Available: 256 - 5 = 251 IP addresses CIDR Calculations: - /16: 65,536 IPs (65,531 usable) - /24: 256 IPs (251 usable) - /28: 16 IPs (11 usable) References: VPC CIDR, Subnet Sizing </details> ---",
    "explicacion_correcta": "Connect VPC to AWS services privately without Internet Gateway, NAT, VPN, or Direct Connect.\n\nWhen to use: Private subnets must access AWS services without traversing public internet.\n\nKey differences: Gateway Endpoints only for S3 and DynamoDB (route table prefix lists). Interface Endpoints (PrivateLink) for almost all other services (ENI with private IP).",
    "analisis_distractores": "Gateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Gateway for Big Two (S3 & DynamoDB); Interface for the Rest."
  },
  {
    "id": "saa_4a0d412ca3",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company needs to store 500 TB of archival data that is accessed once per year. Cost is the primary concern. Which storage solution should they use?",
    "opciones": [
      "S3 Standard",
      "S3 Glacier Flexible Retrieval",
      "S3 Glacier Deep Archive",
      "EBS Cold HDD <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "S3 Glacier Deep Archive is the lowest cost storage class, perfect for data accessed rarely (once or twice per year). Retrieval time is 12-48 hours, which is acceptable for the use case. </details>",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCannot upload directly to Glacier via console. Must use S3 Lifecycle policy or CLI/SDK. Data must pass through S3 first.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Glacier = Frozen data; cheap to store but takes time to thaw."
  },
  {
    "id": "saa_4a0e041986",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "A company has Reserved Instances that are expiring soon. They want to know if they should renew. Which Cost Explorer feature helps with this decision?",
    "opciones": [
      "Cost forecasting",
      "Reserved Instance Utilization report",
      "Right-sizing recommendations",
      "Savings Plans recommendations <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - RI Utilization report shows how much Reserved capacity is used - High utilization (>80%) indicates RI should be renewed - Low utilization suggests downsizing or not renewing - Also shows RI Coverage (what % of usage is covered) - Cost forecasting predicts future costs - Right-sizing is for instance size optimization - Savings Plans recommendations compare to RIs References: Reserved Instance Utilization, Cost Explorer </details> ---"
  },
  {
    "id": "saa_4a1780f5c0",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "Savings Plans Strategy A company runs workloads on AWS: - Web tier: Mixed instance families (t3, m5, c5) across regions - App tier: Stable c5 family in single region - Database: RDS MySQL Multi-AZ What is the MOST cost-effective commitment strategy?",
    "opciones": [
      "Compute Savings Plans for all workloads",
      "EC2 Instance Savings Plans for all workloads",
      "Compute SP (web) + EC2 Instance SP (app) + RDS RI (DB) ✅",
      "EC2 Instance SP (all EC2) + Compute SP (RDS) <details> <summary>📖 Explanation</summary>"
    ],
    "correcta": 2,
    "explicacion": "Savings Strategy Matrix: | Workload | Characteristics | Best Option | Discount | |----------|----------------|-------------|----------| | Web tier | Diverse families/regions | Compute SP | 66% | | App tier | Stable c5 family | EC2 Instance SP | 72% | | RDS Database | Managed service | RDS Reserved Instance | 69% | Why This Mix: Compute Savings Plans (Web): - Flexible across instance families (t3, m5, c5) - Portable across regions - Good for dynamic/evolving workloads EC2 Instance Savings Plans (App): - Highest discount (72%) - Locked to c5 family (acceptable for stable tier) - Regional commitment RDS Reserved Instances (DB): - Separate from EC2 plans - Database-specific pricing model - Required for managed service discounts Critical Mistake: RDS is NOT covered by EC2/Compute Savings Plans Cost Example: On-Demand Total: $10,000/month With Mixed Strategy: $3,800/month (62% savings) With Wrong Strategy: $5,200/month (48% savings) </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nMulti-AZ is for resilience, NOT read scaling. Converting Single-AZ to Multi-AZ is zero-downtime.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_4ac6bea74b",
    "materia": "Design Resilient Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A Windows application running on EC2 needs shared file storage accessible via SMB protocol. Which service should be used?",
    "opciones": [
      "Amazon EFS",
      "Amazon FSx for Windows File Server",
      "Amazon EBS",
      "Amazon S3 <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Amazon FSx for Windows File Server: - Native Windows file system - SMB protocol support - Active Directory integration - Windows NTFS features - Multi-AZ deployment FSx Family: - FSx for Windows: Windows workloads, SMB, AD - FSx for Lustre: HPC, ML, high-performance - FSx for NetApp ONTAP: Enterprise NAS, multi-protocol - FSx for OpenZFS: Linux workloads, snapshots File Storage Options: - Windows apps: FSx for Windows (SMB) - Linux apps: EFS (NFS) - HPC/ML: FSx for Lustre - Block storage: EBS References: Amazon FSx for Windows, SMB File Shares </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.\n\nEFS is strictly for Linux (NFS). For Windows servers, choose Amazon FSx for Windows File Server.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | EBS = Elastic Block Store; one AZ, one instance, persistent."
  },
  {
    "id": "saa_4b1adc7ece",
    "materia": "general",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "CloudFormation Mappings You have a CloudFormation template that deploys EC2 instances in multiple regions. Each region requires a specific AMI ID for Ubuntu 20.04. How do you store and retrieve region-specific AMI IDs in CloudFormation?",
    "opciones": [
      "Use CloudFormation Parameters with default values",
      "Use CloudFormation Mappings with region-based keys",
      "Use CloudFormation Outputs to export AMI IDs",
      "Use CloudFormation Conditions to select AMI IDs"
    ],
    "correcta": 1,
    "explicacion": "Explanation: CloudFormation Mappings: yaml Mappings: RegionToAMI: us-east-1: AMI: ami-0abcdef1234567890 us-west-2: AMI: ami-0123456789abcdef0 eu-west-1: AMI: ami-0fedcba9876543210 Usage in Template: yaml Resources: MyEC2Instance: Type: AWS::EC2::Instance Properties: ImageId: !FindInMap [RegionToAMI, !Ref \"AWS::Region\", AMI] InstanceType: t3.micro Fn::FindInMap Syntax: !FindInMap [MapName, TopLevelKey, SecondLevelKey] Why Mappings: - ✅ Static, region-specific values - ✅ Easy to maintain - ✅ Built-in CloudFormation feature - ✅ No external dependencies Comparison: | Method | Use Case | Example | |--------|----------|---------| | Parameters | User input at runtime | Environment (dev/prod) | | Mappings | Static lookups (region, env) | AMI IDs per region | | Outputs | Share values between stacks | Export VPC ID | | Conditions | Control resource creation | Create resource if prod | Exam Tip: \"Region-specific values\" + \"CloudFormation\" = Mappings ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | Gateway for Big Two (S3 & DynamoDB); Interface for the Rest."
  },
  {
    "id": "saa_4b89fa2104",
    "materia": "Design High-Performing Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "A development team needs a fully managed, scalable, and highly available Apache Cassandra-compatible database for their application. Which AWS service should they use?",
    "opciones": [
      "Amazon Keyspaces",
      "Amazon DynamoDB",
      "Amazon RDS for PostgreSQL",
      "Amazon Aurora <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - Amazon Keyspaces is a managed Cassandra-compatible database - Supports Cassandra Query Language (CQL) - DynamoDB is NoSQL but not Cassandra-compatible - RDS and Aurora are relational databases References: Amazon Keyspaces, Managed Cassandra </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nAurora storage auto-scales in 10GB increments up to 128TB. No need for read replicas for HA (6 copies already).\n\nReduce latency to microseconds → DAX (DynamoDB Accelerator). Active-active multi-region → Global Tables. Unpredictable workloads → On-Demand capacity.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Aurora = 6 copies, 3 AZs, self-healing, no manual HA setup."
  },
  {
    "id": "saa_4c0dfd1fe5",
    "materia": "general",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "Users report seeing different subsets of documents when refreshing a website with two EC2 instances behind an ALB, each with separate EBS volumes. What should be done? Options:",
    "opciones": [
      "Copy data so both EBS volumes contain all documents",
      "Configure ALB to direct users to server with their documents",
      "Copy data from both EBS volumes to Amazon EFS and modify application",
      "Configure ALB to send requests to both servers"
    ],
    "correcta": 2,
    "explicacion": "Explanation: Amazon EFS provides shared file storage that can be mounted by multiple EC2 instances simultaneously, ensuring all instances can access the same documents regardless of which instance serves the request. ### S3 Data Protection",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_4c10ab23fc",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company needs to load VPC Flow Logs into Amazon S3 for analysis with Athena. The solution should be fully managed with minimal setup. What should be configured?",
    "opciones": [
      "Use Kinesis Data Streams with Lambda",
      "Use Kinesis Data Firehose as the Flow Logs destination",
      "Use CloudWatch Logs with manual export",
      "Use custom EC2 instances to collect logs <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - VPC Flow Logs can deliver directly to Kinesis Data Firehose - Firehose automatically loads to S3 - Fully managed, no code required - Can compress and partition data - Manual export isn't automated - Data Streams requires consumer application - EC2 instances add operational overhead References: VPC Flow Logs, Kinesis Data Firehose </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nAthena costs $5/TB scanned. Optimize by partitioning data and using Parquet/ORC columnar format.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_4cb1d0400d",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "EC2 Hibernate vs Stop/Start (Similar to PT4) A data processing application takes 10 minutes to load a 16 GB dataset into memory. The application runs intermittently. Which feature preserves memory state between sessions?",
    "opciones": [
      "EC2 Stop/Start",
      "EC2 Hibernate",
      "EBS snapshot before stopping",
      "Instance store persistence <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: EC2 Hibernate: Stop/Start: ├── Stops instance → Clears RAM ❌ ├── Start → Boot OS → Load application → Load dataset (10 min) └── RAM lost, full reload required Hibernate: ✅ ├── Saves RAM contents to EBS root volume ├── Stops instance (no compute charges) ├── Start → Restores RAM from EBS → Resume instantly └── Dataset stays in memory ✅ (no 10-min reload) Use Cases: Good for Hibernate: ├── Long-running applications with in-memory state ├── Applications with slow startup ├── Dev/test environments (save cost, preserve state) └── Intermittent workloads Requirements: ├── Supported instance types (M3-M5, C3-C5, R3-R5) ├── RAM < 150 GB ├── Root volume: EBS (not instance store) ├── Encryption: Enable on root volume └── Hibernate agent installed (Amazon Linux 2, Ubuntu) Cost Comparison: Scenario: m5.xlarge (16 GB RAM), runs 2 hours/day Stop/Start (10-min reload each time): ├── Compute: 2.33 hours × $0.192/hr = $0.447/day │ └── (2 hours + 20 min reload × 2) ├── EBS: $0.10/GB/month × 100 GB = $10/month └── Total: ~$23/month Hibernate (instant resume): ├── Compute: 2 hours × $0.192/hr = $0.384/day ├── EBS: ($0.10 × 100 GB) + ($0.10 × 16 GB hibernate) = $11.60/month └── Total: ~$23/month (similar cost, faster resume) Benefit: Save 20 minutes/day (no reload time) Enable Hibernate: bash # Launch instance with hibernate enabled aws ec2 run-instances \\ --image-id ami-12345678 \\ --instance-type m5.xlarge \\ --hibernation-options Configured=true \\ --block-device-mappings '[{ \"DeviceName\": \"/dev/xvda\", \"Ebs\": { \"VolumeSize\": 100, \"Encrypted\": true } }]' # Hibernate instance aws ec2 stop-instances \\ --instance-ids i-1234567890abcdef0 \\ --hibernate # Start (resumes with RAM intact) aws ec2 start-instances \\ --instance-ids i-1234567890abcdef0 Key Concept: Hibernate = Save RAM to EBS, instant resume with preserved memory state </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | EBS = Elastic Block Store; one AZ, one instance, persistent."
  },
  {
    "id": "saa_4ddf680e2a",
    "materia": "Design High-Performing Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company has streaming data in Kinesis Data Streams and wants to load it into Amazon Redshift for analytics. What is the MOST operationally efficient solution?",
    "opciones": [
      "Use Lambda to read from Kinesis and write to Redshift",
      "Use Kinesis Data Firehose to load data into Redshift",
      "Use EC2 instances with custom scripts",
      "Use EMR to process and load data <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Firehose can read from Data Streams and load to Redshift - Fully managed, no code required - Automatically scales - Loads via S3 (COPY command) - Lambda requires custom code and error handling - EC2 and EMR add operational overhead References: Kinesis Data Firehose, Redshift Integration </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_4f185b1de9",
    "materia": "Design High-Performing Architectures",
    "tema": "dynamodb",
    "dificultad": 1,
    "pregunta": "A company wants to achieve microsecond latency for DynamoDB read operations. Which feature should be enabled?",
    "opciones": [
      "DynamoDB Streams",
      "DynamoDB Global Tables",
      "DynamoDB Accelerator (DAX)",
      "DynamoDB Auto Scaling <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - DynamoDB Accelerator (DAX): - In-memory cache for DynamoDB - Microsecond latency (vs millisecond) - Fully managed, highly available - No application code changes (drop-in replacement) DAX Benefits: - 10x performance improvement for read-heavy workloads - Reduces read load on DynamoDB - Eventually consistent reads - Write-through cache DAX vs ElastiCache: - DAX: DynamoDB-specific, easier integration - ElastiCache: General purpose, more control When to use DAX: - Read-heavy workloads - Need microsecond latency - Repeated reads of same items - Real-time bidding, gaming References: DynamoDB Accelerator (DAX), Caching </details> ---",
    "explicacion_correcta": "Fully managed in-memory caching service supporting Redis and Memcached engines.\n\nWhen to use: Offload read-heavy database queries, store user session state, sub-millisecond response times.\n\nKey differences: DAX is specifically for DynamoDB (no code changes). ElastiCache requires application code changes. Redis supports Multi-AZ, backups, replication. Memcached is simpler with no persistence or failover.",
    "analisis_distractores": "ElastiCache requires application code changes (unlike DAX). Don't select Memcached if scenario needs DR, replication, or pub/sub.\n\nReduce latency to microseconds → DAX (DynamoDB Accelerator). Active-active multi-region → Global Tables. Unpredictable workloads → On-Demand capacity.",
    "tip": "ElastiCache = Extra code changes required for Cache. | Dynamo = Dynamic infinite scaling for NoSQL."
  },
  {
    "id": "saa_4f35d56903",
    "materia": "general",
    "tema": "sqs",
    "dificultad": 2,
    "pregunta": "A marketing team wants to send targeted push notifications, emails, and SMS messages to users based on their behavior in a mobile app. Which AWS service should be used?",
    "opciones": [
      "Amazon Pinpoint",
      "Amazon SNS",
      "AWS Amplify",
      "Amazon SQS <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - Amazon Pinpoint is a multi-channel marketing and analytics service - Supports push, email, SMS, and in-app messaging - Provides segmentation, analytics, and campaign management - SNS is for basic notifications, not targeted campaigns - Amplify is for app development, not marketing - SQS is for queuing, not messaging users References: Amazon Pinpoint, User Engagement </details> ---",
    "explicacion_correcta": "Fully managed push-based pub/sub messaging for decoupling microservices and broadcasting notifications.\n\nWhen to use: Fan-out pattern (single event to multiple subscribers): email, SMS, mobile push, multiple SQS queues, Lambda functions.\n\nKey differences: SNS = push-based pub/sub broadcast. SQS = pull-based point-to-point. EventBridge = complex rule-based filtering + SaaS integrations.",
    "analisis_distractores": "Use SNS+SQS fan-out for reliable task processing (SNS alone can lose messages if endpoint offline).\n\nStandard = unlimited throughput, at-least-once (duplicates possible). FIFO = exactly-once, strict ordering, 300 msgs/sec (3000 with batching).",
    "tip": "SNS = Send Notifications Simultaneously (Broadcast/Push). | SQS = Send Queued Stuff (pull-based, 1-to-1 decoupling)."
  },
  {
    "id": "saa_5046abce07",
    "materia": "Design Resilient Architectures",
    "tema": "aws-architect",
    "dificultad": 1,
    "pregunta": "Which of the following are not backup and restore solutions provided by AWS? (choose multiple)",
    "opciones": [
      "AWS Elastic Block Store",
      "AWS Storage Gateway",
      "AWS Elastic Beanstalk",
      "AWS Database Migration Hub"
    ],
    "correcta": 2,
    "explicacion": ", E Option A is snapshot based data backup solution. Option B, AWS Storage Gateway provides multiple solutions for backup & recovery. Option D can be used as a Database backup solution."
  },
  {
    "id": "saa_511b15aa2a",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 1,
    "pregunta": "A company wants to access S3 from EC2 instances without using internet gateway or NAT. What should be configured?",
    "opciones": [
      "VPN Connection",
      "AWS Direct Connect",
      "VPC Endpoint for S3 (Gateway Endpoint)",
      "VPC Peering <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - VPC Endpoint for S3 (Gateway Endpoint): - Private connection from VPC to S3 - No internet required - No data transfer charges - Traffic stays within AWS network VPC Endpoint Types: | Type | Services | Cost | Implementation | |------|----------|------|----------------| | Gateway | S3, DynamoDB | Free | Route table entry | | Interface | Most AWS services | Hourly + data | ENI in subnet | S3 Endpoint Benefits: - Enhanced security (no internet exposure) - Better performance - No NAT Gateway costs - Control access via endpoint policies Configuration:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_51460ad161",
    "materia": "Design High-Performing Architectures",
    "tema": "sqs",
    "dificultad": 3,
    "pregunta": "A company has an application that ingests incoming messages. These messages are then quickly consumed by dozens of other applications and microservices. The number of messages varies drastically and sometimes spikes as high as 100,000 each second. The company wants to decouple the solution and increase scalability. Which solution meets these requirements?",
    "opciones": [
      "Persist the messages to Amazon Kinesis Data Analytics. All the applications will read and process the messages.",
      "Deploy the application on Amazon EC2 instances in an Auto Scaling group, which scales the number of EC2 instances based on CPU metrics.",
      "Write the messages to Amazon Kinesis Data Streams with a single shard. All applications will read from the stream and process the messages.",
      "Publish the messages to an Amazon Simple Notification Service (Amazon SNS) topic with one or more Amazon Simple Queue Service (Amazon SQS) subscriptions. All applications then process the messages from the queues."
    ],
    "correcta": 3,
    "explicacion": "Explanation: \"SNS Standard Topic\" Maximum throughput: Standard topics support a nearly unlimited number of messages per second. Get Latest & Actual SAA-C03 Exam's Question and Answers from Lead2pass. https://www.lead2pass.com 10 ★ Instant Download ★ PDF And VCE ★ 100% Passing Guarantee ★ 100% Money Back Guarantee https://aws.amazon.com/sns/features/ \"SQS Standard Queue\" Unlimited Throughput: Standard queues support a nearly unlimited number of transactions per second (TPS) per API action. https://aws.amazon.com/sqs/features/ /",
    "explicacion_correcta": "Fully managed push-based pub/sub messaging for decoupling microservices and broadcasting notifications.\n\nWhen to use: Fan-out pattern (single event to multiple subscribers): email, SMS, mobile push, multiple SQS queues, Lambda functions.\n\nKey differences: SNS = push-based pub/sub broadcast. SQS = pull-based point-to-point. EventBridge = complex rule-based filtering + SaaS integrations.",
    "analisis_distractores": "Use SNS+SQS fan-out for reliable task processing (SNS alone can lose messages if endpoint offline).\n\nStandard = unlimited throughput, at-least-once (duplicates possible). FIFO = exactly-once, strict ordering, 300 msgs/sec (3000 with batching).",
    "tip": "SNS = Send Notifications Simultaneously (Broadcast/Push). | SQS = Send Queued Stuff (pull-based, 1-to-1 decoupling)."
  },
  {
    "id": "saa_519bdd80b2",
    "materia": "Design Secure Architectures",
    "tema": "ebs",
    "dificultad": 1,
    "pregunta": "Which service helps you check if EBS volumes are encrypted?",
    "opciones": [
      "CloudWatch",
      "CloudTrail",
      "AWS Config",
      "Inspector"
    ],
    "correcta": 2,
    "explicacion": "",
    "explicacion_correcta": "Persistent block-level storage volumes attached to EC2 instances. Behave like raw hard drives.\n\nWhen to use: Boot volumes for EC2, database storage, applications requiring consistent low-latency block storage.\n\nKey differences: EBS locked to single AZ. EFS spans multiple AZs and mounts to hundreds of instances. EBS is persistent, Instance Store is ephemeral.",
    "analisis_distractores": "EBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.",
    "tip": "EBS = Elastic Block Store; one AZ, one instance, persistent."
  },
  {
    "id": "saa_5291b20d9e",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "S3 Glacier Flexible Retrieval Options (Similar to PT3-Q4) A compliance team needs to retrieve 100 GB of archived data from S3 Glacier Flexible Retrieval. They need the data within 12 hours. Which retrieval option meets this requirement cost-effectively?",
    "opciones": [
      "Expedited retrieval (1-5 minutes)",
      "Standard retrieval (3-5 hours)",
      "Bulk retrieval (5-12 hours)",
      "Glacier Instant Retrieval <details> <summary>✅ Click to reveal answer</summary> Key Concept: Bulk retrieval = Most cost-effective for large datasets with flexible timeline </details> ---"
    ],
    "correcta": 2,
    "explicacion": "Explanation: Glacier Flexible Retrieval Options: Expedited (1-5 minutes): ├── Cost: $0.03/GB + $10 per 1,000 requests ├── 100 GB cost: 100 × $0.03 + $10 = $13 (HIGH) └── Use: Urgent, small datasets Standard (3-5 hours): ├── Cost: $0.01/GB + $0.05 per 1,000 requests ├── 100 GB cost: 100 × $0.01 + $0.05 = $1.05 (MEDIUM) └── Use: Most common, balanced cost/speed Bulk (5-12 hours): ✅ ├── Cost: $0.0025/GB + $0.025 per 1,000 requests ├── 100 GB cost: 100 × $0.0025 + $0.025 = $0.275 (LOWEST) └── Use: Large datasets, non-urgent (meets 12-hour requirement) Cost Comparison: 100 GB Retrieval: ├── Expedited: $13.00 (overkill for 12-hour SLA) ├── Standard: $1.05 (faster than needed) └── Bulk: $0.275 ✅ (meets 12-hour requirement at lowest cost) Savings: $13.00 - $0.275 = $12.725 (98% cheaper than Expedited) Why others wrong:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCannot upload directly to Glacier via console. Must use S3 Lifecycle policy or CLI/SDK. Data must pass through S3 first.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Glacier = Frozen data; cheap to store but takes time to thaw."
  },
  {
    "id": "saa_5370096d94",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "An operations team needs to collect metadata about all EC2 instances including installed applications, OS details, and network configuration. Which Systems Manager feature should they use?",
    "opciones": [
      "Systems Manager Session Manager",
      "Systems Manager Inventory",
      "Systems Manager Patch Manager",
      "Systems Manager Run Command <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Systems Manager Inventory collects metadata from managed instances - Gathers information about OS, applications, network config - Can query and visualize with Inventory dashboard - Session Manager is for shell access - Patch Manager is for patching - Run Command executes commands References: Systems Manager Inventory, Metadata Collection </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | Config = Configuration compliance and history."
  },
  {
    "id": "saa_540580b9ee",
    "materia": "Design High-Performing Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "Data transfer costs are high for a web application serving static content globally. How can data transfer costs be reduced?",
    "opciones": [
      "Use S3 Transfer Acceleration",
      "Use CloudFront as a CDN",
      "Move data to Glacier",
      "Use larger EC2 instances <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - CloudFront reduces data transfer from origin - Caches content at edge locations globally - Data transfer from CloudFront to users is cheaper than from EC2/S3 - Free data transfer from S3/EC2 to CloudFront - S3 Transfer Acceleration accelerates uploads, doesn't reduce costs - Glacier is for archival, not active content - Instance size doesn't affect transfer costs References: CloudFront, Data Transfer Costs </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nCaching HTTP content → CloudFront. Non-HTTP or static IPs needed → Global Accelerator. Use OAI/OAC to protect S3 origins.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_54095eec5c",
    "materia": "Design Secure Architectures",
    "tema": "waf",
    "dificultad": 2,
    "pregunta": "A web application receives sudden traffic spikes. The company wants to protect backend servers from being overwhelmed. What should be implemented at the Network ACL level?",
    "opciones": [
      "Allow all traffic",
      "Rate limiting",
      "Connection draining",
      "NACLs don't support rate limiting, use WAF <details> <summary>Show Answer</summary>"
    ],
    "correcta": 3,
    "explicacion": "Explanation: - NACLs provide basic allow/deny rules - No rate limiting capabilities - AWS WAF provides rate limiting Rate Limiting Solutions: | Service | Level | Capability | |---------|-------|------------| | AWS WAF | Application (L7) | Rate-based rules | | API Gateway | API | Throttling | | Shield Advanced | Network | DDoS mitigation | | NACL | Network (L4) | No rate limiting | WAF Rate-Based Rule: - Block IPs exceeding request threshold - 5-minute time window - Example: Block if > 2000 requests in 5 minutes Best Practice for Traffic Spikes:",
    "explicacion_correcta": "Web application firewall that protects web applications from common exploits (SQL injection, XSS).\n\nWhen to use: Protecting applications behind CloudFront, ALB, or API Gateway from OWASP top 10 threats.\n\nKey differences: WAF operates at Layer 7 (HTTP/HTTPS). Shield protects against DDoS (Layer 3/4). GuardDuty detects threats intelligently.",
    "analisis_distractores": "WAF for app-level attacks (SQLi, XSS). Shield for DDoS. Don't confuse them.\n\nAPI Gateway integrates with Lambda (no VPC needed) and HTTP backends (needs VPC link for private). WebSocket APIs for bidirectional communication.",
    "tip": "WAF = Web Application Filter (Layer 7 rules). | API Gateway = Gatekeeper for your APIs (throttle, cache, secure)."
  },
  {
    "id": "saa_54e00ee7c6",
    "materia": "general",
    "tema": "sqs",
    "dificultad": 2,
    "pregunta": "A batch processing application needs to read messages from a queue, process them, and only delete messages after successful processing. Which service and pattern should be used?",
    "opciones": [
      "SNS with immediate deletion",
      "SQS with visibility timeout and explicit deletion",
      "Kinesis with checkpointing",
      "EventBridge with Lambda <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - SQS supports visibility timeout (hides message during processing) - Message only deleted after explicit DeleteMessage call - Ensures message not lost if processing fails - If processing fails, message becomes visible again - SNS doesn't persist messages - Kinesis is for streaming, not queue pattern - EventBridge doesn't provide message persistence References: SQS, Message Processing Patterns </details> ---",
    "explicacion_correcta": "Fully managed push-based pub/sub messaging for decoupling microservices and broadcasting notifications.\n\nWhen to use: Fan-out pattern (single event to multiple subscribers): email, SMS, mobile push, multiple SQS queues, Lambda functions.\n\nKey differences: SNS = push-based pub/sub broadcast. SQS = pull-based point-to-point. EventBridge = complex rule-based filtering + SaaS integrations.",
    "analisis_distractores": "Use SNS+SQS fan-out for reliable task processing (SNS alone can lose messages if endpoint offline).\n\nStandard = unlimited throughput, at-least-once (duplicates possible). FIFO = exactly-once, strict ordering, 300 msgs/sec (3000 with batching).\n\nKinesis Data Streams for custom processing. Kinesis Data Firehose for automatic delivery to S3/Redshift/Elasticsearch (no code needed).",
    "tip": "SNS = Send Notifications Simultaneously (Broadcast/Push). | SQS = Send Queued Stuff (pull-based, 1-to-1 decoupling)."
  },
  {
    "id": "saa_54f85ed1ce",
    "materia": "Design High-Performing Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "A company's applications experience sudden traffic increases on random days. They want to maintain performance during these increases cost-effectively. Which solution is MOST appropriate? Options:",
    "opciones": [
      "Use manual scaling",
      "Use predictive scaling",
      "Use dynamic scaling",
      "Use scheduled scaling"
    ],
    "correcta": 2,
    "explicacion": "Explanation: Dynamic scaling automatically adjusts capacity based on actual demand metrics (CPU, requests, etc.). Since traffic increases are on random days, dynamic scaling is most cost-effective as it responds to actual demand rather than predicting or scheduling. ## Key Study Focus Areas Based on the recurring question patterns, focus your preparation on these critical topics:"
  },
  {
    "id": "saa_5532bb966a",
    "materia": "Design Resilient Architectures",
    "tema": "sqs",
    "dificultad": 2,
    "pregunta": "A company wants to implement a fan-out pattern where an SNS message triggers multiple SQS queues for different services. What is this architecture called?",
    "opciones": [
      "SQS Message Chaining",
      "SNS to SQS Fan-out",
      "Kinesis Fan-out",
      "EventBridge Routing <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - SNS to SQS Fan-out is common pattern for parallel, asynchronous processing - Single message to SNS triggers multiple SQS queues - Each service consumes from its own queue - Decoupled, resilient architecture SNS-SQS Fan-out Architecture: Event Source ↓ SNS Topic ↓ ┌──┴──┬────────┬────────┐ ↓ ↓ ↓ ↓ SQS-1 SQS-2 SQS-3 SQS-4 ↓ ↓ ↓ ↓ Svc-A Svc-B Svc-C Svc-D Benefits:",
    "explicacion_correcta": "Fully managed push-based pub/sub messaging for decoupling microservices and broadcasting notifications.\n\nWhen to use: Fan-out pattern (single event to multiple subscribers): email, SMS, mobile push, multiple SQS queues, Lambda functions.\n\nKey differences: SNS = push-based pub/sub broadcast. SQS = pull-based point-to-point. EventBridge = complex rule-based filtering + SaaS integrations.",
    "analisis_distractores": "Use SNS+SQS fan-out for reliable task processing (SNS alone can lose messages if endpoint offline).\n\nStandard = unlimited throughput, at-least-once (duplicates possible). FIFO = exactly-once, strict ordering, 300 msgs/sec (3000 with batching).",
    "tip": "SNS = Send Notifications Simultaneously (Broadcast/Push). | SQS = Send Queued Stuff (pull-based, 1-to-1 decoupling)."
  },
  {
    "id": "saa_55c524dbdb",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "An application needs to maintain a desired state on EC2 instances, ensuring specific software is always installed and running. Which Systems Manager feature should be used?",
    "opciones": [
      "Systems Manager Run Command",
      "Systems Manager State Manager",
      "Systems Manager Automation",
      "Systems Manager Patch Manager <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - State Manager maintains desired state configuration - Creates associations between documents and instances - Continuously enforces configuration - Run Command executes one-time commands - Automation runs workflows - Patch Manager handles patching References: Systems Manager State Manager, Configuration Management </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | Config = Configuration compliance and history."
  },
  {
    "id": "saa_55efe1d2d7",
    "materia": "general",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A serverless application needs to process real-time streaming data from thousands of IoT devices. Each device sends data every second. Which service is MOST appropriate?",
    "opciones": [
      "Amazon SQS",
      "Amazon SNS",
      "Amazon Kinesis Data Streams",
      "Amazon MQ <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Amazon Kinesis Data Streams designed for real-time streaming data - Handles massive data ingestion from thousands of producers - Multiple consumers can read same data stream - Data retention (24 hours to 365 days) - Ordered records per shard Kinesis Data Streams Architecture: IoT Devices (producers) ↓ Kinesis Stream (shards) ├→ Lambda (real-time processing) ├→ Kinesis Data Analytics (SQL queries) ├→ Kinesis Data Firehose (S3/Redshift) └→ Custom consumers (EC2, containers) Kinesis Key Concepts:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nMulti-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | RDS: Relational, Replicas for Reads, Multi-AZ for Resilience."
  },
  {
    "id": "saa_568b28da5e",
    "materia": "Design High-Performing Architectures",
    "tema": "cloudfront",
    "dificultad": 2,
    "pregunta": "A global enterprise needs to deploy AWS compute and storage services at the edge of mobile networks to deliver ultra-low latency applications. Which AWS service should they use?",
    "opciones": [
      "AWS Wavelength",
      "AWS Outposts",
      "Amazon CloudFront",
      "AWS Direct Connect <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - AWS Wavelength brings AWS services to the edge of 5G networks - Enables ultra-low latency applications for mobile and edge devices - Outposts is for on-premises data centers - CloudFront is a CDN, not edge compute - Direct Connect is for network connectivity References: AWS Wavelength, Edge Computing </details> ---",
    "explicacion_correcta": "Dedicated physical fiber-optic connection from on-premises data center to AWS.\n\nWhen to use: Consistent ultra-low latency, high-bandwidth transfers, bypass public internet for security/compliance.\n\nKey differences: Site-to-Site VPN uses public internet (inconsistent latency), setup in hours. DX is dedicated line with consistent speeds but weeks/months to provision.",
    "analisis_distractores": "DX is NOT encrypted by default. If scenario needs dedicated line + encryption → IPSec VPN over DX. DX has no inherent resilience (need multiple connections).\n\nCaching HTTP content → CloudFront. Non-HTTP or static IPs needed → Global Accelerator. Use OAI/OAC to protect S3 origins.",
    "tip": "DX = Dedicated physical line, Delayed setup, Default is unencrypted. | CloudFront = Sits in front of your web app to cache HTTP."
  },
  {
    "id": "saa_56e4e64a35",
    "materia": "Design High-Performing Architectures",
    "tema": "s3",
    "dificultad": 3,
    "pregunta": "A company's dynamic website is hosted using on-premises servers in the United States. The company is launching its product in Europe, and it wants to optimize site loading times for new European users. The site's backend must remain in the United States. The product is being launched in a few days, and an immediate solution is needed. What should the solutions architect recommend?",
    "opciones": [
      "Launch an Amazon EC2 instance in us-east-1 and migrate the site to it.",
      "Move the website to Amazon S3. Use cross-Region replication between Regions.",
      "Use Amazon CloudFront with a custom origin pointing to the on-premises servers.",
      "Use an Amazon Route 53 geo-proximity routing policy pointing to on-premises servers."
    ],
    "correcta": 2,
    "explicacion": "Explanation: https://aws.amazon.com/pt/blogs/aws/amazon-cloudfront-support-for-custom-origins/ You can now create a CloudFront distribution using a custom origin. Each distribution will can point to an S3 or to a custom origin. This could be another storage service, or it could be something more interesting and more dynamic, such as an EC2 instance or even an Elastic Load Balancer",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_587c6b0c06",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "To avoid regional data transfer charges when EC2 instances download/upload images from/to S3 through NAT gateway, what is the most cost-effective solution? Options:",
    "opciones": [
      "Launch NAT gateway in each Availability Zone",
      "Replace NAT gateway with NAT instance",
      "Deploy a gateway VPC endpoint for S3",
      "Provision EC2 Dedicated Host"
    ],
    "correcta": 2,
    "explicacion": "Explanation: Gateway VPC endpoint for S3 allows EC2 instances to access S3 directly through AWS's private network without going through NAT gateway, eliminating data transfer charges and improving performance. ## Additional High-Frequency Question Types ### AWS Lambda Security",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_58ae2ddba8",
    "materia": "general",
    "tema": "ec2",
    "dificultad": 3,
    "pregunta": "EC2 Hibernation A financial application runs on an EC2 instance with 64 GB of memory. The application loads a large dataset into memory at startup, which takes 20 minutes. During maintenance windows, the instance must be temporarily stopped and restarted quickly. What feature should you use to minimize startup time?",
    "opciones": [
      "Create an AMI of the instance and launch from it",
      "Use EC2 Stop/Start",
      "Enable EC2 Hibernation",
      "Use EC2 Instance Store backed AMI"
    ],
    "correcta": 2,
    "explicacion": "Explanation: EC2 Hibernation: - Saves RAM contents to EBS root volume - Preserves instance state (memory, running processes) - Fast resume (typically under 60 seconds) - Instance ID, IPs, and EBS volumes unchanged How It Works:",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | EBS = Elastic Block Store; one AZ, one instance, persistent."
  },
  {
    "id": "saa_593e96c330",
    "materia": "Design Secure Architectures",
    "tema": "iam",
    "dificultad": 2,
    "pregunta": "A company wants to use AWS CLI to manage resources but wants to avoid embedding long-term credentials in their scripts. What is the BEST practice?",
    "opciones": [
      "Use root account credentials",
      "Create an IAM user and store credentials in the script",
      "Use IAM roles with temporary security credentials",
      "Use access keys without secret keys <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - IAM roles provide temporary security credentials via AWS STS - Credentials rotate automatically, enhancing security - Never use root account credentials for daily tasks - Never hardcode credentials in scripts - Access keys always require secret keys - Best practice: IAM roles with temporary credentials References: IAM Best Practices, AWS CLI Security </details> ---",
    "explicacion_correcta": "Fully managed service to securely control access using users, groups, roles, and identity-based policies.\n\nWhen to use: Implement least privilege, manage MFA, define permissions for humans/apps/services interacting with AWS.\n\nKey differences: IAM manages permissions within one AWS account. Organizations (SCPs) manages boundaries across accounts. Cognito handles app end-user auth.",
    "analisis_distractores": "Explicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_59a934a9dd",
    "materia": "Design High-Performing Architectures",
    "tema": "cloudfront",
    "dificultad": 2,
    "pregunta": "Route 53 - Alias vs CNAME You need to configure DNS for your website example.com (root domain) and www.example.com (subdomain) to point to an Application Load Balancer in us-east-1. What is the correct Route 53 configuration?",
    "opciones": [
      "Create a CNAME record for example.com and another CNAME record for www.example.com, both pointing to the ALB DNS name",
      "Create an A record for example.com with the ALB IP address, and a CNAME record for www.example.com pointing to example.com",
      "Create an Alias record for example.com pointing to the ALB, and a CNAME record for www.example.com pointing to the ALB DNS name",
      "Create Alias records for both example.com and www.example.com pointing to the ALB"
    ],
    "correcta": 2,
    "explicacion": "(or D, both are correct, but C is more common) Explanation: | Record Type | At Root Domain (apex) | For Subdomain | DNS Query Charges | Points to ALB | |-------------|---------------------|---------------|-------------------|---------------| | CNAME | ❌ NOT ALLOWED | ✅ Allowed | Yes | Yes | | Alias | ✅ Allowed | ✅ Allowed | No (free) | Yes | | A | ✅ Allowed | ✅ Allowed | No | No (needs static IP) | For Root Domain (example.com): - Must use Alias record (CNAME not allowed at apex) - Point to ALB, CloudFront, or other AWS resource - Free DNS queries For Subdomain (www.example.com): - Can use either CNAME or Alias - CNAME is traditional choice - Alias is cheaper (no query charges) Why A is Wrong: CNAME cannot be used at the root domain (DNS standard restriction) Exam Trap: Any answer showing CNAME at root = WRONG ---",
    "explicacion_correcta": "Persistent block-level storage volumes attached to EC2 instances. Behave like raw hard drives.\n\nWhen to use: Boot volumes for EC2, database storage, applications requiring consistent low-latency block storage.\n\nKey differences: EBS locked to single AZ. EFS spans multiple AZs and mounts to hundreds of instances. EBS is persistent, Instance Store is ephemeral.",
    "analisis_distractores": "EBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.\n\nALIAS vs CNAME: ALIAS is free, works at apex, resolves to IP. CNAME maps name to name, can't be at apex.\n\nCaching HTTP content → CloudFront. Non-HTTP or static IPs needed → Global Accelerator. Use OAI/OAC to protect S3 origins.",
    "tip": "EBS = Elastic Block Store; one AZ, one instance, persistent. | Route 53 = DNS + ALIAS = Route 53's superpower."
  },
  {
    "id": "saa_59c8253fc5",
    "materia": "Design Secure Architectures",
    "tema": "vpc-endpoint",
    "dificultad": 2,
    "pregunta": "A company wants to share services (like NLB) from one VPC with other VPCs/accounts without VPC peering. Which service enables this?",
    "opciones": [
      "VPC Peering",
      "AWS PrivateLink",
      "Transit Gateway",
      "VPN Connection <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - AWS PrivateLink provides private connectivity to services - Expose services via VPC Endpoint Services - Consumers access via Interface VPC Endpoints - No VPC peering, Internet Gateway, NAT required PrivateLink Architecture: - Provider: Creates Endpoint Service (backed by NLB) - Consumer: Creates Interface VPC Endpoint - Connection: Private, within AWS network Benefits: - Simplified network management - No CIDR overlap issues - Enhanced security (private connectivity) - Scalable (thousands of consumers) Use Cases: - SaaS applications - Shared services - Third-party services - Marketplace applications References: AWS PrivateLink, VPC Endpoint Services </details> ---",
    "explicacion_correcta": "Connect VPC to AWS services privately without Internet Gateway, NAT, VPN, or Direct Connect.\n\nWhen to use: Private subnets must access AWS services without traversing public internet.\n\nKey differences: Gateway Endpoints only for S3 and DynamoDB (route table prefix lists). Interface Endpoints (PrivateLink) for almost all other services (ENI with private IP).",
    "analisis_distractores": "Gateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Gateway for Big Two (S3 & DynamoDB); Interface for the Rest. | Gateway for Big Two (S3 & DynamoDB); Interface for the Rest."
  },
  {
    "id": "saa_5a7f329673",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "AWS Cost Explorer vs Cost and Usage Report (Similar to PT4) A FinOps team needs detailed cost data for custom analysis and wants to query it using Athena. Which AWS service provides this?",
    "opciones": [
      "AWS Cost Explorer with API",
      "AWS Budgets with alerts",
      "Cost and Usage Report (CUR) delivered to S3",
      "AWS Organizations consolidated billing <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: Cost and Usage Report (CUR): CUR: ✅ ├── Granularity: Hourly, daily, monthly ├── Format: CSV, Parquet (Athena-optimized) ├── Delivered to: S3 bucket ├── Query with: Athena, QuickSight, custom tools ✅ ├── Detail level: Line-item (most detailed) └── Use: Custom analysis, chargeback, detailed insights Cost Explorer: ├── Granularity: Daily, monthly ├── Format: Web UI, API (JSON) ├── Query: Pre-built reports, limited customization └── Use: Quick insights, visualization AWS Budgets: ├── Purpose: Set spending thresholds, alerts └── Use: Cost control, not detailed analysis CUR Setup: bash # 1. Create S3 bucket for CUR aws s3 mb s3://my-cur-bucket # 2. Create CUR report aws cur put-report-definition \\ --report-definition '{ \"ReportName\": \"detailed-cost-report\", \"TimeUnit\": \"HOURLY\", \"Format\": \"Parquet\", \"Compression\": \"Parquet\", \"S3Bucket\": \"my-cur-bucket\", \"S3Prefix\": \"cur-reports/\", \"S3Region\": \"us-east-1\", \"AdditionalSchemaElements\": [\"RESOURCES\"], \"ReportVersioning\": \"OVERWRITE_REPORT\" }' # 3. Query with Athena CREATE EXTERNAL TABLE cur_table ( line_item_usage_account_id STRING, line_item_usage_start_date STRING, line_item_product_code STRING, line_item_usage_amount DOUBLE, line_item_unblended_cost DOUBLE ) STORED AS PARQUET LOCATION 's3://my-cur-bucket/cur-reports/'; # Query example SELECT line_item_product_code, SUM(line_item_unblended_cost) as total_cost FROM cur_table WHERE line_item_usage_start_date >= '2026-03-01' GROUP BY line_item_product_code ORDER BY total_cost DESC; Key Concept: CUR = Most detailed cost data, Athena-queryable, custom analysis </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nAthena costs $5/TB scanned. Optimize by partitioning data and using Parquet/ORC columnar format.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Athena = SQL queries on S3, serverless, pay per byte scanned."
  },
  {
    "id": "saa_5b85a90de9",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company needs to ensure all S3 buckets are encrypted and not publicly accessible. Which service can continuously monitor and evaluate compliance?",
    "opciones": [
      "AWS CloudTrail",
      "AWS Config",
      "Amazon GuardDuty",
      "AWS Trusted Advisor <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - AWS Config continuously monitors and records resource configurations - Evaluates compliance against desired configurations - Provides configuration history and change tracking - Automated or manual remediation AWS Config Key Features: Config Rules (Managed and Custom): - s3-bucket-public-read-prohibited - s3-bucket-public-write-prohibited - s3-bucket-server-side-encryption-enabled - encrypted-volumes - required-tags - approved-amis-by-id Config Components:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nMulti-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | RDS: Relational, Replicas for Reads, Multi-AZ for Resilience."
  },
  {
    "id": "saa_5bb79b0ee7",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "lambda",
    "dificultad": 2,
    "pregunta": "A development team wants to share and deploy serverless applications published by AWS and third parties. Which AWS service should they use?",
    "opciones": [
      "AWS Serverless Application Repository",
      "AWS Marketplace",
      "AWS Lambda Layers",
      "AWS CloudFormation StackSets <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - AWS Serverless Application Repository is a managed repository for serverless apps - Allows sharing and deployment of Lambda-based applications - Marketplace is for commercial software, not serverless apps - Lambda Layers are for code sharing, not full applications - CloudFormation StackSets is for multi-account deployments References: AWS Serverless Application Repository, Serverless Deployment </details> ---",
    "explicacion_correcta": "Serverless compute service running code without provisioning/managing servers, auto-scales on demand.\n\nWhen to use: Event-driven architectures, serverless microservices, real-time file processing (S3 triggers), scheduled CRON jobs (EventBridge).\n\nKey differences: EC2 = manage OS, pay for running time. Lambda = abstracted infrastructure, pay for exact execution time. Fargate = serverless containers. Lambda = Function-as-a-Service.",
    "analisis_distractores": "Lambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.",
    "tip": "Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_5d7ee9be0b",
    "materia": "Design Resilient Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "Route 53 Routing Policies - Weighted vs Latency (Similar to PT1) An application has deployments in us-east-1 (70% traffic) and us-west-2 (30% traffic) for A/B testing. Which Route 53 routing policy implements this?",
    "opciones": [
      "Failover routing",
      "Latency-based routing",
      "Weighted routing",
      "Geolocation routing <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: Weighted Routing: Purpose: Control traffic distribution by percentage ✅ ├── Use case: A/B testing, gradual migration, blue/green ├── Example: 70% to us-east-1, 30% to us-west-2 └── User location doesn't matter Configuration: ├── Record 1: Weight 70 → us-east-1 ├── Record 2: Weight 30 → us-west-2 └── Total weight: 100 (can be any total, uses ratio) Comparison: Weighted: ✅ ├── Control: Exact percentage (70/30) ├── Basis: Weight value ├── Use: A/B testing, gradual rollout └── Example: 70% new version, 30% old version Latency-based: ├── Control: Automatic (lowest latency) ├── Basis: User's geographic latency ├── Use: Performance optimization └── Example: EU users → eu-west-1, US users → us-east-1 Failover: ├── Control: Primary/Secondary ├── Basis: Health check status └── Use: Disaster recovery Geolocation: ├── Control: By user's country/continent ├── Basis: Geographic location └── Use: Content localization, compliance Configuration Example: bash # Create weighted record set 1 (70%) aws route53 change-resource-record-sets \\ --hosted-zone-id Z1234567890ABC \\ --change-batch '{ \"Changes\": [{ \"Action\": \"CREATE\", \"ResourceRecordSet\": { \"Name\": \"www.example.com\", \"Type\": \"A\", \"SetIdentifier\": \"US-East-1\", \"Weight\": 70, \"TTL\": 60, \"ResourceRecords\": [{\"Value\": \"1.2.3.4\"}] } }] }' # Create weighted record set 2 (30%) aws route53 change-resource-record-sets \\ --hosted-zone-id Z1234567890ABC \\ --change-batch '{ \"Changes\": [{ \"Action\": \"CREATE\", \"ResourceRecordSet\": { \"Name\": \"www.example.com\", \"Type\": \"A\", \"SetIdentifier\": \"US-West-2\", \"Weight\": 30, \"TTL\": 60, \"ResourceRecords\": [{\"Value\": \"5.6.7.8\"}] } }] }' Key Concept: Weighted routing = Control traffic percentage for A/B testing </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nALIAS vs CNAME: ALIAS is free, works at apex, resolves to IP. CNAME maps name to name, can't be at apex.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Route 53 = DNS + ALIAS = Route 53's superpower."
  },
  {
    "id": "saa_5f2e82f8a6",
    "materia": "Design Resilient Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "CloudWatch Synthetics for Endpoint Monitoring (Similar to PT5) A DevOps team wants to proactively test API endpoint availability every 5 minutes and receive alerts if it returns errors. Which service provides this?",
    "opciones": [
      "CloudWatch Logs with metric filters",
      "CloudWatch Synthetics (Canary)",
      "Route 53 health checks",
      "Lambda function with EventBridge schedule <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: CloudWatch Synthetics: Purpose: Automated endpoint testing (like user) ✅ ├── Canaries: Scheduled scripts that monitor endpoints ├── Frequency: 1 minute to 1 hour ├── Protocols: HTTP/HTTPS, APIs, UI workflows ├── Runtime: Node.js, Python ├── Metrics: Availability, latency, screenshots └── Alerts: CloudWatch Alarms integration ✅ Use Cases: ├── API endpoint monitoring ✅ ├── Website availability testing ├── Broken link checking ├── UI workflow testing (Puppeteer/Selenium) └── Load time monitoring Canary Script Example: javascript // HTTP Canary (monitors API endpoint) const synthetics = require('Synthetics'); const log = require('SyntheticsLogger'); const https = require('https'); exports.handler = async () => { const apiCanaryBlueprint = async function () { const options = { hostname: 'api.example.com', path: '/health', method: 'GET', port: 443 }; const requestBuilder = () => { return new Promise((resolve, reject) => { const req = https.request(options, (res) => { log.info(Status Code: ${res.statusCode}); if (res.statusCode !== 200) { reject(Failed: ${res.statusCode}); // Triggers alarm ❌ } res.on('data', (d) => { resolve(d); // Success ✅ }); }); req.on('error', (error) => { reject(error); }); req.end(); }); }; await requestBuilder(); }; return await apiCanaryBlueprint(); }; Setup: bash # Create Canary aws synthetics create-canary \\ --name api-health-check \\ --runtime-version syn-nodejs-puppeteer-3.9 \\ --artifact-s3-location s3://my-canary-results/ \\ --execution-role-arn arn:aws:iam::123456789012:role/CloudWatchSyntheticsRole \\ --schedule '{ \"Expression\": \"rate(5 minutes)\", \"DurationInSeconds\": 0 }' \\ --code '{ \"Handler\": \"index.handler\", \"S3Bucket\": \"my-canary-scripts\", \"S3Key\": \"api-health-check.zip\" }' # Create alarm on canary failure aws cloudwatch put-metric-alarm \\ --alarm-name api-health-alarm \\ --alarm-description \"Alert if API health check fails\" \\ --metric-name SuccessPercent \\ --namespace CloudWatchSynthetics \\ --statistic Average \\ --period 300 \\ --threshold 90 \\ --comparison-operator LessThanThreshold \\ --evaluation-periods 1 \\ --dimensions Name=CanaryName,Value=api-health-check Comparison: CloudWatch Synthetics: ✅ ├── Purpose-built for endpoint testing ├── Scheduled automated checks ├── Rich metrics and screenshots └── Use: Proactive monitoring ✅ Route 53 Health Checks: ├── Basic HTTP/HTTPS/TCP checks ├── Integrated with DNS failover └── Use: DNS failover, simple checks Lambda + EventBridge: ├── Custom scripting required ├── Manual metric publishing └── Use: Complex custom logic Logs + Metric Filters: ├── Reactive (after event occurs) └── Use: Log-based alerts Key Concept: CloudWatch Synthetics = Automated user-like testing (proactive monitoring) </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | EBS = Elastic Block Store; one AZ, one instance, persistent."
  },
  {
    "id": "saa_5f79d96176",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A data warehouse requires complex analytical queries across petabytes of data. Which AWS database service is MOST appropriate?",
    "opciones": [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon Aurora <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Amazon Redshift is data warehouse service - Columnar storage - Massively parallel processing (MPP) - Petabyte-scale - SQL queries (PostgreSQL-compatible) - Integration with S3, EMR, Glue Redshift Features: - Columnar storage (better compression, faster queries) - Redshift Spectrum (query S3 data directly) - Automatic backups and snapshots - Encryption at rest and in transit - Concurrency Scaling (handle burst queries) - Result caching Redshift vs RDS: - Redshift: Analytics, OLAP, data warehouse - RDS: Transactional, OLTP, operational database Use Cases: - Business intelligence - Historical data analysis - Large-scale analytics - Reporting References: Amazon Redshift, Data Warehousing </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nMulti-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nCommon pattern: optimize S3 data for Athena → use Glue to transform to Parquet/ORC columnar format.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | RDS: Relational, Replicas for Reads, Multi-AZ for Resilience."
  },
  {
    "id": "saa_5f8605a570",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "An application needs consistent performance with baseline CPU and ability to burst above baseline when needed. Which EC2 instance type should be used?",
    "opciones": [
      "M5 (General Purpose)",
      "C5 (Compute Optimized)",
      "T3 (Burstable Performance)",
      "R5 (Memory Optimized) <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - T3/T4g instances are burstable performance instances - Baseline CPU performance with credit system - Accumulate CPU credits when below baseline - Burst above baseline using credits - Cost-effective for variable workloads T3 CPU Credits: - Baseline performance depends on instance size - Earn credits when CPU < baseline - Spend credits when CPU > baseline - Unlimited mode: Can burst beyond credits (additional charges) T3 Instance Types: - t3.nano: 5% baseline - t3.micro: 10% baseline - t3.small: 20% baseline - t3.medium: 20% baseline - t3.large: 30% baseline Use Cases: - Web servers, dev/test - Small databases - Code repositories - Microservices When NOT to use T3: - Sustained high CPU usage - Predictable high performance needs - Use C5/M5 for sustained performance References: T3 Instances, Burstable Performance, CPU Credits </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_5fa81f3a3d",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "Direct Connect Virtual Interfaces (Similar to PT7) A company has a Direct Connect connection and needs to access both VPCs (private subnets) and S3 (public service). Which virtual interfaces are required?",
    "opciones": [
      "Private VIF only",
      "Public VIF only",
      "Both Private VIF and Public VIF",
      "Transit VIF <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: Direct Connect Virtual Interfaces: Private VIF: ├── Access: VPC private subnets via VGW/Transit Gateway ✅ ├── IP range: Private (RFC 1918) ├── Use: EC2, RDS, internal resources └── Example: 10.0.0.0/16 Public VIF: ├── Access: AWS public services (S3, DynamoDB, etc.) ✅ ├── IP range: Public IPs ├── Use: S3, CloudFront, public endpoints └── Must use public IPs (not private) Transit VIF: ├── Access: Multiple VPCs via Transit Gateway ├── Use: Centralized connectivity for many VPCs └── Alternative to multiple Private VIFs Architecture: On-Premises Data Center │ │ Direct Connect │ ├─── Private VIF ────► VGW ────► VPC Private Subnets │ (10.0.0.0/16) │ └─── Public VIF ─────► AWS Public Services (S3, DynamoDB) Why Both VIFs Needed: Requirement: Access VPC + S3 ├── VPC access: Requires Private VIF ✅ └── S3 access: Requires Public VIF ✅ └── S3 has public endpoints only └── Alternative: VPC endpoint (but still in VPC) Solution: Configure both VIFs on same Direct Connect Configuration: bash # Create Private VIF aws directconnect create-private-virtual-interface \\ --connection-id dxcon-12345678 \\ --new-private-virtual-interface '{ \"virtualInterfaceName\": \"PrivateVIF\", \"vlan\": 100, \"asn\": 65000, \"authKey\": \"secret123\", \"amazonAddress\": \"169.254.0.1/30\", \"customerAddress\": \"169.254.0.2/30\", \"virtualGatewayId\": \"vgw-12345678\" }' # Create Public VIF aws directconnect create-public-virtual-interface \\ --connection-id dxcon-12345678 \\ --new-public-virtual-interface '{ \"virtualInterfaceName\": \"PublicVIF\", \"vlan\": 200, \"asn\": 65000, \"authKey\": \"secret456\", \"amazonAddress\": \"203.0.113.1/30\", \"customerAddress\": \"203.0.113.2/30\" }' Key Concept: Private VIF = VPC access; Public VIF = AWS public services (S3, etc.) </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nMulti-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | RDS: Relational, Replicas for Reads, Multi-AZ for Resilience."
  },
  {
    "id": "saa_5faec41704",
    "materia": "general",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A company wants to run EC2 instances with dedicated physical servers for compliance requirements. Which option should be used?",
    "opciones": [
      "Dedicated Instances",
      "Dedicated Hosts",
      "Reserved Instances",
      "Spot Instances <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Dedicated Hosts: Physical server dedicated to your use - Visibility into sockets, cores, host ID - Support for BYOL (Bring Your Own License) - Windows Server, SQL Server - Meet compliance requirements - Most expensive option Dedicated Instances vs Dedicated Hosts: | Feature | Dedicated Instances | Dedicated Hosts | |---------|-------------------|----------------| | Isolation | Instance-level | Physical server | | Visibility | No hardware visibility | Socket/core visibility | | BYOL | Not supported | Supported | | Placement | Automatic | Control placement | | Billing | Per instance | Per host | | Use Case | Compliance (soft requirement) | BYOL, compliance (strict) | Use Cases for Dedicated Hosts: - Server-bound software licenses - Regulatory compliance - Track physical host usage References: Dedicated Hosts, Dedicated Instances, BYOL </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_5fd552ea96",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 1,
    "pregunta": "Which statement about IAM policies is correct?",
    "opciones": [
      "Identity-based policies are attached to resources",
      "Resource-based policies are attached to IAM identities",
      "Identity-based policies define permissions for users, groups, and roles",
      "Resource-based policies cannot specify principals from other accounts <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Identity-based policies: Attached to users, groups, roles (who can do what) - Resource-based policies: Attached to resources like S3, SQS (who can access this resource) - Option A: Incorrect, identity-based policies attach to identities - Option B: Incorrect, resource-based policies attach to resources - Option D: Incorrect, resource-based policies CAN specify cross-account principals Examples: - Identity-based: IAM user policy, role policy - Resource-based: S3 bucket policy, KMS key policy, Lambda function policy References: IAM Policy Types, Identity vs Resource-based Policies </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_60d9cff8b7",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "organizations",
    "dificultad": 2,
    "pregunta": "A company has multiple AWS accounts and wants to get volume discounts and consolidated billing. What should they implement?",
    "opciones": [
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Organizations with consolidated billing",
      "AWS Marketplace <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - AWS Organizations enables consolidated billing - Combines usage across all accounts for volume discounts - Single bill for all accounts - Shared Reserved Instances and Savings Plans - Cost Explorer and Budgets are reporting tools - Marketplace is for purchasing software References: AWS Organizations, Consolidated Billing </details> ---",
    "explicacion_correcta": "Consolidate multiple AWS accounts into one centrally managed organization.\n\nWhen to use: Consolidated billing (volume discounts), central provisioning, governance across departments.\n\nKey differences: SCPs set permission boundaries (preventive). IAM policies grant permissions. Config/CloudTrail are detective.",
    "analisis_distractores": "SCPs don't grant permissions, they only restrict. Root user in member accounts is blocked by default with full deny SCP.\n\nSCPs don't grant permissions, they only restrict. Root user in member accounts is blocked by default with full deny SCP.",
    "tip": "Organizations = SCPs restrict, never grant. | Organizations = SCPs restrict, never grant."
  },
  {
    "id": "saa_6116626428",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "rds",
    "dificultad": 1,
    "pregunta": "A developer accidentally committed AWS access keys to a public GitHub repository. What should be done IMMEDIATELY?",
    "opciones": [
      "Change the password of the IAM user",
      "Delete the GitHub repository",
      "Deactivate and delete the exposed access keys",
      "Enable MFA on the account <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Exposed credentials must be deactivated/deleted immediately - Prevents unauthorized access using compromised keys - Steps: Deactivate keys → Create new keys → Delete old keys → Review CloudTrail - Option A: Passwords are separate from access keys - Option B: Deleting repo doesn't help if already cloned/indexed - Option D: MFA doesn't protect already-exposed keys Incident Response Steps:",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nManagement events enabled by default (90 days free). Data events (S3 uploads, Lambda invocations) NOT enabled by default, extra cost. 15-minute delay.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | CloudTrail = Leaves audit Trail of API activity (Who did what)."
  },
  {
    "id": "saa_620fa5cbc6",
    "materia": "Design High-Performing Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "An application requires shared file storage accessible from multiple EC2 instances across multiple Availability Zones using NFS protocol. Which service should be used?",
    "opciones": [
      "Amazon EBS",
      "Amazon S3",
      "Amazon EFS",
      "Instance Store <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Amazon EFS (Elastic File System) provides: - Shared NFS file system - Multi-AZ access - Automatic scaling - Linux-compatible (NFS v4) - Concurrent access from 1000s of instances Storage Service Comparison: | Service | Protocol | Multi-Instance | Multi-AZ | Use Case | |---------|----------|----------------|----------|----------| | EBS | Block | No (single instance) | No | Databases, boot volumes | | EFS | NFS | Yes | Yes | Shared file storage | | FSx for Windows | SMB | Yes | Yes | Windows file shares | | S3 | HTTP/S | Yes | Yes | Object storage | EFS Performance Modes: - General Purpose: Low latency, most workloads - Max I/O: Higher latency, massive parallel access EFS Throughput Modes: - Bursting: Throughput scales with size - Provisioned: Set throughput independent of size References: Amazon EFS, Shared File Storage </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_62214f2b4c",
    "materia": "Design Secure Architectures",
    "tema": "iam",
    "dificultad": 1,
    "pregunta": "Which of the following statements about Service Control Policies (SCPs) is TRUE?",
    "opciones": [
      "SCPs grant permissions to users and roles",
      "SCPs affect the management account in an AWS Organization",
      "SCPs define maximum permissions for member accounts",
      "SCPs can only be applied to individual accounts, not OUs <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - SCPs define maximum permissions - they act as guardrails - SCPs do NOT grant permissions (A is wrong) - They only restrict what is possible - SCPs do NOT affect the management account (B is wrong) - SCPs can be applied to Organization root, OUs, or accounts (D is wrong) - Effective permissions = IAM policy AND SCP Key SCP Rules: - ❌ Don't grant permissions - ❌ Don't affect management account - ✅ Set maximum permission boundaries - ✅ Can be applied to OUs - ✅ Inherited down the hierarchy References: Service Control Policies, Permission Boundaries </details> ---",
    "explicacion_correcta": "Fully managed service to securely control access using users, groups, roles, and identity-based policies.\n\nWhen to use: Implement least privilege, manage MFA, define permissions for humans/apps/services interacting with AWS.\n\nKey differences: IAM manages permissions within one AWS account. Organizations (SCPs) manages boundaries across accounts. Cognito handles app end-user auth.",
    "analisis_distractores": "Explicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_6257c04e84",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "aws-architect",
    "dificultad": 3,
    "pregunta": "A solutions architect is designing a new hybrid architecture to extend a company s on-premises infrastructure to AWS. The company requires a highly available connection with consistent low latency to an AWS Region. The company needs to minimize costs and is willing to accept slower traffic if the primary connection fails. What should the solutions architect do to meet these requirements?",
    "opciones": [
      "Provision an AWS Direct Connect connection to a Region. Provision a VPN connection as a backup if the primary Direct Connect connection fails.",
      "Provision a VPN tunnel connection to a Region for private connectivity. Provision a second VPN tunnel for private connectivity and as a backup if the primary VPN connection fails.",
      "Provision an AWS Direct Connect connection to a Region. Provision a second Direct Connect connection to the same Region as a backup if the primary Direct Connect connection fails.",
      "Provision an AWS Direct Connect connection to a Region. Use the Direct Connect failover attribute from the AWS CLI to automatically create a backup connection if the primary Direct Connect connection fails."
    ],
    "correcta": 0,
    "explicacion": "Explanation: \"In some cases, this connection alone is not enough. It is always better to guarantee a fallback connection as the backup of DX. There are several options, but implementing it with an AWS Site-To-Site VPN is a real cost-effective solution that can be exploited to reduce costs or, in the meantime, wait for the setup of a second DX.\" https://www.proud2becloud.com/hybrid-cloud-networking-backup-aws-direct-connect-networkconnection-with-aws-site-to-site-vpn/"
  },
  {
    "id": "saa_62799eb866",
    "materia": "Design High-Performing Architectures",
    "tema": "redshift",
    "dificultad": 3,
    "pregunta": "Amazon Redshift AQUA A data analytics company uses Amazon Redshift for large-scale data warehouse queries. They're experiencing performance issues due to high network bandwidth and CPU usage on compute nodes, especially for large table scans. The company wants to improve query performance without significantly increasing infrastructure costs. What's the most effective solution?",
    "opciones": [
      "Increase the number of compute nodes in the Redshift cluster",
      "Enable Amazon Redshift AQUA (Advanced Query Accelerator)",
      "Use Redshift Spectrum to offload queries to S3",
      "Create materialized views for frequently accessed data"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Amazon Redshift AQUA: - Hardware-accelerated cache for Redshift - Processes data at the storage layer (before reaching compute) - Up to 10x faster for scan-intensive queries - Reduces network bandwidth usage - Offloads work from compute nodes How It Works:",
    "explicacion_correcta": "Fully managed petabyte-scale data warehouse for complex OLAP analytics and business intelligence.\n\nWhen to use: Complex analytical queries across large datasets, BI dashboards, data warehousing.\n\nKey differences: Athena = ad-hoc serverless queries on S3. Redshift = provisioned cluster for heavy OLAP, requires data loading.",
    "analisis_distractores": "Redshift Spectrum allows querying S3 data directly without loading. Redshift is NOT for OLTP.\n\nRedshift Spectrum allows querying S3 data directly without loading. Redshift is NOT for OLTP.",
    "tip": "Redshift = Heavy OLAP data warehouse, columnar storage, complex BI queries. | Redshift = Heavy OLAP data warehouse, columnar storage, complex BI queries."
  },
  {
    "id": "saa_627e5bc9c0",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "A company needs to rotate SSL/TLS certificates for their application load balancers automatically. Which service should they use?",
    "opciones": [
      "AWS Certificate Manager (ACM)",
      "AWS Secrets Manager",
      "AWS KMS",
      "IAM Server Certificates <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - AWS Certificate Manager (ACM) provides free SSL/TLS certificates - Automatic renewal (no manual intervention) - Automatic deployment to integrated services - Free for public certificates ACM Features:"
  },
  {
    "id": "saa_62cc91b68d",
    "materia": "Design High-Performing Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "An application uses CloudFront, ALB, EC2, and RDS. Users in a specific region experience slow performance. What is the MOST likely cause and solution?",
    "opciones": [
      "Increase EC2 instance size",
      "Deploy application stack in the user's region with Route 53 latency-based routing",
      "Enable CloudFront compression",
      "Upgrade to Provisioned IOPS for RDS <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Regional deployment reduces latency for local users - Route 53 latency-based routing directs to nearest region - CloudFront caches static content but dynamic content goes to origin - Multi-region deployment needed for dynamic content - Increasing instance size doesn't reduce network latency - Compression helps but doesn't solve regional latency - IOPS doesn't affect network latency References: Multi-Region Architecture, Latency Optimization </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nALIAS vs CNAME: ALIAS is free, works at apex, resolves to IP. CNAME maps name to name, can't be at apex.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_6385d64c37",
    "materia": "general",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A company is migrating a legacy application to AWS but wants to minimize changes. The application uses a specific OS version and custom drivers that aren't compatible with cloud-native services. Which migration strategy is MOST appropriate?",
    "opciones": [
      "Refactor to serverless architecture",
      "Replatform to managed services",
      "Rehost (Lift and Shift) to EC2",
      "Repurchase a SaaS solution <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Rehost (Lift and Shift) moves application as-is - EC2 supports custom OS and drivers - Minimal changes required - Fast migration path - Refactor requires re-architecting - Replatform may not support custom requirements - Repurchase requires finding compatible SaaS References: Migration Strategies, Rehost Pattern </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_63f36b7bfd",
    "materia": "Design Resilient Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "CloudWatch Logs Insights vs Athena (Similar to PT5) A DevOps team needs to query CloudWatch Logs to find all ERROR messages in the last hour. Which tool provides interactive log queries?",
    "opciones": [
      "CloudWatch Logs Insights",
      "Athena querying S3-exported logs",
      "CloudWatch Logs filter patterns",
      "Elasticsearch (OpenSearch) <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: CloudWatch Logs Insights: Purpose: Interactive log analytics ├── Query language: SQL-like syntax ├── Speed: Seconds (not minutes) ├── Cost: $0.005 per GB scanned └── Use: Real-time troubleshooting ✅ Example Query: fields @timestamp, @message | filter @message like /ERROR/ | stats count() by bin(1h) | sort @timestamp desc | limit 100 Comparison: CloudWatch Logs Insights: ✅ ├── Real-time queries (seconds) ├── No setup required ├── SQL-like query language └── Use: Ad-hoc log analysis, troubleshooting Athena + S3: ├── Query exported logs (batch) ├── Setup: Export logs to S3, create table ├── Use: Long-term log analysis, compliance Filter Patterns: ├── Real-time streaming filters ├── Use: Trigger alarms, Lambda, Kinesis └── Not for ad-hoc queries OpenSearch: ├── Full-text search, visualization ├── Setup: Deploy cluster, ingest logs └── Use: Advanced analytics, dashboards Key Concept: Logs Insights = Interactive, real-time log querying (seconds, no setup) </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nMulti-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | RDS: Relational, Replicas for Reads, Multi-AZ for Resilience."
  },
  {
    "id": "saa_64c8abd898",
    "materia": "Design High-Performing Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "On-premises servers connected to us-east-1 via AWS Direct Connect The solution must avoid internet exposure and minimize latency. What architecture should you implement?",
    "opciones": [
      "Set up VPC peering between VPC A and VPC B, configure routing",
      "Use AWS PrivateLink to connect VPCs and on-premises",
      "Set up inter-region VPC peering between VPC A and VPC B, use Direct Connect to VPC B",
      "Copy EFS data to S3 and access via S3 Transfer Acceleration"
    ],
    "correcta": 2,
    "explicacion": "Explanation: Architecture: On-premises --[Direct Connect]--> VPC B (us-east-1) --[Inter-region VPC Peering]--> VPC A (eu-west-1) --[EFS Mount Target] | EC2 instances Configuration Steps:",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nEFS is strictly for Linux (NFS). For Windows servers, choose Amazon FSx for Windows File Server.\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | EFS = Elastic File Share for Linux."
  },
  {
    "id": "saa_669bc9fba9",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "An application running in a VPC needs to connect to AWS services (S3, DynamoDB) without traversing the internet. What should be configured?",
    "opciones": [
      "NAT Gateway",
      "Internet Gateway",
      "VPC Endpoint",
      "VPN Connection <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - VPC Endpoints provide private connectivity to AWS services - Traffic stays within AWS network - No internet gateway or NAT required - Enhanced security and performance VPC Endpoint Types: | Type | Services | Implementation | Cost | |------|----------|----------------|------| | Gateway | S3, DynamoDB | Route table entry | Free | | Interface | Most AWS services | ENI in subnet | Hourly + data | Gateway Endpoint Benefits: - No data transfer charges - Better performance - No internet exposure - Policy control References: VPC Endpoints, Private Connectivity </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Gateway for Big Two (S3 & DynamoDB); Interface for the Rest."
  },
  {
    "id": "saa_66ea69f3b4",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A solutions architect needs to provide an external company temporary access to an S3 bucket for 7 days. What is the BEST approach?",
    "opciones": [
      "Create an IAM user with an access key",
      "Make the S3 bucket public",
      "Create an IAM role and share the assume role credentials",
      "Share the AWS account password <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: IAM roles can be assumed by external entities using trust policies. The external company can assume the role to get temporary credentials. After 7 days, you can remove the role or modify the trust policy. </details> --- ## 🔗 Additional Resources ### AWS Official Documentation - [IAM User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/) - [IAM Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html) - [Policy Reference](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html) - [STS API Reference](https://docs.aws.amazon.com/STS/latest/APIReference/) ### Hands-On Labs",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_66ff7e7b27",
    "materia": "Design Secure Architectures",
    "tema": "aws-architect",
    "dificultad": 1,
    "pregunta": "Which of the following is an AWS responsibility under the Shared Responsibility Model?",
    "opciones": [
      "Patching the operating system on EC2 instances",
      "Encrypting data stored in S3 buckets",
      "Physical security of data centers",
      "Configuring security groups <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: Physical security of data centers is AWS's responsibility (\"Security OF the cloud\"). Options A, B, and D are customer responsibilities (\"Security IN the cloud\"). </details>"
  },
  {
    "id": "saa_6710db0d1e",
    "materia": "Design High-Performing Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company needs to deploy a web application that can handle unpredictable traffic spikes and minimize operational overhead. The application should scale automatically and use a pay-per-use pricing model. Which architecture is MOST appropriate?",
    "opciones": [
      "EC2 instances with Auto Scaling behind an ALB",
      "Serverless architecture with S3, CloudFront, API Gateway, Lambda, and DynamoDB",
      "ECS containers on EC2 instances",
      "EC2 instances with manual scaling <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Serverless architecture automatically scales and is pay-per-use - S3/CloudFront for static content - API Gateway/Lambda for compute (scales automatically) - DynamoDB for database (on-demand capacity) - Zero operational overhead for infrastructure - Option A requires some management and continuous costs - Option C requires container orchestration - Option D requires manual intervention References: Serverless Architecture, Auto Scaling </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nDefault termination policy: most instances in AZ → oldest launch template → closest to billing hour. Enable scale-in protection for stateful workloads.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_671369dde9",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 1,
    "pregunta": "A Lambda function needs to access DynamoDB tables. What is the correct way to grant permissions?",
    "opciones": [
      "Create an IAM user for the Lambda function",
      "Create an IAM execution role for the Lambda function",
      "Add permissions directly to the Lambda function",
      "Use resource-based policy on DynamoDB <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Lambda execution role defines what the function can access - Role is assumed by Lambda service when function executes - Attach policies to role (e.g., AmazonDynamoDBFullAccess or custom policy) - Option A: Lambda functions cannot use IAM users - Option C: No such mechanism, must use IAM roles - Option D: DynamoDB doesn't have resource-based policies like S3 Lambda Execution Role Policy Example: json { \"Version\": \"2012-10-17\", \"Statement\": [ { \"Effect\": \"Allow\", \"Action\": [ \"dynamodb:PutItem\", \"dynamodb:GetItem\", \"dynamodb:Query\" ], \"Resource\": \"arn:aws:dynamodb:us-east-1:123456789012:table/MyTable\" } ] } References: Lambda Execution Roles, Service Roles </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_677d3dc35b",
    "materia": "general",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A company wants to migrate an on-premises Microsoft SQL Server database to AWS. They want to minimize management overhead and maintain compatibility. Which target should they choose?",
    "opciones": [
      "Amazon RDS for SQL Server",
      "Microsoft SQL Server on EC2",
      "Amazon Aurora PostgreSQL",
      "Amazon DynamoDB <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - RDS for SQL Server is managed service (minimal overhead) - Maintains SQL Server compatibility - This is a \"Replatform\" strategy - Option B requires managing EC2 and OS (more overhead) - Option C requires heterogeneous migration and code changes - Option D is NoSQL, requires application re-architecture References: AWS RDS, Replatform Strategy </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_67e324bf5d",
    "materia": "Design High-Performing Architectures",
    "tema": "s3",
    "dificultad": 3,
    "pregunta": "ECS Deployment on AWS Outposts (Similar to PT5-Q8) A manufacturing company needs to run containerized applications on-premises due to latency requirements (< 5ms) for IoT sensors. The applications must use AWS services and management tools. The company has deployed AWS Outposts in their data center. Which ECS deployment option should be used?",
    "opciones": [
      "ECS on EC2 launch type with Local Zones",
      "ECS on EC2 launch type on AWS Outposts",
      "ECS on Fargate with Outposts",
      "ECS Anywhere with external instances <details> <summary>✅ Click to reveal answer</summary> Key Concept: Outposts = AWS rack on-premises = ECS on EC2 (not Fargate) </details> ---"
    ],
    "correcta": 1,
    "explicacion": "Explanation: ECS Deployment Options for On-Premises: AWS Outposts (AWS infrastructure on-premises): ├── Supported: ECS on EC2 ✅ │ ├── EC2 instances run on Outpost rack │ ├── Control plane in AWS region │ ├── Data plane (containers) on-premises │ └── Sub-millisecond latency to local devices │ ├── Not Supported: ECS on Fargate ❌ │ └── Fargate not available on Outposts │ └── AWS Services Available: ├── ECS, EC2, EBS, S3 on Outposts └── RDS, ElastiCache (select services) ECS Anywhere (Non-AWS infrastructure): ├── Supported: Customer-managed servers ✅ │ ├── On-premises servers (not Outposts) │ ├── Other cloud providers │ └── Edge locations │ └── Requires: SSM agent installation Local Zones (AWS infrastructure in metro areas): ├── Supported: ECS on EC2 ✅ ├── Supported: ECS on Fargate ✅ ├── Latency: Single-digit milliseconds └── Use case: Ultra-low latency to users in specific cities Architecture: On-Premises Data Center ├── AWS Outposts Rack │ ├── EC2 Instances (ECS Container Instances) │ │ ├── ECS Agent │ │ └── Docker containers running applications │ ├── EBS Volumes (local storage) │ └── S3 on Outposts (local object storage) │ ├── IoT Sensors │ └── < 5ms latency to containers ✅ │ └── Network Connection to AWS Region ├── ECS Control Plane (managed in region) ├── CloudWatch Logs └── ECR (container images) Why others are wrong:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nMulti-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | RDS: Relational, Replicas for Reads, Multi-AZ for Resilience."
  },
  {
    "id": "saa_680dc4daa2",
    "materia": "Design High-Performing Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "An application requires 15 milliseconds or less of latency for users in a specific metropolitan area. Which AWS infrastructure component should be used?",
    "opciones": [
      "AWS Region",
      "Availability Zone",
      "AWS Local Zone",
      "AWS Wavelength Zone <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - AWS Local Zones bring compute, storage, and database closer to end-users - Designed for single-digit millisecond latency requirements - Placed in metropolitan areas for ultra-low latency applications - Wavelength Zones are for 5G edge computing - Regular Regions/AZs may not meet ultra-low latency requirements References: AWS Local Zones, Global Infrastructure </details> ---"
  },
  {
    "id": "saa_695f47453b",
    "materia": "Design Secure Architectures",
    "tema": "cloudfront",
    "dificultad": 2,
    "pregunta": "A web application needs protection against common web exploits like SQL injection and cross-site scripting (XSS). Which AWS service provides this protection?",
    "opciones": [
      "AWS Shield",
      "AWS WAF",
      "Security Groups",
      "Network ACLs <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - AWS WAF (Web Application Firewall) protects against common web exploits - Filters HTTP/HTTPS requests based on rules - Integrates with CloudFront, ALB, API Gateway, AppSync - Managed rules and custom rules AWS WAF Capabilities:",
    "explicacion_correcta": "Web application firewall that protects web applications from common exploits (SQL injection, XSS).\n\nWhen to use: Protecting applications behind CloudFront, ALB, or API Gateway from OWASP top 10 threats.\n\nKey differences: WAF operates at Layer 7 (HTTP/HTTPS). Shield protects against DDoS (Layer 3/4). GuardDuty detects threats intelligently.",
    "analisis_distractores": "WAF for app-level attacks (SQLi, XSS). Shield for DDoS. Don't confuse them.\n\nWAF for app-level attacks (SQLi, XSS). Shield for DDoS. Don't confuse them.\n\nCaching HTTP content → CloudFront. Non-HTTP or static IPs needed → Global Accelerator. Use OAI/OAC to protect S3 origins.",
    "tip": "WAF = Web Application Filter (Layer 7 rules). | WAF = Web Application Filter (Layer 7 rules)."
  },
  {
    "id": "saa_698441f695",
    "materia": "Design Resilient Architectures",
    "tema": "aws-architect",
    "dificultad": 1,
    "pregunta": "A company needs to route traffic between multiple VPCs in different AWS accounts. What is the MOST scalable solution?",
    "opciones": [
      "VPC Peering between all VPCs",
      "AWS Transit Gateway",
      "Multiple VPN connections",
      "Internet Gateway <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - AWS Transit Gateway is central hub for VPCs - Connects multiple VPCs, on-premises networks - Simplifies network topology - Scalable (up to 5000 VPCs) Transit Gateway vs VPC Peering: | Feature | Transit Gateway | VPC Peering | |---------|----------------|-------------| | Topology | Hub-and-spoke | Mesh (1-to-1) | | Scalability | Thousands of VPCs | Limited | | Routing | Centralized | Per peering | | Cost | Higher | Lower (small scale) | | Cross-Region | Yes | Yes | Peering Limitations: - Non-transitive (must peer each VPC) - Complex with many VPCs (N*(N-1)/2 connections) References: AWS Transit Gateway, VPC Connectivity </details> ---",
    "explicacion_correcta": "Connect VPC to AWS services privately without Internet Gateway, NAT, VPN, or Direct Connect.\n\nWhen to use: Private subnets must access AWS services without traversing public internet.\n\nKey differences: Gateway Endpoints only for S3 and DynamoDB (route table prefix lists). Interface Endpoints (PrivateLink) for almost all other services (ENI with private IP).",
    "analisis_distractores": "Gateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Gateway for Big Two (S3 & DynamoDB); Interface for the Rest."
  },
  {
    "id": "saa_69c89b4a6d",
    "materia": "Design Secure Architectures",
    "tema": "kms",
    "dificultad": 1,
    "pregunta": "What is the difference between Shield Standard and Shield Advanced?",
    "opciones": [
      "Standard is free, Advanced costs $3,000/month",
      "Standard for CloudFront only, Advanced for all services",
      "Standard for layer 3/4, Advanced for layer 7",
      "No difference"
    ],
    "correcta": 0,
    "explicacion": "--- ## Hands-On Labs ### Lab 1: KMS Encryption",
    "explicacion_correcta": "Managed service to create, store, and control cryptographic keys for encrypting data at rest and in transit.\n\nWhen to use: Encrypting data in S3, RDS, EBS, DynamoDB. Centralized auditing of key usage via CloudTrail.\n\nKey differences: Handles symmetric/asymmetric/HMAC keys up to 4KB; larger data uses envelope encryption. CloudHSM is single-tenant FIPS 140-2 Level 3.",
    "analisis_distractores": "Cannot enable encryption on existing RDS/EBS directly. Must snapshot → copy with encryption → restore.",
    "tip": "KMS = Keeps Master Secrets safe."
  },
  {
    "id": "saa_6a52487ca4",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "s3",
    "dificultad": 3,
    "pregunta": "AWS DataSync for EFS Cross-Region Transfer (Similar to PT7-Q4) A company is migrating an application from us-west-1 to eu-west-2. The application uses Amazon EFS with 50 TB of data. The architect needs a solution to transfer all EFS data to a new EFS file system in eu-west-2 with minimal operational overhead. Which solution is most appropriate?",
    "opciones": [
      "Use AWS Snowball Edge to export EFS data, ship to eu-west-2, import to new EFS",
      "Set up S3 Cross-Region Replication as intermediate storage",
      "Use AWS DataSync to transfer directly from source EFS to destination EFS",
      "Write custom script using rsync over VPN between regions <details> <summary>✅ Click to reveal answer</summary> Key Concept: DataSync = Automated, validated, encrypted EFS-to-EFS cross-region transfer </details> ---"
    ],
    "correcta": 2,
    "explicacion": "Explanation: AWS DataSync - Purpose-Built Data Transfer: AWS DataSync Features: ├── Supports: │ ├── EFS → EFS (same/cross-region) ✅ │ ├── EFS → S3 │ ├── S3 → EFS │ ├── On-premises → AWS │ └── FSx → FSx │ ├── Benefits: │ ├── Automated transfer (no scripting) │ ├── Incremental transfers │ ├── Data integrity validation │ ├── Encryption in transit (TLS) │ ├── Bandwidth throttling │ └── Scheduling capabilities │ └── Performance: └── Up to 10 Gbps per task Architecture: Source Region (us-west-1): ├── EFS File System (fs-abc123) │ └── 50 TB data │ └── DataSync Task ├── Source Location: EFS fs-abc123 ├── Destination Location: EFS fs-xyz789 (eu-west-2) ├── Transfer over AWS private network ✅ └── No internet traversal Destination Region (eu-west-2): ├── EFS File System (fs-xyz789) │ └── Receives 50 TB data │ └── DataSync Agent (not required for EFS-to-EFS) Implementation: Step 1: Create Source Location bash aws datasync create-location-efs \\ --efs-filesystem-arn arn:aws:elasticfilesystem:us-west-1:123456789012:file-system/fs-abc123 \\ --ec2-config SubnetArn=arn:aws:ec2:us-west-1:123456789012:subnet/subnet-12345678,SecurityGroupArns=arn:aws:ec2:us-west-1:123456789012:security-group/sg-12345678 \\ --region us-west-1 Step 2: Create Destination Location bash aws datasync create-location-efs \\ --efs-filesystem-arn arn:aws:elasticfilesystem:eu-west-2:123456789012:file-system/fs-xyz789 \\ --ec2-config SubnetArn=arn:aws:ec2:eu-west-2:123456789012:subnet/subnet-87654321,SecurityGroupArns=arn:aws:ec2:eu-west-2:123456789012:security-group/sg-87654321 \\ --region eu-west-2 Step 3: Create DataSync Task bash aws datasync create-task \\ --source-location-arn arn:aws:datasync:us-west-1:123456789012:location/loc-source123 \\ --destination-location-arn arn:aws:datasync:eu-west-2:123456789012:location/loc-dest456 \\ --name \"EFS-Migration-Task\" \\ --options '{ \"VerifyMode\": \"POINT_IN_TIME_CONSISTENT\", \"OverwriteMode\": \"ALWAYS\", \"TransferMode\": \"CHANGED\", \"PreserveDeletedFiles\": \"REMOVE\" }' \\ --region us-west-1 Step 4: Execute Task bash aws datasync start-task-execution \\ --task-arn arn:aws:datasync:us-west-1:123456789012:task/task-123abc Transfer Performance: 50 TB Transfer Estimation: ├── Bandwidth: 10 Gbps (DataSync max per task) ├── Effective throughput: ~1 GB/s (8 Gbps realistic) ├── Time: 50,000 GB ÷ 1 GB/s = ~13.9 hours └── Cost: Data Transfer Out us-west-1: $0.02/GB × 50,000 GB = $1,000 DataSync Task Options: yaml Options: VerifyMode: POINT_IN_TIME_CONSISTENT # Validates data integrity OverwriteMode: ALWAYS # Overwrites files if exists in destination TransferMode: CHANGED # Only transfers modified files (incremental) PreserveDeletedFiles: REMOVE # Deletes files in destination if deleted in source TaskQueueing: ENABLED # Queue tasks if another is running LogLevel: TRANSFER # Logging detail level Monitoring: bash # Check task execution status aws datasync describe-task-execution \\ --task-execution-arn arn:aws:datasync:us-west-1:123456789012:task/task-123abc/execution/exec-456def # Output includes: # - FilesTransferred # - BytesTransferred # - Status (LAUNCHING, PREPARING, TRANSFERRING, VERIFYING, SUCCESS) # - Estimated time remaining Why others are wrong:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nEFS is strictly for Linux (NFS). For Windows servers, choose Amazon FSx for Windows File Server.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_6b19e248cf",
    "materia": "Design Resilient Architectures",
    "tema": "auto-scaling",
    "dificultad": 2,
    "pregunta": "A solutions architect is designing a highly available application that must survive the failure of an entire Availability Zone. The RTO requirement is less than 5 minutes. Which pattern should be implemented?",
    "opciones": [
      "Single AZ deployment with automated backups",
      "Multi-AZ deployment with Auto Scaling and Application Load Balancer",
      "Cross-region replication with manual failover",
      "Single region with daily snapshots <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Multi-AZ deployment provides automatic failover - ALB distributes traffic across AZs and health checks instances - Auto Scaling replaces failed instances automatically - Meets < 5 minute RTO requirement - Option A doesn't protect against AZ failure - Option C has longer RTO (manual failover) - Option D doesn't provide HA References: Multi-AZ Architecture, High Availability </details> ---",
    "explicacion_correcta": "Automatically adds/removes EC2 instances for horizontal scaling and elasticity.\n\nWhen to use: Maintain performance during traffic spikes, reduce costs by terminating instances when demand drops.\n\nKey differences: Horizontal scaling (more instances) vs vertical scaling (bigger instance). Uses dynamic scaling policies like Target Tracking.",
    "analisis_distractores": "Default termination policy: most instances in AZ → oldest launch template → closest to billing hour. Enable scale-in protection for stateful workloads.\n\nMulti-AZ is for resilience, NOT read scaling. Converting Single-AZ to Multi-AZ is zero-downtime.",
    "tip": "ASG = Automatically Sizes Groups horizontally. | Multi-AZ = Automatic Zero-data-loss standby (DR, not reads)."
  },
  {
    "id": "saa_6b741a8cbe",
    "materia": "Design Resilient Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "An application running on Lambda is invoked by S3 events. During peak times, thousands of files are uploaded simultaneously. How should Lambda handle this?",
    "opciones": [
      "Increase Lambda memory",
      "Enable Lambda reserved concurrency",
      "Lambda automatically scales concurrently",
      "Use Step Functions <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Lambda automatically scales to handle concurrent invocations - Each S3 event triggers separate Lambda invocation - Default account concurrency: 1000 (can request increase) - No configuration needed for basic scaling Lambda Concurrency Types: - Account concurrency: Total concurrent executions across all functions (1000 default) - Reserved concurrency: Dedicated concurrency for specific function - Provisioned concurrency: Pre-initialized instances (reduce cold starts) When to use Reserved Concurrency: - Limit function concurrency (prevent overwhelming downstream) - Guarantee concurrency for critical functions - Prevent one function from consuming all account concurrency Example Scenario: - 1000 files uploaded to S3 - Lambda invoked 1000 times concurrently (within account limits) - If account limit is 1000, all execute immediately - If limit exceeded, some invocations throttled (429 error) References: Lambda Concurrency, Automatic Scaling </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_6b8e4b9bdc",
    "materia": "Design Resilient Architectures",
    "tema": "rds",
    "dificultad": 1,
    "pregunta": "An RDS database needs to handle increased read traffic. Write traffic is low. What is the MOST cost-effective solution?",
    "opciones": [
      "Upgrade to larger instance",
      "Enable RDS Multi-AZ",
      "Create RDS Read Replicas",
      "Use ElastiCache <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - RDS Read Replicas: - Asynchronous replication - Offload read traffic from primary - Up to 15 replicas (Aurora) - Same region or cross-region - Can be promoted to standalone Read Replica Use Cases: - Read-heavy workloads - Reporting/analytics (separate from production) - Cross-region disaster recovery (promotion) - Read scaling Benefits: - Cost-effective scaling for reads - No impact on primary instance - Can use different instance types Replication Lag: Monitor with CloudWatch metric References: RDS Read Replicas, Read Scaling </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nAurora storage auto-scales in 10GB increments up to 128TB. No need for read replicas for HA (6 copies already).\n\nRead Replicas don't failover automatically (manual promotion). Cross-region incurs data transfer fees; same-region is free.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Aurora = 6 copies, 3 AZs, self-healing, no manual HA setup."
  },
  {
    "id": "saa_6bc164b9f5",
    "materia": "Design Secure Architectures",
    "tema": "iam",
    "dificultad": 2,
    "pregunta": "CloudTrail Lake Your compliance team needs to query 5 years of AWS API activity logs across 50 AWS accounts and 10 regions for audit reports. They need to run complex queries like \"Show all IAM policy changes by user X in the last 3 years.\" What's the most efficient solution?",
    "opciones": [
      "Store CloudTrail logs in S3 and use Amazon Athena to query",
      "Use CloudTrail Event History (90-day retention)",
      "Enable CloudTrail Lake and run SQL queries",
      "Export logs to CloudWatch Logs Insights"
    ],
    "correcta": 2,
    "explicacion": "Explanation: CloudTrail Lake: - Managed data lake for CloudTrail events - SQL-based querying (not just log searching) - Long-term retention (up to 7 years) - Multi-account, multi-region aggregation - Serverless (no infrastructure to manage) Example Query: sql SELECT userIdentity.principalId, eventName, eventTime, sourceIPAddress FROM cloudtrail_events WHERE eventName IN ('PutUserPolicy', 'PutRolePolicy', 'AttachUserPolicy') AND eventTime >= '2023-01-01' AND eventTime <= '2025-12-31' AND userIdentity.principalId LIKE '%user-x%' ORDER BY eventTime DESC How to Use:",
    "explicacion_correcta": "Fully managed service to securely control access using users, groups, roles, and identity-based policies.\n\nWhen to use: Implement least privilege, manage MFA, define permissions for humans/apps/services interacting with AWS.\n\nKey differences: IAM manages permissions within one AWS account. Organizations (SCPs) manages boundaries across accounts. Cognito handles app end-user auth.",
    "analisis_distractores": "Explicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.\n\nManagement events enabled by default (90 days free). Data events (S3 uploads, Lambda invocations) NOT enabled by default, extra cost. 15-minute delay.",
    "tip": "IAM = I Am Managing who can do what. | CloudTrail = Leaves audit Trail of API activity (Who did what)."
  },
  {
    "id": "saa_6bf069e2df",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "aws-architect",
    "dificultad": 1,
    "pregunta": "A company wants to migrate an on-premises Oracle database to AWS with minimal downtime. Which service should be used?",
    "opciones": [
      "AWS Database Migration Service (DMS)",
      "AWS DataSync",
      "AWS Snowball",
      "Manual export/import <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - AWS DMS (Database Migration Service): - Migrate databases with minimal downtime - Source database remains operational - Supports homogeneous and heterogeneous migrations - Continuous data replication DMS Migration Types:"
  },
  {
    "id": "saa_6cfe88fb1f",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company wants to detect when S3 buckets contain sensitive personally identifiable information (PII). Which service should be used?",
    "opciones": [
      "Amazon GuardDuty",
      "Amazon Macie",
      "AWS Config",
      "Amazon Inspector <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Amazon Macie is data security service that discovers and protects sensitive data - Uses machine learning to identify PII, financial data, credentials - Automated S3 bucket inventory and classification - Continuous monitoring and alerts Macie Capabilities: Data Discovery: - Credit card numbers - Social security numbers - Passport numbers - Driver's license numbers - Bank account numbers - Personal health information - Authentication credentials Macie Features:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization."
  },
  {
    "id": "saa_6d34426052",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A solutions architect needs to store sensitive configuration data like database passwords that can be accessed by EC2 instances and Lambda functions. The solution must support encryption and version history. Which service should be used?",
    "opciones": [
      "AWS Secrets Manager",
      "AWS Systems Manager Parameter Store",
      "Amazon S3 with versioning",
      "AWS Config <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Parameter Store securely stores configuration data and secrets - Supports encryption with KMS - Maintains version history - Integrates with EC2, Lambda, CloudFormation - Secrets Manager is also valid but more expensive (includes auto-rotation) - For exam context, Parameter Store is part of Systems Manager - S3 isn't designed for configuration management - Config is for compliance tracking References: Systems Manager Parameter Store, Secrets Management </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nMulti-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | RDS: Relational, Replicas for Reads, Multi-AZ for Resilience."
  },
  {
    "id": "saa_6f10c9a018",
    "materia": "general",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company needs to process streaming data in real-time using SQL queries and send alerts when certain thresholds are exceeded. Which service should be used?",
    "opciones": [
      "Amazon Athena",
      "Amazon Kinesis Data Analytics",
      "Amazon Kinesis Data Firehose",
      "AWS Glue <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Kinesis Data Analytics processes streaming data with SQL - Real-time analytics on streaming data - Can send results to Lambda for alerts - Athena queries static data in S3 - Firehose loads data but doesn't analyze - Glue is for ETL jobs References: Kinesis Data Analytics, Stream Processing </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCommon pattern: optimize S3 data for Athena → use Glue to transform to Parquet/ORC columnar format.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Glue = The glue that sticks raw data to analytics tools."
  },
  {
    "id": "saa_6f9b8e41ef",
    "materia": "general",
    "tema": "s3",
    "dificultad": 3,
    "pregunta": "S3 Multipart Upload for Large Files (Similar to PT3) A data analytics company needs to upload 10 TB video files to S3. Some files are 500 GB each. The uploads frequently fail after 3-4 hours due to network interruptions. The architect needs a reliable solution that can resume failed uploads without restarting from the beginning. What should the architect implement?",
    "opciones": [
      "Use AWS CLI aws s3 cp command with automatic retries",
      "Implement S3 Multipart Upload with parts of 100 MB each",
      "Use AWS DataSync for large file transfers",
      "Enable S3 Transfer Acceleration for faster uploads <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: S3 Multipart Upload Benefits: Single Large File: 500 GB ├── Standard Upload ❌ │ ├── Single HTTP PUT request │ ├── If fails at 99%, restart entire upload │ └── Maximum file size: 5 GB (API limit) │ └── Multipart Upload ✅ ├── Split into parts: 5,000 parts × 100 MB = 500 GB ├── Upload parts independently and in parallel ├── If part fails, retry only that part ├── Resume from last successful part └── Maximum file size: 5 TB Multipart Upload Workflow:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization."
  },
  {
    "id": "saa_708b94c12a",
    "materia": "Design Resilient Architectures",
    "tema": "rds",
    "dificultad": 3,
    "pregunta": "A company hosts an application on AWS Lambda functions mat are invoked by an Amazon API Gateway API. The Lambda functions save customer data to an Amazon Aurora MySQL database. Whenever the company upgrades the database, the Lambda functions fail to establish database connections until the upgrade is complete. The result is that customer data Is not recorded for some of the event. A solutions architect needs to design a solution that stores customer data that is created during database upgrades. Which solution will meet these requirements?",
    "opciones": [
      "Provision an Amazon RDS proxy to sit between the Lambda functions and the database. Configure the Lambda functions to connect to the RDS proxy.",
      "Increase the run time of me Lambda functions to the maximum. Create a retry mechanism in the code that stores the customer data in the database.",
      "Persist the customer data to Lambda local storage. Configure new Lambda functions to scan the local storage to save the customer data to the database.",
      "Store the customer data m an Amazon Simple Queue Service (Amazon SOS) FIFO queue. Create a new Lambda function that polls the queue and stores the customer data in the database."
    ],
    "correcta": 3,
    "explicacion": "Explanation: https://www.learnaws.org/2020/12/13/aws-rds-proxy-deep-dive/ RDS proxy can improve application availability in such a situation by waiting for the new database instance to be functional and maintaining any requests received from the application during this time. The end result is that the application is more resilient to issues with the underlying database. This will enable solution to hold data till the time DB comes back to normal. RDS proxy is to optimally utilize the connection between Lambda and DB. Lambda can open multiple connection concurrently which can be taxing on DB compute resources, hence RDS proxy was introduced to manage and leverage these connections efficiently.",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nAurora Global Database for cross-region replication with <1s latency. Aurora Multi-Master for write scaling.\n\nAurora storage auto-scales in 10GB increments up to 128TB. No need for read replicas for HA (6 copies already).",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Aurora = Fastest cloud-native RDS, 5x MySQL, 3x PostgreSQL."
  },
  {
    "id": "saa_70a4584b14",
    "materia": "Design Resilient Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "NAT Gateway Placement Your company has EC2 instances in three Availability Zones in us-east-1 that need internet access. Currently, all instances use a single NAT Gateway in us-east-1a. You notice high data transfer costs on your AWS bill. How can you reduce costs?",
    "opciones": [
      "Replace NAT Gateway with NAT Instance",
      "Use Internet Gateway directly",
      "Deploy one Public NAT Gateway per AZ where you have instances",
      "Use a single NAT Gateway but in a different AZ Best Practice: One NAT Gateway per AZ for high-traffic workloads ---"
    ],
    "correcta": 2,
    "explicacion": "Explanation: Problem: Cross-AZ Data Transfer Charges Current Setup: AZ-A: NAT Gateway ($0.045/GB processed) AZ-B: EC2 instances --> Cross-AZ to NAT Gateway ($0.01/GB) AZ-C: EC2 instances --> Cross-AZ to NAT Gateway ($0.01/GB) Optimized Setup: AZ-A: NAT Gateway + EC2 instances (Same-AZ, no data transfer charge) AZ-B: NAT Gateway + EC2 instances (Same-AZ, no data transfer charge) AZ-C: NAT Gateway + EC2 instances (Same-AZ, no data transfer charge) Cost Analysis: | Setup | NAT Gateway Hourly | Data Processing | Cross-AZ Transfer | |-------|-------------------|-----------------|-------------------| | 1 NAT (Current) | $0.045 | $0.045/GB | $0.01/GB (2 AZs) | | 3 NATs (Optimized) | $0.135 | $0.045/GB | $0 | Break-Even: If you transfer > ~100 GB/month across AZs, multiple NAT Gateways are cheaper Why This Saves Money: - ✅ Eliminates cross-AZ data transfer charges ($0.01/GB) - ✅ Improved fault tolerance (AZ failure doesn't affect others) - ✅ Lower latency (traffic stays in same AZ) Why Not Others: - A (NAT Instance): Less reliable; requires management - B (Internet Gateway): Instances in private subnets can't use IGW directly",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nSingle NAT Gateway is AZ-resilient only. For full regional HA → deploy NAT Gateway in each AZ. Must be in public subnet.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | NAT Gateway = Needs A public subnet To function, one per AZ for HA."
  },
  {
    "id": "saa_718a2ec3ce",
    "materia": "Design High-Performing Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "A team needs a managed, scalable Apache Cassandra-compatible database for their application. Which AWS service should they use?",
    "opciones": [
      "Amazon Keyspaces",
      "Amazon DynamoDB",
      "Amazon RDS for PostgreSQL",
      "Amazon Aurora <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - Amazon Keyspaces is a managed Cassandra-compatible database - Supports Cassandra Query Language (CQL) - DynamoDB is NoSQL but not Cassandra-compatible - RDS and Aurora are relational databases References: Amazon Keyspaces, Managed Cassandra </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nAurora storage auto-scales in 10GB increments up to 128TB. No need for read replicas for HA (6 copies already).\n\nReduce latency to microseconds → DAX (DynamoDB Accelerator). Active-active multi-region → Global Tables. Unpredictable workloads → On-Demand capacity.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Aurora = 6 copies, 3 AZs, self-healing, no manual HA setup."
  },
  {
    "id": "saa_71d3d6a272",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "rds",
    "dificultad": 3,
    "pregunta": "A company recently started using Amazon Aurora as the data store for its global ecommerce application. When large reports are run developers report that the ecommerce application is performing poorly After reviewing metrics in Amazon CloudWatch, a solutions architect finds that the ReadlOPS and CPUUtilization metrics are spiking when monthly reports run. What is the MOST cost-effective solution?",
    "opciones": [
      "Migrate the monthly reporting to Amazon Redshift.",
      "Migrate the monthly reporting to an Aurora Replica",
      "Migrate the Aurora database to a larger instance class",
      "Increase the Provisioned IOPS on the Aurora instance"
    ],
    "correcta": 1,
    "explicacion": "Explanation: https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Replication.html #Aurora.Replication.Replicas Aurora Replicas have two main purposes. You can issue queries to them to scale the read operations for your application. You typically do so by connecting to the reader endpoint of the cluster. That way, Aurora can spread the load for read-only connections across as many Aurora Replicas as you have in the cluster. Aurora Replicas also help to increase availability. If the writer instance in a cluster becomes unavailable, Aurora automatically promotes one of the reader instances to take its place as the new writer. https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.html Get Latest & Actual SAA-C03 Exam's Question and Answers from Lead2pass. https://www.lead2pass.com 7 ★ Instant Download ★ PDF And VCE ★ 100% Passing Guarantee ★ 100% Money Back Guarantee",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nAurora Global Database for cross-region replication with <1s latency. Aurora Multi-Master for write scaling.\n\nAurora storage auto-scales in 10GB increments up to 128TB. No need for read replicas for HA (6 copies already).",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Aurora = Fastest cloud-native RDS, 5x MySQL, 3x PostgreSQL."
  },
  {
    "id": "saa_73308d6850",
    "materia": "Design Secure Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "According to the AWS Shared Responsibility Model, who is responsible for patching the underlying hypervisor for EC2 instances?",
    "opciones": [
      "Customer",
      "AWS",
      "Both AWS and Customer",
      "Third-party vendors <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - AWS manages the hypervisor layer (security OF the cloud) - Customers manage guest OS patches (security IN the cloud) - Hypervisor is infrastructure, AWS's responsibility - Customer patches OS, applications, data encryption References: AWS Shared Responsibility Model - EC2 </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_73686ecd47",
    "materia": "Design Resilient Architectures",
    "tema": "s3",
    "dificultad": 3,
    "pregunta": "CloudFront ACM Certificate Region (Similar to PT2) A web application team wants to use their custom domain app.company.com with a CloudFront distribution for HTTPS traffic. They need to request an SSL/TLS certificate from AWS Certificate Manager (ACM). In which AWS region must the ACM certificate be requested?",
    "opciones": [
      "The same region as the S3 origin bucket",
      "Any region where CloudFront has an edge location",
      "us-east-1 (N. Virginia) only",
      "The region closest to the majority of users <details> <summary>✅ Click to reveal answer</summary> Key Concept: CloudFront = Global service = us-east-1 certificate ALWAYS </details> ---"
    ],
    "correcta": 2,
    "explicacion": "Explanation: CRITICAL RULE - MEMORIZE THIS: ╔════════════════════════════════════════════════╗ ║ CloudFront + ACM Certificate ║ ║ MUST be in us-east-1 (N. Virginia) ONLY ║ ║ ║ ║ ✅ us-east-1 (ONLY this region works) ║ ║ ❌ Any other region = WILL NOT WORK ║ ╚════════════════════════════════════════════════╝ Why us-east-1 Only? - CloudFront is a global service with control plane in us-east-1 - All CloudFront distributions reference certificates from us-east-1 - Edge locations worldwide pull certificate configuration from us-east-1 Regional vs Global Service Certificates: | Service | Type | Certificate Region | |---------|------|-------------------| | CloudFront | Global | ✅ us-east-1 ONLY | | API Gateway (Edge-Optimized) | Global | ✅ us-east-1 ONLY | | Application Load Balancer | Regional | ✅ Same region as ALB | | API Gateway (Regional) | Regional | ✅ Same region as API | Complete Setup: bash # Step 1: Request certificate in us-east-1 aws acm request-certificate \\ --region us-east-1 \\ # ✅ MUST be us-east-1 --domain-name app.company.com \\ --validation-method DNS # Step 2: Create CloudFront distribution aws cloudfront create-distribution \\ --origin-domain-name mybucket.s3.amazonaws.com \\ --default-root-object index.html \\ --viewer-certificate \\ ACMCertificateArn=arn:aws:acm:us-east-1:123456789012:certificate/abc-123 \\ SSLSupportMethod=sni-only Why others are wrong:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCaching HTTP content → CloudFront. Non-HTTP or static IPs needed → Global Accelerator. Use OAI/OAC to protect S3 origins.\n\nAPI Gateway integrates with Lambda (no VPC needed) and HTTP backends (needs VPC link for private). WebSocket APIs for bidirectional communication.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | CloudFront = Sits in front of your web app to cache HTTP."
  },
  {
    "id": "saa_73be74d9ee",
    "materia": "general",
    "tema": "aws-architect",
    "dificultad": 1,
    "pregunta": "Which AWS service automatically rotates database credentials?",
    "opciones": [
      "KMS",
      "Parameter Store",
      "Secrets Manager",
      "IAM"
    ],
    "correcta": 2,
    "explicacion": ""
  },
  {
    "id": "saa_75c6aa1908",
    "materia": "Design High-Performing Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "An application needs to load streaming data into S3, Redshift, and Elasticsearch with minimal code. Which service is MOST appropriate?",
    "opciones": [
      "Amazon Kinesis Data Streams with custom consumers",
      "Amazon Kinesis Data Firehose",
      "AWS Lambda triggered by Kinesis",
      "Amazon SQS with Lambda consumers <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Amazon Kinesis Data Firehose is fully managed service for loading streaming data - No code required (vs Data Streams which needs custom consumers) - Automatic scaling - Built-in data transformation (Lambda) - Direct delivery to S3, Redshift, Elasticsearch, HTTP endpoints Kinesis Data Firehose Architecture: Data Producers ├─ Applications ├─ IoT Devices ├─ Clickstream └─ Logs ↓ Kinesis Data Firehose ├─ Optional: Lambda transformation ├─ Optional: Format conversion (Parquet, ORC) └─ Buffering (size/time) ↓ Destinations ├─ Amazon S3 ├─ Amazon Redshift (via S3) ├─ Amazon Elasticsearch ├─ Splunk └─ HTTP endpoints Firehose Features:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nRedshift Spectrum allows querying S3 data directly without loading. Redshift is NOT for OLTP.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_76db81cad7",
    "materia": "Design Resilient Architectures",
    "tema": "ec2",
    "dificultad": 1,
    "pregunta": "An application needs to resolve domain names. Where should the DNS server be configured in a VPC?",
    "opciones": [
      "Custom DNS server on EC2",
      "Use AWS-provided DNS at .2 address",
      "Use Route 53 Resolver",
      "Both B and C <details> <summary>Show Answer</summary>"
    ],
    "correcta": 3,
    "explicacion": "Explanation: - VPC DNS is available at base IP + 2 (e.g., 10.0.0.2) - Route 53 Resolver provides DNS resolution - Resolves AWS resources - Forwards to on-premises DNS - Inbound/outbound endpoints DNS Options: - AWS-provided DNS: Default, automatic - Route 53 Resolver: Advanced, hybrid scenarios - Custom DNS: Full control, more management enableDnsHostnames: EC2 instances get public DNS names enableDnsSupport: Amazon-provided DNS enabled References: VPC DNS, Route 53 Resolver </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_779c71415f",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "An application running on Amazon EC2 instances needs to access objects in an Amazon S3 bucket. What is the MOST secure way to grant this access?",
    "opciones": [
      "Create an IAM user with programmatic access and store the access keys on the EC2 instance",
      "Create an IAM role with S3 permissions and attach it to the EC2 instance",
      "Make the S3 bucket public and allow anonymous access",
      "Use the root account credentials on the EC2 instance <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - IAM roles provide temporary security credentials that rotate automatically - No need to manage or embed long-term credentials - Most secure and AWS-recommended approach - Option A: Access keys are long-term credentials, security risk if exposed - Option C: Violates security best practices - Option D: Never use root credentials for applications - Best Practice: Always use IAM roles for EC2 instances References: IAM Roles, EC2 Instance Profiles, AWS Security Best Practices </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_77caf77fe3",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "An application writes data to S3 frequently. The company wants to be notified immediately when objects are created. What should be configured?",
    "opciones": [
      "S3 Event Notifications",
      "CloudWatch Logs",
      "AWS Config",
      "CloudTrail <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - S3 Event Notifications trigger on bucket events - Near real-time notifications - Destinations: SNS, SQS, Lambda S3 Events: - Object created (PUT, POST, COPY, CompleteMultipartUpload) - Object deleted - Object restored from Glacier - Replication events - Lifecycle transitions Event Notification Setup: json { \"Event\": \"s3:ObjectCreated:*\", \"Queue\": \"arn:aws:sqs:us-east-1:123456789012:MyQueue\" } Common Patterns: - S3 → Lambda: Process uploaded files - S3 → SQS: Queue processing - S3 → SNS: Multi-subscriber notifications Alternative: EventBridge (more advanced filtering) References: S3 Event Notifications, Event-Driven Architecture </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nUse SNS+SQS fan-out for reliable task processing (SNS alone can lose messages if endpoint offline).",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_7903e5aeaa",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "dynamodb",
    "dificultad": 2,
    "pregunta": "A DynamoDB table experiences variable traffic patterns throughout the day. What capacity mode should be used to optimize costs?",
    "opciones": [
      "Provisioned Capacity",
      "On-Demand Capacity",
      "Reserved Capacity",
      "Auto Scaling <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - On-Demand Capacity: - Pay per request - No capacity planning - Scales automatically - Ideal for unpredictable/variable workloads Capacity Modes Comparison: | Mode | Best For | Pricing | Scaling | |------|----------|---------|---------| | On-Demand | Variable traffic | Per request | Automatic | | Provisioned | Predictable traffic | Per hour (RCU/WCU) | Manual or Auto Scaling | When to Use: - On-Demand: New tables, unpredictable, spiky traffic - Provisioned: Predictable, steady traffic, cost optimization Cost: On-Demand can be more expensive for consistent workloads Can switch between modes once per 24 hours References: DynamoDB Capacity Modes, On-Demand vs Provisioned </details> ---",
    "explicacion_correcta": "Automatically adds/removes EC2 instances for horizontal scaling and elasticity.\n\nWhen to use: Maintain performance during traffic spikes, reduce costs by terminating instances when demand drops.\n\nKey differences: Horizontal scaling (more instances) vs vertical scaling (bigger instance). Uses dynamic scaling policies like Target Tracking.",
    "analisis_distractores": "Default termination policy: most instances in AZ → oldest launch template → closest to billing hour. Enable scale-in protection for stateful workloads.\n\nReduce latency to microseconds → DAX (DynamoDB Accelerator). Active-active multi-region → Global Tables. Unpredictable workloads → On-Demand capacity.",
    "tip": "ASG = Automatically Sizes Groups horizontally. | Dynamo = Dynamic infinite scaling for NoSQL."
  },
  {
    "id": "saa_794dced227",
    "materia": "Design Resilient Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A solutions architect needs to ensure data in Kinesis Data Streams is retained for 7 days for reprocessing. What should be configured?",
    "opciones": [
      "Set retention period to 168 hours (7 days)",
      "Use Kinesis Data Firehose with 7-day buffer",
      "Enable extended data retention in S3",
      "Kinesis cannot retain data beyond 24 hours <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - Kinesis Data Streams supports retention from 24 hours to 365 days - Default is 24 hours - Extended retention has additional cost - 7 days = 168 hours - Firehose doesn't have 7-day buffer option - S3 is separate storage, not Kinesis retention - Extended retention is a supported feature References: Kinesis Data Streams, Data Retention </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nKinesis Data Streams for custom processing. Kinesis Data Firehose for automatic delivery to S3/Redshift/Elasticsearch (no code needed).\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Kinesis = Kinetic (moving) data streams in real-time."
  },
  {
    "id": "saa_79a1b8b1e9",
    "materia": "Design Secure Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "AWS Service Control Policies Your security team wants to prevent all member accounts in your AWS Organization from creating Internet Gateways or attaching them to VPCs, while allowing existing Internet Gateways to continue functioning. How should you implement this?",
    "opciones": [
      "Create an SCP that denies ec2:CreateInternetGateway and ec2:AttachInternetGateway for all accounts",
      "Create an SCP that denies ec2:CreateInternetGateway and ec2:AttachInternetGateway for all accounts including the management account",
      "Create an IAM policy in each member account denying these actions",
      "Use AWS Config rules to detect and delete newly created Internet Gateways"
    ],
    "correcta": 0,
    "explicacion": "Explanation: Service Control Policy (SCP): json { \"Version\": \"2012-10-17\", \"Statement\": [ { \"Effect\": \"Deny\", \"Action\": [ \"ec2:CreateInternetGateway\", \"ec2:AttachInternetGateway\" ], \"Resource\": \"*\" } ] } What SCPs Do: - Set maximum permissions for member accounts - Act as guardrails (do NOT grant permissions) - Apply to IAM users and roles (not resources) - DO NOT affect management account ⚠️ How It Works:",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_7a5597d155",
    "materia": "Design Resilient Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A web application needs to be accessible from the internet but EC2 instances are in private subnets behind an Application Load Balancer. What is the most operationally efficient solution? Options:",
    "opciones": [
      "Set up a NAT gateway in a public subnet",
      "Move EC2 instances to public subnets",
      "Add outbound traffic rules to security groups",
      "Launch public subnets in each AZ and associate them with the ALB"
    ],
    "correcta": 3,
    "explicacion": "Explanation: For internet-facing ALBs, you need public subnets in each AZ where the ALB operates. The ALB nodes in public subnets can route requests to targets in private subnets using private IP addresses. ## Domain 2: Design Resilient Architectures (26% of exam) ### Scheduled Scaling",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_7b256625b4",
    "materia": "Design Secure Architectures",
    "tema": "aws-architect",
    "dificultad": 1,
    "pregunta": "Which service detects unauthorized deployments and cryptocurrency mining?",
    "opciones": [
      "Inspector",
      "GuardDuty",
      "Macie",
      "Detective"
    ],
    "correcta": 1,
    "explicacion": ""
  },
  {
    "id": "saa_7b3a4f0a9c",
    "materia": "Design High-Performing Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "An application generates temporary data that needs high-performance storage. The data can be lost if the instance stops. Which storage should be used?",
    "opciones": [
      "EBS General Purpose SSD",
      "EBS Provisioned IOPS SSD",
      "Instance Store",
      "Amazon EFS <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Instance Store provides: - Ephemeral storage (temporary) - Physically attached to host - Highest IOPS performance - No additional cost - Data lost on instance stop/termination Instance Store Characteristics: - Performance: Millions of IOPS possible - Persistence: Data lost on stop/terminate - Size: Varies by instance type - Use cases: Cache, buffers, temporary data, scratch data Instance Store vs EBS: - Instance Store: Temporary, highest performance, free - EBS: Persistent, network-attached, survives stop/start Exam Tip: Look for keywords: - \"Temporary\", \"can be lost\", \"cache\" → Instance Store - \"Persistent\", \"database\", \"survives restart\" → EBS References: EC2 Instance Store, Ephemeral Storage </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_7b4fc623b4",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 3,
    "pregunta": "Organization ABC has a customer base in the US and Australia that would be downloading 10s of GBs files from your application. For them to have a better download experience, they decided to use the AWS S3 bucket with cross-region replication with the US as the source and Australia as the destination. They are using existing unused S3 buckets and had set up cross-region replication successfully. However, when files uploaded to the US bucket, they are not being replicated to Australia bucket. What could be the reason?",
    "opciones": [
      "Versioning is not enabled on the source and destination buckets.",
      "Encryption is not enabled on the source and destination buckets.",
      "Source bucket has a policy with DENY and the role used for replication is not excluded from DENY.",
      "Destination bucket’s default CORS policy does not have source bucket added as the origin."
    ],
    "correcta": 2,
    "explicacion": "When you have a bucket policy which has explicit DENY, you must exclude all IAM resources which need to access the bucket. Read more here: https://aws.amazon.com/blogs/security/how-to-create-a-policy-that-whitelists-access-t o-sensitive-amazon-s3-buckets/ For option A, Cross region replication cannot be enabled without enabling versioning. The question states that cross-region replication has been successfully enabled. So this option is not correct.",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_7bdf271de2",
    "materia": "Design Resilient Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "ECS Task Placement Strategies (Similar to PT5) An ECS cluster runs tasks that should be evenly distributed across all EC2 instances for optimal resource utilization. Which task placement strategy achieves this?",
    "opciones": [
      "binpack (CPU or memory)",
      "spread (instanceId)",
      "random",
      "distinctInstance <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: ECS Task Placement Strategies: binpack: ├── Pack tasks on fewest instances ├── Maximize resource utilization per instance ├── Use: Cost optimization (fewer instances needed) └── Example: Fill instance1 before using instance2 spread: ✅ ├── Distribute tasks evenly ├── Field: instanceId, AZ, custom attribute ├── Use: High availability, even distribution ✅ └── Example: 12 tasks → 3 per instance (4 instances) random: ├── Random task placement └── Use: Default, no specific requirements Example: 4 EC2 instances, 12 tasks to place: binpack strategy: ├── Instance 1: 6 tasks (full) ├── Instance 2: 6 tasks (full) ├── Instance 3: 0 tasks └── Instance 4: 0 tasks └── Result: Uses only 2 instances (cost-efficient) spread (instanceId) strategy: ✅ ├── Instance 1: 3 tasks ├── Instance 2: 3 tasks ├── Instance 3: 3 tasks └── Instance 4: 3 tasks └── Result: Even distribution (high availability) Configuration: json { \"placementStrategy\": [ { \"type\": \"spread\", \"field\": \"instanceId\" } ] } Key Concept: spread = Even task distribution across instances/AZs </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nMinimize operational overhead → Fargate launch type. Need to manage hosts, use RIs → EC2 mode.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | ECS = Elastic Container Service; AWS-native container orchestration."
  },
  {
    "id": "saa_7d222dd00a",
    "materia": "Design Secure Architectures",
    "tema": "ec2",
    "dificultad": 3,
    "pregunta": "CloudFormation Outputs You have three CloudFormation stacks: SecurityStack, NetworkStack, and ApplicationStack. The SecurityStack creates a security group that must be used by resources in both NetworkStack and ApplicationStack. How do you reference the security group across stacks?",
    "opciones": [
      "Use CloudFormation Parameters to pass the security group ID",
      "Hardcode the security group ID in each stack",
      "Use CloudFormation Outputs with Export in SecurityStack, and ImportValue in other stacks",
      "Use CloudFormation Mappings to store the security group ID Limitation: Cannot delete a stack if its exported values are being imported elsewhere. ---"
    ],
    "correcta": 2,
    "explicacion": "Explanation: In SecurityStack (creates and exports): yaml Outputs: SecurityGroupId: Description: Security Group for web servers Value: !Ref WebServerSecurityGroup Export: Name: MyApp-WebServer-SG In NetworkStack and ApplicationStack (import): yaml Resources: MyEC2Instance: Type: AWS::EC2::Instance Properties: SecurityGroupIds: - !ImportValue MyApp-WebServer-SG Why This Works: - Outputs: Make values available from one stack - Export: Publish the value with a unique name - ImportValue: Reference the exported value in another stack - Automatic updates if the value changes Why Others Are Wrong:",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | EBS = Elastic Block Store; one AZ, one instance, persistent."
  },
  {
    "id": "saa_7d6ba7aff2",
    "materia": "general",
    "tema": "dynamodb",
    "dificultad": 2,
    "pregunta": "An application requires DynamoDB but needs to support complex queries with multiple attributes. What feature should be used?",
    "opciones": [
      "DynamoDB Streams",
      "DynamoDB Global Secondary Index (GSI)",
      "DynamoDB Auto Scaling",
      "DynamoDB Accelerator (DAX) <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Global Secondary Index (GSI): - Query on non-primary key attributes - Different partition and sort keys than base table - Eventually consistent reads - Can be added after table creation DynamoDB Index Types: | Type | Keys | Projection | Creation | |------|------|------------|----------| | LSI | Same partition key | Can choose | At table creation only | | GSI | Different keys | Can choose | Anytime | GSI Use Cases: - Query by different attributes - Support multiple access patterns - Flexible querying Example: - Table: Partition Key = UserID - GSI: Partition Key = Email - Can now query by email References: DynamoDB Indexes, GSI vs LSI </details> ---",
    "explicacion_correcta": "Fully managed serverless NoSQL key-value/document database with single-digit ms latency.\n\nWhen to use: Highly scalable web/mobile backends, IoT, gaming leaderboards, shopping carts.\n\nKey differences: Schema-less vs RDS/Aurora (relational). Horizontal scaling without managing instances.",
    "analisis_distractores": "Reduce latency to microseconds → DAX (DynamoDB Accelerator). Active-active multi-region → Global Tables. Unpredictable workloads → On-Demand capacity.",
    "tip": "Dynamo = Dynamic infinite scaling for NoSQL."
  },
  {
    "id": "saa_7e5d57e0f2",
    "materia": "general",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A solutions architect needs to transfer data between Amazon EFS in us-east-1 and Amazon S3 in us-west-2 on a daily basis. Which service provides automated, scheduled transfers?",
    "opciones": [
      "AWS DataSync",
      "AWS Snow Family",
      "AWS Transfer Family",
      "Amazon S3 Cross-Region Replication <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - DataSync supports transfers between AWS storage services - Can schedule tasks (hourly, daily, weekly) - Supports EFS to S3 transfers - Automated and managed service - Snow Family is for physical device transfers - Transfer Family is for SFTP/FTPS access - S3 CRR is for S3-to-S3 only References: AWS DataSync, Scheduled Data Transfer </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nEFS is strictly for Linux (NFS). For Windows servers, choose Amazon FSx for Windows File Server.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | EFS = Elastic File Share for Linux."
  },
  {
    "id": "saa_8004f006de",
    "materia": "general",
    "tema": "aws-architect",
    "dificultad": 1,
    "pregunta": "Which of the following is not a category in AWS Trusted Advisor service checks?",
    "opciones": [
      "Cost Optimization",
      "Fault Tolerance",
      "Service Limits",
      "Network Optimization"
    ],
    "correcta": 3,
    "explicacion": "https://aws.amazon.com/premiumsupport/trustedadvisor/"
  },
  {
    "id": "saa_804101f0d3",
    "materia": "Design High-Performing Architectures",
    "tema": "config",
    "dificultad": 3,
    "pregunta": "Transit Gateway ECMP for VPN (Similar to PT1-Q13) A global enterprise has multiple offices connecting to AWS via Site-to-Site VPN. Each office requires high-throughput connectivity (up to 10 Gbps aggregate) to multiple VPCs in AWS. The current solution uses a single VPN connection per office (limited to 1.25 Gbps). Which solution provides increased bandwidth while maintaining redundancy?",
    "opciones": [
      "Use Direct Connect with multiple 10 Gbps connections",
      "Create Transit Gateway with multiple VPN connections using ECMP (Equal-Cost Multi-Path routing)",
      "Deploy multiple Virtual Private Gateways, one per VPC",
      "Use VPN CloudHub for multi-site connectivity <details> <summary>✅ Click to reveal answer</summary> Key Concept: Transit Gateway + ECMP = Multiple VPN tunnels with aggregated bandwidth </details> --- ## 🟠 SECTION 2: PRACTICE TEST 2 TOPICS"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Transit Gateway ECMP Architecture: On-Premises Office ├── Customer Gateway 1 ────┐ │ (Public IP 1.2.3.4) │ └── Customer Gateway 2 ────┤ Multiple VPN Connections (Public IP 5.6.7.8) │ (ECMP enabled) │ ▼ Transit Gateway ├── VPN Connection 1: 1.25 Gbps ├── VPN Connection 2: 1.25 Gbps ├── VPN Connection 3: 1.25 Gbps └── VPN Connection 4: 1.25 Gbps Total: 5 Gbps aggregate ✅ │ ┌───────────┴───────────┬───────────┐ ▼ ▼ ▼ VPC-A VPC-B VPC-C Key Features: - ECMP: Distributes traffic across multiple VPN tunnels equally - Scalability: Add up to 50 VPN connections per Transit Gateway - Bandwidth: Each VPN = 1.25 Gbps; 4 VPNs = 5 Gbps aggregate - High Availability: If one tunnel fails, traffic redistributes to others Configuration Requirements: - Enable ECMP on Transit Gateway - Configure BGP on customer gateways - Use dynamic routing (BGP) with same AS path length Why others are wrong:",
    "explicacion_correcta": "Connect VPC to AWS services privately without Internet Gateway, NAT, VPN, or Direct Connect.\n\nWhen to use: Private subnets must access AWS services without traversing public internet.\n\nKey differences: Gateway Endpoints only for S3 and DynamoDB (route table prefix lists). Interface Endpoints (PrivateLink) for almost all other services (ENI with private IP).",
    "analisis_distractores": "Gateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Gateway for Big Two (S3 & DynamoDB); Interface for the Rest. | Config = Configuration compliance and history."
  },
  {
    "id": "saa_806162e024",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "config",
    "dificultad": 2,
    "pregunta": "An Athena workgroup is configured with a data usage control of 1 TB per day. A user's query would scan 1.5 TB of data. What happens?",
    "opciones": [
      "The query runs and scans 1.5 TB",
      "The query is rejected",
      "The query runs but only scans 1 TB",
      "The user receives a warning but query proceeds <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Workgroup data usage controls enforce limits - Queries exceeding the limit are rejected - Prevents cost overruns - User must optimize query or request limit increase - Query doesn't partially execute - Hard enforcement, not just a warning References: Athena Workgroups, Cost Controls </details> ---",
    "explicacion_correcta": "Serverless interactive query service analyzing data directly in S3 using standard SQL.\n\nWhen to use: Ad-hoc data analysis, querying VPC flow logs, CloudTrail logs, ELB logs from S3 without ETL.\n\nKey differences: Athena = serverless, per query/byte scanned, runs against S3. Redshift = provisioned data warehouse, load data into clusters.",
    "analisis_distractores": "Athena costs $5/TB scanned. Optimize by partitioning data and using Parquet/ORC columnar format.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Athena = SQL queries on S3, serverless, pay per byte scanned. | Config = Configuration compliance and history."
  },
  {
    "id": "saa_8070b46d3b",
    "materia": "general",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "An application stores data in an on-premises SMB file share. The company wants to migrate this data to AWS and continue accessing it via SMB protocol. Which solution should be implemented?",
    "opciones": [
      "Use DataSync to transfer to S3, then use S3 File Gateway",
      "Use DataSync to transfer to FSx for Windows File Server",
      "Use Snowball to transfer to EFS",
      "Use Storage Gateway Volume Gateway <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - DataSync supports SMB as source - FSx for Windows File Server provides native SMB protocol - Seamless migration path for Windows file shares - S3 File Gateway presents S3 as NFS/SMB but uses S3 storage - EFS doesn't natively support SMB (uses NFS) - Volume Gateway is for block storage References: AWS DataSync, FSx for Windows File Server </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nEFS is strictly for Linux (NFS). For Windows servers, choose Amazon FSx for Windows File Server.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | EFS = Elastic File Share for Linux."
  },
  {
    "id": "saa_80cfd764bf",
    "materia": "Design Secure Architectures",
    "tema": "lambda",
    "dificultad": 2,
    "pregunta": "A company wants to implement API Gateway to trigger different Lambda functions based on the API path. What feature enables this?",
    "opciones": [
      "API Gateway Stages",
      "API Gateway Methods",
      "API Gateway Resources with Lambda Integration",
      "API Gateway Authorizers <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - API Gateway Resources define API paths - Each resource/method can integrate with different Lambda functions - Enables REST API routing to microservices API Gateway Lambda Integration: GET /users → Lambda: ListUsers POST /users → Lambda: CreateUser GET /users/{id} → Lambda: GetUser PUT /users/{id} → Lambda: UpdateUser DELETE /users/{id} → Lambda: DeleteUser API Gateway Structure: REST API: UserService ├─ /users (Resource) │ ├─ GET (Method) → Lambda: ListUsers │ ├─ POST (Method) → Lambda: CreateUser │ └─ /{id} (Resource) │ ├─ GET (Method) → Lambda: GetUser │ ├─ PUT (Method) → Lambda: UpdateUser │ └─ DELETE (Method) → Lambda: DeleteUser └─ /orders (Resource) ├─ GET → Lambda: ListOrders └─ POST → Lambda: CreateOrder API Gateway Integration Types: | Type | Use Case | |------|----------| | Lambda | Serverless backend | | HTTP | HTTP endpoints | | AWS Service | Direct AWS service integration | | Mock | Testing, return fixed response | | VPC Link | Private VPC resources | Lambda Integration Configuration: json { \"httpMethod\": \"POST\", \"type\": \"AWS_PROXY\", // Lambda proxy integration \"uri\": \"arn:aws:apigateway:us-east-1:lambda:path/2015-03-31/functions/arn:aws:lambda:us-east-1:123456789012:function:CreateUser/invocations\", \"credentials\": \"arn:aws:iam::123456789012:role/APIGatewayLambdaRole\", \"requestTemplates\": { \"application/json\": \"{\\\"body\\\": $input.json('$')}\" } } Lambda Proxy Integration (recommended): python def lambda_handler(event, context): # event contains full request details path = event['path'] # /users/123 method = event['httpMethod'] # GET headers = event['headers'] query_params = event['queryStringParameters'] body = json.loads(event['body']) if event['body'] else {} # Process request if path == '/users' and method == 'GET': users = get_all_users() return { 'statusCode': 200, 'headers': {'Content-Type': 'application/json'}, 'body': json.dumps(users) } API Gateway Features:",
    "explicacion_correcta": "Serverless compute service running code without provisioning/managing servers, auto-scales on demand.\n\nWhen to use: Event-driven architectures, serverless microservices, real-time file processing (S3 triggers), scheduled CRON jobs (EventBridge).\n\nKey differences: EC2 = manage OS, pay for running time. Lambda = abstracted infrastructure, pay for exact execution time. Fargate = serverless containers. Lambda = Function-as-a-Service.",
    "analisis_distractores": "Lambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Lambda = Limit of 15 minutes for serverless code. | IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_80e65af8e3",
    "materia": "Design Secure Architectures",
    "tema": "nat-gateway",
    "dificultad": 2,
    "pregunta": "A three-tier web application has presentation, application, and database tiers. The database contains sensitive customer data. How should the tiers be deployed for security?",
    "opciones": [
      "All tiers in public subnets",
      "All tiers in private subnets",
      "Presentation in public, application and database in private subnets",
      "Presentation and application in public, database in private subnet <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Presentation tier (web servers) needs internet access - public subnet - Application tier doesn't need direct internet access - private subnet - Database tier must be isolated - private subnet - Follows defense-in-depth security principle - Application tier accesses internet via NAT Gateway - Database has no internet access - Minimizes attack surface References: Three-Tier Architecture, Security Best Practices </details> ---",
    "explicacion_correcta": "AWS-managed NAT service allowing private subnet resources outbound internet access while blocking inbound.\n\nWhen to use: EC2 in private subnet needs to download patches/updates from internet without being publicly exposed.\n\nKey differences: NAT Instance = you manage EC2, supports Security Groups. NAT Gateway = fully managed, scales to 45 Gbps, no Security Groups (only NACLs).",
    "analisis_distractores": "Single NAT Gateway is AZ-resilient only. For full regional HA → deploy NAT Gateway in each AZ. Must be in public subnet.",
    "tip": "NAT Gateway = Needs A public subnet To function, one per AZ for HA."
  },
  {
    "id": "saa_80fe75662a",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "rds",
    "dificultad": 3,
    "pregunta": "Amazon RDS Proxy An e-commerce application uses AWS Lambda functions to process user requests. Each Lambda invocation creates a new database connection to an Amazon RDS MySQL instance. During peak traffic, the application experiences \"too many connections\" errors and high database CPU utilization due to connection overhead. What is the MOST cost-effective solution to resolve this issue?",
    "opciones": [
      "Increase the RDS instance size to handle more connections",
      "Enable Multi-AZ deployment for the RDS instance",
      "Create Read Replicas and distribute read traffic",
      "Use Amazon RDS Proxy to pool and manage connections Perfect For: Lambda + RDS scenarios with: - Short-lived connections - Burst traffic - Serverless architectures Cost: ~$0.015/hour per vCPU of DB + data transfer ---"
    ],
    "correcta": 3,
    "explicacion": "Explanation: Amazon RDS Proxy: - Acts as a connection pooler between Lambda and RDS - Reuses existing connections instead of creating new ones - Reduces \"too many connections\" errors - Lowers CPU overhead from connection establishment - Improves failover time by up to 66% Why This Is Better:",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_82b132b042",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A website hosted in S3 bucket needs JavaScript to make authenticated HTTP GET requests to the same bucket using S3 API endpoint, but browser blocks the requests. What should be implemented? Options:",
    "opciones": [
      "Enable cross-account access",
      "Enable Cross-Zone Load Balancing",
      "Enable Cross-origin resource sharing (CORS) configuration",
      "Enable Cross-Region Replication (CRR)"
    ],
    "correcta": 2,
    "explicacion": "Explanation: CORS (Cross-Origin Resource Sharing) defines how client web applications loaded in one domain can interact with resources in a different domain. It's needed when JavaScript from S3 website endpoint needs to access S3 API endpoint. ### S3 Intelligent Tiering",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | EBS = Elastic Block Store; one AZ, one instance, persistent."
  },
  {
    "id": "saa_847faf2672",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A company wants to optimize costs for a development environment that runs Monday-Friday, 9 AM-6 PM. The environment uses EC2, RDS, and NAT Gateway. What should be done?",
    "opciones": [
      "Use Reserved Instances",
      "Use Instance Scheduler to start/stop resources outside business hours",
      "Migrate to Serverless",
      "Use Spot Instances <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Instance Scheduler automatically starts/stops resources on schedule - Saves costs during nights and weekends (65% of week) - Works with EC2 and RDS - Reserved Instances require 1-3 year commitment, doesn't stop resources - Serverless may not support all workloads - Spot Instances can be interrupted during work hours - Scheduled stop/start is most cost-effective for dev environments References: Cost Optimization, Instance Scheduler </details> --- ## Summary ### Key Concepts Tested:",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nSingle NAT Gateway is AZ-resilient only. For full regional HA → deploy NAT Gateway in each AZ. Must be in public subnet.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_859f73d1bb",
    "materia": "Design Resilient Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company needs a relational database with automatic scaling, high availability across multiple AZs, and automatic failover. They want minimal database administration. Which service should be used?",
    "opciones": [
      "Amazon RDS MySQL",
      "Amazon Aurora",
      "Amazon DynamoDB",
      "Amazon Redshift <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Amazon Aurora provides: - MySQL/PostgreSQL compatibility - 5x performance of MySQL, 3x of PostgreSQL - Automatic scaling (storage up to 128 TB) - Multi-AZ by design (6 copies across 3 AZs) - Automatic failover (< 30 seconds) - Serverless option available Aurora vs RDS: - Aurora: Better performance, auto-scaling storage, faster replication - RDS: Standard MySQL/PostgreSQL, simpler Aurora Features: - Up to 15 read replicas - Continuous backup to S3 - Point-in-time recovery - Backtrack (rewind database) References: Amazon Aurora, RDS vs Aurora </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nMulti-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nAurora Global Database for cross-region replication with <1s latency. Aurora Multi-Master for write scaling.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | RDS: Relational, Replicas for Reads, Multi-AZ for Resilience."
  },
  {
    "id": "saa_85cbf6c89d",
    "materia": "Design High-Performing Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "A company wants to cache database query results to reduce read load on their RDS database and improve response times. Which service should be used?",
    "opciones": [
      "Amazon CloudFront",
      "Amazon ElastiCache",
      "DynamoDB Accelerator (DAX)",
      "Amazon S3 <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Amazon ElastiCache provides in-memory caching - Redis or Memcached engines - Microsecond latency - Reduces database load - Session storage - Leaderboards, real-time analytics ElastiCache Engines: | Feature | Redis | Memcached | |---------|-------|-----------| | Data Types | Advanced (strings, sets, sorted sets) | Simple (strings) | | Persistence | Yes (snapshots) | No | | Replication | Yes (Multi-AZ) | No | | Pub/Sub | Yes | No | | Sorted Sets | Yes (leaderboards) | No | | Multi-threaded | No | Yes | Common Pattern: Application → ElastiCache → RDS (cache-aside) References: Amazon ElastiCache, Caching Strategies </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nMulti-AZ is for resilience, NOT read scaling. Converting Single-AZ to Multi-AZ is zero-downtime.\n\nElastiCache requires application code changes (unlike DAX). Don't select Memcached if scenario needs DR, replication, or pub/sub.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Multi-AZ = Automatic Zero-data-loss standby (DR, not reads)."
  },
  {
    "id": "saa_86896cedf1",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 1,
    "pregunta": "A company wants to enforce that all API calls to S3 must be authenticated with MFA. Which IAM feature should be used?",
    "opciones": [
      "IAM Groups",
      "IAM Policy Conditions",
      "IAM Access Analyzer",
      "Service Control Policies <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: IAM policy conditions can enforce MFA. Example condition: \"aws:MultiFactorAuthPresent\": \"true\" </details>",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_86a4754060",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "ebs",
    "dificultad": 1,
    "pregunta": "A company wants to identify unused EBS volumes and old snapshots to reduce costs. Which tools can help?",
    "opciones": [
      "AWS Trusted Advisor only",
      "AWS Cost Explorer only",
      "Both Trusted Advisor and custom scripts/AWS Config",
      "AWS Budgets <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Trusted Advisor identifies unattached EBS volumes - Custom scripts can identify old snapshots - AWS Config Rules can detect unattached volumes - Combine multiple approaches for comprehensive cleanup - Cost Explorer shows costs but doesn't identify unused resources - Budgets sets limits but doesn't identify waste References: Trusted Advisor, Resource Cleanup </details> ---",
    "explicacion_correcta": "Persistent block-level storage volumes attached to EC2 instances. Behave like raw hard drives.\n\nWhen to use: Boot volumes for EC2, database storage, applications requiring consistent low-latency block storage.\n\nKey differences: EBS locked to single AZ. EFS spans multiple AZs and mounts to hundreds of instances. EBS is persistent, Instance Store is ephemeral.",
    "analisis_distractores": "EBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "EBS = Elastic Block Store; one AZ, one instance, persistent. | Config = Configuration compliance and history."
  },
  {
    "id": "saa_86b3e1f9ab",
    "materia": "Design Secure Architectures",
    "tema": "ec2",
    "dificultad": 3,
    "pregunta": "A company wants to use AWS Systems Manager to manage a fleet ol Amazon EC2 instances. According to the company's security requirements, no EC2 instances can have internet access. A solutions architect needs to design network connectivity from the EC2 instances to Systems Manager while fulfilling this security obligation. Which solution will meet these requirements?",
    "opciones": [
      "Deploy the EC2 instances into a private subnet with no route to the internet.",
      "Configure an interface VPC endpoint for Systems Manager. Update routes to use the endpoint.",
      "Deploy a NAT gateway into a public subnet. Configure private subnets with a default route to the NAT gateway.",
      "Deploy an internet gateway. Configure a network ACL to deny traffic to all destinations except Systems Manager."
    ],
    "correcta": 1,
    "explicacion": "Explanation: VPC Peering connections VPC interface endpoints can be accessed through both intra-Region and inter-Region VPC peering connections. VPC Gateway Endpoint connections can't be extended out of a VPC. Resources on the other side of a VPC peering connection in your VPC can't use the gateway endpoint to communicate with resources in the gateway endpoint service. Reference: https://docs.aws.amazon.com/systems-manager/latest/userguide/setup-createvpc.html",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | Gateway for Big Two (S3 & DynamoDB); Interface for the Rest."
  },
  {
    "id": "saa_86c1b7dbcb",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "dynamodb",
    "dificultad": 2,
    "pregunta": "An application needs time-series data storage for IoT sensor data with automatic data retention policies. Which database is MOST appropriate?",
    "opciones": [
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon Timestream",
      "Amazon Redshift <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Amazon Timestream is purpose-built for time-series data - IoT, DevOps, analytics - Automatic data lifecycle management - Built-in time-series analytics - 1000x faster, 1/10th cost vs relational Timestream Features: - Automatic tiering (memory → magnetic) - Built-in time-series functions - Serverless, auto-scaling - SQL queries Use Cases: - IoT sensor data - Application monitoring - DevOps metrics - Industrial telemetry Timestream vs Alternatives: - DynamoDB: General NoSQL, manual TTL - Redshift: Data warehouse, not optimized for time-series - Timestream: Purpose-built, best for time-series References: Amazon Timestream, Time-Series Databases </details> ---",
    "explicacion_correcta": "Fully managed petabyte-scale data warehouse for complex OLAP analytics and business intelligence.\n\nWhen to use: Complex analytical queries across large datasets, BI dashboards, data warehousing.\n\nKey differences: Athena = ad-hoc serverless queries on S3. Redshift = provisioned cluster for heavy OLAP, requires data loading.",
    "analisis_distractores": "Redshift Spectrum allows querying S3 data directly without loading. Redshift is NOT for OLTP.\n\nReduce latency to microseconds → DAX (DynamoDB Accelerator). Active-active multi-region → Global Tables. Unpredictable workloads → On-Demand capacity.",
    "tip": "Redshift = Heavy OLAP data warehouse, columnar storage, complex BI queries. | Dynamo = Dynamic infinite scaling for NoSQL."
  },
  {
    "id": "saa_8753ce0d3e",
    "materia": "Design High-Performing Architectures",
    "tema": "dynamodb",
    "dificultad": 1,
    "pregunta": "Which DynamoDB feature provides microsecond latency?",
    "opciones": [
      "DynamoDB Streams",
      "Global Tables",
      "DAX",
      "PITR"
    ],
    "correcta": 2,
    "explicacion": "",
    "explicacion_correcta": "Fully managed serverless NoSQL key-value/document database with single-digit ms latency.\n\nWhen to use: Highly scalable web/mobile backends, IoT, gaming leaderboards, shopping carts.\n\nKey differences: Schema-less vs RDS/Aurora (relational). Horizontal scaling without managing instances.",
    "analisis_distractores": "Reduce latency to microseconds → DAX (DynamoDB Accelerator). Active-active multi-region → Global Tables. Unpredictable workloads → On-Demand capacity.",
    "tip": "Dynamo = Dynamic infinite scaling for NoSQL."
  },
  {
    "id": "saa_879bdea4c7",
    "materia": "Design High-Performing Architectures",
    "tema": "dynamodb",
    "dificultad": 2,
    "pregunta": "An application requires sub-millisecond latency for read/write operations with automatic scaling to handle millions of requests per second. Which database should be used?",
    "opciones": [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon DocumentDB <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Amazon DynamoDB is fully managed NoSQL database - Single-digit millisecond latency - Scales to 10+ trillion requests/day - Automatic scaling - Multi-AZ replication built-in - Serverless option (on-demand pricing) DynamoDB Features: - Key-value and document database - DynamoDB Streams (change data capture) - Global Tables (multi-region replication) - DynamoDB Accelerator (DAX) for microsecond latency - Point-in-time recovery - On-demand and provisioned capacity modes When to use DynamoDB: - Need extreme scale - Variable workloads - Need sub-10ms latency - Key-value or document data model References: Amazon DynamoDB, NoSQL Databases </details> ---",
    "explicacion_correcta": "Database deployment with synchronous standby replica in different AZ for high availability.\n\nWhen to use: Disaster recovery, surviving AZ outage, network loss, or compute failure.\n\nKey differences: Synchronous replication for HA. Read Replicas use asynchronous for performance scaling. Standby cannot serve reads.",
    "analisis_distractores": "Multi-AZ is for resilience, NOT read scaling. Converting Single-AZ to Multi-AZ is zero-downtime.\n\nReduce latency to microseconds → DAX (DynamoDB Accelerator). Active-active multi-region → Global Tables. Unpredictable workloads → On-Demand capacity.\n\nReduce latency to microseconds → DAX (DynamoDB Accelerator). Active-active multi-region → Global Tables. Unpredictable workloads → On-Demand capacity.",
    "tip": "Multi-AZ = Automatic Zero-data-loss standby (DR, not reads). | Dynamo = Dynamic infinite scaling for NoSQL."
  },
  {
    "id": "saa_87a3abe672",
    "materia": "Design High-Performing Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A solutions architect needs to design a solution that minimizes latency for users accessing static content globally. Which combination of AWS services should be used?",
    "opciones": [
      "Amazon S3 with Cross-Region Replication",
      "Amazon CloudFront with S3 as the origin",
      "Amazon S3 with Transfer Acceleration",
      "Multiple EC2 instances in different Regions <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - CloudFront is AWS's Content Delivery Network (CDN) with 400+ edge locations globally - It caches content close to users, minimizing latency - S3 serves as the origin for static content - Option A provides redundancy but doesn't optimize latency - Option C accelerates uploads, not downloads - Option D is cost-ineffective and complex to manage References: CloudFront, Edge Locations, Global Infrastructure </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCaching HTTP content → CloudFront. Non-HTTP or static IPs needed → Global Accelerator. Use OAI/OAC to protect S3 origins.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | CloudFront = Sits in front of your web app to cache HTTP."
  },
  {
    "id": "saa_87af0d6163",
    "materia": "general",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company is building a microservices architecture and needs to decouple services to handle traffic spikes without losing messages. Which AWS service pattern should be used?",
    "opciones": [
      "Direct API calls between services",
      "SQS queues between services",
      "Shared database between services",
      "File-based communication via S3 <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - SQS provides loose coupling and buffering between services - Messages are persisted, not lost during traffic spikes - Services process at their own pace - Standard microservices pattern - Direct API calls create tight coupling - Shared database violates microservices principles - S3 file-based communication is inefficient for real-time References: Microservices Architecture, SQS Decoupling </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nStandard = unlimited throughput, at-least-once (duplicates possible). FIFO = exactly-once, strict ordering, 300 msgs/sec (3000 with batching).",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | SQS = Send Queued Stuff (pull-based, 1-to-1 decoupling)."
  },
  {
    "id": "saa_87cab6cd4e",
    "materia": "general",
    "tema": "ec2",
    "dificultad": 3,
    "pregunta": "Your organization is building a collaboration platform for which they chose AWS EC2 for web and application servers and MySQL RDS instance as the database. Due to the nature of the traffic to the application, they would like to increase the number of connections to RDS instances. How can this be achieved?",
    "opciones": [
      "Login to RDS instance and modify database config file under /etc/mysql/my.cnf",
      "Create a new parameter group, attach it to the DB instance and change the setting.",
      "Create a new option group, attach it to the DB instance and change the setting.",
      "Modify setting in the default options group attached to the DB instance."
    ],
    "correcta": 1,
    "explicacion": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithPar amGroups",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_8800322174",
    "materia": "Design High-Performing Architectures",
    "tema": "dynamodb",
    "dificultad": 3,
    "pregunta": "You are an AWS Solutions Architect. Your company has a successful web application deployed in an AWS Auto Scaling group. The application attracts more and more global customers. However, the application’s performance is impacted. Your manager asks you how to improve the performance and availability of the application. Which of the following AWS services would you recommend?",
    "opciones": [
      "AWS DataSync",
      "Amazon DynamoDB Accelerator",
      "AWS Lake Formation",
      "AWS Global Accelerator"
    ],
    "correcta": 3,
    "explicacion": "AWS Global accelerator provides static IP addresses that are anycast in the AWS edge network. Incoming traffic is distributed across endpoints in AWS regions. The performance and availability of the application are improved. Option​ ​ A ​ is​ ​ incorrect:​ Because DataSync is a tool to automate the data transfer and does not help to improve the performance. Option​ ​ B​ is​ ​ incorrect:​ DynamoDB is not mentioned in this question. Option​ ​ C ​ is​ ​ incorrect:​ Because AWS Lake Formation is used to manage a large amount of data in AWS which would not help in this situation. Option​ ​ D ​ is​ CORRECT:​ Check the AWS Global Accelerator use cases. The Global Accelerator service can improve both application performance and availability.",
    "explicacion_correcta": "Automatically adds/removes EC2 instances for horizontal scaling and elasticity.\n\nWhen to use: Maintain performance during traffic spikes, reduce costs by terminating instances when demand drops.\n\nKey differences: Horizontal scaling (more instances) vs vertical scaling (bigger instance). Uses dynamic scaling policies like Target Tracking.",
    "analisis_distractores": "Default termination policy: most instances in AZ → oldest launch template → closest to billing hour. Enable scale-in protection for stateful workloads.\n\nNon-HTTP traffic or need static IPs → Global Accelerator. HTTP caching → CloudFront. Instant failover with health checks.\n\nNon-HTTP traffic or need static IPs → Global Accelerator. HTTP caching → CloudFront. Instant failover with health checks.",
    "tip": "ASG = Automatically Sizes Groups horizontally. | Global Accelerator = Accelerate global traffic with static anycast IPs."
  },
  {
    "id": "saa_8846777bc6",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company needs to ensure S3 objects are encrypted at rest. They want AWS to manage the encryption keys. Which encryption method should be used?",
    "opciones": [
      "SSE-C (Customer-Provided Keys)",
      "SSE-S3 (S3-Managed Keys)",
      "SSE-KMS (KMS-Managed Keys)",
      "Client-Side Encryption <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - SSE-S3 uses S3-managed encryption keys - AWS handles all key management - AES-256 encryption - No additional cost - Simplest encryption option S3 Encryption Options: | Method | Key Management | Cost | Use Case | |--------|----------------|------|----------| | SSE-S3 | AWS manages | Free | Simple encryption | | SSE-KMS | AWS KMS | KMS API costs | Audit trail, key rotation | | SSE-C | Customer provides | Free | Customer controls keys | | Client-Side | Customer | Free | Encrypt before upload | SSE-KMS Benefits (when needed): - Audit trail (CloudTrail) - Key rotation - Granular permissions - Envelope encryption For exam: If question says \"AWS manages keys, simplest\", choose SSE-S3 References: S3 Encryption, SSE-S3, SSE-KMS </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCannot enable encryption on existing RDS/EBS directly. Must snapshot → copy with encryption → restore.\n\nManagement events enabled by default (90 days free). Data events (S3 uploads, Lambda invocations) NOT enabled by default, extra cost. 15-minute delay.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | KMS = Keeps Master Secrets safe."
  },
  {
    "id": "saa_884d30ea1a",
    "materia": "Design High-Performing Architectures",
    "tema": "lambda",
    "dificultad": 1,
    "pregunta": "A Lambda function is timing out after 3 seconds when processing large files. What should be changed?",
    "opciones": [
      "Increase Lambda memory allocation",
      "Increase Lambda timeout setting",
      "Use Lambda layers",
      "Switch to EC2 <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Lambda default timeout is 3 seconds - Can be increased up to 15 minutes (900 seconds) - Timeout configuration is separate from memory Lambda Configuration: - Memory: 128 MB to 10,240 MB (10 GB) - Timeout: 1 second to 900 seconds (15 minutes) - CPU scales with memory (1,792 MB = 1 vCPU) - Ephemeral storage (/tmp): 512 MB to 10,240 MB Performance Tuning:",
    "explicacion_correcta": "Serverless compute service running code without provisioning/managing servers, auto-scales on demand.\n\nWhen to use: Event-driven architectures, serverless microservices, real-time file processing (S3 triggers), scheduled CRON jobs (EventBridge).\n\nKey differences: EC2 = manage OS, pay for running time. Lambda = abstracted infrastructure, pay for exact execution time. Fargate = serverless containers. Lambda = Function-as-a-Service.",
    "analisis_distractores": "Lambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Lambda = Limit of 15 minutes for serverless code. | Config = Configuration compliance and history."
  },
  {
    "id": "saa_886e622655",
    "materia": "general",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A financial services company needs to securely share curated, third-party financial datasets with its data analysts on AWS. The solution must support subscription-based access and automate dataset updates. Which AWS service should be used?",
    "opciones": [
      "AWS Data Exchange",
      "Amazon S3",
      "AWS Glue Data Catalog",
      "Amazon Redshift Data Sharing <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - AWS Data Exchange enables secure, subscription-based access to third-party datasets - Automates dataset updates and notifications - Integrates with S3, Redshift, and Lake Formation - S3 is storage, not a data marketplace - Glue Data Catalog is for metadata, not data sharing - Redshift Data Sharing is for sharing data between Redshift clusters References: AWS Data Exchange, Data Sharing </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCommon pattern: optimize S3 data for Athena → use Glue to transform to Parquet/ORC columnar format.\n\nRedshift Spectrum allows querying S3 data directly without loading. Redshift is NOT for OLTP.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Glue = The glue that sticks raw data to analytics tools."
  },
  {
    "id": "saa_89c1284c17",
    "materia": "Design Resilient Architectures",
    "tema": "aurora",
    "dificultad": 2,
    "pregunta": "An Aurora database cluster needs to handle analytics queries without impacting production traffic. What should be configured?",
    "opciones": [
      "Aurora Read Replicas",
      "Aurora Serverless",
      "Aurora Global Database",
      "RDS Read Replicas <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - Aurora Read Replicas: - Up to 15 replicas - Low replication lag (< 10ms) - Offload read traffic - Can have custom endpoints Aurora Custom Endpoints: - Direct specific workloads to specific replicas - Example: Analytics queries to larger instances Reader Endpoint: - Load balances across all read replicas - Automatic failover if primary fails Aurora Auto Scaling: - Automatically add/remove replicas based on load References: Aurora Read Replicas, Aurora Endpoints </details> ---",
    "explicacion_correcta": "Cloud-native relational DB with built-in resilience: 6 copies across 3 AZs, self-healing storage.\n\nWhen to use: Enterprise workloads needing automatic failover, up to 15 read replicas, cross-region Global Database.\n\nKey differences: Aurora Multi-Master allows writes to multiple instances. Global Database provides <1s cross-region replication.",
    "analisis_distractores": "Aurora storage auto-scales in 10GB increments up to 128TB. No need for read replicas for HA (6 copies already).\n\nDefault termination policy: most instances in AZ → oldest launch template → closest to billing hour. Enable scale-in protection for stateful workloads.\n\nRead Replicas don't failover automatically (manual promotion). Cross-region incurs data transfer fees; same-region is free.",
    "tip": "Aurora = 6 copies, 3 AZs, self-healing, no manual HA setup. | ASG = Automatically Sizes Groups horizontally."
  },
  {
    "id": "saa_8c14ddfe41",
    "materia": "Design Secure Architectures",
    "tema": "kms",
    "dificultad": 2,
    "pregunta": "A company needs to manage and use dedicated hardware security modules (HSMs) for cryptographic operations in the AWS Cloud. Which service should they use?",
    "opciones": [
      "AWS CloudHSM",
      "AWS KMS",
      "AWS Secrets Manager",
      "Amazon Macie <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - AWS CloudHSM provides dedicated HSM appliances in the AWS Cloud - Used for FIPS 140-2 Level 3 compliance, custom key management - KMS is managed, shared HSMs - Secrets Manager is for secrets, not HSM - Macie is for PII detection References: AWS CloudHSM, Hardware Security Modules </details> ---",
    "explicacion_correcta": "Managed service to create, store, and control cryptographic keys for encrypting data at rest and in transit.\n\nWhen to use: Encrypting data in S3, RDS, EBS, DynamoDB. Centralized auditing of key usage via CloudTrail.\n\nKey differences: Handles symmetric/asymmetric/HMAC keys up to 4KB; larger data uses envelope encryption. CloudHSM is single-tenant FIPS 140-2 Level 3.",
    "analisis_distractores": "Cannot enable encryption on existing RDS/EBS directly. Must snapshot → copy with encryption → restore.",
    "tip": "KMS = Keeps Master Secrets safe."
  },
  {
    "id": "saa_8d334c7b17",
    "materia": "Design Resilient Architectures",
    "tema": "route-53",
    "dificultad": 3,
    "pregunta": "Route 53 Health Checks for Failover (Similar to PT1-Q8) A media streaming company has a primary website in us-east-1 and a disaster recovery site in eu-west-1. The architect needs to configure automatic DNS failover when the primary site becomes unhealthy. Health checks should monitor the primary site's availability. What is the correct Route 53 configuration?",
    "opciones": [
      "Create two separate health checks - one for each site, and use latency-based routing",
      "Create a health check for the primary site only, configure failover routing with primary and secondary records",
      "Create a health check for the secondary site only, and use geolocation routing",
      "Create calculated health checks combining both sites, use weighted routing 50/50 <details> <summary>✅ Click to reveal answer</summary> Key Concept: Failover = Primary with health check + Secondary without health check </details> ---"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Failover routing policy requires: - Health check on PRIMARY record only - PRIMARY record (us-east-1) - SECONDARY record (eu-west-1, no health check needed) - When primary fails health check, Route 53 automatically returns secondary Configuration: Primary Record: - Name: www.example.com - Type: A - Value: 1.2.3.4 (us-east-1 IP) - Routing: Failover - Primary - Health Check: HC-123 ✅ Secondary Record: - Name: www.example.com - Type: A - Value: 5.6.7.8 (eu-west-1 IP) - Routing: Failover - Secondary - Health Check: None (not required) Why others are wrong:",
    "explicacion_correcta": "Persistent block-level storage volumes attached to EC2 instances. Behave like raw hard drives.\n\nWhen to use: Boot volumes for EC2, database storage, applications requiring consistent low-latency block storage.\n\nKey differences: EBS locked to single AZ. EFS spans multiple AZs and mounts to hundreds of instances. EBS is persistent, Instance Store is ephemeral.",
    "analisis_distractores": "EBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.\n\nALIAS vs CNAME: ALIAS is free, works at apex, resolves to IP. CNAME maps name to name, can't be at apex.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "EBS = Elastic Block Store; one AZ, one instance, persistent. | Route 53 = DNS + ALIAS = Route 53's superpower."
  },
  {
    "id": "saa_8d4570194c",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A private subnet contains EC2 instances that need to download software updates from the internet. The instances should NOT be directly accessible from the internet. What should be configured?",
    "opciones": [
      "Internet Gateway",
      "NAT Gateway",
      "Virtual Private Gateway",
      "VPC Peering <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - NAT Gateway enables outbound internet access for private subnets - Instances remain private (no inbound from internet) - Placed in public subnet - Route private subnet traffic to NAT Gateway NAT Gateway vs NAT Instance: | Feature | NAT Gateway | NAT Instance | |---------|-------------|--------------| | Managed | AWS-managed | Customer-managed | | Availability | Highly available (AZ) | Single instance | | Bandwidth | Up to 45 Gbps | Instance type dependent | | Cost | Hourly + data transfer | Instance cost | | Maintenance | AWS handles | Customer handles | Configuration:",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nSingle NAT Gateway is AZ-resilient only. For full regional HA → deploy NAT Gateway in each AZ. Must be in public subnet.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | NAT Gateway = Needs A public subnet To function, one per AZ for HA."
  },
  {
    "id": "saa_8d7d9e9edc",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "lambda",
    "dificultad": 2,
    "pregunta": "Lambda Execution Role CloudWatch Logs (Similar to PT5-Q55) A Lambda function executes successfully but no logs appear in CloudWatch Logs. What is the most likely cause?",
    "opciones": [
      "Lambda function timeout is too short",
      "Lambda execution role lacks CloudWatch Logs permissions",
      "CloudWatch Logs retention period expired",
      "Lambda function not using console.log() statements <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Required CloudWatch Logs Permissions: json { \"Effect\": \"Allow\", \"Action\": [ \"logs:CreateLogGroup\", \"logs:CreateLogStream\", \"logs:PutLogEvents\" ], \"Resource\": \"arn:aws:logs:*:*:*\" } Common Mistake: - Lambda executes successfully - BUT no logs appear due to missing permissions - Solution: Attach AWSLambdaBasicExecutionRole or equivalent Key Concept: All Lambda functions need CloudWatch Logs permissions for debugging </details> ---",
    "explicacion_correcta": "Serverless compute service running code without provisioning/managing servers, auto-scales on demand.\n\nWhen to use: Event-driven architectures, serverless microservices, real-time file processing (S3 triggers), scheduled CRON jobs (EventBridge).\n\nKey differences: EC2 = manage OS, pay for running time. Lambda = abstracted infrastructure, pay for exact execution time. Fargate = serverless containers. Lambda = Function-as-a-Service.",
    "analisis_distractores": "Lambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nCloudWatch does NOT monitor internal OS metrics (memory, disk space) by default. Must install CloudWatch Agent.",
    "tip": "Lambda = Limit of 15 minutes for serverless code. | CloudWatch = Watches your performance metrics."
  },
  {
    "id": "saa_8e5d90e40d",
    "materia": "Design Secure Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "You are planning to build a fleet of EBS-optimized EC2 instances for your new application. Due to security compliance, your organization wants you to encrypt root volume which is used to boot the instances. How can this be achieved?",
    "opciones": [
      "Select the Encryption option for the root EBS volume while launching the EC2 instance.",
      "Once the EC2 instances are launched, encrypt the root volume using AWS KMS Master Key.",
      "Root volumes cannot be encrypted. Add another EBS volume with an encryption option selected during launch. Once EC2 instances are launched, make encrypted EBS volume as root volume through the console.",
      "Launch an unencrypted EC2 instance and create a snapshot of the root volume. Make a copy of the snapshot with the encryption option selected and CreateImage using the encrypted snapshot. Use this image to launch EC2 instances."
    ],
    "correcta": 3,
    "explicacion": "When launching an EC2 instance, the EBS volume for root cannot be encrypted. You can launch the instance with unencrypted root volume and create a snapshot of the root volume. Once the snapshot is created, you can copy the snapshot where you can make the new snapshot encrypted. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIEncryption.html#AMI Encryption",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | EBS = Elastic Block Store; one AZ, one instance, persistent."
  },
  {
    "id": "saa_8f0df45b44",
    "materia": "Design High-Performing Architectures",
    "tema": "kinesis",
    "dificultad": 2,
    "pregunta": "A data engineering team needs to run Apache Spark jobs to process large datasets. They want a managed service that handles infrastructure provisioning. Which service should they use?",
    "opciones": [
      "Amazon Athena",
      "Amazon EMR",
      "AWS Glue",
      "Amazon Kinesis <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - EMR (Elastic MapReduce) is managed big data platform - Supports Apache Spark, Hadoop, Hive, etc. - Handles cluster provisioning and scaling - Optimized for large-scale data processing - Athena is for SQL queries, not Spark - Glue supports Spark but EMR provides more control - Kinesis is for streaming, not batch processing References: Amazon EMR, Big Data Processing </details> ---",
    "explicacion_correcta": "Fully managed serverless ETL and data integration service. Discovers schemas, stores metadata in Data Catalog.\n\nWhen to use: Preparing data for analytics, transforming CSV/JSON to Parquet/ORC for Athena, running serverless Spark jobs.\n\nKey differences: Glue is serverless; EMR requires provisioning and managing Hadoop/Spark cluster.",
    "analisis_distractores": "Common pattern: optimize S3 data for Athena → use Glue to transform to Parquet/ORC columnar format.\n\nAthena costs $5/TB scanned. Optimize by partitioning data and using Parquet/ORC columnar format.\n\nKinesis Data Streams for custom processing. Kinesis Data Firehose for automatic delivery to S3/Redshift/Elasticsearch (no code needed).",
    "tip": "Glue = The glue that sticks raw data to analytics tools. | Athena = SQL queries on S3, serverless, pay per byte scanned."
  },
  {
    "id": "saa_8f47eeb2e3",
    "materia": "Design Secure Architectures",
    "tema": "iam",
    "dificultad": 1,
    "pregunta": "What is the default effect when no IAM policy explicitly allows or denies an action?",
    "opciones": [
      "Allow",
      "Deny",
      "Prompt for approval",
      "Log the action <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - IAM uses implicit deny by default - All actions denied unless explicitly allowed - Evaluation Logic: Explicit Deny → Allow → Implicit Deny - Cannot override explicit Deny with Allow - Must have explicit Allow to perform action Policy Evaluation Flow:",
    "explicacion_correcta": "Fully managed service to securely control access using users, groups, roles, and identity-based policies.\n\nWhen to use: Implement least privilege, manage MFA, define permissions for humans/apps/services interacting with AWS.\n\nKey differences: IAM manages permissions within one AWS account. Organizations (SCPs) manages boundaries across accounts. Cognito handles app end-user auth.",
    "analisis_distractores": "Explicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_8fc4910d5b",
    "materia": "Design Resilient Architectures",
    "tema": "ec2",
    "dificultad": 3,
    "pregunta": "AWS Recycle Bin Your company uses custom AMIs for launching EC2 instances across multiple AWS accounts. Recently, a critical AMI was accidentally deleted by a team member, causing deployment failures. You need a solution to recover accidentally deleted AMIs without complex backup procedures. What should you implement?",
    "opciones": [
      "Create AMI snapshots weekly and store in S3",
      "Enable AWS Recycle Bin for EC2 AMIs",
      "Use AWS Backup to backup all AMIs",
      "Create a Lambda function to copy AMIs to another account"
    ],
    "correcta": 1,
    "explicacion": "Explanation: AWS Recycle Bin for EC2: - Retains deleted EBS-backed AMIs for specified period (1 day to 1 year) - Simple recovery process (restore with one click) - No backup scripting needed - Works for both AMIs and EBS snapshots How to Configure:",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | EBS = Elastic Block Store; one AZ, one instance, persistent."
  },
  {
    "id": "saa_905386687b",
    "materia": "Design Secure Architectures",
    "tema": "auto-scaling",
    "dificultad": 2,
    "pregunta": "Security Group Cross-Tier Access A three-tier application has web servers in public subnets and app servers in private subnets. App servers must only accept traffic from web servers on port 8080. Both tiers scale with Auto Scaling. What is the MOST maintainable solution?",
    "opciones": [
      "Configure app server SG to allow port 8080 from the public subnet CIDR",
      "Configure app server SG to allow port 8080 from web server SG ID ✅",
      "Use Network ACLs to restrict port 8080 access",
      "Assign Elastic IPs to web servers and whitelist them <details> <summary>📖 Explanation</summary> Key Concept: SG references create dynamic, auto-scaling access control </details> ---"
    ],
    "correcta": 1,
    "explicacion": "Security Group Rule: App Server Security Group (sg-app): Inbound Rule: - Type: Custom TCP - Port: 8080 - Source: sg-web (Web Server SG ID) Why SG-to-SG References: - ✅ Automatically adjusts as instances scale - ✅ Works regardless of IP addresses - ✅ No need to update rules when instances change - ✅ Tightly couples access to SG membership Why Not Others:",
    "explicacion_correcta": "Automatically adds/removes EC2 instances for horizontal scaling and elasticity.\n\nWhen to use: Maintain performance during traffic spikes, reduce costs by terminating instances when demand drops.\n\nKey differences: Horizontal scaling (more instances) vs vertical scaling (bigger instance). Uses dynamic scaling policies like Target Tracking.",
    "analisis_distractores": "Default termination policy: most instances in AZ → oldest launch template → closest to billing hour. Enable scale-in protection for stateful workloads.",
    "tip": "ASG = Automatically Sizes Groups horizontally."
  },
  {
    "id": "saa_90dd97325e",
    "materia": "Design High-Performing Architectures",
    "tema": "ebs",
    "dificultad": 2,
    "pregunta": "A database requires 3000 IOPS consistently. Currently using GP3 with 16,000 IOPS provisioned. What should be done to optimize costs?",
    "opciones": [
      "Switch to GP2",
      "Reduce provisioned IOPS to 3000 on GP3",
      "Switch to Magnetic storage",
      "Keep current configuration <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - GP3 allows independent provisioning of IOPS - Reduce from 16,000 to 3,000 IOPS to reduce costs - Still provides required performance - GP2 IOPS scale with volume size (less flexible) - Magnetic storage has unpredictable performance - Current configuration over-provisions by 5x References: EBS GP3, Cost Optimization </details> ---",
    "explicacion_correcta": "Persistent block-level storage volumes attached to EC2 instances. Behave like raw hard drives.\n\nWhen to use: Boot volumes for EC2, database storage, applications requiring consistent low-latency block storage.\n\nKey differences: EBS locked to single AZ. EFS spans multiple AZs and mounts to hundreds of instances. EBS is persistent, Instance Store is ephemeral.",
    "analisis_distractores": "EBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "EBS = Elastic Block Store; one AZ, one instance, persistent. | Config = Configuration compliance and history."
  },
  {
    "id": "saa_9119fa1e7e",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "direct-connect",
    "dificultad": 2,
    "pregunta": "A company has 500 TB of data to migrate from on-premises to AWS. The internet connection is 1 Gbps, but business requirements prohibit using the full bandwidth. Which solution is MOST cost-effective?",
    "opciones": [
      "Use AWS DataSync with bandwidth throttling",
      "Order multiple AWS Snowball devices",
      "Upgrade internet connection to 10 Gbps",
      "Use AWS Direct Connect with 10 Gbps connection <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - 500 TB is very large, Snowball is designed for this - Even with 1 Gbps, transfer would take months - Can't use full bandwidth due to business requirements - Snowball is faster and more cost-effective for large migrations - DataSync with throttling would be too slow - Upgrading connection is expensive - Direct Connect requires time to provision References: AWS Snowball, Large Data Migration </details> ---",
    "explicacion_correcta": "Physical rugged device delivered by AWS to securely transfer massive data offline.\n\nWhen to use: Large-scale data migrations, data center decommissioning when internet transfer would take weeks/months.\n\nKey differences: DataSync is online transfer over VPN/Direct Connect. Snowball is offline physical transport. Snowball Edge includes local compute.",
    "analisis_distractores": "Snowball for 10TB-10PB. Snowmobile (shipping container) for 10PB-100PB. Don't confuse scales.\n\nSnowball for 10TB-10PB. Snowmobile (shipping container) for 10PB-100PB. Don't confuse scales.\n\nDX is NOT encrypted by default. If scenario needs dedicated line + encryption → IPSec VPN over DX. DX has no inherent resilience (need multiple connections).",
    "tip": "Snowball = Roll massive data physically into AWS. | Snowball = Roll massive data physically into AWS."
  },
  {
    "id": "saa_916e8350d8",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "A company has a multi-region application and needs to create a unified dashboard showing CloudWatch metrics from all regions. Is this possible?",
    "opciones": [
      "No, CloudWatch dashboards are region-specific only",
      "Yes, CloudWatch dashboards support cross-region metrics",
      "Yes, but only with CloudWatch Logs, not metrics",
      "Yes, but requires CloudWatch Events to aggregate data <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - CloudWatch dashboards support cross-region and cross-account views - Can add graphs from multiple regions to single dashboard - Global view of distributed applications - No additional aggregation service required References: CloudWatch Dashboards, Cross-Region Monitoring </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nCloudWatch does NOT monitor internal OS metrics (memory, disk space) by default. Must install CloudWatch Agent.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | CloudWatch = Watches your performance metrics."
  },
  {
    "id": "saa_918a9e308b",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "An application uses a mix of EC2 instances (different families and sizes) across multiple regions, along with Fargate and Lambda. The usage is steady and predictable. Which pricing model provides the MOST flexibility and savings?",
    "opciones": [
      "EC2 Reserved Instances",
      "Compute Savings Plans",
      "EC2 Instance Savings Plans",
      "On-Demand Instances <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Compute Savings Plans apply to EC2, Fargate, and Lambda - Most flexible (any instance family, region, size) - Up to 66% discount - Automatically applies to eligible usage - EC2 RIs only cover EC2, not Fargate/Lambda - EC2 Instance Savings Plans limited to specific instance family - On-Demand provides no discount References: Compute Savings Plans, Flexible Pricing </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nIf prompt mentions minimizing operational overhead, serverless, or managing infrastructure → Fargate. If deep OS-level access needed → EC2 mode.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | Fargate = Forget managing servers; just run containers."
  },
  {
    "id": "saa_91bde4a9d8",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "cloudtrail",
    "dificultad": 2,
    "pregunta": "A company needs to ensure CloudTrail logs haven't been tampered with for compliance audits. Which feature should be enabled?",
    "opciones": [
      "CloudTrail Multi-Region Trails",
      "CloudTrail Log File Integrity Validation",
      "CloudTrail Insights",
      "CloudTrail Data Events <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Log File Integrity Validation uses digital signatures - Ensures logs haven't been modified after delivery - Required for compliance and forensic investigations - Multi-Region Trails enable logging across regions - Insights detect unusual activity - Data Events track resource operations References: CloudTrail, Log Integrity, Compliance </details> ---",
    "explicacion_correcta": "Governance, compliance, operational auditing by capturing API calls made to your AWS account.\n\nWhen to use: Track user activity, troubleshoot by identifying API calls, audit for regulatory compliance (HIPAA).\n\nKey differences: CloudWatch = what is happening (performance). CloudTrail = who did it (API activity).",
    "analisis_distractores": "Management events enabled by default (90 days free). Data events (S3 uploads, Lambda invocations) NOT enabled by default, extra cost. 15-minute delay.",
    "tip": "CloudTrail = Leaves audit Trail of API activity (Who did what)."
  },
  {
    "id": "saa_924a39531b",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A company has a web application running on 20 EC2 instances that operate 24/7 with consistent usage. The instances have been running for 2 years and are expected to run for at least 2 more years. What is the MOST cost-effective pricing model?",
    "opciones": [
      "On-Demand Instances",
      "1-year Reserved Instances with No Upfront payment",
      "3-year Reserved Instances with All Upfront payment",
      "Spot Instances <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Steady-state workload running 24/7 is perfect for Reserved Instances - 3-year term provides highest discount (up to 72%) - All Upfront payment provides maximum savings - Expected to run 2+ years, so 3-year commitment is justified - On-Demand is most expensive - Spot Instances can be interrupted - 1-year RI provides lower discount than 3-year References: Reserved Instances, Cost Optimization </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_928fca169e",
    "materia": "Design Resilient Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "ECS Service Auto Scaling vs EC2 Auto Scaling (Similar to PT5) An ECS cluster on EC2 launch type needs to scale both the number of tasks and the underlying EC2 instances. What must be configured?",
    "opciones": [
      "ECS Service Auto Scaling only",
      "EC2 Auto Scaling only",
      "Both ECS Service Auto Scaling AND EC2 Auto Scaling (Capacity Provider)",
      "Kubernetes HPA <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: ECS Two-Layer Scaling: Layer 1: ECS Service Auto Scaling ├── Scales: Number of tasks ├── Based on: CPU, memory, ALB request count └── Problem: May not have enough EC2 capacity ❌ Layer 2: EC2 Auto Scaling (Capacity Provider) ├── Scales: EC2 instances in cluster ├── Based on: Task pending, CPU reservation └── Provides capacity for tasks ✅ Both Required: ✅ └── Service scales tasks → Capacity Provider scales EC2 instances Architecture: High Load: ├── 1. ECS Service Auto Scaling detects high CPU ├── 2. Scales from 2 tasks → 4 tasks ├── 3. Tasks pending (not enough EC2 capacity) ├── 4. Capacity Provider detects pending tasks ├── 5. EC2 Auto Scaling adds instances └── 6. Tasks launched on new instances ✅ Configuration: bash # 1. Create Capacity Provider aws ecs create-capacity-provider \\ --name my-capacity-provider \\ --auto-scaling-group-provider '{ \"autoScalingGroupArn\": \"arn:aws:autoscaling:...\", \"managedScaling\": { \"status\": \"ENABLED\", \"targetCapacity\": 80, \"minimumScalingStepSize\": 1, \"maximumScalingStepSize\": 100 }, \"managedTerminationProtection\": \"ENABLED\" }' # 2. Associate with cluster aws ecs put-cluster-capacity-providers \\ --cluster my-cluster \\ --capacity-providers my-capacity-provider \\ --default-capacity-provider-strategy '[{ \"capacityProvider\": \"my-capacity-provider\", \"weight\": 1, \"base\": 0 }]' # 3. Configure ECS Service Auto Scaling aws application-autoscaling register-scalable-target \\ --service-namespace ecs \\ --resource-id service/my-cluster/my-service \\ --scalable-dimension ecs:service:DesiredCount \\ --min-capacity 2 \\ --max-capacity 10 aws application-autoscaling put-scaling-policy \\ --policy-name cpu-scaling-policy \\ --service-namespace ecs \\ --resource-id service/my-cluster/my-service \\ --scalable-dimension ecs:service:DesiredCount \\ --policy-type TargetTrackingScaling \\ --target-tracking-scaling-policy-configuration '{ \"TargetValue\": 70.0, \"PredefinedMetricSpecification\": { \"PredefinedMetricType\": \"ECSServiceAverageCPUUtilization\" } }' Key Concept: ECS on EC2 = Need both Service Auto Scaling (tasks) + Capacity Provider (instances) </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nDefault termination policy: most instances in AZ → oldest launch template → closest to billing hour. Enable scale-in protection for stateful workloads.\n\nDefault termination policy: most instances in AZ → oldest launch template → closest to billing hour. Enable scale-in protection for stateful workloads.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | ASG = Automatically Sizes Groups horizontally."
  },
  {
    "id": "saa_9356e1c4ec",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "config",
    "dificultad": 3,
    "pregunta": "Transit Gateway with ECMP A company has a Site-to-Site VPN connection between their on-premises data center and AWS. The VPN throughput is limited to 1.25 Gbps, but they need to transfer large datasets requiring 5 Gbps bandwidth. How can they increase VPN throughput cost-effectively?",
    "opciones": [
      "Upgrade to AWS Direct Connect (10 Gbps)",
      "Create multiple VPN connections and use Transit Gateway with ECMP enabled",
      "Create multiple VPN connections to Virtual Private Gateway",
      "Use VPN connection compression to increase throughput"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Transit Gateway + ECMP: - ECMP = Equal-Cost Multi-Path routing - Distributes traffic across multiple VPN tunnels - Aggregate throughput = Sum of all tunnels Architecture: On-premises --[VPN1 (1.25 Gbps)]--\\ --[VPN2 (1.25 Gbps)]----> Transit Gateway --[ECMP enabled]--> VPC A --[VPN3 (1.25 Gbps)]--/ \\-> VPC B --[VPN4 (1.25 Gbps)]--/ Total throughput: 5 Gbps (4 x 1.25) Configuration:",
    "explicacion_correcta": "Connect VPC to AWS services privately without Internet Gateway, NAT, VPN, or Direct Connect.\n\nWhen to use: Private subnets must access AWS services without traversing public internet.\n\nKey differences: Gateway Endpoints only for S3 and DynamoDB (route table prefix lists). Interface Endpoints (PrivateLink) for almost all other services (ENI with private IP).",
    "analisis_distractores": "Gateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Gateway for Big Two (S3 & DynamoDB); Interface for the Rest. | Config = Configuration compliance and history."
  },
  {
    "id": "saa_94535cf5c0",
    "materia": "Design Resilient Architectures",
    "tema": "ec2",
    "dificultad": 3,
    "pregunta": "Route 53 DNS Failover Your company has a web application running on Amazon EC2 instances behind an Application Load Balancer (ALB) in us-east-1. For disaster recovery, you have a secondary web server hosted in your on-premises data center. You need to configure DNS failover using Route 53 so that traffic automatically routes to the on-premises server if the AWS ALB becomes unhealthy. How should you configure the Route 53 records?",
    "opciones": [
      "Create a CNAME record for your domain pointing to the ALB, and another CNAME record pointing to your on-premises server IP",
      "Create two failover records: primary as a CNAME pointing to the ALB with a health check, secondary as an A record for on-premises",
      "Create two failover records: primary as an Alias record pointing to the ALB with \"Evaluate Target Health\" enabled, secondary as an A record for on-premises with a health check",
      "Create an Alias record pointing to both the ALB and on-premises server with weighted routing policy Key Exam Trap: Alias records with \"Evaluate Target Health\" only work for AWS resources. For non-AWS (on-prem), you must use explicit health checks. ---"
    ],
    "correcta": 2,
    "explicacion": "Explanation: Primary Record (AWS): - Use Alias record (not CNAME) pointing to ALB - Enable \"Evaluate Target Health\" - Route 53 automatically checks ALB target health - Failover record type: Primary Secondary Record (On-Premises): - Use A record (or CNAME for non-root) with IP address - Attach explicit Route 53 health check - Failover record type: Secondary Why Other Options Are Wrong:",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nALIAS vs CNAME: ALIAS is free, works at apex, resolves to IP. CNAME maps name to name, can't be at apex.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_948cfb780a",
    "materia": "Design High-Performing Architectures",
    "tema": "s3",
    "dificultad": 1,
    "pregunta": "An application needs to upload large files (100 GB+) to S3 with optimal performance. What should be used?",
    "opciones": [
      "Single PUT operation",
      "S3 Multipart Upload",
      "S3 Transfer Acceleration",
      "AWS DataSync <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - S3 Multipart Upload: - Upload large objects in parts - Parts uploaded in parallel (better throughput) - Can pause/resume - Recommended for files > 100 MB - Required for files > 5 GB Multipart Upload Benefits: - Improved throughput (parallel uploads) - Quick recovery from network issues - Pause and resume uploads - Upload before knowing final size Best Practices: - Use for files > 100 MB - Required for files > 5 GB - Upload parts in parallel - Configure lifecycle to abort incomplete uploads Transfer Acceleration: - Different feature (uses CloudFront edge locations) - Speeds up uploads via edge locations - Can combine with Multipart Upload References: S3 Multipart Upload, Large File Uploads </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCaching HTTP content → CloudFront. Non-HTTP or static IPs needed → Global Accelerator. Use OAI/OAC to protect S3 origins.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | CloudFront = Sits in front of your web app to cache HTTP."
  },
  {
    "id": "saa_95203293bd",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "rds",
    "dificultad": 3,
    "pregunta": "AWS Step Functions A restaurant management application uses multiple Lambda functions to process orders: ValidateOrder, ChargePayment, UpdateInventory, and NotifyRestaurant. Currently, these functions are invoked sequentially using custom orchestration code, which is difficult to maintain and debug. Failures in any step require manual intervention. Which AWS service should you use to orchestrate this workflow with built-in error handling and visual monitoring?",
    "opciones": [
      "Amazon SQS with Lambda triggers",
      "AWS Step Functions",
      "Amazon EventBridge with multiple rules",
      "AWS Glue workflow"
    ],
    "correcta": 1,
    "explicacion": "Explanation: AWS Step Functions: - Visual Workflow: See execution flow in AWS Console - State Machine: Define order of operations in JSON/YAML - Error Handling: Built-in retry and catch logic - Service Integrations: Direct integration with Lambda, DynamoDB, SQS, SNS, etc. - Execution History: Track every step of each workflow State Machine Example: json { \"StartAt\": \"ValidateOrder\", \"States\": { \"ValidateOrder\": { \"Type\": \"Task\", \"Resource\": \"arn:aws:lambda:...:ValidateOrder\", \"Next\": \"ChargePayment\", \"Catch\": [{\"ErrorEquals\": [\"ValidationError\"], \"Next\": \"HandleError\"}] }, \"ChargePayment\": {...}, \"UpdateInventory\": {...}, \"NotifyRestaurant\": {...} } } Why Not Others: - A (SQS): Requires custom orchestration; no visual workflow - C (EventBridge): Good for event routing, not sequential orchestration - D (Glue): For ETL workflows, not microservice orchestration Exam Keywords: \"orchestrate\", \"workflow\", \"multiple steps\", \"error handling\" → Step Functions ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nCommon pattern: optimize S3 data for Athena → use Glue to transform to Parquet/ORC columnar format.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Glue = The glue that sticks raw data to analytics tools."
  },
  {
    "id": "saa_95b4a98575",
    "materia": "Design High-Performing Architectures",
    "tema": "dynamodb",
    "dificultad": 2,
    "pregunta": "DynamoDB Streams Change Capture (Similar to PT6-Q35) Capture real-time changes (inserts, updates, deletes) from DynamoDB table. Which solution?",
    "opciones": [
      "Query table every minute with timestamp filter",
      "Enable DynamoDB Streams, process with Lambda",
      "Export table to S3 hourly",
      "CloudWatch Events for DynamoDB API calls <details> <summary>✅ Click to reveal answer</summary> Key Concept: DynamoDB Streams = Real-time change data capture </details> ---"
    ],
    "correcta": 1,
    "explicacion": "Explanation: DynamoDB Streams: Features: ├── Captures: INSERT, MODIFY, DELETE ├── Latency: Milliseconds (near real-time) ✅ ├── Retention: 24 hours └── Consumer: Lambda, Kinesis, custom apps Flow: DynamoDB Table → Stream → Lambda → Process Why others wrong:",
    "explicacion_correcta": "Serverless compute service running code without provisioning/managing servers, auto-scales on demand.\n\nWhen to use: Event-driven architectures, serverless microservices, real-time file processing (S3 triggers), scheduled CRON jobs (EventBridge).\n\nKey differences: EC2 = manage OS, pay for running time. Lambda = abstracted infrastructure, pay for exact execution time. Fargate = serverless containers. Lambda = Function-as-a-Service.",
    "analisis_distractores": "Lambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nReduce latency to microseconds → DAX (DynamoDB Accelerator). Active-active multi-region → Global Tables. Unpredictable workloads → On-Demand capacity.\n\nKinesis Data Streams for custom processing. Kinesis Data Firehose for automatic delivery to S3/Redshift/Elasticsearch (no code needed).",
    "tip": "Lambda = Limit of 15 minutes for serverless code. | Dynamo = Dynamic infinite scaling for NoSQL."
  },
  {
    "id": "saa_95bd53493f",
    "materia": "Design High-Performing Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "A CRM application experiences slow performance at the start of the day (9 AM) but works normally after a couple of hours. What is the most operationally efficient solution? Options:",
    "opciones": [
      "Configure Dynamic scaling policy based on CPU utilization",
      "Configure Dynamic scaling policy based on Memory utilization",
      "Configure Scheduled scaling policy to launch instances before start of day",
      "Configure Predictive scaling policy to automatically adjust instances"
    ],
    "correcta": 2,
    "explicacion": "Explanation: Scheduled scaling allows you to scale your application in response to predictable load changes. Since the pattern is known (slow performance at start of day), scheduled scaling is most efficient to pre-scale before peak hours. ### Target Tracking Scaling"
  },
  {
    "id": "saa_95cff68cfa",
    "materia": "Design High-Performing Architectures",
    "tema": "cloudfront",
    "dificultad": 2,
    "pregunta": "A company wants to implement a global accelerator for their application with static IP addresses and deterministic routing. Which service should be used?",
    "opciones": [
      "Amazon CloudFront",
      "AWS Global Accelerator",
      "Route 53 with Latency Routing",
      "Elastic Load Balancing <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - AWS Global Accelerator provides static anycast IPs - Routes traffic over AWS global network - Deterministic, fast failover - Health checks and instant failover Global Accelerator vs CloudFront: | Feature | Global Accelerator | CloudFront | |---------|-------------------|------------| | Use Case | TCP/UDP apps | HTTP/HTTPS content | | Caching | No | Yes | | Static IP | Yes (2 anycast) | No | | Failover | Instant (< 30s) | DNS-based | | Protocol | TCP, UDP | HTTP, HTTPS, WebSocket | Global Accelerator Benefits: - Static IPs (no DNS changes) - AWS network routing (better performance) - Health-based routing - Traffic dials for blue/green deployments Use Cases: - Gaming (UDP) - IoT - VoIP - Non-HTTP applications References: AWS Global Accelerator, Global Traffic Management </details> ---",
    "explicacion_correcta": "Persistent block-level storage volumes attached to EC2 instances. Behave like raw hard drives.\n\nWhen to use: Boot volumes for EC2, database storage, applications requiring consistent low-latency block storage.\n\nKey differences: EBS locked to single AZ. EFS spans multiple AZs and mounts to hundreds of instances. EBS is persistent, Instance Store is ephemeral.",
    "analisis_distractores": "EBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.\n\nNon-HTTP traffic or need static IPs → Global Accelerator. HTTP caching → CloudFront. Instant failover with health checks.\n\nNon-HTTP traffic or need static IPs → Global Accelerator. HTTP caching → CloudFront. Instant failover with health checks.",
    "tip": "EBS = Elastic Block Store; one AZ, one instance, persistent. | Global Accelerator = Accelerate global traffic with static anycast IPs."
  },
  {
    "id": "saa_97d878494b",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A security team needs to identify which IAM user terminated a critical EC2 instance last week. Which AWS service should they use?",
    "opciones": [
      "Amazon CloudWatch Logs",
      "AWS Config",
      "AWS CloudTrail",
      "AWS Systems Manager <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - CloudTrail records API calls including WHO made them - It tracks management events like TerminateInstances - CloudTrail logs include user identity, timestamp, and action - Option A (CloudWatch Logs) monitors application logs, not API calls - Option B (Config) tracks resource configuration, not who made changes - Option D (Systems Manager) is for operational management References: CloudTrail, API Call Auditing, Governance </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_99bd12fd8f",
    "materia": "Design Secure Architectures",
    "tema": "lambda",
    "dificultad": 2,
    "pregunta": "A development team is building a GraphQL API for a mobile app and wants to minimize backend management. Which AWS service should they use?",
    "opciones": [
      "AWS AppSync",
      "Amazon API Gateway",
      "AWS Lambda",
      "Amazon Cognito <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - AWS AppSync is a managed GraphQL API service - Handles real-time data sync, subscriptions, and offline access - API Gateway is for REST/HTTP APIs - Lambda is compute, not API management - Cognito is for authentication, not APIs References: AWS AppSync, GraphQL APIs </details> ---",
    "explicacion_correcta": "Serverless compute service running code without provisioning/managing servers, auto-scales on demand.\n\nWhen to use: Event-driven architectures, serverless microservices, real-time file processing (S3 triggers), scheduled CRON jobs (EventBridge).\n\nKey differences: EC2 = manage OS, pay for running time. Lambda = abstracted infrastructure, pay for exact execution time. Fargate = serverless containers. Lambda = Function-as-a-Service.",
    "analisis_distractores": "Lambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nAPI Gateway integrates with Lambda (no VPC needed) and HTTP backends (needs VPC link for private). WebSocket APIs for bidirectional communication.",
    "tip": "Lambda = Limit of 15 minutes for serverless code. | API Gateway = Gatekeeper for your APIs (throttle, cache, secure)."
  },
  {
    "id": "saa_9acae896bf",
    "materia": "Design Secure Architectures",
    "tema": "waf",
    "dificultad": 2,
    "pregunta": "A company wants to protect their application from DDoS attacks and ensure cost protection during large-scale attacks. Which service provides these features?",
    "opciones": [
      "AWS WAF",
      "AWS Shield Standard",
      "AWS Shield Advanced",
      "Security Groups <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - AWS Shield Advanced provides enhanced DDoS protection with cost protection - 24/7 access to DDoS Response Team (DRT) - Advanced attack detection and mitigation - Cost protection against scaling charges during attacks Shield Comparison: | Feature | Shield Standard | Shield Advanced | |---------|----------------|-----------------| | Cost | Free | $3,000/month | | Protection Level | Network/Transport (L3/L4) | Network + Application (L3/L4/L7) | | DDoS Response Team | No | 24/7 access | | Cost Protection | No | Yes (scaling charges) | | Advanced Detection | Basic | Enhanced, real-time | | Health-based Detection | No | Yes | | Application Layer | Via WAF | Included + WAF | Shield Advanced Features:",
    "explicacion_correcta": "Web application firewall that protects web applications from common exploits (SQL injection, XSS).\n\nWhen to use: Protecting applications behind CloudFront, ALB, or API Gateway from OWASP top 10 threats.\n\nKey differences: WAF operates at Layer 7 (HTTP/HTTPS). Shield protects against DDoS (Layer 3/4). GuardDuty detects threats intelligently.",
    "analisis_distractores": "WAF for app-level attacks (SQLi, XSS). Shield for DDoS. Don't confuse them.",
    "tip": "WAF = Web Application Filter (Layer 7 rules)."
  },
  {
    "id": "saa_9ad33824cc",
    "materia": "general",
    "tema": "aws-architect",
    "dificultad": 3,
    "pregunta": "A company plans to migrate its existing on-premises infrastructure to the AWS Cloud. Since their current business workflows heavily rely on legacy systems, they want to evaluate their AWS Cloud readiness first and prioritize any business transformation opportunities before commencing their migration activities. Which AWS service or tool can the company use to help them meet these requirements?",
    "opciones": [
      "AWS Prescriptive Guidance",
      "AWS Cloud Adoption Framework (AWS CAF)",
      "AWS Migration Hub",
      "AWS Support"
    ],
    "correcta": 1,
    "explicacion": ""
  },
  {
    "id": "saa_9b26656945",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "auto-scaling",
    "dificultad": 2,
    "pregunta": "An application experiences predictable traffic spikes every Monday at 9 AM. What is the MOST cost-effective Auto Scaling approach?",
    "opciones": [
      "Target Tracking Scaling",
      "Simple Scaling",
      "Step Scaling",
      "Scheduled Scaling <details> <summary>Show Answer</summary>"
    ],
    "correcta": 3,
    "explicacion": "Explanation: - Scheduled Scaling scales based on predefined schedule - Perfect for predictable traffic patterns - Scales before traffic spike occurs (proactive) - Most cost-effective for known patterns Schedule Example: bash aws autoscaling put-scheduled-update-group-action \\ --auto-scaling-group-name my-asg \\ --scheduled-action-name monday-morning-scale \\ --recurrence \"0 8 * * MON\" \\ --desired-capacity 10 - Option A: Target Tracking is reactive, scales after metric changes - Option B/C: Step/Simple scaling are reactive - Scheduled = Proactive, Target/Step/Simple = Reactive References: Auto Scaling Policies, Scheduled Scaling </details> ---",
    "explicacion_correcta": "Automatically adds/removes EC2 instances for horizontal scaling and elasticity.\n\nWhen to use: Maintain performance during traffic spikes, reduce costs by terminating instances when demand drops.\n\nKey differences: Horizontal scaling (more instances) vs vertical scaling (bigger instance). Uses dynamic scaling policies like Target Tracking.",
    "analisis_distractores": "Default termination policy: most instances in AZ → oldest launch template → closest to billing hour. Enable scale-in protection for stateful workloads.",
    "tip": "ASG = Automatically Sizes Groups horizontally."
  },
  {
    "id": "saa_9b4b28af01",
    "materia": "Design Secure Architectures",
    "tema": "iam",
    "dificultad": 2,
    "pregunta": "A company uses SAML 2.0 to allow employees to access AWS using their corporate Active Directory credentials. What type of access is this?",
    "opciones": [
      "IAM user access",
      "Root account access",
      "Federated access",
      "Programmatic access <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Federation allows users to access AWS using existing corporate credentials - SAML 2.0 is a standard for identity federation - Users authenticate with corporate IdP (like Active Directory) - IdP provides temporary AWS credentials via IAM role assumption - No need to create IAM users for each employee - Types of Federation: SAML 2.0, OpenID Connect, Custom Identity Broker Federation Flow:",
    "explicacion_correcta": "Fully managed service to securely control access using users, groups, roles, and identity-based policies.\n\nWhen to use: Implement least privilege, manage MFA, define permissions for humans/apps/services interacting with AWS.\n\nKey differences: IAM manages permissions within one AWS account. Organizations (SCPs) manages boundaries across accounts. Cognito handles app end-user auth.",
    "analisis_distractores": "Explicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_9c14d78c93",
    "materia": "Design Resilient Architectures",
    "tema": "rds",
    "dificultad": 1,
    "pregunta": "Which AWS service is best for caching with persistence and backup capabilities?",
    "opciones": [
      "ElastiCache for Memcached",
      "ElastiCache for Redis",
      "DynamoDB",
      "RDS"
    ],
    "correcta": 1,
    "explicacion": "--- ## Hands-On Labs ### Lab 1: RDS Multi-AZ",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nMulti-AZ is for resilience, NOT read scaling. Converting Single-AZ to Multi-AZ is zero-downtime.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Multi-AZ = Automatic Zero-data-loss standby (DR, not reads)."
  },
  {
    "id": "saa_9c38a1ac84",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "An EC2 instance in a VPC needs to access S3 without internet connectivity. Which solution provides private network connectivity? Options:",
    "opciones": [
      "Create a gateway VPC endpoint for S3",
      "Stream logs to CloudWatch Logs then export to S3",
      "Create an instance profile on EC2 to allow S3 access",
      "Create an API Gateway API with private link"
    ],
    "correcta": 0,
    "explicacion": "Explanation: A gateway VPC endpoint for S3 allows EC2 instances to access S3 privately without going through the internet. It routes traffic through AWS's private network. ### Application Load Balancer Configuration",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_9eec63981b",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "sns",
    "dificultad": 2,
    "pregunta": "A company wants to set a budget of $10,000/month and receive alerts at 80% and 100% of budget. Which service should be used?",
    "opciones": [
      "AWS Cost Explorer",
      "AWS Budgets",
      "CloudWatch Alarms",
      "AWS Trusted Advisor <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - AWS Budgets creates custom cost and usage budgets - Set thresholds (80%, 100%) for alerts - Sends SNS notifications when thresholds are exceeded - Can set monthly, quarterly, or annual budgets - Cost Explorer analyzes costs but doesn't alert - CloudWatch monitors resources, not costs - Trusted Advisor provides recommendations References: AWS Budgets, Cost Alerts </details> ---",
    "explicacion_correcta": "Fully managed push-based pub/sub messaging for decoupling microservices and broadcasting notifications.\n\nWhen to use: Fan-out pattern (single event to multiple subscribers): email, SMS, mobile push, multiple SQS queues, Lambda functions.\n\nKey differences: SNS = push-based pub/sub broadcast. SQS = pull-based point-to-point. EventBridge = complex rule-based filtering + SaaS integrations.",
    "analisis_distractores": "Use SNS+SQS fan-out for reliable task processing (SNS alone can lose messages if endpoint offline).\n\nCloudWatch does NOT monitor internal OS metrics (memory, disk space) by default. Must install CloudWatch Agent.",
    "tip": "SNS = Send Notifications Simultaneously (Broadcast/Push). | CloudWatch = Watches your performance metrics."
  },
  {
    "id": "saa_9f79a9c2e6",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company must ensure that all API calls across their AWS organization are logged and stored for 7 years for compliance. Which services should be configured?",
    "opciones": [
      "CloudWatch Logs with 7-year retention",
      "CloudTrail with S3 storage and Glacier lifecycle",
      "AWS Config with long-term storage",
      "VPC Flow Logs <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - AWS CloudTrail records all API calls (management and data events) - Store logs in S3 for long-term retention - Use S3 Lifecycle policies to transition to Glacier for cost optimization CloudTrail Configuration:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nMulti-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nCannot upload directly to Glacier via console. Must use S3 Lifecycle policy or CLI/SDK. Data must pass through S3 first.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | RDS: Relational, Replicas for Reads, Multi-AZ for Resilience."
  },
  {
    "id": "saa_9f8abebdac",
    "materia": "general",
    "tema": "athena",
    "dificultad": 2,
    "pregunta": "An ETL pipeline needs to transform data from multiple sources, catalog the metadata, and run the jobs on a schedule. Which AWS service provides this functionality?",
    "opciones": [
      "Amazon EMR",
      "AWS Glue",
      "AWS Data Pipeline",
      "Amazon Athena <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - AWS Glue is fully managed ETL service - Glue Data Catalog stores metadata - Glue Crawlers discover schemas - Glue Jobs perform transformations - Supports scheduling - EMR requires more management - Data Pipeline is older service - Athena queries, doesn't transform References: AWS Glue, ETL Pipeline </details> ---",
    "explicacion_correcta": "Fully managed serverless ETL and data integration service. Discovers schemas, stores metadata in Data Catalog.\n\nWhen to use: Preparing data for analytics, transforming CSV/JSON to Parquet/ORC for Athena, running serverless Spark jobs.\n\nKey differences: Glue is serverless; EMR requires provisioning and managing Hadoop/Spark cluster.",
    "analisis_distractores": "Common pattern: optimize S3 data for Athena → use Glue to transform to Parquet/ORC columnar format.\n\nCommon pattern: optimize S3 data for Athena → use Glue to transform to Parquet/ORC columnar format.\n\nAthena costs $5/TB scanned. Optimize by partitioning data and using Parquet/ORC columnar format.",
    "tip": "Glue = The glue that sticks raw data to analytics tools. | Glue = The glue that sticks raw data to analytics tools."
  },
  {
    "id": "saa_a028c2c2fa",
    "materia": "Design Resilient Architectures",
    "tema": "s3",
    "dificultad": 1,
    "pregunta": "A MongoDB application needs to be migrated to AWS with minimal changes. Which service should be used?",
    "opciones": [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon DocumentDB",
      "Amazon Neptune <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Amazon DocumentDB is MongoDB-compatible document database - Fully managed - MongoDB 3.6 and 4.0 compatibility - Scales to millions of requests/second - Multi-AZ replication - Automatic backups DocumentDB Features: - Document data model (JSON) - MongoDB drivers and tools compatible - Storage auto-scales to 64 TB - Up to 15 read replicas - Continuous backup to S3 Migration: Use AWS Database Migration Service (DMS) When to use: - Existing MongoDB workloads - Document-oriented data - Need managed service References: Amazon DocumentDB, MongoDB on AWS </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nMulti-AZ is for resilience, NOT read scaling. Converting Single-AZ to Multi-AZ is zero-downtime.\n\nRead Replicas don't failover automatically (manual promotion). Cross-region incurs data transfer fees; same-region is free.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Multi-AZ = Automatic Zero-data-loss standby (DR, not reads)."
  },
  {
    "id": "saa_a0f707160a",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company collects application logs in CloudWatch Logs and wants to analyze them using SQL queries. What is the MOST cost-effective solution?",
    "opciones": [
      "Keep logs in CloudWatch and use Logs Insights",
      "Export logs to S3 and query with Athena",
      "Stream logs to Kinesis and use Data Analytics",
      "Load logs into Redshift <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - CloudWatch Logs storage is expensive for long-term retention - Export to S3 significantly reduces storage costs - Athena queries S3 data with SQL ($5/TB scanned) - Most cost-effective for infrequent analysis - Logs Insights is good for recent logs - Kinesis adds streaming costs - Redshift requires cluster costs References: CloudWatch Logs Export, Athena Cost Optimization </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nAthena costs $5/TB scanned. Optimize by partitioning data and using Parquet/ORC columnar format.\n\nRedshift Spectrum allows querying S3 data directly without loading. Redshift is NOT for OLTP.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Athena = SQL queries on S3, serverless, pay per byte scanned."
  },
  {
    "id": "saa_a15a06ace8",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "A company runs batch processing jobs that can be interrupted and resumed without data loss. The jobs run for 4-6 hours daily. What is the MOST cost-effective compute option?",
    "opciones": [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
      "Dedicated Hosts <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Spot Instances provide up to 90% savings vs On-Demand - Batch processing is fault-tolerant (can handle interruptions) - Jobs can checkpoint and resume - Perfect use case for Spot - On-Demand is too expensive - Reserved requires commitment (not needed for 4-6 hours daily) - Dedicated Hosts are most expensive References: Spot Instances, Fault-Tolerant Workloads </details> ---"
  },
  {
    "id": "saa_a232fe04cd",
    "materia": "Design Secure Architectures",
    "tema": "config",
    "dificultad": 1,
    "pregunta": "A Security Group allows inbound traffic on port 443 from 0.0.0.0/0. What outbound rule is needed for responses?",
    "opciones": [
      "Allow port 443 outbound to 0.0.0.0/0",
      "Allow ephemeral ports outbound",
      "No outbound rule needed",
      "Allow all traffic outbound <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Security Groups are stateful - If inbound is allowed, return traffic automatically allowed - No need to configure outbound rule for responses - Only need outbound rules for instance-initiated traffic Security Groups vs NACLs: | Feature | Security Groups | NACLs | |---------|----------------|-------| | State | Stateful | Stateless | | Level | Instance | Subnet | | Rules | Allow only | Allow and Deny | | Return Traffic | Automatic | Must configure | | Evaluation | All rules | Ordered rules | References: Security Groups, Stateful Firewalls </details> ---",
    "explicacion_correcta": "Continuously records configuration changes of AWS resources over time into configuration histories.\n\nWhen to use: Enforce compliance by tracking configuration changes, identifying compliant/non-compliant services.\n\nKey differences: CloudTrail = API call that requested change. Config = actual configuration state resulting from change.",
    "analisis_distractores": "Config is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Config = Configuration compliance and history."
  },
  {
    "id": "saa_a268d7ce64",
    "materia": "Design Secure Architectures",
    "tema": "iam",
    "dificultad": 1,
    "pregunta": "What happens when an IAM policy explicitly denies an action, but another policy explicitly allows the same action?",
    "opciones": [
      "The action is allowed",
      "The action is denied",
      "The policies conflict and fail",
      "The newer policy takes precedence <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Explicit deny always overrides explicit allow. This is a fundamental rule of IAM policy evaluation. </details>",
    "explicacion_correcta": "Fully managed service to securely control access using users, groups, roles, and identity-based policies.\n\nWhen to use: Implement least privilege, manage MFA, define permissions for humans/apps/services interacting with AWS.\n\nKey differences: IAM manages permissions within one AWS account. Organizations (SCPs) manages boundaries across accounts. Cognito handles app end-user auth.",
    "analisis_distractores": "Explicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_a2ad549967",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "An Athena query is scanning 10 TB of data but only needs records from the last month. The S3 bucket structure is organized by year, month, and day. How can query performance and cost be improved?",
    "opciones": [
      "Use S3 Select to filter data",
      "Create a partitioned table in Athena and query specific partitions",
      "Enable S3 Intelligent-Tiering",
      "Use Athena workgroups <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Partitioning allows queries to scan only relevant data - WHERE clause with partition keys limits scan to specific partitions - Dramatically reduces data scanned and costs - Example: WHERE year='2024' AND month='01' - S3 Select reduces transfer but doesn't work with Athena - Intelligent-Tiering is for storage costs - Workgroups organize queries but don't optimize scans References: Athena Partitioning, Query Optimization </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nMulti-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nAthena costs $5/TB scanned. Optimize by partitioning data and using Parquet/ORC columnar format.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | RDS: Relational, Replicas for Reads, Multi-AZ for Resilience."
  },
  {
    "id": "saa_a3df142b47",
    "materia": "general",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A solutions architect needs to migrate 50 TB of data from an on-premises NFS server to Amazon S3. The company has a 100 Mbps internet connection. Which service is MOST appropriate?",
    "opciones": [
      "AWS DataSync",
      "AWS Snowball",
      "AWS Direct Connect",
      "AWS Transfer Family <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - 50 TB over 100 Mbps would take approximately 46 days - Snowball is designed for large data transfers with limited bandwidth - Can transfer 50-80 TB per device in about a week - DataSync works over network but would be too slow - Direct Connect is for ongoing connectivity, not one-time migration - Transfer Family is for SFTP/FTPS access to S3 Calculation: 50 TB = 400,000 Gb ÷ 100 Mbps = 4,000,000 seconds ≈ 46 days References: AWS Snowball, Data Transfer Services </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nSnowball for 10TB-10PB. Snowmobile (shipping container) for 10PB-100PB. Don't confuse scales.\n\nSnowball for 10TB-10PB. Snowmobile (shipping container) for 10PB-100PB. Don't confuse scales.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Snowball = Roll massive data physically into AWS."
  },
  {
    "id": "saa_a436d1d42a",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "An online medical system stores sensitive PII in S3. Both master keys and unencrypted data should never be sent to AWS. Which S3 encryption technique should be used? Options:",
    "opciones": [
      "S3 client-side encryption with an AWS KMS key",
      "S3 client-side encryption with a client-side master key",
      "S3 server-side encryption with an AWS KMS key",
      "S3 server-side encryption with customer provided key"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Client-side encryption with a client-side master key ensures that your client-side master keys and unencrypted data are never sent to AWS. The client encrypts data locally before sending to S3. ### Redis Authentication",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization."
  },
  {
    "id": "saa_a45867c229",
    "materia": "Design High-Performing Architectures",
    "tema": "eks",
    "dificultad": 3,
    "pregunta": "Amazon EKS Anywhere A financial company needs to run Kubernetes workloads on-premises for regulatory reasons but wants to use the same tools and APIs as Amazon EKS in the cloud. They don't want to manage Kubernetes control plane components manually. Which solution should they use?",
    "opciones": [
      "Install open-source Kubernetes manually",
      "Use Amazon EKS Anywhere",
      "Use Amazon EKS Distro",
      "Deploy EKS in AWS and connect via VPN"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Amazon EKS Anywhere: - ✅ Fully supported EKS deployment on your infrastructure - ✅ Same tooling as cloud EKS - ✅ Managed control plane lifecycle - ✅ Automatic updates - ✅ Works with on-premises, edge, or bare metal EKS Distro (Option C): - Open-source Kubernetes distribution - YOU manage everything (control plane, updates, etc.) - No integrated tooling or support Comparison: | Feature | EKS Cloud | EKS Anywhere | EKS Distro | |---------|-----------|--------------|------------| | Control Plane | AWS manages | AWS tooling | You manage | | Location | AWS only | On-premises | Anywhere | | Support | Yes | Yes | Community | | Integrated Tools | Yes | Yes | No | Use Cases for EKS Anywhere: - Data residency requirements - Low-latency local processing - Hybrid Kubernetes deployments - Regulated industries ---",
    "explicacion_correcta": "Managed Kubernetes service for running Kubernetes on AWS without installing the control plane.\n\nWhen to use: Containerized applications using Kubernetes orchestration, multi-cloud portability.\n\nKey differences: EKS uses Kubernetes; ECS uses AWS-native orchestration. Fargate removes server management for both.",
    "analisis_distractores": "If scenario mentions Kubernetes specifically, answer is EKS. If it says containers but no Kubernetes preference, ECS may be simpler.",
    "tip": "EKS = Elastic Kubernetes Service; Kubernetes on AWS."
  },
  {
    "id": "saa_a68b8892ad",
    "materia": "general",
    "tema": "aurora",
    "dificultad": 2,
    "pregunta": "A company wants to migrate an Oracle database to Amazon Aurora PostgreSQL. The database schemas and stored procedures need to be converted. Which combination of services should be used?",
    "opciones": [
      "AWS DMS only",
      "AWS Schema Conversion Tool (SCT) only",
      "AWS SCT to convert schema, then AWS DMS to migrate data",
      "AWS DataSync to transfer the database <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - This is a heterogeneous migration (different database engines) - SCT converts schemas, stored procedures, and functions - DMS migrates the actual data with minimal downtime - DMS alone doesn't convert schemas for heterogeneous migrations - SCT alone doesn't migrate data - DataSync is for file systems, not databases References: AWS DMS, Schema Conversion Tool, Heterogeneous Migration </details> ---",
    "explicacion_correcta": "Cloud-native managed relational database (MySQL/PostgreSQL compatible) with commercial-grade performance.\n\nWhen to use: High-performance OLTP workloads needing enterprise-level availability and scalability.\n\nKey differences: Faster failover, more read replicas (up to 15), better performance than standard RDS. Aurora Serverless auto-scales.",
    "analisis_distractores": "Aurora Global Database for cross-region replication with <1s latency. Aurora Multi-Master for write scaling.\n\nAurora storage auto-scales in 10GB increments up to 128TB. No need for read replicas for HA (6 copies already).",
    "tip": "Aurora = Fastest cloud-native RDS, 5x MySQL, 3x PostgreSQL. | Aurora = 6 copies, 3 AZs, self-healing, no manual HA setup."
  },
  {
    "id": "saa_a70124c034",
    "materia": "general",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "You had set up an internal HTTP(S) Elastic Load Balancer to route requests to two EC2 instances inside a private VPC. However, one of the target EC2 instance is showing Unhealthy status. Which of the following options could not be a reason for this?",
    "opciones": [
      "Port 80/443 is not allowed on EC2 instance’s Security Group from the load balancer.",
      "An EC2 instance is in different availability zones than load balancer.",
      "The ping path does not exist on the EC2 instance.",
      "The target did not return a successful response code"
    ],
    "correcta": 1,
    "explicacion": "If a target is taking longer than expected to enter the InService state, it might be failing health checks. Your target is not in service until it passes one health check. https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-tro ubleshooting.html#target-not-inservice https://docs.aws.amazon.com/elasticloadbalancing/latest/application/target-group-heal th-checks.html",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | Gateway for Big Two (S3 & DynamoDB); Interface for the Rest."
  },
  {
    "id": "saa_a70b5efd28",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "A company has 50 m5.large instances running continuously in us-east-1 with consistent usage. They want to purchase Reserved Instances. What type provides the highest discount?",
    "opciones": [
      "Standard RI, 1-year, No Upfront",
      "Standard RI, 3-year, All Upfront",
      "Convertible RI, 3-year, All Upfront",
      "Convertible RI, 1-year, Partial Upfront <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Standard RIs provide higher discount than Convertible (up to 72%) - 3-year term provides higher discount than 1-year - All Upfront payment provides highest discount - Consistent usage makes 3-year commitment viable - Convertible RIs have lower discount (up to 54%) - Partial/No Upfront have lower discounts References: Reserved Instances, Discount Maximization </details> ---"
  },
  {
    "id": "saa_a758ae7658",
    "materia": "general",
    "tema": "nat-gateway",
    "dificultad": 2,
    "pregunta": "A company wants to create an isolated network in AWS where they can launch resources. Which AWS service should they use?",
    "opciones": [
      "AWS Direct Connect",
      "Amazon VPC",
      "AWS Transit Gateway",
      "Amazon Route 53 <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Amazon VPC (Virtual Private Cloud) provides isolated network environment - Logically isolated section of AWS Cloud - Complete control over networking (IP ranges, subnets, route tables, gateways) - Can create public and private subnets VPC Key Components: - CIDR Block: IP address range (e.g., 10.0.0.0/16) - Subnets: Subdivisions within VPC - Route Tables: Control traffic routing - Internet Gateway: Access to internet - NAT Gateway: Outbound internet for private subnets References: Amazon VPC, VPC Fundamentals </details> ---",
    "explicacion_correcta": "Connect VPC to AWS services privately without Internet Gateway, NAT, VPN, or Direct Connect.\n\nWhen to use: Private subnets must access AWS services without traversing public internet.\n\nKey differences: Gateway Endpoints only for S3 and DynamoDB (route table prefix lists). Interface Endpoints (PrivateLink) for almost all other services (ENI with private IP).",
    "analisis_distractores": "Gateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.\n\nSingle NAT Gateway is AZ-resilient only. For full regional HA → deploy NAT Gateway in each AZ. Must be in public subnet.",
    "tip": "Gateway for Big Two (S3 & DynamoDB); Interface for the Rest. | NAT Gateway = Needs A public subnet To function, one per AZ for HA."
  },
  {
    "id": "saa_a75ed8d1fc",
    "materia": "Design High-Performing Architectures",
    "tema": "ebs",
    "dificultad": 2,
    "pregunta": "EBS Provisioned IOPS for Database (Similar to PT6-Q6) Database requires 20,000 IOPS consistent performance. Which EBS volume type?",
    "opciones": [
      "gp3 with 20,000 provisioned IOPS",
      "io2 with 20,000 provisioned IOPS",
      "gp2 with large volume for 20,000 baseline",
      "st1 for high throughput <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: EBS Volume Limits: gp3: Up to 16,000 IOPS max ❌ ├── Cannot provision 20,000 IOPS └── Need io2 instead io2: Up to 64,000 IOPS ✅ ├── Can provision 20,000 IOPS ├── Sub-millisecond latency └── Cost: Higher than gp3 Decision: - Need > 16,000 IOPS → Use io2 - Need ≤ 16,000 IOPS → Use gp3 (cheaper) Key Concept: gp3 max = 16,000 IOPS; io2 for higher IOPS requirements </details> ---",
    "explicacion_correcta": "Persistent block-level storage volumes attached to EC2 instances. Behave like raw hard drives.\n\nWhen to use: Boot volumes for EC2, database storage, applications requiring consistent low-latency block storage.\n\nKey differences: EBS locked to single AZ. EFS spans multiple AZs and mounts to hundreds of instances. EBS is persistent, Instance Store is ephemeral.",
    "analisis_distractores": "EBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.",
    "tip": "EBS = Elastic Block Store; one AZ, one instance, persistent."
  },
  {
    "id": "saa_a80df72ff2",
    "materia": "Design High-Performing Architectures",
    "tema": "ec2",
    "dificultad": 3,
    "pregunta": "AWS Application Discovery Service A company plans to migrate 500 VMware virtual machines from its on-premises data center to AWS. They need to collect CPU, memory, disk, and network utilization metrics to right-size EC2 instances. The VMs run various operating systems (Windows, Linux, custom apps). What's the most efficient approach?",
    "opciones": [
      "Install AWS Discovery Agent on each VM",
      "Deploy AWS Application Discovery Service Agentless Collector (OVA) in VMware",
      "Use AWS Migration Hub without discovery",
      "Manually document server specifications"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Agentless Discovery (Recommended for VMware): - Deploy: OVA appliance in VMware environment - Integrates with: vCenter Server - Collects: System performance, resource utilization, network connections - No agent needed: on individual VMs How to Deploy:",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_a8fe02c0a0",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company needs to provide Microsoft Active Directory authentication for AWS applications and resources. Which AWS service should they use?",
    "opciones": [
      "AWS Directory Service",
      "AWS IAM",
      "AWS SSO",
      "Amazon Cognito <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - AWS Directory Service provides managed Microsoft AD in AWS - Supports AD authentication for EC2, RDS, WorkSpaces, and more - IAM is for AWS-native identities - SSO is for SAML/OIDC-based SSO - Cognito is for app user authentication, not AD References: AWS Directory Service, Managed Microsoft AD </details> --- ## Summary Total Questions: 25 Topics Covered: - AWS KMS (SSE-S3, SSE-KMS, CMK, Key Rotation) - AWS Secrets Manager (Automatic Rotation) - AWS CloudTrail (API Logging, Compliance) - Amazon GuardDuty (Threat Detection) - AWS Config (Compliance Monitoring) - AWS Security Hub (Centralized Findings) - Amazon Macie (PII Detection) - IAM Access Analyzer (External Access, Policy Validation) - AWS WAF (Web Application Firewall) - AWS Shield (DDoS Protection) - Amazon Inspector (Vulnerability Scanning) - Service Control Policies (SCPs) - S3 Object Lock (WORM Compliance) - Cross-Account Access (External ID) - AWS Certificate Manager (SSL/TLS) - AWS Firewall Manager (Centralized Firewall Management) - Incident Response (Credential Exposure) - Site-to-Site VPN (Encryption in Transit) - Automated Threat Response - AWS Artifact (Compliance Reports) - AWS Audit Manager (Evidence Collection) - AWS CloudHSM (Dedicated HSMs) - Amazon Detective (Security Investigation) - AWS Directory Service (AD Authentication) Exam Tips: Encryption: - SSE-S3: AWS manages, simple, free - SSE-KMS (CMK): Full control, rotation, audit trail - SSE-C: Customer provides keys - Object Lock Compliance: Immutable, regulatory Secrets Management: - Secrets Manager: Automatic rotation, DB integration - Parameter Store: Configuration, no auto-rotation Logging & Monitoring: - CloudTrail: WHO did WHAT and WHEN - Config: WHAT changed and compliance - GuardDuty: THREATS (malicious activity) Threat Detection: - GuardDuty: Intelligent threat detection - Inspector: Vulnerability scanning - Macie: Data protection (PII in S3) - Access Analyzer: External access, policy validation DDoS Protection: - Shield Standard: Free, automatic, L3/L4 - Shield Advanced: Paid, DRT, cost protection - WAF: Application-level filtering Compliance: - Config: Continuous compliance monitoring - Security Hub: Centralized findings - SCPs: Preventive controls Multi-Account Security: - Organizations + SCPs: Preventive controls - Security Hub: Centralized findings - Firewall Manager: Centralized firewall rules - GuardDuty: Multi-account threat detection Cross-Account Access: - Use IAM roles with External ID - Never share credentials - Time-limited sessions Incident Response:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nMulti-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | RDS: Relational, Replicas for Reads, Multi-AZ for Resilience."
  },
  {
    "id": "saa_aa5fcc7501",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "dynamodb",
    "dificultad": 1,
    "pregunta": "An application requires ACID transactions across multiple DynamoDB tables. Which feature should be used?",
    "opciones": [
      "DynamoDB Streams",
      "DynamoDB Transactions",
      "DynamoDB Batch Operations",
      "DynamoDB Global Tables <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - DynamoDB Transactions: - ACID properties (Atomicity, Consistency, Isolation, Durability) - All-or-nothing operations - Up to 100 items or 4 MB per transaction - TransactWriteItems and TransactGetItems Transaction Use Cases: - Financial transactions - Order processing - Inventory management - Need data consistency across items Transaction APIs: - TransactWriteItems: Atomic writes - TransactGetItems: Snapshot reads Cost: 2x the cost of standard reads/writes References: DynamoDB Transactions, ACID Compliance </details> ---",
    "explicacion_correcta": "Fully managed serverless NoSQL key-value/document database with single-digit ms latency.\n\nWhen to use: Highly scalable web/mobile backends, IoT, gaming leaderboards, shopping carts.\n\nKey differences: Schema-less vs RDS/Aurora (relational). Horizontal scaling without managing instances.",
    "analisis_distractores": "Reduce latency to microseconds → DAX (DynamoDB Accelerator). Active-active multi-region → Global Tables. Unpredictable workloads → On-Demand capacity.",
    "tip": "Dynamo = Dynamic infinite scaling for NoSQL."
  },
  {
    "id": "saa_aab90265e2",
    "materia": "general",
    "tema": "sqs",
    "dificultad": 2,
    "pregunta": "A company wants to implement a pub/sub messaging pattern where multiple consumers receive the same message. Which service should be used?",
    "opciones": [
      "Amazon SQS Standard Queue",
      "Amazon SQS FIFO Queue",
      "Amazon SNS",
      "Amazon Kinesis Data Streams <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - SNS is publish-subscribe messaging service - One message published to topic, multiple subscribers receive it - Fan-out pattern - Classic pub/sub use case - SQS is point-to-point (one consumer per message) - Kinesis allows multiple consumers but is for streaming data References: SNS, Pub/Sub Pattern </details> ---",
    "explicacion_correcta": "Fully managed push-based pub/sub messaging for decoupling microservices and broadcasting notifications.\n\nWhen to use: Fan-out pattern (single event to multiple subscribers): email, SMS, mobile push, multiple SQS queues, Lambda functions.\n\nKey differences: SNS = push-based pub/sub broadcast. SQS = pull-based point-to-point. EventBridge = complex rule-based filtering + SaaS integrations.",
    "analisis_distractores": "Use SNS+SQS fan-out for reliable task processing (SNS alone can lose messages if endpoint offline).\n\nStandard = unlimited throughput, at-least-once (duplicates possible). FIFO = exactly-once, strict ordering, 300 msgs/sec (3000 with batching).\n\nKinesis Data Streams for custom processing. Kinesis Data Firehose for automatic delivery to S3/Redshift/Elasticsearch (no code needed).",
    "tip": "SNS = Send Notifications Simultaneously (Broadcast/Push). | SQS = Send Queued Stuff (pull-based, 1-to-1 decoupling)."
  },
  {
    "id": "saa_abeb3ccd6f",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "A company wants to retire legacy applications that are no longer used as part of their cloud migration. Which migration strategy does this represent?",
    "opciones": [
      "Rehost",
      "Replatform",
      "Retire",
      "Retain <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Retire strategy identifies and turns off unused applications - Reduces cost and complexity - Part of the 6 R's migration framework - Rehost moves applications to cloud - Replatform optimizes during migration - Retain keeps applications on-premises References: 6 R's of Migration, Retire Strategy </details> ---"
  },
  {
    "id": "saa_ac6d995b0f",
    "materia": "Design Secure Architectures",
    "tema": "iam",
    "dificultad": 2,
    "pregunta": "A company has 50 AWS accounts and wants to centrally manage billing and apply organization-wide security policies. Which AWS service should they use?",
    "opciones": [
      "AWS IAM",
      "AWS Organizations",
      "AWS Control Tower",
      "AWS Systems Manager <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - AWS Organizations is the service for managing multiple AWS accounts - Provides consolidated billing across all accounts - Enables Service Control Policies (SCPs) for organization-wide policies - Can create Organizational Units (OUs) for logical grouping - Control Tower (C) is built on Organizations but is for automated setup - IAM (A) is for user/role management within a single account - Systems Manager (D) is for operations, not multi-account management References: AWS Organizations, Multi-Account Strategy </details> ---",
    "explicacion_correcta": "Fully managed service to securely control access using users, groups, roles, and identity-based policies.\n\nWhen to use: Implement least privilege, manage MFA, define permissions for humans/apps/services interacting with AWS.\n\nKey differences: IAM manages permissions within one AWS account. Organizations (SCPs) manages boundaries across accounts. Cognito handles app end-user auth.",
    "analisis_distractores": "Explicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.\n\nSCPs don't grant permissions, they only restrict. Root user in member accounts is blocked by default with full deny SCP.\n\nSCPs don't grant permissions, they only restrict. Root user in member accounts is blocked by default with full deny SCP.",
    "tip": "IAM = I Am Managing who can do what. | Organizations = SCPs restrict, never grant."
  },
  {
    "id": "saa_ac864c273b",
    "materia": "Design Resilient Architectures",
    "tema": "dynamodb",
    "dificultad": 2,
    "pregunta": "A company wants to track changes to DynamoDB items in real-time to update materialized views and trigger workflows. Which feature should be used?",
    "opciones": [
      "DynamoDB Auto Scaling",
      "DynamoDB Streams",
      "DynamoDB Backups",
      "CloudWatch Events <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - DynamoDB Streams: - Ordered record of item-level changes - Near real-time (typically < 1 second) - 24-hour retention - Exactly-once delivery Stream View Types: - KEYS_ONLY: Only key attributes - NEW_IMAGE: Entire item after change - OLD_IMAGE: Entire item before change - NEW_AND_OLD_IMAGES: Both before and after Use Cases: - Update materialized views - Trigger Lambda functions - Cross-region replication (Global Tables) - Data pipelines - Analytics Common Pattern: DynamoDB Streams → Lambda → Process changes References: DynamoDB Streams, Change Data Capture </details> ---",
    "explicacion_correcta": "Serverless compute service running code without provisioning/managing servers, auto-scales on demand.\n\nWhen to use: Event-driven architectures, serverless microservices, real-time file processing (S3 triggers), scheduled CRON jobs (EventBridge).\n\nKey differences: EC2 = manage OS, pay for running time. Lambda = abstracted infrastructure, pay for exact execution time. Fargate = serverless containers. Lambda = Function-as-a-Service.",
    "analisis_distractores": "Lambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nReduce latency to microseconds → DAX (DynamoDB Accelerator). Active-active multi-region → Global Tables. Unpredictable workloads → On-Demand capacity.",
    "tip": "Lambda = Limit of 15 minutes for serverless code. | Dynamo = Dynamic infinite scaling for NoSQL."
  },
  {
    "id": "saa_acfd0c04a2",
    "materia": "Design Resilient Architectures",
    "tema": "ec2",
    "dificultad": 3,
    "pregunta": "NAT Gateway Cost Optimization You have EC2 instances in private subnets across three Availability Zones in us-east-1. Each AZ has approximately 500 GB of outbound internet traffic per month. Currently, all instances use a single NAT Gateway in us-east-1a. Your AWS bill shows high cross-AZ data transfer charges. How should you optimize costs?",
    "opciones": [
      "Use NAT Instances instead of NAT Gateways",
      "Deploy one Public NAT Gateway in each AZ",
      "Use a single NAT Gateway but enable compression",
      "Configure instances to use an Internet Gateway directly"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Cost Analysis: Current Setup (1 NAT Gateway in AZ-A): - NAT Gateway: $0.045/hour = $32.40/month - Data processing: 1,500 GB × $0.045 = $67.50 - Cross-AZ transfer (AZ-B, AZ-C to AZ-A): 1,000 GB × $0.01 = $10.00 - Total: $109.90/month Optimized Setup (1 NAT Gateway per AZ): - NAT Gateways: 3 × $32.40 = $97.20/month - Data processing: 1,500 GB × $0.045 = $67.50 - Cross-AZ transfer: $0 (same-AZ) - Total: $164.70/month Wait, this is MORE expensive! Let me recalculate... Actually, the break-even depends on traffic volume: - Extra NAT Gateway cost: 2 × $32.40 = $64.80/month - Cross-AZ savings: 1,000 GB × $0.01 = $10.00/month Break-even point: ~6,500 GB/month cross-AZ traffic In this scenario (1,000 GB cross-AZ), a single NAT Gateway is actually cheaper! Let me revise the question context: If the scenario showed: - High cross-AZ costs (e.g., $100+/month) - 10+ TB of traffic - Latency concerns Then multiple NAT Gateways would be the answer. For exam purposes, the correct reasoning is: - ✅ Same-AZ NAT Gateway = No cross-AZ charges - ✅ Multiple NAT Gateways = Higher availability - ✅ Best for high-traffic workloads (10+ TB/month) Exam Tip: Watch for traffic volume in the question. \"High cross-AZ costs\" implies significant traffic justifying multiple NAT Gateways. ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nSingle NAT Gateway is AZ-resilient only. For full regional HA → deploy NAT Gateway in each AZ. Must be in public subnet.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | NAT Gateway = Needs A public subnet To function, one per AZ for HA."
  },
  {
    "id": "saa_ad6d29c0fa",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A company needs to run a batch processing job that can tolerate interruptions and must minimize costs. Which EC2 pricing model should be used?",
    "opciones": [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
      "Dedicated Hosts <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Spot Instances offer up to 90% discount compared to On-Demand - Can be interrupted with 2-minute warning when AWS needs capacity - Perfect for fault-tolerant, flexible workloads - Ideal Use Cases: Batch jobs, data analysis, image processing, CI/CD - Option A: On-Demand is most expensive - Option B: Reserved requires 1-3 year commitment - Option D: Dedicated Hosts are most expensive, for compliance Key Points: - Spot = Cheapest, can be interrupted - Best for: Stateless, fault-tolerant, flexible workloads References: EC2 Pricing Models, Spot Instances </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_ae9860d386",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "iam",
    "dificultad": 2,
    "pregunta": "A company wants to quickly set up a secure, multi-account AWS environment following best practices with automated account provisioning and pre-configured governance guardrails. Which service should they use?",
    "opciones": [
      "AWS Organizations",
      "AWS Control Tower",
      "AWS CloudFormation StackSets",
      "AWS Service Catalog <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - AWS Control Tower provides automated multi-account setup - Includes Landing Zone (well-architected baseline) - Pre-configured guardrails (preventive and detective) - Account Factory for automated provisioning - Built on top of AWS Organizations - AWS Organizations (A) requires manual setup - CloudFormation StackSets (C) deploys templates, not governance - Service Catalog (D) is for self-service IT resources Control Tower Features: - ✅ Automated setup (minutes vs days) - ✅ Pre-built guardrails - ✅ Account Factory - ✅ Compliance dashboard - ✅ Integrated with Organizations, IAM Identity Center, CloudTrail When to Use: - Quick setup with best practices - Less AWS expertise required - Want pre-built governance When to Use Organizations Directly: - Need maximum flexibility - Have custom requirements - Experienced AWS team References: AWS Control Tower, Landing Zone, Multi-Account Governance </details> ---",
    "explicacion_correcta": "Fully managed service to securely control access using users, groups, roles, and identity-based policies.\n\nWhen to use: Implement least privilege, manage MFA, define permissions for humans/apps/services interacting with AWS.\n\nKey differences: IAM manages permissions within one AWS account. Organizations (SCPs) manages boundaries across accounts. Cognito handles app end-user auth.",
    "analisis_distractores": "Explicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.\n\nSCPs don't grant permissions, they only restrict. Root user in member accounts is blocked by default with full deny SCP.\n\nSCPs don't grant permissions, they only restrict. Root user in member accounts is blocked by default with full deny SCP.",
    "tip": "IAM = I Am Managing who can do what. | Organizations = SCPs restrict, never grant."
  },
  {
    "id": "saa_af0c481152",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A company wants to migrate a large on-premises application to AWS quickly with minimal changes. The application runs on virtual machines and must be operational within 2 weeks. Which migration strategy should be used?",
    "opciones": [
      "Refactor the application to use Lambda and DynamoDB",
      "Rehost (Lift and Shift) using AWS Application Migration Service",
      "Repurchase by moving to a SaaS solution",
      "Replatform by migrating to containers on ECS <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Rehost (Lift and Shift) is the fastest migration strategy - AWS Application Migration Service (MGN) automates server migration - Moves VMs to EC2 with minimal changes - Meets the 2-week deadline requirement - Option A (Refactor) takes months of development - Option C (Repurchase) requires finding and adopting new software - Option D (Replatform) requires containerization effort References: 6 R's of Migration, AWS Application Migration Service </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nIf scenario mentions Kubernetes specifically, answer is EKS. If it says containers but no Kubernetes preference, ECS may be simpler.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | EKS = Elastic Kubernetes Service; Kubernetes on AWS."
  },
  {
    "id": "saa_affe58d5f3",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "route-53",
    "dificultad": 1,
    "pregunta": "An application needs to resolve private DNS names between on-premises network and AWS VPC. What should be configured?",
    "opciones": [
      "VPC Peering",
      "Route 53 Private Hosted Zone",
      "Route 53 Resolver Endpoints",
      "AWS PrivateLink <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Route 53 Resolver Endpoints enable DNS resolution between on-premises and AWS - Inbound Endpoints: On-premises queries AWS resources - Outbound Endpoints: AWS queries on-premises resources Endpoint Types: - Inbound: On-premises → AWS VPC - Outbound: AWS VPC → On-premises (with forwarding rules) Configuration:",
    "explicacion_correcta": "Connect VPC to AWS services privately without Internet Gateway, NAT, VPN, or Direct Connect.\n\nWhen to use: Private subnets must access AWS services without traversing public internet.\n\nKey differences: Gateway Endpoints only for S3 and DynamoDB (route table prefix lists). Interface Endpoints (PrivateLink) for almost all other services (ENI with private IP).",
    "analisis_distractores": "Gateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.\n\nALIAS vs CNAME: ALIAS is free, works at apex, resolves to IP. CNAME maps name to name, can't be at apex.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Gateway for Big Two (S3 & DynamoDB); Interface for the Rest. | Route 53 = DNS + ALIAS = Route 53's superpower."
  },
  {
    "id": "saa_b0f69f1a47",
    "materia": "Design Secure Architectures",
    "tema": "ec2",
    "dificultad": 1,
    "pregunta": "A company needs to scan EC2 instances and container images for software vulnerabilities. Which service should be used?",
    "opciones": [
      "Amazon GuardDuty",
      "Amazon Inspector",
      "AWS Security Hub",
      "Amazon Macie <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Amazon Inspector provides automated vulnerability assessment - Scans EC2 instances, container images (ECR), Lambda functions - Network reachability analysis - Package vulnerability detection (CVEs) Amazon Inspector v2 Features:",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_b1246536dc",
    "materia": "general",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "An application requires a shared file system that can be accessed by multiple Linux EC2 instances across different Availability Zones. Which service should be used?",
    "opciones": [
      "Amazon S3",
      "Amazon EBS",
      "Amazon EFS",
      "Instance Store <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Amazon EFS provides a shared NFS file system that can be mounted by multiple EC2 instances across different AZs. EBS is AZ-specific and typically attaches to a single instance. </details>",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.\n\nEFS is strictly for Linux (NFS). For Windows servers, choose Amazon FSx for Windows File Server.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | EBS = Elastic Block Store; one AZ, one instance, persistent."
  },
  {
    "id": "saa_b198a747c0",
    "materia": "Design High-Performing Architectures",
    "tema": "cloudfront",
    "dificultad": 2,
    "pregunta": "A company runs a website with both static and dynamic content. Website users are experiencing slow page loads globally. What solution will improve performance MOST effectively? Options:",
    "opciones": [
      "Use CloudFront only for static content",
      "Deploy ALB with cross-zone load balancing",
      "Implement CloudFront for both static and dynamic content",
      "Use ElastiCache for database caching"
    ],
    "correcta": 2,
    "explicacion": "Explanation: CloudFront can cache both static and dynamic content at edge locations globally. For dynamic content, CloudFront can use techniques like connection multiplexing and TCP optimization to improve performance even for non-cacheable content. ### Dynamic vs Predictive Scaling",
    "explicacion_correcta": "Persistent block-level storage volumes attached to EC2 instances. Behave like raw hard drives.\n\nWhen to use: Boot volumes for EC2, database storage, applications requiring consistent low-latency block storage.\n\nKey differences: EBS locked to single AZ. EFS spans multiple AZs and mounts to hundreds of instances. EBS is persistent, Instance Store is ephemeral.",
    "analisis_distractores": "EBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.\n\nCaching HTTP content → CloudFront. Non-HTTP or static IPs needed → Global Accelerator. Use OAI/OAC to protect S3 origins.",
    "tip": "EBS = Elastic Block Store; one AZ, one instance, persistent. | CloudFront = Sits in front of your web app to cache HTTP."
  },
  {
    "id": "saa_b332b4b4c9",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "Cost Allocation Tags Your AWS Organization has 15 member accounts, each provisioning NAT Gateways independently. The CFO wants to see a consolidated report showing NAT Gateway costs by account, environment (prod/dev), and department. How should you configure this?",
    "opciones": [
      "Member accounts tag their NAT Gateways; management account activates cost allocation tags and views in Cost Explorer",
      "Management account tags all NAT Gateways across member accounts",
      "Each member account views their own costs in their billing console",
      "Use AWS Budgets to track costs per account"
    ],
    "correcta": 0,
    "explicacion": "Explanation: Cost Allocation Tags in AWS Organizations: Step 1: Member Accounts Tag Resources bash # In Account 222222 (Dev Account) aws ec2 create-tags \\ --resources nat-0abc123 \\ --tags Key=Environment,Value=Development \\ Key=Department,Value=Engineering \\ Key=CostCenter,Value=CC-001 Step 2: Management Account Activates Tags",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nSCPs don't grant permissions, they only restrict. Root user in member accounts is blocked by default with full deny SCP.\n\nSCPs don't grant permissions, they only restrict. Root user in member accounts is blocked by default with full deny SCP.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | Organizations = SCPs restrict, never grant."
  },
  {
    "id": "saa_b35cab8299",
    "materia": "Design Secure Architectures",
    "tema": "config",
    "dificultad": 2,
    "pregunta": "A company has resources in two VPCs in the same region and wants them to communicate privately. What should be configured?",
    "opciones": [
      "Internet Gateway",
      "VPC Peering",
      "AWS Transit Gateway",
      "VPN Connection <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - VPC Peering connects two VPCs privately - Same or different regions - Same or different accounts - Uses AWS network (no internet) VPC Peering Requirements: - Non-overlapping CIDR blocks - Accept peering request - Update route tables in both VPCs - Update security groups if needed VPC Peering Characteristics: - Not transitive (VPC A ↔ VPC B, VPC B ↔ VPC C, but NOT A ↔ C) - 1-to-1 connection - No single point of failure - No bandwidth bottleneck When to use Transit Gateway instead: - Many VPCs (>3-4) - Complex routing - Need transitive routing References: VPC Peering, VPC Connectivity </details> ---",
    "explicacion_correcta": "Connect VPC to AWS services privately without Internet Gateway, NAT, VPN, or Direct Connect.\n\nWhen to use: Private subnets must access AWS services without traversing public internet.\n\nKey differences: Gateway Endpoints only for S3 and DynamoDB (route table prefix lists). Interface Endpoints (PrivateLink) for almost all other services (ENI with private IP).",
    "analisis_distractores": "Gateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Gateway for Big Two (S3 & DynamoDB); Interface for the Rest. | Config = Configuration compliance and history."
  },
  {
    "id": "saa_b3ab57b11d",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company wants to encrypt data at rest in S3 with full control over encryption keys including custom rotation policies and audit trails. Which encryption method should be used?",
    "opciones": [
      "SSE-S3 (Server-Side Encryption with S3-Managed Keys)",
      "SSE-KMS with AWS managed keys",
      "SSE-KMS with Customer Managed Keys (CMK)",
      "SSE-C (Customer-Provided Keys) <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - SSE-KMS with Customer Managed Keys (CMK) provides complete control - Create, manage, rotate encryption keys - CloudTrail audit trail for key usage - Fine-grained access control via key policies - Automatic or manual key rotation S3 Encryption Options Comparison: | Method | Key Management | Rotation | Audit Trail | Cost | |--------|----------------|----------|-------------|------| | SSE-S3 | AWS | AWS handles | No | Free | | SSE-KMS (AWS managed) | AWS | Annual (automatic) | Yes (CloudTrail) | KMS API charges | | SSE-KMS (CMK) | Customer | On-demand/annual | Yes (CloudTrail) | KMS API charges | | SSE-C | Customer provides | Customer manages | No | Free | CMK Benefits: - Custom rotation schedule (enable automatic yearly rotation) - Disable/enable keys - Define key policies and grants - Cross-account access - Complete audit trail References: AWS KMS, S3 Encryption, Customer Managed Keys </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCannot enable encryption on existing RDS/EBS directly. Must snapshot → copy with encryption → restore.\n\nManagement events enabled by default (90 days free). Data events (S3 uploads, Lambda invocations) NOT enabled by default, extra cost. 15-minute delay.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | KMS = Keeps Master Secrets safe."
  },
  {
    "id": "saa_b3b2b3784d",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A healthcare company wants to build a secure data lake on AWS to store and analyze sensitive patient data. They need fine-grained access control, data cataloging, and integration with analytics services. Which service should be used to manage permissions and data cataloging?",
    "opciones": [
      "AWS Lake Formation",
      "Amazon S3",
      "AWS Glue",
      "Amazon Athena <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - Lake Formation provides fine-grained access control for data lakes - Manages permissions at table, column, and row level - Integrates with Glue Data Catalog and analytics services (Athena, Redshift, EMR) - S3 is storage, not access management - Glue is for ETL and cataloging, but Lake Formation extends Glue with security - Athena is for querying, not access management References: AWS Lake Formation, Data Lake Security </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCommon pattern: optimize S3 data for Athena → use Glue to transform to Parquet/ORC columnar format.\n\nAthena costs $5/TB scanned. Optimize by partitioning data and using Parquet/ORC columnar format.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Glue = The glue that sticks raw data to analytics tools."
  },
  {
    "id": "saa_b3bea37d93",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A solutions architect needs to access EC2 instances for troubleshooting without opening port 22 or managing SSH keys. Which AWS service provides this capability?",
    "opciones": [
      "AWS CloudShell",
      "AWS Systems Manager Session Manager",
      "Amazon EC2 Instance Connect",
      "AWS Direct Connect <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Session Manager provides secure shell access without SSH keys or open ports - Uses IAM permissions for access control - Session logs can be sent to S3 or CloudWatch Logs - EC2 Instance Connect still requires port 22 to be open - CloudShell is for running AWS CLI commands, not accessing instances - Direct Connect is for network connectivity References: Systems Manager Session Manager, Secure Access </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_b46fdda0b9",
    "materia": "general",
    "tema": "ec2",
    "dificultad": 3,
    "pregunta": "Lambda Custom Resources in CloudFormation You're deploying EC2 instances across multiple regions using CloudFormation. Each region requires a different AMI ID for the same OS (Amazon Linux 2). Rather than hardcoding AMI IDs for each region, you want to dynamically look up the latest AMI during stack creation. What's the best approach?",
    "opciones": [
      "Use CloudFormation Mappings with AMI IDs for each region",
      "Use a Lambda-backed Custom Resource to query for AMI IDs",
      "Use CloudFormation Parameters and manually enter AMI IDs",
      "Use Systems Manager Parameter Store with regional parameters"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Lambda-Backed Custom Resource:",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_b4d1695789",
    "materia": "Design High-Performing Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A web application needs to maintain session state. The application runs on multiple EC2 instances behind an Application Load Balancer. How should session state be managed?",
    "opciones": [
      "Store session data on EC2 instance local storage",
      "Enable sticky sessions on ALB",
      "Store session data in Amazon ElastiCache or DynamoDB",
      "Use NLB instead of ALB <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - External session storage (ElastiCache/DynamoDB) is best practice - Sessions accessible from any instance - Survives instance failures - True stateless architecture Session Management Options: | Option | Pros | Cons | |--------|------|------| | ElastiCache/DynamoDB | Stateless, scalable, resilient | Additional service | | Sticky Sessions | Simple | Uneven load, not resilient | | Local Storage | Fast | Lost on instance failure | Why ElastiCache/DynamoDB is Better: - ✅ Any instance can serve any request - ✅ Auto Scaling works properly - ✅ Instance failure doesn't lose sessions - ✅ Better load distribution Sticky Sessions Issues: - Uneven instance utilization - New instances get no traffic initially - Instance failure = lost sessions - Use only if refactoring is not possible References: Stateless Architecture, Session Management, ElastiCache </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nDefault termination policy: most instances in AZ → oldest launch template → closest to billing hour. Enable scale-in protection for stateful workloads.\n\nElastiCache requires application code changes (unlike DAX). Don't select Memcached if scenario needs DR, replication, or pub/sub.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | ASG = Automatically Sizes Groups horizontally."
  },
  {
    "id": "saa_b4dc822481",
    "materia": "general",
    "tema": "api-gateway",
    "dificultad": 2,
    "pregunta": "A mobile development team wants to test their app on a wide range of real devices in the cloud. Which AWS service should they use?",
    "opciones": [
      "AWS Device Farm",
      "AWS Amplify",
      "Amazon Pinpoint",
      "Amazon API Gateway <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - AWS Device Farm provides cloud-based testing on real mobile devices - Supports Android and iOS - Automates testing and provides detailed reports - Amplify is for app development and hosting - Pinpoint is for user engagement, not testing - API Gateway is for APIs, not device testing References: AWS Device Farm, Mobile Testing </details> ---",
    "explicacion_correcta": "Fully managed service for creating, publishing, maintaining, monitoring, and securing REST/HTTP/WebSocket APIs.\n\nWhen to use: Fronting Lambda functions or EC2 backends, rate limiting, API key management, caching.\n\nKey differences: API Gateway = API management layer (throttling, caching, auth). ALB = load balancing across instances. CloudFront = global CDN caching.",
    "analisis_distractores": "API Gateway integrates with Lambda (no VPC needed) and HTTP backends (needs VPC link for private). WebSocket APIs for bidirectional communication.",
    "tip": "API Gateway = Gatekeeper for your APIs (throttle, cache, secure)."
  },
  {
    "id": "saa_b4fc2ae272",
    "materia": "Design Resilient Architectures",
    "tema": "dynamodb",
    "dificultad": 3,
    "pregunta": "Organization XYZ is planning to build an online chat application for their enterprise level collaboration for their employees across the world. They are looking for a single digit latency fully managed database to store and retrieve conversations. What would AWS Database service you recommend?",
    "opciones": [
      "AWS DynamoDB",
      "AWS RDS",
      "AWS Redshift",
      "AWS Aurora"
    ],
    "correcta": 0,
    "explicacion": "Read more here: https://aws.amazon.com/dynamodb/#whentousedynamodb Read more here: https://aws.amazon.com/about-aws/whats-new/2015/07/amazon-dynamodb-availablenow-cross-region-replication-triggers-and-streams/",
    "explicacion_correcta": "Fully managed serverless NoSQL key-value/document database with single-digit ms latency.\n\nWhen to use: Highly scalable web/mobile backends, IoT, gaming leaderboards, shopping carts.\n\nKey differences: Schema-less vs RDS/Aurora (relational). Horizontal scaling without managing instances.",
    "analisis_distractores": "Reduce latency to microseconds → DAX (DynamoDB Accelerator). Active-active multi-region → Global Tables. Unpredictable workloads → On-Demand capacity.",
    "tip": "Dynamo = Dynamic infinite scaling for NoSQL."
  },
  {
    "id": "saa_b5194134d1",
    "materia": "Design Resilient Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company wants to move infrequently accessed EBS snapshots to cheaper storage automatically. What feature should be used?",
    "opciones": [
      "S3 Lifecycle Policies",
      "EBS Snapshot Archive",
      "EBS Cold HDD volumes",
      "Amazon Glacier <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - EBS Snapshot Archive tier: - 75% cheaper than standard snapshots - For snapshots stored 90+ days - Restore time: 24-72 hours - Minimum 90-day storage EBS Snapshot Management: - Standard: Fast restore (minutes), higher cost - Archive: Cheaper, slower restore (24-72 hrs) - Automatic archival with lifecycle policies EBS Snapshot Features: - Incremental backups (only changed blocks) - Stored in S3 (managed by AWS) - Cross-region copy available - Fast Snapshot Restore (FSR) for instant recovery Use Cases: - Standard: Frequent restores, DR - Archive: Compliance, long-term retention References: EBS Snapshots, Snapshot Archive </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | EBS = Elastic Block Store; one AZ, one instance, persistent."
  },
  {
    "id": "saa_b56ba9857a",
    "materia": "Design Resilient Architectures",
    "tema": "config",
    "dificultad": 2,
    "pregunta": "ElastiCache Redis vs Memcached for Session Store (Similar to PT5) An application needs to store user session data with automatic failover. Which ElastiCache engine supports Multi-AZ replication?",
    "opciones": [
      "Memcached (supports auto-discovery)",
      "Redis with cluster mode disabled and Multi-AZ",
      "Memcached with multiple nodes",
      "Redis Cluster mode enabled <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Redis vs Memcached for Sessions: Redis with Multi-AZ: ✅ ├── Replication: Master + replica(s) ├── Automatic failover: YES (30-60 seconds) ├── Data persistence: Snapshots, AOF ├── Use: Session store with HA ✅ Memcached: ├── Replication: NONE ❌ ├── Automatic failover: NO ├── Data persistence: NO └── Use: Simple caching, data loss acceptable Session Store Requirements: Requirements: ├── Persistence: Session data must survive node failure ✅ ├── Replication: Data replicated across AZs ✅ ├── Failover: Automatic promotion of replica ✅ └── Solution: Redis Multi-AZ ✅ Why not Memcached: ├── No replication (data lost if node fails) ❌ ├── Multiple nodes = sharding (not replication) └── Auto-discovery finds nodes, doesn't replicate data Configuration: bash # Create Redis cluster with Multi-AZ aws elasticache create-replication-group \\ --replication-group-id session-store \\ --replication-group-description \"Session store with Multi-AZ\" \\ --engine redis \\ --cache-node-type cache.r6g.large \\ --num-cache-clusters 2 \\ --automatic-failover-enabled \\ --multi-az-enabled \\ --cache-subnet-group-name my-subnet-group Key Concept: Redis Multi-AZ = Replication + automatic failover for session store </details> ---",
    "explicacion_correcta": "Database deployment with synchronous standby replica in different AZ for high availability.\n\nWhen to use: Disaster recovery, surviving AZ outage, network loss, or compute failure.\n\nKey differences: Synchronous replication for HA. Read Replicas use asynchronous for performance scaling. Standby cannot serve reads.",
    "analisis_distractores": "Multi-AZ is for resilience, NOT read scaling. Converting Single-AZ to Multi-AZ is zero-downtime.\n\nElastiCache requires application code changes (unlike DAX). Don't select Memcached if scenario needs DR, replication, or pub/sub.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Multi-AZ = Automatic Zero-data-loss standby (DR, not reads). | ElastiCache = Extra code changes required for Cache."
  },
  {
    "id": "saa_b67ecd85cf",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company needs to migrate data from an on-premises HDFS cluster to Amazon S3. The data must be encrypted in transit. Which service should be used?",
    "opciones": [
      "AWS Snowball",
      "AWS DataSync",
      "AWS Direct Connect",
      "AWS Storage Gateway <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - DataSync supports HDFS as a source - Encrypts data in transit with TLS - Automated and fast data transfer - Can transfer to S3 - Snowball doesn't support HDFS directly - Direct Connect is for network connectivity - Storage Gateway is for hybrid storage, not migration References: AWS DataSync, HDFS Migration </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nSnowball for 10TB-10PB. Snowmobile (shipping container) for 10PB-100PB. Don't confuse scales.\n\nDX is NOT encrypted by default. If scenario needs dedicated line + encryption → IPSec VPN over DX. DX has no inherent resilience (need multiple connections).",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Snowball = Roll massive data physically into AWS."
  },
  {
    "id": "saa_b691296c8d",
    "materia": "Design High-Performing Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A solutions architect wants to reduce the cost of Athena queries on a large dataset stored in S3. The data is currently in CSV format and queries scan the entire dataset. What should be done to optimize costs?",
    "opciones": [
      "Increase the Athena query timeout",
      "Convert data to Parquet format and partition by commonly queried fields",
      "Move data to Amazon Redshift",
      "Enable S3 versioning <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Athena charges per TB scanned ($5/TB) - Parquet is columnar format, reduces data scanned by 30-90% - Partitioning limits data scanned to relevant partitions - Both optimizations significantly reduce costs - Increasing timeout doesn't reduce scanned data - Redshift adds infrastructure costs - S3 versioning doesn't affect query performance References: Athena Performance Optimization, Columnar Formats </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nAthena costs $5/TB scanned. Optimize by partitioning data and using Parquet/ORC columnar format.\n\nRedshift Spectrum allows querying S3 data directly without loading. Redshift is NOT for OLTP.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Athena = SQL queries on S3, serverless, pay per byte scanned."
  },
  {
    "id": "saa_b7396a2f25",
    "materia": "Design Resilient Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company wants to run code in response to events without managing servers. The code should execute only when triggered and scale automatically. Which service should be used?",
    "opciones": [
      "Amazon EC2 with Auto Scaling",
      "AWS Lambda",
      "Amazon ECS",
      "AWS Elastic Beanstalk <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - AWS Lambda is serverless compute service - Event-driven execution - Automatic scaling (1 to 1000s of concurrent executions) - Pay only for compute time (per millisecond) - No server management Lambda Characteristics: - Max execution time: 15 minutes - Memory: 128 MB to 10,240 MB - Deployment package: 50 MB (zipped), 250 MB (unzipped) - Concurrent executions: 1000 (default, can increase) - Billing: Per request + compute time (GB-seconds) Lambda Triggers: - API Gateway (REST APIs) - S3 events - DynamoDB Streams - EventBridge (scheduled/event-based) - SNS, SQS - Kinesis References: AWS Lambda, Serverless Computing </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_b76e082738",
    "materia": "Design High-Performing Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "An analytics application queries data in S3 using Athena. The queries are running slowly despite optimizations. The data is already in Parquet format and partitioned. What else can improve performance?",
    "opciones": [
      "Optimize file sizes to 128 MB - 1 GB per file",
      "Switch to CSV format",
      "Disable partitioning",
      "Use smaller file sizes (1-10 MB) <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - Too many small files causes performance issues - Optimal file size is 128 MB - 1 GB - Athena opens each file, many small files = overhead - Combine small files into larger ones - CSV is less efficient than Parquet - Partitioning improves performance - Very small files slow down queries References: Athena Performance, File Size Optimization </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nAthena costs $5/TB scanned. Optimize by partitioning data and using Parquet/ORC columnar format.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Athena = SQL queries on S3, serverless, pay per byte scanned."
  },
  {
    "id": "saa_b7905124e3",
    "materia": "Design Resilient Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "A company needs to run an RDS database with automatic failover to a standby instance in another AZ. What should be configured?",
    "opciones": [
      "RDS Read Replicas",
      "RDS Multi-AZ Deployment",
      "RDS Snapshots",
      "RDS Cross-Region Replication <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - RDS Multi-AZ provides high availability - Synchronous replication to standby - Automatic failover (1-2 minutes) - Same region, different AZ - No manual intervention Multi-AZ vs Read Replicas: | Feature | Multi-AZ | Read Replicas | |---------|----------|---------------| | Purpose | High availability | Read scaling | | Replication | Synchronous | Asynchronous | | Failover | Automatic | Manual promotion | | Access | Standby not accessible | Can read from replicas | | Region | Same | Same or cross-region | Multi-AZ Failover Triggers: - AZ failure - Instance failure - Storage failure - Software patching (planned) References: RDS Multi-AZ, High Availability </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nMulti-AZ is for resilience, NOT read scaling. Converting Single-AZ to Multi-AZ is zero-downtime.\n\nRead Replicas don't failover automatically (manual promotion). Cross-region incurs data transfer fees; same-region is free.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Multi-AZ = Automatic Zero-data-loss standby (DR, not reads)."
  },
  {
    "id": "saa_b83f127cbf",
    "materia": "Design Secure Architectures",
    "tema": "config",
    "dificultad": 2,
    "pregunta": "Which of the following statements are true in terms of allowing/denying traffic from/to VPC assuming the default rules are not in effect? (choose multiple)",
    "opciones": [
      "In a Network ACL, for a successful HTTPS connection, add an inbound rule with HTTPS type, IP range in source and ALLOW traffic.",
      "In a Network ACL, for a successful HTTPS connection, you must add an inbound rule and outbound rule with HTTPS type, IP range in source and destination respectively and ALLOW traffic.",
      "In a Security Group, for a successful HTTPS connection, add an inbound rule with HTTPS type and IP range in the source.",
      "In a Security Group, for a successful HTTPS connection, you must add an inbound rule and outbound rule with HTTPS type, IP range in source and destination respectively."
    ],
    "correcta": 1,
    "explicacion": ", C Security groups are stateful — if you send a request from your instance, the response traffic for that request is allowed to flow in regardless of inbound security group rules. Responses to allowed inbound traffic are allowed to flow out, regardless of outbound rules. Network ACLs are stateless; responses to allowed inbound traffic are subject to the rules for outbound traffic (and vice versa).      Option A is not correct. NACL must have an outbound rule defined for a successful connection due to its stateless nature. Option B is correct. Option C is correct. Configuring an inbound rule in a security group is enough for a successful connection due to its stateful nature. Option D is not correct. Configuring an outbound rule for incoming connection is not required in security groups.   https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_ACLs.html#A CLs https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGrou ps.html#VPCSe Frequently Asked Questions (FAQs) How many questions are on AWS exam? The number of questions in the AWS Architect exam is around 60-70. This number could be varry. What is passing score for AWS? The passing score of the exam is around 70-75%. AWS doesn't officially announce the passing score, but these are based on the exam taker's experience. Is AWS Solutions Architect Associate exam hard? Not very tough. When you compare to Cloud Practitioner exam, it's harder. However, compare to the SysOps exam, it's easier. How many questions are on the AWS Solutions Architect Associate exam? The number of questions in the AWS Architect exam is around 60-70. This number could be varry. Can I pass AWS Solution Architect Associate? Yes. Anyone can pass the AWS Solutions Architect Associate exam with the proper preparation and practice using sample questions from Whizlabs. Whizlabs offering 765 practice questions that are very detailed in the explanations would help you to pass the certification exam in the first attempt. You can also try the free tests. How do I prepare for AWS Solution Architect exam? Here is the very detailed steps on how to prepare for the AWS Solutions Architect Certification Exam. This would definitely help you. Below is the snapshot of what's covered in the Whizlabs courses. This will definitely help you.",
    "explicacion_correcta": "Connect VPC to AWS services privately without Internet Gateway, NAT, VPN, or Direct Connect.\n\nWhen to use: Private subnets must access AWS services without traversing public internet.\n\nKey differences: Gateway Endpoints only for S3 and DynamoDB (route table prefix lists). Interface Endpoints (PrivateLink) for almost all other services (ENI with private IP).",
    "analisis_distractores": "Gateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Gateway for Big Two (S3 & DynamoDB); Interface for the Rest. | Config = Configuration compliance and history."
  },
  {
    "id": "saa_b855c676cb",
    "materia": "general",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "Which of the following options is an AWS Cloud Adoption Framework (CAF) perspective specifically tailored to ensure your cloud investments expedite your digital transformation goals and business outcomes?",
    "opciones": [
      "Governance perspective",
      "Business perspective",
      "People perspective",
      "Operations perspective"
    ],
    "correcta": 1,
    "explicacion": "DON’T FORGET TO DO HARD THINGS"
  },
  {
    "id": "saa_b8bf3045a0",
    "materia": "Design High-Performing Architectures",
    "tema": "aurora",
    "dificultad": 2,
    "pregunta": "A serverless application needs a database that automatically scales capacity based on workload. Which option is MOST suitable?",
    "opciones": [
      "RDS with Auto Scaling",
      "Aurora Serverless",
      "DynamoDB On-Demand",
      "Both B and C <details> <summary>Show Answer</summary>"
    ],
    "correcta": 3,
    "explicacion": "Explanation: Both are suitable for serverless applications: Aurora Serverless: - Automatically scales compute capacity - Pay per second for compute - Ideal for intermittent/unpredictable workloads - SQL database (PostgreSQL/MySQL) DynamoDB On-Demand: - Automatically scales throughput - Pay per request - NoSQL database - Sub-10ms latency Choose Based On: - Need SQL, relational → Aurora Serverless - Need NoSQL, extreme scale → DynamoDB On-Demand - Intermittent workloads → Both work - Dev/test environments → Aurora Serverless - Serverless apps → Both work References: Aurora Serverless, DynamoDB On-Demand, Serverless Databases </details> ---",
    "explicacion_correcta": "Cloud-native relational DB with built-in resilience: 6 copies across 3 AZs, self-healing storage.\n\nWhen to use: Enterprise workloads needing automatic failover, up to 15 read replicas, cross-region Global Database.\n\nKey differences: Aurora Multi-Master allows writes to multiple instances. Global Database provides <1s cross-region replication.",
    "analisis_distractores": "Aurora storage auto-scales in 10GB increments up to 128TB. No need for read replicas for HA (6 copies already).\n\nReduce latency to microseconds → DAX (DynamoDB Accelerator). Active-active multi-region → Global Tables. Unpredictable workloads → On-Demand capacity.",
    "tip": "Aurora = 6 copies, 3 AZs, self-healing, no manual HA setup. | Dynamo = Dynamic infinite scaling for NoSQL."
  },
  {
    "id": "saa_b8c2f3d9bc",
    "materia": "general",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "A developer accidentally commits AWS credentials to a public GitHub repository. What immediate actions should be taken? (Choose THREE)",
    "opciones": [
      "Change the IAM user's password",
      "Deactivate and delete the exposed access keys immediately",
      "Review CloudTrail logs for unauthorized activity",
      "Enable MFA on the account E. Create new access keys before deleting old ones F. Check AWS Personal Health Dashboard <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": ", C, E Explanation: Immediate Response Steps:"
  },
  {
    "id": "saa_b92a631a21",
    "materia": "general",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "Which pillar of the AWS Well-Architected Framework focuses on the ability to recover from failures and dynamically acquire resources to meet demand?",
    "opciones": [
      "Operational Excellence",
      "Security",
      "Reliability",
      "Performance Efficiency <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: Reliability pillar focuses on the ability to recover from failures and dynamically acquire computing resources to meet demand. </details>"
  },
  {
    "id": "saa_b9c21cd12d",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "S3 Glacier Retrieval Cost Optimization An application archives logs to S3 Glacier Flexible Retrieval. For compliance, logs must be retrievable within 4 hours. The team currently uses Expedited retrieval. How can they reduce costs?",
    "opciones": [
      "Switch to Standard retrieval ✅",
      "Use Bulk retrieval with parallel requests",
      "Keep Expedited but reduce request frequency",
      "Move to S3 Glacier Instant Retrieval <details> <summary>📖 Explanation</summary> </details> ---"
    ],
    "correcta": 0,
    "explicacion": "Retrieval Tier Comparison: | Tier | Time | Cost | Use Case | |------|------|------|----------| | Expedited | 1-5 min | $$$ | Urgent (< 1 hr) | | Standard | 3-5 hrs | $$ | Planned (3-5 hrs) | | Bulk | 5-12 hrs | $ | Flexible (12+ hrs) | Why Standard Fits: - Requirement: 4 hours → Standard delivers in 3-5 hours - Expedited is 5-10x more expensive - Still meets compliance requirement Cost Savings: Expedited: $0.03/GB + $0.01/1000 requests Standard: $0.01/GB + $0.05/1000 requests Savings: ~66% on retrieval costs Why Not Others:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCannot upload directly to Glacier via console. Must use S3 Lifecycle policy or CLI/SDK. Data must pass through S3 first.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Glacier = Frozen data; cheap to store but takes time to thaw."
  },
  {
    "id": "saa_ba42136445",
    "materia": "Design High-Performing Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "A financial application requires ACID transactions across multiple tables. The database must scale for read traffic. Which database solution should be used?",
    "opciones": [
      "DynamoDB",
      "Amazon Aurora with Read Replicas",
      "Amazon Redshift",
      "ElastiCache <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Aurora supports ACID transactions (relational database) - Read Replicas scale read traffic (up to 15 replicas) - Better performance than standard RDS - DynamoDB doesn't support traditional ACID across multiple items - Redshift is for analytics, not transactional workloads - ElastiCache is for caching, not primary database References: Aurora, ACID Transactions </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nAurora storage auto-scales in 10GB increments up to 128TB. No need for read replicas for HA (6 copies already).\n\nRedshift Spectrum allows querying S3 data directly without loading. Redshift is NOT for OLTP.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Aurora = 6 copies, 3 AZs, self-healing, no manual HA setup."
  },
  {
    "id": "saa_bae49c5db1",
    "materia": "Design High-Performing Architectures",
    "tema": "nat-gateway",
    "dificultad": 1,
    "pregunta": "Which of the following is an AWS component which consumes resources from your VPC?",
    "opciones": [
      "Internet Gateway",
      "Gateway VPC Endpoints",
      "Elastic IP Addresses",
      "NAT Gateway"
    ],
    "correcta": 3,
    "explicacion": "Option A is not correct. An internet gateway is an AWS component which sits outside of your VPC does not consume any resources from your VPC. Option B is not correct. Endpoints are virtual devices. They are horizontally scaled, redundant, and highly available VPC components that allow communication between instances in your VPC and services without imposing availability risks or bandwidth constraints on your network traffic. Option C is not correct. An Elastic IP address is a static, public IPv4 address designed for dynamic cloud computing. You can associate an Elastic IP address with any instance or network interface for any VPC in your account. With an Elastic IP address, you can mask the failure of an instance by rapidly remapping the address to another instance in your VPC. They do not belong to a single VPC. Option D is correct. To create a NAT gateway, you must specify the public subnet in which the NAT gateway should reside. For more information about public and private subnets, see Subnet Routing. You must also specify an Elastic IP address to associate with the NAT gateway when you create it. After you've created a NAT gateway, you must update the route table associated with one or more of your private subnets to point Internet-bound traffic to the NAT gateway. This enables instances in your private subnets to communicate with the internet.",
    "explicacion_correcta": "Connect VPC to AWS services privately without Internet Gateway, NAT, VPN, or Direct Connect.\n\nWhen to use: Private subnets must access AWS services without traversing public internet.\n\nKey differences: Gateway Endpoints only for S3 and DynamoDB (route table prefix lists). Interface Endpoints (PrivateLink) for almost all other services (ENI with private IP).",
    "analisis_distractores": "Gateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.\n\nSingle NAT Gateway is AZ-resilient only. For full regional HA → deploy NAT Gateway in each AZ. Must be in public subnet.",
    "tip": "Gateway for Big Two (S3 & DynamoDB); Interface for the Rest. | NAT Gateway = Needs A public subnet To function, one per AZ for HA."
  },
  {
    "id": "saa_bbcf4b7528",
    "materia": "Design Resilient Architectures",
    "tema": "lambda",
    "dificultad": 2,
    "pregunta": "A microservices architecture needs asynchronous communication where multiple services must process the same message independently. Which AWS service is MOST appropriate?",
    "opciones": [
      "Amazon SQS Standard Queue",
      "Amazon SNS",
      "Amazon Kinesis Data Streams",
      "AWS Step Functions <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Amazon SNS (Simple Notification Service) provides pub/sub messaging pattern - One message published → Multiple subscribers receive copy - Push-based delivery (proactive) - Perfect for fan-out scenarios SNS Architecture: Publisher (Microservice A) ↓ SNS Topic ↓ ┌──┴──┬──────┬──────┐ ↓ ↓ ↓ ↓ Service B C D Lambda SNS Features: - Message Filtering: Subscribers receive only relevant messages - Multiple Protocols: SQS, Lambda, HTTP/HTTPS, Email, SMS, Mobile Push - Message Attributes: Metadata for filtering - Fan-out: 1-to-many delivery - FIFO Topics: Ordered, exactly-once delivery SNS vs SQS: | Feature | SNS | SQS | |---------|-----|-----| | Pattern | Pub/Sub (1-to-many) | Queue (1-to-1) | | Delivery | Push | Pull | | Subscribers | Multiple (fan-out) | Single consumer per message | | Retention | No retention | Up to 14 days | | Use Case | Notifications, fan-out | Decoupling, buffering | Example Use Case: Order Placed Event → SNS Topic ├→ Inventory Service (update stock) ├→ Payment Service (charge customer) ├→ Shipping Service (create shipment) ├→ Email Service (send confirmation) └→ Analytics Service (track metrics) Message Filtering Example: json { \"FilterPolicy\": { \"order_type\": [\"premium\", \"express\"], \"amount\": [{\"numeric\": [\">=\", 100]}] } } References: Amazon SNS, Pub/Sub Messaging, Fan-out Pattern </details> ---",
    "explicacion_correcta": "Serverless compute service running code without provisioning/managing servers, auto-scales on demand.\n\nWhen to use: Event-driven architectures, serverless microservices, real-time file processing (S3 triggers), scheduled CRON jobs (EventBridge).\n\nKey differences: EC2 = manage OS, pay for running time. Lambda = abstracted infrastructure, pay for exact execution time. Fargate = serverless containers. Lambda = Function-as-a-Service.",
    "analisis_distractores": "Lambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nUse SNS+SQS fan-out for reliable task processing (SNS alone can lose messages if endpoint offline).\n\nUse SNS+SQS fan-out for reliable task processing (SNS alone can lose messages if endpoint offline).",
    "tip": "Lambda = Limit of 15 minutes for serverless code. | SNS = Send Notifications Simultaneously (Broadcast/Push)."
  },
  {
    "id": "saa_bc00f990df",
    "materia": "Design Secure Architectures",
    "tema": "iam",
    "dificultad": 1,
    "pregunta": "Which IAM entity can be used to define permissions but cannot have permissions attached directly to it?",
    "opciones": [
      "IAM User",
      "IAM Group",
      "IAM Role",
      "IAM Policy <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: IAM groups are used to organize users and assign permissions, but policies are attached to the group, not permissions directly. Also, groups cannot be nested. </details>",
    "explicacion_correcta": "Fully managed service to securely control access using users, groups, roles, and identity-based policies.\n\nWhen to use: Implement least privilege, manage MFA, define permissions for humans/apps/services interacting with AWS.\n\nKey differences: IAM manages permissions within one AWS account. Organizations (SCPs) manages boundaries across accounts. Cognito handles app end-user auth.",
    "analisis_distractores": "Explicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_bcc0b8edd6",
    "materia": "Design Resilient Architectures",
    "tema": "config",
    "dificultad": 2,
    "pregunta": "Auto Scaling Termination Policies (Similar to PT1-Q5) An Auto Scaling group has instances from multiple launch templates. During scale-in, which termination policy terminates instances with the oldest launch template first?",
    "opciones": [
      "OldestInstance",
      "OldestLaunchConfiguration",
      "OldestLaunchTemplate",
      "Default termination policy <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: Auto Scaling Termination Policies: OldestInstance: └── Terminates oldest instance by launch time OldestLaunchConfiguration: └── Terminates instances with oldest launch config OldestLaunchTemplate: ✅ └── Terminates instances with oldest launch template version └── Use case: Rolling updates to new template versions Default: ├── 1. Select AZ with most instances ├── 2. Within that AZ, use allocation strategy └── 3. Terminate oldest launch template/config Use Case: Auto Scaling Group: ├── 5 instances with launch template v1 ├── 3 instances with launch template v2 └── Policy: OldestLaunchTemplate Scale-in: └── Terminates v1 instances first (gradual migration) Key Concept: OldestLaunchTemplate = Prefer newer template versions during scale-in </details> ---",
    "explicacion_correcta": "Automatically adds/removes EC2 instances for horizontal scaling and elasticity.\n\nWhen to use: Maintain performance during traffic spikes, reduce costs by terminating instances when demand drops.\n\nKey differences: Horizontal scaling (more instances) vs vertical scaling (bigger instance). Uses dynamic scaling policies like Target Tracking.",
    "analisis_distractores": "Default termination policy: most instances in AZ → oldest launch template → closest to billing hour. Enable scale-in protection for stateful workloads.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "ASG = Automatically Sizes Groups horizontally. | Config = Configuration compliance and history."
  },
  {
    "id": "saa_bccffc5d3c",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "EC2 Memory-Based Auto Scaling A web application experiences memory pressure during peak times. The solutions architect wants to configure Auto Scaling to add instances when average memory utilization exceeds 75%. What is required?",
    "opciones": [
      "Configure a target tracking policy on the ASGAverageMemoryUtilization predefined metric",
      "Install CloudWatch agent, publish custom memory metric, create target tracking policy on custom metric ✅",
      "Use step scaling with CPU utilization as a proxy for memory usage",
      "Enable detailed monitoring on EC2 instances to expose memory metrics <details> <summary>📖 Explanation</summary>"
    ],
    "correcta": 1,
    "explicacion": "Why: - EC2 does not publish memory metrics by default - CloudWatch agent must be installed to collect and publish memory metrics - Create target tracking policy on the custom metric namespace Setup Process:",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nDefault termination policy: most instances in AZ → oldest launch template → closest to billing hour. Enable scale-in protection for stateful workloads.\n\nCloudWatch does NOT monitor internal OS metrics (memory, disk space) by default. Must install CloudWatch Agent.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | ASG = Automatically Sizes Groups horizontally."
  },
  {
    "id": "saa_bd8e8ba79f",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 1,
    "pregunta": "What is the purpose of IAM permissions boundaries?",
    "opciones": [
      "To set maximum permissions an IAM entity can have",
      "To grant additional permissions beyond policies",
      "To replace IAM policies",
      "To encrypt IAM credentials <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - Permissions boundaries set maximum permissions limit - Cannot grant more permissions than boundary allows - Even if identity policy allows, boundary can restrict - Use Case: Delegate permission management safely Example Scenario: - Set permissions boundary on developers - Developers can create IAM roles for Lambda - But those roles cannot exceed boundary permissions - Prevents privilege escalation Effective Permissions = Identity Policy ∩ Permissions Boundary json // Permissions Boundary { \"Version\": \"2012-10-17\", \"Statement\": [ { \"Effect\": \"Allow\", \"Action\": [ \"s3:*\", \"ec2:*\", \"lambda:*\" ], \"Resource\": \"*\" } ] } Even if identity policy allows IAM actions, boundary prevents it. References: IAM Permissions Boundaries, Delegated Administration </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_bd996dcb5d",
    "materia": "Design Resilient Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "An RDS database runs continuously but only needs Multi-AZ during business hours for high availability. How can costs be optimized?",
    "opciones": [
      "This is not possible; Multi-AZ cannot be toggled",
      "Disable Multi-AZ outside business hours, re-enable during business hours",
      "Use Aurora Serverless",
      "Use read replicas instead of Multi-AZ <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Multi-AZ can be enabled/disabled (causes brief downtime) - For non-production databases, can disable outside business hours - Reduces costs by ~50% when disabled - Can be scripted/automated with Lambda - Aurora Serverless has different use case - Read replicas don't provide automatic failover Note: This is only suitable for non-production workloads References: RDS Multi-AZ, Cost Optimization </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nAurora storage auto-scales in 10GB increments up to 128TB. No need for read replicas for HA (6 copies already).\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Aurora = 6 copies, 3 AZs, self-healing, no manual HA setup."
  },
  {
    "id": "saa_be5318cf4b",
    "materia": "Design High-Performing Architectures",
    "tema": "auto-scaling",
    "dificultad": 1,
    "pregunta": "Which pillar of the AWS Well-Architected Framework includes the principle \"Stop guessing your capacity needs\"?",
    "opciones": [
      "Cost Optimization",
      "Performance Efficiency",
      "Reliability",
      "Operational Excellence <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Performance Efficiency pillar includes capacity planning principles - \"Stop guessing capacity\" - use Auto Scaling and elastic services - Enables right-sizing and dynamic capacity adjustment - Cost Optimization focuses on eliminating waste - Reliability focuses on recovery and testing - Operational Excellence focuses on running/monitoring References: AWS Well-Architected Framework - Performance Efficiency Pillar </details> ---",
    "explicacion_correcta": "Automatically adds/removes EC2 instances for horizontal scaling and elasticity.\n\nWhen to use: Maintain performance during traffic spikes, reduce costs by terminating instances when demand drops.\n\nKey differences: Horizontal scaling (more instances) vs vertical scaling (bigger instance). Uses dynamic scaling policies like Target Tracking.",
    "analisis_distractores": "Default termination policy: most instances in AZ → oldest launch template → closest to billing hour. Enable scale-in protection for stateful workloads.",
    "tip": "ASG = Automatically Sizes Groups horizontally."
  },
  {
    "id": "saa_be7b555367",
    "materia": "Design Resilient Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company needs to replicate S3 objects from us-east-1 to eu-west-1 for disaster recovery. What feature should be enabled?",
    "opciones": [
      "S3 Versioning",
      "S3 Cross-Region Replication (CRR)",
      "S3 Same-Region Replication (SRR)",
      "S3 Transfer Acceleration <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - S3 Cross-Region Replication (CRR) replicates objects across regions - Automatic, asynchronous replication - Requires versioning enabled on both buckets - Use cases: Compliance, disaster recovery, latency reduction CRR Requirements:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization."
  },
  {
    "id": "saa_beeca7cdff",
    "materia": "Design High-Performing Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "An application experiences high database read load. The data is read frequently but rarely updated. Which caching strategy should be implemented to reduce database load?",
    "opciones": [
      "Write-through caching",
      "Cache-aside (Lazy Loading) with ElastiCache",
      "Database connection pooling only",
      "Increase database instance size <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Cache-aside pattern is ideal for read-heavy workloads - Application checks cache first, loads from DB if cache miss - ElastiCache (Redis/Memcached) reduces database load - Cost-effective solution - Write-through is better for write-heavy workloads - Connection pooling helps but doesn't cache data - Scaling database is more expensive References: Caching Strategies, ElastiCache </details> ---",
    "explicacion_correcta": "Fully managed in-memory caching service supporting Redis and Memcached engines.\n\nWhen to use: Offload read-heavy database queries, store user session state, sub-millisecond response times.\n\nKey differences: DAX is specifically for DynamoDB (no code changes). ElastiCache requires application code changes. Redis supports Multi-AZ, backups, replication. Memcached is simpler with no persistence or failover.",
    "analisis_distractores": "ElastiCache requires application code changes (unlike DAX). Don't select Memcached if scenario needs DR, replication, or pub/sub.",
    "tip": "ElastiCache = Extra code changes required for Cache."
  },
  {
    "id": "saa_bfd8e4b367",
    "materia": "general",
    "tema": "lambda",
    "dificultad": 2,
    "pregunta": "Step Functions vs SQS for Workflow (Similar to PT5) A multi-step order processing workflow needs to coordinate Lambda functions with error handling and retry logic. Which service orchestrates this best?",
    "opciones": [
      "SQS queue with Lambda",
      "EventBridge rule with multiple targets",
      "Step Functions state machine",
      "SNS topic with Lambda subscriptions <details> <summary>✅ Click to reveal answer</summary> Key Concept: Step Functions = Serverless workflow orchestration with visual designer </details> ---"
    ],
    "correcta": 2,
    "explicacion": "Explanation: Step Functions vs SQS: Step Functions: ✅ ├── Visual workflow orchestration ├── Built-in error handling, retries ├── Conditional branching (if/else) ├── Parallel execution ├── Wait states (delays) └── Use: Complex workflows, state management SQS: ├── Simple message queue ├── Decoupling services ├── No built-in orchestration └── Use: Asynchronous job queues Step Functions Example: Order Processing Workflow: ┌─────────────┐ │ Validate │ │ Order │ └──────┬──────┘ │ ▼ ┌─────────────┐ Error ┌─────────────┐ │ Check │─────────────►│ Notify │ │ Inventory │ │ Admin │ └──────┬──────┘ └─────────────┘ │ Success ▼ ┌─────────────┐ │ Charge │ │ Credit Card │ └──────┬──────┘ │ ▼ ┌─────────────┐ │ Ship Order │ └─────────────┘ Key Features: Step Functions provides: ├── Visual designer ✅ ├── Automatic retries with backoff ├── Error handling (catch states) ├── State persistence ├── Execution history └── Integration with 200+ AWS services Why others wrong:",
    "explicacion_correcta": "Serverless compute service running code without provisioning/managing servers, auto-scales on demand.\n\nWhen to use: Event-driven architectures, serverless microservices, real-time file processing (S3 triggers), scheduled CRON jobs (EventBridge).\n\nKey differences: EC2 = manage OS, pay for running time. Lambda = abstracted infrastructure, pay for exact execution time. Fargate = serverless containers. Lambda = Function-as-a-Service.",
    "analisis_distractores": "Lambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nDon't chain Lambda functions directly. Use Step Functions to orchestrate complex workflows.\n\nStandard = unlimited throughput, at-least-once (duplicates possible). FIFO = exactly-once, strict ordering, 300 msgs/sec (3000 with batching).",
    "tip": "Lambda = Limit of 15 minutes for serverless code. | Step Functions = Orchestrates multi-step workflows for up to a year."
  },
  {
    "id": "saa_c01c38e752",
    "materia": "general",
    "tema": "ecs",
    "dificultad": 2,
    "pregunta": "A company wants to run Amazon ECS and EKS workloads on its own infrastructure outside AWS, managed from the AWS Console. Which services should they use?",
    "opciones": [
      "Amazon ECS Anywhere and Amazon EKS Anywhere",
      "AWS Outposts",
      "AWS Fargate",
      "Amazon EC2 Dedicated Hosts <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - ECS Anywhere and EKS Anywhere extend container orchestration to on-premises infrastructure - Managed from AWS Console - Outposts is for running AWS infrastructure on-premises - Fargate is for serverless containers in AWS - Dedicated Hosts are for compliance References: ECS Anywhere, EKS Anywhere, Hybrid Containers </details> ---",
    "explicacion_correcta": "Managed Kubernetes service for running Kubernetes on AWS without installing the control plane.\n\nWhen to use: Containerized applications using Kubernetes orchestration, multi-cloud portability.\n\nKey differences: EKS uses Kubernetes; ECS uses AWS-native orchestration. Fargate removes server management for both.",
    "analisis_distractores": "If scenario mentions Kubernetes specifically, answer is EKS. If it says containers but no Kubernetes preference, ECS may be simpler.\n\nIf prompt mentions minimizing operational overhead, serverless, or managing infrastructure → Fargate. If deep OS-level access needed → EC2 mode.\n\nMinimize operational overhead → Fargate launch type. Need to manage hosts, use RIs → EC2 mode.",
    "tip": "EKS = Elastic Kubernetes Service; Kubernetes on AWS. | Fargate = Forget managing servers; just run containers."
  },
  {
    "id": "saa_c085b8f433",
    "materia": "Design Secure Architectures",
    "tema": "config",
    "dificultad": 1,
    "pregunta": "According to the AWS Shared Responsibility Model, which of the following is AWS's responsibility?",
    "opciones": [
      "Encryption of data at rest in S3",
      "Patch management of guest operating systems on EC2",
      "Physical security of data centers",
      "Configuration of security groups <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - AWS is responsible for \"Security OF the Cloud\" - physical infrastructure - This includes data centers, hardware, and facilities - Customers are responsible for \"Security IN the Cloud\" - Options A, B, and D are all customer responsibilities - Customers choose whether to encrypt, patch OS, and configure security References: AWS Shared Responsibility Model </details> ---",
    "explicacion_correcta": "Continuously records configuration changes of AWS resources over time into configuration histories.\n\nWhen to use: Enforce compliance by tracking configuration changes, identifying compliant/non-compliant services.\n\nKey differences: CloudTrail = API call that requested change. Config = actual configuration state resulting from change.",
    "analisis_distractores": "Config is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Config = Configuration compliance and history."
  },
  {
    "id": "saa_c0b1d3e81a",
    "materia": "Design High-Performing Architectures",
    "tema": "ec2",
    "dificultad": 3,
    "pregunta": "You are creating several EC2 instances for a new application. For better performance of the application, both low network latency and high network throughput are required for the EC2 instances. All instances should be launched in a single availability zone. How would you configure this?",
    "opciones": [
      "Launch all EC2 instances in a placement group using a Cluster placement strategy.",
      "Auto-assign a public IP when launching the EC2 instances.",
      "Launch EC2 instances in an EC2 placement group and select the Spread placement strategy.",
      "When launching the EC2 instances, select an instance type that supports enhanced networking."
    ],
    "correcta": 0,
    "explicacion": "The Cluster placement strategy helps to achieve a low-latency and high throughput network. The reference is in https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html#pla cement-groups-limitations-partition. Option​ ​ A ​ is​ CORRECT:​ The Cluster placement strategy can improve network performance among EC2 instances. The strategy can be selected when creating a placement group: Option​ ​ B ​ performance. is​ ​ incorrect:​ Because the public IP cannot improve network Option​ ​ C ​ is​ ​ incorrect:​ The Spread placement strategy is recommended when a number of critical instances should be kept separate from each other. This strategy should not be used in this scenario. Option​ ​ D ​ is​ ​ incorrect:​ The description in the option is inaccurate. The correct method is creating a placement group with a suitable placement strategy. Also Read: AWS OpsWorks",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | Config = Configuration compliance and history."
  },
  {
    "id": "saa_c13e1160c2",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "aurora",
    "dificultad": 2,
    "pregunta": "A company has a centralized networking account and wants to share VPC subnets with multiple application accounts without duplicating VPC infrastructure. Which AWS service enables this?",
    "opciones": [
      "VPC Peering",
      "AWS Transit Gateway",
      "AWS Resource Access Manager (RAM)",
      "AWS PrivateLink <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - AWS Resource Access Manager (RAM) allows sharing resources across accounts - Can share VPC subnets between accounts - Resources remain in owner account, but accessible to shared accounts - No need to duplicate VPCs - VPC Peering (A) connects VPCs but doesn't share subnets - Transit Gateway (B) connects networks but doesn't share subnets - PrivateLink (D) is for service-to-VPC connectivity Benefits of Subnet Sharing with RAM: - ✅ Centralized network management - ✅ Reduced VPC sprawl - ✅ Efficient IP address usage - ✅ Simplified network architecture - ✅ Lower operational overhead Other Shareable Resources via RAM: - VPC Subnets (most common) - Transit Gateway attachments - Route 53 Resolver rules - License Manager configurations - Aurora DB clusters - Prefix lists References: AWS Resource Access Manager, VPC Subnet Sharing, Centralized Networking </details> ---",
    "explicacion_correcta": "Cloud-native relational DB with built-in resilience: 6 copies across 3 AZs, self-healing storage.\n\nWhen to use: Enterprise workloads needing automatic failover, up to 15 read replicas, cross-region Global Database.\n\nKey differences: Aurora Multi-Master allows writes to multiple instances. Global Database provides <1s cross-region replication.",
    "analisis_distractores": "Aurora storage auto-scales in 10GB increments up to 128TB. No need for read replicas for HA (6 copies already).\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.\n\nALIAS vs CNAME: ALIAS is free, works at apex, resolves to IP. CNAME maps name to name, can't be at apex.",
    "tip": "Aurora = 6 copies, 3 AZs, self-healing, no manual HA setup. | Gateway for Big Two (S3 & DynamoDB); Interface for the Rest."
  },
  {
    "id": "saa_c3234cc887",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "cloudwatch",
    "dificultad": 2,
    "pregunta": "An application writes log data to CloudWatch Logs. The operations team needs to be alerted when the word \"ERROR\" appears more than 10 times in 5 minutes. How should this be configured?",
    "opciones": [
      "Use CloudWatch Logs Insights to query for errors and manually check",
      "Create a metric filter to count \"ERROR\" occurrences, then create an alarm on that metric",
      "Export logs to S3 and use Athena to query for errors",
      "Use CloudTrail to track error events and create SNS notifications <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Metric filters extract metrics from log data - Filter pattern can count occurrences of \"ERROR\" - CloudWatch alarm can trigger on the custom metric - This provides automated, real-time alerting - Option A requires manual intervention - Option C adds unnecessary complexity and isn't real-time - CloudTrail is for API calls, not application logs References: CloudWatch Logs, Metric Filters, CloudWatch Alarms </details> ---",
    "explicacion_correcta": "Governance, compliance, operational auditing by capturing API calls made to your AWS account.\n\nWhen to use: Track user activity, troubleshoot by identifying API calls, audit for regulatory compliance (HIPAA).\n\nKey differences: CloudWatch = what is happening (performance). CloudTrail = who did it (API activity).",
    "analisis_distractores": "Management events enabled by default (90 days free). Data events (S3 uploads, Lambda invocations) NOT enabled by default, extra cost. 15-minute delay.\n\nCloudWatch does NOT monitor internal OS metrics (memory, disk space) by default. Must install CloudWatch Agent.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "CloudTrail = Leaves audit Trail of API activity (Who did what). | CloudWatch = Watches your performance metrics."
  },
  {
    "id": "saa_c35f046f76",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company uses Athena with a Glue Data Catalog. They want to ensure different teams can only query their own datasets. How should access be controlled?",
    "opciones": [
      "Use S3 bucket policies",
      "Use IAM policies with Glue Catalog permissions",
      "Create separate AWS accounts",
      "Use Athena workgroups only <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - IAM policies control access to Glue Catalog databases and tables - Fine-grained permissions per team - Can combine with S3 bucket policies - Separate accounts is overly complex - Workgroups organize queries but don't enforce data access - Glue Catalog permissions are the primary control References: Athena Security, Glue Catalog Permissions </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCommon pattern: optimize S3 data for Athena → use Glue to transform to Parquet/ORC columnar format.\n\nAthena costs $5/TB scanned. Optimize by partitioning data and using Parquet/ORC columnar format.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Glue = The glue that sticks raw data to analytics tools."
  },
  {
    "id": "saa_c381194dcd",
    "materia": "general",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company needs to run AWS services in its own data center to meet strict data residency requirements, while maintaining a consistent hybrid cloud experience. Which AWS service should they use?",
    "opciones": [
      "AWS Outposts",
      "Amazon EC2 Dedicated Hosts",
      "AWS Snowball Edge",
      "AWS Direct Connect <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - AWS Outposts brings native AWS services, infrastructure, and operating models to on-premises data centers - Provides a consistent hybrid experience - Supports EC2, EBS, RDS, ECS, EKS, S3, and more - Dedicated Hosts are for compliance, not hybrid cloud - Snowball Edge is for edge computing and data transfer, not full AWS services - Direct Connect is for network connectivity, not running AWS services on-premises References: AWS Outposts, Hybrid Cloud </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nMulti-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | RDS: Relational, Replicas for Reads, Multi-AZ for Resilience."
  },
  {
    "id": "saa_c39515793e",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A company monitors EC2 instances and needs to track a specific metric not readily available in CloudWatch. Which is a custom metric requiring manual setup? Options:",
    "opciones": [
      "Memory Utilization of EC2 instance",
      "CPU Utilization of EC2 instance",
      "Disk Read activity of EC2 instance",
      "Network packets out of EC2 instance"
    ],
    "correcta": 0,
    "explicacion": "Explanation: Memory utilization is not available by default in CloudWatch and requires custom metric setup using CloudWatch Agent or custom monitoring scripts. CPU, disk read, and network metrics are available by default. ### Cross-Origin Resource Sharing (CORS)",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nCloudWatch does NOT monitor internal OS metrics (memory, disk space) by default. Must install CloudWatch Agent.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | CloudWatch = Watches your performance metrics."
  },
  {
    "id": "saa_c3a8e23569",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company wants to load streaming IoT sensor data into Amazon S3 for analysis with minimal operational overhead. The data should be delivered every 5 minutes and compressed. Which service is MOST appropriate?",
    "opciones": [
      "Amazon Kinesis Data Streams with Lambda",
      "Amazon Kinesis Data Firehose",
      "Amazon SQS with Lambda",
      "AWS IoT Core with custom application <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Kinesis Data Firehose is fully managed, no infrastructure - Automatically loads to S3 - Built-in compression (GZIP, Snappy) - Buffer interval supports 60-900 seconds (5 minutes = 300 seconds) - Minimal operational overhead - Data Streams requires consumer application - SQS adds unnecessary complexity - Custom application requires maintenance References: Kinesis Data Firehose, Serverless Data Loading </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nStandard = unlimited throughput, at-least-once (duplicates possible). FIFO = exactly-once, strict ordering, 300 msgs/sec (3000 with batching).\n\nKinesis Data Streams for custom processing. Kinesis Data Firehose for automatic delivery to S3/Redshift/Elasticsearch (no code needed).",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | SQS = Send Queued Stuff (pull-based, 1-to-1 decoupling)."
  },
  {
    "id": "saa_c52f18c4cb",
    "materia": "general",
    "tema": "s3",
    "dificultad": 3,
    "pregunta": "Amazon Rekognition Custom Labels A wildlife conservation organization has 10,000 camera trap images stored in S3 containing various animal species. They want to automatically identify specific endangered species without building a machine learning model from scratch. What's the most efficient solution?",
    "opciones": [
      "Use Amazon Rekognition's general Object Detection API",
      "Use Amazon Rekognition Custom Labels to train a custom model",
      "Use Amazon SageMaker to build a deep learning model",
      "Use AWS Lambda with OpenCV for image processing"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Amazon Rekognition Custom Labels: - Train custom ML models without ML expertise - Uses transfer learning (pre-trained models) - Simple workflow: Label → Train → Deploy - Automatic model optimization How It Works:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization."
  },
  {
    "id": "saa_c586484bd0",
    "materia": "Design High-Performing Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "A microservices application needs a load balancer that can handle millions of requests per second with ultra-low latency and static IP addresses. Which load balancer should be used?",
    "opciones": [
      "Application Load Balancer",
      "Network Load Balancer",
      "Classic Load Balancer",
      "CloudFront <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Network Load Balancer (NLB) operates at Layer 4 (TCP/UDP/TLS) - Handles millions of requests per second - Ultra-low latency (microseconds) - Static IP addresses (one per AZ) - Preserves source IP address NLB Use Cases: - Extreme performance requirements - Static/Elastic IP needed (whitelist in firewalls) - TCP/UDP traffic - PrivateLink endpoints - Game servers, IoT, real-time applications NLB vs ALB: - NLB: Layer 4, faster, static IP, TCP/UDP - ALB: Layer 7, advanced routing, HTTP/HTTPS References: Network Load Balancer, Layer 4 vs Layer 7 </details> ---"
  },
  {
    "id": "saa_c58b573154",
    "materia": "Design Secure Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "An application needs to securely store database credentials that should be automatically rotated every 30 days. Which AWS service is MOST appropriate?",
    "opciones": [
      "AWS Systems Manager Parameter Store",
      "AWS Secrets Manager",
      "AWS KMS",
      "Amazon S3 with encryption <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - AWS Secrets Manager designed specifically for secrets with built-in rotation - Automatic rotation for RDS, DocumentDB, Redshift, Amazon Redshift - Lambda-based custom rotation for other services - Versioning and immediate rotation Secrets Manager Features: - Automatic rotation (configurable schedule) - Built-in integration with AWS databases - Encryption at rest (KMS) - Fine-grained access control (IAM) - Audit capability (CloudTrail) - Cross-region replication - Version management Secrets Manager vs Parameter Store: | Feature | Secrets Manager | Parameter Store (Standard) | Parameter Store (Advanced) | |---------|----------------|----------------------------|----------------------------| | Automatic Rotation | Yes | No | No | | Built-in RDS Integration | Yes | No | No | | Cost | $0.40/secret/month + API calls | Free | $0.05/parameter/month | | Secret Size | 64 KB | 4 KB | 8 KB | | Encryption | Always (KMS) | Optional (KMS) | Optional (KMS) | | Use Case | DB credentials, API keys | Configuration, non-rotating secrets | Configuration, larger values | Rotation Configuration: json { \"automaticallyAfterDays\": 30, \"rotationLambdaARN\": \"arn:aws:lambda:...\", \"rotationEnabled\": true } References: AWS Secrets Manager, Secrets Rotation, Credential Management </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nRedshift Spectrum allows querying S3 data directly without loading. Redshift is NOT for OLTP.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_c5f4275f05",
    "materia": "general",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "An application deployed across multiple regions needs a database that supports multi-region writes with automatic conflict resolution. Which database should be used?",
    "opciones": [
      "RDS with cross-region read replicas",
      "Aurora Global Database",
      "DynamoDB Global Tables",
      "Redshift with cross-region snapshots <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - DynamoDB Global Tables support multi-region active-active writes - Automatic conflict resolution (last-writer-wins) - Multi-master replication - RDS replicas are read-only - Aurora Global Database has one primary region for writes - Redshift is for analytics, not multi-region writes References: DynamoDB Global Tables, Multi-Region Architecture </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nAurora storage auto-scales in 10GB increments up to 128TB. No need for read replicas for HA (6 copies already).\n\nRedshift Spectrum allows querying S3 data directly without loading. Redshift is NOT for OLTP.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Aurora = 6 copies, 3 AZs, self-healing, no manual HA setup."
  },
  {
    "id": "saa_c623051e07",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "A company wants to forecast their AWS costs for the next 6 months based on current usage trends. Which tool should they use?",
    "opciones": [
      "AWS Budgets",
      "AWS Cost Explorer with forecasting",
      "AWS Trusted Advisor",
      "AWS Cost and Usage Report <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Cost Explorer provides cost forecasting up to 12 months - Based on historical usage patterns - Interactive graphs showing predictions - 80% confidence interval - Budgets sets alerts but doesn't forecast - Trusted Advisor provides recommendations - Cost and Usage Report is for detailed analysis References: Cost Explorer, Cost Forecasting </details> ---"
  },
  {
    "id": "saa_c6fb812ba9",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "ebs",
    "dificultad": 2,
    "pregunta": "A legacy application uses Java Message Service (JMS) API. What is the BEST AWS migration path with minimal code changes?",
    "opciones": [
      "Migrate to Amazon SQS",
      "Migrate to Amazon SNS",
      "Migrate to Amazon MQ",
      "Rewrite using Kinesis <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Amazon MQ is managed message broker for Apache ActiveMQ and RabbitMQ - JMS, AMQP, MQTT, OpenWire, STOMP protocols - Minimal code changes for lift-and-shift - Compatible with existing messaging APIs Amazon MQ vs SQS/SNS: | Feature | Amazon MQ | SQS/SNS | |---------|-----------|---------| | Protocols | JMS, AMQP, MQTT, STOMP | AWS API only | | Migration | Minimal code changes | Requires code changes | | Use Case | Legacy app migration | Cloud-native apps | | Scaling | Limited | Highly scalable | | Management | Managed broker | Fully serverless | | Cost | Instance-based | Pay per use | Amazon MQ Deployment: Applications (JMS/AMQP) ↓ Amazon MQ Broker ├─ Active/Standby (Multi-AZ) ├─ Apache ActiveMQ or RabbitMQ ├─ Persistent storage (EBS/EFS) └─ Built-in monitoring Amazon MQ Features:",
    "explicacion_correcta": "Persistent block-level storage volumes attached to EC2 instances. Behave like raw hard drives.\n\nWhen to use: Boot volumes for EC2, database storage, applications requiring consistent low-latency block storage.\n\nKey differences: EBS locked to single AZ. EFS spans multiple AZs and mounts to hundreds of instances. EBS is persistent, Instance Store is ephemeral.",
    "analisis_distractores": "EBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.\n\nEFS is strictly for Linux (NFS). For Windows servers, choose Amazon FSx for Windows File Server.\n\nUse SNS+SQS fan-out for reliable task processing (SNS alone can lose messages if endpoint offline).",
    "tip": "EBS = Elastic Block Store; one AZ, one instance, persistent. | EFS = Elastic File Share for Linux."
  },
  {
    "id": "saa_c73bc6c517",
    "materia": "Design High-Performing Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A web application serves static content (images, CSS, JS) to global users. The content is stored in S3. What is the BEST way to improve performance and reduce latency?",
    "opciones": [
      "Enable S3 Transfer Acceleration",
      "Use CloudFront with S3 as origin",
      "Enable S3 Cross-Region Replication",
      "Use S3 Standard storage class <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - CloudFront is AWS's CDN (Content Delivery Network) - Caches content at 400+ edge locations globally - Reduces latency for users worldwide - Reduces load on origin S3 bucket CloudFront Benefits: - Low latency (content served from nearest edge) - High transfer speeds - DDoS protection (AWS Shield) - SSL/TLS support - Reduced S3 data transfer costs Other Options: - Transfer Acceleration: Speeds up uploads to S3, not downloads - Cross-Region Replication: Multi-region redundancy, not CDN - Storage class: Doesn't affect delivery performance References: Amazon CloudFront, S3 with CloudFront </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCaching HTTP content → CloudFront. Non-HTTP or static IPs needed → Global Accelerator. Use OAI/OAC to protect S3 origins.\n\nCaching HTTP content → CloudFront. Non-HTTP or static IPs needed → Global Accelerator. Use OAI/OAC to protect S3 origins.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | CloudFront = Sits in front of your web app to cache HTTP."
  },
  {
    "id": "saa_c742565dd3",
    "materia": "general",
    "tema": "aws-architect",
    "dificultad": 1,
    "pregunta": "Which service provides FIPS 140-2 Level 3 compliance?",
    "opciones": [
      "KMS",
      "CloudHSM",
      "Secrets Manager",
      "Certificate Manager"
    ],
    "correcta": 1,
    "explicacion": ""
  },
  {
    "id": "saa_c7ad7e01b5",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A financial institution needs a fully managed, immutable, cryptographically verifiable ledger database. Which AWS service should they use?",
    "opciones": [
      "Amazon QLDB",
      "Amazon Aurora",
      "Amazon RDS",
      "Amazon DynamoDB <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - Amazon QLDB (Quantum Ledger Database) is a fully managed ledger database - Provides immutable, cryptographically verifiable transaction log - Aurora, RDS, and DynamoDB are not ledger databases References: Amazon QLDB, Ledger Database </details> --- ## Summary Total Questions: 28 Topics Covered: - EC2 Instance Types and Pricing (On-Demand, Reserved, Spot, Dedicated) - Auto Scaling (Policies, Health Checks, Lifecycle) - Elastic Load Balancing (ALB, NLB, CLB, GLB) - AWS Lambda (Configuration, Limits, Concurrency) - Container Services (ECS, EKS, Fargate) - Elastic Beanstalk (PaaS) - Placement Groups - Session Management - AWS Outposts - AWS Batch - AWS Serverless Application Repository - VMware Cloud on AWS - AWS Wavelength - ECS Anywhere - EKS Anywhere - Amazon Keyspaces - Amazon QLDB Exam Tips: EC2 Pricing: - Spot: Cheapest (90% discount), can be interrupted - Reserved: 1-3 year commitment, up to 72% discount - Savings Plans: Flexible commitment, up to 66% discount - On-Demand: No commitment, highest price - Dedicated Hosts: BYOL, compliance, most expensive Auto Scaling Policies: - Target Tracking: Easiest, maintain metric at target - Scheduled: Predictable patterns - Step: Multiple thresholds - Predictive: ML-based forecasting Load Balancers: - ALB: Layer 7, HTTP/HTTPS, advanced routing - NLB: Layer 4, extreme performance, static IP - CLB: Legacy, basic - GLB: Layer 3, virtual appliances Lambda: - Max timeout: 15 minutes - Memory: 128 MB - 10 GB - CPU scales with memory - Automatic concurrent scaling Containers: - ECS + EC2: Manage instances - ECS + Fargate: Serverless containers - EKS: Managed Kubernetes Placement Groups: - Cluster: Low latency, single AZ - Spread: Max availability, 7/AZ - Partition: Large distributed apps Best Practices:",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nIf scenario mentions Kubernetes specifically, answer is EKS. If it says containers but no Kubernetes preference, ECS may be simpler.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_c92808a839",
    "materia": "Design Resilient Architectures",
    "tema": "s3",
    "dificultad": 3,
    "pregunta": "KMS Multi-Region Keys A global SaaS company stores encrypted customer data in S3 buckets across multiple regions (us-east-1, eu-west-1, ap-southeast-1). Currently, they use separate KMS keys in each region, causing high latency when accessing data from other regions. How can they reduce latency while maintaining encryption?",
    "opciones": [
      "Use a single KMS key in us-east-1 for all regions",
      "Create multi-region KMS keys and replicate to all regions",
      "Disable encryption to eliminate latency",
      "Use AWS Secrets Manager instead of KMS Exam Keyword: \"Global\" + \"encryption\" + \"latency\" = Multi-Region KMS Keys ---"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Multi-Region KMS Keys: - Primary key in one region - Replica keys in other regions - Same key material across all regions - Independently manageable key policies How It Works: Primary Key (us-east-1): mrk-123abc... Replica Key (eu-west-1): mrk-123abc... (same key ID prefix) Replica Key (ap-southeast-1): mrk-123abc... (same key ID prefix) Encryption in us-east-1: python kms.encrypt( KeyId='mrk-123abc...', # Uses local key Plaintext=b'customer data' ) Decryption in eu-west-1: python kms.decrypt( CiphertextBlob=encrypted_data # Automatically uses local replica ) Benefits: - ✅ Low-latency encryption/decryption (local API calls) - ✅ Data encrypted in one region can be decrypted in another - ✅ Disaster recovery (automatic failover) - ✅ Compliance (data residency maintained) Use Cases: - Global applications - Multi-region databases (DynamoDB Global Tables, Aurora Global Database) - Disaster recovery - Data migration between regions Why Not Others:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nAurora storage auto-scales in 10GB increments up to 128TB. No need for read replicas for HA (6 copies already).\n\nCannot enable encryption on existing RDS/EBS directly. Must snapshot → copy with encryption → restore.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Aurora = 6 copies, 3 AZs, self-healing, no manual HA setup."
  },
  {
    "id": "saa_ca060c0a57",
    "materia": "Design Secure Architectures",
    "tema": "iam",
    "dificultad": 1,
    "pregunta": "Which AWS service provides a unified interface to manage multiple AWS accounts within an organization?",
    "opciones": [
      "AWS IAM",
      "AWS Organizations",
      "AWS Control Tower",
      "AWS Systems Manager <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - AWS Organizations centrally manages multiple AWS accounts - Provides consolidated billing, account creation, and policy management - IAM manages permissions within an account - Control Tower sets up multi-account environments (uses Organizations underneath) - Systems Manager manages AWS resources, not accounts - Direct answer for multi-account management: Organizations References: AWS Organizations, Account Management </details> ---",
    "explicacion_correcta": "Fully managed service to securely control access using users, groups, roles, and identity-based policies.\n\nWhen to use: Implement least privilege, manage MFA, define permissions for humans/apps/services interacting with AWS.\n\nKey differences: IAM manages permissions within one AWS account. Organizations (SCPs) manages boundaries across accounts. Cognito handles app end-user auth.",
    "analisis_distractores": "Explicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.\n\nSCPs don't grant permissions, they only restrict. Root user in member accounts is blocked by default with full deny SCP.\n\nSCPs don't grant permissions, they only restrict. Root user in member accounts is blocked by default with full deny SCP.",
    "tip": "IAM = I Am Managing who can do what. | Organizations = SCPs restrict, never grant."
  },
  {
    "id": "saa_cac6bb401f",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "S3 Intelligent-Tiering (Similar to PT3) A company stores millions of files in S3 with unpredictable access patterns. Some files are accessed frequently, others rarely. Which storage class automatically moves objects between tiers?",
    "opciones": [
      "S3 Standard with lifecycle policies",
      "S3 Intelligent-Tiering",
      "S3 One Zone-IA",
      "S3 Glacier with lifecycle policies <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: S3 Intelligent-Tiering: Automatic Tier Movement: ├── Frequent Access: Objects accessed in last 30 days ├── Infrequent Access: Not accessed 30 days (moves automatically) ✅ ├── Archive Instant Access: Not accessed 90 days (optional) ├── Archive Access: Not accessed 90-270 days (optional) └── Deep Archive Access: Not accessed 180-730 days (optional) Cost: ├── Monitoring: $0.0025 per 1,000 objects ├── No retrieval fees ✅ └── Automatic savings: 40-95% vs S3 Standard Comparison: S3 Standard + Lifecycle: ❌ ├── Fixed transition rules (e.g., 30 days → IA) ├── All objects transition regardless of access └── May move frequently accessed objects (wrong) S3 Intelligent-Tiering: ✅ ├── Per-object monitoring ├── Moves only non-accessed objects └── Keeps frequently accessed in Standard tier Use Cases: Good for Intelligent-Tiering: ├── Unpredictable access patterns ✅ ├── Mix of hot and cold data ├── Want automatic optimization └── Avoid lifecycle management complexity Not ideal for: ├── Objects < 128 KB (minimum size) ├── Objects stored < 30 days (charged minimum) ├── Known access patterns (use lifecycle instead) Key Concept: Intelligent-Tiering = Automatic per-object tiering based on access patterns </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nFor predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Intelligent-Tiering = Smart automatic cost optimization."
  },
  {
    "id": "saa_cad6724f50",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "Lambda CloudWatch Logs A developer deployed a Lambda function that processes records from a Kinesis Data Stream. The function is executing successfully (based on Kinesis metrics showing processed records), but no logs appear in CloudWatch Logs. What is the MOST likely cause?",
    "opciones": [
      "Lambda functions triggered by Kinesis Data Streams do not support CloudWatch Logs",
      "The Lambda execution role lacks permissions to create log groups and write log events",
      "CloudWatch Logs is not enabled in the Lambda function configuration",
      "The function must explicitly call CloudWatch Logs API to write logs Fix: Attach the AWSLambdaBasicExecutionRole managed policy to the execution role. Exam Tip: \"Lambda works but no logs\" = missing CloudWatch Logs permissions (99% of the time) ---"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Lambda automatically writes logs to CloudWatch Logs IF the execution role has these permissions: - logs:CreateLogGroup - logs:CreateLogStream - logs:PutLogEvents Why Other Options Are Wrong:",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nKinesis Data Streams for custom processing. Kinesis Data Firehose for automatic delivery to S3/Redshift/Elasticsearch (no code needed).",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_cc8e873b34",
    "materia": "Design High-Performing Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A global application needs to serve static content with the lowest possible latency worldwide. Which architecture should be implemented?",
    "opciones": [
      "EC2 instances in multiple regions",
      "S3 with CloudFront distribution",
      "S3 with Cross-Region Replication",
      "ALB in multiple regions <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - CloudFront is a CDN with 400+ edge locations globally - Caches content close to users worldwide - S3 origin for static content - Lowest latency for global distribution - EC2 requires management and doesn't cache at edge - CRR helps availability but doesn't reduce latency - ALB doesn't provide edge caching References: CloudFront, Global Architecture </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nCaching HTTP content → CloudFront. Non-HTTP or static IPs needed → Global Accelerator. Use OAI/OAC to protect S3 origins.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_ccd64142b1",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "s3",
    "dificultad": 1,
    "pregunta": "Which AWS Organizations feature allows you to create policies that prevent accounts from leaving the organization?",
    "opciones": [
      "IAM Policy",
      "Service Control Policy (SCP)",
      "Resource Control Policy",
      "Organizational Lock <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Service Control Policies (SCPs) can prevent accounts from leaving - SCP can deny the organizations:LeaveOrganization action - Applied at Organization or OU level - Cannot be overridden by member accounts Example SCP: json { \"Version\": \"2012-10-17\", \"Statement\": [{ \"Effect\": \"Deny\", \"Action\": \"organizations:LeaveOrganization\", \"Resource\": \"*\" }] } Other Preventive SCP Use Cases: - Prevent deletion of CloudTrail - Deny public S3 buckets - Restrict to approved instance types - Enforce encryption requirements - Restrict root user actions References: Service Control Policies, Organization Governance </details> --- ## Summary Total Questions: 27 Topics Covered: - AWS Global Infrastructure (Regions, AZs, Edge Locations, Local Zones, Wavelength) - AWS Well-Architected Framework (All 6 pillars) - Shared Responsibility Model - AWS Account Management (Organizations, Consolidated Billing) - Service Control Policies (SCPs) - NEW - AWS Control Tower - NEW - AWS Resource Access Manager (RAM) - NEW - Cost Management Tools (Pricing Calculator, Budgets, Cost Explorer) - Service Categories and Cloud Models Exam Tips:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nSCPs don't grant permissions, they only restrict. Root user in member accounts is blocked by default with full deny SCP.\n\nSCPs don't grant permissions, they only restrict. Root user in member accounts is blocked by default with full deny SCP.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Organizations = SCPs restrict, never grant."
  },
  {
    "id": "saa_cce27a0804",
    "materia": "general",
    "tema": "aws-architect",
    "dificultad": 1,
    "pregunta": "What is the maximum size of a CIDR block in a VPC?",
    "opciones": [
      "/8",
      "/16",
      "/24",
      "/28"
    ],
    "correcta": 1,
    "explicacion": "",
    "explicacion_correcta": "Connect VPC to AWS services privately without Internet Gateway, NAT, VPN, or Direct Connect.\n\nWhen to use: Private subnets must access AWS services without traversing public internet.\n\nKey differences: Gateway Endpoints only for S3 and DynamoDB (route table prefix lists). Interface Endpoints (PrivateLink) for almost all other services (ENI with private IP).",
    "analisis_distractores": "Gateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Gateway for Big Two (S3 & DynamoDB); Interface for the Rest."
  },
  {
    "id": "saa_cd3158436b",
    "materia": "Design High-Performing Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company needs to store petabytes of data for machine learning training with the fastest possible throughput. Which storage service is MOST appropriate?",
    "opciones": [
      "Amazon S3",
      "Amazon EFS",
      "Amazon FSx for Lustre",
      "Amazon EBS <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - FSx for Lustre designed for: - High-performance computing (HPC) - Machine learning - Media processing - Sub-millisecond latencies - Hundreds of GB/s throughput - Millions of IOPS FSx for Lustre Features: - Integrates with S3 (lazy loading) - POSIX-compliant file system - Scratch and persistent deployment types - Scales to petabytes Deployment Types: - Scratch: Temporary, highest performance, no replication - Persistent: Long-term, replication, automatic failover ML/HPC Storage: - Training: FSx for Lustre (from S3) - Inference: EFS or S3 - Dataset storage: S3 - Processing: FSx for Lustre References: Amazon FSx for Lustre, HPC Storage </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nEFS is strictly for Linux (NFS). For Windows servers, choose Amazon FSx for Windows File Server.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | EFS = Elastic File Share for Linux."
  },
  {
    "id": "saa_ce0b20249f",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "config",
    "dificultad": 3,
    "pregunta": "API Gateway Mapping Templates A company upgraded their REST API backend, changing the response field from user_id to userId. However, mobile clients still expect the old field name. The API is exposed through Amazon API Gateway. You need to transform responses to maintain backward compatibility without modifying the backend. What should you configure in API Gateway?",
    "opciones": [
      "Enable API caching to store both response formats",
      "Use mapping templates in the Integration Response",
      "Create a Lambda function to transform responses",
      "Define multiple API versions with different response models"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Mapping Templates: - Use VTL (Velocity Template Language) - Transform request/response payloads - Located in Integration Request/Response sections Example VTL Mapping: vtl { \"user_id\": $input.path('$.userId'), \"name\": $input.path('$.name'), \"email\": $input.path('$.email') } This transforms backend response: json {\"userId\": \"123\", \"name\": \"John\"} To client-expected format: json {\"user_id\": \"123\", \"name\": \"John\"} Where to Configure:",
    "explicacion_correcta": "Fully managed service for creating, publishing, maintaining, monitoring, and securing REST/HTTP/WebSocket APIs.\n\nWhen to use: Fronting Lambda functions or EC2 backends, rate limiting, API key management, caching.\n\nKey differences: API Gateway = API management layer (throttling, caching, auth). ALB = load balancing across instances. CloudFront = global CDN caching.",
    "analisis_distractores": "API Gateway integrates with Lambda (no VPC needed) and HTTP backends (needs VPC link for private). WebSocket APIs for bidirectional communication.\n\nAPI Gateway integrates with Lambda (no VPC needed) and HTTP backends (needs VPC link for private). WebSocket APIs for bidirectional communication.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "API Gateway = Gatekeeper for your APIs (throttle, cache, secure). | API Gateway = Gatekeeper for your APIs (throttle, cache, secure)."
  },
  {
    "id": "saa_ce49c41095",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "ec2",
    "dificultad": 3,
    "pregunta": "Your team is developing a high-performance computing (HPC) application. The application resolves complex, compute-intensive problems and needs a high-performance and low-latency Lustre file system. You need to configure this file system in AWS at a low cost. Which method is the most suitable?",
    "opciones": [
      "Create a Lustre file system through Amazon FSx.",
      "Launch a high-performance Lustre file system in Amazon EBS.",
      "Create a high-speed volume cluster in an EC2 placement group.",
      "Launch the Lustre file system from AWS Marketplace."
    ],
    "correcta": 0,
    "explicacion": "The Lustre file system is an open-source, parallel file system that can be used for HPC applications. Refer to http://lustre.org/ for its introduction. In Amazon FSx, users can quickly launch a Lustre file system at a low cost. Option​ ​ A ​ is​ CORRECT:​ Amazon FSx supports Lustre file systems and users pay for only the resources they use. Option​ ​ B ​ is​ ​ incorrect:​ Although users may be able to configure a Lustre file system through EBS, it needs lots of extra configurations, Option A is more straightforward. Option​ ​ C ​ is​ ​ incorrect:​ support a Lustre file system. Because the EC2 placement group does not Option​ ​ D ​ is​ ​ incorrect:​ Because products in AWS Marketplace are not cost-effective. For Amazon FSx, there are no minimum fees or set-up charges. Check its pricing in Amazon FSx for Lustre Pricing. Read Now: Amazon Braket",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | EBS = Elastic Block Store; one AZ, one instance, persistent."
  },
  {
    "id": "saa_d059b73956",
    "materia": "Design Secure Architectures",
    "tema": "iam",
    "dificultad": 2,
    "pregunta": "A company wants to provide temporary, limited-privilege access to third-party vendors to perform specific tasks in their AWS account. What is the BEST approach?",
    "opciones": [
      "Create IAM users with passwords",
      "Share root account credentials temporarily",
      "Create cross-account IAM roles with external ID",
      "Create access keys and share them <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Cross-account IAM roles with External ID provide secure temporary access - No long-term credentials needed - External ID prevents confused deputy problem - Fine-grained permissions with session duration limits Cross-Account Access Architecture:",
    "explicacion_correcta": "Fully managed service to securely control access using users, groups, roles, and identity-based policies.\n\nWhen to use: Implement least privilege, manage MFA, define permissions for humans/apps/services interacting with AWS.\n\nKey differences: IAM manages permissions within one AWS account. Organizations (SCPs) manages boundaries across accounts. Cognito handles app end-user auth.",
    "analisis_distractores": "Explicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_d06feab670",
    "materia": "Design Secure Architectures",
    "tema": "lambda",
    "dificultad": 2,
    "pregunta": "Lambda Function URL vs API Gateway (Similar to PT5) A simple webhook needs to trigger a Lambda function via HTTPS. The function doesn't require authentication or request transformation. What's the most cost-effective solution?",
    "opciones": [
      "API Gateway REST API",
      "API Gateway HTTP API",
      "Lambda Function URL",
      "Application Load Balancer <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: Lambda Invocation Options: Lambda Function URL: ✅ ├── Cost: FREE (only pay for Lambda execution) ├── Features: Basic HTTPS endpoint, IAM/no auth ├── Use case: Simple webhooks, public endpoints └── URL: https://abc123.lambda-url.us-east-1.on.aws/ API Gateway HTTP API: ├── Cost: $1 per million requests ├── Features: Routing, auth, throttling, caching └── Use case: RESTful APIs with multiple routes API Gateway REST API: ├── Cost: $3.50 per million requests ├── Features: Full API management, transformations └── Use case: Complex APIs, request/response transformation Application Load Balancer: ├── Cost: $16.20/month + $0.008/LCU-hour ├── Features: Path-based routing, multiple targets └── Use case: Multi-target routing, not single Lambda Cost Comparison (1M requests/month): Lambda Function URL: └── $0.00 (free) + Lambda execution cost ✅ API Gateway HTTP API: └── $1.00 + Lambda execution cost API Gateway REST API: └── $3.50 + Lambda execution cost ALB: └── $16.20 + LCU charges + Lambda execution cost When to Use Function URL: Good for: ├── Simple webhooks ✅ ├── Public endpoints (no complex auth) ├── Direct Lambda invocation └── Cost optimization Use API Gateway instead when you need: ├── Request validation/transformation ├── Multiple routes/methods ├── Rate limiting/throttling ├── Caching └── Custom domains Key Concept: Lambda Function URL = Free HTTPS endpoint for simple use cases </details> ---",
    "explicacion_correcta": "Serverless compute service running code without provisioning/managing servers, auto-scales on demand.\n\nWhen to use: Event-driven architectures, serverless microservices, real-time file processing (S3 triggers), scheduled CRON jobs (EventBridge).\n\nKey differences: EC2 = manage OS, pay for running time. Lambda = abstracted infrastructure, pay for exact execution time. Fargate = serverless containers. Lambda = Function-as-a-Service.",
    "analisis_distractores": "Lambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.\n\nAPI Gateway integrates with Lambda (no VPC needed) and HTTP backends (needs VPC link for private). WebSocket APIs for bidirectional communication.",
    "tip": "Lambda = Limit of 15 minutes for serverless code. | IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_d08c80219e",
    "materia": "Design Resilient Architectures",
    "tema": "aws-architect",
    "dificultad": 1,
    "pregunta": "Which database service provides automatic failover in less than 30 seconds?",
    "opciones": [
      "RDS MySQL",
      "Aurora",
      "DynamoDB",
      "Redshift"
    ],
    "correcta": 1,
    "explicacion": ""
  },
  {
    "id": "saa_d12a31c178",
    "materia": "general",
    "tema": "lambda",
    "dificultad": 2,
    "pregunta": "A company needs to orchestrate a complex workflow with multiple Lambda functions, error handling, and retry logic. Which service should be used?",
    "opciones": [
      "EventBridge",
      "SNS with Lambda subscriptions",
      "AWS Step Functions",
      "SQS with Lambda triggers <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Step Functions orchestrates workflows with state machines - Built-in error handling and retry logic - Visual workflow designer - Integrates with Lambda and other AWS services - Best for complex, multi-step workflows - EventBridge routes events but doesn't orchestrate - SNS/SQS don't provide workflow orchestration References: Step Functions, Serverless Orchestration </details> ---",
    "explicacion_correcta": "Serverless compute service running code without provisioning/managing servers, auto-scales on demand.\n\nWhen to use: Event-driven architectures, serverless microservices, real-time file processing (S3 triggers), scheduled CRON jobs (EventBridge).\n\nKey differences: EC2 = manage OS, pay for running time. Lambda = abstracted infrastructure, pay for exact execution time. Fargate = serverless containers. Lambda = Function-as-a-Service.",
    "analisis_distractores": "Lambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nUse SNS+SQS fan-out for reliable task processing (SNS alone can lose messages if endpoint offline).\n\nDon't chain Lambda functions directly. Use Step Functions to orchestrate complex workflows.",
    "tip": "Lambda = Limit of 15 minutes for serverless code. | SNS = Send Notifications Simultaneously (Broadcast/Push)."
  },
  {
    "id": "saa_d139f088ae",
    "materia": "Design Secure Architectures",
    "tema": "iam",
    "dificultad": 2,
    "pregunta": "A company wants to analyze IAM policies to identify resources shared with external entities. Which service provides this capability?",
    "opciones": [
      "AWS IAM Policy Simulator",
      "IAM Access Analyzer",
      "AWS Trusted Advisor",
      "AWS Config <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - IAM Access Analyzer uses automated reasoning to analyze resource policies - Identifies resources shared with external principals - Validates IAM policies against best practices - Generates findings for review IAM Access Analyzer Features:",
    "explicacion_correcta": "Fully managed service to securely control access using users, groups, roles, and identity-based policies.\n\nWhen to use: Implement least privilege, manage MFA, define permissions for humans/apps/services interacting with AWS.\n\nKey differences: IAM manages permissions within one AWS account. Organizations (SCPs) manages boundaries across accounts. Cognito handles app end-user auth.",
    "analisis_distractores": "Explicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_d38c40f187",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company wants to visualize data from multiple sources including S3, RDS, and Redshift. They need interactive dashboards for business users. Which AWS service should be used?",
    "opciones": [
      "Amazon Athena",
      "Amazon QuickSight",
      "Amazon CloudWatch",
      "Amazon Kinesis Data Analytics <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - QuickSight is business intelligence and visualization service - Connects to multiple data sources (S3, RDS, Redshift, etc.) - Creates interactive dashboards - SPICE engine for fast analytics - Athena queries data but doesn't visualize - CloudWatch monitors infrastructure - Kinesis analyzes streaming data References: Amazon QuickSight, Business Intelligence </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nMulti-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nAthena costs $5/TB scanned. Optimize by partitioning data and using Parquet/ORC columnar format.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | RDS: Relational, Replicas for Reads, Multi-AZ for Resilience."
  },
  {
    "id": "saa_d3964cd023",
    "materia": "general",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "AWS Application Migration Service A company plans to migrate 100 on-premises Windows and Linux servers to AWS. The migration must be automated, have minimal downtime, and allow testing in AWS before final cutover. What AWS service should you use?",
    "opciones": [
      "AWS Server Migration Service (SMS)",
      "AWS Application Migration Service",
      "AWS Database Migration Service (DMS)",
      "AWS DataSync"
    ],
    "correcta": 1,
    "explicacion": "Explanation: AWS Application Migration Service (formerly CloudEndure): - Lift-and-shift migration for servers - Continuous replication of source servers - Automated conversion to AWS-native format - Pre-cutover testing - Minimal downtime (minutes) How It Works:"
  },
  {
    "id": "saa_d434015841",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company needs to integrate its on-premises Apache Kafka workloads with AWS analytics and storage services. Which AWS service provides a fully managed, highly available Kafka environment?",
    "opciones": [
      "Amazon MSK",
      "Amazon Kinesis Data Streams",
      "Amazon SQS",
      "AWS Glue Streaming <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - Amazon MSK (Managed Streaming for Apache Kafka) provides a fully managed Kafka service - Handles provisioning, patching, and scaling - Integrates with Kinesis, Lambda, S3, Redshift - Kinesis is a separate streaming service, not Kafka-compatible - SQS is for message queuing, not streaming - Glue Streaming is for ETL, not Kafka management References: Amazon MSK, Streaming Data </details> --- ## Summary Total Questions: 46 Topics Covered: - Amazon SNS (Pub/Sub, Fan-out) - Amazon SQS (Standard vs FIFO Queues) - Amazon Kinesis (Data Streams, Data Firehose) - SNS-SQS Fan-out Pattern - AWS Step Functions (Workflow Orchestration) - Amazon EventBridge (Event Routing) - Amazon MQ (Message Broker Migration) - CloudWatch Alarms (Metric-Based Triggers) - API Gateway (Lambda Integration) - Amazon AppFlow (SaaS Integration) - AWS AppSync (GraphQL APIs) - Amazon ECS Anywhere (Hybrid Container Deployment) - AWS Device Farm (Mobile Testing) - Amazon Pinpoint (User Engagement) - Amazon MSK (Managed Kafka) Exam Tips: Messaging Patterns: - 1-to-Many (Fan-out): SNS or EventBridge - 1-to-1 (Queue): SQS - Exactly-once, Ordered: SQS FIFO - Real-time Streaming: Kinesis Data Streams - Load to Destinations: Kinesis Data Firehose SQS: - Standard: Unlimited throughput, at-least-once, best-effort ordering - FIFO: 300 msg/s (3000 batched), exactly-once, ordered SNS-SQS Fan-out: - Multiple services process same event independently - Reliable, scalable, decoupled Kinesis: - Data Streams: Custom processing, multiple consumers, replay - Data Firehose: Managed delivery to S3, Redshift, ES Step Functions: - Orchestrate complex workflows - Visual designer - Error handling, retries, parallel execution EventBridge: - Event-driven architecture - Content-based routing - 100+ AWS services as sources - Scheduled events (cron) Amazon MQ: - JMS/AMQP migration - Minimal code changes - Not for greenfield (use SQS/SNS instead) CloudWatch Alarms: - Metric-based triggers - SNS integration for notifications - Auto Scaling integration API Gateway: - REST, HTTP, WebSocket APIs - Lambda proxy integration (recommended) - Stages for environments - Built-in authentication, throttling, caching AppFlow: - SaaS data integration (e.g., Salesforce to S3) - Fully managed, no code AppSync: - Managed GraphQL APIs - Real-time data sync, subscriptions ECS Anywhere: - Deploy containers to on-premises - Manage with AWS services Device Farm: - Test mobile apps on real devices - Cloud-based, wide range of devices Pinpoint: - Targeted push notifications, emails, SMS - User behavior analytics MSK: - Managed Kafka service - Integrates with AWS analytics and storage Service Selection: Need → Use ───────────────────────────────────────── Fan-out (same message, many services) → SNS Queue (decouple, buffer) → SQS Exactly-once, ordered → SQS FIFO Real-time stream processing → Kinesis Data Streams Load stream to S3/Redshift/ES → Kinesis Data Firehose Complex workflows → Step Functions Event routing (AWS services) → EventBridge JMS/AMQP migration → Amazon MQ Metric-based automation → CloudWatch Alarms REST API for Lambda → API Gateway SaaS data integration → AppFlow GraphQL API → AppSync Hybrid container deployment → ECS Anywhere Mobile app testing → Device Farm Targeted user messaging → Pinpoint Managed Kafka → MSK Next Steps: - Understand when to use each messaging service - Practice building SNS-SQS fan-out patterns - Learn Step Functions state types - Know EventBridge vs SNS differences - Understand SQS Standard vs FIFO trade-offs",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.\n\nCommon pattern: optimize S3 data for Athena → use Glue to transform to Parquet/ORC columnar format.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | EBS = Elastic Block Store; one AZ, one instance, persistent."
  },
  {
    "id": "saa_d46dff7074",
    "materia": "Design Secure Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A financial application must ensure that Amazon RDS database is only accessible using an authentication token specific to the profile credentials of EC2 instances. Which action should be taken? Options:",
    "opciones": [
      "Enable the IAM DB Authentication",
      "Configure SSL in your application to encrypt the database connection to RDS",
      "Create an IAM Role and assign it to your EC2 instances",
      "Use a combination of IAM and STS to enforce restricted access"
    ],
    "correcta": 0,
    "explicacion": "Explanation: IAM database authentication allows you to authenticate to your DB instance using AWS Identity and Access Management (IAM) database authentication. With this method, you use an authentication token instead of a password. Authentication tokens are generated using AWS Signature Version 4 and have a lifetime of 15 minutes. ### Client-Side Encryption",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_d486d3c3ee",
    "materia": "Design High-Performing Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "A company wants to share accounting data with an external auditor. The data is in an RDS instance in a private subnet. What is the MOST secure way to share the database? Options:",
    "opciones": [
      "Create a read replica and configure IAM database authentication",
      "Export database contents to text files in S3",
      "Copy a snapshot to S3 and create an IAM user",
      "Create an encrypted snapshot and share it with the auditor's AWS account"
    ],
    "correcta": 3,
    "explicacion": "Explanation: Creating an encrypted snapshot and sharing it with the auditor's AWS account is the most secure approach. The auditor gets their own copy of the data in their own account, and encryption ensures data protection. ### CloudFront for Global Performance",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nCaching HTTP content → CloudFront. Non-HTTP or static IPs needed → Global Accelerator. Use OAI/OAC to protect S3 origins.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | CloudFront = Sits in front of your web app to cache HTTP."
  },
  {
    "id": "saa_d4bb5535b8",
    "materia": "Design Resilient Architectures",
    "tema": "rds",
    "dificultad": 1,
    "pregunta": "What is the maximum retention period for automated RDS backups?",
    "opciones": [
      "7 days",
      "30 days",
      "35 days",
      "90 days"
    ],
    "correcta": 2,
    "explicacion": "",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience."
  },
  {
    "id": "saa_d59d93bf8b",
    "materia": "Design Resilient Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "A company is deploying a new application on AWS and needs to ensure the highest level of availability and fault tolerance. The application must continue to operate even if an entire data center fails. Which AWS infrastructure component should be used?",
    "opciones": [
      "Deploy across multiple Edge Locations",
      "Deploy across multiple Availability Zones within a single Region",
      "Deploy across multiple Regions",
      "Deploy using AWS Local Zones <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Availability Zones (AZs) are separate data centers within a Region - Deploying across multiple AZs protects against data center failure - This is the standard approach for high availability within a Region - Option C (multiple Regions) is for disaster recovery, not just data center failure - Edge Locations are for content delivery, not application hosting - Local Zones are for ultra-low latency but don't provide the same fault tolerance References: AWS Global Infrastructure, Well-Architected Framework - Reliability Pillar </details> ---"
  },
  {
    "id": "saa_d6011a2c21",
    "materia": "Design Resilient Architectures",
    "tema": "rds",
    "dificultad": 3,
    "pregunta": "RDS Multi-AZ vs Read Replicas (Similar to PT1) A financial services company has an RDS PostgreSQL database experiencing high read traffic during business hours. The development team wants to scale read capacity to improve application performance. The database also requires high availability with automatic failover. Which solution provides both read scaling AND high availability?",
    "opciones": [
      "Enable Multi-AZ deployment only",
      "Create Read Replicas in multiple AZs only",
      "Enable Multi-AZ deployment and create Read Replicas",
      "Use Amazon Aurora with single instance <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: RDS Multi-AZ vs Read Replicas: Multi-AZ Deployment: ├── Purpose: High availability (HA) only ✅ ├── Standby: NOT accessible for reads ❌ └── Use case: HA/DR, not performance scaling Read Replicas: ├── Purpose: Read scaling ✅ ├── Replicas: Accessible for read queries ✅ └── Use case: Scale read-heavy workloads Combined Solution: Multi-AZ + Read Replicas ✅ ├── Multi-AZ: Primary + Standby (HA) ├── Read Replicas: 3 replicas for read scaling └── Benefits: HA + Read scaling Key Concept: Multi-AZ = HA (standby not readable); Read Replicas = Scaling (readable) </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nMulti-AZ is for resilience, NOT read scaling. Converting Single-AZ to Multi-AZ is zero-downtime.\n\nRead Replicas don't failover automatically (manual promotion). Cross-region incurs data transfer fees; same-region is free.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Multi-AZ = Automatic Zero-data-loss standby (DR, not reads)."
  },
  {
    "id": "saa_d6b4462dea",
    "materia": "Design High-Performing Architectures",
    "tema": "auto-scaling",
    "dificultad": 2,
    "pregunta": "Auto Scaling Cooldown Period (Similar to PT5-Q21) An Auto Scaling group scales out from 4 to 6 instances at 10:00 AM due to high CPU. At 10:02 AM, CPU is still high but no additional instances launch. The cooldown period is 300 seconds. Why?",
    "opciones": [
      "New instances are still initializing",
      "Cooldown period prevents scaling for 5 minutes after previous scale",
      "Auto Scaling group reached maximum capacity",
      "Target tracking policies don't support multiple scale events <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Auto Scaling Cooldown:",
    "explicacion_correcta": "Automatically adds/removes EC2 instances for horizontal scaling and elasticity.\n\nWhen to use: Maintain performance during traffic spikes, reduce costs by terminating instances when demand drops.\n\nKey differences: Horizontal scaling (more instances) vs vertical scaling (bigger instance). Uses dynamic scaling policies like Target Tracking.",
    "analisis_distractores": "Default termination policy: most instances in AZ → oldest launch template → closest to billing hour. Enable scale-in protection for stateful workloads.",
    "tip": "ASG = Automatically Sizes Groups horizontally."
  },
  {
    "id": "saa_d7fe36423d",
    "materia": "Design Resilient Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "S3 Object Lock vs Vault Lock (Similar to PT3) A financial company must retain audit logs for 7 years and prevent anyone (including admins) from deleting them. Which S3 feature provides this?",
    "opciones": [
      "S3 Versioning with lifecycle policy",
      "S3 Object Lock in Compliance mode",
      "S3 Glacier Vault Lock",
      "IAM policy denying DeleteObject <details> <summary>✅ Click to reveal answer</summary> Key Concept: S3 Object Lock Compliance = Immutable retention (even root cannot delete) </details> ---"
    ],
    "correcta": 1,
    "explicacion": "(or C if using Glacier) Explanation: S3 Object Lock: Compliance Mode: ✅ ├── Objects cannot be deleted by ANYONE (even root) ✅ ├── Retention period cannot be shortened ├── Use: SEC 17a-4, HIPAA, GDPR compliance └── Example: Retain 7 years, immutable Governance Mode: ├── Objects protected from most users ├── Special permission can override (s3:BypassGovernanceRetention) └── Use: Internal policies, can override if needed Legal Hold: ├── Indefinite protection (no expiration) ├── Removed manually when legal case resolves └── Use: Litigation, investigations S3 Object Lock vs Glacier Vault Lock: S3 Object Lock (Compliance): ✅ ├── Storage class: Any S3 class ├── Granularity: Per-object or bucket default ├── Use: Flexible compliance, any S3 class Glacier Vault Lock: ✅ ├── Storage class: Glacier only ├── Granularity: Vault-level policy ├── Use: Long-term archives, vault-level immutability Configuration: bash # Enable versioning (required for Object Lock) aws s3api put-bucket-versioning \\ --bucket compliance-logs \\ --versioning-configuration Status=Enabled # Enable Object Lock aws s3api put-object-lock-configuration \\ --bucket compliance-logs \\ --object-lock-configuration '{ \"ObjectLockEnabled\": \"Enabled\", \"Rule\": { \"DefaultRetention\": { \"Mode\": \"COMPLIANCE\", \"Days\": 2555 } } }' # Upload object (automatically locked for 7 years) aws s3 cp audit-log.txt s3://compliance-logs/ # Attempt to delete (will fail) aws s3 rm s3://compliance-logs/audit-log.txt # Error: Access Denied (even as root user) Why others wrong:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCannot upload directly to Glacier via console. Must use S3 Lifecycle policy or CLI/SDK. Data must pass through S3 first.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Glacier = Frozen data; cheap to store but takes time to thaw."
  },
  {
    "id": "saa_d8cf03e254",
    "materia": "Design High-Performing Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "A financial institution needs a fully managed, immutable, cryptographically verifiable ledger database for recording transactions. Which AWS service should they use?",
    "opciones": [
      "Amazon QLDB",
      "Amazon Aurora",
      "Amazon RDS",
      "Amazon DynamoDB <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - Amazon QLDB (Quantum Ledger Database) is a fully managed ledger database - Provides immutable, cryptographically verifiable transaction log - Aurora, RDS, and DynamoDB are not ledger databases References: Amazon QLDB, Ledger Database </details> --- ## Summary Total Questions: 22 Topics Covered: - Amazon RDS (Multi-AZ, Read Replicas, Backups, Encryption) - Amazon Aurora (Features, Read Replicas, Serverless) - Amazon DynamoDB (Capacity Modes, Indexes, Streams, Transactions, DAX, Global Tables) - Amazon ElastiCache (Redis vs Memcached) - Amazon Redshift (Data Warehousing) - Amazon DocumentDB (MongoDB-compatible) - Amazon Neptune (Graph Database) - Amazon Timestream (Time-Series) - AWS Database Migration Service (DMS) - Amazon Keyspaces (Cassandra-compatible) - Amazon QLDB (Ledger Database) Exam Tips: Database Selection: - Relational (OLTP): RDS, Aurora - NoSQL Key-Value: DynamoDB - NoSQL Document: DocumentDB - Graph: Neptune - Data Warehouse (OLAP): Redshift - Time-Series: Timestream - In-Memory Cache: ElastiCache RDS vs Aurora: - Aurora: Better performance, auto-scaling, more expensive - RDS: Standard engines, simpler High Availability: - RDS Multi-AZ: Automatic failover, synchronous - Read Replicas: Read scaling, asynchronous DynamoDB: - GSI: Query different attributes, add anytime - LSI: Same partition key, create with table - Streams: Track changes, trigger Lambda - Transactions: ACID compliance - DAX: Microsecond latency cache - Global Tables: Multi-region replication ElastiCache: - Redis: Advanced features, persistence, replication - Memcached: Simple, multi-threaded Migration: - AWS DMS: Minimal downtime migration - SCT: Convert schema for heterogeneous migrations Capacity Planning: - Predictable: Provisioned capacity - Variable: On-Demand or Auto Scaling - Intermittent: Serverless (Aurora Serverless, DynamoDB On-Demand) Next Steps: - Understand use cases for each database type - Know when to use Multi-AZ vs Read Replicas - Memorize DynamoDB features and when to use them - Practice database selection based on requirements",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nAurora Global Database for cross-region replication with <1s latency. Aurora Multi-Master for write scaling.\n\nAurora storage auto-scales in 10GB increments up to 128TB. No need for read replicas for HA (6 copies already).",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Aurora = Fastest cloud-native RDS, 5x MySQL, 3x PostgreSQL."
  },
  {
    "id": "saa_d8d8d66f55",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "aws-architect",
    "dificultad": 1,
    "pregunta": "According to the AWS Well-Architected Framework, which design principle is recommended for the Security pillar?",
    "opciones": [
      "Implement a strong identity foundation",
      "Go global in minutes",
      "Stop spending money on data center operations",
      "Implement feedback loops <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - \"Implement a strong identity foundation\" is a Security pillar principle - Includes: least privilege, separation of duties, centralized identity management - Option B relates to global deployment (general AWS benefit) - Option C is a cloud advantage, not security principle - Option D relates to Operational Excellence pillar References: AWS Well-Architected Framework - Security Pillar Design Principles </details> ---"
  },
  {
    "id": "saa_d959408140",
    "materia": "Design Secure Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "Inter-Region VPC Peering for EFS (Similar to PT1-Q20) A company has Amazon EFS in us-east-1 and needs to access it from EC2 instances in eu-west-1. What networking configuration enables this access?",
    "opciones": [
      "Same-region VPC peering",
      "Inter-region VPC peering connection",
      "EFS replication to eu-west-1",
      "VPN connection between regions <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Inter-Region VPC Peering: us-east-1 VPC (10.0.0.0/16) ├── EFS File System ├── EFS Mount Targets (AZ-a, AZ-b) └── Security Group: Allow NFS (2049) from 10.1.0.0/16 ↕ (Inter-Region VPC Peering) ✅ eu-west-1 VPC (10.1.0.0/16) ├── EC2 Instances ├── Route: 10.0.0.0/16 → pcx-12345 └── Mount EFS: fs-12345.efs.us-east-1.amazonaws.com Configuration Steps: bash",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nEFS is strictly for Linux (NFS). For Windows servers, choose Amazon FSx for Windows File Server.\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | EFS = Elastic File Share for Linux."
  },
  {
    "id": "saa_d9ca9f1c36",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company wants to automatically remediate non-compliant resources. For example, when an S3 bucket is created without encryption, it should be automatically encrypted. Which solution accomplishes this?",
    "opciones": [
      "AWS Config Rules with automatic remediation using SSM Automation Documents",
      "CloudWatch Events with Lambda functions",
      "AWS CloudTrail with SNS notifications",
      "Systems Manager State Manager <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - Config Rules evaluate compliance - Automatic remediation uses SSM Automation Documents - Can trigger remediation when resources become non-compliant - CloudWatch Events could work but Config is purpose-built for compliance - CloudTrail only tracks changes, doesn't remediate - State Manager maintains EC2 configuration, not S3 References: AWS Config, Auto Remediation, SSM Automation </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nManagement events enabled by default (90 days free). Data events (S3 uploads, Lambda invocations) NOT enabled by default, extra cost. 15-minute delay.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_dc04d6cee4",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "An application running on EC2 instances experiences variable traffic and needs to maintain 50% average CPU utilization. What Auto Scaling policy should be configured?",
    "opciones": [
      "Simple Scaling",
      "Step Scaling",
      "Target Tracking Scaling",
      "Predictive Scaling <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Target Tracking Scaling automatically adjusts capacity to maintain target metric - Specify target value (e.g., 50% CPU), Auto Scaling does the rest - Easiest to configure and manage - Creates and manages CloudWatch alarms automatically Configuration Example: json { \"TargetValue\": 50.0, \"PredefinedMetricSpecification\": { \"PredefinedMetricType\": \"ASGAverageCPUUtilization\" } } Predefined Metrics: - ASGAverageCPUUtilization - ASGAverageNetworkIn - ASGAverageNetworkOut - ALBRequestCountPerTarget Scaling Policy Types: - Target Tracking: Maintain specific metric value (EASIEST) - Step: Add/remove capacity based on CloudWatch alarm thresholds - Simple: Single scaling adjustment (legacy) - Predictive: ML-based forecasting References: Target Tracking Scaling, Auto Scaling Policies </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nDefault termination policy: most instances in AZ → oldest launch template → closest to billing hour. Enable scale-in protection for stateful workloads.\n\nCloudWatch does NOT monitor internal OS metrics (memory, disk space) by default. Must install CloudWatch Agent.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | ASG = Automatically Sizes Groups horizontally."
  },
  {
    "id": "saa_dc177cb4b1",
    "materia": "Design Resilient Architectures",
    "tema": "lambda",
    "dificultad": 1,
    "pregunta": "Which statement about AWS Edge Locations is correct?",
    "opciones": [
      "Edge Locations are only used for CloudFront content delivery",
      "There are fewer Edge Locations than Regions",
      "Edge Locations can be used for both content delivery and edge computing",
      "Edge Locations are the same as Availability Zones <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Edge Locations support CloudFront (CDN), Lambda@Edge, and other edge services - There are 400+ edge locations vs 30+ Regions - Edge Locations ≠ Availability Zones (different purposes) - Used for content delivery AND edge computing (Lambda@Edge, CloudFront Functions) References: AWS Global Infrastructure - Edge Locations </details> ---",
    "explicacion_correcta": "Serverless compute service running code without provisioning/managing servers, auto-scales on demand.\n\nWhen to use: Event-driven architectures, serverless microservices, real-time file processing (S3 triggers), scheduled CRON jobs (EventBridge).\n\nKey differences: EC2 = manage OS, pay for running time. Lambda = abstracted infrastructure, pay for exact execution time. Fargate = serverless containers. Lambda = Function-as-a-Service.",
    "analisis_distractores": "Lambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nCaching HTTP content → CloudFront. Non-HTTP or static IPs needed → Global Accelerator. Use OAI/OAC to protect S3 origins.",
    "tip": "Lambda = Limit of 15 minutes for serverless code. | CloudFront = Sits in front of your web app to cache HTTP."
  },
  {
    "id": "saa_dca80e16ec",
    "materia": "Design Resilient Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company has large files (20-30 GB) uploaded to S3 but experiences intermittent network failures. The solution must minimize operational overhead. What should be implemented? Options:",
    "opciones": [
      "Enable S3 Transfer Acceleration",
      "Copy files to EC2 then use S3 Lifecycle policies",
      "Use multipart upload to Amazon S3",
      "Upload to two regions with Cross-Region Replication"
    ],
    "correcta": 2,
    "explicacion": "Explanation: Multipart upload divides large files into smaller parts that can be uploaded independently and in parallel. If any part fails, only that part needs to be retransmitted, making it resilient to network failures with minimal operational overhead. ### VPC Endpoint Cost Optimization",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Gateway for Big Two (S3 & DynamoDB); Interface for the Rest."
  },
  {
    "id": "saa_dcac992a6c",
    "materia": "Design Resilient Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "A development team needs to query application logs to troubleshoot issues. The logs are stored in CloudWatch Logs. Which feature should they use for ad-hoc log analysis?",
    "opciones": [
      "CloudWatch Metrics",
      "CloudWatch Logs Insights",
      "CloudWatch Dashboards",
      "CloudWatch Alarms <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - CloudWatch Logs Insights provides interactive log analytics - Purpose-built query language for searching and analyzing logs - Can find errors, count events, calculate percentiles - Metrics are for numerical performance data - Dashboards visualize but don't query - Alarms trigger on thresholds References: CloudWatch Logs Insights, Log Analytics </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nCloudWatch does NOT monitor internal OS metrics (memory, disk space) by default. Must install CloudWatch Agent.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | CloudWatch = Watches your performance metrics."
  },
  {
    "id": "saa_dd26621302",
    "materia": "Design Resilient Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A database backup is stored in S3. The company wants to ensure the backup can be restored quickly if needed. What feature should be enabled?",
    "opciones": [
      "S3 Transfer Acceleration",
      "S3 Versioning",
      "S3 Cross-Region Replication",
      "Enable S3 Retrieval directly <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - S3 Versioning for backup protection: - Immediate access to all versions - Protect against accidental deletion/overwrite - Quick recovery (millisecond retrieval) - Keep multiple backup versions Backup Best Practices:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization."
  },
  {
    "id": "saa_dd8526eaa7",
    "materia": "Design Secure Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "A company wants to detect and respond to security threats in their AWS environment automatically. Which service provides intelligent threat detection?",
    "opciones": [
      "AWS CloudTrail",
      "Amazon GuardDuty",
      "AWS Config",
      "AWS Security Hub <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Amazon GuardDuty provides intelligent, continuous threat detection - Uses machine learning and threat intelligence - Analyzes multiple data sources automatically - No infrastructure to manage GuardDuty Data Sources:"
  },
  {
    "id": "saa_de10935b5b",
    "materia": "Design Secure Architectures",
    "tema": "aws-architect",
    "dificultad": 1,
    "pregunta": "What is the difference between Security Groups and NACLs?",
    "opciones": [
      "SGs are stateful, NACLs are stateless",
      "SGs are stateless, NACLs are stateful",
      "Both are stateful",
      "Both are stateless"
    ],
    "correcta": 0,
    "explicacion": "--- ## Hands-On Labs ### Lab 1: VPC with Public and Private Subnets",
    "explicacion_correcta": "Connect VPC to AWS services privately without Internet Gateway, NAT, VPN, or Direct Connect.\n\nWhen to use: Private subnets must access AWS services without traversing public internet.\n\nKey differences: Gateway Endpoints only for S3 and DynamoDB (route table prefix lists). Interface Endpoints (PrivateLink) for almost all other services (ENI with private IP).",
    "analisis_distractores": "Gateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Gateway for Big Two (S3 & DynamoDB); Interface for the Rest."
  },
  {
    "id": "saa_df00c3c706",
    "materia": "Design High-Performing Architectures",
    "tema": "rds",
    "dificultad": 3,
    "pregunta": "DynamoDB Streams for Change Capture (Similar to PT6-Q35) An e-commerce application uses DynamoDB to store order data. The development team needs to capture all changes (inserts, updates, deletes) to orders in real-time and trigger downstream processing (inventory updates, notifications). Which solution captures DynamoDB changes with minimal latency?",
    "opciones": [
      "Query DynamoDB with timestamp filter every minute to find new/updated items",
      "Enable DynamoDB Streams and process change records with Lambda",
      "Export DynamoDB table to S3 every hour and process changes",
      "Use CloudWatch Events to monitor DynamoDB API calls <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: DynamoDB Streams - Change Data Capture: DynamoDB Streams: ├── Captures: INSERT, MODIFY, DELETE operations ├── Latency: Near real-time (milliseconds) ├── Retention: 24 hours ├── Ordering: Per partition key (FIFO) └── Consumers: Lambda, Kinesis Data Streams, custom applications Architecture: DynamoDB Table (Orders): ├── PutItem (new order) → Stream record ├── UpdateItem (status change) → Stream record └── DeleteItem (cancel order) → Stream record │ │ Real-time stream ▼ DynamoDB Stream: ├── Record 1: INSERT order-001 {\"total\": 99.99, \"status\": \"pending\"} ├── Record 2: MODIFY order-001 {\"status\": \"confirmed\"} └── Record 3: DELETE order-002 │ │ Trigger Lambda ▼ Lambda Function (Process Changes): ├── Receive batch of stream records ├── Process each record: │ ├── INSERT → Send confirmation email │ ├── MODIFY → Update inventory │ └── DELETE → Refund payment └── Write to downstream systems Stream Record Structure: json { \"Records\": [ { \"eventID\": \"1\", \"eventName\": \"INSERT\", \"eventVersion\": \"1.1\", \"eventSource\": \"aws:dynamodb\", \"awsRegion\": \"us-east-1\", \"dynamodb\": { \"Keys\": { \"OrderId\": {\"S\": \"order-001\"} }, \"NewImage\": { \"OrderId\": {\"S\": \"order-001\"}, \"CustomerId\": {\"S\": \"cust-123\"}, \"Total\": {\"N\": \"99.99\"}, \"Status\": {\"S\": \"pending\"}, \"Timestamp\": {\"N\": \"1678300800\"} }, \"SequenceNumber\": \"111\", \"SizeBytes\": 128, \"StreamViewType\": \"NEW_AND_OLD_IMAGES\" } } ] } Stream View Types: | View Type | OLD_IMAGE | NEW_IMAGE | Use Case | |-----------|-----------|-----------|----------| | KEYS_ONLY | ❌ | ❌ | Minimal data; trigger only | | NEW_IMAGE | ❌ | ✅ | See new values after change | | OLD_IMAGE | ✅ | ❌ | See values before change | | NEW_AND_OLD_IMAGES | ✅ | ✅ | Compare before/after (recommended) | Implementation:",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nReduce latency to microseconds → DAX (DynamoDB Accelerator). Active-active multi-region → Global Tables. Unpredictable workloads → On-Demand capacity.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_dfa51b46b6",
    "materia": "Design High-Performing Architectures",
    "tema": "s3",
    "dificultad": 3,
    "pregunta": "FSx for Lustre with S3 Integration (Similar to PT5-Q17) A research team processes large genomic datasets (20 TB) stored in S3. They need a high-performance file system for compute-intensive analysis that can: - Import data from S3 at the start of processing - Write results back to S3 after computation - Provide sub-millisecond latency for random access Which solution meets these requirements cost-effectively?",
    "opciones": [
      "FSx for Windows File Server with S3 backup",
      "EFS with S3 lifecycle transition",
      "FSx for Lustre with S3 data repository integration",
      "Instance store volumes with AWS DataSync to S3 <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: FSx for Lustre - HPC File System: FSx for Lustre Features: ├── Performance: │ ├── Throughput: Up to hundreds of GB/s │ ├── IOPS: Millions of IOPS │ ├── Latency: Sub-millisecond │ └── Use case: HPC, ML training, video processing │ ├── S3 Integration: │ ├── Link to S3 bucket at creation ✅ │ ├── Lazy load: Read from S3 on first access │ ├── Data repository tasks: Export to S3 │ └── Bidirectional sync with S3 │ └── Deployment Types: ├── Scratch: Temporary, no replication (cheaper) └── Persistent: Replicated, long-term storage Architecture: Genomic Analysis Workflow:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization."
  },
  {
    "id": "saa_e00e4f3947",
    "materia": "Design Secure Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "A company needs to allow employees to access AWS using their existing corporate Active Directory credentials. What should they implement?",
    "opciones": [
      "Create IAM users for each employee",
      "Use Web Identity Federation",
      "Configure SAML 2.0 federation",
      "Share the root account credentials <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: SAML 2.0 federation allows users to authenticate with corporate Active Directory and access AWS with temporary credentials via STS. </details>"
  },
  {
    "id": "saa_e0b7d40717",
    "materia": "Design Secure Architectures",
    "tema": "cloudfront",
    "dificultad": 2,
    "pregunta": "A company needs to block specific IP addresses from accessing their application. Which is the MOST appropriate solution?",
    "opciones": [
      "Security Group Deny rules",
      "Network ACL Deny rules",
      "AWS WAF IP set rules",
      "Route 53 DNS filtering <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "or C (Context dependent) Explanation: For network-level blocking: - Network ACLs support Deny rules - Evaluated before traffic reaches instances - Can block IP ranges at subnet level For application-level blocking: - AWS WAF with IP set match conditions - More flexible filtering - Works with CloudFront, ALB, API Gateway Security Groups limitations: - Cannot create Deny rules (only Allow) - Cannot block specific IPs Best Practice: - NACL: Network-level IP blocking - WAF: Application-level, geographic blocking, rate limiting References: Network ACLs, AWS WAF, IP Blocking </details> ---",
    "explicacion_correcta": "Web application firewall that protects web applications from common exploits (SQL injection, XSS).\n\nWhen to use: Protecting applications behind CloudFront, ALB, or API Gateway from OWASP top 10 threats.\n\nKey differences: WAF operates at Layer 7 (HTTP/HTTPS). Shield protects against DDoS (Layer 3/4). GuardDuty detects threats intelligently.",
    "analisis_distractores": "WAF for app-level attacks (SQLi, XSS). Shield for DDoS. Don't confuse them.\n\nCaching HTTP content → CloudFront. Non-HTTP or static IPs needed → Global Accelerator. Use OAI/OAC to protect S3 origins.\n\nAPI Gateway integrates with Lambda (no VPC needed) and HTTP backends (needs VPC link for private). WebSocket APIs for bidirectional communication.",
    "tip": "WAF = Web Application Filter (Layer 7 rules). | CloudFront = Sits in front of your web app to cache HTTP."
  },
  {
    "id": "saa_e12ab0550d",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company uses AWS Organizations with consolidated billing. They notice they're receiving volume discounts on S3 storage even though no single account uses enough storage to qualify. Why?",
    "opciones": [
      "AWS provides automatic discounts for Organizations",
      "Consolidated billing combines usage across all accounts for volume pricing",
      "The management account gets all the discounts",
      "SCPs enable cost savings automatically <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Consolidated billing combines usage across all accounts - AWS treats the entire organization as a single billing entity - Volume discounts apply to combined usage - Example: 3 accounts with 500GB each = 1500GB total → higher tier pricing - Not automatic discounts (A), just usage aggregation - All accounts benefit, not just management account (C) - SCPs are for permissions, not costs (D) Consolidated Billing Benefits: - ✅ Volume discounts across accounts - ✅ Single payment method - ✅ Easier cost tracking - ✅ Cost allocation tags across org - ✅ Reserved Instance sharing References: AWS Organizations, Consolidated Billing, Volume Pricing </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nSCPs don't grant permissions, they only restrict. Root user in member accounts is blocked by default with full deny SCP.\n\nSCPs don't grant permissions, they only restrict. Root user in member accounts is blocked by default with full deny SCP.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Organizations = SCPs restrict, never grant."
  },
  {
    "id": "saa_e158ac2e40",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "auto-scaling",
    "dificultad": 2,
    "pregunta": "A company runs a web application with unpredictable traffic that can spike 10x instantly. They want to minimize costs while ensuring performance. What architecture should be used?",
    "opciones": [
      "Fixed number of EC2 On-Demand instances",
      "EC2 Auto Scaling with target tracking + Spot Instances",
      "Large Reserved Instances",
      "Manual scaling with CloudWatch alarms <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Auto Scaling automatically adjusts capacity based on demand - Target tracking scales based on metrics (CPU, requests, etc.) - Spot Instances reduce costs (up to 90%) for scale-out capacity - Can combine On-Demand (baseline) + Spot (spikes) - Fixed capacity wastes money during low traffic - Reserved Instances charge for capacity even if unused - Manual scaling is slow and error-prone References: Auto Scaling, Spot Instances, Cost Optimization </details> --- ## Summary ### Key Concepts Tested:",
    "explicacion_correcta": "Automatically adds/removes EC2 instances for horizontal scaling and elasticity.\n\nWhen to use: Maintain performance during traffic spikes, reduce costs by terminating instances when demand drops.\n\nKey differences: Horizontal scaling (more instances) vs vertical scaling (bigger instance). Uses dynamic scaling policies like Target Tracking.",
    "analisis_distractores": "Default termination policy: most instances in AZ → oldest launch template → closest to billing hour. Enable scale-in protection for stateful workloads.",
    "tip": "ASG = Automatically Sizes Groups horizontally."
  },
  {
    "id": "saa_e1a74e79c6",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "iam",
    "dificultad": 2,
    "pregunta": "A company wants to track when a specific IAM policy was attached to a role and view the complete configuration history. Which service provides this capability?",
    "opciones": [
      "AWS CloudTrail only",
      "AWS Config only",
      "Both CloudTrail and Config",
      "IAM Access Analyzer <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - CloudTrail shows WHO attached the policy and WHEN (API call details) - Config shows configuration history and timeline of changes - Both services complement each other for complete visibility - CloudTrail: \"Who did what, when\" - Config: \"What does it look like now and over time\" - IAM Access Analyzer analyzes resource policies for external access References: CloudTrail vs Config, Configuration History </details> ---",
    "explicacion_correcta": "Fully managed service to securely control access using users, groups, roles, and identity-based policies.\n\nWhen to use: Implement least privilege, manage MFA, define permissions for humans/apps/services interacting with AWS.\n\nKey differences: IAM manages permissions within one AWS account. Organizations (SCPs) manages boundaries across accounts. Cognito handles app end-user auth.",
    "analisis_distractores": "Explicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.\n\nManagement events enabled by default (90 days free). Data events (S3 uploads, Lambda invocations) NOT enabled by default, extra cost. 15-minute delay.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "IAM = I Am Managing who can do what. | CloudTrail = Leaves audit Trail of API activity (Who did what)."
  },
  {
    "id": "saa_e29f00bbca",
    "materia": "Design High-Performing Architectures",
    "tema": "direct-connect",
    "dificultad": 2,
    "pregunta": "A company wants to deploy applications closer to 5G mobile users for ultra-low latency. Which AWS service should be used?",
    "opciones": [
      "AWS Local Zones",
      "AWS Wavelength",
      "AWS Outposts",
      "AWS Direct Connect <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - AWS Wavelength embeds compute at 5G network edge - Provides single-digit millisecond latency to mobile devices - Local Zones are for metro areas but not 5G-specific - Outposts is for on-premises AWS infrastructure - Direct Connect is for dedicated network connection - For 5G mobile: Wavelength References: AWS Wavelength, Edge Computing </details> ---",
    "explicacion_correcta": "Dedicated physical fiber-optic connection from on-premises data center to AWS.\n\nWhen to use: Consistent ultra-low latency, high-bandwidth transfers, bypass public internet for security/compliance.\n\nKey differences: Site-to-Site VPN uses public internet (inconsistent latency), setup in hours. DX is dedicated line with consistent speeds but weeks/months to provision.",
    "analisis_distractores": "DX is NOT encrypted by default. If scenario needs dedicated line + encryption → IPSec VPN over DX. DX has no inherent resilience (need multiple connections).",
    "tip": "DX = Dedicated physical line, Delayed setup, Default is unencrypted."
  },
  {
    "id": "saa_e2a53c8b7d",
    "materia": "Design High-Performing Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "A database migration using AWS DMS needs to handle large transactions and minimize the impact on the source database performance. How should the replication instance be sized?",
    "opciones": [
      "Use the smallest instance to minimize costs",
      "Use an instance type based on the source database workload and data volume",
      "Always use the largest instance available",
      "Instance size doesn't affect DMS performance <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Replication instance size affects performance - Should be based on workload, data volume, and complexity - Larger instances handle more throughput and complex transformations - Undersizing causes slow migration and potential source impact - Oversizing wastes money - Proper sizing requires workload analysis References: AWS DMS, Replication Instance Sizing </details> ---"
  },
  {
    "id": "saa_e3792a6a1f",
    "materia": "general",
    "tema": "ec2",
    "dificultad": 3,
    "pregunta": "Your organization was planning to develop a web application on AWS EC2. Application admin was tasked to perform AWS setup required to spin EC2 instance inside an existing private VPC. He/she has created a subnet and wants to ensure no other subnets in the VPC can communicate with your subnet except for the specific IP address. So he/she created a new route table and associated with the new subnet. When he/she was trying to delete the route with the target as local, there is no option to delete the route. What could have caused this behavior?",
    "opciones": [
      "Policy attached to IAM user does not have access to remove routes.",
      "A route with the target as local cannot be deleted.",
      "You cannot add/delete routes when associated with the subnet. Remove associated, add/delete routes and associate again with the subnet.",
      "There must be at least one route on the route table. Add a new route to enable delete option on existing routes."
    ],
    "correcta": 1,
    "explicacion": "https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Route_Tables.htm l#RouteTa",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | Gateway for Big Two (S3 & DynamoDB); Interface for the Rest."
  },
  {
    "id": "saa_e3a57b738f",
    "materia": "general",
    "tema": "aws-architect",
    "dificultad": 3,
    "pregunta": "Which of the following are the relevant stakeholders in the Platform perspective of the AWS Cloud Adoption Framework (AWS CAF)? (Select two)",
    "opciones": [
      "Technology Leaders",
      "Chief Financial Officer (CFOs)",
      "IT Architects",
      "Chief Information Security Officer (CISO) E. Chief Information Officer (CIOs)"
    ],
    "correcta": 0,
    "explicacion": ", C"
  },
  {
    "id": "saa_e3c170e203",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "ec2",
    "dificultad": 3,
    "pregunta": "Organization ABC has a requirement to send emails to multiple users from their application deployed on EC2 instance in a private VPC. Email receivers will not be IAM users. You have decided to use AWS Simple Email Service and configured from email address. You are using AWS SES API to send emails from your EC2 instance to multiple users. However, email sending getting failed. Which of the following options could be the reason?",
    "opciones": [
      "You have not created VPC endpoint for SES service and configured in the route table.",
      "AWS SES is in sandbox mode by default which can send emails only to verified email addresses.",
      "IAM user of configured from email address does not have access AWS SES to send emails.",
      "AWS SES cannot send emails to addresses which are not configured as IAM users. You have to use the SMTP service provided by AWS."
    ],
    "correcta": 1,
    "explicacion": "Amazon SES is an email platform that provides an easy, cost-effective way for you to send and receive email using your own email addresses and domains. For example, you can send marketing emails such as special offers, transactional emails such as order confirmations, and other types of correspondence such as newsletters. When you use Amazon SES to receive mail, you can develop software solutions such as email autoresponders, email unsubscribe systems and applications that generate customer support tickets from incoming emails. https://docs.aws.amazon.com/ses/latest/DeveloperGuide/limits.html https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.ht ml",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_e3d5ee13f2",
    "materia": "Design High-Performing Architectures",
    "tema": "lambda",
    "dificultad": 1,
    "pregunta": "When creating an AWS CloudFront distribution, which of the following is not an origin?",
    "opciones": [
      "Elastic Load Balancer",
      "AWS S3 bucket",
      "AWS MediaPackage channel endpoint",
      "AWS Lambda"
    ],
    "correcta": 3,
    "explicacion": "Explanation: AWS Lambda is not supported directly as the CloudFront origin. However, Lambda can be invoked through API Gateway which can be set as the origin for AWS CloudFront. Read more here: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction. html",
    "explicacion_correcta": "Serverless compute service running code without provisioning/managing servers, auto-scales on demand.\n\nWhen to use: Event-driven architectures, serverless microservices, real-time file processing (S3 triggers), scheduled CRON jobs (EventBridge).\n\nKey differences: EC2 = manage OS, pay for running time. Lambda = abstracted infrastructure, pay for exact execution time. Fargate = serverless containers. Lambda = Function-as-a-Service.",
    "analisis_distractores": "Lambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nCaching HTTP content → CloudFront. Non-HTTP or static IPs needed → Global Accelerator. Use OAI/OAC to protect S3 origins.",
    "tip": "Lambda = Limit of 15 minutes for serverless code. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_e3e1a6879b",
    "materia": "Design High-Performing Architectures",
    "tema": "config",
    "dificultad": 1,
    "pregunta": "An Auto Scaling group has 10 instances. An administrator manually terminates 3 instances. What happens next?",
    "opciones": [
      "Auto Scaling terminates 3 more instances",
      "Auto Scaling launches 3 new instances",
      "Auto Scaling does nothing",
      "Auto Scaling sends an alert <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Auto Scaling maintains desired capacity - If instances are terminated (manually or automatically), ASG replaces them - Ensures desired count is maintained Auto Scaling Group Configuration: - Minimum: Minimum number of instances - Desired: Target number of instances - Maximum: Maximum number of instances Scaling Activities: - Scale out: Launch instances (desired < current) - Scale in: Terminate instances (desired > current) - Replace unhealthy: Terminate and replace - Rebalance across AZs Instance Protection: - Can enable scale-in protection on specific instances - Prevents Auto Scaling from terminating protected instances - Manual termination still works References: Auto Scaling Groups, Desired Capacity </details> ---",
    "explicacion_correcta": "Automatically adds/removes EC2 instances for horizontal scaling and elasticity.\n\nWhen to use: Maintain performance during traffic spikes, reduce costs by terminating instances when demand drops.\n\nKey differences: Horizontal scaling (more instances) vs vertical scaling (bigger instance). Uses dynamic scaling policies like Target Tracking.",
    "analisis_distractores": "Default termination policy: most instances in AZ → oldest launch template → closest to billing hour. Enable scale-in protection for stateful workloads.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "ASG = Automatically Sizes Groups horizontally. | Config = Configuration compliance and history."
  },
  {
    "id": "saa_e3f7ec3780",
    "materia": "general",
    "tema": "aws-architect",
    "dificultad": 1,
    "pregunta": "Which of the following statements are true with respect to VPC? (choose multiple)",
    "opciones": [
      "A subnet can have multiple route tables associated with it.",
      "A network ACL can be associated with multiple subnets.",
      "A route with target “local” on the route table can be edited to restrict traffic within VPC.",
      "Subnet’s IP CIDR block can be same as the VPC CIDR block."
    ],
    "correcta": 1,
    "explicacion": ", D Option A is not correct. A subnet can have only one route table associated with it. Option B is correct. Option C is not correct. Option D is correct. Aspired to learn AWS? Here we bring the AWS CHEAT SHEET that will take you through cloud Computing and AWS basics along with AWS products and services!",
    "explicacion_correcta": "Connect VPC to AWS services privately without Internet Gateway, NAT, VPN, or Direct Connect.\n\nWhen to use: Private subnets must access AWS services without traversing public internet.\n\nKey differences: Gateway Endpoints only for S3 and DynamoDB (route table prefix lists). Interface Endpoints (PrivateLink) for almost all other services (ENI with private IP).",
    "analisis_distractores": "Gateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.",
    "tip": "Gateway for Big Two (S3 & DynamoDB); Interface for the Rest."
  },
  {
    "id": "saa_e502d3a999",
    "materia": "general",
    "tema": "lambda",
    "dificultad": 2,
    "pregunta": "An organization is migrating applications to AWS and wants to refactor a monolithic application into microservices. Which migration strategy is being used?",
    "opciones": [
      "Rehost",
      "Replatform",
      "Refactor/Re-architect",
      "Repurchase <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Refactor/Re-architect reimagines application architecture - Breaking monolith into microservices is classic refactoring - Uses cloud-native features (ECS, Lambda, etc.) - Most complex but provides maximum cloud benefits - Rehost moves as-is - Replatform makes minimal optimizations - Repurchase moves to SaaS References: 6 R's of Migration, Refactor Strategy </details> --- ## Summary ### Key Concepts Tested:",
    "explicacion_correcta": "Serverless compute service running code without provisioning/managing servers, auto-scales on demand.\n\nWhen to use: Event-driven architectures, serverless microservices, real-time file processing (S3 triggers), scheduled CRON jobs (EventBridge).\n\nKey differences: EC2 = manage OS, pay for running time. Lambda = abstracted infrastructure, pay for exact execution time. Fargate = serverless containers. Lambda = Function-as-a-Service.",
    "analisis_distractores": "Lambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nMinimize operational overhead → Fargate launch type. Need to manage hosts, use RIs → EC2 mode.",
    "tip": "Lambda = Limit of 15 minutes for serverless code. | ECS = Elastic Container Service; AWS-native container orchestration."
  },
  {
    "id": "saa_e59a30e834",
    "materia": "Design High-Performing Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "A company wants to avoid over-provisioning resources while maintaining application performance. Which dynamic scaling policy should be used? Options:",
    "opciones": [
      "Use simple scaling",
      "Use scheduled scaling",
      "Use suspend and resume scaling",
      "Use target tracking scaling"
    ],
    "correcta": 3,
    "explicacion": "Explanation: Target tracking scaling policy increases or decreases capacity based on a target value for a specific metric. It helps resolve over-provisioning by keeping metrics close to target values and adjusts to changing load patterns automatically. ### Shared File Storage"
  },
  {
    "id": "saa_e5bb996244",
    "materia": "general",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "During a database migration with AWS DMS, which task type should be used to perform an initial data load followed by ongoing replication?",
    "opciones": [
      "Full Load only",
      "CDC (Change Data Capture) only",
      "Full Load + CDC",
      "Multiple Full Load tasks <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Full Load + CDC is the most common migration pattern - Full Load transfers existing data - CDC replicates ongoing changes - Minimizes downtime - Full Load only doesn't capture changes after initial load - CDC only doesn't transfer existing data - Multiple Full Loads don't capture changes References: AWS DMS, Migration Task Types </details> ---"
  },
  {
    "id": "saa_e60f6b4fc5",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "ec2",
    "dificultad": 1,
    "pregunta": "What is the retention period for CloudTrail events in Event History?",
    "opciones": [
      "30 days",
      "60 days",
      "90 days",
      "180 days"
    ],
    "correcta": 2,
    "explicacion": "--- ## Key Takeaways ✅ CloudWatch monitors metrics and logs, CloudTrail logs API calls ✅ CloudWatch Agent required for EC2 memory/disk metrics ✅ Config tracks resource configuration and compliance ✅ Systems Manager for operational tasks (patching, automation, secure access) ✅ Session Manager eliminates need for bastion hosts and SSH keys ✅ Trusted Advisor provides best practice recommendations ✅ CloudTrail records WHO did WHAT, Config shows WHAT it looks like ✅ Use CloudWatch Logs Insights for log analysis ✅ EventBridge integrates monitoring with automation ✅ Always enable CloudTrail in all regions for security --- Previous Module: [Module 08: Application Integration](../08-Application-Integration/README.md) Next Module: [Module 10: Migration & Transfer](../10-Migration/README.md)",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nManagement events enabled by default (90 days free). Data events (S3 uploads, Lambda invocations) NOT enabled by default, extra cost. 15-minute delay.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_e858a14513",
    "materia": "Design High-Performing Architectures",
    "tema": "eks",
    "dificultad": 2,
    "pregunta": "A company wants to connect their on-premises data center to AWS with a dedicated, private network connection. Which service should they use?",
    "opciones": [
      "AWS VPN",
      "AWS Direct Connect",
      "Internet Gateway",
      "VPC Peering <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - AWS Direct Connect provides dedicated physical connection - Bypasses public internet - More consistent performance - Reduced bandwidth costs Direct Connect vs VPN: | Feature | Direct Connect | Site-to-Site VPN | |---------|----------------|------------------| | Connection | Dedicated fiber | Internet-based | | Bandwidth | 1 Gbps to 100 Gbps | Up to 1.25 Gbps | | Latency | Low, consistent | Variable | | Cost | Higher (port + data) | Lower | | Setup Time | Weeks/months | Minutes | | Encryption | Not by default | Yes (IPSec) | Use Cases: - Large data transfers - Consistent performance needed - Hybrid cloud architectures - Compliance requirements References: AWS Direct Connect, Hybrid Connectivity </details> ---",
    "explicacion_correcta": "Managed Kubernetes service for running Kubernetes on AWS without installing the control plane.\n\nWhen to use: Containerized applications using Kubernetes orchestration, multi-cloud portability.\n\nKey differences: EKS uses Kubernetes; ECS uses AWS-native orchestration. Fargate removes server management for both.",
    "analisis_distractores": "If scenario mentions Kubernetes specifically, answer is EKS. If it says containers but no Kubernetes preference, ECS may be simpler.\n\nDX is NOT encrypted by default. If scenario needs dedicated line + encryption → IPSec VPN over DX. DX has no inherent resilience (need multiple connections).\n\nDX is NOT encrypted by default. If scenario needs dedicated line + encryption → IPSec VPN over DX. DX has no inherent resilience (need multiple connections).",
    "tip": "EKS = Elastic Kubernetes Service; Kubernetes on AWS. | DX = Dedicated physical line, Delayed setup, Default is unencrypted."
  },
  {
    "id": "saa_e8f00070ac",
    "materia": "Design Secure Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "An organization wants to centrally manage security findings from multiple AWS accounts and security services. Which service should be used?",
    "opciones": [
      "Amazon GuardDuty",
      "AWS Security Hub",
      "AWS Config",
      "Amazon Inspector <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - AWS Security Hub provides centralized security and compliance view - Aggregates findings from multiple AWS services and accounts - Security standards compliance (CIS, PCI-DSS, AWS Foundational Security Best Practices) - Automated compliance checks Security Hub Integrations: AWS Services: - Amazon GuardDuty (threat detection) - Amazon Inspector (vulnerability assessment) - Amazon Macie (data protection) - AWS IAM Access Analyzer (IAM policy analysis) - AWS Firewall Manager (firewall rule management) - AWS Config (compliance rules) - Amazon Detective (security investigation) Third-Party Integrations: - Splunk, Palo Alto Networks, Trend Micro, etc. Security Hub Features:",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_e8fcbeaab4",
    "materia": "Design Secure Architectures",
    "tema": "eks",
    "dificultad": 2,
    "pregunta": "A company wants to ensure data encryption in transit between their on-premises data center and AWS. Which connectivity option provides encryption by default?",
    "opciones": [
      "AWS Direct Connect",
      "AWS Site-to-Site VPN",
      "Internet Gateway",
      "AWS PrivateLink <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - AWS Site-to-Site VPN uses IPsec to encrypt data in transit - Encryption is built-in and automatic - No additional configuration needed for encryption Connectivity Options Comparison: | Option | Encryption | Speed | Setup | Cost | |--------|-----------|-------|-------|------| | Site-to-Site VPN | Yes (IPsec) | Up to 1.25 Gbps | Minutes | Low | | Direct Connect | No (but can add) | 1-100 Gbps | Weeks | High | | DX + VPN | Yes | 1-100 Gbps | Weeks | High | | Internet | HTTPS only | Variable | Immediate | Very low | Site-to-Site VPN Features:",
    "explicacion_correcta": "Managed Kubernetes service for running Kubernetes on AWS without installing the control plane.\n\nWhen to use: Containerized applications using Kubernetes orchestration, multi-cloud portability.\n\nKey differences: EKS uses Kubernetes; ECS uses AWS-native orchestration. Fargate removes server management for both.",
    "analisis_distractores": "If scenario mentions Kubernetes specifically, answer is EKS. If it says containers but no Kubernetes preference, ECS may be simpler.\n\nDX is NOT encrypted by default. If scenario needs dedicated line + encryption → IPSec VPN over DX. DX has no inherent resilience (need multiple connections).\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "EKS = Elastic Kubernetes Service; Kubernetes on AWS. | DX = Dedicated physical line, Delayed setup, Default is unencrypted."
  },
  {
    "id": "saa_e9e06bab77",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "ec2",
    "dificultad": 3,
    "pregunta": "NAT Gateway Cost Optimization (Similar to PT7-Q16) A company has a VPC with 3 Availability Zones. Private subnets in each AZ have EC2 instances that need internet access for software updates. Currently, all private subnets route to a single NAT Gateway in us-east-1a. The CFO has noticed high data transfer costs. Which solution reduces data transfer costs while maintaining internet access?",
    "opciones": [
      "Replace NAT Gateway with NAT Instance",
      "Deploy a public NAT Gateway in each AZ; route each AZ's private subnets to the NAT Gateway in the same AZ",
      "Deploy VPC endpoints for all AWS services",
      "Deploy a private NAT Gateway in each AZ's public subnet <details> <summary>✅ Click to reveal answer</summary> Key Concept: High cross-AZ traffic → NAT Gateway per AZ eliminates $0.01/GB cross-AZ charges </details> ---"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Current Architecture (Cost Issue): VPC (10.0.0.0/16): ├── AZ-A (us-east-1a): │ ├── Public Subnet │ │ └── NAT Gateway (nat-abc123) ✅ │ └── Private Subnet │ └── EC2 instances → NAT in AZ-A (same AZ) ✅ │ ├── AZ-B (us-east-1b): │ ├── Public Subnet (no NAT Gateway) │ └── Private Subnet │ └── EC2 instances → NAT in AZ-A ❌ (cross-AZ traffic) │ └── AZ-C (us-east-1c): ├── Public Subnet (no NAT Gateway) └── Private Subnet └── EC2 instances → NAT in AZ-A ❌ (cross-AZ traffic) Cost Issue: └── Cross-AZ data transfer: $0.01/GB (AZ-B → AZ-A, AZ-C → AZ-A) Optimized Architecture: VPC (10.0.0.0/16): ├── AZ-A (us-east-1a): │ ├── Public Subnet │ │ └── NAT Gateway-A (nat-123) │ └── Private Subnet │ ├── EC2 instances │ └── Route: 0.0.0.0/0 → nat-123 ✅ (same AZ) │ ├── AZ-B (us-east-1b): │ ├── Public Subnet │ │ └── NAT Gateway-B (nat-456) ✅ (added) │ └── Private Subnet │ ├── EC2 instances │ └── Route: 0.0.0.0/0 → nat-456 ✅ (same AZ) │ └── AZ-C (us-east-1c): ├── Public Subnet │ └── NAT Gateway-C (nat-789) ✅ (added) └── Private Subnet ├── EC2 instances └── Route: 0.0.0.0/0 → nat-789 ✅ (same AZ) Cost Savings: └── Eliminated cross-AZ data transfer charges Route Table Configuration: Private Subnet Route Table (AZ-A): ├── 10.0.0.0/16 → local └── 0.0.0.0/0 → nat-123 (NAT in AZ-A) ✅ Private Subnet Route Table (AZ-B): ├── 10.0.0.0/16 → local └── 0.0.0.0/0 → nat-456 (NAT in AZ-B) ✅ Private Subnet Route Table (AZ-C): ├── 10.0.0.0/16 → local └── 0.0.0.0/0 → nat-789 (NAT in AZ-C) ✅ Cost Analysis: Assumptions: ├── 3 AZs, 10 EC2 instances per AZ (30 total) ├── Each instance: 100 GB/month outbound internet traffic ├── Total: 3,000 GB/month Scenario 1: Single NAT Gateway (Current) ├── NAT Gateway charges: │ ├── Hourly: $0.045/hr × 730 hrs = $32.85/month │ └── Data processing: $0.045/GB × 3,000 GB = $135/month ├── Cross-AZ data transfer: │ ├── AZ-A: 1,000 GB (no cross-AZ charge) │ ├── AZ-B: 1,000 GB × $0.01/GB = $10 (cross-AZ) ❌ │ └── AZ-C: 1,000 GB × $0.01/GB = $10 (cross-AZ) ❌ └── Total: $187.85/month Scenario 2: NAT Gateway per AZ (Optimized) ├── NAT Gateway charges: │ ├── 3 gateways × $0.045/hr × 730 hrs = $98.55/month │ └── Data processing: $0.045/GB × 3,000 GB = $135/month ├── Cross-AZ data transfer: │ └── $0 (all traffic stays in same AZ) ✅ └── Total: $233.55/month Wait, this is MORE expensive! When Does Per-AZ NAT Gateway Save Money? Break-even analysis: ├── Additional NAT cost: 2 × $32.85 = $65.70/month ├── Cross-AZ savings: $0.01/GB └── Need: $65.70 ÷ $0.01 = 6,570 GB/month cross-AZ traffic If cross-AZ traffic > 6,570 GB/month → Per-AZ NAT is cheaper ✅ If cross-AZ traffic < 6,570 GB/month → Single NAT is cheaper High-traffic scenario (100 instances, 1 TB/month each): ├── Single NAT: $32.85 + $4,500 + $666 (cross-AZ) = $5,198.85 ├── Per-AZ NAT: $98.55 + $4,500 = $4,598.55 ✅ └── Savings: $600/month NAT Gateway Types: Public NAT Gateway: ✅ ├── Deployed in public subnet ├── Requires Elastic IP ├── Routes: 0.0.0.0/0 → Internet Gateway └── Use case: Private EC2 → Internet access Private NAT Gateway: ├── Deployed in private subnet ├── No Elastic IP ├── Routes to Transit Gateway, VPN, Direct Connect └── Use case: VPC-to-VPC, on-premises connectivity (NOT internet) Why others are wrong:",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nGateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.\n\nDX is NOT encrypted by default. If scenario needs dedicated line + encryption → IPSec VPN over DX. DX has no inherent resilience (need multiple connections).",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | Gateway for Big Two (S3 & DynamoDB); Interface for the Rest."
  },
  {
    "id": "saa_ea2e675687",
    "materia": "Design Resilient Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A company wants to deploy containerized applications using Kubernetes without managing the control plane. Which service should be used?",
    "opciones": [
      "Amazon ECS",
      "Amazon EKS",
      "AWS Fargate",
      "AWS Elastic Beanstalk <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Amazon EKS (Elastic Kubernetes Service) is managed Kubernetes - AWS manages Kubernetes control plane - Compatible with standard Kubernetes tools (kubectl, Helm) - Multi-AZ control plane for high availability EKS Features: - Managed K8s control plane (etcd, API server) - Automatic upgrades and patches - Integrate with AWS services (IAM, VPC, ALB, CloudWatch) - CNCF certified (standard Kubernetes) EKS Worker Nodes Options: - Self-managed nodes: You manage EC2 instances - Managed node groups: AWS manages EC2 lifecycle - Fargate: Serverless, no node management ECS vs EKS: - ECS: AWS-proprietary, simpler, tight AWS integration - EKS: Standard Kubernetes, portable, more complex, existing K8s expertise When to use EKS: - Existing Kubernetes workloads - Kubernetes expertise in team - Multi-cloud/hybrid requirements - Standard Kubernetes tools needed References: Amazon EKS, Kubernetes on AWS </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nIf scenario mentions Kubernetes specifically, answer is EKS. If it says containers but no Kubernetes preference, ECS may be simpler.\n\nIf scenario mentions Kubernetes specifically, answer is EKS. If it says containers but no Kubernetes preference, ECS may be simpler.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | EKS = Elastic Kubernetes Service; Kubernetes on AWS."
  },
  {
    "id": "saa_eab57757e6",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "An application stores 1 PB of data in S3 with unpredictable access patterns. Some objects are accessed frequently, others rarely. What is the MOST cost-effective storage solution?",
    "opciones": [
      "S3 Standard for all objects",
      "S3 Intelligent-Tiering",
      "Manually move objects to different storage classes",
      "S3 Glacier for all objects <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - S3 Intelligent-Tiering automatically moves objects between access tiers - Optimizes costs without manual intervention - Monitoring fee: $0.0025/1000 objects - No retrieval fees for Frequent/Infrequent tiers - S3 Standard wastes money on infrequently accessed data - Manual management is operationally intensive - Glacier has retrieval delays for frequent access References: S3 Intelligent-Tiering, Unknown Access Patterns </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCannot upload directly to Glacier via console. Must use S3 Lifecycle policy or CLI/SDK. Data must pass through S3 first.\n\nFor predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Glacier = Frozen data; cheap to store but takes time to thaw."
  },
  {
    "id": "saa_eb0372836a",
    "materia": "Design Secure Architectures",
    "tema": "ebs",
    "dificultad": 2,
    "pregunta": "A web application requires high availability across multiple Availability Zones with automatic distribution of traffic. Which load balancer should be used for HTTP/HTTPS traffic with advanced routing?",
    "opciones": [
      "Classic Load Balancer",
      "Application Load Balancer",
      "Network Load Balancer",
      "Gateway Load Balancer <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Application Load Balancer (ALB) operates at Layer 7 (HTTP/HTTPS) - Advanced routing: path-based, host-based, header-based - WebSocket and HTTP/2 support - Perfect for modern web applications ALB Features: - Path-based routing: /api/* → API servers, /images/* → image servers - Host-based routing: api.example.com vs www.example.com - Query string/header routing - Fixed response, redirects - AWS WAF integration - Authentication (OIDC, Cognito) Load Balancer Comparison: - CLB: Legacy, Layer 4/7, basic - ALB: Layer 7, HTTP/HTTPS, advanced routing - NLB: Layer 4, TCP/UDP, ultra-high performance, static IP - GLB: Layer 3, third-party virtual appliances References: Application Load Balancer, ELB Types </details> ---",
    "explicacion_correcta": "Persistent block-level storage volumes attached to EC2 instances. Behave like raw hard drives.\n\nWhen to use: Boot volumes for EC2, database storage, applications requiring consistent low-latency block storage.\n\nKey differences: EBS locked to single AZ. EFS spans multiple AZs and mounts to hundreds of instances. EBS is persistent, Instance Store is ephemeral.",
    "analisis_distractores": "EBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.\n\nWAF for app-level attacks (SQLi, XSS). Shield for DDoS. Don't confuse them.",
    "tip": "EBS = Elastic Block Store; one AZ, one instance, persistent. | WAF = Web Application Filter (Layer 7 rules)."
  },
  {
    "id": "saa_eb26a8298c",
    "materia": "Design High-Performing Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "An application needs to process uploaded images: resize, apply filters, and update database. The processing can take several minutes. Which architecture ensures reliable processing?",
    "opciones": [
      "API Gateway → Lambda (process synchronously)",
      "API Gateway → Lambda → S3 → Lambda (triggered by S3) → DynamoDB",
      "EC2 instances polling S3",
      "Upload directly to EC2 for processing <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Upload triggers first Lambda to save to S3 - S3 event triggers second Lambda for processing (asynchronous) - Decoupled, reliable processing - Lambda can run up to 15 minutes - Option A: API Gateway has 29-second timeout - Option C: Inefficient polling - Option D: No auto-scaling, not serverless References: Event-Driven Architecture, Asynchronous Processing </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nAPI Gateway integrates with Lambda (no VPC needed) and HTTP backends (needs VPC link for private). WebSocket APIs for bidirectional communication.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_eb4cc88834",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "s3",
    "dificultad": 3,
    "pregunta": "CloudWatch Custom Metrics with Auto Scaling (Similar to PT4-Q7) A company runs a memory-intensive data processing application on EC2 instances managed by an Auto Scaling group. The application's performance degrades significantly when memory utilization exceeds 75%. The architect needs to configure Auto Scaling to scale out when average memory utilization across the ASG exceeds 70%. What is the correct solution?",
    "opciones": [
      "Enable detailed monitoring on EC2 instances; CloudWatch automatically collects memory metrics",
      "Install CloudWatch agent on instances; configure memory metric collection; create target tracking scaling policy using custom memory metric",
      "Use AWS Systems Manager to collect memory metrics; create step scaling policy",
      "Create Lambda function to query memory from EC2 instances; send metrics to CloudWatch <details> <summary>✅ Click to reveal answer</summary> Key Concept: Memory metrics → Requires CloudWatch agent inside guest OS </details> ---"
    ],
    "correcta": 1,
    "explicacion": "Explanation: EC2 Default vs Custom Metrics: Default EC2 Metrics (No agent required): ├── CPU Utilization % ✅ ├── Network In/Out (bytes) ✅ ├── Disk Read/Write operations ✅ ├── Disk Read/Write bytes ✅ └── Status Check Failed ✅ NOT Included (Requires CloudWatch Agent): ├── Memory Utilization % ❌ ├── Memory Used/Available ❌ ├── Disk Space % Used ❌ └── Swap Utilization ❌ Why Memory is NOT a Default Metric: - AWS hypervisor can see CPU, network, disk I/O from outside guest OS - Memory usage is internal to guest OS - CloudWatch agent runs inside OS to collect memory stats Complete Solution: Step 1: CloudWatch Agent Configuration json { \"agent\": { \"metrics_collection_interval\": 60, \"run_as_user\": \"cwagent\" }, \"metrics\": { \"namespace\": \"CWAgent\", \"aggregation_dimensions\": [ [\"AutoScalingGroupName\"] ], \"metrics_collected\": { \"mem\": { \"measurement\": [ { \"name\": \"mem_used_percent\", \"rename\": \"MemoryUtilization\", \"unit\": \"Percent\" } ], \"metrics_collection_interval\": 60 } } } } Step 2: Target Tracking Scaling Policy json { \"TargetTrackingScalingPolicyConfiguration\": { \"TargetValue\": 70.0, \"CustomizedMetricSpecification\": { \"MetricName\": \"MemoryUtilization\", \"Namespace\": \"CWAgent\", \"Statistic\": \"Average\", \"Dimensions\": [ { \"Name\": \"AutoScalingGroupName\", \"Value\": \"data-processing-asg\" } ] } } } Installation (Launch Template UserData): bash #!/bin/bash # Install CloudWatch agent wget https://s3.amazonaws.com/amazoncloudwatch-agent/amazon_linux/amd64/latest/amazon-cloudwatch-agent.rpm sudo rpm -U ./amazon-cloudwatch-agent.rpm # Create config file (JSON above saved to /opt/aws/amazon-cloudwatch-agent/etc/config.json) # Start agent sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl \\ -a fetch-config \\ -m ec2 \\ -s \\ -c file:/opt/aws/amazon-cloudwatch-agent/etc/config.json IAM Role Permissions: json { \"Version\": \"2012-10-17\", \"Statement\": [ { \"Effect\": \"Allow\", \"Action\": [ \"cloudwatch:PutMetricData\", \"ec2:DescribeTags\", \"autoscaling:Describe*\" ], \"Resource\": \"*\" } ] } Why others are wrong:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_eb8f938b47",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "iam",
    "dificultad": 3,
    "pregunta": "A company wants to monitor its AWS costs for financial review. The cloud operations team is designing an architecture in the AWS Organizations management account to query AWS Cost and Usage Reports for all member accounts. The team must run this query once a month and provide a detailed analysis of the bill. Which solution is the MOST scalable and cost-effective way to meet these requirements? Get Latest & Actual SAA-C03 Exam's Question and Answers from Lead2pass. https://www.lead2pass.com 9 ★ Instant Download ★ PDF And VCE ★ 100% Passing Guarantee ★ 100% Money Back Guarantee",
    "opciones": [
      "Enable Cost and Usage Reports in the management account. Deliver reports to Amazon Kinesis. Use Amazon EMR for analysis.",
      "Enable Cost and Usage Reports in the management account. Deliver the reports to Amazon S3. Use Amazon Athena for analysis.",
      "Enable Cost and Usage Reports for member accounts. Deliver the reports to Amazon S3. Use Amazon Redshift for analysis.",
      "Enable Cost and Usage Reports for member accounts. Deliver the reports to Amazon Kinesis. Use Amazon QuickSight for analysis."
    ],
    "correcta": 2,
    "explicacion": "Explanation: https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html If you are an administrator of an AWS Organizations management account and do not want any of the member accounts in your Organization to set-up a CUR you can do one of the following: (Recommended) If you've opted into Organizations with all features enabled, you can apply a Service Control Policy (SCP). Note that SCPs only apply to member accounts and if you want to restrict any IAM users associated with the management account from setting up a CUR, you'll need to adjust their specific IAM permissions. SCPs also are not retroactive, so they will not deactivate any CURs a member account may have set-up prior to the SCP being applied. Submit a customer support case to block access to billing data in the Billing console for member accounts. This is a list of organizations where the payer account prevents member accounts in its organization from viewing billing data on the Bills and Invoices pages. This also prevents those accounts from setting up Cost and Usage Reports. This option is only available for organizations without all features enabled. Please note that if you have already opted into this to prevent member accounts from viewing bills and invoices in the Billing Console, you do not need to request this access again. Those same member accounts will also be prevented from setting up a Cost and Usage Report.",
    "explicacion_correcta": "Fully managed service to securely control access using users, groups, roles, and identity-based policies.\n\nWhen to use: Implement least privilege, manage MFA, define permissions for humans/apps/services interacting with AWS.\n\nKey differences: IAM manages permissions within one AWS account. Organizations (SCPs) manages boundaries across accounts. Cognito handles app end-user auth.",
    "analisis_distractores": "Explicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.\n\nSCPs don't grant permissions, they only restrict. Root user in member accounts is blocked by default with full deny SCP.\n\nSCPs don't grant permissions, they only restrict. Root user in member accounts is blocked by default with full deny SCP.",
    "tip": "IAM = I Am Managing who can do what. | Organizations = SCPs restrict, never grant."
  },
  {
    "id": "saa_ebfe5d64da",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 3,
    "pregunta": "A company is preparing to store confidential data in Amazon S3. For compliance reasons the data must be encrypted at rest Encryption key usage must be logged tor auditing purposes. Keys Get Latest & Actual SAA-C03 Exam's Question and Answers from Lead2pass. https://www.lead2pass.com 5 ★ Instant Download ★ PDF And VCE ★ 100% Passing Guarantee ★ 100% Money Back Guarantee must be rotated every year. Which solution meets these requirements and the MOST operationally efferent?",
    "opciones": [
      "Server-side encryption with customer-provided keys (SSE-C)",
      "Server-side encryption with Amazon S3 managed keys (SSE-S3)",
      "Server-side encryption with AWS KMS (SSE-KMS) customer master keys (CMKs) with manual rotation",
      "Server-side encryption with AWS KMS (SSE-KMS) customer master keys (CMKs) with automate rotation"
    ],
    "correcta": 3,
    "explicacion": "Explanation: https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html When you enable automatic key rotation for a customer managed key, AWS KMS generates new cryptographic material for the KMS key every year. AWS KMS also saves the KMS key's older cryptographic material in perpetuity so it can be used to decrypt data that the KMS key encrypted. Key rotation in AWS KMS is a cryptographic best practice that is designed to be transparent and easy to use. AWS KMS supports optional automatic key rotation only for customer managed CMKs. Enable and disable key rotation. Automatic key rotation is disabled by default on customer managed CMKs. When you enable (or re-enable) key rotation, AWS KMS automatically rotates the CMK 365 days after the enable date and every 365 days thereafter.",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nCannot enable encryption on existing RDS/EBS directly. Must snapshot → copy with encryption → restore.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | KMS = Keeps Master Secrets safe."
  },
  {
    "id": "saa_ed31595e25",
    "materia": "Design Secure Architectures",
    "tema": "lambda",
    "dificultad": 2,
    "pregunta": "Lambda Environment Variables vs Secrets Manager (Similar to PT5) A Lambda function needs database credentials that rotate monthly. What's the most secure way to provide these credentials?",
    "opciones": [
      "Hardcode in Lambda function code",
      "Store in environment variables",
      "Retrieve from Secrets Manager using SDK",
      "Pass as event parameter <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: Secrets Manager Integration: Secrets Manager: ✅ ├── Automatic rotation (Lambda function) ✅ ├── Encryption at rest (KMS) ├── Fine-grained IAM access control ├── Audit trail (CloudTrail) ├── Cross-region replication └── Versioning (AWSCURRENT, AWSPREVIOUS) Environment Variables: ├── Encrypted at rest (KMS) ✅ ├── No automatic rotation ❌ ├── Visible in Lambda console (encrypted) └── Use: Static config, not secrets that rotate Lambda Code: python import boto3 import json from botocore.exceptions import ClientError secrets_client = boto3.client('secretsmanager') def get_secret(): try: response = secrets_client.get_secret_value( SecretId='prod/db/credentials' ) secret = json.loads(response['SecretString']) return secret except ClientError as e: raise e def lambda_handler(event, context): # Get fresh credentials (always current after rotation) secret = get_secret() username = secret['username'] password = secret['password'] # Rotated automatically host = secret['host'] # Connect to database with current credentials # No code changes needed when credentials rotate ✅ Comparison: Method Security Rotation Cost ─────────────────────────────────────────────────── Hardcoded ❌ Low ❌ No Free Environment Variables ⚠️ Medium ❌ No Free Secrets Manager ✅ High ✅ Yes $0.40/secret/month ✅ Parameter Store Advanced ✅ High ⚠️ Custom $0.05/10K calls Key Concept: Secrets Manager = Automatic rotation + secure retrieval for credentials </details> ---",
    "explicacion_correcta": "Serverless compute service running code without provisioning/managing servers, auto-scales on demand.\n\nWhen to use: Event-driven architectures, serverless microservices, real-time file processing (S3 triggers), scheduled CRON jobs (EventBridge).\n\nKey differences: EC2 = manage OS, pay for running time. Lambda = abstracted infrastructure, pay for exact execution time. Fargate = serverless containers. Lambda = Function-as-a-Service.",
    "analisis_distractores": "Lambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.\n\nCannot enable encryption on existing RDS/EBS directly. Must snapshot → copy with encryption → restore.",
    "tip": "Lambda = Limit of 15 minutes for serverless code. | IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_ee04ca2a11",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company exports database data daily to S3 (2-5 GB files). Access patterns are variable and data must be immediately available for up to 3 months. Which S3 storage class is most cost-effective? Options:",
    "opciones": [
      "S3 Standard",
      "S3 Standard-IA",
      "S3 One Zone-IA",
      "S3 Intelligent-Tiering"
    ],
    "correcta": 3,
    "explicacion": "Explanation: S3 Intelligent-Tiering automatically moves objects between access tiers based on changing access patterns, making it ideal when access patterns are variable and unpredictable. ## Domain 4: Design Cost-Optimized Architectures (20% of exam) ### Multipart Upload",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nFor predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Intelligent-Tiering = Smart automatic cost optimization."
  },
  {
    "id": "saa_ee3cef959a",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "ec2",
    "dificultad": 3,
    "pregunta": "ALB Target Group Health Checks (Similar to PT2) An e-commerce application runs on EC2 instances behind an Application Load Balancer. The application has a custom health check endpoint at /health that returns HTTP 200 when healthy and HTTP 503 when the database connection fails. How should the architect configure the ALB target group to properly detect unhealthy instances?",
    "opciones": [
      "Use default health check on port 80 with path \"/\"",
      "Configure health check on port 80 with path \"/health\", healthy threshold 2, unhealthy threshold 2",
      "Use TCP health check on port 80",
      "Configure health check on port 443 with SSL certificate verification <details> <summary>✅ Click to reveal answer</summary> Key Concept: Custom health check path + proper status codes = accurate health detection </details> ---"
    ],
    "correcta": 1,
    "explicacion": "Explanation: ALB Health Check Configuration: yaml Health Check Settings: Protocol: HTTP # or HTTPS Port: 80 # Application port Path: /health # ✅ Custom health endpoint Interval: 30 seconds # How often to check Timeout: 5 seconds # Max time for response Healthy Threshold: 2 # Consecutive successes to mark healthy Unhealthy Threshold: 2 # Consecutive failures to mark unhealthy Success Codes: 200 # Expected HTTP response code Health Check Flow: ALB Target Group ├── Target 1 (i-001): 10.0.1.10 │ ├── Check 1: GET /health → 200 OK ✅ │ ├── Check 2: GET /health → 200 OK ✅ │ └── Status: Healthy (2 consecutive successes) │ ├── Target 2 (i-002): 10.0.1.11 │ ├── Check 1: GET /health → 503 Error ❌ │ ├── Check 2: GET /health → 503 Error ❌ │ └── Status: Unhealthy (2 consecutive failures) │ └── ALB stops sending traffic to this target Best Practices: - Use custom health check path that validates application health - Check database connectivity, dependencies, not just HTTP server - Set unhealthy threshold = 2 for faster failure detection - Return specific HTTP codes: 200 = healthy, 5xx = unhealthy Why others are wrong:",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | Config = Configuration compliance and history."
  },
  {
    "id": "saa_ee649c5350",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "A company needs to track all configuration changes to security groups across multiple AWS accounts and regions. What is the MOST efficient solution?",
    "opciones": [
      "Enable CloudTrail in each account and region",
      "Create Lambda functions to monitor security group changes",
      "Use AWS Config with a Config Aggregator",
      "Use CloudWatch Events in each region <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - AWS Config records resource configuration changes - Config Aggregator provides centralized view across accounts and regions - Tracks configuration history and relationships - CloudTrail tracks who made changes but doesn't aggregate configurations - Lambda would require custom development and maintenance - CloudWatch Events could detect changes but doesn't provide historical tracking References: AWS Config, Config Aggregator, Multi-Account Management </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nManagement events enabled by default (90 days free). Data events (S3 uploads, Lambda invocations) NOT enabled by default, extra cost. 15-minute delay.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_ee68d2fc70",
    "materia": "Design Secure Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A development team needs read-only access to all EC2 instances, but write access should only be granted during business hours (9 AM - 5 PM). How can this be implemented?",
    "opciones": [
      "Use time-based IAM policy conditions",
      "Manually attach/detach policies during business hours",
      "Use AWS Lambda to modify IAM policies based on time",
      "Create two separate IAM groups and move users between them <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - IAM supports time-based conditions using aws:CurrentTime - Can specify date/time ranges for policy evaluation Example Policy: json { \"Version\": \"2012-10-17\", \"Statement\": [ { \"Effect\": \"Allow\", \"Action\": \"ec2:*\", \"Resource\": \"*\", \"Condition\": { \"DateGreaterThan\": {\"aws:CurrentTime\": \"2026-01-01T09:00:00Z\"}, \"DateLessThan\": {\"aws:CurrentTime\": \"2026-01-01T17:00:00Z\"} } }, { \"Effect\": \"Allow\", \"Action\": [ \"ec2:Describe*\", \"ec2:Get*\", \"ec2:List*\" ], \"Resource\": \"*\" } ] } - Read-only access always allowed - Write access only during specified hours - Other options require manual intervention or complex automation References: IAM Policy Conditions, Time-Based Access Control </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_ee80478b50",
    "materia": "Design Secure Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "AWS Secrets Manager Rotation (Similar to PT2) A Lambda function needs to access RDS database credentials that rotate every 30 days. Which solution provides automatic credential updates?",
    "opciones": [
      "Store credentials in environment variables",
      "AWS Secrets Manager with automatic rotation enabled",
      "AWS Systems Manager Parameter Store (standard)",
      "Store credentials in S3 with versioning <details> <summary>✅ Click to reveal answer</summary> Key Concept: Secrets Manager = Automatic rotation + RDS integration </details> ---"
    ],
    "correcta": 1,
    "explicacion": "Explanation: Secrets Manager vs Parameter Store: Secrets Manager: ✅ ├── Automatic rotation (Lambda function) ├── RDS/DocumentDB/Redshift integration ├── Cross-region replication ├── Cost: $0.40/secret/month + $0.05/10K API calls └── Use case: Database credentials, API keys Parameter Store: ├── Rotation: Manual only ❌ ├── Free tier: Standard parameters ├── Advanced: Rotation with custom Lambda └── Use case: Configuration data, SSM integration Automatic Rotation Flow: Day 1: Secrets Manager: password123 RDS Database: password123 Day 30 (Rotation triggered): ├── Secrets Manager invokes rotation Lambda ├── Lambda creates new password: password456 ├── Lambda updates RDS password: password456 ├── Lambda updates Secrets Manager: password456 └── Lambda tests new credentials ✅ Application: └── Always calls GetSecretValue (gets current password) Lambda Code: python import boto3 secrets_client = boto3.client('secretsmanager') def lambda_handler(event, context): # Always get latest secret response = secrets_client.get_secret_value( SecretId='prod/db/password' ) password = response['SecretString'] # Connect to database with current password # No code changes needed during rotation ✅ Why others wrong:",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nRedshift Spectrum allows querying S3 data directly without loading. Redshift is NOT for OLTP.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_ef15bf7535",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company needs to ensure all S3 buckets have versioning enabled and receive automatic notifications when this requirement is violated. Which AWS service should be used?",
    "opciones": [
      "AWS CloudTrail with CloudWatch Logs",
      "Amazon CloudWatch with custom metrics",
      "AWS Config with AWS Managed Rules",
      "AWS Systems Manager State Manager <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - AWS Config evaluates resource configurations against rules - Managed rule s3-bucket-versioning-enabled checks versioning - Config can send SNS notifications when non-compliant - CloudTrail tracks who made changes but doesn't evaluate compliance - CloudWatch monitors performance metrics, not configuration compliance - Systems Manager State Manager is for EC2 instance configuration References: AWS Config, Config Rules, Compliance Auditing </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nUse SNS+SQS fan-out for reliable task processing (SNS alone can lose messages if endpoint offline).",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_f00f75b0d5",
    "materia": "Design Secure Architectures",
    "tema": "cloudfront",
    "dificultad": 3,
    "pregunta": "A company wants to protect their web application from DDoS attacks and filter malicious traffic. Which AWS services should be used? (Choose TWO)",
    "opciones": [
      "AWS WAF",
      "AWS Shield",
      "Security Groups",
      "AWS GuardDuty E. Network ACLs <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": ", B Explanation: - AWS Shield: DDoS protection - Standard: Free, automatic, common attacks - Advanced: Paid, advanced attacks, 24/7 support, cost protection - AWS WAF: Web Application Firewall - Filter HTTP/HTTPS requests - SQL injection, XSS protection - Custom rules - Integration with CloudFront, ALB, API Gateway DDoS Protection Layers:",
    "explicacion_correcta": "Web application firewall that protects web applications from common exploits (SQL injection, XSS).\n\nWhen to use: Protecting applications behind CloudFront, ALB, or API Gateway from OWASP top 10 threats.\n\nKey differences: WAF operates at Layer 7 (HTTP/HTTPS). Shield protects against DDoS (Layer 3/4). GuardDuty detects threats intelligently.",
    "analisis_distractores": "WAF for app-level attacks (SQLi, XSS). Shield for DDoS. Don't confuse them.\n\nCaching HTTP content → CloudFront. Non-HTTP or static IPs needed → Global Accelerator. Use OAI/OAC to protect S3 origins.\n\nAPI Gateway integrates with Lambda (no VPC needed) and HTTP backends (needs VPC link for private). WebSocket APIs for bidirectional communication.",
    "tip": "WAF = Web Application Filter (Layer 7 rules). | CloudFront = Sits in front of your web app to cache HTTP."
  },
  {
    "id": "saa_f1a88cb5f7",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "An application publishes custom metrics to CloudWatch. These metrics should trigger automated responses. What is the BEST approach?",
    "opciones": [
      "Poll CloudWatch API periodically",
      "Use CloudWatch Alarms with SNS",
      "Use EventBridge rule for CloudWatch events",
      "Use Lambda to check metrics <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - CloudWatch Alarms monitor metrics and trigger actions automatically - SNS integration for notifications and automated responses - Can trigger Auto Scaling, EC2 actions, SNS, Systems Manager CloudWatch Alarms Architecture: Custom Application ↓ CloudWatch Custom Metrics ↓ CloudWatch Alarm (threshold) ↓ SNS Topic ├→ Email notifications ├→ Lambda (automated remediation) ├→ SQS (queue for processing) └→ Auto Scaling (scale up/down) CloudWatch Alarm States: - OK: Metric within threshold - ALARM: Metric breached threshold - INSUFFICIENT_DATA: Not enough data Alarm Configuration: python import boto3 cloudwatch = boto3.client('cloudwatch') # Create alarm cloudwatch.put_metric_alarm( AlarmName='HighCPUUtilization', ComparisonOperator='GreaterThanThreshold', EvaluationPeriods=2, MetricName='CPUUtilization', Namespace='AWS/EC2', Period=300, # 5 minutes Statistic='Average', Threshold=80.0, ActionsEnabled=True, AlarmActions=[ 'arn:aws:sns:us-east-1:123456789012:AlertTopic', 'arn:aws:autoscaling:us-east-1:123456789012:scalingPolicy:...' ], AlarmDescription='Alert when CPU exceeds 80%', Dimensions=[{ 'Name': 'InstanceId', 'Value': 'i-1234567890abcdef0' }] ) Custom Metrics Example: python # Publish custom metric cloudwatch.put_metric_data( Namespace='MyApp/Orders', MetricData=[{ 'MetricName': 'OrdersProcessed', 'Value': 150, 'Unit': 'Count', 'Timestamp': datetime.datetime.utcnow(), 'Dimensions': [{ 'Name': 'Environment', 'Value': 'Production' }] }] ) # Create alarm on custom metric cloudwatch.put_metric_alarm( AlarmName='LowOrderProcessing', ComparisonOperator='LessThanThreshold', EvaluationPeriods=1, MetricName='OrdersProcessed', Namespace='MyApp/Orders', Period=60, Statistic='Sum', Threshold=100.0, ActionsEnabled=True, AlarmActions=['arn:aws:sns:...'], Dimensions=[{ 'Name': 'Environment', 'Value': 'Production' }] ) Alarm Actions:",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nUse SNS+SQS fan-out for reliable task processing (SNS alone can lose messages if endpoint offline).",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_f1ed7d94e8",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A development team runs EC2 instances Monday-Friday, 9 AM-6 PM. The instances sit idle outside business hours. What is the MOST cost-effective approach?",
    "opciones": [
      "Use Reserved Instances",
      "Use Spot Instances",
      "Use Instance Scheduler to automatically stop instances outside business hours",
      "Manually stop instances daily <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Instance Scheduler automates start/stop based on schedules - Running only 45 hours/week instead of 168 hours saves ~73% - No manual intervention required - Reserved Instances charge 24/7 whether running or not - Spot Instances could be interrupted during work hours - Manual stopping is error-prone and requires effort Savings: Running 45/168 hours = 73% time savings References: Instance Scheduler, Cost Optimization </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_f2d022943a",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A Kinesis Data Firehose delivery stream should transform incoming JSON data using a Lambda function before storing in S3. How is this configured?",
    "opciones": [
      "Firehose doesn't support transformations",
      "Enable data transformation and specify the Lambda function ARN",
      "Use Kinesis Data Analytics for transformation",
      "Transform data before sending to Firehose <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Kinesis Data Firehose supports Lambda transformation - Configure transformation in delivery stream settings - Firehose invokes Lambda for each batch - Lambda can modify, filter, or enrich data - Built-in feature, no separate service needed - Transforming before Firehose is possible but not optimal References: Kinesis Data Firehose, Data Transformation </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nKinesis Data Streams for custom processing. Kinesis Data Firehose for automatic delivery to S3/Redshift/Elasticsearch (no code needed).",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_f333fdba07",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "redshift",
    "dificultad": 2,
    "pregunta": "Redshift Snapshot Lifecycle Management A company's Redshift cluster has automated snapshots with 7-day retention and several manual snapshots from past migrations. Snapshot storage costs have increased significantly. What is the FIRST action to reduce costs?",
    "opciones": [
      "Reduce automated snapshot retention to 1 day",
      "Delete unnecessary manual snapshots ✅",
      "Enable snapshot compression",
      "Move snapshots to S3 Glacier <details> <summary>📖 Explanation</summary>"
    ],
    "correcta": 1,
    "explicacion": "Why: - Manual snapshots persist indefinitely (ongoing cost) - Automated snapshots already expire per retention - First action: Audit and delete old manual snapshots Cost Analysis: Automated snapshots (7 days): $X/day × 7 = $7X Manual snapshots (50 old): $X/snapshot × 50 = $50X Action Plan:",
    "explicacion_correcta": "Fully managed petabyte-scale data warehouse for complex OLAP analytics and business intelligence.\n\nWhen to use: Complex analytical queries across large datasets, BI dashboards, data warehousing.\n\nKey differences: Athena = ad-hoc serverless queries on S3. Redshift = provisioned cluster for heavy OLAP, requires data loading.",
    "analisis_distractores": "Redshift Spectrum allows querying S3 data directly without loading. Redshift is NOT for OLTP.",
    "tip": "Redshift = Heavy OLAP data warehouse, columnar storage, complex BI queries."
  },
  {
    "id": "saa_f44a7ba256",
    "materia": "Design Resilient Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "AWS Backup for Centralized Backups (Similar to PT6) An organization has EC2, RDS, DynamoDB, and EFS across multiple accounts and needs centralized backup management with compliance policies. Which solution provides this?",
    "opciones": [
      "Lambda scripts to snapshot each resource",
      "AWS Backup with backup plans and vault lock",
      "EBS snapshots + RDS automated backups + DynamoDB PITR",
      "Third-party backup software <details> <summary>✅ Click to reveal answer</summary> Key Concept: AWS Backup = Centralized, policy-driven backup across AWS services </details> ---"
    ],
    "correcta": 1,
    "explicacion": "Explanation: AWS Backup Features: Centralized Management: ├── Backup plans (schedule, retention) ├── Backup vaults (encrypted storage) ├── Cross-region copy ├── Cross-account backup └── Compliance policies (vault lock) ✅ Supported Services: ├── EC2 (EBS volumes) ├── RDS (all engines) ├── Aurora ├── DynamoDB ├── EFS ├── FSx ├── Storage Gateway └── DocumentDB Backup Plan Example: yaml Backup Plan: \"DailyBackupPlan\" ├── Rule 1: Daily Backups │ ├── Schedule: Daily at 2 AM │ ├── Retention: 7 days │ └── Copy to: us-west-2 (DR) │ └── Rule 2: Monthly Backups ├── Schedule: 1st of month ├── Retention: 1 year └── Vault Lock: WORM (immutable) Vault Lock (Compliance): AWS Backup Vault Lock: ├── WORM (Write Once Read Many) ├── Prevents backup deletion (even by admin) ├── Compliance: GDPR, HIPAA, SEC17a-4 └── Example: Retain for 7 years, cannot delete Why others wrong:",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_f48a6e085c",
    "materia": "Design Secure Architectures",
    "tema": "kms",
    "dificultad": 3,
    "pregunta": "Redshift Cluster Encryption at Rest (Similar to PT7-Q35) A data analytics team has an existing Amazon Redshift cluster (5 TB) with encryption disabled. Due to new compliance requirements, the security team requires encryption at rest using AWS KMS. The solution should minimize downtime. Which solution enables encryption on the existing cluster?",
    "opciones": [
      "Modify the cluster properties to enable encryption using AWS KMS; Redshift automatically migrates data",
      "Create unload scripts to export data, create new encrypted cluster, reload data",
      "Enable encryption using CloudHSM instead of KMS",
      "Use AWS Database Migration Service to migrate to new encrypted cluster <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: Redshift Encryption Changes (2019+): Legacy Approach (Pre-2019): ❌ ├── Cannot enable encryption on existing cluster ├── Required steps: │ ├── 1. Create new encrypted cluster │ ├── 2. Unload data from old cluster │ ├── 3. Load data into new cluster │ ├── 4. Switch application endpoints │ └── 5. Delete old cluster └── Downtime: Several hours for 5 TB Modern Approach (2019+): ✅ ├── Enable encryption on existing cluster ✅ ├── Redshift automatically migrates data ├── Process: │ ├── 1. Modify cluster → Enable encryption │ ├── 2. Select KMS key │ ├── 3. Redshift creates encrypted snapshots │ ├── 4. Redshift migrates data (background) │ └── 5. Cluster remains available (read-only during final cutover) └── Downtime: Minimal (minutes for final cutover) Implementation: AWS Console:",
    "explicacion_correcta": "Fully managed petabyte-scale data warehouse for complex OLAP analytics and business intelligence.\n\nWhen to use: Complex analytical queries across large datasets, BI dashboards, data warehousing.\n\nKey differences: Athena = ad-hoc serverless queries on S3. Redshift = provisioned cluster for heavy OLAP, requires data loading.",
    "analisis_distractores": "Redshift Spectrum allows querying S3 data directly without loading. Redshift is NOT for OLTP.\n\nRedshift Spectrum allows querying S3 data directly without loading. Redshift is NOT for OLTP.\n\nCannot enable encryption on existing RDS/EBS directly. Must snapshot → copy with encryption → restore.",
    "tip": "Redshift = Heavy OLAP data warehouse, columnar storage, complex BI queries. | Redshift = Heavy OLAP data warehouse, columnar storage, complex BI queries."
  },
  {
    "id": "saa_f55bb70043",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 3,
    "pregunta": "A solutions architect is writing an IAM policy to deny access to all S3 buckets except one specific bucket named \"production-data\". Which policy element should be used? json { \"Version\": \"2012-10-17\", \"Statement\": [ { \"Effect\": \"Allow\", \"Action\": \"s3:*\", \"Resource\": [ \"arn:aws:s3:::production-data\", \"arn:aws:s3:::production-data/*\" ] }, { \"Effect\": \"Deny\", \"Action\": \"s3:*\", \"Resource\": \"*\", \"Condition\": { \"StringNotEquals\": { \"s3:ResourceAccount\": \"${aws:PrincipalAccount}\" } } } ] } What is the correct approach?",
    "opciones": [
      "Use Allow effect for the specific bucket only",
      "Use Deny effect for all buckets except the one",
      "Use both Allow for specific bucket and implicit Deny for others",
      "Use resource-based policy on S3 bucket <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - IAM uses default Deny for all actions not explicitly allowed - Allow access to \"production-data\" bucket explicitly - All other buckets are implicitly denied - No need for explicit Deny statement for other buckets - IAM Evaluation Logic: Explicit Deny > Allow > Implicit Deny - Simpler policy: Just Allow the specific bucket Correct Policy: json { \"Version\": \"2012-10-17\", \"Statement\": [ { \"Effect\": \"Allow\", \"Action\": \"s3:*\", \"Resource\": [ \"arn:aws:s3:::production-data\", \"arn:aws:s3:::production-data/*\" ] } ] } References: IAM Policy Evaluation Logic, S3 IAM Policies </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_f5b624468c",
    "materia": "general",
    "tema": "lambda",
    "dificultad": 2,
    "pregunta": "A batch processing application uses Lambda functions but needs to coordinate multiple steps with error handling and retries. Which service should be used?",
    "opciones": [
      "Amazon SQS",
      "Amazon SNS",
      "AWS Step Functions",
      "Amazon EventBridge <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - AWS Step Functions orchestrates serverless workflows - Coordinate multiple Lambda functions - Built-in error handling, retries, parallel execution - Visual workflow designer Step Functions Features: - State machine: Define workflow as states - Error handling: Catch errors, retry logic - Parallel execution: Run steps concurrently - Wait states: Delays between steps - Choice states: Conditional logic - Map states: Iterate over arrays Workflow Types: - Standard: Long-running (up to 1 year), exactly-once execution - Express: Short-lived (5 min), at-least-once, high-rate Use Cases: - ETL pipelines - Order processing - Video processing - Machine learning workflows Step Functions vs Alternatives: - SQS: Message queue, no orchestration - SNS: Pub/sub messaging, no orchestration - EventBridge: Event routing, simpler workflows References: AWS Step Functions, Serverless Orchestration </details> ---",
    "explicacion_correcta": "Serverless compute service running code without provisioning/managing servers, auto-scales on demand.\n\nWhen to use: Event-driven architectures, serverless microservices, real-time file processing (S3 triggers), scheduled CRON jobs (EventBridge).\n\nKey differences: EC2 = manage OS, pay for running time. Lambda = abstracted infrastructure, pay for exact execution time. Fargate = serverless containers. Lambda = Function-as-a-Service.",
    "analisis_distractores": "Lambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nUse SNS+SQS fan-out for reliable task processing (SNS alone can lose messages if endpoint offline).\n\nDon't chain Lambda functions directly. Use Step Functions to orchestrate complex workflows.",
    "tip": "Lambda = Limit of 15 minutes for serverless code. | SNS = Send Notifications Simultaneously (Broadcast/Push)."
  },
  {
    "id": "saa_f6061af8d3",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "An application requires guaranteed capacity reservation for EC2 instances in a specific Availability Zone without long-term commitment. Which option should be used?",
    "opciones": [
      "Reserved Instances",
      "Savings Plans",
      "On-Demand Capacity Reservations",
      "Spot Instances <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - On-Demand Capacity Reservations reserve capacity in specific AZ - No long-term commitment (can cancel anytime) - Charged at On-Demand rates whether used or not - Ensures capacity availability when needed Capacity Options Comparison: | Option | Commitment | Discount | Capacity Guarantee | |--------|------------|----------|-------------------| | On-Demand | None | None | No guarantee | | Reserved | 1-3 years | Up to 72% | Yes (regional or zonal) | | Savings Plans | 1-3 years | Up to 66% | No | | Capacity Reservations | None | None | Yes (zonal) | | Spot | None | Up to 90% | No (can be interrupted) | Use Case: - Disaster recovery (reserve capacity but don't always run) - Business-critical events (Black Friday) - Regulatory/compliance requirements Cost Optimization: Combine Capacity Reservation with Savings Plan References: On-Demand Capacity Reservations </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_f6e3136ef4",
    "materia": "general",
    "tema": "ec2",
    "dificultad": 1,
    "pregunta": "How can you collect memory metrics from EC2 instances?",
    "opciones": [
      "Enable detailed monitoring",
      "Install CloudWatch Agent",
      "Use CloudTrail",
      "Memory metrics are automatic"
    ],
    "correcta": 1,
    "explicacion": "",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_f70530ab72",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 1,
    "pregunta": "A company wants to grant temporary access to S3 objects for unauthenticated users for 1 hour. What should be used?",
    "opciones": [
      "IAM user credentials",
      "S3 pre-signed URLs",
      "S3 bucket policy",
      "IAM role <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Pre-signed URLs grant time-limited access to S3 objects - No AWS credentials needed by end user - URL contains authentication information - Expires after specified duration Generate Pre-signed URL (AWS CLI): bash aws s3 presign s3://my-bucket/object.pdf --expires-in 3600 Use Cases: - Temporary download links - Upload forms for unauthenticated users - Sharing private content without making public - Time-limited access to resources - Option A: Requires creating users, not for temporary/anonymous - Option C: Bucket policies are not time-limited - Option D: Roles require authentication References: S3 Pre-signed URLs, Temporary Access </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization."
  },
  {
    "id": "saa_f7321a87e4",
    "materia": "Design High-Performing Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "CloudFront Custom Error Response (Similar to PT5-Q24) A website uses CloudFront with S3 origin. When files are missing (404), display custom error page /error.html with HTTP 200 status. How to configure?",
    "opciones": [
      "S3 bucket error document configuration",
      "CloudFront custom error response: 404 → /error.html, status 200",
      "Lambda@Edge to intercept 404 errors",
      "CloudFront default error pages <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: CloudFront Custom Error Response: Configuration: ├── Error Code: 404 ├── Response Page: /error.html ├── Response Code: 200 (not 404) ✅ └── Cache TTL: 300 seconds Flow:",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nEBS data is lost if the underlying hardware fails (unless Multi-AZ or snapshots). Instance Store data is lost on stop.\n\nCaching HTTP content → CloudFront. Non-HTTP or static IPs needed → Global Accelerator. Use OAI/OAC to protect S3 origins.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | EBS = Elastic Block Store; one AZ, one instance, persistent."
  },
  {
    "id": "saa_f76124e164",
    "materia": "Design Secure Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "A company is using AWS DMS to migrate a database. They need to ensure the data is encrypted both in transit and at rest. How can this be achieved?",
    "opciones": [
      "DMS doesn't support encryption",
      "Enable SSL/TLS for connections and use encrypted RDS instances",
      "Use VPN for all connections",
      "Encryption is automatic and cannot be configured <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - DMS supports encryption in transit using SSL/TLS - Target RDS instances can use encryption at rest - Replication instance can also be encrypted - Both source and target connections should use SSL - VPN adds security but isn't required for encryption - Encryption must be explicitly configured References: AWS DMS Security, Encryption </details> ---",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Config = Configuration compliance and history."
  },
  {
    "id": "saa_f7e78fe123",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company has a requirement that all IAM users must use Multi-Factor Authentication (MFA) before they can delete any S3 objects. How can this be enforced?",
    "opciones": [
      "Enable MFA Delete on the S3 bucket",
      "Create an IAM policy with a condition requiring MFA",
      "Use AWS Organizations Service Control Policies",
      "Configure S3 bucket policy to require MFA <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - IAM policy condition aws:MultiFactorAuthPresent enforces MFA - Can be applied to specific actions like s3:DeleteObject Example Policy: json { \"Version\": \"2012-10-17\", \"Statement\": [ { \"Effect\": \"Allow\", \"Action\": \"s3:DeleteObject\", \"Resource\": \"arn:aws:s3:::my-bucket/*\", \"Condition\": { \"Bool\": { \"aws:MultiFactorAuthPresent\": \"true\" } } } ] } - Option A: MFA Delete protects versioning but requires bucket owner MFA - Option C: SCPs can enforce but IAM policy is more direct - Option D: Can work but IAM policy is standard approach References: IAM Policy Conditions, MFA with IAM Policies </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | IAM = I Am Managing who can do what."
  },
  {
    "id": "saa_f8117734e6",
    "materia": "Design Secure Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "An application running on an EC2 instance needs to access objects in an S3 bucket. What is the MOST secure way to grant access?",
    "opciones": [
      "Store AWS credentials in the application code",
      "Create an IAM user and share the access keys",
      "Attach an IAM role to the EC2 instance",
      "Make the S3 bucket publicly accessible <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: Attaching an IAM role to EC2 is the most secure method. It provides temporary credentials that are automatically rotated, and credentials don't need to be stored in code. </details>",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nExplicit DENY always overrides any ALLOW. Resource policies cannot grant access to IAM Groups. IAM Roles use temporary credentials via STS.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_f830e64743",
    "materia": "general",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A solutions architect needs to design a system that processes events from multiple sources (S3, DynamoDB, custom applications) and routes them to different targets based on event content. Which service is MOST appropriate?",
    "opciones": [
      "Amazon SQS",
      "Amazon SNS",
      "Amazon EventBridge",
      "AWS Step Functions <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - EventBridge is an event bus for routing events - Supports multiple sources including AWS services and custom apps - Content-based filtering and routing - Built-in integration with 90+ AWS services - SQS is for point-to-point messaging - SNS is for pub/sub but limited filtering - Step Functions is for workflow orchestration References: Event-Driven Architecture, EventBridge </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nUse SNS+SQS fan-out for reliable task processing (SNS alone can lose messages if endpoint offline).\n\nDon't chain Lambda functions directly. Use Step Functions to orchestrate complex workflows.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | SNS = Send Notifications Simultaneously (Broadcast/Push)."
  },
  {
    "id": "saa_f89bf3a227",
    "materia": "Design Cost-Optimized Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "A company wants to minimize costs for a batch processing workload that runs nightly and can tolerate interruptions. Which compute option should be used?",
    "opciones": [
      "On-Demand EC2 instances",
      "Reserved Instances",
      "Spot Instances",
      "Dedicated Hosts <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Spot Instances can save up to 90% compared to On-Demand - Batch processing is fault-tolerant (can handle interruptions) - Can checkpoint progress and resume - Most cost-effective for this use case - On-Demand is more expensive - Reserved requires 1-3 year commitment - Dedicated Hosts are most expensive References: Cost Optimization, Spot Instances </details> ---"
  },
  {
    "id": "saa_f8ed6515a8",
    "materia": "Design High-Performing Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A research organization needs to run large-scale, high-throughput batch jobs on AWS with automatic job scheduling and resource provisioning. Which service should they use?",
    "opciones": [
      "AWS Batch",
      "Amazon EC2 Auto Scaling",
      "AWS Lambda",
      "Amazon EMR <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - AWS Batch is a fully managed batch computing service - Automatically provisions compute resources and schedules jobs - Supports Docker containers and EC2/Spot/Fargate - EC2 Auto Scaling is for scaling instances, not job scheduling - Lambda is for short-lived, event-driven compute - EMR is for big data processing, not general batch jobs References: AWS Batch, Batch Computing </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nIf prompt mentions minimizing operational overhead, serverless, or managing infrastructure → Fargate. If deep OS-level access needed → EC2 mode.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | Fargate = Forget managing servers; just run containers."
  },
  {
    "id": "saa_f9a25358ef",
    "materia": "Design Secure Architectures",
    "tema": "aws-architect",
    "dificultad": 2,
    "pregunta": "Application Discovery Service (Similar to PT1-Q60) A company planning AWS migration needs to discover on-premises application dependencies without installing agents on VMware VMs. Which discovery method works?",
    "opciones": [
      "Agentless discovery using AWS Application Discovery Service Connector",
      "Agent-based discovery",
      "AWS Migration Hub import",
      "CloudWatch agent <details> <summary>✅ Click to reveal answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: AWS Application Discovery Service: Agentless (VMware): ✅ ├── Deploy: OVA appliance in vCenter ├── Discovers: VMs, CPU, memory, network, dependencies ├── No agent installation on VMs ✅ └── Limitations: VMware only, less detailed metrics Agent-based: ├── Install: Discovery Agent on each server ├── Discovers: Detailed process info, network connections ├── Supports: VMware, physical servers, Hyper-V └── More accurate dependency mapping When to Use Each: Use Agentless when: ├── VMware environment ✅ ├── Cannot install agents (security policy) ├── Quick initial discovery └── Proof of concept Use Agent-based when: ├── Need detailed process-level data ├── Physical servers or non-VMware ├── Accurate network dependency mapping └── Migration planning Key Concept: Agentless = VMware OVA appliance (no VM agent installation) </details> ---"
  },
  {
    "id": "saa_f9e144d670",
    "materia": "Design Secure Architectures",
    "tema": "rds",
    "dificultad": 2,
    "pregunta": "A software development company uses Lambda functions that connect to MongoDB and third-party APIs. Environment variables store sensitive credentials. How can this information be secured to prevent developers from seeing credentials in plain text? Options:",
    "opciones": [
      "Lambda already encrypts environment variables using AWS KMS by default",
      "Enable SSL encryption that leverages AWS CloudHSM",
      "Lambda does not provide encryption - deploy to EC2 instead",
      "Create a new AWS KMS key and use encryption helpers with AWS KMS"
    ],
    "correcta": 3,
    "explicacion": "Explanation: While Lambda encrypts environment variables by default, the credentials would still be visible to users with Lambda console access. Creating your own KMS key and using encryption helpers provides better security by encrypting variables after function creation. ### RDS Secure Data Sharing",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nCannot enable encryption on existing RDS/EBS directly. Must snapshot → copy with encryption → restore.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Lambda = Limit of 15 minutes for serverless code."
  },
  {
    "id": "saa_f9fca3bff8",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "config",
    "dificultad": 2,
    "pregunta": "A security team wants to automate evidence collection for compliance frameworks such as PCI DSS and HIPAA. Which AWS service should they use?",
    "opciones": [
      "AWS Audit Manager",
      "AWS Artifact",
      "AWS Config",
      "AWS Security Hub <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - AWS Audit Manager automates evidence collection for audits - Maps AWS resources to control requirements - Artifact is for downloading compliance reports - Config is for resource compliance, not evidence collection - Security Hub is for security findings References: AWS Audit Manager, Compliance Automation </details> ---",
    "explicacion_correcta": "Continuously records configuration changes of AWS resources over time into configuration histories.\n\nWhen to use: Enforce compliance by tracking configuration changes, identifying compliant/non-compliant services.\n\nKey differences: CloudTrail = API call that requested change. Config = actual configuration state resulting from change.",
    "analisis_distractores": "Config is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Config = Configuration compliance and history."
  },
  {
    "id": "saa_fb0b075088",
    "materia": "Design Resilient Architectures",
    "tema": "rds",
    "dificultad": 1,
    "pregunta": "A company needs to ensure RDS database backups are retained for 90 days for compliance. What should be configured?",
    "opciones": [
      "Automated Backups with 90-day retention",
      "Manual Snapshots",
      "Both automated backups (35 days) and manual snapshots",
      "RDS Cross-Region Replication <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - RDS Automated Backups: Max 35 days retention - Manual Snapshots: Retained until explicitly deleted - For > 35 days: Use manual snapshots RDS Backup Types: | Type | Retention | Deleted with DB | Use Case | |------|-----------|-----------------|----------| | Automated | 1-35 days | Yes | Point-in-time recovery | | Manual | Until deleted | No | Long-term retention | Best Practice for Long Retention:",
    "explicacion_correcta": "Managed relational database service that automates hardware provisioning, patching, backups. Supports MySQL, PostgreSQL, Oracle, SQL Server.\n\nWhen to use: OLTP workloads, legacy applications, structured data requiring ACID compliance.\n\nKey differences: RDS is for structured relational data; DynamoDB is for NoSQL key-value. Aurora is cloud-native with better scaling and failover speeds.",
    "analisis_distractores": "Multi-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "RDS: Relational, Replicas for Reads, Multi-AZ for Resilience. | Config = Configuration compliance and history."
  },
  {
    "id": "saa_fc4452ede9",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "An organization wants to detect unusual API activity, such as a sudden spike in EC2 instance creation. Which CloudTrail feature should be enabled?",
    "opciones": [
      "CloudTrail Data Events",
      "CloudTrail Management Events",
      "CloudTrail Insights Events",
      "CloudTrail Multi-Region Trails <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - CloudTrail Insights uses machine learning to detect unusual activity - Identifies anomalies like spikes in resource provisioning or IAM actions - Management Events track API calls but don't detect anomalies - Data Events track high-volume operations (S3 objects, Lambda invocations) - Multi-Region Trails collect logs but don't analyze patterns References: CloudTrail Insights, Anomaly Detection </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nDon't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | Reserved = Reliable Infrastructure for 1 or 3-year Run."
  },
  {
    "id": "saa_fd81705dd2",
    "materia": "Design Secure Architectures",
    "tema": "sqs",
    "dificultad": 1,
    "pregunta": "What is the maximum retention period for SQS messages?",
    "opciones": [
      "4 days",
      "7 days",
      "14 days",
      "30 days"
    ],
    "correcta": 2,
    "explicacion": "--- ## Key Takeaways ✅ SQS for decoupling, SNS for pub/sub fanout ✅ SQS FIFO for exactly-once, ordered processing ✅ EventBridge for event-driven architectures (AWS + SaaS events) ✅ Step Functions for workflow orchestration ✅ Kinesis for real-time streaming data ✅ Use SNS + SQS fanout pattern for multiple consumers ✅ SQS visibility timeout prevents duplicate processing ✅ EventBridge has built-in integrations with 20+ AWS services ✅ Choose SQS/SNS for new apps, Amazon MQ for migrations ✅ Kinesis Data Streams for real-time, Firehose for near real-time --- Previous Module: [Module 07: Security & Compliance](../07-Security/README.md) Next Module: [Module 09: Monitoring & Management](../09-Monitoring/README.md)",
    "explicacion_correcta": "Fully managed push-based pub/sub messaging for decoupling microservices and broadcasting notifications.\n\nWhen to use: Fan-out pattern (single event to multiple subscribers): email, SMS, mobile push, multiple SQS queues, Lambda functions.\n\nKey differences: SNS = push-based pub/sub broadcast. SQS = pull-based point-to-point. EventBridge = complex rule-based filtering + SaaS integrations.",
    "analisis_distractores": "Use SNS+SQS fan-out for reliable task processing (SNS alone can lose messages if endpoint offline).\n\nDon't chain Lambda functions directly. Use Step Functions to orchestrate complex workflows.\n\nStandard = unlimited throughput, at-least-once (duplicates possible). FIFO = exactly-once, strict ordering, 300 msgs/sec (3000 with batching).",
    "tip": "SNS = Send Notifications Simultaneously (Broadcast/Push). | Step Functions = Orchestrates multi-step workflows for up to a year."
  },
  {
    "id": "saa_fd85cc6cde",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "An application needs to distribute traffic across EC2 instances in multiple Availability Zones. The instances fail health checks intermittently. What should be configured?",
    "opciones": [
      "Increase health check interval",
      "Configure unhealthy threshold",
      "Use health check grace period",
      "Disable health checks <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - Unhealthy threshold: Number of consecutive failed checks before marking unhealthy - Prevents temporary issues from removing instances - Balance between responsiveness and stability Health Check Parameters: - HealthCheckIntervalSeconds: Time between checks (5-300s) - HealthyThresholdCount: Consecutive successes to mark healthy - UnhealthyThresholdCount: Consecutive failures to mark unhealthy - HealthCheckTimeoutSeconds: Time to wait for response Best Practices: - Set appropriate thresholds for application - Monitor health check metrics - Use ALB health checks for HTTP endpoints - Consider application startup time References: ELB Health Checks, Health Check Configuration </details> ---",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | Config = Configuration compliance and history."
  },
  {
    "id": "saa_fdbb4bfed7",
    "materia": "Design Resilient Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "An Auto Scaling group needs to ensure that newly launched instances are ready to serve traffic before receiving requests. What should be configured?",
    "opciones": [
      "EC2 Status Checks",
      "ELB Health Checks",
      "Auto Scaling Health Check Grace Period",
      "CloudWatch Alarms <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Health Check Grace Period gives instances time to boot and pass checks - Prevents premature termination during initialization - Default: 300 seconds (5 minutes) - Should be longer than application startup time Auto Scaling Health Checks: - EC2 health check: Instance running (default) - ELB health check: Instance passes load balancer health checks - Grace period applies to both types Recommended Configuration:",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nDefault termination policy: most instances in AZ → oldest launch template → closest to billing hour. Enable scale-in protection for stateful workloads.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | ASG = Automatically Sizes Groups horizontally."
  },
  {
    "id": "saa_fdc159bd23",
    "materia": "Design Secure Architectures",
    "tema": "organizations",
    "dificultad": 1,
    "pregunta": "A company wants to centrally manage firewall rules across multiple AWS accounts and VPCs. Which service should be used?",
    "opciones": [
      "Security Groups",
      "Network ACLs",
      "AWS Firewall Manager",
      "AWS WAF <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - AWS Firewall Manager centrally configures and manages firewall rules - Works across accounts and resources in AWS Organizations - Ensures consistent security policies - Automatic policy application to new resources Firewall Manager Capabilities:",
    "explicacion_correcta": "Connect VPC to AWS services privately without Internet Gateway, NAT, VPN, or Direct Connect.\n\nWhen to use: Private subnets must access AWS services without traversing public internet.\n\nKey differences: Gateway Endpoints only for S3 and DynamoDB (route table prefix lists). Interface Endpoints (PrivateLink) for almost all other services (ENI with private IP).",
    "analisis_distractores": "Gateway Endpoints don't use Security Groups (use Endpoint Policies). Interface Endpoints do use Security Groups.\n\nSCPs don't grant permissions, they only restrict. Root user in member accounts is blocked by default with full deny SCP.\n\nSCPs don't grant permissions, they only restrict. Root user in member accounts is blocked by default with full deny SCP.",
    "tip": "Gateway for Big Two (S3 & DynamoDB); Interface for the Rest. | Organizations = SCPs restrict, never grant."
  },
  {
    "id": "saa_fe1c972a83",
    "materia": "Design Secure Architectures",
    "tema": "config",
    "dificultad": 2,
    "pregunta": "A company needs to provide auditors with access to compliance reports and agreements for various AWS services. Which AWS service should they use?",
    "opciones": [
      "AWS Artifact",
      "AWS Audit Manager",
      "AWS Config",
      "AWS Security Hub <details> <summary>Show Answer</summary>"
    ],
    "correcta": 0,
    "explicacion": "Explanation: - AWS Artifact provides on-demand access to AWS compliance reports and agreements - Used for audit, compliance, and regulatory requirements - Audit Manager is for automating evidence collection, not report access - Config is for resource compliance, not reports - Security Hub is for security findings, not compliance documents References: AWS Artifact, Compliance Reports </details> ---",
    "explicacion_correcta": "Continuously records configuration changes of AWS resources over time into configuration histories.\n\nWhen to use: Enforce compliance by tracking configuration changes, identifying compliant/non-compliant services.\n\nKey differences: CloudTrail = API call that requested change. Config = actual configuration state resulting from change.",
    "analisis_distractores": "Config is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Config = Configuration compliance and history."
  },
  {
    "id": "saa_fe7809441c",
    "materia": "Design Resilient Architectures",
    "tema": "s3",
    "dificultad": 2,
    "pregunta": "A company needs to continuously replicate data from an on-premises MySQL database to Amazon RDS for MySQL for analytics purposes. The source database must remain operational. Which AWS service should be used?",
    "opciones": [
      "AWS DataSync",
      "AWS Database Migration Service (DMS) with CDC",
      "AWS Snowball Edge",
      "Amazon S3 Transfer Acceleration <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - DMS supports continuous data replication using Change Data Capture (CDC) - Source database remains operational during migration - Homogeneous migration (MySQL to MySQL) - Keeps source and target in sync - DataSync is for file systems, not databases - Snowball is for one-time transfers - S3 Transfer Acceleration is for S3 uploads References: AWS DMS, Change Data Capture, Database Replication </details> ---",
    "explicacion_correcta": "Automatically moves objects to most cost-effective tier based on access patterns.\n\nWhen to use: Datasets with unknown, changing, or unpredictable access patterns.\n\nKey differences: Standard-IA/Glacier have retrieval fees. Intelligent-Tiering has no retrieval fees, only small monitoring/automation fee.",
    "analisis_distractores": "For predictable access patterns, manual Lifecycle policy to Standard-IA/Glacier is more cost-effective (avoids automation fees).\n\nMulti-AZ uses synchronous replication for Disaster Recovery (HA only), standby cannot serve reads. Read Replicas use asynchronous replication for scaling reads.\n\nSnowball for 10TB-10PB. Snowmobile (shipping container) for 10PB-100PB. Don't confuse scales.",
    "tip": "Intelligent-Tiering = Smart automatic cost optimization. | RDS: Relational, Replicas for Reads, Multi-AZ for Resilience."
  },
  {
    "id": "saa_ff1be593c6",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "lambda",
    "dificultad": 1,
    "pregunta": "A solutions architect needs to schedule a DataSync task to run every day at 2 AM UTC. How can this be configured?",
    "opciones": [
      "DataSync doesn't support scheduling",
      "Use the built-in task scheduling in DataSync",
      "Use EventBridge to trigger DataSync tasks",
      "Use Lambda with cron expressions <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - DataSync has built-in task scheduling - Can schedule hourly, daily, weekly, or custom intervals - No additional services required - EventBridge could also trigger tasks but isn't necessary - Lambda is unnecessary complexity - Scheduling is a native DataSync feature References: AWS DataSync, Task Scheduling </details> ---",
    "explicacion_correcta": "Serverless compute service running code without provisioning/managing servers, auto-scales on demand.\n\nWhen to use: Event-driven architectures, serverless microservices, real-time file processing (S3 triggers), scheduled CRON jobs (EventBridge).\n\nKey differences: EC2 = manage OS, pay for running time. Lambda = abstracted infrastructure, pay for exact execution time. Fargate = serverless containers. Lambda = Function-as-a-Service.",
    "analisis_distractores": "Lambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.\n\nEventBridge is CloudWatch Events v2. Always prefer EventBridge over CloudWatch Events for event routing.",
    "tip": "Lambda = Limit of 15 minutes for serverless code. | Config = Configuration compliance and history."
  },
  {
    "id": "saa_ff32aa372b",
    "materia": "Design Operationally Excellent Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A company wants to migrate lift-and-shift Windows applications to AWS without refactoring. Which compute option is MOST appropriate?",
    "opciones": [
      "AWS Lambda",
      "Amazon ECS",
      "Amazon EC2",
      "AWS Fargate <details> <summary>Show Answer</summary>"
    ],
    "correcta": 2,
    "explicacion": "Explanation: - Amazon EC2 for lift-and-shift migrations - Run Windows Server, install applications as-is - Minimal refactoring required - Full control over OS and configuration Migration Strategies (6 R's):",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nConfig is detective control, does NOT prevent changes. Use SCPs or IAM policies to prevent.",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | Config = Configuration compliance and history."
  },
  {
    "id": "saa_ffdeef53d4",
    "materia": "Design Secure Architectures",
    "tema": "ec2",
    "dificultad": 2,
    "pregunta": "A company needs to monitor and respond to unusual API activity patterns that might indicate compromised credentials. Which service combination is MOST effective?",
    "opciones": [
      "CloudTrail + CloudWatch Logs",
      "GuardDuty + EventBridge + Lambda",
      "Config + SNS",
      "Inspector + Security Hub <details> <summary>Show Answer</summary>"
    ],
    "correcta": 1,
    "explicacion": "Explanation: - GuardDuty uses ML to detect unusual API activity automatically - EventBridge routes findings to automated response - Lambda executes remediation actions - Fully automated threat detection and response Automated Threat Response Architecture: CloudTrail Events (API calls) ↓ GuardDuty (ML-based analysis) ↓ Finding: UnauthorizedAccess:IAMUser/MaliciousIPCaller ↓ EventBridge Rule ↓ Lambda Function ↓ Automated Response: - Isolate instance - Disable credentials - Create snapshot - Send SNS notification - Create support ticket GuardDuty Finding Example: json { \"schemaVersion\": \"2.0\", \"accountId\": \"123456789012\", \"region\": \"us-east-1\", \"partition\": \"aws\", \"id\": \"finding-id\", \"arn\": \"arn:aws:guardduty:...\", \"type\": \"UnauthorizedAccess:IAMUser/MaliciousIPCaller.Custom\", \"service\": { \"serviceName\": \"guardduty\", \"detectorId\": \"detector-id\", \"action\": { \"actionType\": \"AWS_API_CALL\", \"awsApiCallAction\": { \"api\": \"RunInstances\", \"serviceName\": \"ec2.amazonaws.com\", \"callerType\": \"Remote IP\", \"remoteIpDetails\": { \"ipAddressV4\": \"198.51.100.0\", \"organization\": { \"isp\": \"Malicious ISP\" }, \"geoLocation\": { \"lat\": 39.0, \"lon\": -77.0 } } } } }, \"severity\": 8, \"title\": \"API call originated from a known malicious IP address\", \"description\": \"API RunInstances was invoked from a known malicious IP address\" } EventBridge Rule (routes GuardDuty findings): json { \"source\": [\"aws.guardduty\"], \"detail-type\": [\"GuardDuty Finding\"], \"detail\": { \"severity\": [7, 8, 9], \"type\": [ \"UnauthorizedAccess:IAMUser/MaliciousIPCaller\", \"UnauthorizedAccess:IAMUser/InstanceCredentialExfiltration\", \"PrivilegeEscalation:IAMUser/AdministrativePermissions\" ] } } Lambda Response Function (Python example): python import boto3 def lambda_handler(event, context): finding = event['detail'] finding_type = finding['type'] severity = finding['severity'] iam = boto3.client('iam') ec2 = boto3.client('ec2') sns = boto3.client('sns') # Extract compromised credentials if 'resource' in finding: resource = finding['resource'] # If IAM user compromised if resource['resourceType'] == 'AccessKey': access_key_id = resource['accessKeyDetails']['accessKeyId'] user_name = resource['accessKeyDetails']['userName'] # Disable access key iam.update_access_key( UserName=user_name, AccessKeyId=access_key_id, Status='Inactive' ) # Attach deny-all policy iam.attach_user_policy( UserName=user_name, PolicyArn='arn:aws:iam::aws:policy/AWSDenyAll' ) # If EC2 instance compromised elif resource['resourceType'] == 'Instance': instance_id = resource['instanceDetails']['instanceId'] # Create snapshot for forensics volumes = ec2.describe_volumes( Filters=[{'Name': 'attachment.instance-id', 'Values': [instance_id]}] ) for volume in volumes['Volumes']: ec2.create_snapshot( VolumeId=volume['VolumeId'], Description=f'Forensic snapshot - GuardDuty finding {finding[\"id\"]}' ) # Isolate instance (change to quarantine SG) ec2.modify_instance_attribute( InstanceId=instance_id, Groups=['sg-quarantine'] ) # Optionally stop instance ec2.stop_instances(InstanceIds=[instance_id]) # Send notification sns.publish( TopicArn='arn:aws:sns:us-east-1:123456789012:security-alerts', Subject=f'GuardDuty Finding: {finding_type}', Message=f\"\"\" Severity: {severity} Type: {finding_type} Description: {finding['description']} Automated actions taken: - Credentials disabled - Instance isolated - Forensic snapshots created - Security team notified - Create support ticket \"\"\" ) return { 'statusCode': 200, 'body': 'Automated response completed' } Common GuardDuty Finding Types: | Finding Type | Description | Response | |--------------|-------------|----------| | UnauthorizedAccess:IAMUser/MaliciousIPCaller | API calls from malicious IP | Disable credentials | | UnauthorizedAccess:IAMUser/InstanceCredentialExfiltration | Credentials used outside AWS | Rotate credentials | | PrivilegeEscalation:IAMUser/AdministrativePermissions | User gained admin permissions | Revoke permissions | | Persistence:IAMUser/UserPermissions | User created new access keys | Review and delete | | Impact:IAMUser/AnomalousBehavior | Unusual API activity | Investigate | Complete Response Playbook: Detection (GuardDuty): - Continuous monitoring - ML-based anomaly detection - Threat intelligence feeds Routing (EventBridge): - Filter by severity - Route to appropriate response Response (Lambda): - Disable credentials - Isolate resources - Create forensic snapshots - Alert security team - Create incident ticket Investigation (Manual): - Review CloudTrail logs - Analyze scope of compromise - Identify affected resources - Root cause analysis Remediation (Manual/Automated): - Rotate credentials - Update IAM policies - Remove backdoors - Apply security patches - Update security groups Prevention (Long-term): - Implement MFA - Use IAM roles - Enforce least privilege - Regular access reviews - Security training Why This Combination is Best:",
    "explicacion_correcta": "Billing discount (up to 75%) for 1-year or 3-year commitment to specific instance type/region.\n\nWhen to use: Predictable steady-state long-running production workloads running 24/7/365.\n\nKey differences: Tied to specific instance families/regions. Zonal RIs provide capacity reservation. Regional RIs = billing only.",
    "analisis_distractores": "Don't recommend RIs for short-term (3-month) projects or unpredictable workloads. Pay for reservation regardless of usage.\n\nLambda has hard timeout of 15 minutes. For processes taking longer (30 min batch job) → Fargate, Batch, or EC2.\n\nUse SNS+SQS fan-out for reliable task processing (SNS alone can lose messages if endpoint offline).",
    "tip": "Reserved = Reliable Infrastructure for 1 or 3-year Run. | Lambda = Limit of 15 minutes for serverless code."
  }
];
