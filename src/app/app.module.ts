import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AgmCoreModule } from '@agm/core';

import { MyApp } from './app.component';

import { AlexPage } from '../pages/alex/alex';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CreateRoutePage } from '../pages/create-route/create-route';
import { MoreOptionsPage } from '../pages/more-options/more-options';
import { LoginPage } from '../pages/login/login';
import { SignInPage } from '../pages/sign-in/sign-in';
import { AutocompletePage } from '../pages/map-tast/auto-complite-page';
import { MapTastPage } from '../pages/map-tast/map-tast';
import { PlaceSearchAutocomplitePage } from '../pages/place-search-autocomplite/place-search-autocomplite';
import { RouteListPage } from '../pages/route-list/route-list';
import { RouteDetailsPage } from '../pages/route-details/route-details';
import { SearchFilterPage } from '../pages/serch-filter/serch-filter';
import { TaskPage } from '../pages/task/task';

import { TasksServiseModule } from '../modules/tasks_mdl.component';
import { UserServiseModule } from '../modules/user_mdl.component';
import { RouteServiseModule } from '../modules/route_mdl.component';
import { EventServiceModule } from '../modules/event_mdl.component';
import { RoutesPreviewPage } from '../pages/routes-preview/routes-preview';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AlexPage,
    CreateRoutePage,
    MoreOptionsPage,
    LoginPage,
    SignInPage,
    MapTastPage,
    AutocompletePage,
    PlaceSearchAutocomplitePage,
    RouteListPage,
    RouteDetailsPage,
    SearchFilterPage,
    TaskPage,
    RoutesPreviewPage
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAkz6xddABYhnT-iPqJePo3MIsiy1kxE9Q",
      libraries: ["places"],
      language: "en"
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
    CreateRoutePage,
    MoreOptionsPage,
    LoginPage,
    SignInPage,
    AutocompletePage,
    MapTastPage,
    PlaceSearchAutocomplitePage,
    RouteListPage,
    RouteDetailsPage,
    SearchFilterPage,
    TaskPage,
    RoutesPreviewPage
 ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TasksServiseModule,
    UserServiseModule,
    RouteServiseModule,
    EventServiceModule
  ]
})
export class AppModule {}
