import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
/**
 * Generated class for the AddNewTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-new-task',
  templateUrl: 'add-new-task.html',
})
export class AddNewTaskPage {
  documenSummaryForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewTaskPage');
  }
  ngOnInit() {
    this.documenSummaryForm = this.fb.group({
      date_from: ['sssss', [Validators.required, Validators.minLength(2)]]
    });
  }
  onSubmit({ value }){
    console.log(value);
  }
}
