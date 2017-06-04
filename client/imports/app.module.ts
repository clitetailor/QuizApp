import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material'
import { ReportService } from './services/report.service';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { QuizEditorComponent } from './quiz-editor/quiz-editor.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { QuizInfoComponent } from './quiz-info/quiz-info.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { ReportManagerComponent } from './report-manager/report-manager.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ReportDetailComponent } from './report-detail/report-detail.component';
import { ReportEditComponent } from './report-edit/report-edit.component';
import { ReportAddComponent } from './report-add/report-add.component';
import { QuizService } from './quiz.service';
import { TimePipe } from './time.pipe';
import { TopicPipe } from './topic.pipe';
import { SearchPipe } from './search.pipe';
import { DisplayNamePipe } from './display-name.pipe';
import { AuthGuard, AuthQuizPacketsGuard, AuthAdminGuard, AuthUsersGuard } from './auth.guard';
import { AuthService } from './auth.service'; 
import { SignupComponent } from './signup/signup.component';
const appRoutes = [
	{ path: 'home', component: HomePageComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'admin', component: AdminPageComponent, canActivate: [AuthUsersGuard]},
	{ path: 'user', component: UserComponent, canActivate: [AuthGuard]},
	{ path: 'quiz-info/:id', component: QuizInfoComponent },
	{ path: 'quiz/:id', component: QuizPageComponent },
	{ path: 'editor', component: QuizEditorComponent, canActivate: [AuthGuard] },
	{ path: 'result', component: QuizResultComponent },
	{ path: 'report', component: ReportManagerComponent },
	{ path: 'report-detail/:id', component: ReportDetailComponent },
	{ path: 'report-edit/:id', component: ReportEditComponent },
	{ path: 'report-add', component: ReportAddComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		QuizPageComponent,
		QuizEditorComponent,
		AdminPageComponent,
		QuizInfoComponent,
		QuizResultComponent,
		ReportManagerComponent,
		LoginComponent,
		UserComponent,
		ReportDetailComponent,
		ReportEditComponent,
		ReportAddComponent,
		UserComponent,
		SignupComponent,
		TimePipe,
		TopicPipe,
		SearchPipe,
		DisplayNamePipe
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule.forRoot(appRoutes),
		MaterialModule
	],
	providers: [ReportService, QuizService, AuthGuard, AuthQuizPacketsGuard, AuthUsersGuard, AuthAdminGuard, AuthService ],
	bootstrap: [AppComponent]
})
export class AppModule { }
