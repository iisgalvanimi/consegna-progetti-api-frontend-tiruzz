import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimaliComponent } from './animali/animali.component';
import { FruttiComponent } from './frutti/frutti.component';
import { GenericComponent } from './generic/generic.component';

const routes: Routes = [
  { path: 'generic/:id', component: GenericComponent },
  { path: '', redirectTo: '/animali', pathMatch: 'full'},
  { path: 'animali', component: AnimaliComponent},
  { path: 'frutti', component: FruttiComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
