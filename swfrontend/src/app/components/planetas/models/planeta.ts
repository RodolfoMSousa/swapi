export class Planeta {

    nome: string;
    populacao: number;
    clima: string;
    periodoRotacao: string;
    peridoOrbital: string;
    diametro: string;
    gravidade: string;
    terreno: string;
    qtdAguaSuperficie: string;

    constructor(item) {
        this.nome = item.name;
        this.populacao = item.population;
        this.clima = item.climate;
        this.periodoRotacao = item.rotation_period;
        this.peridoOrbital = item.orbital_period;
        this.diametro = item.diameter;
        this.gravidade = item.gravity;
        this.terreno = item.terrain;
        this.qtdAguaSuperficie = item.surface_water;
    }
}
