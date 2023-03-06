import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{
myForm :FormGroup;
person = 
{
  gender : 'F',
  notifications:true
}
  constructor(private fb:FormBuilder){
this.myForm= this.fb.group({
  gender:['M',Validators.required],
  notifications:[false,Validators.required],terms:[false,Validators.requiredTrue]
})
  }
  ngOnInit(): void {
      this.myForm.reset({...this.person,terms:true});
      this.myForm.valueChanges.subscribe(({terms,...rest})=>{
  this.person=rest;
      })
  }
  save(){
    const formValue={...this.myForm.value};
    this.person.gender=formValue.gender;
    this.person.notifications=formValue.notifications;

  }
}
