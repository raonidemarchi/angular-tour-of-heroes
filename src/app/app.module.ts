import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatListModule, MatToolbarModule, MatSidenavModule, MatProgressSpinnerModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { ToolbarService } from './toolbar.service';

@NgModule({
	declarations: [
		AppComponent,
		HeroesComponent,
		HeroDetailComponent,
		MessagesComponent,
		DashboardComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatListModule,
		MatToolbarModule,
		MatSidenavModule,
		MatProgressSpinnerModule
	],
	providers: [
		HeroService,
		MessageService,
		ToolbarService
	],
	bootstrap: [AppComponent]
})

export class AppModule { }