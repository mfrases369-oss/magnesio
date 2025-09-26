document.addEventListener("DOMContentLoaded", function () {
  const checkoutLinks = {
    "Kit Maracujá": "https://pay.ospagamentosseguros.shop/521rZJzE9J4ZeaX",
    "Kit Abacaxi com Hortelã": "https://pay.ospagamentosseguros.shop/JqoR32bk82A3Vj5",
    "Kit Frutas Vermelhas": "https://pay.ospagamentosseguros.shop/KV603ko7bk03w8y",
    "Kit 1 De Cada Sabor": "https://pay.ospagamentosseguros.shop/a6pVgd2Y0RxZk7B",
    "1 De Frutas Vermelhas": "https://pay.ospagamentosseguros.shop/QqyLgqoV9ldZvkE",
    "1 De Abacaxi com Hortelã": "https://pay.ospagamentosseguros.shop/nWrxGWA4J0D3654",
    "1 De Maracujá": "https://pay.ospagamentosseguros.shop/P5LNZ8zld4QgaRy"
  };

  let selectedFlavor = null;

  // Captura os radios de sabor
  const flavorRadios = document.querySelectorAll("input[name='option1']");
  flavorRadios.forEach(radio => {
    radio.addEventListener("change", function () {
      selectedFlavor = this.value;
      console.log("Sabor selecionado:", selectedFlavor);
    });
  });

  // Função para redirecionar para o checkout
  function handleBuyClick(event) {
    event.preventDefault();

    if (!selectedFlavor) {
      alert("Por favor, selecione um sabor antes de comprar.");
      return;
    }

    const checkoutUrl = checkoutLinks[selectedFlavor];
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    } 
  }

  // Captura todos os botões de compra (principal + flutuante)
  const buyButtons = document.querySelectorAll("button.product-form__add-button, .botao-comprar-flutuante");
  buyButtons.forEach(btn => btn.addEventListener("click", handleBuyClick));

  // Se o botão flutuante for renderizado dinamicamente, escuta o documento inteiro
  document.body.addEventListener("click", function (e) {
    if (e.target.matches("button.product-form__add-button, .botao-comprar-flutuante")) {
      handleBuyClick(e);
    }
  });
});
