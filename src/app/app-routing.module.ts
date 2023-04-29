import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CataloguescreenComponent } from './cataloguescreen/cataloguescreen.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddItemComponent } from './add-item/add-item.component';

const routes: Routes = [
  {path:'', redirectTo:'/customerlogin', pathMatch:'full'},
  {path:"customerlogin", component:CustomerloginComponent},
  {path:"cateloguescreen", component:CataloguescreenComponent},
  {path:"adminlogin", component:AdminloginComponent},
  {path:"additem", component:AddItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
