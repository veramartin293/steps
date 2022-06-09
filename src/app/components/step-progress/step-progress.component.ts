import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Step } from 'src/app/models/step.model';

@Component({
  selector: 'app-step-progress',
  templateUrl: './step-progress.component.html',
  styleUrls: ['./step-progress.component.scss']
})
export class StepProgressComponent implements OnInit {

  @Input() iconPathsOfSteps!: string[];
  @Input() activeStep$!: Observable<number>;

  steps: Step[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setStepsArray();
  }

  setStepsArray() {
    for (let i = 0; i < this.iconPathsOfSteps.length; i++) {
      const isThereNextStep = this.iconPathsOfSteps[i + 1] !== undefined;
      const isTherePreviousStep = this.iconPathsOfSteps[i - 1] !== undefined;
      const stepObj = new Step(this.iconPathsOfSteps[i], isTherePreviousStep, isThereNextStep);
      this.steps.push(stepObj);
    }
  }
}
