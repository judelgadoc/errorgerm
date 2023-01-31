---
layout: page
title: "Help"
permalink: /help
use_math: true
---


<figure class="text-end">
  <blockquote class="blockquote">
    <p>I often say that when you can measure what you are speaking about, and express it in numbers, you know something about it; but when you cannot measure it, when you cannot express it in numbers, your knowledge is of a meagre and unsatisfactory kind.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Lord Kelvin on <cite title="Popular Lectures and Addresses 'Electrical Units of Measurement' (1889).">Popular Lectures and Addresses "Electrical Units of Measurement" (1889).</cite>
  </figcaption>
</figure>


<h2>Using ErrorGerm</h2>
<h3>Valid names</h3>
<p class="text-justify">The name of a variable must be valid, a name to be valid must begin with an ''alpha character'' and can be followed by an ''alpha character'' or a number</p>

<p class="text-justify">An ''alpha character'' in ErrorGerm is almost equal to a <a href="https://mathjs.org/docs/expressions/syntax.html#constants-and-variables" target="_blank" rel="noopener noreferrer">math.js's alpha character</a>, but excluding mathematical alphanumeric symbols (<code>\u{1D400} - \u{1D7FF}</code>)</p>

<p class="text-justify">Examples of valid names are:</p>

<ul>
<li>&#95;1</li>
<li>α&#95;1</li>
<li>área</li>
</ul>

<p class="text-justify">Examples of invalid names are:</p>

<ul>
<li>1</li>
<li>变量</li>
</ul>



<h2>Measuring Errors</h2>
<p class="text-justify">It is a well-established fact of scientific investigation that the first time an
experiment is performed the results often bear all too little resemblance to the "truth"
being sought. As the experiment is repeated, with successive refinements of
technique and method, the results gradually and asymptotically approach what we may
accept with some confidence to be a reliable description of events. We may
sometimes feel that nature is loath to give up her secrets without a considerable
expenditure of effort on our part, and that first steps in experimentation are bound to fail.
Whatever the reason, it is certainly true that for all physical experiments, errors and
uncertainties exist that must be reduced by improved experimental techniques and
repeated measurements, and those errors remaining must always be estimated to
establish the validity of our results.</p>

<h3>Accuracy vs Precision</h3>
<p class="text-justify">It is important to distinguish between the terms accuracy and precision. The accuracy of an experiment is a measure of how close the result of the experiment is to the true value; the precision is a measure of how well the result has been determined, without reference to its agreement with the true value. The precision is also a measure of the reproducibility of the result in a given experiment.</p>


<p class="text-justify">In general,
when we quote the uncertainty or error in an experimental result, we are referring to
the precision with which that result has been determined. Absolute precision indicates
the magnitude of the uncertainty in the result in the same units as the result; relative
precision indicates the uncertainty in terms of a fraction of the value of the result.</p>

<h3>Systematic Errors</h3>
<p class="text-justify">The accuracy of an experiment, as we have defined it, is generally dependent on
how well we can control or compensate for systematic errors, errors that will make
our results different from the "true" values with reproducible discrepancies. Errors
of this type are not easy to detect and not easily studied by statistical analysis.</p>

<h3>Random Errors</h3>
<p class="text-justify">The precision of an experiment depends upon how well we can overcome random
errors, fluctuations in observations that yield different results each time the 
experiment is repeated, and thus require repeated experimentation to yield precise results.
A given accuracy implies an equivalent precision and, therefore, also depends to
some extent on random errors.</p>

<h3>Significant Figures</h3>
<p class="text-justify">The precision of an experimental result is implied by the number of digits recorded
in the result, although generally the uncertainty should be quoted specifically as
well. The number of significant figures in a result is defined as follows:</p>
<ol>
<li>The leftmost nonzero digit is the most significant digit.</li>
<li>If there is no decimal point, the rightmost nonzero digit is the least significant
digit.</li>
<li>If there is a decimal point, the rightmost digit is the least significant digit, even
if it is a 0.</li>
<li>All digits between the least and most significant digits are counted as 
significant digits.</li>
</ol>

<h3>Uncertainty of a magnitude measured once</h3>
<p class="text-justify">The best value will be the measured value, and the uncertainty will be the nominal error of the measuring instrument.</p>
<p class="text-justify">$\frac{m}{2}$ is often used as the nominal error, where $m$ is the minimum value possibly measured by the measuring instrument.</p>

<h3>Uncertainty of a magnitude measured $N$ times</h3>
<p class="text-justify">To minimize random errors, we measure multiple times. Suppose we made $N$ measurements of the same magnitude with results $x_1,x_2,x_3,x_4,\ldots$ then the best value is the mean $\overline{x}$ and the uncertainty is given by the formula</p>
<figure class="text-center">
$$\Delta x = \sqrt{\left(\frac{\sigma_x}{\sqrt{N}} \right)^2 + \sigma_{nom}^2}$$
</figure>

Where $\sigma_{nom}$ is the nominal error of the measuring instrument

<h3>Uncertainty of a magnitude measured $N$ independent times</h3>
<p class="text-justify">Sometimes, each repeated measurement might have a different uncertainty than the rest, because of using another measuring method or instrument, in this case, the best value is</p>
<figure class="text-center">
$$\langle x \rangle = \frac{\sum_{k=1}^{N} \frac{x_k}{\sigma_k^2}}{\sum_{k=1}^{N} \frac{1}{\sigma_k^2}}$$
</figure>
<p class="text-justify">And the uncertainty is</p>
<figure class="text-center">
$$\Delta x = \frac{1}{\sqrt{\sum_{k=1}^{N} \frac{1}{\sigma_k^2}}}$$
</figure>

<h2>Propagation of Errors</h2>
<p class="text-justify">We often want to determine a dependent variable x that is a function of one or more
different measured variables. We must know how to propagate or carry over the 
uncertainties in the measured variables to determine the uncertainty in the dependent
variable.</p>

<h3>General formula</h3>
<p class="text-justify">Suppose a dependent variable V which is a function $V = V(x_0, x_1, x_2, \ldots)$ 
where all $x_i$ are measures with known uncertainties $\Delta x_0, \Delta x_1, \Delta x_2 \ldots$ then we can calculate the uncertainty of $V$ with the formula</p>
<figure class="text-center">
$$\Delta V = \sqrt{\left( \frac{\partial V}{\partial x_0} \right)^2 \Delta x_0^2 + \left( \frac{\partial V}{\partial x_1} \right)^2 \Delta x_1^2 + \left( \frac{\partial V}{\partial x_2} \right)^2 \Delta x_2^2 + \cdots}$$
</figure>

<h2>References</h2>
<div class="csl-bib-body">
  <div data-csl-entry-id="bevington_data_2003" class="csl-entry">
    <span class="csl-left-margin">[1] </span><span class="csl-right-inline">P. R. Bevington and D. K. Robinson, <i>Data reduction and error analysis for the physical sciences</i>, 3rd ed. Boston: McGraw-Hill, 2003.</span>
  </div>
  <div data-csl-entry-id="ardila_vargas_fisica_2007" class="csl-entry">
    <span class="csl-left-margin">[2] </span><span class="csl-right-inline">Á. M. Ardila Vargas, <i>Física Experimental</i>. Bogotá: Universidad Nacional de Colombia. Facultad de Ciencias, 2007.</span>
  </div>
</div>
