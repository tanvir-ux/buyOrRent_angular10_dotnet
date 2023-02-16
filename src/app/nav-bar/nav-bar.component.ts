import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedInUser:any;
  isCollapsed = false;
  constructor(
    private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit() {
  }

  loggedIn() {
   this.loggedInUser =  localStorage.getItem("token");
   return this.loggedInUser;
  }

  onLogout() {
    localStorage.removeItem("token");
    this.alertify.success("You are logged out!");
    this.router.navigate(['user/login']);
  }

}
