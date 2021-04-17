import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMessageComponent } from './input-message.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [InputMessageComponent],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        InputMessageComponent,
    ]
})
export class InputMessageModule { }
