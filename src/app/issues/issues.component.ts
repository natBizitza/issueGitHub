import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { ISSUES } from '../mock-issues';
import { IssueService } from '../issue.service';


@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  issues: Issue[];

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
  constructor(private issueService: IssueService) { }

  getIssues(): void {
    this.issueService.getIssues()
        .subscribe(issues => this.issues = issues);
  }

  ngOnInit() {
    this.getIssues();
  }

}
