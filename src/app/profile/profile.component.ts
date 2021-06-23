import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    public employeeDetails: any;
    public employeeName: any;
    private employeeId: any;
    constructor(private employeeService: EmployeeService, private router: Router, private r: ActivatedRoute) { console.log("myprofile Component Constructor"); }

    ngOnInit(): void {
        console.log("myprofile Component ngOnInit");
        this.employeeName = sessionStorage.getItem("employeeName");
        this.employeeId = sessionStorage.getItem("employeeId");
        this.getEmployeeDetails(this.employeeId);
    }

    private getEmployeeDetails(id: number) {
        this.employeeService.getEmployeeById(id).subscribe((result: any) => {
            if (result['status'] == 200) {
                this.employeeDetails = result;
            } else {
                alert("Details can't be fetched");
            }
        })
    }


    public onUpdate() {
        this.employeeService.updateEmployeeDetails(this.employeeDetails).subscribe((result: any) => {
            if (result['status'] == 200) {
                alert("Your profile updated successfully");
                this.router.navigate(['../'], { relativeTo: this.r });
            } else {
                alert("Some error occured");
            }
        });
    }
}

