import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { AcademicInstitutionsComponent } from './academic-institutions/academic-institutions.component';
import { AllinoneComponent } from './allinone/allinone.component';
import { AppointyHandlesComponent } from './appointy-handles/appointy-handles.component';
import { CustomScheduleComponent } from './custom-schedule/custom-schedule.component';
import { PriorityComponent } from './priority/priority.component';
import { Footer1Component } from './footer/footer1/footer1.component';
import { Footer2Component } from './footer/footer2/footer2.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    GetStartedComponent,
    AcademicInstitutionsComponent,
    AllinoneComponent,
    AppointyHandlesComponent,
    CustomScheduleComponent,
    PriorityComponent,
    Footer1Component,
    Footer2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
