import { Component } from '@angular/core';
import { resourcesDataObj } from './data/resources';

@Component({
  selector: 'resources',
  template: `
    <h2>{{ title }}</h2>
    <ul class="objSprint">
      <li *ngFor="let resource of resourcesData">
        <a target="_blank" href="{{ resource.link }}">{{ resource.name }}</a>
      </li>
    </ul>
    <p>Email us!<br>
    <a target="_blank" href="mailto:prepcommunication@telegraphacademy.com">prepcommunication@telegraphacademy.com</a></p>
  `
})

export class ResourcesComponent {
  title = 'Resources';
  resourcesData = resourcesDataObj;
}