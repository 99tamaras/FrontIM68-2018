
import { ProizvodService } from './service/proizvod.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProizvodComponent } from './proizvod/proizvod.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';


import { RacunComponent } from './racun/racun.component';
import { StavkaRacunaComponent } from './stavka_racuna/stavka_racuna.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { AuthorComponent } from './core/author/author.component';


import { ProizvodjacComponent } from './proizvodjac/proizvodjac.component';
import { ProizvodjacDialogComponent } from './dialog/proizvodjac-dialog/proizvodjac-dialog.component';
import { ProizvodjacService } from './service/proizvodjac.service';
import { RacunDialogComponent } from './dialog/racun-dialog/racun-dialog.component';
import { RacunService } from './service/racun.service';
import { StavkaRacunaService } from './service/stavka_racuna.service';
import { StavkaRacunaDialogComponent } from './dialog/stavka_racuna-dialog/stavka_racuna-dialog.component';
import { ProizvodDialogComponent } from './dialog/proizvod-dialog/proizvod-dialog.component';

const Routes = [{path: 'proizvod', component: ProizvodComponent},
                {path: 'proizvodjac', component: ProizvodjacComponent},
                {path: 'racun', component: RacunComponent},
                {path: 'stavkaRacuna', component: StavkaRacunaComponent},
                {path: 'home', component: HomeComponent},
                {path: 'author', component: AuthorComponent},
                {path: 'about', component: AboutComponent}
                
              ]; 

@NgModule({
  declarations: [
    AppComponent,
    ProizvodComponent,

    RacunComponent,
    StavkaRacunaComponent,
    HomeComponent,
    AboutComponent,
    AuthorComponent,
    ProizvodjacComponent,
    ProizvodDialogComponent,
    ProizvodjacDialogComponent,
    RacunDialogComponent,
    StavkaRacunaDialogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    
    MatSidenavModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSortModule,
    MatPaginatorModule,
   RouterModule.forRoot(Routes)
   
    
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}, ProizvodService , ProizvodjacService , RacunService, StavkaRacunaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
