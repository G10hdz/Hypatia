// inference questions - 6 items (generado por NotebookLM quiz de libreta Codigo MLOps)
window.QUESTIONS_INFERENCE = [
  {
    "id": "mlo_8fada735a8",
    "materia": "inference",
    "tema": "kv-cache",
    "dificultad": 3,
    "pregunta": "When serving Large Language Models (LLMs), a system designer must choose between optimizing for Time to First Token (TTFT) and Time Between Tokens (TBT). Which architectural decision is most likely to improve TBT for high-concurrency workloads at the expense of TTFT for individual requests?",
    "opciones": [
      "Increasing the batch size in a continuous batching environment to maximize hardware utilization.",
      "Implementing a disaggregated prefill-decode (P/D) architecture where prefill and decoding happen on separate nodes.",
      "Applying 4-bit weight-only quantization using a Post-Training Quantization (PTQ) method like GPTQ.",
      "Utilizing speculative decoding with a significantly smaller draft model to predict future tokens."
    ],
    "correcta": 0,
    "explicacion": "Larger batches increase throughput and can lower TBT by utilizing GPU parallelization more effectively, but they increase the compute time for the prefill stage, thereby raising the TTFT.",
    "analisis_distractores": "Opción B: Disaggregation typically improves TTFT by preventing long decoding sequences from blocking new prefill requests (head-of-line blocking).\n\nOpción C: Weight-only quantization primarily reduces memory bandwidth pressure during decoding, which generally improves TBT without specifically trading off TTFT.\n\nOpción D: Speculative decoding reduces the number of serial steps for the large model, improving the overall generation speed (TBT) without necessarily increasing TTFT.",
    "tip": "Think about how hardware utilization and the 'prefill' vs. 'decode' stages interact with queueing effects."
  },
  {
    "id": "mlo_59b64b1b22",
    "materia": "inference",
    "tema": "kv-cache",
    "dificultad": 3,
    "pregunta": "A deployment uses PagedAttention to manage the Key-Value (KV) cache for a model with a 128k context window. If the system encounters significant memory pressure, what is the primary advantage of this block-based management over traditional contiguous allocation?",
    "opciones": [
      "It eliminates external fragmentation by allowing non-contiguous physical memory blocks to be mapped to a single sequence's cache.",
      "It reduces the total compute complexity of the self-attention mechanism from $O(n^2)$ to $O(n)$.",
      "It compresses the KV cache weights using 2-bit quantization, effectively tripling the available memory.",
      "It automatically offloads 'cold' blocks of the KV cache to the CPU DRAM to prevent OOM (Out-of-Memory) errors."
    ],
    "correcta": 0,
    "explicacion": "Traditional allocation requires large chunks of contiguous memory, which often leads to 'external fragmentation' where free space exists but cannot be used for new requests; PagedAttention maps virtual blocks to physical pages regardless of location.",
    "analisis_distractores": "Opción B: PagedAttention is a memory management technique for the KV cache; it does not change the fundamental mathematical complexity of the attention operation.\n\nOpción C: PagedAttention manages how memory is allocated but does not inherently compress the data stored within those blocks.\n\nOpción D: While PagedAttention makes offloading easier, the core advantage cited in system literature is the resolution of fragmentation issues during dynamic allocation.",
    "tip": "Consider the difference between how memory is logically addressed by the model and how it is physically stored on the GPU."
  },
  {
    "id": "mlo_a248abc64b",
    "materia": "inference",
    "tema": "quantization",
    "dificultad": 3,
    "pregunta": "¿Cuáles de las siguientes afirmaciones quantization techniques are specifically designed to minimize accuracy loss by identifying and protecting 'outlier' activations or weights during the compression process son correctas? (elige la combinación)",
    "opciones": [
      "Solo A, B y D",
      "Todas las anteriores",
      "Solo A y B",
      "A y B y C y D"
    ],
    "correcta": 0,
    "explicacion": "AWQ protects the most salient weights (those corresponding to large activations) by scaling them before quantization to preserve critical information.; SmoothQuant migrates the difficulty of quantization from activations to weights by applying a per-channel scaling factor, effectively 'smoothing' out activation outliers.; GPTQ uses the second-order information (Hessian) of the loss function to prioritize the quantization of weights that have the greatest impact on the model's output accuracy.",
    "analisis_distractores": "Todas las anteriores: Incorrecto: C no aplica (GGUF is a file format and container for quantized models, not a specific algorithmic technique for managing outlier importance during the quantization process.)\n\nSolo A y B: Falta D, que también aplica.\n\nA y B y C y D: Incluye C, que no aplica.",
    "tip": "Recall which methods use salience or mathematical gradients to decide which parameters are 'most important' to keep precise."
  },
  {
    "id": "mlo_dfec887920",
    "materia": "inference",
    "tema": "kv-cache",
    "dificultad": 3,
    "pregunta": "FlashAttention improves inference efficiency primarily by being 'IO-aware.' Which mechanism allows it to avoid the standard $O(n^2)$ memory bottleneck of the Softmax operation in traditional attention implementations?",
    "opciones": [
      "Tiling and recomputation within the GPU's fast SRAM to avoid repeatedly reading/writing large attention matrices to the slower HBM.",
      "Approximating the attention scores using a low-rank decomposition of the Query and Key matrices.",
      "Converting the attention scores into a sparse format using a Top-K selection mechanism.",
      "Offloading the KV cache to the host CPU during the computation of the attention tiles."
    ],
    "correcta": 0,
    "explicacion": "FlashAttention breaks the attention matrix into blocks (tiles) that fit into SRAM, computing the Softmax incrementally and only writing the final output back to HBM, reducing memory traffic.",
    "analisis_distractores": "Opción B: FlashAttention is an exact attention mechanism; it does not approximate the results but rather optimizes the implementation to be hardware-aware.\n\nOpción C: Standard FlashAttention computes the full dense attention; sparsity is a different category of optimization (e.g., Sparse MoE or Token Pruning).\n\nOpción D: FlashAttention focuses on optimizing the I/O between GPU HBM and GPU SRAM, not between the GPU and CPU.",
    "tip": "Consider the different levels of the GPU memory hierarchy (HBM vs. SRAM)."
  },
  {
    "id": "mlo_96c1c8d9d2",
    "materia": "inference",
    "tema": "kv-cache",
    "dificultad": 3,
    "pregunta": "A system is running a model using Tensor Parallelism (TP) across two GPUs. During the computation of a single linear layer, what is the most significant communication bottleneck introduced compared to a single-GPU setup?",
    "opciones": [
      "The requirement for an All-Reduce operation to synchronize partial results after every layer's matrix multiplication.",
      "The sequential delay caused by waiting for the first GPU to finish its layer before the second GPU can start (Pipeline bubble).",
      "The overhead of copying the entire model weights across the NVLink interconnect for every request.",
      "The increased latency of loading the KV cache blocks from the CPU host to the secondary GPU."
    ],
    "correcta": 0,
    "explicacion": "In TP, layers are split across GPUs, meaning each GPU calculates only a portion of the output vector; these must be combined (All-Reduce) before moving to the next layer, introducing high-frequency synchronization overhead.",
    "analisis_distractores": "Opción B: This describes the bottleneck of Pipeline Parallelism (PP), not Tensor Parallelism (TP). TP runs operations concurrently across GPUs.\n\nOpción C: Model weights are sharded and stay on their respective GPUs in TP; they are not copied across the interconnect during inference.\n\nOpción D: While KV cache management is complex in distributed settings, the primary 'within-layer' bottleneck of TP is the synchronization of activation results.",
    "tip": "Think about how the output of a split matrix operation must be recombined so that the next layer can process it correctly."
  },
  {
    "id": "mlo_b82dac5e9b",
    "materia": "inference",
    "tema": "fundamentos-nn",
    "dificultad": 3,
    "pregunta": "¿Cuáles de las siguientes afirmaciones are valid serving-level strategies to handle 'unbounded' or very long context inputs without causing immediate Out-of-Memory (OOM) failures son correctas? (elige la combinación)",
    "opciones": [
      "Solo A, B y C",
      "Todas las anteriores",
      "Solo A y B",
      "A y B y C y D"
    ],
    "correcta": 0,
    "explicacion": "Sliding windows limit the active KV cache to a fixed number of recent tokens, ensuring that memory usage stays constant regardless of the total sequence length.; RadixAttention allows the system to evict and re-fetch parts of the context efficiently by treating the cache as a tree of shared prefixes.; By reducing the number of tokens that need to be stored in the KV cache, compression techniques directly mitigate memory pressure from long contexts.",
    "analisis_distractores": "Todas las anteriores: Incorrecto: D no aplica (The choice of sampling strategy affects the quality and variety of text but does not significantly impact the memory required for the context window.)\n\nSolo A y B: Falta C, que también aplica.\n\nA y B y C y D: Incluye D, que no aplica.",
    "tip": "Focus on methods that either limit the number of active tokens or reduce the footprint of each stored token."
  }
];
