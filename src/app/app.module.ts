import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlexPage } from '../pages/alex/alex';
import { AddNewTaskPage } from '../pages/add-new-task/add-new-task';
import { FormsModule } from '@angular/forms';
import { TasksServiseModule } from '../modules/tasks_mdl.component';
import { EditTaskPage } from '../pages/edit-task/edit-task';
import { CreateRoutePage } from '../pages/create-route/create-route';
import { MoreOptionsPage } from '../pages/more-options/more-options';
import { LoginPage } from '../pages/login/login';
import { UserServiseModule } from '../modules/user_mdl.component';
import { SignInPage } from '../pages/sign-in/sign-in';
import { AutocompletePage } from '../pages/map-tast/auto-complite-page';
import { MapTastPage } from '../pages/map-tast/map-tast';
import { PlaceSearchAutocomplitePage } from '../pages/place-search-autocomplite/place-search-autocomplite';
import { RouteServiseModule } from '../modules/route_mdl.component';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AlexPage,
    AddNewTaskPage,
    EditTaskPage,
    CreateRoutePage,
    MoreOptionsPage,
    LoginPage,
    SignInPage,
    MapTastPage,
    AutocompletePage,
    PlaceSearchAutocomplitePage
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCSi8yOke4lolqMPNsB9AlouSQi9h3dBeM",
      libraries: ["places"]
    }),
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
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
    CreateRoutePage,
    MoreOptionsPage,
    LoginPage,
    SignInPage,
    AutocompletePage,
    MapTastPage,
    PlaceSearchAutocomplitePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TasksServiseModule,
    UserServiseModule,
    RouteServiseModule
  ]
})
export class AppModule {}
