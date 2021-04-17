import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFilterComponent } from './employee-filter.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [EmployeeFilterComponent],
    imports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [EmployeeFilterComponent]
})
export class EmployeeFilterModule { }
