import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'app-cheque-requests',
    templateUrl: './cheque-requests.component.html',
    styleUrls: ['./cheque-requests.component.css']
})
export class ChequeRequestsComponent implements OnInit {

    public employeeName: any;
    public data: any = [];
    public cheque: any = [];

    public totalRecords: number = 0;
    public page: number = 1;


    constructor(private router: Router, private r: ActivatedRoute, private employeeService: EmployeeService) { }

    ngOnInit(): void {
        this.employeeName = sessionStorage.getItem("employeeName");

        this.employeeService.getAllChequeRequests().subscribe((result: any) => {
            this.cheque = result;
            this.data = this.cheque;
            this.totalRecords = this.cheque.length;
        });
    }

    public showDetails(id: number) {
        sessionStorage.setItem("chequeId", id.toString());
        this.router.navigate(['../editChequeRequest'], { relativeTo: this.r })
    }

    public changeCat(val: string) {
        if (val == 'all') {
            this.data = this.cheque;
        } else {
            this.data = [];
            for (var i = 0; i < this.cheque.length; i++) {
                if (this.cheque[i].status == val) {
                    this.data.push(this.cheque[i]);
                }
            }
        }
        this.totalRecords = this.data.length;
        this.page = 1;
    }

}

