import { Proizvodjac } from "./proizvodjac.model";

export class Proizvod {
    id!: number;
    naziv!: string;
    proizvodjac!: Proizvodjac;
  }