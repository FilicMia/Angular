import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  user: any;
  @Input('user') userObj: User;
  isColapsed: boolean = true;
  
  constructor() { 
    
  }

  ngOnInit() {
    this.user = {
      name: this.userObj.name,
      title: this.userObj.title,
      address: this.userObj.address,
      phone:this.userObj.phone
  };
  }

}
