import { MongoObservable } from 'meteor-rxjs';
import { Report } from '../models/report.model'
import loggedIn from './logged-in'

export const Reports = new MongoObservable.Collection<Report>('reports')

Reports.allow({
	insert: loggedIn,
	update: loggedIn,
	remove: loggedIn
})
