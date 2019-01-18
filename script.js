let dropdown = document.getElementById('drop-down');
let nav1 = document.getElementById('nav1');
let nav2 = document.getElementById('nav2');
let nav3 = document.getElementById('nav3');

dropdown.addEventListener('click', function() {
    return nav1.innerHTML= "<a href="portfolio.html">Portfolio</a>";
    return nav2.innerHTML = "<a href="about.html">About</a>";
    return nav3.innerHTML = "<a href="contact.html">Contact</a>";
})