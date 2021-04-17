import { FormControl, FormGroup } from '@angular/forms';

export class FilterEmployeeDto {
    name: string;
    email: string;
    phone: string;

    constructor(filter: FilterEmployee) {
        this.name = filter.name;
        this.email = filter.email;
        this.phone = filter.phone;
    }

    static form(): FormGroup {
        return new FormGroup({
            name: new FormControl('', []),
            email: new FormControl('', []),
            phone: new FormControl('', []),
        });
    }

    static createByForm(form: FormGroup): FilterEmployeeDto {
        return new FilterEmployeeDto(form.value);
    }

    toString(): string {
        let str = '';
        if (this.name) {
            str += ('name=' + this.name);
        }
        if (this.email) {
            if (str !== '') {
                str += '&';
            }
            str += ('email=' + this.email);
        }
        if (this.phone) {
            if (str !== '') {
                str += '&';
            }
            str += ('phone=' + this.phone);
        }
        return str;
    }

}

export interface FilterEmployee {
    name: string;
    email: string;
    phone: string;
}
