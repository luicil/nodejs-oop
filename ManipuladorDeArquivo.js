//COMPOSIÇÃO: A ARTE DE CRIAR CLASSES A PARTIR DE UMA CLASSE

//#region COMPONENTES

class Leitor{
    Ler(caminho){
        return "conteúdo";
    };
};

class Escritor{
    Escrever(arquivo, conteudo){
        console.log("conteúdo escrito");
    };
};

class Criador{
    Criador(caminho){
        console.log("arquivo criado");
    };
};

class Destruidor{
    Deletar(caminho){
        console.log("arquivo deletado");
    };
};

//#endregion COMPONENTES

class ManipuladorDeArquivo{
    construtor(nome = ""){
        this.arquivo = nome;
        this.leitor = new Leitor();
        this.escritor = new Escritor();
        this.criador = new Criador();
        this.destruidor = new Destruidor();
    };
};

var manipulador = new ManipuladorDeArquivo("teste.txt");
manipulador.criador.Criador();