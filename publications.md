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
/* Adjust spacing only for the bibliography section */
.bibliography li {
    margin-bottom: 15px; /* Adjust the value as needed */
}
</style>

## Publications

{% bibliography %}

<style>
  .site-footer {
    display: none;
  }
</style>
