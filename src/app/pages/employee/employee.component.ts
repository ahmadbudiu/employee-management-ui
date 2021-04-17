import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from '../../services/employee/employee.service';
import { EmployeeModel } from '../../models';
import { FilterEmployeeDto } from '../../dto';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

    constructor(
        private modalService: NgbModal,
        private employeeService: EmployeeService,
    ) {}

    employees: Array<EmployeeModel> = [];
    employee: EmployeeModel;

    ngOnInit(): void {
        this.getEmployees();
    }

    openCreateModal(content: any): void {
        this.modalService.open(content, {size: 'lg'});
    }

    openFilterModal(content: any): void {
        this.modalService.open(content, {size: 'lg'});
    }

    openUpdateModal(content: any, employee: EmployeeModel): void {
        this.employee = employee;
        this.modalService.open(content, {size: 'lg'});
    }

    openIdentityModal(content: any, employee: EmployeeModel): void {
        this.employee = employee;
        this.modalService.open(content, {size: 'md'});
    }

    getEmployees(filter = ''): void {
        this.employeeService.getAll(filter).then((response) => {
            this.employees = response.result.map(employee => new EmployeeModel(employee));
        });
    }

    finishSubmission(): void {
        this.modalService.dismissAll();
        this.getEmployees();
    }

    filterEmployee(filterEmployeeDto: FilterEmployeeDto): void {
        this.getEmployees(filterEmployeeDto.toString());
        this.modalService.dismissAll();
    }

    deleteEmployee(employeeId: number): void {
        this.employeeService.delete(employeeId).then(() => {
            this.getEmployees();
        });
    }
}
