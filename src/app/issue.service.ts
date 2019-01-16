import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { ISSUES } from './mock-issues';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  getIssues(): Observable<Issue[]> {
    return of(ISSUES);
  }

  constructor() { }
}
