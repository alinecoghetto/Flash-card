function criaCartao( categoria, pergunta, resposta) {
  let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
<div class="cartao__conteudo">
                <h3>matemática</h3>
                <div class="cartao__conteudo__pergunta">
                        <p>qual o coseno de 60° ?</p>
                </div>
                <div class="cartao__conteudo__resposta">
                       <p> = 1/2 </p>
                </div>
        </div>
    `

    container.appendChild(cartao)
}