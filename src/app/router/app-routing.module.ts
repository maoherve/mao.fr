import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../component/home/home.component";
import {ContactComponent} from "../component/contact/contact.component";

const routes: Routes = [


  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },

  { path: "", redirectTo: "home", pathMatch: "full" },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
