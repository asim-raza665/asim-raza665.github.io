(function () {
  function init() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    var el = document.getElementById("cg");
    if (!el) {
      return;
    }
    function move(clientX, clientY) {
      el.style.left = clientX + "px";
      el.style.top = clientY + "px";
    }
    document.addEventListener(
      "mousemove",
      function (e) {
        move(e.clientX, e.clientY);
      },
      { passive: true }
    );
    move(Math.floor(window.innerWidth / 2), Math.floor(window.innerHeight / 2));
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
