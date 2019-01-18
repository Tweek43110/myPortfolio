let dropdown = document.getElementById('drop-down');
dropdown.addEventListener('click', function() {
    let nav1 = document.getElementById('nav1');
    let nav2 = document.getElementById('nav2');
    let nav3 = document.getElementById('nav3');
    
    nav1.innerHTML = "<a href="portfolio.html">Portfolio</a>";
    nav2.innerHTML = "<a href="about.html">About</a>";
    nav3.innerHTML = "<a href="contact.html">Contact</a>";
})