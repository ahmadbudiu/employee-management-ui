import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input-message',
  templateUrl: './input-message.component.html',
  styleUrls: ['./input-message.component.scss']
})
export class InputMessageComponent implements OnInit {

  constructor() { }

  @Input() control: AbstractControl | null;
  @Input() label;
  @Input() color = 'danger';

  ngOnInit(): void {
  }
}
