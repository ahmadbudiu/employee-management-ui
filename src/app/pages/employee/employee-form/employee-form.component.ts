import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CreateEmployeeDto, UpdateEmployeeDto } from '../../../dto';
import { EmployeeService } from '../../../services/employee/employee.service';
import { BankService } from '../../../services/bank/bank.service';
import { PositionService } from '../../../services/position/position.service';
import { EmployeeModel } from '../../../models';
import { AddressService } from '../../../services/address/address.service';
import { AppResponse } from '../../../models/response.model';
import { AddressModel } from '../../../models/address.model';

@Component({
    selector: 'app-employee-form',
    templateUrl: './employee-form.component.html',
    styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

    constructor(
        private employeeService: EmployeeService,
        private bankService: BankService,
        private positionService: PositionService,
        private addressService: AddressService,
    ) {}

    @Input() employee: EmployeeModel;
    @Output() finish = new EventEmitter();
    @Input() type = 'create';

    banks: Array<string> = [];
    positions: Array<string> = [];
    employeeFrom = CreateEmployeeDto.form();
    form = this.setForm();
    dob: any;
    provinces: Array<AddressModel> = [];
    cities: Array<AddressModel> = [];
    districts: Array<AddressModel> = [];
    villages: Array<AddressModel> = [];
    identity: any;

    ngOnInit(): void {
        this.getProvinces().then(_ => {});
        if (this.employee) {
            this.employeeFrom = UpdateEmployeeDto.form(this.employee);
            this.form = this.setForm();
            this.fillAddress().then(_ => {});
        }
        this.getBanks();
        this.getPositions();
    }

    getBanks(): void {
        this.bankService.getAll().then(banks => {
            this.banks = banks;
        });
    }

    getPositions(): void {
        this.positionService.getAll().then(positions => {
            this.positions = positions;
        });
    }

    onSelectFile(event: any): void
    {
        if (event) {
            if (event.target.files.length > 0)
            {
                this.employeeFrom.get('identity').setValue(event.target.files[0]);
            }
        }
    }

    submitForm(): void {
        if (! this.employeeFrom.valid) {
            return;
        }
        if (this.type === 'create') {
            this.createNewEmployee();
        } else {
            this.updateEmployee();
        }
    }

    createNewEmployee(): void {
        const createEmployeeDto = CreateEmployeeDto.createByForm(this.employeeFrom);
        this.employeeService.store(createEmployeeDto).then(() => {
            this.finish.emit(true);
        });
    }

    updateEmployee(): void {
        const updateEmployeeDto = UpdateEmployeeDto.createByForm(this.employeeFrom);
        this.employeeService.update(updateEmployeeDto, this.employee.id).then(() => {
            this.finish.emit(true);
        });
    }

    onProvinceChanged(provinceId?): void {
        console.log(this.form.phone.errors);
        if (! provinceId) {
            provinceId = this.form.province_id.value;
        }
        this.villages = this.districts = this.cities = [];
        this.getCitiesByProvince(provinceId).then(_ => {});
    }

    onCityChanged(cityId?): void {
        if (! cityId) {
            cityId = this.form.city_id.value;
        }
        this.villages = this.districts = [];
        this.getDistrictsByCity(cityId).then(_ => {});
    }

    onDistrictChanged(districtId?): void {
        if (! districtId) {
            districtId = this.form.district_id.value;
        }
        this.villages = [];
        this.getVillagesByDistrict(districtId).then(_ => {});
    }

    async fillAddress(): Promise<void> {
        await this.getProvinces();
        await this.getCitiesByProvince(this.form.province_id.value);
        await this.getDistrictsByCity(this.form.city_id.value);
        await this.getVillagesByDistrict(this.form.district_id.value);
    }

    async getProvinces(): Promise<void> {
        const response: AppResponse = await this.addressService.getAllProvinces();
        if (response.result) {
            this.provinces = response.result.map(province => new AddressModel(province));
        }
    }

    async getCitiesByProvince(provinceId: number): Promise<void> {
        const response: AppResponse = await this.addressService.getCitiesByProvince(provinceId);
        if (response.result) {
            this.cities = response.result.map(city => new AddressModel(city));
        }
    }

    async getDistrictsByCity(cityId: number): Promise<void> {
        const response: AppResponse = await this.addressService.getDistrictsByCity(cityId);
        if (response.result) {
            this.districts = response.result.map(district => new AddressModel(district));
        }
    }

    async getVillagesByDistrict(districtId: number): Promise<void> {
        const response: AppResponse = await this.addressService.getVillagesByDistrict(districtId);
        if (response.result) {
            this.villages = response.result.map(village => new AddressModel(village));
        }
    }

    setForm(): any {
        return  {
            first_name: this.employeeFrom.get('first_name'),
            last_name: this.employeeFrom.get('last_name'),
            email: this.employeeFrom.get('email'),
            phone: this.employeeFrom.get('phone'),
            position: this.employeeFrom.get('position'),
            bank: this.employeeFrom.get('bank'),
            bank_no: this.employeeFrom.get('bank_no'),
            zip_code: this.employeeFrom.get('zip_code'),
            identity_number: this.employeeFrom.get('identity_number'),
            dob: this.employeeFrom.get('dob'),
            province_id: this.employeeFrom.get('province_id'),
            city_id: this.employeeFrom.get('city_id'),
            district_id: this.employeeFrom.get('district_id'),
            village_id: this.employeeFrom.get('village_id'),
            address: this.employeeFrom.get('address'),
        };
    }
}
