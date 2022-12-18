import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';

import { environment } from './../environment';
import { TransactionData } from './transactions.model';


@Injectable({ providedIn: 'root' })
export class TransactionsService {

  readonly transactionsUrl = `${environment.apiUrl}/transactions`;

  transactions$: Observable<TransactionData> | undefined;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  /** GET transactions from the server */
  getTransactions(): Observable<TransactionData> {
    if (!this.transactions$) {
      this.transactions$ = this.http.get<TransactionData>(this.transactionsUrl)
        .pipe(
          tap(data => data.days.sort((a, b) => new Date(b.id).getTime() - new Date(a.id).getTime())),
          shareReplay(1),
          catchError(this.handleError<TransactionData>('getTransactions', { days: [] }))
        )
    }

    return this.transactions$;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
