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
import { LeaveComponent } from './manager/leave/leave.component';
import { AssignModuleComponent } from './manager/assign-module/assign-module.component';
import { LeavelistComponent } from './manager/leavelist/leavelist.component';


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
  {path:"manager/leavelist",component:LeavelistComponent},
  {path : "manager/assign-module", component: AssignModuleComponent},
   {path:"manager/leaveresp",component:LeaveComponent},
  {path : "manager/assign-project", component: AssignProjectComponent},

  {path:"manager", component : ManagerComponent },
  {path : "**", component : ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
export const routeComponents = [LoginComponent,EmployeeComponent,AdminComponent,ManagerComponent,AssignProjectComponent,AddComponent,ErrorPageComponent,LeaveComponent,AssignModuleComponent,LeavelistComponent];