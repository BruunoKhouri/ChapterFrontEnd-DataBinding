import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BindingRoutingModule } from './binding-routing.module';
import { BindingComponent } from './binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BindingComponent],
  imports: [CommonModule, BindingRoutingModule, FormsModule],
})
export class BindingModule {}
