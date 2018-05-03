import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorklogComponent } from './worklog/worklog.component';

import { FormsModule }   from '@angular/forms';
import { DetailsComponent } from './details/details.component';

import { WorklogService } from './worklog.service'; 
import { RouterModule }   from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    WorklogComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'worklog',
        pathMatch: 'full'
      },
      {
        path: 'worklog',
        component: WorklogComponent
      },
      {
        path: 'details/:id' , 
        component: DetailsComponent
      }
    ]),
  ],
  providers: [ WorklogService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
