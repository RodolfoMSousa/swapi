export class Nave {

    nome: string;
    modelo: number;
    qtdPassageiros: string;
    manufaturado: string;
    valor: string;
    tamanho: string;
    velocidadeAtsmofericaMax: string;
    tamEquipe: string;
    capCarga: string;
    mglt: string;
    classe: string;
    tempo: number;

    constructor(item) {
        this.nome = item.name;
        this.modelo = item.model;
        this.qtdPassageiros = item.passengers;
        this.manufaturado = item.manufacturer;
        this.valor = item.cost_in_credits;
        this.tamanho = item.length;
        this.velocidadeAtsmofericaMax = item.max_atmosphering_speed;
        this.tamEquipe = item.crew;
        this.capCarga = item.cargo_capacity;
        this.mglt = item.MGLT;
        this.classe = item.starship_class;
    }
}
