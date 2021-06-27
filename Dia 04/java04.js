/*
var filme1 = "Star Wars"
var filme2 = "Toy Story"
var filme3 = "Interestellar"

var filmes = ["Star Wars", "Toy Story", "Interestellar", "Esqueceram de mim", "Marley & Eu"]

console.log(filme1, filme2, filme3)
console.log(filmes)
console.log(filmes[0])
console.log(filmes[1])
console.log(filmes[2])

var tentativas = 3

while (tentativas > 0){
    console.log(tentativas)
    tentativas -= 1
}

for (var i = 0; i < filmes.length; i++){
    console.log(filmes[i])
}
*/
var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", 
                    "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "https://m.media-amazon.com/images/M/MV5BYTdiZGY1MTctMjQzYy00ZTc0LThiM2EtY2U2OGIwYjBiNTM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"]

for (var i = 0; i < listaFilmes.length; i++){
    document.write("<img src= " + listaFilmes[i] + ">")
}