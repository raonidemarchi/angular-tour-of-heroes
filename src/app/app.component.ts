import { Component } from '@angular/core';
import { ToolbarService } from './toolbar.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	
	constructor(public toolbarService: ToolbarService) { }
	
}