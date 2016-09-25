import { Component } from '@angular/core';
// import { resources } from './app.resourcesComponent';
// import { sprints } from './app.sprintsComponent';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    <table>
      <tr>
        <td><resources></resources></td>
        <td><sprints></sprints></td>
      </tr>
    </table>
  `
})

export class AppComponent {
  title = 'Prep+ Course Materials';
}