// Switch theme by setting data-theme attribute on <body>
document.addEventListener("click", (e) => {
  const theme = e.target.dataset.theme;
  if (theme) {
    document.body.setAttribute("data-theme", theme);
  }
});
