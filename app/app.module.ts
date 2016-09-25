import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './components/app.component';
import { ResourcesComponent } from './components/app.resourcesComponent';
import { SprintsComponent } from './components/app.sprintsComponent';


@NgModule({
  imports: [BrowserModule/*, Ng2BootstrapModule*/],
  declarations: [AppComponent, ResourcesComponent, SprintsComponent],
  bootstrap: [AppComponent, ResourcesComponent, SprintsComponent]
})

export class AppModule { }