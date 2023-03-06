import { FormControl } from '@angular/forms';
export const namePattern:string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const cantBeCrisfon6=(control:FormControl)=>{
    let value :string= control.value?.trim().toLowerCase();
    if(value ==='crisfon6'){
      return {
        noCrisfon6:true
      }
    }
    return null;
  }