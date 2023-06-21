if (localStorage.getItem("nightTabStyle")) {
  const e = document.createElement("style");
  switch (localStorage.getItem("nightTabStyle")) {
    case "light":
      e.type = "text/css";
      e.media = "screen";
      e.innerHTML = "html, body {background-color: rgb(255, 255, 255);}";
      break;
    case "dark":
      e.type = "text/css";
      e.media = "screen";
      e.innerHTML = "html, body {background-color: rgb(0, 0, 0);}";
      break;
  }
  document.querySelector("head").appendChild(e);
}
