import { ChangeDetectorRef, IterableDiffers, EventEmitter } from '@angular/core';
export declare class ChipsComponent {
    private ref;
    private _iterableDiffers;
    selectorOpen: boolean;
    searchString: string;
    value: any[];
    disabled: boolean;
    options: any[];
    emptyState: string;
    placeholder: string;
    keepopen: boolean;
    multiple: boolean;
    displayKey: string;
    valueKey: string;
    onChange: EventEmitter<any[]>;
    iterableDiffer: any;
    optionsPointer: number;
    constructor(ref: ChangeDetectorRef, _iterableDiffers: IterableDiffers);
    ngOnInit(): void;
    add(option: any): void;
    remove(option: any): void;
    getOptions(): any[];
    toggleSelector(): void;
    search(event?: any): void;
    openSelector(): void;
    closeSelector(): void;
    ngDoCheck(): void;
}
