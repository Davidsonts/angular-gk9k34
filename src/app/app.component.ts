import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  form: FormGroup;
  constructor(private formbuilder: FormBuilder){}

  ngOnInit(){
     this.form = this.formbuilder.group({
       mail: ['']
     });
     this.form.get('mail').valueChanges.subscribe(event => {
         this.form.get('mail').setValue(event.toLowerCase(), {emitEvent: false});
      });
  }
}
