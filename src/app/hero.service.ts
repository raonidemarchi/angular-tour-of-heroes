import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Hero } from './hero';

import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroService {
	private heroesUrl = 'https://raonidemarchi.github.io/easy-calendar-app/view/heroes.json';  // URL to web api
	
	constructor(
		private http: HttpClient,
		private messageService: MessageService
	) { }

	getHeroes(): Observable<Hero[]> {
		return this.http.get<Hero[]>(this.heroesUrl);
	}
	
	// Log a HeroService message with the MessageService
	private log(message: string) {
		this.messageService.add('HeroService: ' + message);
	}
	
}