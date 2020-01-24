import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './manager/manager.component';


const routes: Routes = [
  { path:'',component:ManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
