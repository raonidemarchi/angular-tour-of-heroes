import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ToolbarService } from '../toolbar.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
	heroes: Hero[] 	  = [];
	pageTitle: string = 'Dashboard';
	
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
			.subscribe(
				heroes => this.heroes = heroes.slice(1, 5),
				err  => alert(err.statusText)
			);
	}
}