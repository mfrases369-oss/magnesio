document.addEventListener("DOMContentLoaded", function () {
  // Mapeamento: cada sabor → link fixo de checkout
  const checkoutLinks = {
    "Kit Maracujá": "https://pay.ospagamentosseguros.shop/zj6aGnAjN0WZwlK",
    "Kit Abacaxi com Hortelã": "https://pay.ospagamentosseguros.shop/zj6aGnAjN0WZwlK",
    "Kit Frutas Vermelhas": "https://pay.ospagamentosseguros.shop/zj6aGnAjN0WZwlK",
    "Kit 1 De Cada Sabor": "https://pay.ospagamentosseguros.shop/zj6aGnAjN0WZwlK",
    "1 De Frutas Vermelhas": "https://pay.ospagamentosseguros.shop/VroegN1JlB1GKwj",
    "1 De Abacaxi com Hortelã": "https://pay.ospagamentosseguros.shop/VroegN1JlB1GKwj",
    "1 De Maracujá": "https://pay.ospagamentosseguros.shop/VroegN1JlB1GKwj"
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

  // Captura o botão de compra
  const buyButton = document.querySelector("button.product-form__add-button");
  if (buyButton) {
    buyButton.addEventListener("click", function (e) {
      e.preventDefault();

      if (!selectedFlavor) {
        alert("Por favor, selecione um sabor antes de comprar.");
        return;
      }

      const checkoutUrl = checkoutLinks[selectedFlavor];
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        alert("Esta opção ainda não tem link de checkout configurado.");
      }
    });
  }
});
