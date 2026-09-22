// serving questions - 6 items (generado por NotebookLM quiz de libreta Codigo MLOps)
window.QUESTIONS_SERVING = [
  {
    "id": "mlo_1a42a6d9c0",
    "materia": "serving",
    "tema": "kv-cache",
    "dificultad": 3,
    "pregunta": "A system architect is designing a high-scale LLM serving infrastructure and decides to implement PD (Prefill/Decode) Disaggregation. What is the primary operational advantage of this deployment pattern compared to standard combined processing?",
    "opciones": [
      "It allows for independent scaling of compute resources to optimize for the distinct computational profiles of prompt processing and token generation.",
      "It eliminates the need for KV cache management by storing all activations in the model's weights.",
      "It reduces the total memory footprint of the model by half by sharing layers between the prefill and decode instances.",
      "It ensures that TTFT (Time To First Token) is always identical to the TBT (Time Between Tokens) by synchronizing the parallel pipelines."
    ],
    "correcta": 0,
    "explicacion": "Prefill is typically compute-bound while decoding is memory-bandwidth bound; separating them allows infrastructure to be tailored to the specific bottlenecks of each phase, improving overall 'goodput'.",
    "analisis_distractores": "Opción B: KV cache is essential for efficient autoregressive decoding and is not replaced by disaggregation; rather, it often requires sophisticated streaming between the prefill and decode nodes.\n\nOpción C: Disaggregation typically increases or maintains the memory footprint because the model parameters must be present on both the prefill and the decode nodes to execute the respective phases.\n\nOpción D: Prefill (TTFT) and decoding (TBT) have inherently different latencies due to the number of tokens processed per forward pass; disaggregation manages these differences rather than equalizing them.",
    "tip": "Consider how the hardware requirements for processing a batch of input tokens differ from generating tokens one-by-one."
  },
  {
    "id": "mlo_2e78283943",
    "materia": "serving",
    "tema": "kv-cache",
    "dificultad": 3,
    "pregunta": "¿Cuáles de las siguientes afirmaciones optimization techniques are specifically utilized by high-performance inference engines like $vLLM$, $TensorRT-LLM$, or $BentoML$ to maximize GPU utilization and throughput for LLM workloads son correctas? (elige la combinación)",
    "opciones": [
      "Solo A, B y C",
      "Todas las anteriores",
      "Solo A y B",
      "A y B y C y D"
    ],
    "correcta": 0,
    "explicacion": "This technique allows new requests to be inserted into a batch as soon as others finish, rather than waiting for an entire static batch to complete.; By partitioning the KV cache into non-contiguous memory blocks, PagedAttention virtually eliminates internal fragmentation and allows for more efficient memory usage.; Dynamic batching groups incoming requests over a short window to process them together, increasing the arithmetic intensity and throughput of the inference server.",
    "analisis_distractores": "Todas las anteriores: Incorrecto: D no aplica (High-performance engines typically move away from $FP32$ toward lower precision like $FP16$, $BF16$, or $INT8$ to reduce memory bandwidth bottlenecks and increase speed.)\n\nSolo A y B: Falta C, que también aplica.\n\nA y B y C y D: Incluye D, que no aplica.",
    "tip": "Identify strategies that address the 'memory-bound' nature of LLM decoding or the 'head-of-line' blocking problem in batching."
  },
  {
    "id": "mlo_fec9a92b1c",
    "materia": "serving",
    "tema": "serving",
    "dificultad": 3,
    "pregunta": "When deploying a stateful LLM application using Ray Serve, why might a developer choose to implement the service logic using a Ray Actor rather than a Ray Task?",
    "opciones": [
      "Actors provide persistent worker processes that can maintain internal state, such as a loaded model in GPU memory, across multiple inference requests.",
      "Actors are stateless functions that can be automatically replicated across the cluster more easily than Tasks.",
      "Actors execute exclusively on the head node, ensuring higher security for sensitive model weights.",
      "Actors automatically convert all Python code into $C++$ for faster execution compared to standard Ray Tasks."
    ],
    "correcta": 0,
    "explicacion": "Ray Actors are stateful entities that reside on a worker node, allowing them to hold large objects like models in memory to avoid the overhead of reloading for every request.",
    "analisis_distractores": "Opción B: Tasks are the stateless abstraction in Ray, while Actors are specifically intended for stateful worker processes.\n\nOpción C: Actors can and should be scheduled across worker nodes to leverage the distributed nature of the cluster; they are not restricted to the head node.\n\nOpción D: Ray provides a distributed runtime for Python; it does not perform source-to-source translation of Python logic into $C++$ purely by switching to an Actor abstraction.",
    "tip": "Focus on the need to keep large models resident in VRAM between sequential user queries."
  },
  {
    "id": "mlo_1f7c8027e9",
    "materia": "serving",
    "tema": "cicd",
    "dificultad": 3,
    "pregunta": "In a mature MLOps CI/CD pipeline, such as the one described for the 'Made-With-ML' project, what is the significance of the 'Serve Workflow' being triggered by a merge into the 'main' branch?",
    "opciones": [
      "It ensures that only models that have passed evaluation and been approved via a Pull Request are rolled out to the production environment.",
      "It triggers a new hyperparameter tuning job to find a better model before serving the current one.",
      "It deletes all existing model registries to save storage costs before the new deployment.",
      "It initiates the raw data collection process from external APIs to retrain the model from scratch."
    ],
    "correcta": 0,
    "explicacion": "Merging to 'main' acts as the final gate in the automation process, ensuring that production code and models have undergone testing and peer review.",
    "analisis_distractores": "Opción B: Tuning typically happens earlier in the experimentation or 'workloads' phase; the serving rollout is meant for the validated 'best' model.\n\nOpción C: Model registries are used for versioning and tracking; deleting them would break the history and rollback capabilities of the MLOps system.\n\nOpción D: A serving workflow focuses on deployment; data collection and retraining are part of the 'upstream' training pipeline or scheduled cron jobs.",
    "tip": "Consider the relationship between version control branches (dev vs. main) and environment promotion (staging vs. production)."
  },
  {
    "id": "mlo_0d229cfffc",
    "materia": "serving",
    "tema": "agents",
    "dificultad": 3,
    "pregunta": "The Model Context Protocol (MCP) is described as an open standard for connecting AI models to external data sources. ¿Cuáles de las siguientes afirmaciones are components or benefits of implementing an MCP-based architecture for LLM agents son correctas? (elige la combinación)",
    "opciones": [
      "Solo A, B y D",
      "Todas las anteriores",
      "Solo A y B",
      "A y B y C y D"
    ],
    "correcta": 0,
    "explicacion": "MCP servers provide a standardized interface for agents to access tools, files, and databases without custom integration for every new source.; The client-server architecture of MCP allows a single agent (client) to pull from many specialized data providers (servers) simultaneously.; Standardizing tool-use is a primary goal of MCP, enabling 'Model-in-the-middle' patterns where the model decides which standardized tool to call.",
    "analisis_distractores": "Todas las anteriores: Incorrecto: C no aplica (MCP provides external context to the model at runtime; it does not alter the underlying model weights through training or fine-tuning.)\n\nSolo A y B: Falta D, que también aplica.\n\nA y B y C y D: Incluye C, que no aplica.",
    "tip": "Look for descriptions of how this protocol handles the interaction between the LLM and the 'wider digital ecosystem.'"
  },
  {
    "id": "mlo_c0548d974d",
    "materia": "serving",
    "tema": "kv-cache",
    "dificultad": 3,
    "pregunta": "What is the primary technical challenge addressed by 'Prefix Caching' (or RadixAttention) in a multi-turn RAG (Retrieval-Augmented Generation) serving scenario?",
    "opciones": [
      "It reduces redundant computation and latency by storing and reusing the KV cache for the common system prompts or retrieved documents across different queries.",
      "It automatically translates the user's query into multiple languages to increase the diversity of retrieved results.",
      "It compresses the model weights by a factor of $4\\times$ by using a custom prefix-tree based quantization algorithm.",
      "It forces the model to ignore the system prompt to ensure the output is purely based on the retrieved documentation."
    ],
    "correcta": 0,
    "explicacion": "In multi-turn conversations or RAG, the same prefix (instructions/context) is often sent repeatedly; caching the KV values for this prefix prevents the GPU from having to re-calculate them for every turn.",
    "analisis_distractores": "Opción B: Query translation is a retrieval optimization technique (Query Expansion), but prefix caching specifically addresses computational redundancy in the LLM forward pass.\n\nOpción C: Quantization deals with weight/activation bit-width; prefix caching deals with the 'activations' (KV cache) generated during the prefill phase.\n\nOpción D: Prefix caching makes processing the system prompt faster and more efficient; it does not cause the model to ignore it.",
    "tip": "Think about what parts of a prompt stay the same across multiple interactions in a chat or search system."
  }
];
