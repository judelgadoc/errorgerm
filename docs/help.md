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
<p>The name of a variable must be valid, a name to be valid must begin with an ''alpha character'' and can be followed by an ''alpha character'' or a number</p>

<p>An ''alpha character'' in ErrorGerm is almost equal to a <a href="https://mathjs.org/docs/expressions/syntax.html#constants-and-variables" target="_blank" rel="noopener noreferrer">math.js's alpha character</a>, but excluding mathematical alphanumeric symbols (<code>\u{1D400} - \u{1D7FF}</code>)</p>

<p>Examples of valid names are:</p>

<ul>
<li>&#95;1</li>
<li>α&#95;1</li>
<li>área</li>
</ul>

<p>Examples of invalid names are:</p>

<ul>
<li>1</li>
<li>变量</li>
</ul>



<h2>Measuring errors</h2>
<p>It is a well-established fact of scientific investigation that the first time an experiment is performed, the results often bear all too little resemblance to the "truth" being sought. As the experiment is repeated, with successive refinements of technique and method, the results gradually and asymptotically approach what we may accept with some confidence to be a reliable description of events. We may sometimes feel that nature is loath to give up her secrets without a considerable expenditure of effort on our part, and that the first steps in experimentation are bound to fail. Whatever the reason, it is certainly true that for all physical experiments, there are errors and uncertainties that must be reduced by improved experimental techniques and repeated measurements. And those errors remaining must always be estimated to establish the validity of our results.</p>

<h3>Accuracy vs. Precision</h3>
<p>It is important to distinguish between the terms accuracy and precision. The accuracy of an experiment is a measure of how close the result of the experiment is to the true value; the precision is a measure of how well the result has been determined without reference to its agreement with the true value. The precision is also a measure of the reproducibility of the result in a given experiment.</p>


<p>In general, when we quote the uncertainty or error in an experimental result, we are referring to the precision with which that result has been determined. Absolute precision indicates the magnitude of the uncertainty in the result in the same units as the result; relative precision indicates the uncertainty in terms of a fraction of the value of the result.</p>

<h3>Systematic errors</h3>
<p>The accuracy of an experiment, as we have defined it, is generally dependent on how well we can control or compensate for systematic errors, errors that will make our results different from the "true" values with reproducible discrepancies. Errors of this type are not easy to detect and are not easily studied by statistical analysis.</p>

<h3>Random errors</h3>
<p>The precision of an experiment depends upon how well we can overcome random errors, fluctuations in observations that yield different results each time the experiment is repeated, and thus require repeated experimentation to yield precise results. A given accuracy implies an equivalent precision and, therefore, also depends to some extent on random errors.</p>

<h3>Significant figures</h3>
<p>The precision of an experimental result is implied by the number of digits recorded in the result, although typically the uncertainty should be quoted specifically as well. The number of significant figures in a result is defined as follows:</p>
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
<p>The best value will be the measured value, and the uncertainty will be the nominal error of the measuring instrument.</p>
<p>\(\frac{m}{2}\) is often used as the nominal error, where \(m\) is the minimum value possibly measured by the measuring instrument.</p>

<h3>Uncertainty of a magnitude measured \(N\) times</h3>
<p>To minimize random errors, we measure multiple times. Suppose we made \(N\) measurements of the same magnitude with results \(x_1,x_2,x_3,x_4,\ldots\) then the best value is the mean \(\overline{x}\) 
<figure class="text-center">
\[\overline{x} \equiv \langle x \rangle = \frac{\sum\limits_{k=1}^{N}x_k}{N}\]
</figure>
and the uncertainty is given by the formula</p>
<figure class="text-center">
\[\Delta x = \sqrt{\sigma_x^2 + \sigma_{nom}^2}\]
</figure>

<p>Where \(\sigma_{nom}\) is the nominal error of the measuring instrument, \(\sigma_{x} = \frac{\sigma}{\sqrt{N}} \) and \( \sigma = \sqrt{\frac{\sum_{k=1}^{N}(x_k - \overline{x})}{N-1}} \)</p>

<h3>Uncertainty of a magnitude measured \(N\) independent times</h3>
<p>Sometimes, each repeated measurement might have a different uncertainty than the rest, because of another measuring method or instrument; in this case, the best value is</p>
<figure class="text-center">
\[\langle x \rangle = \frac{\sum\limits_{k=1}^{N} \frac{x_k}{\sigma_k^2}}{\sum\limits_{k=1}^{N} \frac{1}{\sigma_k^2}}\]
</figure>
<p>And the uncertainty is</p>
<figure class="text-center">
\[\Delta x = \frac{1}{\sqrt{\sum\limits_{k=1}^{N} \frac{1}{\sigma_k^2}}}\]
</figure>

<h3>How many measurements should be made?</h3>

<p>Let's remember that \(\sigma\) represents the dispersion of each measurement and does not depend on \(N\), but rather on the quality of the measurements. On the other hand, \(\sigma_x\) does depend on \(N\), and decreases as \(N\) increases. For instance, if we are measuring a length with a ruler graduated in millimeters, it's clear that increasing the number of measurements can reduce the statistical error. However, with this instrument, we cannot achieve certainty in figures at the micron level, no matter how many measurements we take.</p>

<p>As \(N\) increases, \(\sigma_x\) decreases, but from a physical standpoint, the error in \(\overline{x}\) can only decrease until it becomes equal to or of the order of the instrument's nominal error (\(\sigma_{nom}\)). Therefore, it is not reasonable to strive to reduce \(\sigma_x\) much more than \(\sigma_{nom}\). The optimal balance is achieved when \(\sigma_x \approx \sigma_{nom}\).</p>

<p>This provides us with a criterion to decide the optimal number of measurements to perform for a measurement. Assuming that \(\sigma\) is constant with \(N\), the idea is to conduct a pilot test with some preliminary measurements (\( N_{prel} \)), say about 5 to 10, and then calculate \(\sigma\). Like this</p>

<figure class="text-center">
\[N_{op} \approx \left(\frac{\sigma}{\sigma_{nom}}\right)^2\]
</figure>

<h3>Steps to follow to measure a physical quantity \( x \):</h3>
<ol>
    <li>Perform about 5 to 10 preliminary measurements and determine the average error of each measurement \(\sigma\).</li>
    <li>Discard extreme values.</li>
    <li>Determine \( N_{op} \) .</li>
    <li>Complete the \( N_{op} \) measurements of \( x \), if necessary.</li>
    <li>Calculate the average \(\overline{x}\) and its statistical uncertainty \(\sigma_x\).</li>
    <li>Calculate the value of the effective or total uncertainty \(\Delta x = \sqrt{\sigma_x^2 + \sigma_{nom}^2}\).</li>
    <li>Write the result in the form \(x = (\overline{x} \pm \Delta x) [\text{unit}]\).</li>
    <li>Calculate the percent relative error \( \varepsilon = 100\cdot\Delta x/\overline{x} \).</li>
    <li>If desired, to verify that the value distribution is normal, compare the distribution histogram of data with the corresponding normal curve, that is, with a normal distribution of mean \(\overline{x}\) and standard deviation \(\sigma\).</li>
    <li>Analyze possible sources of systematic errors and correct the measured value.</li>
    <li>Evaluate the absolute uncertainty of the measurement by combining the statistical and systematic uncertainties.</li>
</ol>

<h2>Propagation of errors</h2>
<p>We often want to determine a dependent variable x that is a function of one or more
different measured variables. We must know how to propagate or carry over the 
uncertainties in the measured variables to determine the uncertainty in the dependent
variable.</p>

<h3>General formula</h3>
<p>Suppose a dependent variable V which is a function \(V = V(x_0, x_1, x_2, \ldots)\) 
where all \(x_i\) are measures with known uncertainties \(\Delta x_0, \Delta x_1, \Delta x_2 \ldots\) then we can calculate the uncertainty of \(V\) with the formula</p>
<figure class="text-center">
\[\Delta V = \sqrt{\left( \frac{\partial V}{\partial x_0} \right)^2 \Delta x_0^2 + \left( \frac{\partial V}{\partial x_1} \right)^2 \Delta x_1^2 + \left( \frac{\partial V}{\partial x_2} \right)^2 \Delta x_2^2 + \cdots}\]
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
