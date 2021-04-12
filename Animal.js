class Animal{
    construtor(nome, idade, preco){
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;
    };

    ChecarEstoque(){
        return 10;
    }

};

class Cachorro extends Animal{

    constyructor(nome, idade, preco, raca, peso){
        super(nome, idade, preco);
        this.raca = raca;
        this.peso = peso;
    };

    Latir(){
        return "au, au...";
    }

    ChecarEstoque(){
        return super.ChecarEstoque() + 10;
    }
}

var dog = new Cachorro("Dogão", 4, 15);
console.log(dog.ChecarEstoque());
console.log(dog.Latir());
