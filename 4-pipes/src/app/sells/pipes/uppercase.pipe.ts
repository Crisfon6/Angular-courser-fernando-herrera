import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'uppercase2',
})
export class UppercasePipe implements PipeTransform {
  transform(value: string, may: boolean = true): string {
    return may ? value.toLocaleUpperCase() : value.toLowerCase();
  }
}
