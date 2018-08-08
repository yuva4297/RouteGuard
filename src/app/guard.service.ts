import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService {
  restrictAccess: boolean;
  constructor( ) { 
    this.restrictAccess = false;
  }

 
}
