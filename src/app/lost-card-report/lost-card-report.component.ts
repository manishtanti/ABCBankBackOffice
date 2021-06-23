import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'app-lost-card-report',
    templateUrl: './lost-card-report.component.html',
    styleUrls: ['./lost-card-report.component.css']
})
export class LostCardReportComponent implements OnInit {

    public employeeName: any;
    public data: any = [];
    public lostCard: any = [];

    public totalRecords: number = 0;
    public page: number = 1;


    constructor(private router: Router, private r: ActivatedRoute, private employeeService: EmployeeService) { }

    ngOnInit(): void {
        this.employeeName = sessionStorage.getItem("employeeName");

        this.employeeService.getAllLostCardReports().subscribe((result: any) => {
            this.lostCard = result;
            this.data = this.lostCard;
            this.totalRecords = this.lostCard.length;
        });
    }

    public showDetails(id: number) {
        sessionStorage.setItem("lostCardId", id.toString());
        this.router.navigate(['../editLostCardReport'], { relativeTo: this.r })
    }

    public changeCat(val: string) {
        if (val == 'all') {
            this.data = this.lostCard;
        } else {
            this.data = [];
            for (var i = 0; i < this.lostCard.length; i++) {
                if (this.lostCard[i].status == val) {
                    this.data.push(this.lostCard[i]);
                }
            }
        }
        this.totalRecords = this.data.length;
        this.page = 1;
    }

}

