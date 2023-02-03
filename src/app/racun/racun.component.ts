import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RacunDialogComponent } from '../dialog/racun-dialog/racun-dialog.component';
import { Racun } from '../model/racun.model';
import { RacunService } from '../service/racun.service';


@Component({
  selector: 'app-racun',
  templateUrl: './racun.component.html',
  styleUrls: ['./racun.component.css']
})
export class RacunComponent implements OnInit {

  displayedColumns = ['id', 'datum', 'nacinPlacanja',  'actions'];

  today: Date = new Date();

  
  dataSource!: MatTableDataSource<Racun>;

  selektovaniRacun!: Racun;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public racunService: RacunService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    
    this.racunService.getAllRacun().subscribe( data => {
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

  public openDialog(flag: number, id: number, datum: Date, nacinPlacanja: string) {
    const dialog = this.dialog.open(RacunDialogComponent, {data: {id: id, datum: datum, nacinPlacanja: nacinPlacanja}});
    dialog.componentInstance.flag = flag;
    dialog.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    })
  }

  public selectedRow(row: Racun): void {
    this.selektovaniRacun = row;

  }

  applyFilter(filterValue: string) {
    filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }


}