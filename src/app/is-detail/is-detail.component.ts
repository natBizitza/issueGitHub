import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../issue';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { IssueService }  from '../issue.service';

@Component({
  selector: 'app-is-detail',
  templateUrl: './is-detail.component.html',
  styleUrls: ['./is-detail.component.css']
})
export class IsDetailComponent implements OnInit {
  @Input() issue: Issue;

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getIssue();
  }
  
  getIssue(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.issueService.getIssue(id)
      .subscribe(issue => this.issue = issue);
  }

  goBack(): void {
    this.location.back();
  }
}
