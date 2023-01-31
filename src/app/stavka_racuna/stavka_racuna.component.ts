import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StavkaRacunaDialogComponent } from '../dialog/stavka_racuna-dialog/stavka_racuna-dialog.component';
import { Proizvod } from '../model/proizvod.model';
import { Racun } from '../model/racun.model';
import { StavkaRacunaService } from '../service/stavka_racuna.service';
import { StavkaRacuna } from './../model/stavka_racuna.model';

@Component({
  selector: 'app-stavka_racuna',
  templateUrl: './stavka_racuna.component.html',
  styleUrls: ['./stavka_racuna.component.css']
})
export class StavkaRacunaComponent implements OnInit {

  displayedColumns = ['id', 'redni_broj', 'kolicina', 'jedinica_mere', 'cena', 'racun', 'proizvod', 'actions'];

  
  dataSource!: MatTableDataSource<StavkaRacuna>;

  racun!: Racun;

  proizvod!: Proizvod;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  @Input()
  selektovaniRacun!: Racun;

  constructor(public stavkaRacunaService: StavkaRacunaService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnChanges(): void {
    if (this.selektovaniRacun.id) {
      this.loadData();
    }
  }

  public loadData(){
    this.stavkaRacunaService.getAllStavkeZaRacun(this.selektovaniRacun.id).subscribe( data => {
      this.dataSource = new MatTableDataSource(data);

      // pretraga po stranom kljucu
      this.dataSource.filterPredicate = (data: any, filter: string) => {
        const accumulator = (currentTerm: string, key: string) => {
          return key === 'proizvod' ? currentTerm + data.proizvod.naziv : currentTerm + data[key];
        };
        const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
        const transformedFilter = filter.trim().toLowerCase();
        return dataStr.indexOf(transformedFilter) !== -1;
      };

      this.dataSource.sortingDataAccessor = (data:any, property) =>{
        switch(property){
          case 'id': return data[property];
          case 'redni_broj': return data[property];
          case 'jedinica_mere': return data[property];
          case 'kolicina': return data[property];
          case 'cena': return data[property];
          case 'proizvod': return data.proizvod.naziv.toLocaleLowerCase();
          default: return data[property].toLocaleLowerCase();
        }
      };
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
 }

  public openDialog(flag: number, id: number, redni_broj: number, jedinica_mere: string, kolicina: number,  cena: number, racun: Racun, proizvod: Proizvod) {
    const dialog = this.dialog.open(StavkaRacunaDialogComponent, {data: {id: id, redni_broj: redni_broj, jedinica_mere: jedinica_mere, kolicina: kolicina,  cena: cena, racun: racun, proizvod: proizvod}});
    dialog.componentInstance.flag = flag;
    dialog.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    })
  }

  applyFilter(filterValue: string) {
    filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }


}
