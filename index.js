const cep        = document.querySelector('#cep');
const logradouro = document.querySelector('logradouro');
const bairro     = document.querySelector('#bairro');
const localidade = document.querySelector('#localidade');
const uf         = document.querySelector('#uf');

const mostrarDados = (resultado)=>{
  for(const campo in resultado){
      if (document.querySelector('#'+campo)){
          console.log(resultado[campo]);
          document.querySelector('#'+campo).value = resultado[campo];
      }
  }
}

cep.addEventListener("blur", (e) => {
  const procura = cep.value.replace("-","");
  fetch(`https://viacep.com.br/ws/${procura}/json`)
  .then(response => { response.json()
      .then(dados => mostrarDados(dados)
      
  )})
  .catch(erro => console.log('Erro: '+erro))
});
