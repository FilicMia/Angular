import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('user') user: User;
  isCollapsed: boolean = true;
  collapseButtonNames: string[] = ['Expand', 'Collapse'];
  buttonName: string = 'Expand';

  constructor() { }

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    this.buttonName = this.collapseButtonNames[this.isCollapsed ? 0 : 1]

  }

  ngOnInit() {
  }

}
