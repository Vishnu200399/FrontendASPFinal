import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { PasswordComponent } from './password/password.component';
import { SignupComponent } from './signup/signup.component';
import { TaxinvoiceComponent } from './taxinvoice/taxinvoice.component';
import { QuotationComponent } from './quotation/quotation.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeepayslipComponent } from './employeepayslip/employeepayslip.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ProductsComponent,
    OrderComponent,
    LoginComponent,
    AdminComponent,
    PasswordComponent,
    SignupComponent,
    TaxinvoiceComponent,
    QuotationComponent,
    OrderdetailsComponent,
    EmployeedetailsComponent,
    EmployeepayslipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
