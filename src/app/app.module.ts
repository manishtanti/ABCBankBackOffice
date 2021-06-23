import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChequeRequestsComponent } from './cheque-requests/cheque-requests.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditChequeRequestComponent } from './edit-cheque-request/edit-cheque-request.component';
import { AuthGuard } from './auth.guard';
import { GreetComponent } from './greet/greet.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { QueryRequestComponent } from './query-request/query-request.component';
import { EditQueryRequestComponent } from './edit-query-request/edit-query-request.component';
import { LostCardReportComponent } from './lost-card-report/lost-card-report.component';
import { EditLostCardReportComponent } from './edit-lost-card-report/edit-lost-card-report.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NavComponent,
        FooterComponent,
        ProfileComponent,
        ChangePasswordComponent,
        ChequeRequestsComponent,
        EditChequeRequestComponent,
        GreetComponent,
        QueryRequestComponent,
        EditQueryRequestComponent,
        LostCardReportComponent,
        EditLostCardReportComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatMenuModule,
        FormsModule,
        LayoutModule,
        HttpClientModule,
        NgxPaginationModule,
        SimpleNotificationsModule.forRoot({ position: ['top', 'right'], timeOut: 5000, showProgressBar: true })

    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
