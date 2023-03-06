import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent {
  myForm: FormGroup = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(3)]],
    price: [null, [Validators.required, Validators.min(0)]],
    exists: [null, [Validators.required, Validators.min(0)]],
  });
  constructor(private fb: FormBuilder) {}
  validField(field: string) {
    return this.myForm.get(field)?.errors && this.myForm.get(field)?.touched;
  }
  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
