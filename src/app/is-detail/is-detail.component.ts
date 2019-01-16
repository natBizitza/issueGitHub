import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../issue';

@Component({
  selector: 'app-is-detail',
  templateUrl: './is-detail.component.html',
  styleUrls: ['./is-detail.component.css']
})
export class IsDetailComponent implements OnInit {
  @Input() issue: Issue;

  constructor() { }

  ngOnInit() {
  }

}
