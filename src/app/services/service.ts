import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {

  constructor(private httpClient: HttpClient) { }

  getDataAPI (): any {
    const observer = this.httpClient.get('http://nolaborables.com.ar/api/v2/feriados/2018').pipe(map((feriados: any) => feriados));
    return observer;
  }

}

