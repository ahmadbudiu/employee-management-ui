import { AbstractControl } from '@angular/forms';

export class PhoneValidator {
    static phone(AC: AbstractControl): any {
        if (AC && AC.value && (AC.value < 1000000000 || AC.value > 9999999999999) ) {
            return { format: true };
        }
        return null;
    }
}
