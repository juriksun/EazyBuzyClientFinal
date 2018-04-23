import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RouteListPage } from './route-list';

@NgModule({
  declarations: [
    RouteListPage,
  ],
  imports: [
    IonicPageModule.forChild(RouteListPage),
  ],
})
export class RouteListPageModule {}
