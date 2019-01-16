import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { ISSUES } from '../mock-issues';


@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  issues = ISSUES;

  issue: Issue = {
    url: 'httpsblabla',
    title: 'A very horrible bug',
    state: 'open',
    created_at: 'today',
    updated_at: 'tmw'
  };

  selectedIssue: Issue;
onSelect(issue: Issue): void {
  this.selectedIssue = issue;
}
  constructor() { }

  ngOnInit() {
  }

}
