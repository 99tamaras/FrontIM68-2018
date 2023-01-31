import { Component, OnInit, ViewChild} from '@angular/core';


import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProizvodDialogComponent } from '../dialog/proizvod-dialog/proizvod-dialog.component';
import { Proizvod } from '../model/proizvod.model';
import { ProizvodService } from '../service/proizvod.service';

import { Proizvodjac } from './../model/proizvodjac.model';

@Component({
    selector: 'app-proizvod',
    templateUrl: './proizvod.component.html',
    styleUrls: ['./proizvod.component.css']
  })


  export class ProizvodComponent implements OnInit {
    displayedColumns = ['id', 'naziv', 'proizvodjac', 'actions'];

    proizvodjac!: Proizvodjac;


    //
    dataSource!: MatTableDataSource<Proizvod>;

    @ViewChild(MatPaginator)
    paginator!: MatPaginator;
  
    @ViewChild(MatSort)
    sort!: MatSort;

    
    constructor(public proizvodService: ProizvodService,
      public dialog: MatDialog
      ) { }
  
    ngOnInit(): void {
      this.loadData();
    }

    public loadData(){
      //
      this.proizvodService.getAllProizvod().subscribe( data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sortingDataAccessor = (data:any, property) =>{
          switch(property){
            case 'id': return data[property];
            default: return data[property].toLocaleLowerCase();
          }
        };
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }

    public openDialog(flag: number, id: number, naziv: string, proizvodjac: Proizvodjac) {
      const dialog = this.dialog.open(ProizvodDialogComponent, {data: {id: id, naziv: naziv, proizvodjac: proizvodjac}});
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