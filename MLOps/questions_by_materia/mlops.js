// mlops questions - 6 items (generado por NotebookLM quiz de libreta Codigo MLOps)
window.QUESTIONS_MLOPS = [
  {
    "id": "mlo_67d41240c2",
    "materia": "mlops",
    "tema": "monitoring",
    "dificultad": 3,
    "pregunta": "An engineering team is using Git for code versioning and DVC for data versioning. They discover that a specific model performance cannot be reproduced despite having the exact Git commit. Which of the following root causes represents the most likely failure in their MLOps workflow integration?",
    "opciones": [
      "The .dvc files were tracked by Git, but the corresponding data hashes in those files were not manually updated before the Git commit.",
      "The Git commit captured the code state, but the DVC push command was not executed, leaving the remote storage out of sync with the .dvc metadata pointers in the repository.",
      "The team used a Python virtual environment instead of a Docker container, leading to library version drift in the underlying OS.",
      "The model was registered in the MLflow Model Registry but the 'production' tag was moved to a newer version without a corresponding Git tag."
    ],
    "correcta": 1,
    "explicacion": "Git only tracks the .dvc metadata file; if the actual data is not pushed to remote storage (S3/GCS), other environments cannot pull the specific version of the dataset required to reproduce the result.",
    "analisis_distractores": "Opción A: DVC updates the hashes in .dvc files automatically when 'dvc add' is called; the failure is usually at the synchronization layer between the metadata and the actual remote storage.\n\nOpción C: While environment drift is a problem, the question specifically asks about the integration failure between Git and DVC in the context of data/code versioning.\n\nOpción D: Moving tags in a Model Registry affects deployment, but reproduction of a specific experiment depends on the alignment of code and data versions, not registry status.",
    "tip": "Consider the relationship between the small metadata file Git sees and the large binary files stored elsewhere."
  },
  {
    "id": "mlo_bc901766f3",
    "materia": "mlops",
    "tema": "batching",
    "dificultad": 3,
    "pregunta": "When scaling Large Language Models (LLMs) across a cluster of GPUs, which of the following statements accurately describe the trade-offs between different parallelism strategies son correctas? (elige la combinación)",
    "opciones": [
      "Solo A, B y D",
      "Todas las anteriores",
      "Solo A y B",
      "A y B y C y D"
    ],
    "correcta": 0,
    "explicacion": "TP requires frequent synchronization (All-Reduce) after every matrix multiplication, making it sensitive to intra-node interconnect speeds.; Because layers are split sequentially across devices, the start-up and drain phases of the pipeline inevitably leave some hardware underutilized.; FSDP shards parameters, gradients, and optimizer states, pre-fetching the required shards for the next layer while the current one is being processed.",
    "analisis_distractores": "Todas las anteriores: Incorrecto: C no aplica (Standard DP requires each GPU to hold the full model; if the model exceeds one GPU's memory, DP cannot be used without model parallelism (TP/PP).)\n\nSolo A y B: Falta D, que también aplica.\n\nA y B y C y D: Incluye C, que no aplica.",
    "tip": "Think about where the model is split (within a layer vs. between layers) and the resulting synchronization needs."
  },
  {
    "id": "mlo_c08bae98c8",
    "materia": "mlops",
    "tema": "latency",
    "dificultad": 3,
    "pregunta": "A data engineer is configuring a Feast feature store for a real-time fraud detection system. They need to ensure that the features used during model training match the features retrieved during low-latency inference. Which Feast operation is critical for moving features from the offline warehouse to the online storage to enable this?",
    "opciones": [
      "Materialization",
      "Registry Sync",
      "Point-in-time Join",
      "Feature Discovery"
    ],
    "correcta": 0,
    "explicacion": "Materialization is the process of loading feature data from the offline store (used for training) into the online store (used for real-time serving).",
    "analisis_distractores": "Opción B: Registry sync only updates the metadata definitions of features, not the actual data values required for inference.\n\nOpción C: Point-in-time joins are used in the offline store to create training datasets without data leakage; they do not move data to the online store.\n\nOpción D: Discovery is the process of locating existing features in the registry, not the movement of data between storage tiers.",
    "tip": "Look for the term that describes the transition of data from historical logs to a fast-access KV store."
  },
  {
    "id": "mlo_b63a4a23f9",
    "materia": "mlops",
    "tema": "kv-cache",
    "dificultad": 3,
    "pregunta": "In the design of generative AI agents, which of the following are inherent risks of the 'While Loop' architecture where an agent autonomously calls tools until a goal is reached son correctas? (elige la combinación)",
    "opciones": [
      "Solo A, B y C",
      "Todas las anteriores",
      "Solo A y B",
      "A y B y C y D"
    ],
    "correcta": 0,
    "explicacion": "Without explicit logic to detect repetition or limit turns, agents can become stuck in loops if a tool doesn't return the expected result.; Every iteration adds to the prompt; long-running loops can lead to the loss of initial instructions or failure due to token limits.; If a tool returns an unexpected format, the agent may crash or hallucinate unless a 'self-correction' or 'human-in-the-loop' check is implemented.",
    "analisis_distractores": "Todas las anteriores: Incorrecto: D no aplica (LLM agents generally use frozen weights during inference; 'learning' in this context refers to in-context learning, not parameter updates.)\n\nSolo A y B: Falta C, que también aplica.\n\nA y B y C y D: Incluye D, que no aplica.",
    "tip": "Consider what happens when an autonomous loop lacks termination conditions or handles errors poorly."
  },
  {
    "id": "mlo_11c6256b6d",
    "materia": "mlops",
    "tema": "cicd",
    "dificultad": 3,
    "pregunta": "When deploying a multi-model pipeline using Ray Serve, an architect chooses 'Actors' over 'Tasks' for the model inference stage. What is the primary technical justification for this choice?",
    "opciones": [
      "Actors allow the model weights to be loaded into memory once and reused across multiple requests, avoiding the overhead of reloading for every task.",
      "Actors are stateless and can be automatically garbage collected after every execution, reducing memory leaks.",
      "Actors do not support GPU acceleration, making them more cost-effective for CPU-only inference tasks.",
      "Actors utilize a 'pull' mechanism for data, whereas Tasks use a 'push' mechanism, leading to better load balancing."
    ],
    "correcta": 0,
    "explicacion": "Ray Actors are stateful workers; loading a multi-gigabyte model into memory is expensive, so maintaining that state across requests is essential for performance.",
    "analisis_distractores": "Opción B: Actors are stateful; Ray Tasks are the stateless abstraction.\n\nOpción C: Ray Actors fully support resource requirements, including GPUs, and are the standard way to serve GPU-bound models.\n\nOpción D: Load balancing in Ray Serve is handled by the deployment router; the distinction between push/pull is not the primary reason for choosing Actors for model serving.",
    "tip": "Think about the high cost of loading model parameters ($W$) versus the low cost of processing a single input ($x$)."
  },
  {
    "id": "mlo_1cf4eb265f",
    "materia": "mlops",
    "tema": "monitoring",
    "dificultad": 3,
    "pregunta": "In a mature MLOps CI/CD pipeline, what is the role of a 'Canary Deployment' when updating a model service?",
    "opciones": [
      "Routing a small percentage of production traffic to the new model version to monitor for errors or performance regressions before a full rollout.",
      "Comparing the training metrics of the new model against the current production model's training logs within the CI environment.",
      "Running both the old and new models in parallel on all traffic and only returning the output of the more confident model.",
      "Automatically rolling back the model if the unit tests in the GitHub Actions workflow fail."
    ],
    "correcta": 0,
    "explicacion": "Canary deployments act as an early warning system, limiting the 'blast radius' if the new model version has hidden bugs or poor real-world performance.",
    "analisis_distractores": "Opción B: This describes experiment comparison or offline evaluation, not a deployment strategy.\n\nOpción C: This describes a 'Shadow' deployment or an ensemble method, not a Canary rollout.\n\nOpción D: Unit tests are part of the CI phase; Canary deployments happen during the CD (deployment) phase in the production environment.",
    "tip": "Think about how miners once used birds to detect dangerous gases before they became a threat to the whole group."
  }
];
