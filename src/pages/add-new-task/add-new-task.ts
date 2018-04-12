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
  newTaskForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewTaskPage');
  }
  ngOnInit() {
    this.newTaskForm = this.fb.group({
      task_name: ['', [Validators.required, Validators.minLength(2)]],
      task_type: ['', [Validators.required, Validators.minLength(2)]],
      time_start: ['', [Validators.required]],
      time_end: ['', [Validators.required]],
      priorety: ['', [Validators.required, Validators.minLength(2)]],
      place: ['', [Validators.required, Validators.minLength(2)]],
      shered_to: ['', [Validators.required, Validators.minLength(2)]]
    });
  }
  onSubmit({ value }){
    console.log(value);
  }
}
