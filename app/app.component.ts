import { Component } from '@angular/core';
import { sprintDataObj } from './sprints/objects';

export class Sprint {
  name: string;
  slides: string;
  repo: string;
  video: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    <ul class="objSprint">
      <li *ngFor="let sprint of sprints" (click)="onSelect(sprint)">
        <span>{{ sprint.name }}</span>
      </li>
    </ul>
    <div *ngIf="selectedSprint">
      <h2>{{ selectedSprint.name }}</h2>
      <div>{{ selectedSprint.repo }}</div>
    </div>
  `
})

export class AppComponent {
  title = 'Prep+ Course Materials';
  sprints = sprintDataObj;
  onSelect(sprint: Sprint): void {
    this.selectedSprint = sprint;
  }
  selectedSprint: Sprint;
}