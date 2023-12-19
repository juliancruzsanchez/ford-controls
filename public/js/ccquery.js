window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);
window.$_ = document.getElementById.bind(document)
window.html = $("html");
window.getCssVar = function (one, two) {
  if (one && two) {
    return getComputedStyle(one).getPropertyValue('--' + two)
  } else if (one) {
    return getComputedStyle(document.documentElement).getPropertyValue('--' + one)
  }
}
const elementFunctions = {
  attr(attrName, value) {
    return typeof value == "undefined" ? this.getAttribute(attrName) || "": this.setAttribute(attrName, value);
  },
  hasClass(className) {
    return ((this.attr("class") || "").split(" ").indexOf(className) !== -1); 
  },
  addClass(className) {
    this.hasClass(className) ? null : this.attr("class", `${this.attr("class")} ${className}`);
  },
  removeClass(className) {
    this.attr("class",this.attr("class").replace(className, "").trim());
  },
  window: window
}

  String.prototype.capitalize = function () {
  return this.replace(/\b\w/g, function (l) {
    return l.toUpperCase();
  });
};


SVGElement.prototype = Object.assign(SVGElement.prototype, elementFunctions)
HTMLElement.prototype = Object.assign(HTMLElement.prototype, elementFunctions)

NodeList.prototype.forEach = Array.prototype.forEach;

Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    return JSON.parse(this.getItem(key));
}

window.request = function(url, method, callback)  {
  var request = new XMLHttpRequest();
  request.addEventListener("load", function(){
  callback(this.responseText)
  });
  request.open(method, url);
  request.send();
}

window.requestAsync = function(url, method) {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    request.addEventListener("load", function(){
      resolve(this.responseText)
    });
    request.open(method, url);
    request.send();
  })
}
