function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    

    if(!campoPesquisa){
        section.innerHTML = "<p>Nenhum pokemon encontrado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();
let pesquisaDados = "";
let titulo = "";
let descricao ="";

for(let dado of dados){
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
        pesquisaDados+= ` 
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <img class="charmander" src=${dado.imagem} alt="Charmander">
                <p class="descricao-meta">${dado.descricao}</p>

            <div class="tipo-pokemon">
                <p class="pokemon-type">Tipo: </p>
                <img class="tipo-fogo" src=${dado.tipo} alt="Tipo">
                <img class="tipo-fogo" src=${dado.tipoDois} alt="Tipo">

            <div class="fraquezas">
                <p class="weakness">Fraquezas: </p>
                <img class="tipo-terra" src="${dado.fraquezaUm}" alt="Tipo terra">
                <img class="tipo-terra" src="${dado.fraquezaDois}" alt="Tipo pedra">
                <img class="tipo-terra" src="${dado.fraquezaTres}" alt="Tipo água">
                <img class="tipo-terra" src="${dado.fraquezaQuatro}" alt="Tipo pedra">
                <img class="tipo-terra" src="${dado.fraquezaCinco}" alt="Tipo água">
            </div>
            `;


    }

    
            

}

section.innerHTML = pesquisaDados;




}







