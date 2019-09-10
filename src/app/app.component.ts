import { Component, OnInit } from '@angular/core';
import { SwapiService } from './swapi.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';

  constructor(private _swapi: SwapiService) {}

  public obs$: Observable<any>;
  public showSecond: boolean = false;

  ngOnInit() {
    this.obs$ = this._swapi.getCharacter('1');
  }

  updateCharacter(num) {
    this.obs$ = this._swapi.getCharacter(num);
  }
}
