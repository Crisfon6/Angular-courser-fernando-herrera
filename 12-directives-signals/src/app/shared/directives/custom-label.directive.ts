import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import  {ValidationErrors} from '@angular/forms';
@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {
  private htmlElement : ElementRef<HTMLElement>;
  private _color: string='red';
  private _errors?: ValidationErrors | null;

  @Input() set color(value:string ){
    this._color = value;
    this.setStyle();
  }
  @Input() set errors(value:ValidationErrors | null | undefined){
    this._errors = value;
    console.log('errors',value);
    this.setErrors(); 
    
  }
    constructor(private el:ElementRef<HTMLElement>) {
    console.log("Constructor",el);
    this.htmlElement = el;
   }
   ngOnInit(): void {
       console.log('Directive On init');
       this.setStyle();
   }
  setStyle():void{
    if(!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color= this._color;
  }
  setErrors():void{
    if(!this.htmlElement)return;
    if(!this._errors){
      this.htmlElement.nativeElement.innerHTML = 'Is correct';
      this._color = 'green';
      this.setStyle();
      return;
    }
    const errors = Object.keys(this._errors);
    if(errors.length>0){
      this._color= 'red';
      this.setStyle();
    }
    if(errors.includes('required') ){
      this.htmlElement.nativeElement.innerHTML = ' This field is required.';
    }
    if(errors.includes('minlength')){
      this.htmlElement.nativeElement.innerHTML = ' Minimun 6 characters.';
    }
    if(errors.includes('minlength')){
      this.htmlElement.nativeElement.innerHTML = ' Minimun 6 characters.';
    }
    if(errors.includes('email')){
      this.htmlElement.nativeElement.innerHTML = ' Invalid email.';
    }
  }
}
