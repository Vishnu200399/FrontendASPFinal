import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { OrderComponent } from './order/order.component';
import { AdminComponent } from './admin/admin.component';
import { PasswordComponent } from './password/password.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TaxinvoiceComponent } from './taxinvoice/taxinvoice.component';
import { QuotationComponent } from './quotation/quotation.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeepayslipComponent } from './employeepayslip/employeepayslip.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'order', component: OrderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'taxinvoice', component: TaxinvoiceComponent },
  { path: 'quotation', component: QuotationComponent },
  { path: 'orderdetails', component: OrderdetailsComponent },
  { path: 'employeedetails', component: EmployeedetailsComponent },
  { path: 'employeepayslip', component: EmployeepayslipComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
