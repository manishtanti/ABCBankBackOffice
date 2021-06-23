import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChequeRequestsComponent } from './cheque-requests/cheque-requests.component';
import { EditChequeRequestComponent } from './edit-cheque-request/edit-cheque-request.component';
import { EditLostCardReportComponent } from './edit-lost-card-report/edit-lost-card-report.component';
import { EditQueryRequestComponent } from './edit-query-request/edit-query-request.component';
import { GreetComponent } from './greet/greet.component';
import { LoginComponent } from './login/login.component';
import { LostCardReportComponent } from './lost-card-report/lost-card-report.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { QueryRequestComponent } from './query-request/query-request.component';

const routes: Routes = [
    { path: "", component: LoginComponent },
    {
        path: "home", component: NavComponent, canActivate: [AuthGuard], children: [
            { path: "", component: GreetComponent, canActivate: [AuthGuard] },
            { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
            { path: "changePassword", component: ChangePasswordComponent, canActivate: [AuthGuard] },
            { path: "chequeRequests", component: ChequeRequestsComponent, canActivate: [AuthGuard] },
            { path: "editChequeRequest", component: EditChequeRequestComponent, canActivate: [AuthGuard] },
            { path: "lostCardReports", component: LostCardReportComponent, canActivate: [AuthGuard] },
            { path: "editLostCardReport", component: EditLostCardReportComponent, canActivate: [AuthGuard] },
            { path: "queryRequests", component: QueryRequestComponent, canActivate: [AuthGuard] },
            { path: "editQueryRequest", component: EditQueryRequestComponent, canActivate: [AuthGuard] },
        ]
    },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
