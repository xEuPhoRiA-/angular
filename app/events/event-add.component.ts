import { Component } from 'angular2/core';
import {
  Control,
  ControlGroup,
  FormBuilder,
  Validators,
  FORM_DIRECTIVES
} from 'angular2/common';


@Component({
  templateUrl: '/app/events/event-add.component.html',
  directives: [FORM_DIRECTIVES]

})

export class AddEvent {
  form: ControlGroup;

  ename: Control;
  edate: Control;
  ecode: Control;
  eloc: Control;
  edur: Control;
  efee: Control;
  erate: Control;
  etime: Control;

  constructor( private builder: FormBuilder){
    this.ename = new Control(
      "",
      Validators.compose([
        Validators.required])
    )
    this.ecode = new Control(
      "",
      Validators.compose([
        Validators.required])
    )
    this.edate = new Control(
      "",
      Validators.compose([
        Validators.required])
    )
    this.etime = new Control(
      "",
      Validators.compose([
        Validators.required])
    )
    this.eloc = new Control(
      "",
      Validators.compose([
        Validators.required])
    )
    this.edur = new Control(
      "",
      Validators.compose([
        Validators.required])
    )
    this.efee = new Control(
      "",
      Validators.compose([
        Validators.required])
    )
    this.erate = new Control(
      "",
      Validators.compose([
        Validators.required])
    )

    this.form = builder.group({
      ename: this.ename,
      ecode: this.ecode,
      edate: this.edate,
      etime: this.etime,
      eloc: this.eloc,
      edur: this.edur,
      efee: this.efee,
      erate: this.erate
    })


  }

}
