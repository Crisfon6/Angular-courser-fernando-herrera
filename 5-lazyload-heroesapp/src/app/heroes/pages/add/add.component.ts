import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IHero, IPublisher } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class AddComponent implements OnInit {
  publishers: string[] = ['DC Comics', 'Marvel Comics'];
  hero: IHero = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: IPublisher.DCComics,
    alt_img: '',
    id: '',
  };
  edit: boolean = true;
  save() {
    if (this.hero.superhero.trim().length === 0) {
      return;
    }
    if (this.hero.id === '') {
      this.heroService.addHero(this.hero).subscribe((hero) => {
        this.showSnackBar('Saved');
        this.router.navigate(['/heroes/edit', hero.id]);
      });
    } else {
      this.heroService.updateHero(this.hero).subscribe((hero) => {
        this.showSnackBar('Updated');
      });
    }
  }
  ngOnInit(): void {
    this.edit = this.router.url.includes('edit');
    if (!this.edit) {
      return;
    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroService.getHeroById(id)))
      .subscribe((hero) => {
        this.hero = hero;
      });
  }
  delete() {
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '250px',
      data: { ...this.hero },
    });
    dialog.afterClosed().subscribe((resp) => {
      if (resp) {
        this.activatedRoute.params
          .pipe(switchMap(({ id }) => this.heroService.deleteHero(id)))
          .subscribe((resp) => {
            this.showSnackBar('Register deleted');
            this.router.navigate(['/heroes']);
          });
      }
    });
  }
  constructor(
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}
  showSnackBar(message: string, action = 'Ok!'): void {
    this.snackBar.open(message, action, {
      duration: 1000,
    });
  }
}
