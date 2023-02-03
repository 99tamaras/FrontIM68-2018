import { Proizvod } from "./proizvod.model";
import { Racun } from './racun.model';

export class StavkaRacuna {
  id!: number;
  redniBroj!: number;
  kolicina!: number;
  jedinicaMere!: string;
  cena!: number;
  racun!: Racun;
  proizvod!: Proizvod;
}