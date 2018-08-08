import { CanActivate, Router } from "@angular/router";
import { GuardService } from "./guard.service";
import { Injectable } from "@angular/core";
@Injectable()
export class AdminActivateGuard implements CanActivate
{
    constructor(private guardService: GuardService, private router: Router)
    {

    }
    canActivate()
    {
        console.log(this.guardService.restrictAccess)
        
        if(this.guardService.restrictAccess)
            return true;
        this.router.navigate(['']);
        return false;
    }
}