import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import {User} from '../../models/user';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
 
  constructor( )  {}
  
  user : User = new User();

 
  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.user);
  }
}


  
  
