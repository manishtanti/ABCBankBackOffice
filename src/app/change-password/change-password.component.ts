import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { AuthService } from '../auth.service';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
    public user: any;
    public employeeName: any;
    public employeeId: any;
    constructor(private router: Router, private r: ActivatedRoute, private employeeService: EmployeeService, private notification: NotificationsService, private auth: AuthService) { }

    ngOnInit(): void {

        this.employeeName = sessionStorage.getItem("employeeName");
        this.employeeId = sessionStorage.getItem("employeeId");
        this.user = {
            "id": this.employeeId,
            "oldPassword": "",
            "newPassword": "",
            "confirmPassword": ""
        }
    }



    public changePassword() {
        this.employeeService.changeEmployeePassword(this.user).subscribe((result: any) => {
            if (result['status'] == 200) {

                this.auth.setLoggedInStatus(false);
                this.router.navigate(['../'], { relativeTo: this.r });
                this.notification.success("Success", "Your password Changed Successfully");
            } else {
                this.notification.error("Error", result['message']);
            }
        });
    }

}