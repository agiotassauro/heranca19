class Personagem{
  constructor(nome, nacionalidade, poder){
    this.nome = nome
    this.nacionalide = nacionalidade
    this.poder = poder
  }
  formulario(){
    console.log(`${this.nome} possui origem ${this.nacionalide}, e como ${this.poder} poder!`);
  }
}

class Barbaro extends Personagem(){
  constructor(nome, nacionalidade, poder, forca){
    super(nome, nacionalidade, poder)
    this.forca = forca
  }
}

class Mago extends Personagem(){
  constructor(nome, nacionalidade, poder, magia){
    super(nome, nacionalidade, poder)
    this.magia = magia;
  }
}

let pessoa1 = new Barbaro("Conan", "Magdar", "Resistencia", "150")
pessoa1.formulario()
console.log(pessoa1.forca);
let pessoa2 = new Mago("Salomão", "Artron", "Fogo Primordial", "155")
pessoa2.formulario()
console.log(pessoa2.magia);