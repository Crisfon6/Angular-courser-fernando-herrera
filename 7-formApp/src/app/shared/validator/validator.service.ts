import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }
   public namePattern:string = '([a-zA-Z]+) ([a-zA-Z]+)';
   public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

 cantBeCrisfon6(control:FormControl) : ValidationErrors | null{
    let value :string= control.value?.trim().toLowerCase();
    if(value ==='crisfon6'){
      return {
        noCrisfon6:true
      }
    }
    return null;
  }
  equalsFields(field1:string,field2:string){
    return (formGroup:AbstractControl): ValidationErrors | null =>{
      console.log('equalsField',formGroup);
      const pass1 = formGroup.get(field1)?.value;
      const pass2 = formGroup.get(field2)?.value;
      if(pass1!==pass2){
        formGroup.get('confirmPassword')?.setErrors({noEqualsFields:true });
        return {          
            noEqualsFields: true          
        }
      }else if( formGroup.get('confirmPassword')?.errors){

        formGroup.get('confirmPassword')?.setErrors(null);
      }

return null;
    };
  }
}
