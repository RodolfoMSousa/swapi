export class Personagem {

    id: string;
    nome: string;
    anoNascimento: number;
    genero: string;
    altura: number;
    peso: number;
    corCabelo: string;
    corPele: string;
    corOlho: string;

    constructor(item) {
        this.id = item.id;
        this.nome = item.name;
        this.anoNascimento = item.birth_year;
        this.genero = item.gender;
        this.altura = item.height;
        this.peso = item.mass;
        this.corCabelo = item.hair_color
        this.corPele = item.skin_color
        this.corOlho = item.eye_color;
    }
}
