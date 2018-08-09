import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardService } from '../guard.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private guardService: GuardService
    , private titleService: Title) { 
    this.guardService.restrictAccess = false;
    console.log("Admin", this.guardService.restrictAccess);
  }

  dashboard()
  {
    this.router.navigate(['/dashboard']);
  }
  ngOnInit() {
    this.titleService.setTitle('Admin');
  }

}
