window.FLASHCARD_DECKS = window.FLASHCARD_DECKS || {};
window.FLASHCARD_DECKS["fde"] = {
 "title": "AI Flashcards",
 "cards": [
  {
   "front": "How does Anthropic architecturally distinguish 'workflows' from 'agents' in agentic systems?",
   "back": "Workflows use predefined code paths for orchestration, whereas agents dynamically direct their own processes and tool usage."
  },
  {
   "front": "In the context of LLM applications, when should a developer transition from a simple prompt to a complex agentic system?",
   "back": "Only when simpler solutions like optimizing single LLM calls or retrieval fall short of performance requirements."
  },
  {
   "front": "Which agentic workflow pattern is characterized by decomposing a task into a sequence of steps where each LLM call processes the previous output?",
   "back": "Prompt chaining"
  },
  {
   "front": "What is the primary trade-off when using prompt chaining in an LLM application?",
   "back": "It trades off increased latency for higher task accuracy by simplifying individual LLM subtasks."
  },
  {
   "front": "Which LLM workflow classifies an input and directs it to a specialized downstream process or prompt?",
   "back": "Routing"
  },
  {
   "front": "In the parallelization workflow, what is the difference between the 'sectioning' and 'voting' variations?",
   "back": "Sectioning breaks a task into independent subtasks, while voting runs the same task multiple times to aggregate diverse outputs."
  },
  {
   "front": "How does the 'orchestrator-workers' workflow differ from standard parallelization?",
   "back": "The subtasks in orchestrator-workers are dynamically determined by the LLM based on the input rather than being pre-defined."
  },
  {
   "front": "Under what specific condition is the 'evaluator-optimizer' workflow most effective?",
   "back": "When clear evaluation criteria exist and the LLM can provide demonstrably useful iterative feedback."
  },
  {
   "front": "What is the primary risk associated with the autonomous nature of AI agents?",
   "back": "Agents incur higher costs and carry the potential for compounding errors over many iterations."
  },
  {
   "front": "What does the 'Model Context Protocol' (MCP) enable developers to do in an agentic system?",
   "back": "It allows LLMs to integrate with an ecosystem of third-party tools through a standardized client implementation."
  },
  {
   "front": "How does Anthropic define the 'Agent-Computer Interface' (ACI) relative to human interfaces?",
   "back": "It is the design of tool definitions and documentation specifically optimized for LLM comprehension and reliability."
  },
  {
   "front": "What is a 'Forward Deployed Engineer' (FDE) in the context of the AI industry?",
   "back": "A specialized engineer embedded with customers to turn ambiguous business problems into production-ready software systems."
  },
  {
   "front": "The 'Delta' in FDE terminology refers to the gap between _____ and _____.",
   "back": "The core product's capabilities; the client's messy real-world reality."
  },
  {
   "front": "How does the 'ship on day one' philosophy distinguish an FDE from a traditional consultant?",
   "back": "FDEs deliver running software integrations rather than just roadmaps or strategic recommendations."
  },
  {
   "front": "According to the FDE Field Guide, what percentage of enterprise AI pilots failed to reach production in 2025?",
   "back": "95%"
  },
  {
   "front": "What is the first phase of the core 6-phase 'FDE Loop' for operationalizing a customer problem?",
   "back": "Discovery and requirements intake"
  },
  {
   "front": "How does an 'analytical system' differ from an 'operational system' in data-intensive architecture?",
   "back": "Operational systems handle live requests and data creation, while analytical systems use read-only copies for reporting and insights."
  },
  {
   "front": "What does it mean for a backend service to be 'stateless'?",
   "back": "The service forgets everything about a request once handled, requiring persistent data to be stored in external infrastructure."
  },
  {
   "front": "In distributed systems, what is the purpose of a 'Write-Ahead Log' (WAL)?",
   "back": "It provides durability guarantees by persisting every state change to an append-only log before updating internal data structures."
  },
  {
   "front": "Concept: Idempotent Receiver",
   "back": "Definition: A system that uniquely identifies client requests to ignore duplicates during retries."
  },
  {
   "front": "What is the function of a 'Heartbeat' in a server cluster?",
   "back": "A periodic message sent between servers to indicate that a specific node is still available."
  },
  {
   "front": "In a leader-follower architecture, what does the 'High-Water Mark' represent in the log?",
   "back": "The index in the write-ahead log indicating the last successfully replicated entry."
  },
  {
   "front": "How does a 'Lease' coordinate activities in a distributed cluster?",
   "back": "It provides a time-bound lock to a node to ensure exclusive control over a specific resource or task."
  },
  {
   "front": "What is the purpose of 'Follower Reads' in a data cluster?",
   "back": "To achieve better throughput and lower latency by serving read requests from non-leader nodes."
  },
  {
   "front": "Which distributed system pattern uses random node selection to spread information without flooding the network?",
   "back": "Gossip Dissemination"
  },
  {
   "front": "How does 'Two-Phase Commit' (2PC) ensure atomicity across multiple nodes?",
   "back": "It updates resources on multiple nodes in a single atomic operation through a coordination phase followed by a commit phase."
  },
  {
   "front": "In the FDE '7-Signal Rubric', what does 'MECE decomposition' stand for?",
   "back": "Mutually Exclusive and Collectively Exhaustive."
  },
  {
   "front": "Why is 'Clarify before you solve' considered the most critical signal in an FDE interview?",
   "back": "It prevents the engineer from building a solution for the wrong problem or ignoring critical customer constraints."
  },
  {
   "front": "What is the 'System of Record' in an enterprise environment?",
   "back": "The authoritative data source for a specific piece of information, such as an ERP or CRM system."
  },
  {
   "front": "In FDE discovery, what is the goal of using the 'Three Whys' technique?",
   "back": "To move past surface-level feature requests to identify the root business pain or cause."
  },
  {
   "front": "What is the 'Cost of Inaction' in a project scoping discussion?",
   "back": "The quantified negative business impact of not building the proposed solution, used to define project priority."
  },
  {
   "front": "How does the 'Pyramid Principle' dictate communication with executive stakeholders?",
   "back": "Present the conclusion or 'Bottom-Line Up Front' (BLUF) before providing supporting technical data."
  },
  {
   "front": "What is the 'Poka-yoke' principle when applied to tool design for AI agents?",
   "back": "Designing tool arguments and parameters such that it is physically or logically difficult for the LLM to make mistakes."
  },
  {
   "front": "What is the 'generalization gap' in the context of LLM evaluation?",
   "back": "The difference in performance between the model's accuracy on the training/dev set and its accuracy on an unseen holdout set."
  },
  {
   "front": "What does 'LLM-as-a-Judge' refer to in an evaluation harness?",
   "back": "The use of a highly capable model to grade the responses of another model based on a structured rubric."
  },
  {
   "front": "In RAG evaluation, what is the difference between 'context recall' and 'context precision'?",
   "back": "Context recall measures if all necessary information was retrieved, while context precision measures the signal-to-noise ratio in retrieved chunks."
  },
  {
   "front": "What is 'inter-annotator agreement' (Cohen's Kappa) used to measure in AI testing?",
   "back": "The degree of consistency between different human or model judges when grading the same set of outputs."
  },
  {
   "front": "What is 'Data Residency' in the context of enterprise AI deployment?",
   "back": "Legal and regulatory requirements specifying that data must remain within specific geographic or organizational boundaries."
  },
  {
   "front": "How does 'Air-Gapped' deployment differ from standard cloud deployment?",
   "back": "The system must run in an environment with zero or intermittent internet connectivity, requiring local registries and offline weights."
  },
  {
   "front": "What does an 'Authority to Operate' (ATO) represent in a government or defense project?",
   "back": "The official signed authorization permitting a system to run on a specific secure network after meeting security standards."
  },
  {
   "front": "In deployment economics, why is success probability often more important than ROI?",
   "back": "Because high failure rates in AI pilots mean the cost of the attempt must be weighed against the likelihood of the thing working at all."
  },
  {
   "front": "The 'deployment cost' of an AI project typically includes not just the license but also _____.",
   "back": "Data engineering, integration, security hardening, and adoption efforts."
  },
  {
   "front": "What is the 'break-even probability' in an AI deployment cost model?",
   "back": "The minimum success rate required for the project's expected benefits to equal its total deployment and license costs."
  },
  {
   "front": "What is 'Decision Debt' in an FDE engagement?",
   "back": "Critical technical or business facts that remain unsettled, blocking progress or creating risks for the architecture."
  },
  {
   "front": "How does a 'Thin Vertical Slice' benefit a first-time AI deployment?",
   "back": "It tests an end-to-end path through real data and systems to surface integration problems early."
  },
  {
   "front": "In Anthropic's view, why should LLMs be given a 'thinking' space before generating a tool call?",
   "back": "To allow the model to reason through the problem and avoid writing itself into a logic error or 'corner'."
  },
  {
   "front": "What is the primary function of the 'Model Monitoring' phase in 'Day 2' AI operations?",
   "back": "To detect prediction drift and ensure system performance doesn't degrade as the client's underlying data evolves."
  },
  {
   "front": "How does the 'Evaluator' in an Evaluator-Optimizer loop prevent the system from getting stuck?",
   "back": "It provides critiques that the Optimizer uses to refine and demonstrably improve the output in subsequent turns."
  },
  {
   "front": "What is 'Position Bias' in LLM-as-a-Judge evaluations?",
   "back": "The tendency of a model to prefer the first response presented in a pairwise comparison regardless of quality."
  },
  {
   "front": "Why is 'Ground Truth' essential for an effective agentic evaluation harness?",
   "back": "It provides the objective 'correct' reference needed to measure model accuracy and identify hallucinations."
  },
  {
   "front": "What is the 'Wilson Interval' used for in AI success reporting?",
   "back": "To provide a statistically sound confidence interval for the accuracy measured on a finite holdout dataset."
  },
  {
   "front": "In the context of FDE 'Discovery', what does 'Instrumented Investigation' mean?",
   "back": "Treating conversations as data gathering that results in concrete artifacts like scripts, mapped sources, or workflow diagrams."
  },
  {
   "front": "Which distributed pattern ensures that multiple nodes coordinate decisions by requiring more than half of them to agree?",
   "back": "Majority Quorum"
  },
  {
   "front": "What is a 'State Watch' in distributed system architecture?",
   "back": "A mechanism that notifies clients immediately when specific values or states change on the server."
  },
  {
   "front": "How does 'Cloud Native' data architecture differ from traditional local disk architecture?",
   "back": "It builds data systems on top of remote object stores rather than relying solely on local block storage."
  },
  {
   "front": "What is the role of an 'Analytics Engineer' compared to a Data Engineer?",
   "back": "Analytics engineers focus on modeling and transforming data for business use, while data engineers manage the underlying integration infrastructure."
  },
  {
   "front": "In 'Sectioning' parallelization, why is it better to have separate calls for guardrails and core responses?",
   "back": "A single LLM call often performs worse when trying to handle both core task generation and content screening simultaneously."
  },
  {
   "front": "What is the 'fde-framework''s concept of a 'Gate'?",
   "back": "A mandatory check (e.g., data access, security review) that must pass before the system can be built or deployed."
  },
  {
   "front": "How does 'Durable Execution' improve the reliability of complex AI agent workflows?",
   "back": "It ensures the system can recover and continue from the last successful step even after a process crash or network failure."
  },
  {
   "front": "In the Anthropic framework, what does 'Ground Truth from the environment' mean for an agent?",
   "back": "The actual results of tool calls or code executions used by the agent to assess its real progress toward a goal."
  },
  {
   "front": "What is 'Faithfulness' in Ragas evaluation metrics?",
   "back": "The degree to which the LLM's answer is derived solely from the provided context without introducing external hallucinations."
  },
  {
   "front": "How does 'Reranking' improve the performance of a RAG pipeline?",
   "back": "It uses a more capable model to sort retrieved chunks by relevance, ensuring the most useful context is prioritized for the LLM."
  },
  {
   "front": "What is 'Semantic Search' in the context of vector databases?",
   "back": "Searching for information based on the conceptual meaning and intent of a query rather than literal keyword matches."
  },
  {
   "front": "Why is 'Wait-to-cover-uncertainty' (Clock-Bound Wait) used in distributed nodes?",
   "back": "To ensure that values can be correctly ordered across cluster nodes despite differences in system clock time."
  },
  {
   "front": "What is 'LoRA' (Low-Rank Adaptation) in the context of model fine-tuning?",
   "back": "A technique to fine-tune large models by only updating a small number of additional parameters, making it computationally efficient."
  },
  {
   "front": "How does a 'Consistent Core' simplify the coordination of a large data cluster?",
   "back": "It provides a smaller cluster with strong consistency to manage server activities without requiring every node to run complex consensus algorithms."
  },
  {
   "front": "What is 'Prompt Injection' and why is it a primary security concern for FDEs?",
   "back": "An attack where malicious input overrides an LLM's system instructions, potentially leading to unauthorized data access or tool abuse."
  },
  {
   "front": "What defines a 'Zero-Egress VPC' in enterprise security?",
   "back": "A private network environment that allows no outbound internet traffic, preventing data exfiltration to external model providers."
  },
  {
   "front": "In the FDE context, what is 'Decision Rationale' as documented in an ADR?",
   "back": "The specific reasons and trade-offs considered when making a technical choice, recorded for future maintenance and auditing."
  },
  {
   "front": "What is 'Red Teaming' in the lifecycle of an AI agent?",
   "back": "The adversarial testing of the system to identify vulnerabilities, safety bypasses, and failure modes under malicious input."
  },
  {
   "front": "How does the 'fde build' command in Kapoor's framework interact with 'Gates'?",
   "back": "The command refuses to emit code or project assets if any of the mandatory gates (like data-access or security-review) are failing."
  },
  {
   "front": "What is 'Exact Match' (EM) versus 'F1 Score' in extraction evaluations?",
   "back": "Exact Match requires the output to be identical to the target, while F1 Score measures the balance of precision and recall in predicted tokens."
  },
  {
   "front": "What is 'Context Window Caching' and how does it benefit high-volume agent applications?",
   "back": "Storing frequently used context (like long documentation) in memory to reduce the latency and token cost of repeated LLM calls."
  },
  {
   "front": "How does the 'Singular Update Queue' pattern maintain order in a distributed system?",
   "back": "By using a single thread to process all incoming requests asynchronously without blocking the caller."
  },
  {
   "front": "What is 'Feature Attribution' in the monitoring of production models?",
   "back": "Determining which input features or parts of the prompt most significantly influenced the model's output or decision."
  },
  {
   "front": "Why is 'Human-in-the-loop' (HITL) critical for high-stakes AI automation?",
   "back": "It allows a human to review and approve model actions, providing a safety buffer and ground truth for model improvement."
  },
  {
   "front": "What is 'Prediction Drift' in a production AI system?",
   "back": "A change in the statistical distribution of a model's outputs over time, often signaling that the model is no longer fitting the real-world data."
  },
  {
   "front": "What is the purpose of 'Regression Infrastructure' in AI engineering?",
   "back": "Automated tests that run after every system change to ensure that new updates haven't broken existing capabilities or accuracy."
  },
  {
   "front": "How does 'DLP' (Data Loss Prevention) masking protect PII in LLM requests?",
   "back": "It identifies and replaces sensitive personal information with placeholders before sending data to an external API."
  },
  {
   "front": "What is a 'VPC Service Control' (VPC SC) in the Google Cloud context?",
   "back": "A security perimeter that prevents data exfiltration by restricting access to managed services only from authorized networks."
  },
  {
   "front": "What is the 'Delta Concept' as defined in Palantir-origin FDE work?",
   "back": "Focusing purely on the specific technical bridge needed to make a general product solve a client's unique mission."
  },
  {
   "front": "What is 'Model Context Protocol' (MCP) 'A2A' communication?",
   "back": "Agent-to-Agent communication, where one agent calls another as a specialized tool within a larger workflow."
  },
  {
   "front": "What is 'Durable Execution' 'Checkpointing'?",
   "back": "Explicitly saving the state of a long-running process so it can resume exactly where it left off after an interruption."
  },
  {
   "front": "How does 'MECE' prevent 'Scope Creep' in an FDE engagement?",
   "back": "By ensuring the project plan covers all required areas without overlapping tasks, making it clear where a job ends."
  },
  {
   "front": "What is the 'Trusted Advisor' formula for building customer relationships?",
   "back": "$$Trust = \\frac{Credibility + Reliability + Intimacy}{Self-Orientation}$$"
  },
  {
   "front": "In the 'Trusted Advisor' formula, why is 'Self-Orientation' the denominator?",
   "back": "Because focusing on one's own needs or product features rather than the client's success rapidly diminishes overall trust."
  },
  {
   "front": "What is 'Structured Problem Solving' (MECE) in the context of an FDE interview?",
   "back": "Breaking a massive, vague business request into small, non-overlapping, and solvable technical tasks."
  },
  {
   "front": "What is the primary goal of the 'FDE' according to the Roadmap guide?",
   "back": "To become obsolete at a client site because the system they built is robust enough to run itself."
  }
 ]
};
