import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

  {path:"", pathMatch:'full', component: LoginComponent},
  {path:"login", component: LoginComponent},
  {path:"employee", component: EmployeeComponent},
  {path:"admin", component : AdminComponent},
  {path:"manager", component : ManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
export const routeComponents = [LoginComponent,EmployeeComponent,AdminComponent,ManagerComponent];