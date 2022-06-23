/** ========================
     ÁREA DA 'BUSCA POR CEP' 
    ========================
*/

/* Botão do CEP. Está funcional! */
const btn_cep = document.getElementById("button__cep");

/* 'cepValueIsNumber' confirmará se todos os caracteres são números e 
se o campo 'cep' foi preenchido */
const cepValueIsNumber = (cep) => /^[0-9]+$/.test(cep); 

/* 'searchCep' buscará as informações com base no CEP digitado */
function searchCep(event) {
  if (event.type === 'click') event.preventDefault();
  const cep = document.getElementById('cep').value.replace("-","");
  const url = `https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=${cep}`;
  
  if (cepValueIsNumber(cep)){
    fetch(url, {mode: 'no-cors'})
    .catch(e => console.log("Erro: " + e.message));
  }else {
    window.alert("CEP incorreto! Tente mais uma vez.");
  }
  
}

/* Ao clicar no botão do CEP (ou der um 'Enter'), 
entrará na função 'searchCep' */
btn_cep.addEventListener("click", searchCep);

/* Evento adicional caso o 'click' não funcione */
document.getElementById('cep').addEventListener('blur', searchCep);
    
