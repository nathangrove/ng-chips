import { Renderer, ElementRef, OnInit, AfterViewInit } from '@angular/core';
export declare class FocusOnInitDirective implements OnInit, AfterViewInit {
    renderer: Renderer;
    elementRef: ElementRef;
    priority: number;
    static instances: FocusOnInitDirective[];
    constructor(renderer: Renderer, elementRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
