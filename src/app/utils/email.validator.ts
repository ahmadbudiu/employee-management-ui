import { AbstractControl, Validators } from '@angular/forms';

export class EmailValidator {
    static email(AC: AbstractControl): any {
        return Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
    }
}
