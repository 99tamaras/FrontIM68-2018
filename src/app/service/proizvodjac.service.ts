import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Proizvodjac } from '../model/proizvodjac.model';

@Injectable()
export class ProizvodjacService {
  private readonly API_URL = 'http://localhost:8082/proizvodjac/';

  dataChange: BehaviorSubject<Proizvodjac[]> = new BehaviorSubject<Proizvodjac[]>([]);

  constructor(private httpClient: HttpClient) {}

  public getAllProizvodjac(): Observable<Proizvodjac[]> {
    this.httpClient.get<Proizvodjac[]>(this.API_URL).subscribe(
      (data) => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }
    );
    return this.dataChange.asObservable();
  }

  public addProizvodjac(proizvodjac: Proizvodjac): void {
    this.httpClient.post(this.API_URL, proizvodjac).subscribe();
  }

  public updateProizvodjac(proizvodjac: Proizvodjac): void {
    this.httpClient.put(this.API_URL + proizvodjac.id, proizvodjac).subscribe();
  }

  public deleteProizvodjac(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
  }
}