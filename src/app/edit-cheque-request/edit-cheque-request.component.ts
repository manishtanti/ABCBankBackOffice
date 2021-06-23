import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'app-edit-cheque-request',
    templateUrl: './edit-cheque-request.component.html',
    styleUrls: ['./edit-cheque-request.component.css']
})
export class EditChequeRequestComponent implements OnInit {

    public chequeId: any;
    public employeeName: any;
    public accounts: any = [];
    public chequeRequest: any;
    public status: any = [];

    constructor(private router: Router, private employeeService: EmployeeService, private r: ActivatedRoute, private notification: NotificationsService) { }

    ngOnInit(): void {
        this.chequeId = sessionStorage.getItem("chequeId");
        this.employeeName = sessionStorage.getItem("employeeName");
        this.employeeService.getChequeById(this.chequeId).subscribe((data: any) => {
            this.chequeRequest = data;
            if (this.chequeRequest.status == "pending") {
                this.status = ["pending", "processing", "rejected"];
            } else if (this.chequeRequest.status == "processing") {
                this.status = ["processing", "rejected"];
            } else if (this.chequeRequest.status == "rejected") {
                this.status = ["rejected"];
            }
        })
    }




    public onSubmit() {
        this.chequeRequest.responseDate = new Date();
        this.employeeService.saveChequeRequest(this.chequeRequest).subscribe((result: any) => {

            if (result['status'] == 200) {
                this.notification.success("Success", result['message']);
                this.router.navigate(['../chequeRequests'], { relativeTo: this.r });
            } else {
                this.notification.error("Error", result['message']);
            }
        })
    }

    public goBack() {
        this.router.navigate(['../chequeRequests'], { relativeTo: this.r });
    }
}
