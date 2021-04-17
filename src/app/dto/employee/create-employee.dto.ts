import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeModel } from '../../models';
import {AppDateValidator, EmailValidator, IdentityNumberValidator, PhoneValidator} from '../../utils';

export class CreateEmployeeDto {
    // tslint:disable-next-line:variable-name
    first_name: string;
    // tslint:disable-next-line:variable-name
    last_name: string;
    email: string;
    phone: number;
    position: string;
    bank: string;
    // tslint:disable-next-line:variable-name
    bank_no: string;
    // tslint:disable-next-line:variable-name
    zip_code: string;
    // tslint:disable-next-line:variable-name
    identity_number: string;
    dob: string;
    // tslint:disable-next-line:variable-name
    village_id: number;
    address: string;
    identity: any;

    constructor(employee: CreateEmployee) {
        this.first_name = employee.first_name;
        this.last_name = employee.last_name;
        this.email = employee.email;
        this.phone = employee.phone;
        this.position = employee.position;
        this.bank = employee.bank;
        this.bank_no = employee.bank_no;
        this.zip_code = employee.zip_code;
        this.identity_number = employee.identity_number;
        this.dob = employee.dob;
        this.village_id = employee.village_id;
        this.address = employee.address;
        this.identity = employee.identity;
    }

    static form(employee?: EmployeeModel): FormGroup {
        if (employee) {
            return new FormGroup({
                first_name: new FormControl(employee.first_name, [Validators.required]),
                last_name: new FormControl(employee.last_name, []),
                email: new FormControl(employee.email, [
                    Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]
                ),
                phone: new FormControl(employee.phone, [Validators.required, PhoneValidator.phone]),
                position: new FormControl(employee.position, [Validators.required]),
                bank: new FormControl(employee.bank, [Validators.required]),
                bank_no: new FormControl(employee.bank_no, []),
                zip_code: new FormControl(employee.zip_code, []),
                identity_number: new FormControl(employee.identity_number, [Validators.required, IdentityNumberValidator.identity]),
                dob: new FormControl(employee.dob, Validators.compose([Validators.required, AppDateValidator.dateValidator])),
                province_id: new FormControl(employee.province_id, []),
                city_id: new FormControl(employee.city_id, []),
                district_id: new FormControl(employee.district_id, []),
                village_id: new FormControl(employee.village_id, [Validators.required]),
                address: new FormControl(employee.address, []),
                identity: new FormControl('', []),
            });
        }
        return new FormGroup({
            first_name: new FormControl('', [Validators.required]),
            last_name: new FormControl('', []),
            email: new FormControl('', [
                Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]
            ),
            phone: new FormControl('', [Validators.required, PhoneValidator.phone]),
            position: new FormControl('', [Validators.required]),
            bank: new FormControl('', [Validators.required]),
            bank_no: new FormControl('', []),
            zip_code: new FormControl('', []),
            identity_number: new FormControl('', [Validators.required, IdentityNumberValidator.identity]),
            dob: new FormControl('', Validators.compose([Validators.required, AppDateValidator.dateValidator])),
            province_id: new FormControl('', []),
            city_id: new FormControl('', []),
            district_id: new FormControl('', []),
            village_id: new FormControl('', [Validators.required]),
            address: new FormControl('', []),
            identity: new FormControl('', []),
        });
    }

    static createByForm(form: FormGroup): CreateEmployeeDto {
        return new CreateEmployeeDto(form.value);
    }

    toFormData(): FormData
    {
        const formData = new FormData();
        formData.append('first_name', this.first_name);
        formData.append('last_name', this.last_name);
        formData.append('email', this.email);
        formData.append('phone', this.phone.toString());
        formData.append('position', this.position);
        formData.append('bank', this.bank);
        formData.append('bank_no', this.bank_no);
        formData.append('zip_code', this.zip_code);
        formData.append('identity_number', this.identity_number);
        formData.append('dob', this.dob);
        formData.append('village_id', this.village_id.toString());
        formData.append('address', this.address);
        formData.append('identity', this.identity);
        return formData;
    }
}

export interface CreateEmployee {
    // tslint:disable-next-line:variable-name
    first_name: string;
    // tslint:disable-next-line:variable-name
    last_name: string;
    email: string;
    phone: number;
    position: string;
    bank: string;
    // tslint:disable-next-line:variable-name
    bank_no: string;
    // tslint:disable-next-line:variable-name
    zip_code: string;
    // tslint:disable-next-line:variable-name
    identity_number: string;
    dob: string;
    // tslint:disable-next-line:variable-name
    village_id: number;
    address: string;
    identity: any;
}
