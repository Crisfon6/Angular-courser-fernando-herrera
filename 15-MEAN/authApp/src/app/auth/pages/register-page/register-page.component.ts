import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RegisterUser } from '../../interfaces';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  myForm = this.fb.group({
    name: ['crisfon6', [Validators.required]],
    email: ['crisfon6@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });
  register() {
    const dataNewUser = this.myForm.value as RegisterUser;
    this.authService.register(dataNewUser)
    .subscribe({
      next:()=>{
        this.router.navigateByUrl('/dashboard')
       },
       error:(message)=>{
        Swal.fire('Error',message,'error');
       }
    });
  }
}
