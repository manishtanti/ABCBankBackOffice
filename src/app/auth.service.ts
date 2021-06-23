import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    private loggedInStatus: boolean = false;

    public isLoggedIn(): boolean {
        return this.loggedInStatus;
    }

    public setLoggedInStatus(val: boolean) {
        this.loggedInStatus = val;
    }

}
