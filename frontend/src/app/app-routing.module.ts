import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { OrdersComponent } from './orders/orders.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { ReviewComponent } from './review/review.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GuardService } from './services/guard/guard';
import { CanDeactivateGuard } from './services/guard/deactivateguard';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'login', redirectTo: '/' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [GuardService] },
  { path: 'account', component: AccountComponent, canActivate: [GuardService] },
  { path: 'myorders', component: OrdersComponent, canActivate: [GuardService] },
  { path: 'user', component: UserDashboardComponent, canActivate: [GuardService] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [GuardService] },
  { path: 'payment', component: PaymentComponent, canActivate: [GuardService] },
  { path: 'review', component: ReviewComponent, canActivate: [GuardService] },
  { path: 'userorders', component: UserOrdersComponent, canActivate: [GuardService] },
  { path: 'userslist', component: UsersListComponent, canActivate: [GuardService] },
  { path: '**', component: NotFoundComponent },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
