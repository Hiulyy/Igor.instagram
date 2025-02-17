const modoEscuro = () =>{
    const header =document.querySelector("header");
    const footer =document.querySelector("footer"); 
    const main = document.querySelector("main");
    const butao = document.querySelector("button");

    if(butao.classList.contains("modo-claro")){
      header.classList.add("modo-escuro")
      main.classList.add("modo-escuro")
      footer.classList.add("modo-escuro")
      butao.classList.add("modo-escuro")
      butao.classList.remove("modo-claro")

      butao.textContent = "Desativar modo escuro"

    } else{
        header.classList.remove("modo-escuro")
        main.classList.remove("modo-escuro")
        footer.classList.remove("modo-escuro")
        butao.classList.add("modo-claro")

        
      butao.textContent = "Ativar modo escuro"

    }
}