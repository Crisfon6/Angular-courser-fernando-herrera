import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator-service/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidatorService: EmailValidatorService
  ) {
    this.myForm = this.fb.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.pattern(validatorService.namePattern),
          ],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(this.validatorService.emailPattern),
          ],
          [this.emailValidatorService],
        ],
        username: ['', [Validators.required, validatorService.cantBeCrisfon6]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: [
          this.validatorService.equalsFields('password', 'confirmPassword'),
        ],
      }
    );
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.myForm.reset({
      name: 'Cristhian Fonseca',
      email: 'test1@test.com',
      username: 'slayer',
      password: '123456',
      confirmPassword: '123456',
    });
  }
  get emailErrorMsg(): string {
    const errors = this.myForm.get('email')?.errors;
    console.log('errors', errors);
    if (errors) {
      if (errors['required']) {
        return 'The email is required';
      }
      else if (errors['pattern']) {
        return 'The entry doesnt comply with format';
      }
      else if (errors['usedEmail']) {
        return 'The email is already in use';
      }
    }

    return 'hola mundo';
  }

  fieldNoValid(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }
  submit() {
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }
}
