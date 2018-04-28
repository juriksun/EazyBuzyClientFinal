import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { App } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';
import { UserServiseModule } from '../modules/user_mdl.component';
import { AlexPage } from '../pages/alex/alex';
import { MapTastPage } from '../pages/map-tast/map-tast';
import { CreateRoutePage } from '../pages/create-route/create-route';
import { RouteListPage } from '../pages/route-list/route-list';
import { RouteDetailsPage } from '../pages/route-details/route-details';
import { SearchFilterPage } from '../pages/serch-filter/serch-filter';
import { TaskPage } from '../pages/task/task';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public  app: App,
    private userServiseModule: UserServiseModule,
    // public navCtrl: NavController
  ) {

    if (!this.userServiseModule.checkIfLogedIn()) {
      console.log('neeed login');
      this.rootPage = LoginPage;
      // this.loginForm = this.fb.group({
      //   username: ['', [Validators.required, Validators.minLength(2)]],
      //   password: ['', [Validators.required, Validators.minLength(2)]]
      // });
    } else {
      console.log('logged in');
      this.rootPage = HomePage;
    }
    console.log('ionViewDidLoad AddNewTaskPage');

    // this.rootPage = LoginPage;
    // this.platform.registerBackButtonAction(()=>{
    //   let nav = app.getActiveNavs()[0];
    //   let activeView = nav.getActive();                
    //   console.log("back button pressed");
    //   console.log(activeView);

    //   if(activeView.name !== "LoginPage"){

    //     if (nav.canGoBack()){ //Can we go back?
    //       nav.pop();
    //     }
    //   }
    // }, 101);
    this.initializeApp();

    ////////////////////////////////////////////

  //   public userServiseModule: UserServiseModule,
  //   public viewCtrl: ViewController
  // ) {
  //   // this.platform.registerBackButtonAction(()=>{
  //   //   console.log("Back button pressed!");
  //   // }, 0);
  // }

  // ionViewCanEnter(): boolean{
  //   if(!this.userServiseModule.checkIfLogedIn()){
  //     console.log('neeed login');
      
  //     // this.loginForm = this.fb.group({
  //     //   username: ['', [Validators.required, Validators.minLength(2)]],
  //     //   password: ['', [Validators.required, Validators.minLength(2)]]
  //     // });
  //   } else {
  //     console.log('logged in');
  //     this.navCtrl.setRoot(HomePage);
  //   }
  //   console.log('ionViewDidLoad AddNewTaskPage');
  //   return true;
  // }


    ///////////////////////////////////////////
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  onTestMap(){
    this.nav.push(MapTastPage);
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logOut(){
    this.userServiseModule.loggOut();
    console.log('log out');
    this.nav.setRoot(LoginPage)
    // this.navCtrl.setRoot(LoginPage);
  }

  onCreateRoute() {
    this.nav.push(CreateRoutePage);
    // let modal = this.modalCtrl.create(CreateRoutePage);
    // modal.present();
  }

  onAddTask(){
    this.nav.push(TaskPage);
  }

  onListRoute(){
    // this.nav.setRoot(RouteDetailsPage);
    this.nav.setRoot(SearchFilterPage);
  }
}
