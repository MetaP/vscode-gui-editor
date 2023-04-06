import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'metap-model-canvas',
  templateUrl: './model-canvas.component.html',
  styleUrls: ['./model-canvas.component.scss']
})
export class ModelCanvasComponent implements OnInit {

  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  ngOnInit(): void {
    this.initializeCanvas(this.canvasRef.nativeElement);
  }

  private initializeCanvas(htmlCanvas: HTMLCanvasElement) {

    // Large yellow canvas
    const canvas =  new fabric.Canvas(htmlCanvas, {
      backgroundColor: 'yellow',
      width: 2000,
      height: 5000
    });

    // Red rectangle
    const rect = new fabric.Rect({
      top: 10,
      left: 10,
      width: 100,
      height: 70,
      fill: 'red',
      lockRotation: true,
    });

    // Hide the "middle-top-rotate" control
    rect.setControlVisible('mtr', false);

    canvas.add(rect);
  }
}
