import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

interface FormInput {
  name: string;
  placeholder:string;
  type: string;
  options: [string];
  initialValue?: any;
  validators?: ValidatorFn[]
}

interface ControlInterface {
  [key: string] : AbstractControl
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  @Input() inputs!: any
  @Output() handleSubmitEvent = new EventEmitter<any>();

  form !: FormGroup;

  constructor() { }

  handleSubmit(){
    this.handleSubmitEvent.emit(this.form)
  }

  ngOnInit(): void {
    const control = (this.inputs as FormInput[]).reduce(
      (acc, curr) => {
        const data = {...acc} as ControlInterface
        if(curr.name){
          data[curr.name as string] = new FormControl(curr.initialValue || '', curr.validators ? curr.validators : []) 
        }
        return data
    }, {}) as ControlInterface

    this.form = new FormGroup(control)
  }

}
