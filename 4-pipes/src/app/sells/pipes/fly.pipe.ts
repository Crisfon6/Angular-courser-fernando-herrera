import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fly',
})
export class FlyPipe implements PipeTransform {
  transform(fly: boolean) {
    return fly ? 'fly' : 'no fly';
  }
}
