import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { LoginComponent } from './login/login.component';
import { AssignProjectComponent } from './manager/assign-project/assign-project.component';
import { AddComponent } from './admin/add/add.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [

  {path:"", pathMatch:'full', component: LoginComponent},
  {path:"login", component: LoginComponent},
  {path:"employee", component: EmployeeComponent},

  {path:"admin", component : AdminComponent,
  children :
  [
    {path : "add" , redirectTo:"add", pathMatch :"full" },
    {path : "add" , component: AddComponent }
  ]},

  {path : "manager/assign-project", component: AssignProjectComponent},
  // {path : "admin/add" , component: AddComponent},
  {path:"manager", component : ManagerComponent },
  {path : "**", component : ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
export const routeComponents = [LoginComponent,EmployeeComponent,AdminComponent,ManagerComponent,AssignProjectComponent,AddComponent,ErrorPageComponent];