import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() c2:string
  // name: string;
  constructor() {
    // this.name = c1;
   }

  ngOnInit(): void {
  }

}
