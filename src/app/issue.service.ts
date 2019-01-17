import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { ISSUES } from './mock-issues';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private isUrl = 'http://api.github.com/users?page=1&per_page=100';  // URL to web api

  constructor( private http: HttpClient) { }

  /** GET issues from the server */
  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.isUrl)
    .pipe(
      catchError(this.handleError('getIssues', []))
    );
  }

    /** GET hero by id. Will 404 if id not found */
  getIssue(id: number): Observable<Issue> {
    const url = `${this.isUrl}/${id}`;
    return this.http.get<Issue>(url).pipe(
      catchError(this.handleError<Issue>(`getIssue id=${id}`))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

 
}
