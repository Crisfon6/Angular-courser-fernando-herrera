import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [],
})
export class DynamicsComponent {
  myForm: FormGroup;
  newFavorite: FormControl = this.fb.control('', Validators.required);
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      favorites: this.fb.array(
        [['Metal Gear'], ['Sherk']],
        Validators.required
      ),
    });
  }
  get favorites() {
    return this.myForm.controls['favorites'] as FormArray;
  }
  addFavorite() {
    if (this.newFavorite.invalid) {
      return;    }    
    this.favorites.push(this.fb.control(this.newFavorite.value,Validators.required));
    this.newFavorite.reset()
  }
  removeFavorite(i:number) {
    this.favorites.removeAt(i);
  }
  nameError(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field]?.touched
    );
  }
  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
  }
}
