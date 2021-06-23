import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'app-query-request',
    templateUrl: './query-request.component.html',
    styleUrls: ['./query-request.component.css']
})
export class QueryRequestComponent implements OnInit {

    public employeeName: any;
    public data: any = [];
    public query: any = [];

    public totalRecords: number = 0;
    public page: number = 1;


    constructor(private router: Router, private r: ActivatedRoute, private employeeService: EmployeeService) { console.log("servicerequest Component Constructor"); }

    ngOnInit(): void {
        console.log("servicerequest Component ngOnInit");
        this.employeeName = sessionStorage.getItem("employeeName");

        this.employeeService.getAllQueryRequests().subscribe((result: any) => {
            this.query = result;
            this.data = this.query;
            this.totalRecords = this.query.length;
        });
    }

    public showDetails(id: number) {
        sessionStorage.setItem("queryId", id.toString());
        this.router.navigate(['../editQueryRequest'], { relativeTo: this.r })
    }

    public changeCat(val: string) {
        if (val == 'all') {
            this.data = this.query;
        } else {
            this.data = [];
            for (var i = 0; i < this.query.length; i++) {
                if (this.query[i].status == val) {
                    this.data.push(this.query[i]);
                }
            }
        }
        this.totalRecords = this.data.length;
        this.page = 1;
    }

}

