import { Planeta } from './planeta';

export class DatasetPlaneta {

    quantidade: number;
    proxima: string;
    anterior: string;
    planetas: Planeta[];

    constructor(item?) {
        if (item) {
            this.quantidade = item.count;
            this.proxima = item.next;
            this.anterior = item.previous;
            this.planetas = item.results.map(p => { return new Planeta(p) });
        }
    }
}