import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { FormsModule } from '@angular/forms';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { StructuraldirectiveComponent } from './structuraldirective/structuraldirective.component';
import { AttributedirectiveComponent } from './attributedirective/attributedirective.component';
import { CalculatorService } from './calculator.service';
import { ServicecomponeComponent } from './servicecompone/servicecompone.component';
import { FactorialService } from './factorial.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    StringInterpolationComponent,
    PropertyBindingComponent,
    TwowaybindingComponent,
    StructuraldirectiveComponent,
    AttributedirectiveComponent,
    ServicecomponeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    CalculatorService,
    FactorialService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
