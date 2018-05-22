/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Renderer, ElementRef, Input } from '@angular/core';
var FocusOnInitDirective = /** @class */ (function () {
    function FocusOnInitDirective(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.priority = 0;
    }
    /**
     * @return {?}
     */
    FocusOnInitDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        FocusOnInitDirective.instances.push(this);
    };
    /**
     * @return {?}
     */
    FocusOnInitDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            FocusOnInitDirective.instances.splice(FocusOnInitDirective.instances.indexOf(_this), 1);
        });
        if (FocusOnInitDirective.instances.every(function (i) { return _this.priority >= i.priority; })) {
            this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus', []);
        }
    };
    FocusOnInitDirective.instances = [];
    FocusOnInitDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[focusOnInit]'
                },] },
    ];
    /** @nocollapse */
    FocusOnInitDirective.ctorParameters = function () { return [
        { type: Renderer, },
        { type: ElementRef, },
    ]; };
    FocusOnInitDirective.propDecorators = {
        "priority": [{ type: Input, args: ['focusOnInit',] },],
    };
    return FocusOnInitDirective;
}());
export { FocusOnInitDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtb24taW5pdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGlwcy8iLCJzb3VyY2VzIjpbImxpYi9mb2N1cy1vbi1pbml0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUF5QixLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7O0lBVTFGLDhCQUFtQixRQUFrQixFQUFTLFVBQXNCO1FBQWpELGFBQVEsR0FBUixRQUFRLENBQVU7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFZO3dCQUozQixDQUFDO0tBS3pDOzs7O0lBRUQsdUNBQVE7OztJQUFSO1FBQ0Usb0JBQW9CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUMxQzs7OztJQUVELDhDQUFlOzs7SUFBZjtRQUFBLGlCQVNDO1FBUkMsVUFBVSxDQUFDO1lBQ1Qsb0JBQW9CLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3hGLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQTNCLENBQTJCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQy9DO0tBQ0Y7cUNBbEIwQyxFQUFFOztnQkFOOUMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO2lCQUMxQjs7OztnQkFKa0IsUUFBUTtnQkFBRSxVQUFVOzs7NkJBTXBDLEtBQUssU0FBQyxhQUFhOzsrQkFOdEI7O1NBS2Esb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIFJlbmRlcmVyLCBFbGVtZW50UmVmLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ZvY3VzT25Jbml0XSdcbn0pXG5leHBvcnQgY2xhc3MgRm9jdXNPbkluaXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoJ2ZvY3VzT25Jbml0JykgcHJpb3JpdHk6IG51bWJlciA9IDA7XG5cbiAgc3RhdGljIGluc3RhbmNlczogRm9jdXNPbkluaXREaXJlY3RpdmVbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIsIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBGb2N1c09uSW5pdERpcmVjdGl2ZS5pbnN0YW5jZXMucHVzaCh0aGlzKVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgRm9jdXNPbkluaXREaXJlY3RpdmUuaW5zdGFuY2VzLnNwbGljZShGb2N1c09uSW5pdERpcmVjdGl2ZS5pbnN0YW5jZXMuaW5kZXhPZih0aGlzKSwgMSk7XG4gICAgfSk7XG5cbiAgICBpZiAoRm9jdXNPbkluaXREaXJlY3RpdmUuaW5zdGFuY2VzLmV2ZXJ5KChpKSA9PiB0aGlzLnByaW9yaXR5ID49IGkucHJpb3JpdHkpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QoXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZm9jdXMnLCBbXSk7XG4gICAgfVxuICB9XG59XG4iXX0=