// Эффект печати роли + текущий год

(function () {
  var el = document.getElementById("typed");
  var phrases = [
    "AI Engineer · Python backend",
    "LLM-интеграции · RAG-боты",
    "ML-модерация · тесты · CI"
  ];
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (!el) return;

  var pi = 0, ci = 0, deleting = false;

  function tick() {
    var phrase = phrases[pi];
    if (!deleting) {
      ci++;
      el.textContent = phrase.slice(0, ci);
      if (ci === phrase.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
      setTimeout(tick, 60);
    } else {
      ci--;
      el.textContent = phrase.slice(0, ci);
      if (ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, 28);
    }
  }

  tick();
})();
