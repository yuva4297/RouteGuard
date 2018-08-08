import { CanActivate } from "@angular/router";
import { GuardService } from "./guard.service";
import { Injectable } from "@angular/core";
@Injectable()
export class AdminActivateGuard implements CanActivate
{
    constructor(private guardService: GuardService)
    {

    }
    canActivate()
    {
        console.log(this.guardService.restrictAccess)
        
        return this.guardService.restrictAccess;    }
}