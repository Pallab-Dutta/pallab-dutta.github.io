---
layout: default
title: Home
---

<head>
<link rel="preload" href="/assets/face_on.jpg" as="image">
<link rel="preload" href="/assets/face_off.jpg" as="image">
<link rel="preload" href="/assets/SciMode.png" as="image">
<link rel="preload" href="/assets/ArtMode.png" as="image">
</head>

<body>
<div style="display: none;">
    <img src="/assets/face_off.jpg" alt="Preload Off Mode">
    <img src="/assets/ArtMode.png" alt="Preload Art Mode">
</div>
</body>

<div class="toggle-container">
    <div id="toggle-track">
        <div id="toggle-knob"></div>
    </div>
</div>

<br/>

<style>
    
.toggle-container {
    display: flex;
    justify-content: center;
    /*margin: 5vh 0;*/
    width: 100%;
}

#toggle-track {
    width: 90vw; /* 90% of screen width */
    height: calc(90vw / 3); /* Height is 1/3 of width */
    max-width: 600px; /* Prevents excessive size on large screens */
    max-height: 200px; /* Corresponding max height */
    background: url('/assets/SciMode.png') center/cover;
    border-radius: calc(90vw / 6); /* Half of height to ensure perfect roundness */
    position: relative;
    transition: background 0.5s ease-in-out;
    z-index: 1;
}

#toggle-knob {
    width: calc(90vw / 3.5); /* Reduce size slightly */
    height: calc(90vw / 3.5); /* Keep it a circle */
    max-width: 180px; /* Adjust max width */
    max-height: 180px;
    border-radius: 50%;
    background: url('/assets/face_on.jpg') center/cover;
    position: absolute;
    top: 50%;
    left: 2%;
    box-shadow: inset 0 0 0 3px black;
    transform: translateY(-50%); /* Center vertically */
    transition: transform 0.5s ease-in-out, background 0.5s ease-in-out;
    z-index: 2;
}

@media (max-width: 768px) {
    .site-nav {
        position: absolute;
        top: 9px;
        right: 15px;
        background-color: unset;
        border: unset;
        border-radius: 5px;
        text-align: right;
    }

    .site-nav input ~ .trigger {
        clear: both;
        display: none;
        position: relative;
        background-color: beige;
        border: 2px solid black;
        z-index: 25;
        border-bottom-left-radius: 90px;
        overflow: hidden;
    }
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
