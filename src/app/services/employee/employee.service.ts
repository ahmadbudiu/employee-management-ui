import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateEmployeeDto, UpdateEmployeeDto } from '../../dto';
import { AppResponse } from '../../models/response.model';
import { EmployeeModel } from '../../models';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    constructor(
        private httpClient: HttpClient,
    ) { }

    getAll(filter?: string): Promise<AppResponse> {
        return new Promise<any>(resolve => {
            return this.httpClient.get('employee?' + filter)
                .subscribe(response => {
                    resolve(response);
                });
        });
    }

    getOne(employeeId: number): Promise<any> {
        return new Promise<any>(resolve => {
            return this.httpClient.get('employee/' + employeeId)
                .subscribe(response => {
                    resolve(response);
                });
        });
    }

    store(createEmployeeDto: CreateEmployeeDto): Promise<EmployeeModel> {
        return new Promise<any>(resolve => {
            return this.httpClient.post('employee', createEmployeeDto.toFormData())
                .subscribe((response: AppResponse) => {
                    if (response.result) {
                        resolve(new EmployeeModel(response.result));
                    }
                });
        });
    }

    update(updateEmployeeDto: UpdateEmployeeDto, employeeId: number): Promise<any> {
        return new Promise<any>(resolve => {
            return this.httpClient.post('employee/' + employeeId, updateEmployeeDto.toFormData())
                .subscribe(response => {
                    resolve(response);
                });
        });
    }

    delete(employeeId: number): Promise<any> {
        return new Promise<any>(resolve => {
            return this.httpClient.delete('employee/' + employeeId)
                .subscribe(response => {
                    resolve(response);
                });
        });
    }
}
