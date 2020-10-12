import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() isDisabled: boolean = false; // disable property
  @Output() btnClick: EventEmitter<any> = new EventEmitter(); // output event property
  @Input() btnType: string = 'click'; // type property
  @Input() btnCssClass: string; // class property
  @Input() label: string = 'Submit'; // label property

  // method called on button click
  buttonClick(): void {
    this.btnClick.emit(); // event emitted and to be captured in features module/components.
  }
}
