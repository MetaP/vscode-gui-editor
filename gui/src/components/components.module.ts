import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { ModelCanvasComponent } from './model-canvas/model-canvas.component';



@NgModule({
  declarations: [
    DemoComponent,
    ModelCanvasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DemoComponent,
    ModelCanvasComponent
  ]
})
export class ComponentsModule { }
