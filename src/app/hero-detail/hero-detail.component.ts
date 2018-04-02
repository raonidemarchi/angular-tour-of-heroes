import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ToolbarService } from '../toolbar.service';

@Component({
	selector: 'app-hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
	hero: Hero
	pageTitle: string = '';

	constructor(
		private route: ActivatedRoute,
		private heroService: HeroService,
		private location: Location,
		private toolbarService: ToolbarService
	) {	}

	ngOnInit(): void {
		this.getHero();
	}

	getHero(): void {
		let id = +this.route.snapshot.paramMap.get('id');
		
		this.heroService.getHeroes()
			.subscribe(
				hero => {
					this.hero = hero.find(hero => hero.id === id);
					this.toolbarService.title = this.hero.name;
				},
				
				err => alert(err.statusText)
			);
	}
	
	goBack(): void {
		this.location.back();
	}

}