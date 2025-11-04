---
layout: default
title: Publications
---

<style>
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

<style>
/* Targets the container for each publication entry */
/* Use the .csl-entry class, which jekyll-scholar typically assigns */
.csl-entry {
    /* Adds a margin of 1.5em (about 1.5 lines) below each entry */
    margin-bottom: 1.5em; 
}

/* If the entries are wrapped in <li> tags instead of divs, use this as a fallback: */
.csl-bibliography li {
    margin-bottom: 1.5em;
}
</style>

## Publications

{% bibliography %}

<style>
  .site-footer {
    display: none;
  }
</style>
