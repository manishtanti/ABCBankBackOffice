import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent {

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

    constructor(private breakpointObserver: BreakpointObserver, private auth: AuthService, private router: Router, private notification: NotificationsService) { }

    public logOut() {
        this.auth.setLoggedInStatus(false);
        this.router.navigate(['']);
        sessionStorage.removeItem("employeeId");
        sessionStorage.removeItem("employeeName");
        sessionStorage.removeItem("chequeId");
        sessionStorage.removeItem("lostCardId");
        sessionStorage.removeItem("queryId");
        this.notification.success("Success", "Logout Successfull");
    }
}
