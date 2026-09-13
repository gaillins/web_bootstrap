// โหลด menu.html
fetch("menu.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("menu-container").innerHTML = data;
  });
