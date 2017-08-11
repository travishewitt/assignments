function addClass(el, newClass) {
    if (el.className === "") {
        el.className += newClass;
    } else if (el.className.indexOf(newClass) === -1) {
    el.className += " " + newClass;
  }
}