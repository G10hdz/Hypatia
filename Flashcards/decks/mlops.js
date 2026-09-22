window.FLASHCARD_DECKS = window.FLASHCARD_DECKS || {};
window.FLASHCARD_DECKS["mlops"] = {
 "title": "Inference Flashcards",
 "cards": [
  {
   "front": "What are the three core layers of inference engineering according to Philip Kiely?",
   "back": "The three layers are the Runtime, Infrastructure, and Tooling layers."
  },
  {
   "front": "Term: Quantization",
   "back": "The process of reducing the precision of model weights to minimize memory usage and accelerate inference."
  },
  {
   "front": "What is the primary advantage of 'continuous batching' in LLM inference?",
   "back": "It maximizes GPU throughput by allowing new requests to enter the batch as soon as any sequence finishes a token generation."
  },
  {
   "front": "The technique of storing previous token representations to avoid redundant calculations during autoregressive generation is called the _____.",
   "back": "KV Cache"
  },
  {
   "front": "What is the role of 'Data Version Control' (DVC) in the MLOps lifecycle?",
   "back": "It tracks and versions large datasets and model files that are too large for standard Git repositories."
  },
  {
   "front": "Concept: MLflow Model Registry",
   "back": "A centralized store for managing the full lifecycle of ML models, including versioning and stage transitions."
  },
  {
   "front": "In the context of LLM architecture, how does 'Flash Attention' improve performance?",
   "back": "It optimizes memory access to transform the attention mechanism's complexity from quadratic to linear."
  },
  {
   "front": "What defines a 'Generative AI Agent'?",
   "back": "An autonomous system that uses a language model to reason, plan, and execute tasks via external tools."
  },
  {
   "front": "The minimal architectural loop of an AI agent, consisting of reasoning, tool execution, and observation, is often implemented as a _____.",
   "back": "While loop"
  },
  {
   "front": "Term: LangGraph",
   "back": "A framework for building modular, stateful, and graph-based multi-agent workflows."
  },
  {
   "front": "What is the 'Model Context Protocol' (MCP)?",
   "back": "An open standard that enables seamless integration between AI models and external data sources or tools."
  },
  {
   "front": "What is the purpose of 'Dynamic Batching' in a serving stack like BentoML?",
   "back": "It groups individual inference requests into a single batch at the server level to improve hardware utilization."
  },
  {
   "front": "Concept: Bento",
   "back": "A standardized, deployable archive in BentoML containing model code, dependencies, and configurations."
  },
  {
   "front": "In MLOps, what does 'Drift Detection' monitor?",
   "back": "It identifies changes in data distributions or model performance over time that may require retraining."
  },
  {
   "front": "What is 'PD Disaggregation' in LLM serving systems?",
   "back": "The physical separation of the Prefill phase and the Decoding phase onto different compute resources to optimize latency."
  },
  {
   "front": "Term: PagedAttention",
   "back": "A memory management technique that stores KV cache in non-contiguous memory blocks to eliminate fragmentation."
  },
  {
   "front": "What is 'Speculative Decoding'?",
   "back": "A technique where a small draft model predicts tokens that are subsequently verified in parallel by a larger target model."
  },
  {
   "front": "How does 'Direct Preference Optimization' (DPO) differ from traditional RLHF?",
   "back": "It optimizes the model directly on preference data without requiring the training of a separate reward model."
  },
  {
   "front": "In RAG systems, what is the function of an 'Embedding Model'?",
   "back": "It converts text chunks into high-dimensional numerical vectors for semantic similarity searches."
  },
  {
   "front": "What is 'Feature Materialization' in a Feature Store like Feast?",
   "back": "The process of moving feature data from offline storage to an online store for low-latency serving."
  },
  {
   "front": "Term: Ray Serve",
   "back": "A scalable and programmable serving library for building complex inference pipelines across distributed clusters."
  },
  {
   "front": "What is the primary focus of 'Inference Engineering' as a discipline?",
   "back": "Serving generative AI models in production faster, cheaper, and more reliably."
  },
  {
   "front": "In a CI/CD pipeline for ML, what is the role of 'CML' (Continuous Machine Learning)?",
   "back": "It automates the generation of model performance reports and visualizations directly within pull request comments."
  },
  {
   "front": "Concept: Multi-Query Attention (MQA)",
   "back": "An attention variant where multiple query heads share a single key and value head to reduce KV cache size."
  },
  {
   "front": "What is 'Knowledge Distillation' in the context of LLMs?",
   "back": "The process of training a smaller 'student' model to mimic the behavior and outputs of a larger 'teacher' model."
  },
  {
   "front": "In the MLOps lifecycle, what is a 'Feature View'?",
   "back": "A logical grouping of feature data and metadata defined within a feature store."
  },
  {
   "front": "What is the goal of 'A/B Testing' in model deployment?",
   "back": "Comparing the performance of two different model versions by routing portions of live traffic to each."
  },
  {
   "front": "Term: KServe",
   "back": "A Kubernetes-based standard for highly scalable and performant model serving."
  },
  {
   "front": "What is 'Low-Rank Decomposition' (SVD) used for in model optimization?",
   "back": "Factorizing weight matrices into smaller components to reduce computational density and latency."
  },
  {
   "front": "In agentic systems, what is the 'Observation' phase?",
   "back": "The step where the agent analyzes the results or feedback from a tool execution to decide the next action."
  },
  {
   "front": "What does the 'Runtime' layer of an inference stack manage?",
   "back": "The execution of model graphs, including kernel optimizations and hardware-specific acceleration."
  },
  {
   "front": "In MLOps, 'GitOps' refers to using _____ as the single source of truth for infrastructure and deployment configurations.",
   "back": "Git repositories"
  },
  {
   "front": "What is 'Chunked Prefill'?",
   "back": "An optimization that splits long prompt processing into smaller chunks to prevent stalls in the decoding of other requests."
  },
  {
   "front": "Term: Model Parallelism",
   "back": "Splitting a single model's layers or operations across multiple GPUs to handle models larger than a single device's memory."
  },
  {
   "front": "What is the 'Prefill' phase in LLM inference?",
   "back": "The initial step where the model processes the entire input prompt in parallel to generate the first token."
  },
  {
   "front": "In RAG, what is 'Context Precision'?",
   "back": "An evaluation metric measuring how relevant the retrieved documents are to the user's specific query."
  },
  {
   "front": "What is the purpose of 'Argo Workflows' in a Kubernetes-based MLOps stack?",
   "back": "To orchestrate complex, multi-stage machine learning pipelines as containerized steps."
  },
  {
   "front": "Concept: Semantic Chunking",
   "back": "Dividing documents into segments based on meaningful thematic breaks rather than fixed character counts."
  },
  {
   "front": "What is 'Tensor Parallelism'?",
   "back": "A distributed computing strategy where individual tensor operations, such as matrix multiplications, are split across multiple devices."
  },
  {
   "front": "Term: MLflow Autologging",
   "back": "A feature that automatically captures metrics, parameters, and artifacts from common ML libraries during training."
  },
  {
   "front": "What is 'Prometheus' used for in MLOps monitoring?",
   "back": "Collecting and storing real-time time-series metrics from deployed models and infrastructure."
  },
  {
   "front": "In inference engineering, the ratio of floating-point operations to data movement is known as _____.",
   "back": "Arithmetic Intensity"
  },
  {
   "front": "What is 'DynaLLM' designed for?",
   "back": "Optimizing LLM inference clusters for both performance and energy efficiency."
  },
  {
   "front": "Concept: Re-ranking",
   "back": "The post-processing step in RAG where a specialized model scores and reorders retrieved documents to improve relevance."
  },
  {
   "front": "What is 'Canary Deployment'?",
   "back": "A rollout strategy where a new model is initially deployed to a very small subset of users before a full release."
  },
  {
   "front": "In Agent protocols, what is 'Agent2Agent' (A2A)?",
   "back": "A proposed standard for communication and interoperability between different autonomous agents."
  },
  {
   "front": "What is 'INT8 Quantization'?",
   "back": "Converting 32-bit floating-point weights into 8-bit integers to reduce model size by roughly $75\\%$."
  },
  {
   "front": "Term: Prompt Engineering",
   "back": "The practice of crafting specific inputs to guide a model toward more accurate or structured outputs."
  },
  {
   "front": "What is 'Hybrid Retrieval'?",
   "back": "Combining semantic vector search with traditional keyword-based search to improve document recall."
  },
  {
   "front": "In the MLOps lifecycle, 'Stratified Cross-Validation' ensures that each fold maintains the same _____.",
   "back": "Class distribution"
  },
  {
   "front": "What is 'Grouped-Query Attention' (GQA)?",
   "back": "An attention mechanism that balances performance and memory by grouping multiple query heads per key-value head."
  },
  {
   "front": "Term: vLLM",
   "back": "A high-throughput LLM inference and serving library powered by PagedAttention."
  },
  {
   "front": "What is 'Self-Healing Codebase' in an agentic workflow?",
   "back": "An automated process where an agent detects errors in a code repository and generates fixes autonomously."
  },
  {
   "front": "Concept: Agent Memory",
   "back": "The integration of short-term (context window) and long-term (vector store) storage to maintain consistency across interactions."
  },
  {
   "front": "What is the primary function of an 'API Gateway' in inference infrastructure?",
   "back": "Providing a single entry point for routing, authentication, and load balancing across multiple backend models."
  },
  {
   "front": "In the context of 'Pre-commit hooks,' what is the goal of 'Linting'?",
   "back": "Analyzing source code to flag programming errors, bugs, stylistic errors, and suspicious constructs automatically."
  },
  {
   "front": "Term: Scalability in Inference",
   "back": "The ability of an engine to operate effectively across edge devices, single servers, and multi-node deployments."
  },
  {
   "front": "What is 'EAGLE' in the context of speculative decoding?",
   "back": "A multi-token speculative decoding algorithm that uses feature-level drafts to accelerate text generation."
  },
  {
   "front": "In MLOps, 'HashiCorp Vault' is commonly used to store _____.",
   "back": "Secrets and sensitive credentials"
  },
  {
   "front": "What is the 'Infrastructure' layer of inference engineering responsible for?",
   "back": "Managing clusters, autoscaling, load balancing, and multi-cloud orchestration."
  },
  {
   "front": "Concept: DSPy",
   "back": "A framework for programmatically optimizing prompts and model weights based on automated evaluations."
  },
  {
   "front": "What is the purpose of 'Health Checks' in ML containers?",
   "back": "To ensure the inference service is fully initialized and ready to accept traffic before routing requests to it."
  },
  {
   "front": "Term: PPO (Proximal Policy Optimization)",
   "back": "A reinforcement learning algorithm used to update model policies iteratively while staying close to the initial behavior."
  },
  {
   "front": "In RAG, 'Faithfulness' measures whether the generated answer is _____.",
   "back": "Grounded in the retrieved context documents"
  },
  {
   "front": "What is 'Triton' in the context of model serving?",
   "back": "An open-source inference serving software that supports multiple model formats and high-performance execution."
  },
  {
   "front": "In MLOps, what is the 'Champion-Challenger' model?",
   "back": "A testing strategy where a new 'challenger' model is compared against the current production 'champion' model."
  }
 ]
};
