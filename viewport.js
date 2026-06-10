(function () {
  const metricNodes = new Map(
    Array.from(document.querySelectorAll("[data-metric]")).map((node) => [
      node.getAttribute("data-metric"),
      node,
    ])
  );
  const copyButton = document.querySelector("[data-copy-size]");
  const copyStatus = document.querySelector("[data-copy-status]");

  function setMetric(name, value) {
    const node = metricNodes.get(name);
    if (node) node.textContent = value;
  }

  function round(value) {
    return Math.round(value);
  }

  function getOrientation(width, height) {
    if (width === height) return "Square";
    return width > height ? "Landscape" : "Portrait";
  }

  function getSizeText() {
    return `${window.innerWidth} x ${window.innerHeight}`;
  }

  function updateMetrics() {
    const visual = window.visualViewport;
    const visualWidth = visual ? visual.width : window.innerWidth;
    const visualHeight = visual ? visual.height : window.innerHeight;

    setMetric("innerWidth", window.innerWidth);
    setMetric("innerHeight", window.innerHeight);
    setMetric("visualWidth", round(visualWidth));
    setMetric("visualHeight", round(visualHeight));
    setMetric("screenWidth", window.screen.width);
    setMetric("screenHeight", window.screen.height);
    setMetric("dpr", window.devicePixelRatio.toFixed(2).replace(/\.?0+$/, ""));
    setMetric("orientation", getOrientation(window.innerWidth, window.innerHeight));
  }

  function copyWithFallback(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }
    copyWithFallback(text);
  }

  window.addEventListener("resize", updateMetrics, { passive: true });
  window.addEventListener("orientationchange", updateMetrics, { passive: true });
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", updateMetrics, { passive: true });
    window.visualViewport.addEventListener("scroll", updateMetrics, { passive: true });
  }

  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      try {
        await copyText(getSizeText());
        if (copyStatus) copyStatus.textContent = "Copied " + getSizeText();
      } catch (error) {
        if (copyStatus) copyStatus.textContent = "Copy failed";
      }
    });
  }

  updateMetrics();
})();
