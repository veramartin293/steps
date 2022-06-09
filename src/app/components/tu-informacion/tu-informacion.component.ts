import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-tu-informacion',
  templateUrl: './tu-informacion.component.html',
  styleUrls: ['./tu-informacion.component.scss']
})
export class TuInformacionComponent implements OnInit {

  iconPathStepsArray = [
    'fa-solid fa-font-awesome', 
    'fa-solid fa-clipboard-list', 
    'fa-solid fa-dollar-sign'
  ];

  private activeStepSubject = new BehaviorSubject<number>(1);
  activeStep$ = this.activeStepSubject.asObservable();

  constructor() { }

  ngOnInit(): void {
  }

  goNextStep() {
    const currentStep = this.activeStepSubject.getValue();
    const newStep = currentStep + 1;
    if (!(newStep > this.iconPathStepsArray.length)) {
      this.activeStepSubject.next(newStep);
    }
  }

  goPreviousStep() {
    const currentStep = this.activeStepSubject.getValue();
    const newStep = currentStep - 1;
    if (newStep >= 1) {
      this.activeStepSubject.next(newStep);
    }
  }

}
