class Dados{
    constructor(cFaces = 6, cMin = 1){
        this.max = cFaces;
        this.min = cMin;
    };

    static Rolar(cFaces = 6, cMin = 1){
        this.max = cFaces;
        this.min = cMin;
        var ret = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        console.log(ret);
        return ret;
    };
};

Dados.Rolar();