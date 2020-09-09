import { Personagem } from './personagem';

export class DatasetPersonagem {

    quantidade: number;
    proxima: string;
    anterior: string;
    personagens: Personagem[];

    constructor(item?) {
        if (item) {
            this.quantidade = item.count;
            this.proxima = item.next;
            this.anterior = item.previous;
            this.personagens = item.results.map(p => { return new Personagem(p) });
        }
    }
}