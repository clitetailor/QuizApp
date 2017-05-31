import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Meteor } from 'meteor/meteor'
import template from './home-page.component.html';
import { textContent } from './home-page.component.styl';
import { QuizPackets } from '../../../both/collections/quizzes.collection'
import { QuizPacket } from '../../../both/models/quiz.model'
import { Topics } from '../../../both/collections/topics.collection'
import { Subscription, Observable } from 'rxjs'
import { MeteorObservable } from 'meteor-rxjs'
import { QuizService } from '../quiz.service'
import unsubscribe from '../unsubscribe'

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

	quizPackets;
	tabs;
	
	subscriptions = [];

	topic = '';

	activeTab = 0;
	search = '';

	ngOnInit() {
		this.subscriptions.push(Topics.find({}).zone().subscribe(topics => {
			this.tabs = topics.map(topic => topic.title);
		}))

		this.subscriptions.push(QuizPackets.find({}).zone().subscribe(packets => {
				this.quizPackets = packets;
		}))

		this.getPackets();
		this.getTopics();
	}

	getTopics() {
		this.subscriptions.push(MeteorObservable.subscribe('topics').subscribe())
	}

	getPackets() {
		this.subscriptions.push(MeteorObservable.subscribe('quiz-packets').subscribe())
	}

	ngOnDestroy() {
		this.subscriptions.forEach(unsubscribe)
	}

	searchFilter(packets, search) {
				console.log(packets)

		if (search === '' || search === null || search === undefined) {
			return packets;
		}

		return packets.filter(packet => packet.title.toLowerCase.indexOf(search.toLowerCase()) !== -1);
	}

	topicFilter(packets, topic) {
		console.log(packets)
		if (topic === null || topic === '' || topic === undefined) {
			return packets;
		}

		return packets.filter(packet => packet.topic.toLowerCase.indexOf(topic.toLowerCase) !== -1);
	}

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
