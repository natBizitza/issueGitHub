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

  getIssue(id: number): Observable<Issue> {
    return of(ISSUES.find(issue => issue.id === id));
  }

  constructor() { }
}
