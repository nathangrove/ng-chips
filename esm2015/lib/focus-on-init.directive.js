/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Renderer, ElementRef, Input } from '@angular/core';
export class FocusOnInitDirective {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.priority = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        FocusOnInitDirective.instances.push(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout(() => {
            FocusOnInitDirective.instances.splice(FocusOnInitDirective.instances.indexOf(this), 1);
        });
        if (FocusOnInitDirective.instances.every((i) => this.priority >= i.priority)) {
            this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus', []);
        }
    }
}
FocusOnInitDirective.instances = [];
FocusOnInitDirective.decorators = [
    { type: Directive, args: [{
                selector: '[focusOnInit]'
            },] },
];
/** @nocollapse */
FocusOnInitDirective.ctorParameters = () => [
    { type: Renderer, },
    { type: ElementRef, },
];
FocusOnInitDirective.propDecorators = {
    "priority": [{ type: Input, args: ['focusOnInit',] },],
};
function FocusOnInitDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FocusOnInitDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FocusOnInitDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FocusOnInitDirective.propDecorators;
    /** @type {?} */
    FocusOnInitDirective.instances;
    /** @type {?} */
    FocusOnInitDirective.prototype.priority;
    /** @type {?} */
    FocusOnInitDirective.prototype.renderer;
    /** @type {?} */
    FocusOnInitDirective.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtb24taW5pdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGlwcy8iLCJzb3VyY2VzIjpbImxpYi9mb2N1cy1vbi1pbml0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUF5QixLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFLNUYsTUFBTTs7Ozs7SUFLSixZQUFtQixRQUFrQixFQUFTLFVBQXNCO1FBQWpELGFBQVEsR0FBUixRQUFRLENBQVU7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFZO3dCQUozQixDQUFDO0tBS3pDOzs7O0lBRUQsUUFBUTtRQUNOLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDMUM7Ozs7SUFFRCxlQUFlO1FBQ2IsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN4RixDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQy9DO0tBQ0Y7O2lDQWxCMEMsRUFBRTs7WUFOOUMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2FBQzFCOzs7O1lBSmtCLFFBQVE7WUFBRSxVQUFVOzs7eUJBTXBDLEtBQUssU0FBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIFJlbmRlcmVyLCBFbGVtZW50UmVmLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ZvY3VzT25Jbml0XSdcbn0pXG5leHBvcnQgY2xhc3MgRm9jdXNPbkluaXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoJ2ZvY3VzT25Jbml0JykgcHJpb3JpdHk6IG51bWJlciA9IDA7XG5cbiAgc3RhdGljIGluc3RhbmNlczogRm9jdXNPbkluaXREaXJlY3RpdmVbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIsIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBGb2N1c09uSW5pdERpcmVjdGl2ZS5pbnN0YW5jZXMucHVzaCh0aGlzKVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgRm9jdXNPbkluaXREaXJlY3RpdmUuaW5zdGFuY2VzLnNwbGljZShGb2N1c09uSW5pdERpcmVjdGl2ZS5pbnN0YW5jZXMuaW5kZXhPZih0aGlzKSwgMSk7XG4gICAgfSk7XG5cbiAgICBpZiAoRm9jdXNPbkluaXREaXJlY3RpdmUuaW5zdGFuY2VzLmV2ZXJ5KChpKSA9PiB0aGlzLnByaW9yaXR5ID49IGkucHJpb3JpdHkpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QoXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZm9jdXMnLCBbXSk7XG4gICAgfVxuICB9XG59XG4iXX0=