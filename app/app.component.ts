import { Component } from '@angular/core';
// import objectSprint from './sprints/objects';

export class Sprint {
  name: string;
  slides: string;
  repo: string;
  video: string;
}

const objectSprint: Sprint[] = [
  {
    "name": "Objects",
    "slides": "//slides.com/telegraphprep/telegraphprepweek1-21-33/embed",
    "repo": "https://github.com/TelegraphPrep/08-2016-Arrays",
    "video": "https://vimeo.com/155787394/2e06e54e03"
  },
  {
    "name": "Arrays",
    "slides": "//slides.com/telegraphprep/telegraphprepweek1-21-33/embed",
    "repo": "https://github.com/TelegraphPrep/08-2016-Objects",
    "video": "https://vimeo.com/155754175/f02142b962"
  }
]

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    <div *ngIf="selectedSprint">
      <h2>{{ selectedSprint.name }}</h2>
      <div>{{ selectedSprint.repo }}</div>
    </div>
    <ul class="objSprint">
      <li *ngFor="let sprint of objSprint">
        <span>{{ sprint.name }}</span>
      </li>
    </ul>
  `
})

// onSelect(sprint: Sprint): void {
//   this.selectedSprint = sprint;
// }

export class AppComponent {
  title = 'Prep+ Course Materials';
  objSprint: objectSprint;
  // selectedSprint: Sprint;
}