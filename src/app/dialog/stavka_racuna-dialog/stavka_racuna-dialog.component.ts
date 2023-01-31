import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Proizvod } from 'src/app/model/proizvod.model';
import { Racun } from 'src/app/model/racun.model';
import { ProizvodService } from 'src/app/service/proizvod.service';
import { RacunService } from 'src/app/service/racun.service';
import { StavkaRacunaService } from 'src/app/service/stavka_racuna.service';
import { StavkaRacuna } from './../../model/stavka_racuna.model';

@Component({
  selector: 'app-stavka_racuna-dialog',
  templateUrl: './stavka_racuna-dialog.component.html',
  styleUrls: ['./stavka_racuna-dialog.component.css']
})
export class StavkaRacunaDialogComponent implements OnInit {

  public flag!: number;

  proizvod!: Proizvod[];
  racun!: Racun[];

  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<StavkaRacunaDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: StavkaRacuna,
    public stavkaRacunaService: StavkaRacunaService,
    public racunService: RacunService,
    public proizvodService: ProizvodService ) { }

  ngOnInit(): void {
    this.proizvodService.getAllProizvod().subscribe(proizvod =>
    this.proizvod = proizvod);
    this.racunService.getAllRacun().subscribe(racun =>
    this.racun = racun);
  }

  public add(): void {
    this.stavkaRacunaService.addStavkaRacuna(this.data);
    this.snackBar.open('Uspešno dodata stavka racuna ' + this.data.id, 'U redu', {duration: 2000});
  }

  public update(): void {
    this.stavkaRacunaService.updateStavkaRacuna(this.data);
    this.snackBar.open('Uspešno izmenjena stavka racuna ' + this.data.id, 'U redu', {duration: 2000});
  }

  public delete(): void {
    this.stavkaRacunaService.deleteStavkaRacuna(this.data.id);
    this.snackBar.open('Uspešno obrisana stavka racuna ' + this.data.id, 'U redu', {duration: 2000});
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'U redu', {duration: 2000});
  }

  compareTo(a: any, b: any) {
    return a.id === b.id;
  }

}