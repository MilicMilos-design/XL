/* XL Pizzeria — interakcije. Vanilla JS, bez zavisnosti. */
(function () {
  "use strict";

  /* --- Mobilni meni --- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* --- Meni tabovi --- */
  var tabs = document.querySelectorAll(".menu-tab");
  var panels = document.querySelectorAll(".menu-panel");
  if (tabs.length) {
    function activate(id) {
      tabs.forEach(function (t) {
        var on = t.getAttribute("data-target") === id;
        t.setAttribute("aria-selected", on ? "true" : "false");
        t.tabIndex = on ? 0 : -1;
      });
      panels.forEach(function (p) {
        p.classList.toggle("is-active", p.id === id);
      });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { activate(t.getAttribute("data-target")); });
      t.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
          e.preventDefault();
          var dir = e.key === "ArrowRight" ? 1 : -1;
          var next = (i + dir + tabs.length) % tabs.length;
          tabs[next].focus();
          activate(tabs[next].getAttribute("data-target"));
        }
      });
    });
  }

  /* --- Reveal on scroll --- */
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.14 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* --- Istakni današnji dan u tabeli radnog vremena --- */
  var hoursRows = document.querySelectorAll(".hours-table tr[data-day]");
  if (hoursRows.length) {
    var today = new Date().getDay(); // 0=ned ... 6=sub
    hoursRows.forEach(function (r) {
      if (parseInt(r.getAttribute("data-day"), 10) === today) r.classList.add("today");
    });
  }

  /* --- Godina u futeru --- */
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();

  /* --- Film-grain sloj (ubacuje se automatski) --- */
  var grain = document.createElement("div");
  grain.className = "grain";
  grain.setAttribute("aria-hidden", "true");
  document.body.appendChild(grain);

  /* --- Back-to-top dugme (ubacuje se automatski) --- */
  var toTop = document.createElement("button");
  toTop.className = "to-top";
  toTop.setAttribute("aria-label", "Nazad na vrh");
  toTop.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>';
  document.body.appendChild(toTop);
  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  var onScroll = function () {
    if (window.scrollY > 500) toTop.classList.add("show");
    else toTop.classList.remove("show");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
