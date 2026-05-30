---
layout: default
title: SciCo_author blog
---

## SciCo-author: An AI Scientist Co-author for the Thesis Marathon

- **Authors:** Pallab Dutta
- **GitHub:** [github.com/Pallab-Dutta/SciCo_Author](https://github.com/Pallab-Dutta/SciCo_Author)

---

<br>

Conducting the research is only half the battle; weaving years of disparate publications into a cohesive, flowing narrative is another monumental challenge. For the tough times of writing, I developed SciCo-author, an automated pipeline that intelligently drafts, rephrases, and merges existing publications into structured thesis chapters using Adaptive RAG (Retrieval-Augmented Generation).

Beyond simply reformatting text, SciCo-author acts as an active research partner. Whenever a chapter requires broader contextual framing, the system interfaces with semantic research engines to conduct targeted literature searches, allowing it to autonomously draft or extend introductions with relevant, up-to-date scholarly context.

Once the foundation is set, the pipeline decomposes original publications of the author provided as raw \LaTeX{} files into manageable text chunks. To ensure the core narrative remains contextually aware, academically rigorous, and structurally linked, the system retrieves relevant context for each chapter from two distinct sources:

- **Global Sequential Context:** A dynamically updated running summary of all previously processed chapters to maintain a seamless narrative flow from introduction to conclusion.
- **Dynamic Knowledge Retrieval:** A vector-based retrieval function that uses cosine similarity to identify the top, most semantically relevant facts from a broader knowledge ledger of the entire thesis.

---

### Workflow & Run Steps

Here is the step-by-step pipeline execution for SciCo-author:

**1. SciCo author run initiates**
![SciCo author run initiates](/Softwares/SciCo_author/SciCo_run_01.png)

**2. Prepares knowledge ledger from user provided Introduction**
![Prepares knowledge ledger from user provided Introduction](/Softwares/SciCo_author/SciCo_run_02.png)

**3. Starts working on Chapter 1, from user's prepublished research, and knowledge ledger prepared at last step**
![Starts working on Chapter 1, from user's prepublished research, and knowledge ledger prepared at last step](/Softwares/SciCo_author/SciCo_run_03.png)

**4. Finishes on Chapter 1, and adds it to the adaptive knowledge ledger**
![Finishes on Chapter 1, and adds it to the adaptive knowledge ledger](/Softwares/SciCo_author/SciCo_run_04.png)

**5. Repeats the above steps until works on all chapters are complete**
![Repeats the above steps until works on all chapters are complete](/Softwares/SciCo_author/SciCo_run_05.png)

---

<style>
  .site-footer {
    display: none;
  }
</style>
