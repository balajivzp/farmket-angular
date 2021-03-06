import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent} from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductSheetComponent} from './product-sheet/product-sheet.component';
import { CheckStatusComponent } from './check-status/check-status.component';
import { WalletComponent } from './wallet/wallet.component'

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "productSheet", component: ProductSheetComponent},
  {path: "status", component: CheckStatusComponent},
  {path: "wallet", component: WalletComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
