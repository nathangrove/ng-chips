(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-chips', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['ng-chips'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ChipsComponent = (function () {
        function ChipsComponent(ref, _iterableDiffers) {
            this.ref = ref;
            this._iterableDiffers = _iterableDiffers;
            this.selectorOpen = false;
            this.searchString = '';
            // default value
            this.value = [];
            // is it disabled or "readonly"
            this.disabled = false;
            // available options
            this.options = [];
            // placeholder text on empty state
            this.emptyState = 'Select Tag';
            // the tag to add another
            this.placeholder = '+ Tag';
            // keep open to allow multiple to be selected?
            this.keepopen = false;
            // allow multiple options
            this.multiple = false;
            this.displayKey = 'display';
            this.valueKey = 'value';
            // emitter to emit a change...
            this.onChange = new core.EventEmitter();
            this.optionsPointer = -1;
            this.iterableDiffer = this._iterableDiffers.find([]).create(null);
        }
        /**
         * @return {?}
         */
        ChipsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /*
                    document.onkeydown = function(event){
                      if (event.keyCode == 38){ // up
                        self.optionsPointer--;
                      } else if (event.keyCode == 40) { // down
                        self.optionsPointer++;
                      }
                    }
                    */
            };
        /**
         * @param {?} option
         * @return {?}
         */
        ChipsComponent.prototype.add = /**
         * @param {?} option
         * @return {?}
         */
            function (option) {
                this.value.push(option);
                if (this.keepopen && this.getOptions().length)
                    this.openSelector();
                this.optionsPointer = -1;
                this.onChange.next(this.value);
            };
        /**
         * @param {?} option
         * @return {?}
         */
        ChipsComponent.prototype.remove = /**
         * @param {?} option
         * @return {?}
         */
            function (option) {
                var _this = this;
                this.value = this.value.filter(function (v) { return v[_this.valueKey] != option[_this.valueKey]; });
                this.onChange.next(this.value);
            };
        /**
         * @return {?}
         */
        ChipsComponent.prototype.getOptions = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var /** @type {?} */ self = this;
                if (!this.value)
                    this.value = [];
                return this.options.filter(function (o) { return _this.value.map(function (v) { return v[_this.valueKey]; }).indexOf(o[_this.valueKey]) == -1; }).filter(function (o) { return self.searchString == '' || o[_this.displayKey].toLowerCase().indexOf(self.searchString.toLowerCase()) > -1; });
            };
        /**
         * @return {?}
         */
        ChipsComponent.prototype.toggleSelector = /**
         * @return {?}
         */
            function () {
                if (!this.selectorOpen && this.value.length && !this.multiple)
                    return;
                if (this.selectorOpen)
                    this.closeSelector();
                else
                    this.openSelector();
            };
        /**
         * @param {?=} event
         * @return {?}
         */
        ChipsComponent.prototype.search = /**
         * @param {?=} event
         * @return {?}
         */
            function (event) {
                this.searchString = event.target.value;
                this.ref.detectChanges();
            };
        /**
         * @return {?}
         */
        ChipsComponent.prototype.openSelector = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ self = this;
                setTimeout(function () {
                    self.selectorOpen = true;
                }, 100);
            };
        /**
         * @return {?}
         */
        ChipsComponent.prototype.closeSelector = /**
         * @return {?}
         */
            function () {
                if (!this.selectorOpen)
                    return;
                this.selectorOpen = false;
                this.searchString = '';
                this.ref.detectChanges();
            };
        /**
         * @return {?}
         */
        ChipsComponent.prototype.ngDoCheck = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.value)
                    return;
                var /** @type {?} */ changes = this.iterableDiffer.diff(this.value);
                if (changes) {
                    var /** @type {?} */ proposed = this.value.filter(function (v, idx, self) { return self.map(function (m) { return m[_this.valueKey]; }).indexOf(v[_this.valueKey]) === idx; });
                    if (this.value.length !== proposed.length)
                        this.value = proposed;
                }
            };
        ChipsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-chips',
                        template: "\n  <div id=\"ng-chips-wrapper\" (click)=\"toggleSelector()\">\n  \n    <div class=\"placeholder\" *ngIf=\"!value.length\">{{ emptyState }}</div>\n    \n      <div *ngFor=\"let chip of value\" class=\"chipit\">\n        <div [ngClass]=\"{'disabled': disabled, 'value': true}\">{{ chip[displayKey] }}</div>\n        <div class=\"remove\" *ngIf=\"!disabled\" (click)=\"remove(chip)\">x</div>\n      </div>\n    \n      <div class=\"addition\" *ngIf=\"value.length && getOptions().length && !disabled && multiple\">{{ placeholder }}</div>\n    \n      <div class=\"clearfix\"></div>\n    </div>\n  \n    <div id=\"ng-chips-selector\" class=\"rounded\" *ngIf=\"selectorOpen\">\n      <input type=\"text\" (keyup)=\"search($event)\" class='search' placeholder=\"Search\" focusOnInit />\n    <div *ngFor=\"let option of getOptions()\" (click)=\"add(option)\" [ngClass]=\"{'option': true, 'focused': getOptions()[optionsPointer] == option }\">{{ option[displayKey] }}</div>\n  </div>\n  ",
                        styles: ["#ng-chips-wrapper{position:relative;line-height:1;min-height:50px;cursor:pointer;border:1px solid #d2d2d2;padding:5px;border-radius:2px}#ng-chips-wrapper .placeholder{float:left;color:grey;font-size:20px;margin-left:5px}#ng-chips-wrapper .chipit{float:left;background-color:#d6d6d6;border-radius:1000px;margin:3px;font-size:13px;height:32px;padding-left:12px}#ng-chips-wrapper .chipit .value{float:left;margin-right:4px;margin-top:9px}#ng-chips-wrapper .chipit .value.disabled{margin-right:12px}#ng-chips-wrapper .chipit .remove{text-align:center;float:left;background-color:#bdbdbd;color:#fff;border-radius:50%;width:24px;height:24px;margin:4px;padding-top:2px;font-size:18px}#ng-chips-wrapper .chipit:hover{background-color:#888;color:#fff}#ng-chips-wrapper .chipit:hover .remove{background-color:#fff;color:#888}#ng-chips-wrapper .addition{float:left;margin-top:12px;color:grey;font-size:13px}#ng-chips-wrapper .clearfix:after{visibility:hidden;display:block;font-size:0;content:\" \";clear:both;height:0}#ng-chips-wrapper * html .clearfix{zoom:1}#ng-chips-selector{background-color:#fff;z-index:1000;position:absolute;border:1px solid #c9c9c9;padding:3px;min-width:300px;max-height:200px;overflow-y:scroll;overflow-x:hidden}#ng-chips-selector .search{width:90%;margin:5px;border-width:0 0 1px;border-style:solid;border-color:#c9c9c9;outline:0;box-shadow:none!important}#ng-chips-selector .option{padding:3px}#ng-chips-selector .option .focused,#ng-chips-selector .option:hover{background-color:#d3d3d3}#ng-chips-selector .rounded{border-radius:5px}"],
                        host: {
                            '(document:click)': 'closeSelector()',
                        }
                    },] },
        ];
        /** @nocollapse */
        ChipsComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef, },
                { type: core.IterableDiffers, },
            ];
        };
        ChipsComponent.propDecorators = {
            "value": [{ type: core.Input },],
            "disabled": [{ type: core.Input },],
            "options": [{ type: core.Input },],
            "emptyState": [{ type: core.Input },],
            "placeholder": [{ type: core.Input },],
            "keepopen": [{ type: core.Input },],
            "multiple": [{ type: core.Input },],
            "displayKey": [{ type: core.Input },],
            "valueKey": [{ type: core.Input },],
            "onChange": [{ type: core.Output },],
        };
        return ChipsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FocusOnInitDirective = (function () {
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
            { type: core.Directive, args: [{
                        selector: '[focusOnInit]'
                    },] },
        ];
        /** @nocollapse */
        FocusOnInitDirective.ctorParameters = function () {
            return [
                { type: core.Renderer, },
                { type: core.ElementRef, },
            ];
        };
        FocusOnInitDirective.propDecorators = {
            "priority": [{ type: core.Input, args: ['focusOnInit',] },],
        };
        return FocusOnInitDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ChipsModule = (function () {
        function ChipsModule() {
        }
        ChipsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            ChipsComponent,
                            FocusOnInitDirective
                        ],
                        exports: [ChipsComponent]
                    },] },
        ];
        return ChipsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.ChipsComponent = ChipsComponent;
    exports.ChipsModule = ChipsModule;
    exports.ɵa = FocusOnInitDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2hpcHMudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZy1jaGlwcy9saWIvY2hpcHMuY29tcG9uZW50LnRzIiwibmc6Ly9uZy1jaGlwcy9saWIvZm9jdXMtb24taW5pdC5kaXJlY3RpdmUudHMiLCJuZzovL25nLWNoaXBzL2xpYi9jaGlwcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3RvclJlZiwgSXRlcmFibGVEaWZmZXJzLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEFmdGVyVmlld0luaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctY2hpcHMnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGlkPVwibmctY2hpcHMtd3JhcHBlclwiIChjbGljayk9XCJ0b2dnbGVTZWxlY3RvcigpXCI+XG4gIFxuICAgIDxkaXYgY2xhc3M9XCJwbGFjZWhvbGRlclwiICpuZ0lmPVwiIXZhbHVlLmxlbmd0aFwiPnt7IGVtcHR5U3RhdGUgfX08L2Rpdj5cbiAgICBcbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGNoaXAgb2YgdmFsdWVcIiBjbGFzcz1cImNoaXBpdFwiPlxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cInsnZGlzYWJsZWQnOiBkaXNhYmxlZCwgJ3ZhbHVlJzogdHJ1ZX1cIj57eyBjaGlwW2Rpc3BsYXlLZXldIH19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZW1vdmVcIiAqbmdJZj1cIiFkaXNhYmxlZFwiIChjbGljayk9XCJyZW1vdmUoY2hpcClcIj54PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBcbiAgICAgIDxkaXYgY2xhc3M9XCJhZGRpdGlvblwiICpuZ0lmPVwidmFsdWUubGVuZ3RoICYmIGdldE9wdGlvbnMoKS5sZW5ndGggJiYgIWRpc2FibGVkICYmIG11bHRpcGxlXCI+e3sgcGxhY2Vob2xkZXIgfX08L2Rpdj5cbiAgICBcbiAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICBcbiAgICA8ZGl2IGlkPVwibmctY2hpcHMtc2VsZWN0b3JcIiBjbGFzcz1cInJvdW5kZWRcIiAqbmdJZj1cInNlbGVjdG9yT3BlblwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGtleXVwKT1cInNlYXJjaCgkZXZlbnQpXCIgY2xhc3M9J3NlYXJjaCcgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBmb2N1c09uSW5pdCAvPlxuICAgIDxkaXYgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBnZXRPcHRpb25zKClcIiAoY2xpY2spPVwiYWRkKG9wdGlvbilcIiBbbmdDbGFzc109XCJ7J29wdGlvbic6IHRydWUsICdmb2N1c2VkJzogZ2V0T3B0aW9ucygpW29wdGlvbnNQb2ludGVyXSA9PSBvcHRpb24gfVwiPnt7IG9wdGlvbltkaXNwbGF5S2V5XSB9fTwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbYCNuZy1jaGlwcy13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlO2xpbmUtaGVpZ2h0OjE7bWluLWhlaWdodDo1MHB4O2N1cnNvcjpwb2ludGVyO2JvcmRlcjoxcHggc29saWQgI2QyZDJkMjtwYWRkaW5nOjVweDtib3JkZXItcmFkaXVzOjJweH0jbmctY2hpcHMtd3JhcHBlciAucGxhY2Vob2xkZXJ7ZmxvYXQ6bGVmdDtjb2xvcjpncmV5O2ZvbnQtc2l6ZToyMHB4O21hcmdpbi1sZWZ0OjVweH0jbmctY2hpcHMtd3JhcHBlciAuY2hpcGl0e2Zsb2F0OmxlZnQ7YmFja2dyb3VuZC1jb2xvcjojZDZkNmQ2O2JvcmRlci1yYWRpdXM6MTAwMHB4O21hcmdpbjozcHg7Zm9udC1zaXplOjEzcHg7aGVpZ2h0OjMycHg7cGFkZGluZy1sZWZ0OjEycHh9I25nLWNoaXBzLXdyYXBwZXIgLmNoaXBpdCAudmFsdWV7ZmxvYXQ6bGVmdDttYXJnaW4tcmlnaHQ6NHB4O21hcmdpbi10b3A6OXB4fSNuZy1jaGlwcy13cmFwcGVyIC5jaGlwaXQgLnZhbHVlLmRpc2FibGVke21hcmdpbi1yaWdodDoxMnB4fSNuZy1jaGlwcy13cmFwcGVyIC5jaGlwaXQgLnJlbW92ZXt0ZXh0LWFsaWduOmNlbnRlcjtmbG9hdDpsZWZ0O2JhY2tncm91bmQtY29sb3I6I2JkYmRiZDtjb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6NTAlO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7bWFyZ2luOjRweDtwYWRkaW5nLXRvcDoycHg7Zm9udC1zaXplOjE4cHh9I25nLWNoaXBzLXdyYXBwZXIgLmNoaXBpdDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiM4ODg7Y29sb3I6I2ZmZn0jbmctY2hpcHMtd3JhcHBlciAuY2hpcGl0OmhvdmVyIC5yZW1vdmV7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiM4ODh9I25nLWNoaXBzLXdyYXBwZXIgLmFkZGl0aW9ue2Zsb2F0OmxlZnQ7bWFyZ2luLXRvcDoxMnB4O2NvbG9yOmdyZXk7Zm9udC1zaXplOjEzcHh9I25nLWNoaXBzLXdyYXBwZXIgLmNsZWFyZml4OmFmdGVye3Zpc2liaWxpdHk6aGlkZGVuO2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjA7Y29udGVudDpcIiBcIjtjbGVhcjpib3RoO2hlaWdodDowfSNuZy1jaGlwcy13cmFwcGVyICogaHRtbCAuY2xlYXJmaXh7em9vbToxfSNuZy1jaGlwcy1zZWxlY3RvcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7ei1pbmRleDoxMDAwO3Bvc2l0aW9uOmFic29sdXRlO2JvcmRlcjoxcHggc29saWQgI2M5YzljOTtwYWRkaW5nOjNweDttaW4td2lkdGg6MzAwcHg7bWF4LWhlaWdodDoyMDBweDtvdmVyZmxvdy15OnNjcm9sbDtvdmVyZmxvdy14OmhpZGRlbn0jbmctY2hpcHMtc2VsZWN0b3IgLnNlYXJjaHt3aWR0aDo5MCU7bWFyZ2luOjVweDtib3JkZXItd2lkdGg6MCAwIDFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOiNjOWM5Yzk7b3V0bGluZTowO2JveC1zaGFkb3c6bm9uZSFpbXBvcnRhbnR9I25nLWNoaXBzLXNlbGVjdG9yIC5vcHRpb257cGFkZGluZzozcHh9I25nLWNoaXBzLXNlbGVjdG9yIC5vcHRpb24gLmZvY3VzZWQsI25nLWNoaXBzLXNlbGVjdG9yIC5vcHRpb246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZDNkM2QzfSNuZy1jaGlwcy1zZWxlY3RvciAucm91bmRlZHtib3JkZXItcmFkaXVzOjVweH1gXSxcbiAgaG9zdDoge1xuICAgICcoZG9jdW1lbnQ6Y2xpY2spJzogJ2Nsb3NlU2VsZWN0b3IoKScsXG4gIH1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDaGlwc0NvbXBvbmVudCB7XG4gIFxuICBzZWxlY3Rvck9wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2VhcmNoU3RyaW5nOiBzdHJpbmcgPSAnJztcbiAgXG4gIC8vIGRlZmF1bHQgdmFsdWVcbiAgQElucHV0KCkgdmFsdWU6IGFueVtdID0gW107XG4gIFxuICAvLyBpcyBpdCBkaXNhYmxlZCBvciBcInJlYWRvbmx5XCJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgXG4gIC8vIGF2YWlsYWJsZSBvcHRpb25zXG4gIEBJbnB1dCgpIG9wdGlvbnM6IGFueVtdID0gW107XG4gIFxuICAvLyBwbGFjZWhvbGRlciB0ZXh0IG9uIGVtcHR5IHN0YXRlXG4gIEBJbnB1dCgpIGVtcHR5U3RhdGU6IHN0cmluZyA9ICdTZWxlY3QgVGFnJztcbiAgXG4gIC8vIHRoZSB0YWcgdG8gYWRkIGFub3RoZXJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcrIFRhZyc7XG4gIFxuICAvLyBrZWVwIG9wZW4gdG8gYWxsb3cgbXVsdGlwbGUgdG8gYmUgc2VsZWN0ZWQ/XG4gIEBJbnB1dCgpIGtlZXBvcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIFxuICAvLyBhbGxvdyBtdWx0aXBsZSBvcHRpb25zXG4gIEBJbnB1dCgpIG11bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XG4gIFxuICBASW5wdXQoKSBkaXNwbGF5S2V5OiBzdHJpbmcgPSAnZGlzcGxheSc7XG4gIEBJbnB1dCgpIHZhbHVlS2V5OiBzdHJpbmcgPSAndmFsdWUnO1xuICBcbiAgLy8gZW1pdHRlciB0byBlbWl0IGEgY2hhbmdlLi4uXG4gIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XG4gIFxuICBpdGVyYWJsZURpZmZlcjogYW55O1xuICBcbiAgb3B0aW9uc1BvaW50ZXI6IG51bWJlciA9IC0xO1xuICBcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX2l0ZXJhYmxlRGlmZmVyczogSXRlcmFibGVEaWZmZXJzXG4gICkgeyBcbiAgICB0aGlzLml0ZXJhYmxlRGlmZmVyID0gdGhpcy5faXRlcmFibGVEaWZmZXJzLmZpbmQoW10pLmNyZWF0ZShudWxsKTtcbiAgfVxuICBcbiAgbmdPbkluaXQoKXtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgLypcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbihldmVudCl7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAzOCl7IC8vIHVwXG4gICAgICAgIHNlbGYub3B0aW9uc1BvaW50ZXItLTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PSA0MCkgeyAvLyBkb3duXG4gICAgICAgIHNlbGYub3B0aW9uc1BvaW50ZXIrKztcbiAgICAgIH1cbiAgICB9XG4gICAgKi9cbiAgfVxuICBcbiAgXG4gIGFkZChvcHRpb246IGFueSl7XG4gICAgdGhpcy52YWx1ZS5wdXNoKG9wdGlvbik7XG4gICAgaWYgKHRoaXMua2VlcG9wZW4gJiYgdGhpcy5nZXRPcHRpb25zKCkubGVuZ3RoKSB0aGlzLm9wZW5TZWxlY3RvcigpO1xuICAgIHRoaXMub3B0aW9uc1BvaW50ZXIgPSAtMTtcbiAgICB0aGlzLm9uQ2hhbmdlLm5leHQodGhpcy52YWx1ZSk7XG4gIH1cbiAgXG4gIHJlbW92ZShvcHRpb246IGFueSl7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuZmlsdGVyKCB2ID0+IHZbdGhpcy52YWx1ZUtleV0gIT0gb3B0aW9uW3RoaXMudmFsdWVLZXldICk7XG4gICAgdGhpcy5vbkNoYW5nZS5uZXh0KHRoaXMudmFsdWUpO1xuICB9XG4gIFxuICBnZXRPcHRpb25zKCl7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGlmICghdGhpcy52YWx1ZSkgdGhpcy52YWx1ZSA9IFtdO1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKCBvID0+IHRoaXMudmFsdWUubWFwKCB2ID0+IHZbdGhpcy52YWx1ZUtleV0gKS5pbmRleE9mKG9bdGhpcy52YWx1ZUtleV0pID09IC0xICkuZmlsdGVyKCBvID0+IHNlbGYuc2VhcmNoU3RyaW5nID09ICcnIHx8IG9bdGhpcy5kaXNwbGF5S2V5XS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoIHNlbGYuc2VhcmNoU3RyaW5nLnRvTG93ZXJDYXNlKCkpID4gLTEpO1xuICB9XG4gIFxuICB0b2dnbGVTZWxlY3Rvcigpe1xuICAgIGlmICghdGhpcy5zZWxlY3Rvck9wZW4gJiYgdGhpcy52YWx1ZS5sZW5ndGggJiYgIXRoaXMubXVsdGlwbGUpIHJldHVybjtcbiAgICBpZiAodGhpcy5zZWxlY3Rvck9wZW4pIHRoaXMuY2xvc2VTZWxlY3RvcigpO1xuICAgIGVsc2UgdGhpcy5vcGVuU2VsZWN0b3IoKTtcbiAgfVxuICBcbiAgc2VhcmNoKGV2ZW50Pyl7XG4gICAgdGhpcy5zZWFyY2hTdHJpbmcgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIFxuICBvcGVuU2VsZWN0b3IoKXtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZWxmLnNlbGVjdG9yT3BlbiA9IHRydWU7XG4gICAgfSwxMDApXG4gIH1cbiAgXG4gIGNsb3NlU2VsZWN0b3IoKXtcbiAgICBpZiAoIXRoaXMuc2VsZWN0b3JPcGVuKSByZXR1cm47XG4gICAgdGhpcy5zZWxlY3Rvck9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLnNlYXJjaFN0cmluZyA9ICcnO1xuICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuICBcbiAgbmdEb0NoZWNrKCkge1xuICAgIGlmICghdGhpcy52YWx1ZSkgcmV0dXJuO1xuICAgIGxldCBjaGFuZ2VzID0gdGhpcy5pdGVyYWJsZURpZmZlci5kaWZmKHRoaXMudmFsdWUpO1xuICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICBsZXQgcHJvcG9zZWQgPSB0aGlzLnZhbHVlLmZpbHRlciggKHYsaWR4LHNlbGYpID0+IHNlbGYubWFwKCBtID0+IG1bdGhpcy52YWx1ZUtleV0pLmluZGV4T2Yodlt0aGlzLnZhbHVlS2V5XSkgPT09IGlkeCApO1xuICAgICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoICE9PSBwcm9wb3NlZC5sZW5ndGgpIHRoaXMudmFsdWUgPSBwcm9wb3NlZDtcbiAgICB9XG4gIH1cbiAgXG59XG4iLCJpbXBvcnQge0RpcmVjdGl2ZSwgUmVuZGVyZXIsIEVsZW1lbnRSZWYsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZm9jdXNPbkluaXRdJ1xufSlcbmV4cG9ydCBjbGFzcyBGb2N1c09uSW5pdERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgnZm9jdXNPbkluaXQnKSBwcmlvcml0eTogbnVtYmVyID0gMDtcblxuICBzdGF0aWMgaW5zdGFuY2VzOiBGb2N1c09uSW5pdERpcmVjdGl2ZVtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlbmRlcmVyOiBSZW5kZXJlciwgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIEZvY3VzT25Jbml0RGlyZWN0aXZlLmluc3RhbmNlcy5wdXNoKHRoaXMpXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBGb2N1c09uSW5pdERpcmVjdGl2ZS5pbnN0YW5jZXMuc3BsaWNlKEZvY3VzT25Jbml0RGlyZWN0aXZlLmluc3RhbmNlcy5pbmRleE9mKHRoaXMpLCAxKTtcbiAgICB9KTtcblxuICAgIGlmIChGb2N1c09uSW5pdERpcmVjdGl2ZS5pbnN0YW5jZXMuZXZlcnkoKGkpID0+IHRoaXMucHJpb3JpdHkgPj0gaS5wcmlvcml0eSkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZChcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdmb2N1cycsIFtdKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2hpcHNDb21wb25lbnQgfSBmcm9tICcuL2NoaXBzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb2N1c09uSW5pdERpcmVjdGl2ZSB9IGZyb20gJy4vZm9jdXMtb24taW5pdC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENoaXBzQ29tcG9uZW50LFxuICAgIEZvY3VzT25Jbml0RGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtDaGlwc0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hpcHNNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJJdGVyYWJsZURpZmZlcnMiLCJJbnB1dCIsIk91dHB1dCIsIkRpcmVjdGl2ZSIsIlJlbmRlcmVyIiwiRWxlbWVudFJlZiIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFtRUUsd0JBQ1UsS0FDQTtZQURBLFFBQUcsR0FBSCxHQUFHO1lBQ0gscUJBQWdCLEdBQWhCLGdCQUFnQjtnQ0FwQ0YsS0FBSztnQ0FDTixFQUFFOzt5QkFHRCxFQUFFOzs0QkFHRyxLQUFLOzsyQkFHUixFQUFFOzs4QkFHRSxZQUFZOzsrQkFHWCxPQUFPOzs0QkFHVCxLQUFLOzs0QkFHTCxLQUFLOzhCQUVKLFNBQVM7NEJBQ1gsT0FBTzs7NEJBR2QsSUFBSUEsaUJBQVksRUFBUztrQ0FJckIsQ0FBQyxDQUFDO1lBTXpCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkU7Ozs7UUFFRCxpQ0FBUTs7O1lBQVI7Ozs7Ozs7Ozs7YUFXQzs7Ozs7UUFHRCw0QkFBRzs7OztZQUFILFVBQUksTUFBVztnQkFDYixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFNO29CQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDbkUsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2hDOzs7OztRQUVELCtCQUFNOzs7O1lBQU4sVUFBTyxNQUFXO2dCQUFsQixpQkFHQztnQkFGQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFL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