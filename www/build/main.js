webpackJsonp([9],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
    
*/
var SearchFilterPage = /** @class */ (function () {
    function SearchFilterPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.fieldName = this.navParams.get('fieldName');
        this.currItem = this.navParams.get('currItem');
        this.autocompleteQuery = this.currItem.formated_name;
        this.initializeItems();
    }
    SearchFilterPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //focus must be with timeout for correct working
        setTimeout(function () {
            _this.searchBar.setFocus();
        }, 150);
    };
    //initialize item list from navigation passed parameter
    SearchFilterPage.prototype.initializeItems = function () {
        this.autocompleteItems = this.navParams.get('itemsList');
    };
    //filter the list when the user do some changes in search input
    SearchFilterPage.prototype.updateSearch = function () {
        var _this = this;
        //initilize list befor filtering
        this.initializeItems();
        if (this.autocompleteQuery && this.autocompleteQuery.trim() != '') {
            //filtering
            this.autocompleteItems = this.autocompleteItems.filter(function (item) {
                //compairing list containt and user input (formated to lower case)
                return (item.formated_name.toLowerCase().indexOf(_this.autocompleteQuery.toLowerCase()) > -1);
            });
        }
    };
    //cancel changes and return previous value
    SearchFilterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss({
            fieldName: this.fieldName,
            item: this.currItem
        });
    };
    //choosing new item and pass this to input
    SearchFilterPage.prototype.chooseItem = function (item) {
        this.viewCtrl.dismiss({
            fieldName: this.fieldName,
            item: item
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("searchBar"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Searchbar */])
    ], SearchFilterPage.prototype, "searchBar", void 0);
    SearchFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n<ion-header>\n    <ion-toolbar>\n        <ion-title>Enter address</ion-title>\n        <ion-searchbar\n            #searchBar\n            [(ngModel)]=\"autocompleteQuery\"\n            [showCancelButton]=\"true\"\n            (ionInput)=\"updateSearch()\"\n            (ionCancel)=\"dismiss()\"\n        ></ion-searchbar>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item\n            color=\"light\"\n            tappable\n            (click)=\"chooseItem({formated_name: '', name: ''})\"\n        >\n            empty\n        </ion-item>\n        <ion-item *ngFor=\"let autocompleteItem of autocompleteItems\"\n            tappable   \n            (click)=\"chooseItem(autocompleteItem)\"\n        >\n            <ion-icon *ngIf=\"autocompleteItem.icon !== ''\"\n                item-start \n                [name]=\"autocompleteItem.icon\"\n                class=\"taskIcon\"\n            ></ion-icon>\n            <p>{{ autocompleteItem.formated_name }}</p>\n        </ion-item>\n    </ion-list>\n</ion-content>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SearchFilterPage);
    return SearchFilterPage;
}());

//# sourceMappingURL=serch-filter.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreOptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_tasks_mdl_component__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MoreOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MoreOptionsPage = /** @class */ (function () {
    function MoreOptionsPage(navCtrl, navParams, viewCtrl, tasksServiseModule) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.tasksServiseModule = tasksServiseModule;
    }
    MoreOptionsPage.prototype.ngOnInit = function () {
        this.editTaskForm = this.navParams.get('newTaskForm');
        this.taskId = this.navParams.get('taskId');
    };
    MoreOptionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MoreOptionsPage');
    };
    MoreOptionsPage.prototype.onDelete = function () {
        this.viewCtrl.dismiss('delete');
    };
    MoreOptionsPage.prototype.onShare = function () {
    };
    MoreOptionsPage.prototype.onEdit = function () {
        // this.editTaskForm.enable();
        this.viewCtrl.dismiss('edit');
    };
    MoreOptionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-more-options',template:/*ion-inline-start:"C:\Users\Alexander\Desktop\Projects\EazyBuzyClient\src\pages\more-options\more-options.html"*/'<ion-content class="popover-page">\n    \n      <ion-list class="popover-page">\n          <button ion-item (click)="onEdit()">\n            Edit\n          </button>\n          <form \n            ion-item \n            (ngSubmit)="onSubmit(editTaskForm)" \n            [formGroup]="editTaskForm" \n            *ngIf="editTaskForm.enabled"\n          >\n            <button \n              [formGroup]="editTaskForm" \n              ion-button color="dark" \n              clear type="submit" \n              [disabled]="editTaskForm.invalid"\n            >\n              Save\n            </button>\n          </form>\n          <button ion-item (click)="onDelete()">\n            Delete\n          </button>\n          <button ion-item (click)="onShare()">\n            Share\n          </button>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Alexander\Desktop\Projects\EazyBuzyClient\src\pages\more-options\more-options.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__modules_tasks_mdl_component__["a" /* TasksServiseModule */]])
    ], MoreOptionsPage);
    return MoreOptionsPage;
}());

//# sourceMappingURL=more-options.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_user_mdl_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sign_in_sign_in__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, fb, userServiseModule, 
        // public viewCtrl: ViewController,
        modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.userServiseModule = userServiseModule;
        this.modalCtrl = modalCtrl;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            key_entry: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2)]]
        });
    };
    //this.editTaskForm.
    LoginPage.prototype.onSubmit = function (_a) {
        var value = _a.value;
        this.login(value);
    };
    LoginPage.prototype.login = function (value) {
        var _this = this;
        this.userServiseModule.login(value)
            .subscribe(function (response) {
            if (response) {
                if (response.status) {
                    // console.log(response);
                    // console.log(value);
                    _this.userServiseModule.setUserInLocalStorage(value);
                    // console.log(JSON.stringify(response));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.onSignIn = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__sign_in_sign_in__["a" /* SignInPage */]);
        modal.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Alexander\Desktop\Projects\EazyBuzyClient\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Login Page</ion-title>\n    <ion-buttons end>\n      <button \n        item-end\n        ion-button\n        icon-only\n        color="royal"\n        (click)="onSignIn()"\n      >\n        sign in\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div text-center>\n      <img src="assets/logo.png">\n  </div>\n  \n  <form (ngSubmit)="onSubmit(loginForm)" [formGroup]="loginForm">\n    <ion-list no-lines>\n      <ion-item >\n        <ion-label floating>Email \\ Username</ion-label>\n        <ion-input type="text" formControlName="key_entry"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" formControlName="password"></ion-input>\n      </ion-item> \n    </ion-list>\n    <button\n      ion-button \n      color="secondary" \n      full\n      [formGroup]="loginForm" \n      type="submit"\n      [disabled]="loginForm.invalid"\n    >\n      Login\n    </button>\n  </form>\n  <!-- Forget password-->\n</ion-content>\n'/*ion-inline-end:"C:\Users\Alexander\Desktop\Projects\EazyBuzyClient\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__modules_user_mdl_component__["a" /* UserServiseModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_user_mdl_component__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignInPage = /** @class */ (function () {
    function SignInPage(navCtrl, navParams, fb, userServiseModule, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.userServiseModule = userServiseModule;
        this.viewCtrl = viewCtrl;
    }
    SignInPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignInPage');
    };
    SignInPage.prototype.ngOnInit = function () {
        this.signInForm = this.fb.group({
            first_name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2)]],
            last_name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2)]],
            username: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2)]]
        });
    };
    //this.editTaskForm.
    SignInPage.prototype.onSubmit = function (_a) {
        var value = _a.value;
        this.signIn(value);
    };
    SignInPage.prototype.signIn = function (value) {
        var _this = this;
        this.userServiseModule.signIn(value)
            .subscribe(function (response) {
            if (response) {
                if (response.status) {
                    // console.log(response);
                    // console.log(value);
                    _this.userServiseModule.serLastUserInLocalStorage({
                        key_entry: value.email,
                        password: value.password
                    });
                    // console.log(JSON.stringify(response));
                    // this.navCtrl.setRoot(HomePage);
                    _this.viewCtrl.dismiss();
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    SignInPage.prototype.onDiscard = function () {
        this.viewCtrl.dismiss();
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-in',template:/*ion-inline-start:"C:\Users\Alexander\Desktop\Projects\EazyBuzyClient\src\pages\sign-in\sign-in.html"*/'<!--\n  Generated template for the SignInPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign In New User</ion-title>\n    <ion-buttons end>\n      <button \n        item-end \n        ion-button \n        icon-only \n        color="royal" \n        (click)="onDiscard()"\n      >\n        discard\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form (ngSubmit)="onSubmit(signInForm)" [formGroup]="signInForm">\n        <ion-list no-lines>\n          <ion-item>\n            <ion-label floating>First Name</ion-label>\n            <ion-input type="text" formControlName="first_name"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Last Name</ion-label>\n            <ion-input type="text" formControlName="last_name"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="text" formControlName="email"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Username</ion-label>\n            <ion-input type="text" formControlName="username"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Password</ion-label>\n            <ion-input type="password" formControlName="password"></ion-input>\n          </ion-item>\n        </ion-list>\n        <button\n          ion-button \n          color="secondary" \n          full\n          [formGroup]="signInForm" \n          type="submit"\n          [disabled]="signInForm.invalid"\n        >\n          Sign In\n        </button>\n      </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Alexander\Desktop\Projects\EazyBuzyClient\src\pages\sign-in\sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__modules_user_mdl_component__["a" /* UserServiseModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapTastPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auto_complite_page__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MapTastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapTastPage = /** @class */ (function () {
    function MapTastPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.address = {
            place: ''
        };
    }
    MapTastPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapTastPage');
    };
    MapTastPage.prototype.showAddressModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__auto_complite_page__["a" /* AutocompletePage */]);
        var me = this;
        modal.onDidDismiss(function (data) {
            _this.address.place = data;
        });
        modal.present();
    };
    MapTastPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map-tast',template:/*ion-inline-start:"C:\Users\Alexander\Desktop\Projects\EazyBuzyClient\src\pages\map-tast\map-tast.html"*/'<!--\n  Generated template for the MapTastPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>MapTastPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n          <ion-input (focus)="showAddressModal()" [(ngModel)]="address.place" type="text" placeholder="Pick an address">              </ion-input>\n          <!-- <ion-searchbar [(ngModel)]="autocomplete.query" [showCancelButton]="true"   (ionInput)="updateSearch()" ></ion-searchbar> -->\n        </ion-item>\n      <!-- </ion-list>\n      <ion-list>\n        <ion-item *ngFor="let item of autocompleteItems" tappable   (click)="chooseItem(item)">\n           {{ item }}\n        </ion-item>-->\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Alexander\Desktop\Projects\EazyBuzyClient\src\pages\map-tast\map-tast.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], MapTastPage);
    return MapTastPage;
}());

//# sourceMappingURL=map-tast.js.map

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 141;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alex/alex.module": [
		326,
		8
	],
	"../pages/create-route/create-route.module": [
		327,
		7
	],
	"../pages/login/login.module": [
		328,
		6
	],
	"../pages/map-tast/map-tast.module": [
		329,
		5
	],
	"../pages/more-options/more-options.module": [
		330,
		4
	],
	"../pages/route-details/route-details.module": [
		331,
		3
	],
	"../pages/route-list/route-list.module": [
		332,
		2
	],
	"../pages/sign-in/sign-in.module": [
		333,
		1
	],
	"../pages/task/task.module": [
		334,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 182;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutocompletePage = /** @class */ (function () {
    function AutocompletePage(viewCtrl, zone, mapsAPILoader) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.zone = zone;
        this.mapsAPILoader = mapsAPILoader;
        this.latitude = 0;
        this.longitude = 0;
        this.mapsAPILoader.load().then(function () {
            _this.service = new google.maps.places.AutocompleteService();
        });
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    }
    AutocompletePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.searchBar.setFocus();
        }, 150);
    };
    AutocompletePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AutocompletePage.prototype.chooseItem = function (item) {
        this.viewCtrl.dismiss(item);
        this.geo = item;
        this.geoCode(this.geo); //convert Address to lat and long
    };
    AutocompletePage.prototype.updateSearch = function () {
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var me = this;
        this.service.getPlacePredictions({
            input: this.autocomplete.query,
        }, function (predictions, status) {
            me.autocompleteItems = [];
            me.zone.run(function () {
                if (predictions != null) {
                    predictions.forEach(function (prediction) {
                        me.autocompleteItems.push(prediction.description);
                    });
                }
            });
        });
    };
    //convert Address string to lat and long
    AutocompletePage.prototype.geoCode = function (address) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function (results, status) {
            _this.latitude = results[0].geometry.location.lat();
            _this.longitude = results[0].geometry.location.lng();
            alert("lat: " + _this.latitude + ", long: " + _this.longitude);
        });
    };
    AutocompletePage.prototype.onFocuse = function () {
        console.log('serch focused');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("searchBar"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Searchbar */])
    ], AutocompletePage.prototype, "searchBar", void 0);
    AutocompletePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n  <ion-header>\n  <ion-toolbar>\n    <ion-title>Enter address</ion-title>\n    <ion-searchbar #searchBar [(ngModel)]=\"autocomplete.query\" [showCancelButton]=\"true\"   (ionInput)=\"updateSearch()\" (ionCancel)=\"dismiss()\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of autocompleteItems\" tappable   (click)=\"chooseItem(item)\">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */]])
    ], AutocompletePage);
    return AutocompletePage;
}());

//# sourceMappingURL=auto-complite-page.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Alexander\Desktop\Projects\EazyBuzyClient\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\Alexander\Desktop\Projects\EazyBuzyClient\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlexPage = /** @class */ (function () {
    // map: any;
    function AlexPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AlexPage.prototype.ionViewDidLoad = function () {
        this.showMap();
    };
    AlexPage.prototype.showMap = function () {
        // Loction - lat long
        var location = new google.maps.LatLng(51.507351, -0.127758);
        // Map options
        var options = {
            center: location,
            zoom: 15
        };
        var map = new google.maps.Map(this.mapRef.nativeElement, options);
        this.addMarker(location, map);
        this.addPolyline(map);
        this.addMarker(new google.maps.LatLng(37.772, -122.214), map);
    };
    AlexPage.prototype.addMarker = function (position, map) {
        return new google.maps.Marker({
            position: position,
            map: map,
            title: 'blabla'
        });
    };
    AlexPage.prototype.addPolyline = function (map) {
        return new google.maps.Polyline({
            map: map,
            path: [
                { lat: 37.772, lng: -122.214 },
                { lat: 21.291, lng: -157.821 },
                { lat: -18.142, lng: 178.431 },
                { lat: -27.467, lng: 153.027 }
            ],
            geodesic: true,
            strokeColor: '#123456',
            strokeOpacity: 0.5,
            strokeWeight: 3
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AlexPage.prototype, "mapRef", void 0);
    AlexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alex',template:/*ion-inline-start:"C:\Users\Alexander\Desktop\Projects\EazyBuzyClient\src\pages\alex\alex.html"*/'<!--\n  Generated template for the AlexPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Map Test</ion-title>\n    <ion-buttons end>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Alexander\Desktop\Projects\EazyBuzyClient\src\pages\alex\alex.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AlexPage);
    return AlexPage;
}());

//# sourceMappingURL=alex.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_route_mdl_component__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RouteListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RouteListPage = /** @class */ (function () {
    function RouteListPage(navCtrl, navParams, routeServiseModule) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.routeServiseModule = routeServiseModule;
        this.imgMapUrl = "https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyAkz6xddABYhnT-iPqJePo3MIsiy1kxE9Q";
    }
    RouteListPage.prototype.ionViewDidLoad = function () {
        // this.getImage(this.imgMapUrl)
        console.log('ionViewDidLoad RouteListPage');
    };
    RouteListPage.prototype.getImage = function (imgMapUrl) {
        this.routeServiseModule.getImageStatic(imgMapUrl)
            .subscribe(function (response) {
            if (response) {
                console.log(response);
            }
        }, function (error) {
            console.log(error);
        });
    };
    RouteListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-route-list',template:/*ion-inline-start:"C:\Users\Alexander\Desktop\Projects\EazyBuzyClient\src\pages\route-list\route-list.html"*/'<!--\n  Generated template for the RouteListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Routes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <img [src]="imgMapUrl">\n    <ion-item>\n      <p item-start>13 Tasks</p>\n      <p item-end>12:00-18:00 12.7.2018</p>\n    </ion-item>\n    <ion-item>\n      <span item-left>18 min</span>\n      <span item-left>(2.6 mi)</span>\n      <button ion-button icon-left clear item-end>\n        <ion-icon name="navigate"></ion-icon>\n        Start\n      </button>\n    </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Alexander\Desktop\Projects\EazyBuzyClient\src\pages\route-list\route-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__modules_route_mdl_component__["a" /* RouteServiseModule */]])
    ], RouteListPage);
    return RouteListPage;
}());

//# sourceMappingURL=route-list.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(260);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_alex_alex__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modules_tasks_mdl_component__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_create_route_create_route__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_more_options_more_options__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__modules_user_mdl_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_sign_in_sign_in__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_map_tast_auto_complite_page__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_map_tast_map_tast__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_place_search_autocomplite_place_search_autocomplite__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__modules_route_mdl_component__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_route_list_route_list__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_route_details_route_details__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_serch_filter_serch_filter__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_task_task__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_alex_alex__["a" /* AlexPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_create_route_create_route__["a" /* CreateRoutePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_more_options_more_options__["a" /* MoreOptionsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_map_tast_map_tast__["a" /* MapTastPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_map_tast_auto_complite_page__["a" /* AutocompletePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_place_search_autocomplite_place_search_autocomplite__["a" /* PlaceSearchAutocomplitePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_route_list_route_list__["a" /* RouteListPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_route_details_route_details__["a" /* RouteDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_serch_filter_serch_filter__["a" /* SearchFilterPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_task_task__["a" /* TaskPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: "AIzaSyAkz6xddABYhnT-iPqJePo3MIsiy1kxE9Q",
                    libraries: ["places"],
                    language: "en"
                }),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/alex/alex.module#AlexPageModule', name: 'AlexPage', segment: 'alex', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-route/create-route.module#CreateRoutePageModule', name: 'CreateRoutePage', segment: 'create-route', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map-tast/map-tast.module#MapTastPageModule', name: 'MapTastPage', segment: 'map-tast', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/more-options/more-options.module#MoreOptionsPageModule', name: 'MoreOptionsPage', segment: 'more-options', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/route-details/route-details.module#RouteDetailsPageModule', name: 'RouteDetailsPage', segment: 'route-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/route-list/route-list.module#RouteListPageModule', name: 'RouteListPage', segment: 'route-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/task/task.module#TaskPageModule', name: 'TaskPage', segment: 'task', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_alex_alex__["a" /* AlexPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_create_route_create_route__["a" /* CreateRoutePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_more_options_more_options__["a" /* MoreOptionsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_map_tast_auto_complite_page__["a" /* AutocompletePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_map_tast_map_tast__["a" /* MapTastPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_place_search_autocomplite_place_search_autocomplite__["a" /* PlaceSearchAutocomplitePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_route_list_route_list__["a" /* RouteListPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_route_details_route_details__["a" /* RouteDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_serch_filter_serch_filter__["a" /* SearchFilterPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_task_task__["a" /* TaskPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* LocationStrategy */],
                    useClass: __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* HashLocationStrategy */]
                },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__modules_tasks_mdl_component__["a" /* TasksServiseModule */],
                __WEBPACK_IMPORTED_MODULE_20__modules_user_mdl_component__["a" /* UserServiseModule */],
                __WEBPACK_IMPORTED_MODULE_25__modules_route_mdl_component__["a" /* RouteServiseModule */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_user_mdl_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_map_tast_map_tast__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_create_route_create_route__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_serch_filter_serch_filter__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_task_task__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, app, userServiseModule) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.app = app;
        this.userServiseModule = userServiseModule;
        if (!this.userServiseModule.checkIfLogedIn()) {
            console.log('neeed login');
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
            // this.loginForm = this.fb.group({
            //   username: ['', [Validators.required, Validators.minLength(2)]],
            //   password: ['', [Validators.required, Validators.minLength(2)]]
            // });
        }
        else {
            console.log('logged in');
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
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
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.onTestMap = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_map_tast_map_tast__["a" /* MapTastPage */]);
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logOut = function () {
        this.userServiseModule.loggOut();
        console.log('log out');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
        // this.navCtrl.setRoot(LoginPage);
    };
    MyApp.prototype.onCreateRoute = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_create_route_create_route__["a" /* CreateRoutePage */]);
        // let modal = this.modalCtrl.create(CreateRoutePage);
        // modal.present();
    };
    MyApp.prototype.onAddTask = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_11__pages_task_task__["a" /* TaskPage */]);
    };
    MyApp.prototype.onListRoute = function () {
        // this.nav.setRoot(RouteDetailsPage);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_serch_filter_serch_filter__["a" /* SearchFilterPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Alexander\Desktop\Projects\EazyBuzyClient\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n        <button menuClose ion-item\n          color="royal" \n          (click)="onAddTask()"\n        >\n        <ion-icon item-start name="add" color="primary" style="zoom: 1;"></ion-icon>\n          Create New Task\n          \n        </button>\n        <button menuClose ion-item\n          color="royal" \n          (click)="onCreateRoute()"\n        >\n          <ion-icon item-start name="ios-map-outline" color="primary" style="zoom: 1; opacity:0.6;"></ion-icon>\n          <ion-icon item-start name="add" color="primary" style="zoom: 0.5; position: absolute; left: 47px; top: 25px;"></ion-icon>\n          Create New Route\n        </button>\n        <button menuClose ion-item\n          color="royal" \n          (click)="onListRoute()"\n        >\n          <ion-icon item-start name="ios-map-outline" color="secondary" style="zoom: 1; opacity:0.6;"></ion-icon>\n          <ion-icon item-start name="md-navigate"  color="secondary" style="zoom: 0.5; position: absolute; left: 47px; top: 25px;"></ion-icon>\n          Execute Route\n        </button>\n      </ion-list>\n      <button\n        menuClose ion-item \n        color="royal" \n        (click)="logOut()"\n      >\n        <ion-icon name="md-exit"></ion-icon>\n        Log Out\n      </button> \n    </ion-content>\n      \n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Alexander\Desktop\Projects\EazyBuzyClient\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_7__modules_user_mdl_component__["a" /* UserServiseModule */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserServiseModule = /** @class */ (function () {
    // private url: string = 'https://eazy-buzy-server.herokuapp.com/';
    // private url: string = Url.getUrl();
    function UserServiseModule(http, storage) {
        this.http = http;
        this.storage = storage;
        this.url = 'http://localhost:3000/';
    }
    UserServiseModule.prototype.signIn = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url + "set_new_user", {
            user: JSON.stringify(user)
        }, options).map(this.extractData).catch(this.handleError);
    };
    UserServiseModule.prototype.login = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url + "get_user", {
            user: JSON.stringify(user)
        }, options).map(this.extractData).catch(this.handleError);
    };
    UserServiseModule.prototype.extractData = function (res) {
        console.log(res.json());
        return res.json() || {};
    };
    UserServiseModule.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    UserServiseModule.prototype.setUserInLocalStorage = function (user) {
        // console.log(user);
        localStorage.setItem('eazyBuzyKeyEntry', user.key_entry);
        localStorage.setItem('eazyBuzyPassword', user.password);
        // this.storage.set('eazyBuzyEmail', user.email);
        // this.storage.set('eazyBuzyPassword',user.password);
    };
    UserServiseModule.prototype.serLastUserInLocalStorage = function (user) {
        localStorage.setItem('eazyBuzyLastKeyEntry', user.key_entry);
        localStorage.setItem('eazyBuzyLastPassword', user.password);
    };
    UserServiseModule.prototype.getLastUserFromLocalStorage = function () {
        var lastKeyEntry = localStorage.getItem('eazyBuzyLastKeyEntry'), lastPassword = localStorage.getItem('eazyBuzyLastPassword');
        if (lastKeyEntry && lastKeyEntry) {
            return {
                key_entry: lastKeyEntry,
                password: lastPassword
            };
        }
        else {
            return {
                key_entry: '',
                password: ''
            };
        }
    };
    UserServiseModule.prototype.removeLastUserFromLocalStorage = function () {
        localStorage.removeItem('eazyBuzyLastKeyEntry');
        localStorage.removeItem('eazyBuzyLastPassword');
    };
    UserServiseModule.prototype.checkIfLogedIn = function () {
        return localStorage.getItem('eazyBuzyKeyEntry') && localStorage.getItem('eazyBuzyPassword');
    };
    UserServiseModule.prototype.loggOut = function () {
        localStorage.removeItem('eazyBuzyKeyEntry');
        localStorage.removeItem('eazyBuzyPassword');
    };
    UserServiseModule.prototype.getUserFromLocalStorege = function () {
        return {
            key_entry: localStorage.getItem('eazyBuzyKeyEntry'),
            password: localStorage.getItem('eazyBuzyPassword')
        };
    };
    UserServiseModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], UserServiseModule);
    return UserServiseModule;
}());

//# sourceMappingURL=user_mdl.component.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteServiseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_mdl_component__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RouteServiseModule = /** @class */ (function () {
    function RouteServiseModule(http, userServiseModule) {
        this.http = http;
        this.userServiseModule = userServiseModule;
        this.url = 'http://localhost:3000/';
        this.staticRes = { "status": "true", "data": { "_id": "5ade4c1faa633041246b3f6a", "recommended_route": {
                    "segments": [
                        {
                            "startPoint": {
                                "address": "Ha-Gilgal St 59, Ramat Gan, Израиль",
                                "place_id": "ChIJh_a-fjZKHRURbfWQ2nG9XpA",
                                "geometry": {
                                    "location": {
                                        "lat": 32.0799162,
                                        "lng": 34.824053700000036
                                    }
                                },
                                "task_identifier": {
                                    "name": "Start"
                                }
                            },
                            "endPoint": {
                                "geometry": {
                                    "location": {
                                        "lat": 32.07941450000001,
                                        "lng": 34.815057
                                    },
                                    "viewport": {
                                        "northeast": {
                                            "lat": 32.08076477989272,
                                            "lng": 34.81631727989272
                                        },
                                        "southwest": {
                                            "lat": 32.07806512010728,
                                            "lng": 34.81361762010727
                                        }
                                    }
                                },
                                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
                                "id": "536d0704689edaeac72dcd3a5df8ef4c0d9ccf86",
                                "name": "סופר-פארם כופר היישוב",
                                "opening_hours": {
                                    "open_now": true,
                                    "weekday_text": []
                                },
                                "photos": [
                                    {
                                        "height": 3024,
                                        "html_attributions": [
                                            "<a href=\"https://maps.google.com/maps/contrib/116761068565218428792/photos\">Avihai Nizri<\/a>"
                                        ],
                                        "photo_reference": "CmRaAAAAJ1UOcdbdackY61AbqKPwkFSFwX7C3ENfcdf15y4IV5sbrk0UGuD_JP2XazA5EnFiN2yZbb9ebIlv43gUzZK5SZZH0VEbHzXm7Q3rcfu67wPaHrhKWt2NZ3Jkix7F1E1WEhAisbUd25Y5dultueLft_2AGhTBEhgNhRzLaEEPYyNq0cBIuc1gdQ",
                                        "width": 4032
                                    }
                                ],
                                "place_id": "ChIJoTVzmLVLHRURQVg7qxZ17nk",
                                "rating": 4,
                                "reference": "CmRbAAAAsJfweqHf-VX1YQt9gTeRrMEy7EjtKucxfRsIMMkDaKN41-F4U3xmfawcNO2AA4V3JOk2pk2XMJObAXcEutiyDyPbeABaQi3uK_MLo9R89A8-oDVY_vv1eRf6oqLOSpt3EhCdY6-JsK6wrxFcuh_9v7kVGhTGuEC1JDUXeTdGAgZ1d11yzvqPyA",
                                "scope": "GOOGLE",
                                "types": [
                                    "pharmacy",
                                    "store",
                                    "health",
                                    "point_of_interest",
                                    "establishment"
                                ],
                                "vicinity": "ביאליק 10, רמת גן",
                                "task_identifier": {
                                    "id": "5adf610f6016683c583043f4",
                                    "name": "acamol"
                                }
                            },
                            "duration": 404,
                            "distance": 1586,
                            "polylines": [
                                {
                                    "start": {
                                        "lat": 32.08006,
                                        "lng": 34.82399
                                    },
                                    "end": {
                                        "lat": 32.08,
                                        "lng": 34.82375
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08,
                                        "lng": 34.82375
                                    },
                                    "end": {
                                        "lat": 32.07998,
                                        "lng": 34.82353
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.07998,
                                        "lng": 34.82353
                                    },
                                    "end": {
                                        "lat": 32.07998,
                                        "lng": 34.82322
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.07998,
                                        "lng": 34.82322
                                    },
                                    "end": {
                                        "lat": 32.08025,
                                        "lng": 34.82203
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08025,
                                        "lng": 34.82203
                                    },
                                    "end": {
                                        "lat": 32.07995,
                                        "lng": 34.82192
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.07995,
                                        "lng": 34.82192
                                    },
                                    "end": {
                                        "lat": 32.07971,
                                        "lng": 34.82184
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.07971,
                                        "lng": 34.82184
                                    },
                                    "end": {
                                        "lat": 32.0793,
                                        "lng": 34.82181
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.0793,
                                        "lng": 34.82181
                                    },
                                    "end": {
                                        "lat": 32.07932,
                                        "lng": 34.82136
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.07932,
                                        "lng": 34.82136
                                    },
                                    "end": {
                                        "lat": 32.07937,
                                        "lng": 34.82003
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.07937,
                                        "lng": 34.82003
                                    },
                                    "end": {
                                        "lat": 32.07941,
                                        "lng": 34.81977
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.07941,
                                        "lng": 34.81977
                                    },
                                    "end": {
                                        "lat": 32.08037,
                                        "lng": 34.82006
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08037,
                                        "lng": 34.82006
                                    },
                                    "end": {
                                        "lat": 32.081,
                                        "lng": 34.81859
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.081,
                                        "lng": 34.81859
                                    },
                                    "end": {
                                        "lat": 32.08131,
                                        "lng": 34.81792
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08131,
                                        "lng": 34.81792
                                    },
                                    "end": {
                                        "lat": 32.08162,
                                        "lng": 34.81728
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08162,
                                        "lng": 34.81728
                                    },
                                    "end": {
                                        "lat": 32.08184,
                                        "lng": 34.81687
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08184,
                                        "lng": 34.81687
                                    },
                                    "end": {
                                        "lat": 32.08211,
                                        "lng": 34.81651
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08211,
                                        "lng": 34.81651
                                    },
                                    "end": {
                                        "lat": 32.08226,
                                        "lng": 34.81637
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08226,
                                        "lng": 34.81637
                                    },
                                    "end": {
                                        "lat": 32.08246,
                                        "lng": 34.81621
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08246,
                                        "lng": 34.81621
                                    },
                                    "end": {
                                        "lat": 32.08257,
                                        "lng": 34.81613
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08257,
                                        "lng": 34.81613
                                    },
                                    "end": {
                                        "lat": 32.083,
                                        "lng": 34.81581
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.083,
                                        "lng": 34.81581
                                    },
                                    "end": {
                                        "lat": 32.08288,
                                        "lng": 34.8154
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08288,
                                        "lng": 34.8154
                                    },
                                    "end": {
                                        "lat": 32.08281,
                                        "lng": 34.81511
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08281,
                                        "lng": 34.81511
                                    },
                                    "end": {
                                        "lat": 32.0827,
                                        "lng": 34.81468
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.0827,
                                        "lng": 34.81468
                                    },
                                    "end": {
                                        "lat": 32.08214,
                                        "lng": 34.81483
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08214,
                                        "lng": 34.81483
                                    },
                                    "end": {
                                        "lat": 32.0816,
                                        "lng": 34.81489
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.0816,
                                        "lng": 34.81489
                                    },
                                    "end": {
                                        "lat": 32.08094,
                                        "lng": 34.81489
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08094,
                                        "lng": 34.81489
                                    },
                                    "end": {
                                        "lat": 32.07942,
                                        "lng": 34.81488
                                    }
                                }
                            ]
                        },
                        {
                            "startPoint": {
                                "geometry": {
                                    "location": {
                                        "lat": 32.07941450000001,
                                        "lng": 34.815057
                                    },
                                    "viewport": {
                                        "northeast": {
                                            "lat": 32.08076477989272,
                                            "lng": 34.81631727989272
                                        },
                                        "southwest": {
                                            "lat": 32.07806512010728,
                                            "lng": 34.81361762010727
                                        }
                                    }
                                },
                                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
                                "id": "536d0704689edaeac72dcd3a5df8ef4c0d9ccf86",
                                "name": "סופר-פארם כופר היישוב",
                                "opening_hours": {
                                    "open_now": true,
                                    "weekday_text": []
                                },
                                "photos": [
                                    {
                                        "height": 3024,
                                        "html_attributions": [
                                            "<a href=\"https://maps.google.com/maps/contrib/116761068565218428792/photos\">Avihai Nizri<\/a>"
                                        ],
                                        "photo_reference": "CmRaAAAAJ1UOcdbdackY61AbqKPwkFSFwX7C3ENfcdf15y4IV5sbrk0UGuD_JP2XazA5EnFiN2yZbb9ebIlv43gUzZK5SZZH0VEbHzXm7Q3rcfu67wPaHrhKWt2NZ3Jkix7F1E1WEhAisbUd25Y5dultueLft_2AGhTBEhgNhRzLaEEPYyNq0cBIuc1gdQ",
                                        "width": 4032
                                    }
                                ],
                                "place_id": "ChIJoTVzmLVLHRURQVg7qxZ17nk",
                                "rating": 4,
                                "reference": "CmRbAAAAsJfweqHf-VX1YQt9gTeRrMEy7EjtKucxfRsIMMkDaKN41-F4U3xmfawcNO2AA4V3JOk2pk2XMJObAXcEutiyDyPbeABaQi3uK_MLo9R89A8-oDVY_vv1eRf6oqLOSpt3EhCdY6-JsK6wrxFcuh_9v7kVGhTGuEC1JDUXeTdGAgZ1d11yzvqPyA",
                                "scope": "GOOGLE",
                                "types": [
                                    "pharmacy",
                                    "store",
                                    "health",
                                    "point_of_interest",
                                    "establishment"
                                ],
                                "vicinity": "ביאליק 10, רמת גן",
                                "task_identifier": {
                                    "id": "5adf610f6016683c583043f4",
                                    "name": "acamol"
                                }
                            },
                            "endPoint": {
                                "geometry": {
                                    "location": {
                                        "lat": 32.0840641,
                                        "lng": 34.8073313
                                    },
                                    "viewport": {
                                        "northeast": {
                                            "lat": 32.08541392989272,
                                            "lng": 34.80868112989273
                                        },
                                        "southwest": {
                                            "lat": 32.08271427010728,
                                            "lng": 34.80598147010728
                                        }
                                    }
                                },
                                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/gas_station-71.png",
                                "id": "68d8e5409d33390c48d1b3cfb7f7a113ccf2697e",
                                "name": "פז",
                                "opening_hours": {
                                    "open_now": true,
                                    "weekday_text": []
                                },
                                "photos": [
                                    {
                                        "height": 4176,
                                        "html_attributions": [
                                            "<a href=\"https://maps.google.com/maps/contrib/109424846836028108615/photos\">Леон Филиш<\/a>"
                                        ],
                                        "photo_reference": "CmRaAAAAuTGVyMHFmIPIb-SWxyKMaNUwJTw21nLCqLdk04PE1ItyAUkQ7Q99EsIjVZUd81mbyNGQwX2oeN2B90x-rjQlXqD8dx7iPDaOi-NLqPbB_TMsI9VLNscoA_zaSITUufReEhB7DnTy2nIrKq9EdWwLTNMxGhQZBeDNYvBUt284qnrM_oXmCpT-cw",
                                        "width": 2366
                                    }
                                ],
                                "place_id": "ChIJ47Jj48dLHRURQLNCgkpBSKw",
                                "rating": 3.6,
                                "reference": "CmRbAAAAffdDGdFtm1voqsklNwTGeK2rdVD-tkI9hVI-BBiFON6m_iv4AlCUzP_EEeW43dCli__q3Lc9WSFNw2uGIYno1gP8POxrx953Jy_pLsWxHj2wcil98gK24RCYmxF7ecnTEhCvjGi3uNkm2SUeH49w5iwZGhRkgn1IQRnsbf8TceT5sblXERheVw",
                                "scope": "GOOGLE",
                                "types": [
                                    "gas_station",
                                    "point_of_interest",
                                    "establishment"
                                ],
                                "vicinity": "דרך זאב ז'בוטינסקי 37, רמת גן",
                                "task_identifier": {
                                    "id": "5adf62aecd48234780363a87",
                                    "name": "fuel"
                                }
                            },
                            "duration": 403,
                            "distance": 1761,
                            "polylines": [
                                {
                                    "start": {
                                        "lat": 32.07942,
                                        "lng": 34.81488
                                    },
                                    "end": {
                                        "lat": 32.07918,
                                        "lng": 34.81488
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.07918,
                                        "lng": 34.81488
                                    },
                                    "end": {
                                        "lat": 32.07925,
                                        "lng": 34.81427
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.07925,
                                        "lng": 34.81427
                                    },
                                    "end": {
                                        "lat": 32.07941,
                                        "lng": 34.81364
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.07941,
                                        "lng": 34.81364
                                    },
                                    "end": {
                                        "lat": 32.07975,
                                        "lng": 34.81317
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.07975,
                                        "lng": 34.81317
                                    },
                                    "end": {
                                        "lat": 32.07991,
                                        "lng": 34.81299
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.07991,
                                        "lng": 34.81299
                                    },
                                    "end": {
                                        "lat": 32.08045,
                                        "lng": 34.81246
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08045,
                                        "lng": 34.81246
                                    },
                                    "end": {
                                        "lat": 32.0809,
                                        "lng": 34.81195
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.0809,
                                        "lng": 34.81195
                                    },
                                    "end": {
                                        "lat": 32.08098,
                                        "lng": 34.81184
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08098,
                                        "lng": 34.81184
                                    },
                                    "end": {
                                        "lat": 32.081,
                                        "lng": 34.81172
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.081,
                                        "lng": 34.81172
                                    },
                                    "end": {
                                        "lat": 32.08102,
                                        "lng": 34.81157
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08102,
                                        "lng": 34.81157
                                    },
                                    "end": {
                                        "lat": 32.08095,
                                        "lng": 34.81081
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08095,
                                        "lng": 34.81081
                                    },
                                    "end": {
                                        "lat": 32.08095,
                                        "lng": 34.81051
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08095,
                                        "lng": 34.81051
                                    },
                                    "end": {
                                        "lat": 32.08099,
                                        "lng": 34.8104
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08099,
                                        "lng": 34.8104
                                    },
                                    "end": {
                                        "lat": 32.08106,
                                        "lng": 34.81023
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08106,
                                        "lng": 34.81023
                                    },
                                    "end": {
                                        "lat": 32.08118,
                                        "lng": 34.81004
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08118,
                                        "lng": 34.81004
                                    },
                                    "end": {
                                        "lat": 32.08161,
                                        "lng": 34.80966
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08161,
                                        "lng": 34.80966
                                    },
                                    "end": {
                                        "lat": 32.08163,
                                        "lng": 34.80967
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08163,
                                        "lng": 34.80967
                                    },
                                    "end": {
                                        "lat": 32.08165,
                                        "lng": 34.80966
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08165,
                                        "lng": 34.80966
                                    },
                                    "end": {
                                        "lat": 32.08166,
                                        "lng": 34.80962
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08166,
                                        "lng": 34.80962
                                    },
                                    "end": {
                                        "lat": 32.08164,
                                        "lng": 34.80958
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08164,
                                        "lng": 34.80958
                                    },
                                    "end": {
                                        "lat": 32.08163,
                                        "lng": 34.80958
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08163,
                                        "lng": 34.80958
                                    },
                                    "end": {
                                        "lat": 32.0816,
                                        "lng": 34.80948
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.0816,
                                        "lng": 34.80948
                                    },
                                    "end": {
                                        "lat": 32.08154,
                                        "lng": 34.80932
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08154,
                                        "lng": 34.80932
                                    },
                                    "end": {
                                        "lat": 32.08147,
                                        "lng": 34.80923
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08147,
                                        "lng": 34.80923
                                    },
                                    "end": {
                                        "lat": 32.08128,
                                        "lng": 34.80909
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08128,
                                        "lng": 34.80909
                                    },
                                    "end": {
                                        "lat": 32.0812,
                                        "lng": 34.809
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.0812,
                                        "lng": 34.809
                                    },
                                    "end": {
                                        "lat": 32.081,
                                        "lng": 34.80874
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.081,
                                        "lng": 34.80874
                                    },
                                    "end": {
                                        "lat": 32.08095,
                                        "lng": 34.80862
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08095,
                                        "lng": 34.80862
                                    },
                                    "end": {
                                        "lat": 32.08094,
                                        "lng": 34.80843
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08094,
                                        "lng": 34.80843
                                    },
                                    "end": {
                                        "lat": 32.08097,
                                        "lng": 34.80831
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08097,
                                        "lng": 34.80831
                                    },
                                    "end": {
                                        "lat": 32.081,
                                        "lng": 34.80825
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.081,
                                        "lng": 34.80825
                                    },
                                    "end": {
                                        "lat": 32.08116,
                                        "lng": 34.80807
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08116,
                                        "lng": 34.80807
                                    },
                                    "end": {
                                        "lat": 32.08125,
                                        "lng": 34.80799
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08125,
                                        "lng": 34.80799
                                    },
                                    "end": {
                                        "lat": 32.08141,
                                        "lng": 34.8076
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08141,
                                        "lng": 34.8076
                                    },
                                    "end": {
                                        "lat": 32.08153,
                                        "lng": 34.80717
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08153,
                                        "lng": 34.80717
                                    },
                                    "end": {
                                        "lat": 32.08177,
                                        "lng": 34.80605
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08177,
                                        "lng": 34.80605
                                    },
                                    "end": {
                                        "lat": 32.08199,
                                        "lng": 34.80502
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08199,
                                        "lng": 34.80502
                                    },
                                    "end": {
                                        "lat": 32.0821,
                                        "lng": 34.80472
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.0821,
                                        "lng": 34.80472
                                    },
                                    "end": {
                                        "lat": 32.08248,
                                        "lng": 34.8038
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08248,
                                        "lng": 34.8038
                                    },
                                    "end": {
                                        "lat": 32.08257,
                                        "lng": 34.80362
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08257,
                                        "lng": 34.80362
                                    },
                                    "end": {
                                        "lat": 32.08268,
                                        "lng": 34.80361
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08268,
                                        "lng": 34.80361
                                    },
                                    "end": {
                                        "lat": 32.08277,
                                        "lng": 34.80363
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08277,
                                        "lng": 34.80363
                                    },
                                    "end": {
                                        "lat": 32.08284,
                                        "lng": 34.80369
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08284,
                                        "lng": 34.80369
                                    },
                                    "end": {
                                        "lat": 32.08331,
                                        "lng": 34.80565
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08331,
                                        "lng": 34.80565
                                    },
                                    "end": {
                                        "lat": 32.08386,
                                        "lng": 34.80778
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08386,
                                        "lng": 34.80778
                                    },
                                    "end": {
                                        "lat": 32.08398,
                                        "lng": 34.80774
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08398,
                                        "lng": 34.80774
                                    },
                                    "end": {
                                        "lat": 32.08395,
                                        "lng": 34.80763
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08395,
                                        "lng": 34.80763
                                    },
                                    "end": {
                                        "lat": 32.08398,
                                        "lng": 34.8076
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08398,
                                        "lng": 34.8076
                                    },
                                    "end": {
                                        "lat": 32.084,
                                        "lng": 34.80755
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.084,
                                        "lng": 34.80755
                                    },
                                    "end": {
                                        "lat": 32.08399,
                                        "lng": 34.80738
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08399,
                                        "lng": 34.80738
                                    },
                                    "end": {
                                        "lat": 32.08399,
                                        "lng": 34.80737
                                    }
                                }
                            ]
                        },
                        {
                            "startPoint": {
                                "geometry": {
                                    "location": {
                                        "lat": 32.0840641,
                                        "lng": 34.8073313
                                    },
                                    "viewport": {
                                        "northeast": {
                                            "lat": 32.08541392989272,
                                            "lng": 34.80868112989273
                                        },
                                        "southwest": {
                                            "lat": 32.08271427010728,
                                            "lng": 34.80598147010728
                                        }
                                    }
                                },
                                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/gas_station-71.png",
                                "id": "68d8e5409d33390c48d1b3cfb7f7a113ccf2697e",
                                "name": "פז",
                                "opening_hours": {
                                    "open_now": true,
                                    "weekday_text": []
                                },
                                "photos": [
                                    {
                                        "height": 4176,
                                        "html_attributions": [
                                            "<a href=\"https://maps.google.com/maps/contrib/109424846836028108615/photos\">Леон Филиш<\/a>"
                                        ],
                                        "photo_reference": "CmRaAAAAuTGVyMHFmIPIb-SWxyKMaNUwJTw21nLCqLdk04PE1ItyAUkQ7Q99EsIjVZUd81mbyNGQwX2oeN2B90x-rjQlXqD8dx7iPDaOi-NLqPbB_TMsI9VLNscoA_zaSITUufReEhB7DnTy2nIrKq9EdWwLTNMxGhQZBeDNYvBUt284qnrM_oXmCpT-cw",
                                        "width": 2366
                                    }
                                ],
                                "place_id": "ChIJ47Jj48dLHRURQLNCgkpBSKw",
                                "rating": 3.6,
                                "reference": "CmRbAAAAffdDGdFtm1voqsklNwTGeK2rdVD-tkI9hVI-BBiFON6m_iv4AlCUzP_EEeW43dCli__q3Lc9WSFNw2uGIYno1gP8POxrx953Jy_pLsWxHj2wcil98gK24RCYmxF7ecnTEhCvjGi3uNkm2SUeH49w5iwZGhRkgn1IQRnsbf8TceT5sblXERheVw",
                                "scope": "GOOGLE",
                                "types": [
                                    "gas_station",
                                    "point_of_interest",
                                    "establishment"
                                ],
                                "vicinity": "דרך זאב ז'בוטינסקי 37, רמת גן",
                                "task_identifier": {
                                    "id": "5adf62aecd48234780363a87",
                                    "name": "fuel"
                                }
                            },
                            "endPoint": {
                                "address": "Anne Frank St 12, Ramat Gan, Израиль",
                                "place_id": "ChIJnfFzOcRLHRURM9hDEucFhfs",
                                "geometry": {
                                    "location": {
                                        "lat": 32.0900601,
                                        "lng": 34.803569100000004
                                    }
                                },
                                "task_identifier": {
                                    "name": "End"
                                }
                            },
                            "duration": 409,
                            "distance": 1246,
                            "polylines": [
                                {
                                    "start": {
                                        "lat": 32.08399,
                                        "lng": 34.80737
                                    },
                                    "end": {
                                        "lat": 32.08396,
                                        "lng": 34.80731
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08396,
                                        "lng": 34.80731
                                    },
                                    "end": {
                                        "lat": 32.08392,
                                        "lng": 34.80729
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08392,
                                        "lng": 34.80729
                                    },
                                    "end": {
                                        "lat": 32.08386,
                                        "lng": 34.80728
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08386,
                                        "lng": 34.80728
                                    },
                                    "end": {
                                        "lat": 32.08382,
                                        "lng": 34.80711
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08382,
                                        "lng": 34.80711
                                    },
                                    "end": {
                                        "lat": 32.08369,
                                        "lng": 34.80667
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08369,
                                        "lng": 34.80667
                                    },
                                    "end": {
                                        "lat": 32.08346,
                                        "lng": 34.80577
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08346,
                                        "lng": 34.80577
                                    },
                                    "end": {
                                        "lat": 32.08341,
                                        "lng": 34.80562
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08341,
                                        "lng": 34.80562
                                    },
                                    "end": {
                                        "lat": 32.08365,
                                        "lng": 34.80553
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08365,
                                        "lng": 34.80553
                                    },
                                    "end": {
                                        "lat": 32.08397,
                                        "lng": 34.80538
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08397,
                                        "lng": 34.80538
                                    },
                                    "end": {
                                        "lat": 32.08397,
                                        "lng": 34.80539
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08397,
                                        "lng": 34.80539
                                    },
                                    "end": {
                                        "lat": 32.08399,
                                        "lng": 34.80541
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08399,
                                        "lng": 34.80541
                                    },
                                    "end": {
                                        "lat": 32.084,
                                        "lng": 34.80541
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.084,
                                        "lng": 34.80541
                                    },
                                    "end": {
                                        "lat": 32.08403,
                                        "lng": 34.80542
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08403,
                                        "lng": 34.80542
                                    },
                                    "end": {
                                        "lat": 32.08409,
                                        "lng": 34.8054
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08409,
                                        "lng": 34.8054
                                    },
                                    "end": {
                                        "lat": 32.08413,
                                        "lng": 34.80534
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08413,
                                        "lng": 34.80534
                                    },
                                    "end": {
                                        "lat": 32.08464,
                                        "lng": 34.80517
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08464,
                                        "lng": 34.80517
                                    },
                                    "end": {
                                        "lat": 32.08512,
                                        "lng": 34.80498
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08512,
                                        "lng": 34.80498
                                    },
                                    "end": {
                                        "lat": 32.08533,
                                        "lng": 34.80488
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08533,
                                        "lng": 34.80488
                                    },
                                    "end": {
                                        "lat": 32.08544,
                                        "lng": 34.80477
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08544,
                                        "lng": 34.80477
                                    },
                                    "end": {
                                        "lat": 32.08562,
                                        "lng": 34.80454
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08562,
                                        "lng": 34.80454
                                    },
                                    "end": {
                                        "lat": 32.08574,
                                        "lng": 34.80465
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08574,
                                        "lng": 34.80465
                                    },
                                    "end": {
                                        "lat": 32.08603,
                                        "lng": 34.80489
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08603,
                                        "lng": 34.80489
                                    },
                                    "end": {
                                        "lat": 32.08627,
                                        "lng": 34.8051
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08627,
                                        "lng": 34.8051
                                    },
                                    "end": {
                                        "lat": 32.0867,
                                        "lng": 34.80549
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.0867,
                                        "lng": 34.80549
                                    },
                                    "end": {
                                        "lat": 32.08725,
                                        "lng": 34.80598
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08725,
                                        "lng": 34.80598
                                    },
                                    "end": {
                                        "lat": 32.08745,
                                        "lng": 34.80617
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08745,
                                        "lng": 34.80617
                                    },
                                    "end": {
                                        "lat": 32.08753,
                                        "lng": 34.80624
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08753,
                                        "lng": 34.80624
                                    },
                                    "end": {
                                        "lat": 32.08766,
                                        "lng": 34.8061
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08766,
                                        "lng": 34.8061
                                    },
                                    "end": {
                                        "lat": 32.0878,
                                        "lng": 34.80593
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.0878,
                                        "lng": 34.80593
                                    },
                                    "end": {
                                        "lat": 32.08809,
                                        "lng": 34.80543
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08809,
                                        "lng": 34.80543
                                    },
                                    "end": {
                                        "lat": 32.08834,
                                        "lng": 34.8049
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08834,
                                        "lng": 34.8049
                                    },
                                    "end": {
                                        "lat": 32.08841,
                                        "lng": 34.80471
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08841,
                                        "lng": 34.80471
                                    },
                                    "end": {
                                        "lat": 32.08845,
                                        "lng": 34.80449
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08845,
                                        "lng": 34.80449
                                    },
                                    "end": {
                                        "lat": 32.0885,
                                        "lng": 34.80409
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.0885,
                                        "lng": 34.80409
                                    },
                                    "end": {
                                        "lat": 32.08893,
                                        "lng": 34.80408
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08893,
                                        "lng": 34.80408
                                    },
                                    "end": {
                                        "lat": 32.08894,
                                        "lng": 34.8041
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08894,
                                        "lng": 34.8041
                                    },
                                    "end": {
                                        "lat": 32.08895,
                                        "lng": 34.80414
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08895,
                                        "lng": 34.80414
                                    },
                                    "end": {
                                        "lat": 32.08901,
                                        "lng": 34.80418
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08901,
                                        "lng": 34.80418
                                    },
                                    "end": {
                                        "lat": 32.08908,
                                        "lng": 34.80417
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08908,
                                        "lng": 34.80417
                                    },
                                    "end": {
                                        "lat": 32.08909,
                                        "lng": 34.80415
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08909,
                                        "lng": 34.80415
                                    },
                                    "end": {
                                        "lat": 32.08928,
                                        "lng": 34.80426
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08928,
                                        "lng": 34.80426
                                    },
                                    "end": {
                                        "lat": 32.08976,
                                        "lng": 34.80448
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08976,
                                        "lng": 34.80448
                                    },
                                    "end": {
                                        "lat": 32.08986,
                                        "lng": 34.80452
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.08986,
                                        "lng": 34.80452
                                    },
                                    "end": {
                                        "lat": 32.09015,
                                        "lng": 34.80452
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.09015,
                                        "lng": 34.80452
                                    },
                                    "end": {
                                        "lat": 32.09016,
                                        "lng": 34.80371
                                    }
                                },
                                {
                                    "start": {
                                        "lat": 32.09016,
                                        "lng": 34.80371
                                    },
                                    "end": {
                                        "lat": 32.09006,
                                        "lng": 34.80371
                                    }
                                }
                            ]
                        }
                    ],
                    "num_of_segments": 3,
                    "sum_of_durations": 1216,
                    "sum_of_distance": 4593,
                    "tasks": [
                        {
                            "name": "Start",
                            "duration": 4.949574464444629,
                            "place": {
                                "location": {
                                    "lat": 32.0799162,
                                    "lng": 34.824053700000036
                                },
                                "id": "ChIJh_a-fjZKHRURbfWQ2nG9XpA",
                                "address": "Ha-Gilgal St 59, Ramat Gan, Израиль"
                            }
                        },
                        {
                            "name": "acamol",
                            "duration": 7.1882463565451316,
                            "place": {
                                "location": {
                                    "lat": 32.07941450000001,
                                    "lng": 34.815057
                                },
                                "name": "סופר-פארם כופר היישוב",
                                "id": "ChIJoTVzmLVLHRURQVg7qxZ17nk",
                                "address": "ביאליק 10, רמת גן"
                            }
                        },
                        {
                            "name": "fuel",
                            "duration": 9.775442818159583,
                            "place": {
                                "location": {
                                    "lat": 32.0840641,
                                    "lng": 34.8073313
                                },
                                "name": "פז",
                                "id": "ChIJ47Jj48dLHRURQLNCgkpBSKw",
                                "address": "דרך זאב ז'בוטינסקי 37, רמת גן"
                            }
                        },
                        {
                            "name": "End",
                            "duration": 2.7198481772900474,
                            "place": {
                                "location": {
                                    "lat": 32.0900601,
                                    "lng": 34.803569100000004
                                },
                                "id": "ChIJnfFzOcRLHRURM9hDEucFhfs",
                                "address": "Anne Frank St 12, Ramat Gan, Израиль"
                            }
                        }
                    ]
                }, "all_tasks": [{ "_id": "5adca4ddc8965c4734dd3d86", "user_token_id": "5ad63c8f869a7648bc6a2d6b", "name": "leumi", "type": "bank", "task_place": { "_id": "5adca4ddc8965c4734dd3d87", "place_type": "bank", "place_key_word": "leumi" }, "__v": 0 }, { "_id": "5adca4eec8965c4734dd3d89", "user_token_id": "5ad63c8f869a7648bc6a2d6b", "name": "acamol", "type": "pharmacy", "task_place": { "_id": "5adca4eec8965c4734dd3d8a", "place_type": "pharmacy", "place_key_word": "acamol" }, "__v": 0 }, { "_id": "5adcb2d48c71eb0ac054640c", "user_token_id": "5ad63c8f869a7648bc6a2d6b", "name": "fuil", "type": "gas_station", "task_place": { "_id": "5adcb2d48c71eb0ac054640d", "place_type": "gas_station", "place_key_word": "fuil" }, "__v": 0 }], "__v": 0 } };
        this.route = this.staticRes.data.recommended_route;
    }
    RouteServiseModule.prototype.createRoute = function (routeInitData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // console.log(this.userServiseModule.getUserFromLocalStorege());
        console.log(JSON.stringify(routeInitData));
        // console.log(this.url);
        return this.http.post(this.url + "create_route", {
            user: JSON.stringify(this.userServiseModule.getUserFromLocalStorege()),
            route_init_data: JSON.stringify(routeInitData)
        }, options).map(this.extractData).catch(this.handleError);
    };
    RouteServiseModule.prototype.getImageStatic = function (imgUrl) {
        console.log(imgUrl);
        return this.http.get(imgUrl).map(this.extractData).catch(this.handleError);
    };
    RouteServiseModule.prototype.extractData = function (res) {
        console.log(res.json());
        return res.json() || {};
    };
    RouteServiseModule.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log("errMsg");
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    RouteServiseModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__user_mdl_component__["a" /* UserServiseModule */]])
    ], RouteServiseModule);
    return RouteServiseModule;
}());

//# sourceMappingURL=route_mdl.component.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_tasks_mdl_component__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_route_create_route__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_user_mdl_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__route_details_route_details__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__task_task__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, tasksServiseModule, modalCtrl, userServiseModule) {
        this.navCtrl = navCtrl;
        this.tasksServiseModule = tasksServiseModule;
        this.modalCtrl = modalCtrl;
        this.userServiseModule = userServiseModule;
    }
    HomePage.prototype.onTask = function (task) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__task_task__["a" /* TaskPage */], { task: task });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.getUserTasks();
    };
    HomePage.prototype.ngOnInit = function () {
        // this.getUserTasks();
    };
    HomePage.prototype.getUserTasks = function () {
        this.getAllTasks();
    };
    HomePage.prototype.getAllTasks = function () {
        var _this = this;
        this.tasksServiseModule.getAllTasks()
            .subscribe(function (response) {
            if (response) {
                _this.tasks = response.tasks;
                //console.log(JSON.stringify(response));
            }
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.onCreateRoute = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_route_create_route__["a" /* CreateRoutePage */]);
        // let modal = this.modalCtrl.create(CreateRoutePage);
        // modal.present();
    };
    HomePage.prototype.onAddTask = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__task_task__["a" /* TaskPage */]);
    };
    HomePage.prototype.onListRoute = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__route_details_route_details__["a" /* RouteDetailsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Alexander\Desktop\Projects\EazyBuzyClient\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list no-lines>\n    <ion-item  \n      *ngFor="let task of tasks"\n      (click)="onTask(task);"\n    >\n      <ion-icon item-start [name]="task.task_place.place_type.icon" class="taskIcon"></ion-icon>\n      <h2>{{task.name}}</h2>\n      <ion-icon name="md-time" item-end class="clockItem" *ngIf="task.time.start_time != \'\' || task.time.duration || task.time.date"></ion-icon>\n      <ion-note item-end *ngIf="task.time">\n        <p>{{task.time.start_time}}</p>\n        <p *ngIf="task.time.duration">{{task.time.duration}}</p>\n        <p *ngIf="task.time.date">{{task.time.date}}</p>\n      </ion-note>\n      <div class="placeForPin" item-end>\n        <ion-icon name="md-pin" style="zoom: 1.5;" *ngIf="task.location.address"></ion-icon>\n      </div>\n    </ion-item>\n  </ion-list>\n  <ion-fab right bottom>\n      <button ion-fab color="light"><ion-icon name="arrow-dropleft"></ion-icon></button>\n      <ion-fab-list side="left">\n        <button ion-fab color="primary" (click)="onAddTask()">\n          <ion-icon name="add" ></ion-icon>\n        </button>\n        <button ion-fab color="primary" (click)="onCreateRoute()">\n          <ion-icon name="ios-map-outline"  style="zoom: 1.75; opacity:0.6;"></ion-icon>\n          <ion-icon name="add" style="position: absolute; "></ion-icon>\n        </button>\n        <button ion-fab color="secondary" (click)="onListRoute()">\n          <ion-icon name="ios-map-outline"  style="zoom: 1.75; opacity:0.6;"></ion-icon>\n          <ion-icon name="md-navigate" style="position: absolute; "></ion-icon>\n        </button>\n      </ion-fab-list>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\Users\Alexander\Desktop\Projects\EazyBuzyClient\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__modules_tasks_mdl_component__["a" /* TasksServiseModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__modules_user_mdl_component__["a" /* UserServiseModule */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksServiseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_mdl_component__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TasksServiseModule = /** @class */ (function () {
    // private url: string = 'https://eazy-buzy-server.herokuapp.com/';
    // private url: string = Url.getUrl();
    function TasksServiseModule(http, userServiseModule) {
        this.http = http;
        this.userServiseModule = userServiseModule;
        this.url = 'http://localhost:3000/';
    }
    TasksServiseModule.prototype.getAllTasks = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url + "get_all_tasks", {
            user: JSON.stringify(this.userServiseModule.getUserFromLocalStorege())
        }, options).map(this.extractData).catch(this.handleError);
    };
    TasksServiseModule.prototype.getTypes = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + "get_types").map(this.extractData).catch(this.handleError);
    };
    TasksServiseModule.prototype.getCompanies = function (type) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + "get_companies/" + type, options).map(this.extractData).catch(this.handleError);
    };
    TasksServiseModule.prototype.addNewTask = function (task) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url + "create_task", {
            user: JSON.stringify(this.userServiseModule.getUserFromLocalStorege()),
            task: JSON.stringify(task)
        }, options).map(this.extractData).catch(this.handleError);
    };
    TasksServiseModule.prototype.extractData = function (res) {
        console.log(res.json());
        return res.json() || {};
    };
    TasksServiseModule.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    TasksServiseModule.prototype.deleteTask = function (taskId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url + "delete_task", {
            user: JSON.stringify(this.userServiseModule.getUserFromLocalStorege()),
            task_id: taskId
        }, options).map(this.extractData).catch(this.handleError);
    };
    TasksServiseModule.prototype.updateTask = function (taskId, taskUpdateData) {
        console.log(taskId);
        console.log(taskUpdateData);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url + "update_task", {
            user: JSON.stringify(this.userServiseModule.getUserFromLocalStorege()),
            task_id: taskId,
            task_update_data: JSON.stringify(taskUpdateData)
        }, options).map(this.extractData).catch(this.handleError);
    };
    TasksServiseModule.prototype.addOrUpdateTask = function (taskId, taskUpdateData, locationData) {
        console.log(taskId);
        console.log(taskUpdateData);
        console.log(locationData);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url + "add_or_update_task", {
            user: JSON.stringify(this.userServiseModule.getUserFromLocalStorege()),
            task_id: taskId,
            task_update_data: JSON.stringify(taskUpdateData),
            task_location_data: JSON.stringify(locationData)
        }, options).map(this.extractData).catch(this.handleError);
    };
    TasksServiseModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__user_mdl_component__["a" /* UserServiseModule */]])
    ], TasksServiseModule);
    return TasksServiseModule;
}());

//# sourceMappingURL=tasks_mdl.component.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRoutePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__place_search_autocomplite_place_search_autocomplite__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_route_mdl_component__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__route_details_route_details__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateRoutePage = /** @class */ (function () {
    function CreateRoutePage(navCtrl, navParams, viewCtrl, fb, modalCtrl, routeServiseModule, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.fb = fb;
        this.modalCtrl = modalCtrl;
        this.routeServiseModule = routeServiseModule;
        this.loadingCtrl = loadingCtrl;
        this.location = {
            start_point: {},
            end_point: {}
        };
    }
    CreateRoutePage.prototype.ionViewDidLoad = function () {
    };
    CreateRoutePage.prototype.ngOnInit = function () {
        this.createRouteForm = this.fb.group({
            mode: ['driving', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,]],
            start_point: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            end_point: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            start_time: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            end_time: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            date: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
    };
    CreateRoutePage.prototype.onSubmit = function (_a) {
        var value = _a.value;
        this.presentLoadingDefault();
        this.createNewRoute(value);
    };
    CreateRoutePage.prototype.showAddressModal = function (placeFeild) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__place_search_autocomplite_place_search_autocomplite__["a" /* PlaceSearchAutocomplitePage */], { pointName: placeFeild });
        // let me = this;
        modal.onDidDismiss(function (data) {
            if (data !== undefined) {
                _this.createRouteForm.patchValue(JSON.parse("{\"" + data.point_name + "\":\"" + data.field_adress + "\"}"));
                _this.location[placeFeild] = data.data;
            }
        });
        setTimeout(function () {
            modal.present();
        }, 150);
        // modal.present();
    };
    CreateRoutePage.prototype.createNewRoute = function (value) {
        var _this = this;
        this.routeServiseModule.createRoute({
            mode: value.mode,
            time: {
                start_time: value.start_time,
                end_time: value.end_time,
                date: value.date
            },
            location: this.location
        })
            .subscribe(function (response) {
            if (response) {
                _this.modalWait.dismiss();
                _this.routeServiseModule.route = response.data.recommended_route;
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__route_details_route_details__["a" /* RouteDetailsPage */]);
            }
        }, function (error) {
            console.log(error);
        });
    };
    CreateRoutePage.prototype.onDiscard = function () {
        this.navCtrl.pop();
    };
    CreateRoutePage.prototype.presentLoadingDefault = function () {
        this.modalWait = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.modalWait.present();
    };
    CreateRoutePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-route',template:/*ion-inline-start:"C:\Users\Alexander\Desktop\Projects\EazyBuzyClient\src\pages\create-route\create-route.html"*/'<ion-header>\n  <ion-navbar [hideBackButton]="true">\n    <ion-toolbar>\n      <ion-buttons item-start>\n        <button ion-button\n            (click)="onDiscard()"\n            icon-only\n        >\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <form item-start ion-button (ngSubmit)="onSubmit(createRouteForm)" [formGroup]="createRouteForm">\n        <button [formGroup]="createRouteForm" ion-button color="dark" clear type="submit" [disabled]="createRouteForm.invalid">\n            Save\n          </button>\n        </form>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-title>\n         New Route\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list no-lines>\n      <form (ngSubmit)="onSubmit(createRouteForm)" [formGroup]="createRouteForm">\n        <ion-item>\n          <ion-segment formControlName="mode">\n            <ion-segment-button value="transit">\n              <ion-icon name="md-bus"></ion-icon> \n            </ion-segment-button>\n            <ion-segment-button value="driving">\n              <ion-icon name="md-car"></ion-icon>\n            </ion-segment-button>\n            <ion-segment-button value="walking">\n              <ion-icon name="md-walk"></ion-icon>\n            </ion-segment-button>\n          </ion-segment>\n        </ion-item>\n        <hr>\n        <ion-item>\n          <ion-icon item-start name="md-pin"></ion-icon>\n          <ion-label>Location</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label floating *ngIf="location.start_point.address">From</ion-label>\n          <ion-input (ionFocus)="showAddressModal(\'start_point\')"\n            formControlName="start_point" type="text"\n            placeholder="add start adress"\n          ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating *ngIf="location.end_point.address">To</ion-label>\n          <ion-input (ionFocus)="showAddressModal(\'end_point\')" \n            formControlName="end_point" type="text"\n            placeholder="add end adress"\n          ></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item>\n          <ion-icon item-start name="md-time"></ion-icon>\n          <ion-label>Time Window</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label item-start>Date</ion-label>\n          <ion-datetime item-start placeholder="add date" displayFormat="DD-MM-YYYY" formControlName="date"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label item-start>Start</ion-label>\n          <ion-datetime\n            item-start placeholder="add stat time"\n            displayFormat="HH:mm"\n            formControlName="start_time"\n          >\n          </ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label item-start>End</ion-label>\n          <ion-datetime\n            item-start placeholder="add end time"\n            displayFormat="HH:mm"\n            formControlName="end_time"\n          >\n          </ion-datetime>\n        </ion-item>\n      </form>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Alexander\Desktop\Projects\EazyBuzyClient\src\pages\create-route\create-route.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__modules_route_mdl_component__["a" /* RouteServiseModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], CreateRoutePage);
    return CreateRoutePage;
}());

//# sourceMappingURL=create-route.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_route_mdl_component__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RouteDetailsPage = /** @class */ (function () {
    function RouteDetailsPage(navCtrl, navParams, zone, mapsAPILoader, routeServiseModule, platform, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.zone = zone;
        this.mapsAPILoader = mapsAPILoader;
        this.routeServiseModule = routeServiseModule;
        this.platform = platform;
        this.geolocation = geolocation;
        this.mapCenter = {
            lat: 32,
            lng: 34
        };
        this.currPosition = {
            lat: 32,
            lng: 34
        };
        this.mapZoom = 14;
        this.segments = null;
        this.tasks = null;
        this.duration = null;
        this.distance = null;
        this.headetHeight = 60;
        this.routeDetailsHeight = 102;
        this.tasks = this.routeServiseModule.route.tasks;
        this.segments = this.routeServiseModule.route.segments;
        this.duration = ~~(this.routeServiseModule.route.sum_of_durations / 60);
        this.distance = (this.routeServiseModule.route.sum_of_distance / 1000).toFixed(1);
        this.platformHeight = this.platform.height();
        this.maxMapHeight = this.platformHeight - this.headetHeight - this.routeDetailsHeight;
        this.mapHeight = this.maxMapHeight;
    }
    RouteDetailsPage.prototype.ionViewDidLoad = function () {
    };
    RouteDetailsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // this.geolocation.getCurrentPosition()
        // .then((resp) => {
        //   this.currPosition.lat = resp.coords.latitude;
        //   this.currPosition.lng = resp.coords.longitude;
        //  }).catch((error) => {
        //    console.log('Error getting location', error);
        //  });
        this.currPositionAvalible = false;
        setTimeout(function () {
            _this.mapHeight = (_this.platformHeight - _this.headetHeight - _this.routeDetailsHeight) / 2;
            _this.scrollContentMarginTop = _this.headetHeight + _this.routeDetailsHeight + _this.mapHeight;
            _this.mapZoom = 14;
            _this.mapCenter.lat = _this.tasks[0].place.location.lat - 0.01;
            _this.mapCenter.lng = _this.tasks[0].place.location.lng;
            _this.getPosition();
        }, 500);
    };
    RouteDetailsPage.prototype.discard = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    RouteDetailsPage.prototype.InitMap = function () {
        this.setLocation();
        // let input = document.getElementById('places');
        // let autocomplete = new google.maps.places.Autocomplete(input);
        // google.maps.event.addListener(autocomplete, 'place_changed', () => {
        //   let place = autocomplete.getPlace();
        //   this.latitude = place.geometry.location.lat();
        //   this.longitude = place.geometry.location.lng();
        //   alert(this.latitude + ", " + this.longitude);
        //   console.log(place);
        // });
    };
    RouteDetailsPage.prototype.setLocation = function () {
        var latLng = new google.maps.LatLng(53.550513, 9.994241);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        // this.mapElement = new google.maps.Map(this.mapElement.nativeElement, mapOptions);    
        // this.marker = new google.maps.Marker({
        //   position: latLng,
        //   map: this.map,
        // });
    };
    RouteDetailsPage.prototype.onCloseMap = function () {
        switch (this.mapHeight) {
            case ((this.platformHeight - this.headetHeight - this.routeDetailsHeight) / 2): {
                this.mapHeight = 0;
                this.scrollContentMarginTop = this.headetHeight + this.routeDetailsHeight;
                break;
            }
            case (this.platformHeight - this.headetHeight - this.routeDetailsHeight): {
                this.mapHeight = (this.platformHeight - this.headetHeight - this.routeDetailsHeight) / 2;
                this.scrollContentMarginTop = this.headetHeight + this.routeDetailsHeight + this.mapHeight;
                break;
            }
            default: {
                break;
            }
        }
    };
    RouteDetailsPage.prototype.onOpenMap = function () {
        switch (this.mapHeight) {
            case 0: {
                this.mapHeight = (this.platformHeight - this.headetHeight - this.routeDetailsHeight) / 2;
                this.scrollContentMarginTop = this.headetHeight + this.routeDetailsHeight + this.mapHeight;
                break;
            }
            case ((this.platformHeight - this.headetHeight - this.routeDetailsHeight) / 2): {
                this.mapHeight = this.platformHeight - this.headetHeight - this.routeDetailsHeight;
                this.scrollContentMarginTop = this.headetHeight + this.routeDetailsHeight + this.mapHeight;
                break;
            }
            default: {
                break;
            }
        }
    };
    RouteDetailsPage.prototype.setMapCenter = function (lat, lng) {
        this.mapZoom = 18;
        this.mapCenter.lat = lat - 0.0005;
        this.mapCenter.lng = lng;
    };
    RouteDetailsPage.prototype.onZoomChange = function (event) {
        if (this.mapZoom !== event) {
            this.mapZoom = event;
        }
    };
    RouteDetailsPage.prototype.getPosition = function () {
        var _this = this;
        // setInterval(()=>{
        //   console.log("hh");
        // }, 10000);
        this.watch = this.geolocation.watchPosition({
            enableHighAccuracy: true
        });
        this.watch.subscribe(function (data) {
            _this.currPositionAvalible = true;
            _this.currPosition.lat = data.coords.latitude;
            _this.currPosition.lng = data.coords.longitude;
            console.log(data.coords.latitude);
            console.log(data.coords.longitude);
        });
    };
    RouteDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-route-details',template:/*ion-inline-start:"C:\Users\Alexander\Desktop\Projects\EazyBuzyClient\src\pages\route-details\route-details.html"*/'<!--\n  Generated template for the RouteDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-toolbar>\n      <ion-title>Route</ion-title>\n        <ion-buttons end>\n              <button ion-button color="dark" [disabled]="true" *ngIf="true">\n                Go\n              </button>\n            <button ion-button (click)="discard()">\n              <span ion-text color="dark">Discard</span>\n            </button>\n        </ion-buttons>\n      </ion-toolbar>\n  </ion-navbar>\n  <agm-map \n      [style.height]="mapHeight + \'px\'"\n      [latitude]="mapCenter.lat"\n      [longitude]="mapCenter.lng"\n      [zoom]="mapZoom"\n      (zoomChange)="onZoomChange($event)"\n    >\n    <agm-marker *ngIf="currPositionAvalible"\n        [iconUrl]="\'assets/markers/persone.png\'"\n        [latitude]="currPosition.lat"\n        [longitude]="currPosition.lng"\n        [opacity]="0.8"\n    ></agm-marker>\n    <ng-container *ngIf="tasks">\n      <agm-marker *ngFor="let task of tasks; let i = index"\n        [iconUrl]="(i == 0)?\'assets/markers/start.png\':((i == tasks.length - 1)?\'assets/markers/end.png\':\'assets/markers/place\' + i + \'.png\')"\n        [latitude]="task.place.location.lat"\n        [longitude]="task.place.location.lng"\n        [opacity]="0.8"\n      ></agm-marker>\n\n      <ng-container *ngFor="let segment of segments; let i = index">\n        <agm-polyline *ngFor="let polyline of segment.polylines; let k = index"\n          [strokeColor]="\'#9900cc\'"\n          [strokeWeight]=7\n          [strokeOpacity]="0.8"\n        >\n            <agm-polyline-point \n              [latitude]="polyline.start.lat" \n              [longitude]="polyline.start.lng"\n            ></agm-polyline-point>\n\n            <agm-polyline-point\n            [latitude]="polyline.end.lat" \n            [longitude]="polyline.end.lng"\n            ></agm-polyline-point>\n        </agm-polyline>\n      </ng-container>\n    </ng-container>\n      </agm-map>\n      <ion-item no-lines>\n          <h2><span>{{duration}} min</span> ({{distance}} km)</h2>\n          <p><span [style.color]="\'#67d870\'">from: </span>{{tasks[0].place.address}}</p>\n          <p><span [style.color]="\'red\'">to: </span> {{tasks[tasks.length - 1].place.address}}</p>\n          <ion-note item-end>\n            <button (click)="onCloseMap()"\n              ion-button \n              clear \n              full \n              icon-only \n              color="dark"\n            >\n              <ion-icon name="md-arrow-dropup"></ion-icon>\n            </button>\n            <button (click)="onOpenMap()"\n              ion-button clear full icon-only color="dark"\n            >\n              <ion-icon name="md-arrow-dropdown"></ion-icon>\n            </button>\n          </ion-note>\n      </ion-item>\n</ion-header>\n\n<ion-content>\n\n  <ion-list no-lines [style.margin-top]="scrollContentMarginTop + \'px\'">\n    <ng-container *ngFor="let task of tasks; let i = index">\n      <button ion-item\n        (click)="setMapCenter(task.place.location.lat,task.place.location.lng)"\n      >\n        <ion-avatar item-start>\n          <ion-icon item-start name="logo-usd" class="taskIcon"></ion-icon>\n        </ion-avatar>\n        <h2>{{task.name}}</h2>\n        <p>{{task.place.address}}.</p>\n        <h1 item-end>{{i}}</h1>\n      </button>\n      <hr>\n      <ng-container *ngIf="segments[i]">\n        <ion-item>\n          <p> Go ahead\n            <span [style.font-weight]="\'bold\'">{{(segments[i].duration/60).toFixed(0)}} min</span>\n            ({{(segments[i].distance/1000).toFixed(1)}} km)\n          </p>\n        </ion-item>\n        <hr>\n      </ng-container>\n\n    </ng-container>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Alexander\Desktop\Projects\EazyBuzyClient\src\pages\route-details\route-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_5__modules_route_mdl_component__["a" /* RouteServiseModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], RouteDetailsPage);
    return RouteDetailsPage;
}());

//# sourceMappingURL=route-details.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_tasks_mdl_component__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__serch_filter_serch_filter__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__place_search_autocomplite_place_search_autocomplite__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__more_options_more_options__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TaskPage = /** @class */ (function () {
    function TaskPage(navCtrl, navParams, fb, tasksServiseModule, modalCtrl, popoverCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.tasksServiseModule = tasksServiseModule;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.initializeTaskForm();
    }
    TaskPage.prototype.getTypes = function () {
        var _this = this;
        this.tasksServiseModule.getTypes()
            .subscribe(function (response) {
            if (response) {
                if (response.status = true) {
                    console.log(response.types);
                    _this.types = response.types;
                }
                console.log(JSON.stringify(response));
            }
        }, function (error) {
            console.log(error);
        });
    };
    TaskPage.prototype.getCompanies = function (type) {
        var _this = this;
        this.tasksServiseModule.getCompanies(type)
            .subscribe(function (response) {
            if (response) {
                console.log(response);
                if (response.status = true && response.data) {
                    _this.companies = response.data.companies;
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    TaskPage.prototype.initializeTaskForm = function () {
        var _this = this;
        this.task = this.navParams.get('task') || {};
        this.getTypes();
        this.setEditFormDefaulParams();
        if (this.navParams.get('task') === undefined) {
            this.newTask = true;
        }
        else {
            this.getCompanies(this.taskPlace.place_type.formated_name);
            this.taskForm.disable();
        }
        this.taskForm.valueChanges.subscribe(function (newValues) {
            _this.formChanged = true;
        });
    };
    TaskPage.prototype.setEditFormDefaulParams = function () {
        if (this.navParams.get('task') !== undefined) {
            this.taskPlace = this.task.task_place;
            this.location = this.task.location;
        }
        else {
            this.location = {
                address: '',
                place_id: '',
            };
            this.taskPlace = {
                place_type: {
                    formated_name: '',
                    name: '',
                    icon: ''
                },
                place_company: {
                    formated_name: '',
                    name: '',
                    icon: ''
                }
            };
        }
        this.taskForm = this.fb.group({
            name: [this.task.name || '', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4)]],
            place_type: [this.taskPlace.place_type.formated_name],
            place_company: [this.taskPlace.place_company.formated_name],
            time_start: [(this.task.time) ? (this.task.time.start_time || '') : ''],
            time_date: [(this.task.time) ? (this.task.time.date || '') : ''],
            time_duration: [(this.task.time) ? (this.task.time.duration || '') : ''],
            priority: [this.task.priority || ''],
            place: [(this.task.location) ? (this.task.location.address || '') : ''],
            shered_to: [(this.task.share) ? (this.task.share.user_name || '') : '']
        });
        this.formChanged = false;
    };
    TaskPage.prototype.onSubmit = function (_a) {
        var value = _a.value;
        this.value = value;
        this.newTask ?
            this.addOrUpdateTask() :
            this.showPrompt({ title: 'Update', message: 'Accept changes?' }, this.addOrUpdateTask.bind(this));
    };
    TaskPage.prototype.addOrUpdateTask = function () {
        console.log(this.location);
        this.tasksServiseModule.addOrUpdateTask(this.task._id, this.value, this.location)
            .subscribe(function (response) {
            if (response) {
                console.log(JSON.stringify(response));
            }
        }, function (error) {
            console.log(error);
        });
        this.navCtrl.pop();
    };
    TaskPage.prototype.addNewTask = function () {
        this.tasksServiseModule.addNewTask(this.value)
            .subscribe(function (response) {
            if (response) {
                console.log(JSON.stringify(response));
            }
        }, function (error) {
            console.log(error);
        });
        this.navCtrl.pop();
    };
    //creating modal seach filter window and pass list of items 
    TaskPage.prototype.showSearchFilterModal = function (event) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__serch_filter_serch_filter__["a" /* SearchFilterPage */], {
            fieldName: event.ngControl.name,
            currItem: this.taskPlace[event.ngControl.name],
            itemsList: this.getItemsListForSerchFilter(event.ngControl.name)
        });
        modal.onDidDismiss(function (data) {
            if (data !== undefined) {
                _this.taskForm.patchValue(JSON.parse("{\"" + data.fieldName + "\":\"" + data.item.formated_name + "\"}"));
                _this.taskPlace[data.fieldName] = data.item;
                if (data.fieldName === 'place_type') {
                    _this.taskForm.patchValue({
                        place_company: ''
                    });
                    _this.taskPlace.place_company = {
                        formated_name: '',
                        name: '',
                        icon: ''
                    };
                    _this.getCompanies(data.item.name);
                }
            }
        });
        setTimeout(function () {
            modal.present();
        }, 150);
    };
    //prepare the apropriate list for 
    TaskPage.prototype.getItemsListForSerchFilter = function (fieldName) {
        switch (fieldName) {
            case 'place_type': {
                return this.types;
            }
            case 'place_company': {
                return this.companies;
            }
            default: {
                return [];
            }
        }
    };
    TaskPage.prototype.showAddressModal = function (placeFeild) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__place_search_autocomplite_place_search_autocomplite__["a" /* PlaceSearchAutocomplitePage */], { pointName: placeFeild });
        modal.onDidDismiss(function (data) {
            if (data !== undefined) {
                _this.taskForm.patchValue({
                    'place': data.field_adress
                });
                _this.location = data.data;
            }
        });
        setTimeout(function () {
            modal.present();
        }, 150);
    };
    TaskPage.prototype.onMoreOption = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__more_options_more_options__["a" /* MoreOptionsPage */], {
            newTaskForm: this.taskForm,
            taskId: this.task._id
        });
        popover.onDidDismiss(function (button) {
            switch (button) {
                case 'delete': {
                    _this.showPrompt({
                        title: 'Delete',
                        message: 'Accept delete permanently?'
                    }, _this.deleteTask.bind(_this));
                    break;
                }
                case 'edit': {
                    setTimeout(function () {
                        _this.taskForm.enable();
                        _this.formChanged = false;
                    }, 150);
                }
            }
        });
        setTimeout(function () {
            popover.present({ ev: myEvent });
        }, 150);
    };
    TaskPage.prototype.onDiscard = function () {
        var _this = this;
        if (this.newTask && !this.formChanged) {
            this.navCtrl.pop();
        }
        else {
            this.showPrompt({ title: 'Discard', message: 'Discard changes?' }, function () { return _this.navCtrl.pop(); });
        }
    };
    TaskPage.prototype.editFormReset = function () {
        var _this = this;
        this.setEditFormDefaulParams();
        setTimeout(function () {
            _this.taskForm.disable();
        }, 150);
    };
    TaskPage.prototype.deleteTask = function () {
        this.tasksServiseModule.deleteTask(this.task._id).subscribe(function (response) {
            if (response) {
                console.log(JSON.stringify(response));
            }
        }, function (error) {
            console.log(error);
        });
        this.navCtrl.pop();
    };
    //
    TaskPage.prototype.updateTask = function () {
        this.tasksServiseModule.updateTask(this.task._id, this.value)
            .subscribe(function (response) {
            if (response) {
                console.log(JSON.stringify(response));
            }
        }, function (error) {
            console.log(error);
        });
        this.navCtrl.pop();
    };
    //on click save button
    TaskPage.prototype.onSave = function (_a) {
        var value = _a.value;
        this.value = value;
        this.value.task_place = this.taskPlace;
        this.newTask ?
            this.addOrUpdateTask() :
            this.showPrompt({ title: 'Update', message: 'Accept changes?' }, this.addOrUpdateTask.bind(this));
    };
    //show alert modal window with user title and message
    TaskPage.prototype.showPrompt = function (promt, acceptMethod) {
        var prompt = this.alertCtrl.create({
            title: promt.title,
            message: promt.message,
            buttons: [
                {
                    text: 'yes',
                    handler: function () {
                        acceptMethod();
                    }
                },
                {
                    text: 'no',
                    handler: function () { }
                }
            ]
        });
        prompt.present();
    };
    TaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-task',template:/*ion-inline-start:"C:\Users\Alexander\Desktop\Projects\EazyBuzyClient\src\pages\task\task.html"*/'<ion-header>\n  <ion-navbar [hideBackButton]="newTask || !newTask &&taskForm.enabled">\n    <ion-toolbar>\n      <ion-buttons item-start>\n        <button ion-button\n          (click)="onDiscard()"\n          *ngIf="taskForm.enabled && !newTask || newTask"\n          icon-only\n        >\n          <ion-icon name="md-close"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-buttons end>\n        <button *ngIf="newTask || !newTask && taskForm.enabled"\n          ion-button\n          (click)="onSave(taskForm)"\n          [disabled]="taskForm.invalid || !formChanged"\n        >\n          Save\n        </button>\n        <button *ngIf="!newTask && taskForm.disabled"\n          ion-button icon-only\n          item-end\n          (click)="onMoreOption($event)"\n        >\n          <ion-icon name="md-more"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-navbar>\n  <form  [formGroup]="taskForm">\n    <ion-input [disabled]="taskForm.disabled" class="toolbar-background-md" type="text" placeholder="Task name"  formControlName="name"></ion-input>\n  </form>\n</ion-header>\n\n<ion-content padding>\n    <ion-list no-lines>\n      <form [formGroup]="taskForm">\n      <ion-item>\n        <ion-icon item-start name="md-clipboard"></ion-icon>\n        <ion-input\n          (ionFocus)="showSearchFilterModal($event)"\n          type="text" placeholder="Task type" formControlName="place_type"></ion-input>\n      </ion-item>\n      <hr>\n      <ng-container *ngIf="taskPlace.place_company.name !== \'\' || companies">\n      <ion-item >\n        <ion-icon item-start name="md-briefcase"></ion-icon>\n        <ion-input \n          (ionFocus)="showSearchFilterModal($event)"\n          type="text" placeholder="Task brand/name/company" formControlName="place_company"></ion-input>\n      </ion-item>\n      <hr>\n    </ng-container>\n      <ion-item>\n        <ion-icon item-start name="md-pin"></ion-icon>\n          <ion-input \n            (ionFocus)="showAddressModal(\'place\')" \n            formControlName="place"\n            type="text"\n            placeholder="Choose place"\n          ></ion-input>\n        <ion-icon name="md-map" item-end></ion-icon>\n      </ion-item>\n      <hr>\n      <ion-item>\n          <ion-icon item-start name="md-time"></ion-icon>\n      </ion-item>\n      <ion-item>\n          <ion-label item-start>Start</ion-label>\n          <ion-datetime item-start placeholder="add time" displayFormat="HH:mm" formControlName="time_start"></ion-datetime>\n      </ion-item>\n      <ion-item>\n            <ion-label item-start></ion-label>\n            <ion-datetime item-start placeholder="add date" displayFormat="DD-MM-YYYY" formControlName="time_date"></ion-datetime>\n        </ion-item>\n      <ion-item>\n          <ion-label item-start>Duration</ion-label>\n          <ion-datetime item-start \n          hourValues="0,1,2,3,4,5,6,7,8,9,10"\n          displayFormat="HH:mm"\n          placeholder="add duration"\n          formControlName="time_duration"></ion-datetime>\n        </ion-item>\n        <hr>\n      <ion-item>\n        <ion-icon item-start name="md-stats"></ion-icon>\n         <ion-label fixed>Priority</ion-label>\n      </ion-item>\n      <ion-item>\n          <ion-segment formControlName="priority">\n              <ion-segment-button value="low">\n                Low\n              </ion-segment-button>\n              <ion-segment-button value="medium">\n                Medium\n              </ion-segment-button>\n              <ion-segment-button value="hight">\n                Hight\n              </ion-segment-button>\n            </ion-segment>\n      </ion-item>\n      <hr>\n      <ion-item>\n          <ion-icon item-start name="person-add"></ion-icon>\n          <ion-input type="text" placeholder="Share task" formControlName="shered_to"></ion-input>\n      </ion-item>\n    </form>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Alexander\Desktop\Projects\EazyBuzyClient\src\pages\task\task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__modules_tasks_mdl_component__["a" /* TasksServiseModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TaskPage);
    return TaskPage;
}());

//# sourceMappingURL=task.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceSearchAutocomplitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { } from 'googlemaps';
var PlaceSearchAutocomplitePage = /** @class */ (function () {
    function PlaceSearchAutocomplitePage(viewCtrl, zone, mapsAPILoader, navParams) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.zone = zone;
        this.mapsAPILoader = mapsAPILoader;
        this.navParams = navParams;
        this.mapsAPILoader.load().then(function () {
            _this.service = new google.maps.places.AutocompleteService();
        });
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    }
    PlaceSearchAutocomplitePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.searchBar.setFocus();
        }, 150);
        this.pointName = this.navParams.get('pointName');
    };
    PlaceSearchAutocomplitePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PlaceSearchAutocomplitePage.prototype.chooseItem = function (item) {
        // this.viewCtrl.dismiss(item);
        this.geo = item;
        this.geoCode(this.geo, item); //convert Address to lat and long
    };
    PlaceSearchAutocomplitePage.prototype.updateSearch = function () {
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var me = this;
        this.service.getPlacePredictions({
            input: this.autocomplete.query,
            componentRestrictions: {
                country: 'il'
            }
        }, function (predictions, status) {
            me.autocompleteItems = [];
            me.zone.run(function () {
                if (predictions != null) {
                    predictions.forEach(function (prediction) {
                        me.autocompleteItems.push(prediction.description);
                    });
                }
            });
        });
    };
    //convert Address string to lat and long
    PlaceSearchAutocomplitePage.prototype.geoCode = function (address, item) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function (results, status) {
            console.log(results);
            _this.viewCtrl.dismiss({
                point_name: _this.pointName,
                field_adress: item,
                data: {
                    address: results[0].formatted_address,
                    place_id: results[0].place_id,
                    type: results[0].types[0],
                    geometry: {
                        location: {
                            lat: results[0].geometry.location.lat(),
                            lng: results[0].geometry.location.lng()
                        }
                    }
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("searchBar"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Searchbar */])
    ], PlaceSearchAutocomplitePage.prototype, "searchBar", void 0);
    PlaceSearchAutocomplitePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n  <ion-header>\n  <ion-toolbar>\n    <ion-title>Enter address</ion-title>\n    <ion-searchbar #searchBar \n        [(ngModel)]=\"autocomplete.query\"  \n        [showCancelButton]=\"true\"\n        (ionInput)=\"updateSearch()\" \n        (ionCancel)=\"dismiss()\"\n    ></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of autocompleteItems\" tappable   (click)=\"chooseItem(item)\">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], PlaceSearchAutocomplitePage);
    return PlaceSearchAutocomplitePage;
}());

//# sourceMappingURL=place-search-autocomplite.js.map

/***/ })

},[239]);
//# sourceMappingURL=main.js.map