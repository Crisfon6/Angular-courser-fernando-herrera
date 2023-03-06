import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sells.interface';

@Pipe({
  name: 'order',
})
export class OrderPipe implements PipeTransform {
  transform(heroes: Hero[], orderBy: string = 'name'): Hero[] {
    return heroes.sort((a: any, b: any) => (a[orderBy] > b[orderBy] ? 1 : -1));
  }
}
