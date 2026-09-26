(function () {
  var root = document.documentElement;

  function save(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }

  document.querySelector(".lang-toggle").addEventListener("click", function () {
    var next = root.getAttribute("data-lang") === "ko" ? "en" : "ko";
    root.setAttribute("data-lang", next);
    root.lang = next;
    save("irl-lang", next);
  });

  // 공개용 빌드에는 검토 메모 버튼이 없다
  var todoToggle = document.querySelector(".todo-toggle");
  if (todoToggle) {
    todoToggle.addEventListener("click", function () {
      var hidden = root.classList.toggle("hide-todo");
      save("irl-todo", hidden ? "off" : "on");
    });
  }

  // 움직임 줄이기를 켠 방문자에게는 자동 재생 영상을 멈춘 채로(첫 장면만) 보여준다
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("video[autoplay]").forEach(function (v) {
      v.removeAttribute("autoplay");
      v.pause();
      v.controls = true;
    });
  }

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();
