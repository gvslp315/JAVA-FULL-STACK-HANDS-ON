import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { Child1Component } from './child1/child1.component';

const routes: Routes = [
 { path:"Property",
  component:PropertyBindingComponent},
  {
    path:"child1",
    component:Child1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
