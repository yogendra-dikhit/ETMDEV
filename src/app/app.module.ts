import { UserService } from './service/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routeComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header.component';
import { SideBarComponent } from './layout/side-bar.component';
import { FooterComponent } from './layout/footer.component';
import { RouterModule } from '@angular/router';
import { AssignProjectComponent } from './manager/assign-project/assign-project.component';
import { AddComponent } from './admin/add/add.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    routeComponents,
    AssignProjectComponent,
    AddComponent,
    ErrorPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
