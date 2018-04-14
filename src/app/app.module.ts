import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlexPage } from '../pages/alex/alex';
import { AddNewTaskPage } from '../pages/add-new-task/add-new-task';
import { FormsModule } from '@angular/forms';
import { TasksServiseModule } from '../modules/tasks_mdl.component';
import { EditTaskPage } from '../pages/edit-task/edit-task';
import { CreateRoutePage } from '../pages/create-route/create-route';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AlexPage,
    AddNewTaskPage,
    EditTaskPage,
    CreateRoutePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AlexPage,
    AddNewTaskPage,
    EditTaskPage,
    CreateRoutePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TasksServiseModule
  ]
})
export class AppModule {}
