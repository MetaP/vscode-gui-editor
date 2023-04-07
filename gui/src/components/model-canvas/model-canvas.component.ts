import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewElement } from '../../../../src/view/ViewElement';
import { GraphicsService } from 'src/services/graphics.service';

@Component({
    selector: 'metap-model-canvas',
    templateUrl: './model-canvas.component.html',
    styleUrls: ['./model-canvas.component.scss']
})
export class ModelCanvasComponent implements OnInit {

    @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

    constructor(
        private graphicsService: GraphicsService
    ) { }

    ngOnInit(): void {
        this.graphicsService.init(this.canvasRef.nativeElement);
    }

    show(viewElements: ViewElement[]) {
        this.graphicsService.showElements(viewElements);
    }
}
