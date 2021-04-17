export class EmployeeModel {
    id: number;
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
    identity: string;
    // tslint:disable-next-line:variable-name
    identity_number: string;
    dob: string;
    // tslint:disable-next-line:variable-name
    province_id: string;
    // tslint:disable-next-line:variable-name
    city_id: string;
    // tslint:disable-next-line:variable-name
    district_id: string;
    // tslint:disable-next-line:variable-name
    village_id: string;
    address: string;

    constructor(employee: Employee) {
        this.id = employee.id;
        this.first_name = employee.first_name;
        this.last_name = employee.last_name;
        this.email = employee.email;
        this.phone = employee.phone;
        this.position = employee.position;
        this.bank = employee.bank;
        this.bank_no = employee.bank_no;
        this.zip_code = employee.zip_code;
        this.identity = employee.identity;
        this.identity_number = employee.identity_number;
        this.dob = employee.dob;
        this.province_id = employee.province_id;
        this.city_id = employee.city_id;
        this.district_id = employee.district_id;
        this.village_id = employee.village_id;
        this.address = employee.address;
    }
}

export interface Employee {
    id: number;
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
    identity: string;
    // tslint:disable-next-line:variable-name
    identity_number: string;
    dob: string;
    // tslint:disable-next-line:variable-name
    province_id: string;
    // tslint:disable-next-line:variable-name
    city_id: string;
    // tslint:disable-next-line:variable-name
    district_id: string;
    // tslint:disable-next-line:variable-name
    village_id: string;
    address: string;
}
