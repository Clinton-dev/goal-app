// external modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // for making forms work in a Angular

// components and directives
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { HouseComponent } from './house/house.component';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';

@NgModule({ // this is the AppModule class
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailComponent,
    HouseComponent,
    DateCountPipe,
    GoalFormComponent
  ],
  imports: [//features add to our app
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
