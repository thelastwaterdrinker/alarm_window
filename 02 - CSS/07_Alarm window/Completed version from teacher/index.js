init(document.getElementById("window"));

function init(element) {
  let windowX = 0,
    windowY = 0,
    mouseX = 0,
    mouseY = 0;

  element.onmousedown = dragMouseDown;
  element.querySelector("button").onclick = removeWindow;

  function dragMouseDown(e) {
    e.preventDefault();
    // calculate the  cursor position:
    mouseX = e.clientX;
    mouseY = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    // calculate the new cursor position:
    windowX = mouseX - e.clientX;
    windowY = mouseY - e.clientY;
    mouseX = e.clientX;
    mouseY = e.clientY;
    // set the element's new position:
    element.style.top = element.offsetTop - windowY + "px";
    element.style.left = element.offsetLeft - windowX + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }

  function removeWindow() {
    element.remove();
  }
}
