import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Proizvod } from '../model/proizvod.model';

@Injectable({
  providedIn: 'root'
})
export class ProizvodService {
  private readonly API_URL = 'http://localhost:8082/proizvod/';

  dataChange: BehaviorSubject<Proizvod[]> = new BehaviorSubject<Proizvod[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllProizvod(): Observable<Proizvod[]> {
    this.httpClient.get<Proizvod[]>(this.API_URL).subscribe(
      (data) => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }
    );
    return this.dataChange.asObservable();
  }
  
    public addProizvod(proizvod: Proizvod): void {
      this.httpClient.post(this.API_URL, proizvod).subscribe();
    }
  
    public updateProizvod(proizvod: Proizvod): void {
      this.httpClient.put(this.API_URL + proizvod.id, proizvod).subscribe();
    }
  
    public deleteProizvod(id: number): void {
      this.httpClient.delete(this.API_URL + id).subscribe();

    
  }
  
}
