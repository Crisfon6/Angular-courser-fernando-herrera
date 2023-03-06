import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent {
  @ViewChild('myForm') myForm!: NgForm;
  initForm = {
    product: 'RTX',
    price: 0,
    exists: 0,
  };
  save() {
    console.log('submit', this.myForm);
    this.myForm.resetForm({
      price: 0,
      exists: 0,
    });
    // this.myForm.reset({
    //   price: 0,
    //   exists: 0,
    // });
  }
  get validName() {
    return (
      this.myForm?.controls['product']?.invalid &&
      this.myForm?.controls['product'].touched
    );
  }
  get validPrice() {
    return (
      this.myForm?.controls['price']?.invalid &&
      this.myForm?.controls['price'].touched &&
      this.myForm?.controls['price'].value < 0
    );
  }
}
