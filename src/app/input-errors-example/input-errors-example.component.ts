import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-input-errors-example',
  templateUrl: 'input-errors-example.component.html',
  styleUrls: ['input-errors-example.component.css'],
})
export class InputErrorsExampleComponent {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
}


