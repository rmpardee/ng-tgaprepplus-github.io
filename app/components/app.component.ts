import { Component } from '@angular/core';
// import { resources } from './app.resourcesComponent';
// import { sprints } from './app.sprintsComponent';

@Component({
  selector: 'my-app',
  template: `
    <a target="_blank" href="http://telegraphprep.github.io/"><img id="headerLogo" src="./images/stackedLogo.png"></a>
    <h1>{{ title }}</h1>
    <table id="container">
      <tr>
        <td id="sprint-row"><sprints id="sprints"></sprints></td>
        <td><resources></resources></td>
      </tr>
    </table>
  `
})

export class AppComponent {
  title = 'Prep+ Course Materials';
}