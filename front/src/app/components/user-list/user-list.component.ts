import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user: User = new User();
  constructor() { }

  ngOnInit(): void {
  }

}
