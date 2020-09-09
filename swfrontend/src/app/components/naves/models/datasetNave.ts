import { Nave } from './nave';

export class DatasetNave {

    quantidade: number;
    proxima: string;
    anterior: string;
    naves: Nave[];

    constructor(item?) {
        if (item) {
            this.quantidade = item.count;
            this.proxima = item.next;
            this.anterior = item.previous;
            this.naves = item.results.map(p => { return new Nave(p) });
        }
    }
}