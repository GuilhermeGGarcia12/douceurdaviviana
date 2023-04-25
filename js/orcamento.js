// Selecione os elementos de sabor, peso e input total
const saborSelect = document.getElementById("sabor-select");
const pesoSelect = document.getElementsByName("Tipo de evento")[1];
const totalInput = document.getElementById("input");

// Adicione um evento de mudança nos elementos de seleção
saborSelect.addEventListener("change", calcularValorBolo);
pesoSelect.addEventListener("change", calcularValorBolo);

// Função que calcula o valor do bolo e atualiza o input "Total"
function calcularValorBolo() {
  // Obtenha o valor selecionado de sabor e peso
  const saborSelecionado = saborSelect.value;
  const pesoSelecionado = pesoSelect.value;

  // Defina o preço base do bolo como 50
  let precoBase = 50;

  // Adicione um valor adicional com base no sabor selecionado
  switch (saborSelecionado) {
    case "Morango":
    case "Ninho com Morango":
      precoBase += 10;
      break;
    case "Prestígio":
      precoBase += 15;
      break;
    case "Abacaxí":
    case "Laranja":
      precoBase += 5;
      break;
    case "Cenoura":
      precoBase += 7;
      break;
    case "Mousse de Chocolate":
    case "Mousse de Maracujá":
      precoBase += 12;
      break;
    default:
      break;
  }

  // Adicione um valor adicional com base no peso selecionado
  switch (pesoSelecionado) {
    case "2 kg":
      precoBase += 30;
      break;
    case "3 kg":
      precoBase += 60;
      break;
    case "4 kg":
      precoBase += 90;
      break;
    case "5 kg":
      precoBase += 120;
      break;
    case "6 kg":
      precoBase += 150;
      break;
    case "7 kg":
      precoBase += 175;
      break;
    case "8 kg":
      precoBase += 200;
      break;
    case "9 kg":
      precoBase += 225;
      break;
    case "10 kg":
      precoBase += 250;
      break;
    default:
      break;
  }

  // Atualize o valor do input "Total"
  totalInput.value = "R$" + precoBase.toFixed(2);
}