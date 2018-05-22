/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ChangeDetectorRef, IterableDiffers, Input, Output, EventEmitter } from '@angular/core';
export class ChipsComponent {
    /**
     * @param {?} ref
     * @param {?} _iterableDiffers
     */
    constructor(ref, _iterableDiffers) {
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
        this.onChange = new EventEmitter();
        this.optionsPointer = -1;
        this.iterableDiffer = this._iterableDiffers.find([]).create(null);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        let /** @type {?} */ self = this;
        /*
            document.onkeydown = function(event){
              if (event.keyCode == 38){ // up
                self.optionsPointer--;
              } else if (event.keyCode == 40) { // down
                self.optionsPointer++;
              }
            }
            */
    }
    /**
     * @param {?} option
     * @return {?}
     */
    add(option) {
        this.value.push(option);
        if (this.keepopen && this.getOptions().length)
            this.openSelector();
        this.optionsPointer = -1;
        this.onChange.next(this.value);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    remove(option) {
        this.value = this.value.filter(v => v[this.valueKey] != option[this.valueKey]);
        this.onChange.next(this.value);
    }
    /**
     * @return {?}
     */
    getOptions() {
        let /** @type {?} */ self = this;
        if (!this.value)
            this.value = [];
        return this.options.filter(o => this.value.map(v => v[this.valueKey]).indexOf(o[this.valueKey]) == -1).filter(o => self.searchString == '' || o[this.displayKey].toLowerCase().indexOf(self.searchString.toLowerCase()) > -1);
    }
    /**
     * @return {?}
     */
    toggleSelector() {
        if (!this.selectorOpen && this.value.length && !this.multiple)
            return;
        if (this.selectorOpen)
            this.closeSelector();
        else
            this.openSelector();
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    search(event) {
        this.searchString = event.target.value;
        this.ref.detectChanges();
    }
    /**
     * @return {?}
     */
    openSelector() {
        let /** @type {?} */ self = this;
        setTimeout(() => {
            self.selectorOpen = true;
        }, 100);
    }
    /**
     * @return {?}
     */
    closeSelector() {
        if (!this.selectorOpen)
            return;
        this.selectorOpen = false;
        this.searchString = '';
        this.ref.detectChanges();
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (!this.value)
            return;
        let /** @type {?} */ changes = this.iterableDiffer.diff(this.value);
        if (changes) {
            let /** @type {?} */ proposed = this.value.filter((v, idx, self) => self.map(m => m[this.valueKey]).indexOf(v[this.valueKey]) === idx);
            if (this.value.length !== proposed.length)
                this.value = proposed;
        }
    }
}
ChipsComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-chips',
                template: `
  <div id="ng-chips-wrapper" (click)="toggleSelector()">
  
    <div class="placeholder" *ngIf="!value.length">{{ emptyState }}</div>
    
      <div *ngFor="let chip of value" class="chipit">
        <div [ngClass]="{'disabled': disabled, 'value': true}">{{ chip[displayKey] }}</div>
        <div class="remove" *ngIf="!disabled" (click)="remove(chip)">x</div>
      </div>
    
      <div class="addition" *ngIf="value.length && getOptions().length && !disabled && multiple">{{ placeholder }}</div>
    
      <div class="clearfix"></div>
    </div>
  
    <div id="ng-chips-selector" class="rounded" *ngIf="selectorOpen">
      <input type="text" (keyup)="search($event)" class='search' placeholder="Search" focusOnInit />
    <div *ngFor="let option of getOptions()" (click)="add(option)" [ngClass]="{'option': true, 'focused': getOptions()[optionsPointer] == option }">{{ option[displayKey] }}</div>
  </div>
  `,
                styles: [`#ng-chips-wrapper{position:relative;line-height:1;min-height:50px;cursor:pointer;border:1px solid #d2d2d2;padding:5px;border-radius:2px}#ng-chips-wrapper .placeholder{float:left;color:grey;font-size:20px;margin-left:5px}#ng-chips-wrapper .chipit{float:left;background-color:#d6d6d6;border-radius:1000px;margin:3px;font-size:13px;height:32px;padding-left:12px}#ng-chips-wrapper .chipit .value{float:left;margin-right:4px;margin-top:9px}#ng-chips-wrapper .chipit .value.disabled{margin-right:12px}#ng-chips-wrapper .chipit .remove{text-align:center;float:left;background-color:#bdbdbd;color:#fff;border-radius:50%;width:24px;height:24px;margin:4px;padding-top:2px;font-size:18px}#ng-chips-wrapper .chipit:hover{background-color:#888;color:#fff}#ng-chips-wrapper .chipit:hover .remove{background-color:#fff;color:#888}#ng-chips-wrapper .addition{float:left;margin-top:12px;color:grey;font-size:13px}#ng-chips-wrapper .clearfix:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0}#ng-chips-wrapper * html .clearfix{zoom:1}#ng-chips-selector{background-color:#fff;z-index:1000;position:absolute;border:1px solid #c9c9c9;padding:3px;min-width:300px;max-height:200px;overflow-y:scroll;overflow-x:hidden}#ng-chips-selector .search{width:90%;margin:5px;border-width:0 0 1px;border-style:solid;border-color:#c9c9c9;outline:0;box-shadow:none!important}#ng-chips-selector .option{padding:3px}#ng-chips-selector .option .focused,#ng-chips-selector .option:hover{background-color:#d3d3d3}#ng-chips-selector .rounded{border-radius:5px}`],
                host: {
                    '(document:click)': 'closeSelector()',
                }
            },] },
];
/** @nocollapse */
ChipsComponent.ctorParameters = () => [
    { type: ChangeDetectorRef, },
    { type: IterableDiffers, },
];
ChipsComponent.propDecorators = {
    "value": [{ type: Input },],
    "disabled": [{ type: Input },],
    "options": [{ type: Input },],
    "emptyState": [{ type: Input },],
    "placeholder": [{ type: Input },],
    "keepopen": [{ type: Input },],
    "multiple": [{ type: Input },],
    "displayKey": [{ type: Input },],
    "valueKey": [{ type: Input },],
    "onChange": [{ type: Output },],
};
function ChipsComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ChipsComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ChipsComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ChipsComponent.propDecorators;
    /** @type {?} */
    ChipsComponent.prototype.selectorOpen;
    /** @type {?} */
    ChipsComponent.prototype.searchString;
    /** @type {?} */
    ChipsComponent.prototype.value;
    /** @type {?} */
    ChipsComponent.prototype.disabled;
    /** @type {?} */
    ChipsComponent.prototype.options;
    /** @type {?} */
    ChipsComponent.prototype.emptyState;
    /** @type {?} */
    ChipsComponent.prototype.placeholder;
    /** @type {?} */
    ChipsComponent.prototype.keepopen;
    /** @type {?} */
    ChipsComponent.prototype.multiple;
    /** @type {?} */
    ChipsComponent.prototype.displayKey;
    /** @type {?} */
    ChipsComponent.prototype.valueKey;
    /** @type {?} */
    ChipsComponent.prototype.onChange;
    /** @type {?} */
    ChipsComponent.prototype.iterableDiffer;
    /** @type {?} */
    ChipsComponent.prototype.optionsPointer;
    /** @type {?} */
    ChipsComponent.prototype.ref;
    /** @type {?} */
    ChipsComponent.prototype._iterableDiffers;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hpcHMvIiwic291cmNlcyI6WyJsaWIvY2hpcHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBb0MsTUFBTSxlQUFlLENBQUM7QUErQjdJLE1BQU07Ozs7O0lBb0NKLFlBQ1UsS0FDQTtRQURBLFFBQUcsR0FBSCxHQUFHO1FBQ0gscUJBQWdCLEdBQWhCLGdCQUFnQjs0QkFwQ0YsS0FBSzs0QkFDTixFQUFFOztxQkFHRCxFQUFFOzt3QkFHRyxLQUFLOzt1QkFHUixFQUFFOzswQkFHRSxZQUFZOzsyQkFHWCxPQUFPOzt3QkFHVCxLQUFLOzt3QkFHTCxLQUFLOzBCQUVKLFNBQVM7d0JBQ1gsT0FBTzs7d0JBR2QsSUFBSSxZQUFZLEVBQVM7OEJBSXJCLENBQUMsQ0FBQztRQU16QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25FOzs7O0lBRUQsUUFBUTtRQUNOLHFCQUFJLElBQUksR0FBRyxJQUFJLENBQUM7Ozs7Ozs7Ozs7S0FVakI7Ozs7O0lBR0QsR0FBRyxDQUFDLE1BQVc7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkUsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENB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R0FBRyxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFFLENBQUM7WUFDdkgsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztTQUNsRTtLQUNGOzs7WUF2SUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQlQ7Z0JBQ0QsTUFBTSxFQUFFLENBQUMsZ2hEQUFnaEQsQ0FBQztnQkFDMWhELElBQUksRUFBRTtvQkFDSixrQkFBa0IsRUFBRSxpQkFBaUI7aUJBQ3RDO2FBQ0Y7Ozs7WUE3Qm1CLGlCQUFpQjtZQUFFLGVBQWU7OztzQkFxQ25ELEtBQUs7eUJBR0wsS0FBSzt3QkFHTCxLQUFLOzJCQUdMLEtBQUs7NEJBR0wsS0FBSzt5QkFHTCxLQUFLO3lCQUdMLEtBQUs7MkJBRUwsS0FBSzt5QkFDTCxLQUFLO3lCQUdMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdG9yUmVmLCBJdGVyYWJsZURpZmZlcnMsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJWaWV3SW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1jaGlwcycsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgaWQ9XCJuZy1jaGlwcy13cmFwcGVyXCIgKGNsaWNrKT1cInRvZ2dsZVNlbGVjdG9yKClcIj5cbiAgXG4gICAgPGRpdiBjbGFzcz1cInBsYWNlaG9sZGVyXCIgKm5nSWY9XCIhdmFsdWUubGVuZ3RoXCI+e3sgZW1wdHlTdGF0ZSB9fTwvZGl2PlxuICAgIFxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgY2hpcCBvZiB2YWx1ZVwiIGNsYXNzPVwiY2hpcGl0XCI+XG4gICAgICAgIDxkaXYgW25nQ2xhc3NdPVwieydkaXNhYmxlZCc6IGRpc2FibGVkLCAndmFsdWUnOiB0cnVlfVwiPnt7IGNoaXBbZGlzcGxheUtleV0gfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlbW92ZVwiICpuZ0lmPVwiIWRpc2FibGVkXCIgKGNsaWNrKT1cInJlbW92ZShjaGlwKVwiPng8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgPGRpdiBjbGFzcz1cImFkZGl0aW9uXCIgKm5nSWY9XCJ2YWx1ZS5sZW5ndGggJiYgZ2V0T3B0aW9ucygpLmxlbmd0aCAmJiAhZGlzYWJsZWQgJiYgbXVsdGlwbGVcIj57eyBwbGFjZWhvbGRlciB9fTwvZGl2PlxuICAgIFxuICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIFxuICAgIDxkaXYgaWQ9XCJuZy1jaGlwcy1zZWxlY3RvclwiIGNsYXNzPVwicm91bmRlZFwiICpuZ0lmPVwic2VsZWN0b3JPcGVuXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoa2V5dXApPVwic2VhcmNoKCRldmVudClcIiBjbGFzcz0nc2VhcmNoJyBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGZvY3VzT25Jbml0IC8+XG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGdldE9wdGlvbnMoKVwiIChjbGljayk9XCJhZGQob3B0aW9uKVwiIFtuZ0NsYXNzXT1cInsnb3B0aW9uJzogdHJ1ZSwgJ2ZvY3VzZWQnOiBnZXRPcHRpb25zKClbb3B0aW9uc1BvaW50ZXJdID09IG9wdGlvbiB9XCI+e3sgb3B0aW9uW2Rpc3BsYXlLZXldIH19PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgI25nLWNoaXBzLXdyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmU7bGluZS1oZWlnaHQ6MTttaW4taGVpZ2h0OjUwcHg7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyOjFweCBzb2xpZCAjZDJkMmQyO3BhZGRpbmc6NXB4O2JvcmRlci1yYWRpdXM6MnB4fSNuZy1jaGlwcy13cmFwcGVyIC5wbGFjZWhvbGRlcntmbG9hdDpsZWZ0O2NvbG9yOmdyZXk7Zm9udC1zaXplOjIwcHg7bWFyZ2luLWxlZnQ6NXB4fSNuZy1jaGlwcy13cmFwcGVyIC5jaGlwaXR7ZmxvYXQ6bGVmdDtiYWNrZ3JvdW5kLWNvbG9yOiNkNmQ2ZDY7Ym9yZGVyLXJhZGl1czoxMDAwcHg7bWFyZ2luOjNweDtmb250LXNpemU6MTNweDtoZWlnaHQ6MzJweDtwYWRkaW5nLWxlZnQ6MTJweH0jbmctY2hpcHMtd3JhcHBlciAuY2hpcGl0IC52YWx1ZXtmbG9hdDpsZWZ0O21hcmdpbi1yaWdodDo0cHg7bWFyZ2luLXRvcDo5cHh9I25nLWNoaXBzLXdyYXBwZXIgLmNoaXBpdCAudmFsdWUuZGlzYWJsZWR7bWFyZ2luLXJpZ2h0OjEycHh9I25nLWNoaXBzLXdyYXBwZXIgLmNoaXBpdCAucmVtb3Zle3RleHQtYWxpZ246Y2VudGVyO2Zsb2F0OmxlZnQ7YmFja2dyb3VuZC1jb2xvcjojYmRiZGJkO2NvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czo1MCU7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDttYXJnaW46NHB4O3BhZGRpbmctdG9wOjJweDtmb250LXNpemU6MThweH0jbmctY2hpcHMtd3JhcHBlciAuY2hpcGl0OmhvdmVye2JhY2tncm91bmQtY29sb3I6Izg4ODtjb2xvcjojZmZmfSNuZy1jaGlwcy13cmFwcGVyIC5jaGlwaXQ6aG92ZXIgLnJlbW92ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6Izg4OH0jbmctY2hpcHMtd3JhcHBlciAuYWRkaXRpb257ZmxvYXQ6bGVmdDttYXJnaW4tdG9wOjEycHg7Y29sb3I6Z3JleTtmb250LXNpemU6MTNweH0jbmctY2hpcHMtd3JhcHBlciAuY2xlYXJmaXg6YWZ0ZXJ7dmlzaWJpbGl0eTpoaWRkZW47ZGlzcGxheTpibG9jaztmb250LXNpemU6MDtjb250ZW50OlwiIFwiO2NsZWFyOmJvdGg7aGVpZ2h0OjB9I25nLWNoaXBzLXdyYXBwZXIgKiBodG1sIC5jbGVhcmZpeHt6b29tOjF9I25nLWNoaXBzLXNlbGVjdG9ye2JhY2tncm91bmQtY29sb3I6I2ZmZjt6LWluZGV4OjEwMDA7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyOjFweCBzb2xpZCAjYzljOWM5O3BhZGRpbmc6M3B4O21pbi13aWR0aDozMDBweDttYXgtaGVpZ2h0OjIwMHB4O292ZXJmbG93LXk6c2Nyb2xsO292ZXJmbG93LXg6aGlkZGVufSNuZy1jaGlwcy1zZWxlY3RvciAuc2VhcmNoe3dpZHRoOjkwJTttYXJnaW46NXB4O2JvcmRlci13aWR0aDowIDAgMXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6I2M5YzljOTtvdXRsaW5lOjA7Ym94LXNoYWRvdzpub25lIWltcG9ydGFudH0jbmctY2hpcHMtc2VsZWN0b3IgLm9wdGlvbntwYWRkaW5nOjNweH0jbmctY2hpcHMtc2VsZWN0b3IgLm9wdGlvbiAuZm9jdXNlZCwjbmctY2hpcHMtc2VsZWN0b3IgLm9wdGlvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNkM2QzZDN9I25nLWNoaXBzLXNlbGVjdG9yIC5yb3VuZGVke2JvcmRlci1yYWRpdXM6NXB4fWBdLFxuICBob3N0OiB7XG4gICAgJyhkb2N1bWVudDpjbGljayknOiAnY2xvc2VTZWxlY3RvcigpJyxcbiAgfVxufSlcblxuZXhwb3J0IGNsYXNzIENoaXBzQ29tcG9uZW50IHtcbiAgXG4gIHNlbGVjdG9yT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBzZWFyY2hTdHJpbmc6IHN0cmluZyA9ICcnO1xuICBcbiAgLy8gZGVmYXVsdCB2YWx1ZVxuICBASW5wdXQoKSB2YWx1ZTogYW55W10gPSBbXTtcbiAgXG4gIC8vIGlzIGl0IGRpc2FibGVkIG9yIFwicmVhZG9ubHlcIlxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBcbiAgLy8gYXZhaWxhYmxlIG9wdGlvbnNcbiAgQElucHV0KCkgb3B0aW9uczogYW55W10gPSBbXTtcbiAgXG4gIC8vIHBsYWNlaG9sZGVyIHRleHQgb24gZW1wdHkgc3RhdGVcbiAgQElucHV0KCkgZW1wdHlTdGF0ZTogc3RyaW5nID0gJ1NlbGVjdCBUYWcnO1xuICBcbiAgLy8gdGhlIHRhZyB0byBhZGQgYW5vdGhlclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJysgVGFnJztcbiAgXG4gIC8vIGtlZXAgb3BlbiB0byBhbGxvdyBtdWx0aXBsZSB0byBiZSBzZWxlY3RlZD9cbiAgQElucHV0KCkga2VlcG9wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgXG4gIC8vIGFsbG93IG11bHRpcGxlIG9wdGlvbnNcbiAgQElucHV0KCkgbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgXG4gIEBJbnB1dCgpIGRpc3BsYXlLZXk6IHN0cmluZyA9ICdkaXNwbGF5JztcbiAgQElucHV0KCkgdmFsdWVLZXk6IHN0cmluZyA9ICd2YWx1ZSc7XG4gIFxuICAvLyBlbWl0dGVyIHRvIGVtaXQgYSBjaGFuZ2UuLi5cbiAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcbiAgXG4gIGl0ZXJhYmxlRGlmZmVyOiBhbnk7XG4gIFxuICBvcHRpb25zUG9pbnRlcjogbnVtYmVyID0gLTE7XG4gIFxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfaXRlcmFibGVEaWZmZXJzOiBJdGVyYWJsZURpZmZlcnNcbiAgKSB7IFxuICAgIHRoaXMuaXRlcmFibGVEaWZmZXIgPSB0aGlzLl9pdGVyYWJsZURpZmZlcnMuZmluZChbXSkuY3JlYXRlKG51bGwpO1xuICB9XG4gIFxuICBuZ09uSW5pdCgpe1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAvKlxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDM4KXsgLy8gdXBcbiAgICAgICAgc2VsZi5vcHRpb25zUG9pbnRlci0tO1xuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09IDQwKSB7IC8vIGRvd25cbiAgICAgICAgc2VsZi5vcHRpb25zUG9pbnRlcisrO1xuICAgICAgfVxuICAgIH1cbiAgICAqL1xuICB9XG4gIFxuICBcbiAgYWRkKG9wdGlvbjogYW55KXtcbiAgICB0aGlzLnZhbHVlLnB1c2gob3B0aW9uKTtcbiAgICBpZiAodGhpcy5rZWVwb3BlbiAmJiB0aGlzLmdldE9wdGlvbnMoKS5sZW5ndGgpIHRoaXMub3BlblNlbGVjdG9yKCk7XG4gICAgdGhpcy5vcHRpb25zUG9pbnRlciA9IC0xO1xuICAgIHRoaXMub25DaGFuZ2UubmV4dCh0aGlzLnZhbHVlKTtcbiAgfVxuICBcbiAgcmVtb3ZlKG9wdGlvbjogYW55KXtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5maWx0ZXIoIHYgPT4gdlt0aGlzLnZhbHVlS2V5XSAhPSBvcHRpb25bdGhpcy52YWx1ZUtleV0gKTtcbiAgICB0aGlzLm9uQ2hhbmdlLm5leHQodGhpcy52YWx1ZSk7XG4gIH1cbiAgXG4gIGdldE9wdGlvbnMoKXtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCF0aGlzLnZhbHVlKSB0aGlzLnZhbHVlID0gW107XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWx0ZXIoIG8gPT4gdGhpcy52YWx1ZS5tYXAoIHYgPT4gdlt0aGlzLnZhbHVlS2V5XSApLmluZGV4T2Yob1t0aGlzLnZhbHVlS2V5XSkgPT0gLTEgKS5maWx0ZXIoIG8gPT4gc2VsZi5zZWFyY2hTdHJpbmcgPT0gJycgfHwgb1t0aGlzLmRpc3BsYXlLZXldLnRvTG93ZXJDYXNlKCkuaW5kZXhPZiggc2VsZi5zZWFyY2hTdHJpbmcudG9Mb3dlckNhc2UoKSkgPiAtMSk7XG4gIH1cbiAgXG4gIHRvZ2dsZVNlbGVjdG9yKCl7XG4gICAgaWYgKCF0aGlzLnNlbGVjdG9yT3BlbiAmJiB0aGlzLnZhbHVlLmxlbmd0aCAmJiAhdGhpcy5tdWx0aXBsZSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLnNlbGVjdG9yT3BlbikgdGhpcy5jbG9zZVNlbGVjdG9yKCk7XG4gICAgZWxzZSB0aGlzLm9wZW5TZWxlY3RvcigpO1xuICB9XG4gIFxuICBzZWFyY2goZXZlbnQ/KXtcbiAgICB0aGlzLnNlYXJjaFN0cmluZyA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbiAgXG4gIG9wZW5TZWxlY3Rvcigpe1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNlbGYuc2VsZWN0b3JPcGVuID0gdHJ1ZTtcbiAgICB9LDEwMClcbiAgfVxuICBcbiAgY2xvc2VTZWxlY3Rvcigpe1xuICAgIGlmICghdGhpcy5zZWxlY3Rvck9wZW4pIHJldHVybjtcbiAgICB0aGlzLnNlbGVjdG9yT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuc2VhcmNoU3RyaW5nID0gJyc7XG4gICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIFxuICBuZ0RvQ2hlY2soKSB7XG4gICAgaWYgKCF0aGlzLnZhbHVlKSByZXR1cm47XG4gICAgbGV0IGNoYW5nZXMgPSB0aGlzLml0ZXJhYmxlRGlmZmVyLmRpZmYodGhpcy52YWx1ZSk7XG4gICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgIGxldCBwcm9wb3NlZCA9IHRoaXMudmFsdWUuZmlsdGVyKCAodixpZHgsc2VsZikgPT4gc2VsZi5tYXAoIG0gPT4gbVt0aGlzLnZhbHVlS2V5XSkuaW5kZXhPZih2W3RoaXMudmFsdWVLZXldKSA9PT0gaWR4ICk7XG4gICAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggIT09IHByb3Bvc2VkLmxlbmd0aCkgdGhpcy52YWx1ZSA9IHByb3Bvc2VkO1xuICAgIH1cbiAgfVxuICBcbn1cbiJdfQ==