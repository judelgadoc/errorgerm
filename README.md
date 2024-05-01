
<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/judelgadoc/errorgerm">
    <img src="https://raw.githubusercontent.com/judelgadoc/errorgerm/main/docs/favicon.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">ErrorGerm</h3>

  <p align="center">
  
ErrorGerm is a propagation of uncertainties calculator. It can export and import a session for later usage.
    <br />
    <a href="https://github.com/judelgadoc/errorgerm/issues">Report Bug</a>
    ·
    <a href="https://github.com/judelgadoc/errorgerm/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://judelgadoc.github.io/errorgerm)

ErrorGerm is an open-source web app that aims to ease the calculation of uncertainty propagation in learning environments such as physics labs in college. It allows entering scalar values and assigning them to a variable along with its uncertainty already calculated, or entering individual measures to calculate uncertainty. ErrorGerm can also export and import a session for later usage.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Jekyll][Jekyll]][Jekyll-url]
* [![Bootstrap][Bootstrap]][Bootstrap-url]
* [![Mathjs][Mathjs]][Mathjs-url]
* [![JavaScript][JavaScript]][JavaScript-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

If you want a local copy follow these simple steps.

### Prerequisites

Jekyll and Bundle: please refer to [Jekyll Documentation](https://jekyllrb.com/docs/installation/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/judelgadoc/errorgerm.git
   ```
2. Go into website folder
   ```sh
   cd errorgerm/docs
   ```  
2. Install bundle gems
   ```sh
   bundle install
   ```
3. Start local jekyll server
   ```sh
   bundle exec jekyll serve
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### Add new variable
<p> Click on <img src="https://raw.githubusercontent.com/judelgadoc/errorgerm/main/docs/assets/images/add.svg" alt="add symbol" width="14" height="14"> then add the desired measures and a valid name
</p> 

![Add variable][add-variable-screenshot]

### Edit or remove variable

<p> Select a variable of the table and then click on <img src="https://raw.githubusercontent.com/judelgadoc/errorgerm/main/docs/assets/images/edit.svg" alt="edit symbol" width="14" height="14"> or  <img src="https://raw.githubusercontent.com/judelgadoc/errorgerm/main/docs/assets/images/delete.svg" alt="delete symbol" width="14" height="14">
</p> 

### Make a calculation
Write a valid expression and then click on execute


_For more information, please refer to the [Help](https://judelgadoc.github.io/errorgerm/help)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/judelgadoc/errorgerm.svg?style=for-the-badge
[contributors-url]: https://github.com/judelgadoc/errorgerm/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/judelgadoc/errorgerm.svg?style=for-the-badge
[forks-url]: https://github.com/judelgadoc/errorgerm/network/members
[stars-shield]: https://img.shields.io/github/stars/judelgadoc/errorgerm.svg?style=for-the-badge
[stars-url]: https://github.com/judelgadoc/errorgerm/stargazers
[issues-shield]: https://img.shields.io/github/issues/judelgadoc/errorgerm.svg?style=for-the-badge
[issues-url]: https://github.com/judelgadoc/errorgerm/issues
[license-shield]: https://img.shields.io/github/license/judelgadoc/errorgerm.svg?style=for-the-badge
[license-url]: https://github.com/judelgadoc/errorgerm/blob/master/LICENSE
[product-screenshot]: images/index-screenshot.png
[add-variable-screenshot]: images/add-variable-screenshot.png
[Jekyll]: https://img.shields.io/badge/jekyll-2B2B2B?style=for-the-badge&logo=jekyll&logoColor=wihte
[Jekyll-url]: https://jekyllrb.com/
[Mathjs]: https://img.shields.io/badge/mathjs-DD0031?style=for-the-badge&logo=mathdotjs&logoColor=white
[Mathjs-url]: https://mathjs.org/
[JavaScript]: https://img.shields.io/badge/JavaScript-000000?style=for-the-badge&logo=JavaScript&logoColor=F7DF1E
[JavaScript-url]: https://www.javascript.com/
[Bootstrap]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
