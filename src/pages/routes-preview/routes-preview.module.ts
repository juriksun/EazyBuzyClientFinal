import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoutesPreviewPage } from './routes-preview';

@NgModule({
  declarations: [
    RoutesPreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(RoutesPreviewPage),
  ],
})
export class RoutesPreviewPageModule {}
