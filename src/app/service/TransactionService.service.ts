import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

    constructor(private http: HttpClient) {}

    getCarsSmall() {
      return this.http.get('/assets/data.json')
                    .toPromise()
                    .then(res => res);
    }
}