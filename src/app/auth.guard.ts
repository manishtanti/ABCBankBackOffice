import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router) { }

    public canActivate(): boolean {
        if (this.auth.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['']);
        }
        return false;
    }

}
