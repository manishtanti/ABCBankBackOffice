import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'app-edit-lost-card-report',
    templateUrl: './edit-lost-card-report.component.html',
    styleUrls: ['./edit-lost-card-report.component.css']
})
export class EditLostCardReportComponent implements OnInit {

    public lostCardId: any;
    public employeeName: any;
    public accounts: any = [];
    public lostCardRequest: any;
    public status: any = [];

    constructor(private router: Router, private employeeService: EmployeeService, private r: ActivatedRoute, private notification: NotificationsService) { }

    ngOnInit(): void {
        this.lostCardId = sessionStorage.getItem("lostCardId");
        this.employeeName = sessionStorage.getItem("employeeName");
        this.employeeService.getLostCardById(this.lostCardId).subscribe((data: any) => {
            this.lostCardRequest = data;
            if (this.lostCardRequest.status == "pending") {
                this.status = ["pending", "processing", "rejected"];
            } else if (this.lostCardRequest.status == "processing") {
                this.status = ["processing", "rejected"];
            } else if (this.lostCardRequest.status == "rejected") {
                this.status = ["rejected"];
            }
        })
    }




    public onSubmit() {
        this.lostCardRequest.responseDate = new Date();
        this.employeeService.saveLostCardRequest(this.lostCardRequest).subscribe((result: any) => {

            if (result['status'] == 200) {
                this.notification.success("Success", result['message']);
                this.router.navigate(['../chequeRequests'], { relativeTo: this.r });
            } else {
                this.notification.error("Error", result['message']);
            }
        })
    }

    public goBack() {
        this.router.navigate(['../lostCardReports'], { relativeTo: this.r });
    }
}
