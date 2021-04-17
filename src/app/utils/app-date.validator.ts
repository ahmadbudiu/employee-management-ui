import { AbstractControl } from '@angular/forms';
import * as moment from 'moment';

export class AppDateValidator {
    static dateValidator(AC: AbstractControl): any {
        if (AC && AC.value && ! moment(AC.value, 'YYYY-MM-DD', true).isValid()) {
            return { format: true };
        }
        return null;
    }
}
