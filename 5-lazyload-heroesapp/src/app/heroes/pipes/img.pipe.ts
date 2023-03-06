import { Pipe, PipeTransform } from '@angular/core';
import { IHero } from '../interfaces/hero.interface';

@Pipe({
  name: 'img',
  // pure: false,
})
export class ImgPipe implements PipeTransform {
  transform(hero: IHero): string {
    if (hero.alt_img) {
      return hero.alt_img;
    } else if ((hero.id === '' || !hero.id) && !hero.alt_img) {
      return 'assets/no-image.png';
    }

    return `assets/heroes/${hero.id}.jpg`;
  }
}
