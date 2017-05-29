import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Meteor } from 'meteor/meteor'
import template from './home-page.component.html';
import { textContent } from './home-page.component.styl';
import { QuizPackets } from '../../../both/collections/quizzes.collection'
import { QuizPacket } from '../../../both/models/quiz.model'
import { Subscription, Observable } from 'rxjs'
import { MeteorObservable } from 'meteor-rxjs'
import { QuizService } from '../quiz.service'

interface Options {
	[key: string]: any
}

@Component({
	selector: 'app-home-page',
	template: template,
	styles: [textContent]
})
export class HomePageComponent implements OnInit, OnDestroy {

	constructor(private router: Router) { }

	quizPackets$;
	quizPacketsSub;
	quizPackets;
	tabs;

	tabs$;
	tabsSub;

	topic = '';

	ngOnInit() {
		this.quizPackets$ = QuizPackets.find({}).zone().subscribe(packets => {
			this.quizPackets = packets;
		})
		this.tabs$ = QuizPackets.find({})
			.zone()
			.map(packets => packets.map(quiz => quiz.topic))
			.subscribe(tabs => {
				this.tabs = tabs;
			})
		this.quizPacketsSub = MeteorObservable.subscribe('all-quiz-packets').subscribe();
	}

	ngOnDestroy() {
		this.quizPacketsSub.unsubscribe();
	}


	activeTab = 0;

	switchTab(i, tab) {
		if (this.activeTab !== i) {
			this.activeTab = i;
			this.topic = tab;
		}
	}

	start(quiz) {
		this.router.navigate([`quiz-info/${quiz._id}`])
	}
}
