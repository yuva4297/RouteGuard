import { CanActivate } from "@angular/router";
import { GuardService } from "./guard.service";

export class AdminActivateGuard implements CanActivate
{
    constructor(private guardService: GuardService)
    {

    }
    canActivate()
    {
        
        return true
    }
}