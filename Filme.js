class Filme{
    constructor(){
        this.titulo = "";
        this.ano = 0;
        this.genero = "";
        this.diretor = "";
        this.atores = [];
        this.duracao = 0;
    };

    Reproduzir(){
        console.log("Reproduzindo...");
    };

    Pausar(){
        console.log("Pausado...");
    };

    Avancar(){
        console.log("Avançando...");
    };

    Fechar(){
        console.log("Fechado...");
    };
};

var vingadores = new Filme();

vingadores.Reproduzir();

var hulk = new Filme();
var starWars = new Filme();

starWars.titulo = 100;
ß