import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    constructor(private http: HttpClient) { }


    public employeeValidation(data: any) {
        return this.http.post("http://localhost:4444/abcbank/employeeValidation", data);
    }

    public getEmployeeById(id: number) {
        return this.http.get("http://localhost:4444/abcbank/getEmployeeById/" + id);
    }

    public updateEmployeeDetails(data: any) {
        return this.http.put("http://localhost:4444/abcbank/updateEmployee", data);
    }

    public changeEmployeePassword(data: any) {
        return this.http.put("http://localhost:4444/abcbank/changeEmployeePassword", data);
    }

    public getAllChequeRequests() {
        return this.http.get("http://localhost:4444/abcbank/getAllChequeRequests");
    }

    public getAllLostCardReports() {
        return this.http.get("http://localhost:4444/abcbank/getAllLostCardReports");
    }

    public getAllQueryRequests() {
        return this.http.get("http://localhost:4444/abcbank/getAllQueries");
    }

    public getChequeById(id: number) {
        return this.http.get("http://localhost:4444/abcbank/getChequeById/" + id);
    }

    public getLostCardById(id: number) {
        return this.http.get("http://localhost:4444/abcbank/getLostCardById/" + id);
    }

    public getQueryById(id: number) {
        return this.http.get("http://localhost:4444/abcbank/getQueryById/" + id);
    }

    public saveChequeRequest(data: any) {
        return this.http.post("http://localhost:4444/abcbank/saveChequeRequest", data);
    }

    public saveLostCardRequest(data: any) {
        return this.http.post("http://localhost:4444/abcbank/saveLostCardRequest", data);
    }

    public saveQueryRequest(data: any) {
        return this.http.post("http://localhost:4444/abcbank/saveQueryRequest", data);
    }
}
