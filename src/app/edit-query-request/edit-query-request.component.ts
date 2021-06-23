import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'app-edit-query-request',
    templateUrl: './edit-query-request.component.html',
    styleUrls: ['./edit-query-request.component.css']
})
export class EditQueryRequestComponent implements OnInit {

    public queryId: any;
    public employeeName: any;
    public accounts: any = [];
    public queryRequest: any;
    public status: any = [];

    constructor(private router: Router, private employeeService: EmployeeService, private r: ActivatedRoute, private notification: NotificationsService) { }

    ngOnInit(): void {
        this.queryId = sessionStorage.getItem("queryId");
        this.employeeName = sessionStorage.getItem("employeeName");
        this.employeeService.getQueryById(this.queryId).subscribe((data: any) => {
            this.queryRequest = data;
            if (this.queryRequest.status == "pending") {
                this.status = ["pending", "processing", "rejected"];
            } else if (this.queryRequest.status == "processing") {
                this.status = ["processing", "rejected"];
            } else if (this.queryRequest.status == "rejected") {
                this.status = ["rejected"];
            }
        })
    }




    public onSubmit() {
        this.queryRequest.responseDate = new Date();
        this.employeeService.saveQueryRequest(this.queryRequest).subscribe((result: any) => {

            if (result['status'] == 200) {
                this.notification.success("Success", result['message']);
                this.router.navigate(['../chequeRequests'], { relativeTo: this.r });
            } else {
                this.notification.error("Error", result['message']);
            }
        })
    }

    public goBack() {
        this.router.navigate(['../queryRequests'], { relativeTo: this.r });
    }
}
