/** =============================
     ÁREA DA 'BUSCA POR PRODUTOS' 
    =============================
*/

/* Botão do SELLER. Está funcional! */
const btn_seller = document.getElementById("button__seller");

/* Nomes INVÁLIDOS p/ a busca */
const sellerInvalid = [
  "carrefourbr", // 0
  "", // 1
  "carrefour", // 2
];

/* 'searchSeller' buscará os produtos com base na LOJA digitada.
A estrutura condicional 'if' verificará se o nome digitado está disponível
lá em 'sellerNames' */
function searchSeller(event) {
  
  const seller = document.getElementById('seller__name').value.replace(" ","");
  const url = `https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq=${seller}`;
  
  if (event.type === 'click') event.preventDefault();
  if ((seller !== sellerInvalid[0]) &&
      (seller !== sellerInvalid[1]) &&
      (seller !== sellerInvalid[2])){
    fetch(url, {mode: 'no-cors'})
    .catch(e => console.log("Erro: " + e.message));
  } else {
    window.alert("LOJA não encontrada! Verifique o nome e tente novamente.");
  }

}

/* Ao clicar no botão do SELLER (ou der um 'Enter'), 
entrará na função 'searchSeller' */
btn_seller.addEventListener("click", searchSeller);

/* Evento adicional caso o 'click' não funcione */
document.getElementById('seller__name').addEventListener('blur', searchSeller);
   
