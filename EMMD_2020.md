---
layout: default
title: EMMD blog
---

## Expectation Maximized Molecular Dynamics: A New Frontier in Free Energy Barrier Estimation

- **Authors:** Pallab Dutta, Neelanjana Sengupta
- **Affiliation:** Department of Biological Sciences, Indian Institute of Science Education and Research (IISER) Kolkata
- **Published in:** *The Journal of Chemical Physics*, October 2020
- **DOI:** [10.1063/5.0021910](https://doi.org/10.1063/5.0021910)

---

### Introduction

Understanding the free energy landscape (FEL) of biomolecular systems is crucial for deciphering processes like protein folding, enzyme catalysis, and ligand binding. However, traditional molecular dynamics (MD) simulations often struggle to sample high‑energy transition states due to computational limitations and the quasi‑nonergodic nature of complex systems.

To address this challenge, we introduce a novel algorithm — **Expectation Maximized Molecular Dynamics (EMMD)** — that efficiently estimates key features of the FEL without the need for direct sampling of rarely visited high‑energy states.

---

### Methodology

Fully atomistic MD simulation is performed independently for known metastable conformations of the system. This generates disjoint samples separated by high kinetic barriers over the free energy landscape. 

Primarily the quasi-nonergodic behavior appears as a consequence of kinetic trapping inside the metastable basins, which leads to:
- Oversampling of the metastable basins.
- Undersampling of the high free-energy regions. 

Herein we borrowed the Expectation Maximization (EM) algorithm from the domain of statistical inference. This soft clustering technique is used to estimate a continuous probability density function ( $pdf$ ) as a mixture of Gaussians from our disjoint samples. This continuous estimate of the $pdf$ is then utilized to solve the above two problems related to sampling.

* **Necessary and Sufficient Sampling:** 
While sampling a metastable state, we keep comparing the $pdf$  corresponding to that state at time $t$ and $t+\Delta t$. The simulation at individual basin is ceased when the difference between these two distributions, $pdf_{t}$ and $pdf_{t+\Delta t}$ becomes close to zero. The converged $pdf$ can be considered as the representative of the local state distribution, and the trajectory can be thought of an ensemble of necessary and sufficient amount of samples. 

* **Free Energy Estimation:** After performing the necessary and sufficient sampling at each metastable state, we proceed to construct an estimate for the population distribution from the disjoint sample distributions. At this stage, a Gaussian mixture model is fit over the concatenated trajectories collected from all different states. We assume this $pdf$ to be the unbiased Boltzmann distribution of the system. Now, we apply the Boltzmann inversion to have the continuous free energy landscape as a function of the collective variables of the system. 

---

### Key Findings

We applied EMMD to three distinct case studies, demonstrating its effectiveness in:

1. **Efficiently Estimating Transition States:** Accurately identifying transition pathways without direct sampling of high‑energy regions, reducing computational overhead.
2. **Reducing Sampling Redundancy:** Curtailing unnecessary simulations, thereby optimizing resource utilization.
3. **Maintaining Accuracy:** Achieving comparable accuracy to conventional enhanced sampling methods in estimating FEL features.

---

### Visual Highlights

> *Replace the placeholders below with actual figures from your paper.*

**Figure 1:** *Schematic representation of the EMMD algorithm workflow.*
![Figure 1: EMMD Workflow](path/to/figure1.png)

**Figure 2:** *Comparison of FEL estimations between EMMD and traditional methods.*
![Figure 2: FEL Comparison](path/to/figure2.png)

**Figure 3:** *Application of EMMD to a biomolecular system, highlighting identified transition states.*
![Figure 3: Transition States](path/to/figure3.png)

---

### Conclusion and Future Directions

EMMD presents a promising alternative to traditional enhanced sampling techniques, offering a computationally efficient means to explore complex FELs. By avoiding direct sampling of high‑energy states and incorporating a self‑regulating feedback mechanism, EMMD balances accuracy with efficiency.

**Future work will focus on:**

* Extending EMMD to higher‑dimensional FELs to handle more complex systems with multiple interacting variables.
* Integrating machine learning techniques to enhance the predictive capabilities of EMMD.
* Developing a user‑friendly EMMD software package for broader adoption within the research community.

---

### Access the Full Study

For a detailed exposition of the EMMD algorithm and its applications, refer to the full paper:

[Expectation Maximized Molecular Dynamics: Toward Efficient Learning of Rarely Sampled Features in Free Energy Surfaces from Unbiased Simulations](https://doi.org/10.1063/5.0021910)

---