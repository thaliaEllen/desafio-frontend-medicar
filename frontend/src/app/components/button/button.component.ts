import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() buttonText: string;
  @Input() buttonClassIsPrimary: boolean;
  @Input() buttonDisabled: boolean;
  @Output() buttonClick = new EventEmitter<void>();

  constructor(){
    this.buttonText = '';
    this.buttonClassIsPrimary = true;
    this.buttonDisabled = false;
  }
  onClick() {
    this.buttonClick.emit();
  }

}
