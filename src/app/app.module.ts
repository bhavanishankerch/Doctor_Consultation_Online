import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CataloguescreenComponent } from './cataloguescreen/cataloguescreen.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddItemComponent } from './add-item/add-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendorServiceService } from './vendor-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomerloginComponent,
    CataloguescreenComponent,
    AdminloginComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [VendorServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
