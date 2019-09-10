import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { renewAfterTimer } from './observable.util';

@Injectable()
export class SwapiService {

  constructor(private _http: HttpClient) { }

  private lastCharacterQueried: string;
	private steps$: Observable<any>;

	getCharacter(characterId: string) {
		if (characterId !== this.lastCharacterQueried) {
			// we need to reset the observable;
			this.steps$ = renewAfterTimer(this._http.get(`https://swapi.co/api/people/${characterId}`), 10  * 1000);
      this.lastCharacterQueried = characterId;
		}
		return this.steps$;
	}
}