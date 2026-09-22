// fundamentos questions - 8 items (generado por NotebookLM quiz de libreta Codigo MLOps)
window.QUESTIONS_FUNDAMENTOS = [
  {
    "id": "mlo_6c1419a5cc",
    "materia": "fundamentos",
    "tema": "batching",
    "dificultad": 3,
    "pregunta": "A developer is manually implementing a backward pass for a 2-layer MLP with BatchNorm. If they observe that the gradients for the first linear layer are consistently near zero while the weights in the second layer are updating normally, which of the following is the most likely cause related to activation statistics?",
    "opciones": [
      "The activations entering the non-linear layer have a variance that is too high, causing most units to saturate in the flat regions of the tanh or sigmoid function.",
      "The learning rate is too high, causing the weights to oscillate and the loss function to enter a local minima where the gradient is zero.",
      "The embedding table is too small, which creates a bottleneck that prevents the backpropagation of the negative log likelihood signal.",
      "The BatchNorm layer is subtracting the mean incorrectly, leading to a shift in the distribution that favors the linear region of the activation function."
    ],
    "correcta": 0,
    "explicacion": "High variance in activations before a squashing function like tanh leads to saturation where the local derivative is near zero, effectively killing the gradient flow to earlier layers during backpropagation.",
    "analisis_distractores": "Opción B: A high learning rate typically causes divergence or large updates rather than a selective 'vanishing' of gradients in only the earlier layers while later layers remain stable.\n\nOpción C: While a small embedding might limit model capacity, it does not mechanically cause the vanishing gradient effect observed in deeper layers of the compute graph.\n\nOpción D: Favoring the linear region of an activation function would actually maintain healthy gradient flow; saturation occurs in the non-linear 'tails' of the function.",
    "tip": "Consider the effect of high-magnitude inputs on the derivative of 'squashing' functions."
  },
  {
    "id": "mlo_cdec964336",
    "materia": "fundamentos",
    "tema": "agents",
    "dificultad": 3,
    "pregunta": "In the construction of a 'minimal' Generative AI agent loop built from scratch (without frameworks), which components are functionally essential to prevent a 'retry trap' when a tool execution fails son correctas? (elige la combinación)",
    "opciones": [
      "Solo A, B y C",
      "Todas las anteriores",
      "Solo A y B",
      "A y B y C y D"
    ],
    "correcta": 0,
    "explicacion": "Without the error feedback in the context, the model lacks the information required to reason about the failure and will likely repeat the exact same invalid tool call.; Agents can enter infinite while loops if they cannot solve a problem; a hard limit is a critical safety and cost-control measure in production systems.; Rules in the system prompt can be ignored or 'drift' in long transcripts; code-level checks ensure the rule is physically applied regardless of model attention.",
    "analisis_distractores": "Todas las anteriores: Incorrecto: D no aplica (While helpful for long-term improvement, a vector database is not a functional requirement to break a local retry trap within a single session.)\n\nSolo A y B: Falta C, que también aplica.\n\nA y B y C y D: Incluye D, que no aplica.",
    "tip": "Focus on the feedback loop and the limitations of model 'attention' to system instructions."
  },
  {
    "id": "mlo_7ca785ec87",
    "materia": "fundamentos",
    "tema": "kv-cache",
    "dificultad": 3,
    "pregunta": "When scaling inference for LLMs with extremely long reasoning chains (Chain-of-Thought), which hardware-level bottleneck is most directly addressed by the implementation of PagedAttention?",
    "opciones": [
      "KV cache memory fragmentation and waste due to pre-allocating large contiguous blocks for maximum sequence lengths.",
      "The quadratic complexity of the self-attention mechanism relative to the input prompt length.",
      "The latency overhead incurred by the sequential nature of autoregressive decoding.",
      "The I/O bandwidth limit between the CPU and GPU during weight offloading."
    ],
    "correcta": 0,
    "explicacion": "PagedAttention allows for non-contiguous storage of the KV cache in memory pages, maximizing utilization by avoiding 'over-reservation' for tokens that haven't been generated yet.",
    "analisis_distractores": "Opción B: Linearizing attention complexity is typically the goal of FlashAttention or SSMs, whereas PagedAttention focuses on memory management.\n\nOpción C: Sequential decoding latency is usually addressed by speculative decoding or parallel sampling, not by the memory partitioning of the cache.\n\nOpción D: Offloading weight bottlenecks are mitigated by quantization or faster interconnects; PagedAttention is a GPU-resident memory optimization.",
    "tip": "Consider how memory is allocated for 'future' tokens in a sequence."
  },
  {
    "id": "mlo_dd107b4201",
    "materia": "fundamentos",
    "tema": "monitoring",
    "dificultad": 3,
    "pregunta": "¿Cuáles de las siguientes afirmaciones metrics are essential for evaluating the performance and reliability of a Retrieval Augmented Generation (RAG) system son correctas? (elige la combinación)",
    "opciones": [
      "Solo A, B y C",
      "Todas las anteriores",
      "Solo A y B",
      "A y B y C y D"
    ],
    "correcta": 0,
    "explicacion": "High precision ensures the model isn't confused by irrelevant data in the retrieved chunks.; Faithfulness is the core metric for verifying that the RAG system is actually using the provided data rather than pre-existing model bias.; Recall identifies failures in the retrieval step where the relevant data exists in the database but wasn't surfaced.",
    "analisis_distractores": "Todas las anteriores: Incorrecto: D no aplica (Perplexity is a general language modeling metric and does not measure the specific effectiveness of the retrieval/context integration in a RAG pipeline.)\n\nSolo A y B: Falta C, que también aplica.\n\nA y B y C y D: Incluye D, que no aplica.",
    "tip": "Focus on the relationship between the retrieved evidence and the generated answer."
  },
  {
    "id": "mlo_2a65a4dc81",
    "materia": "fundamentos",
    "tema": "fundamentos-nn",
    "dificultad": 3,
    "pregunta": "Why is the use of 'log probabilities' preferred over raw probabilities when calculating the loss for a classification task like character-level language modeling?",
    "opciones": [
      "Multiplying many small raw probability values leads to numerical underflow where the result rounds to zero.",
      "Logarithms are computationally faster to compute than standard multiplication for deep learning hardware.",
      "Raw probabilities are non-differentiable, making it impossible to perform backpropagation.",
      "The log function scales the gradients to be larger, which automatically prevents the vanishing gradient problem."
    ],
    "correcta": 0,
    "explicacion": "Probabilities are values between 0 and 1; multiplying them for a sequence of 1000 tokens would result in a number far smaller than standard floating-point precision can represent.",
    "analisis_distractores": "Opción B: Hardware is actually optimized for multiplication; the use of logs is primarily for numerical stability and simplifying the math of the derivative.\n\nOpción C: Probabilities (via softmax) are differentiable; logs just turn the product into a sum, which is more stable for gradients.\n\nOpción D: While logs change the gradient's scale, they do not inherently solve vanishing gradients, which are caused by the architecture and activations.",
    "tip": "Think about what happens when you multiply the number $0.1$ by itself several hundred times."
  },
  {
    "id": "mlo_e57d460ebd",
    "materia": "fundamentos",
    "tema": "batching",
    "dificultad": 3,
    "pregunta": "Which strategies are effective for optimizing inference throughput in multi-user production environments where requests arrive at different times and have varying lengths son correctas? (elige la combinación)",
    "opciones": [
      "Solo A, B y C",
      "Todas las anteriores",
      "Solo A y B",
      "A y B y C y D"
    ],
    "correcta": 0,
    "explicacion": "Continuous batching reduces the idle time of the GPU by not waiting for every request in a batch to finish before starting new ones.; Lower precision weights allow for faster loading from memory and fitting larger batches into a single GPU's VRAM.; This improves throughput by generating multiple tokens per 'expensive' forward pass of the main model.",
    "analisis_distractores": "Todas las anteriores: Incorrecto: D no aplica (Fixed-size padding is inefficient and wasteful (padding tokens still require compute); dynamic batching or PagedAttention are superior methods.)\n\nSolo A y B: Falta C, que también aplica.\n\nA y B y C y D: Incluye D, que no aplica.",
    "tip": "Look for methods that maximize GPU utilization and reduce memory bottlenecks."
  },
  {
    "id": "mlo_47cf0e86ef",
    "materia": "fundamentos",
    "tema": "general",
    "dificultad": 3,
    "pregunta": "What is the primary motivation for using 'Rejection Sampling' during the preference alignment phase of LLM training?",
    "opciones": [
      "To generate 'on-policy' data where the model itself produces multiple candidate answers, which are then ranked by a reward model.",
      "To filter out toxic content from the pre-training dataset using a hard threshold.",
      "To increase the variety of the dataset by rejecting any samples that are semantically similar to the training set.",
      "To prevent the model from learning from incorrect human labels provided in the instruction-tuning phase."
    ],
    "correcta": 0,
    "explicacion": "On-policy data ensures the training signal is based on the actual current behaviors of the model, leading to more stable and effective alignment.",
    "analisis_distractores": "Opción B: Rejection sampling in this context refers to post-training preference data, not initial pre-training dataset filtering.\n\nOpción C: The goal is to select the 'best' response from a set of generated options for alignment, not necessarily to maximize novelty relative to the training set.\n\nOpción D: Rejection sampling uses a separate scorer (model-based) to identify high-quality outputs rather than correcting existing human labels.",
    "tip": "Consider the benefit of the model learning from its own varied outputs compared to external static data."
  },
  {
    "id": "mlo_1e3db077ba",
    "materia": "fundamentos",
    "tema": "fundamentos-nn",
    "dificultad": 3,
    "pregunta": "Which architectural techniques have been proposed as alternatives to the standard Transformer to achieve linear-time processing of long sequences son correctas? (elige la combinación)",
    "opciones": [
      "Solo A, B y C",
      "Todas las anteriores",
      "Solo A y B",
      "A y B y C y D"
    ],
    "correcta": 0,
    "explicacion": "SSMs treat the input as a continuous state that evolves, avoiding the quadratic cost of full self-attention.; RWKV is a hybrid architecture that combines the parallelizable training of Transformers with the efficient inference of RNNs.; RetNet uses a retention mechanism that scales linearly with sequence length while maintaining performance similar to Transformers.",
    "analisis_distractores": "Todas las anteriores: Incorrecto: D no aplica (LSTMs are traditional RNNs; while efficient at inference, they lack the specific 'linear-time attention' innovations of the modern architectures listed.)\n\nSolo A y B: Falta C, que también aplica.\n\nA y B y C y D: Incluye D, que no aplica.",
    "tip": "Identify modern architectures mentioned as 'alternatives' that move away from quadratic attention."
  }
];
