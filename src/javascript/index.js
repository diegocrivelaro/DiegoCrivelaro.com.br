document.addEventListener("DOMContentLoaded", function () {
  let width = 0;
  let interval = setInterval(function () {
    if (width >= 100) {
      clearInterval(interval);
      document.getElementById("loading-screen").style.opacity = 0;
      setTimeout(function () {
        document.getElementById("loading-screen").style.display = "none";

        // Adicione uma mensagem alertando que o layout é temporário. Quero uma mensagem bem pequena no canto
        // inferior direito da tela, que não atrapalhe a visualização do layout. A mensagem deve ser fixa e não
        // deve sumir ao rolar a página.
        let message = document.createElement("div");
        message.id = "temporary-layout-message";
        message.style.position = "fixed";
        message.style.top = "6px";
        message.style.padding = "10px";
        message.style.backgroundColor = "#f00";
        message.style.color = "#fff";
        message.style.borderRadius = "5px";
        message.style.zIndex = "1000";
        message.innerText = "Layout temporário";
        document.body.appendChild(message);
      }, 500);
    } else {
      width++;
      document.getElementById("loading-bar").style.width = width + "%";
      document.getElementById("loading-text").innerText = width + "%";
    }
  }, 10);
});
