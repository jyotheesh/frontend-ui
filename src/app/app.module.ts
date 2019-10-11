import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimeNgModule } from '../app/core/prime-ng/prime-ng.module';

import { MatInputModule, MatIconModule, MatButtonModule, MatDialogModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './core/side-nav/side-nav.component';
import { PaymentComponent } from './payment/payment.component';
import { RepaymentComponent } from './repayment/repayment.component';
import { TablePrimengComponent } from './core/table-primeng/table-primeng.component';
import { TableComponent } from './core/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    SideNavComponent,
    PaymentComponent,
    RepaymentComponent,
    TablePrimengComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule, MatIconModule, MatButtonModule, MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    PrimeNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
