---
layout: page
title: About
permalink: /about/
---

<p>ErrorGerm is an open-source web app that aims to ease the calculation of uncertainty propagation 
in learning environments such as physics labs in college. It allows entering scalar values and 
assigning them to a variable along with its uncertainty already calculated, or entering individual measures to calculate uncertainty. 
ErrorGerm can also export and import a session for later usage.</p>

<h2>Built with</h2>
ErrorGerm makes use of <a href="https://mathjs.org/" target="_blank" rel="noopener noreferrer">math.js</a> and <a href="https://www.mathjax.org/" target="_blank" rel="noopener noreferrer">MathJax</a>

<h2>A note about precision</h2>
ErrorGerm uses numbers with a limited precision of 64 bits, that's about 16 digits. 
So it has been decided to include up to 15 significant figures which are only for display purposes, 
all calculations are made with the available digits. You can read more about round-off errors <a href="https://mathjs.org/docs/datatypes/numbers.html#roundoff-errors" target="_blank" rel="noopener noreferrer">here</a>
