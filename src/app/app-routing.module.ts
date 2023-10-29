import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GoldComponent} from "./gold/gold.component";
import {SilverComponent} from "./silver/silver.component";

const routes: Routes = [
  {path: '', component: GoldComponent},
  {path: 'silver', component: SilverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
