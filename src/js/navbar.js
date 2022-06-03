let nav = document.querySelector("#navbar-custom");

nav.innerHTML = `


<nav class="navbar navbar-light fixed-top navbar-expand-lg bg-warning" style="background-color: #e3f2fd;">
<a class="navbar-brand" href="/">
  <img src="./img/eci1.png" width="200px" loading="lazy"/>
</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav ml-auto">
    <li class="nav-item">
      <a class="nav-link font-weight-bold" href="index.html">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link font-weight-bold" href="./how-it-works.html">How it Works</a>
    </li>
    <li class="nav-item">
      <a class="nav-link font-weight-bold" href="./vote.html">Cast Vote</a>
    </li>
    <li class="nav-item">
      <a class="nav-link font-weight-bold" href="./blockvote-card.html">My Voter Card</a>
    </li>
    <li class="nav-item">
    <a class="nav-link font-weight-bold" href="./results.html">Results</a>
    </li>
  </ul>
</div>
</nav>`
