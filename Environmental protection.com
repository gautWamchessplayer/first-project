<!DOCTYPE html>
<html>
  <head>
    <title>Environment protection.com </title>
    <link rel="stylesheet" href="styles1.css" />
  </head>
  <body bgcolor=yellow>
      <h1 class="title">Lets save our earth! </h1>
      <p id="currentTime"></p>
      <script src="script.js"></script>
  </body>
</html>
<form action="/search" method="get">
  <input type="text" name="query" placeholder="Search...">
  <button type="submit">Search</button>
</form>
<p>
<a href="page1.html" target="_self">Facts about water pollution</a>
</p>
<p>
<a href="page2.html" target="_self">Facts about air pollution</a>
</p>
<p>
<p>
<a href="page5.html" target="_self">Facts about soil pollution</a>
</p>
<p>
<a href="page3.html" target="_self">How can I help with reducing air pollution?</a>
</p>
<p>
<a href="page4.html" target="_self">How can I help with reducing water pollution?</a>
</p>
<p>
<a href="page6.html" target="_self">How can I help with reducing soil pollution?</a>
</p>
</body>
</html>
