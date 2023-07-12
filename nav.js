console.log("hlw");
let nav = document.querySelector("#nav");
let template = document.createElement("template");
template.innerHTML = `<header>
<nav class="navbar">
<!-- LOGO -->
<div class="logo">
  <a><img src="./images/Asset-3@2x-(2).png" class="nav_logo" /></a>
</div>

<!-- NAVIGATION MENU -->
<ul class="nav-links">
  <!-- USING CHECKBOX HACK -->
  <input type="checkbox" id="checkbox_toggle" />
  <label for="checkbox_toggle" class="hamburger">&#9776;</label>

  <!-- NAVIGATION MENUS -->
  <div class="menu">
    <li><a href="/" id="hoo">HOME</a></li>
    <li><a href="/">ABOUT US</a></li>

    <li class="services">
      <a href="/">PRODUCT <i class="fa-solid fa-chevron-down"></i></a>

      <!-- DROPDOWN MENU -->
      <ul class="dropdown">
        <li><a href="/">Dropdown</a></li>
        <li><a href="/">Dropdown</a></li>
        <li><a href="/">Dropdown</a></li>
        <li><a href="/">Dropdown</a></li>
        <li><a href="/">Dropdown</a></li>
      </ul>
    </li>
    <li class="services">
      <a href="/">SERVICE <i class="fa-solid fa-chevron-down"></i></a>

      <!-- DROPDOWN MENU -->
      <ul class="dropdown">
        <li><a href="/">Dropdown</a></li>
        <li><a href="/">Dropdown</a></li>
        <li><a href="/">Dropdown</a></li>
        <li><a href="/">Dropdown</a></li>
        <li><a href="/">Dropdown</a></li>
      </ul>
    </li>
    <li class="side_btn">
      <a href="#!">CONSULTANCY <i class="fa-solid fa-arrow-right"></i></a>
    </li>
  </div>
</ul>
</nav>
        
<Headers>`;
nav.appendChild(template.content);
