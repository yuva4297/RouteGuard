import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardService } from '../guard.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router, private guardService: GuardService, private titleService: Title) { 
    this.guardService.restrictAccess = true;

  }

  adminDashboard()
  {
    this.router.navigate(['/admin']);
  }
  ngOnInit() {
    this.titleService.setTitle('User');
  }

}
