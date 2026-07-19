---
layout: default
title: Benjamin
---

## Benjamin: An AI Scientist and Proofreader for LaTeX

- **Author:** Pallab Dutta
- **Try it:** [benjamin.scicoagent.com](https://benjamin.scicoagent.com)
- **Learn more:** [scicoagent.com/blog](https://scicoagent.com/blog/)

---

<br>

Somewhere around two in the morning, after reading your own paper so many times that your eyes stop landing on the words, you run it through a grammar checker, watch the last underline disappear, and submit. Three weeks later a reviewer circles Equation 7. Every tool you own had let it through, because none of them were reading the science. They were reading the spelling. That gap is why I built Benjamin, an AI scientist-proofreader made for LaTeX by someone who has been on the wrong end of that reviewer note.

A LaTeX manuscript is really three documents stacked together: the prose, the code, and the mathematics. Generic grammar tools only read the first layer. The "LaTeX-safe" tools do better on the code, but they stay safe by leaving your equations untouched, which is a polite way of saying they never check them. Benjamin reads all three. It keeps your `.tex` intact and compiling, proofreads the prose in context, and then keeps going into the layer the others step around: a summation that double counts, a wrong exponent, a diffusion coefficient with the units of a velocity, a symbol that quietly changes meaning halfway through the paper.

You get the result the way a careful co-author would hand it back, as a clean copy plus tracked changes you can accept, argue with, or throw out one line at a time, either as native Word track changes or as an inline LaTeX diff. It works across LaTeX, Word, Markdown and RTF, in 95+ languages, so a non-native draft gets the same careful read as a native one. He is named for Benjamin Franklin, a printer who caught the slips before a page reached the press and a scientist who understood what the type was trying to say, which is exactly the double vision a scientific manuscript needs. Hand Benjamin your next draft before a reviewer does, and let him read the science, not just the spelling.

<style>
  .site-footer {
    display: none;
  }
</style>
