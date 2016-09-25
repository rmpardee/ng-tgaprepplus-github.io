import { Component } from '@angular/core';
import { sprintDataObj } from './data/sprints';

export class Sprint {
  name: string;
  slides: string;
  repo: string;
  video: string;
}

@Component({
  selector: 'sprints',
  template: `
    <h2>{{ title }}</h2>
    <ul class="objSprint">
      <li *ngFor="let sprint of sprints" (click)="onSelect(sprint)">
        <span>{{ sprint.name }}</span>
      </li>
    </ul>
    <div *ngIf="selectedSprint">
      <h2>{{ selectedSprint.name }}</h2>
      <ul>
        <li><a target="_blank" href="{{ selectedSprint.slides }}">{{ selectedSprint.name }} Slides</a></li>
        <li><a target="_blank" href="{{ selectedSprint.repo }}">{{ selectedSprint.name }} Repo</a></li>
      </ul>
    </div>
  `
})

export class SprintsComponent {
  title = 'Sprints';
  sprints = sprintDataObj;
  onSelect(sprint: Sprint): void {
    this.selectedSprint = sprint;
  }
  selectedSprint: Sprint;
}