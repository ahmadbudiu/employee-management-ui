import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from './employee-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMessageModule } from '../../../components/input-message/input-message.module';
import { DpDatePickerModule } from 'ng2-date-picker';

@NgModule({
    declarations: [EmployeeFormComponent],
    imports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        InputMessageModule,
        DpDatePickerModule,
    ],
    exports: [EmployeeFormComponent],
})
export class EmployeeFormModule { }
