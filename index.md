---
layout: default
title: Home
---

<div style="display: flex; align-items: center;">
    <img src="PallabDutta_Photo.jpg" alt="Your Photo" style="width:150px; border-radius: 50%; margin-right: 20px;">
    <div>
        <p style="text-align: justify;">
        🙏 Namaskar, this is Pallab Dutta! <br>
        👀 I’m a research scholar at IISER Kolkata, exploring the interface of computational chemistry and AI. 
        </p>
    </div>
</div>
<br/>

<div class="toggle-container">
    <div id="toggle-track">
        <div id="toggle-knob"></div>
    </div>
</div>
<style>
.toggle-container {
    display: flex;
    justify-content: center;
    margin: 20px;
}

#toggle-track {
    width: 400px;
    height: 100px;
    background: url('/assets/SciMode.png') center/cover;
    border-radius: 50px;
    position: relative;
    transition: background 0.5s ease-in-out;
}

#toggle-knob {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: url('/assets/face_on.jpg') center/cover;
    position: absolute;
    top: 5px;
    left: 5px;
    transition: transform 0.5s ease-in-out, background 0.3s ease-in-out;
}

</style>

<script src="/assets/toggle.js"></script>
---

<br/>

Currently, I am a final year PhD student under Prof. Neelanjana Sengupta at IISER Kolkata. I am working at the interface of molecular simulations and machine learning to understand the dynamics of biomolecular systems in greater detail. Some of my current research topics are:
- Estimation of kinetic barriers and learning transition states without directly sampling the transition event [[1](https://doi.org/10.1002/cphc.202200595),[2](https://doi.org/10.1016/j.bpj.2023.02.010)].
- Learning membrane surface topology as a function of the embedded peptide and its conformation [[3](https://doi.org/10.1063/5.0250082)]. 
- Solving the mystery of having structural conservation with sequence dissimilarities in Kinases and other enzymes, using explainable AI.  

<br/>

---

<br/>

I received my integrated Bs-Ms degree with a major in **Biological Sciences** and a minor in **Physical Sciences** from IISER Kolkata. In my Master's thesis, I worked on the estimation of kinetic barriers present in proline isomerization using statistical inference. Later, we applied this novel approach for efficient estimation of similar barriers present in the free energy surfaces of alanine-dipeptide and fluoroproline systems. In 2020, we published this effort in *J. Chem. Phys.*, in a special issue named *Machine Learning meets Chemical Physics* ( DOI: [https://doi.org/10.1063/5.0021910](https://doi.org/10.1063/5.0021910) ).

<style>
  .site-footer {
    display: none;
  }
</style>
