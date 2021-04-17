import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { Pencil, Trash, Eye } from 'ng-bootstrap-icons/icons';
import { EmployeeFormModule } from './employee-form/employee-form.module';
import { EmployeeFilterModule } from './employee-filter/employee-filter.module';

const icons = {
    Pencil,
    Trash,
    Eye,
};

@NgModule({
    declarations: [EmployeeComponent],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        FlexLayoutModule,
        HttpClientModule,
        BootstrapIconsModule.pick(icons),
        EmployeeFormModule,
        EmployeeFilterModule,
    ]
})
export class EmployeeModule { }
