import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DassboardComponent } from './components/dassboard/dassboard.component';


const routes: Routes = [
  {path :"dassboard", component : DassboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
