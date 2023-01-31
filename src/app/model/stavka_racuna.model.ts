import { Proizvod } from "./proizvod.model";
import { Racun } from './racun.model';

export class StavkaRacuna {
  id!: number;
  redni_broj!: number;
  kolicina!: number;
  jedinica_mere!: string;
  cena!: number;
  racun!: Racun;
  proizvod!: Proizvod;
}