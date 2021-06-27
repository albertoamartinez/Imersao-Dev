function adicionarFilme(){
    var campoFilmeFavorito = document.querySelector('#filme')
    var filmeFavorito = campoFilmeFavorito.value
    if(filmeFavorito.endsWith('.jpg')){
        listarFilmesNaTela(filmeFavorito)
    } else {
        alert("Imagem Invalida")
    }
    campoFilmeFavorito.value = ""
}
function listarFilmesNaTela(filme){
    var listaFilmes = document.querySelector('#listafilmes')
    var elementoFavorito = "<img src= " + filme + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFavorito
}