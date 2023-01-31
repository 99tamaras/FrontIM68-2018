import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Proizvodjac } from 'src/app/model/proizvodjac.model';
import { ProizvodjacService } from 'src/app/service/proizvodjac.service';


@Component({
  selector: 'app-proizvodjac-dialog',
  templateUrl: './proizvodjac-dialog.component.html',
  styleUrls: ['./proizvodjac-dialog.component.css']
})
export class ProizvodjacDialogComponent implements OnInit {

  public flag!: number;

  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ProizvodjacDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: Proizvodjac,
    public proizvodjacService: ProizvodjacService ) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.proizvodjacService.addProizvodjac(this.data);
    this.snackBar.open('Uspešno dodat Proizvodjac ' + this.data.naziv, 'U redu', {duration: 2000});
  }

  public update(): void {
    this.proizvodjacService.updateProizvodjac(this.data);
    this.snackBar.open('Uspešno izmenjen Proizvodjac ' + this.data.naziv, 'U redu', {duration: 2000});
  }

  public delete(): void {
    this.proizvodjacService.deleteProizvodjac(this.data.id);
    this.snackBar.open('Uspešno obrisan Proizvodjac ' + this.data.id, 'U redu', {duration: 2000});
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'Uredu', {duration: 2000});
  }

}