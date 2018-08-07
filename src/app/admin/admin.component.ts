import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardService } from '../guard.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private guardService: GuardService) { 
    this.guardService.changeAccess();
  }

  dashboard()
  {
    this.router.navigate(['/dashboard']);
  }
  ngOnInit() {
  }

}
