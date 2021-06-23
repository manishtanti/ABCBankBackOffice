import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { AuthService } from '../auth.service';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private router: Router, private employeeService: EmployeeService, private auth: AuthService, private notification: NotificationsService) {
        console.log("login loaded")
    }

    ngOnInit(): void {
    }
    public user = {
        "username": "",
        "password": ""
    }

    public onSubmit() {
        this.employeeService.employeeValidation(this.user).subscribe((result: any) => {
            if (result['status'] == 200) {
                sessionStorage.setItem("employeeId", result['employeeId'].toString());
                sessionStorage.setItem("employeeName", result['employeeName'].toString());
                this.auth.setLoggedInStatus(true);
                this.router.navigate(['home']);
                this.notification.success("Success", result['message']);
            } else {
                this.notification.error("Error", result['message']);
            }
        });
    }

}
