import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FilterEmployeeDto } from '../../../dto';

@Component({
    selector: 'app-employee-filter',
    templateUrl: './employee-filter.component.html',
    styleUrls: ['./employee-filter.component.scss']
})
export class EmployeeFilterComponent implements OnInit {

    constructor() { }

    filterForm = FilterEmployeeDto.form();
    @Output() finish = new EventEmitter();

    ngOnInit(): void {
    }

    submitForm(): void {
        this.finish.emit(FilterEmployeeDto.createByForm(this.filterForm));
    }

}
