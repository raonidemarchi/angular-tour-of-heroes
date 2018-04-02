import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { HeroService } from '../hero.service';
import { ToolbarService } from '../toolbar.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
	heroes: Hero[] 	  = [];
	pageTitle: string = 'Heroes';
	
	constructor(
		private heroService: HeroService,
		private toolbarService: ToolbarService
	) { }

	ngOnInit() {
		this.toolbarService.title = this.pageTitle;
		this.getHeroes();
	}
	
	getHeroes(): void {
		this.heroService.getHeroes()
			.subscribe(heroes => this.heroes = heroes);
	}
}