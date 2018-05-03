import { Injectable } from '@angular/core';

// import the workhours class
import { Workhours } from './workhours.class';

@Injectable()
export class WorklogService {

  rawworkhours: Workhours[] = [
    {
      id: 1,
      project: 'Project 1',
      task: 'test task',
      date: '25-04-2018',
      details: 'Worked on a testing task'
    },
    {
      id: 2,
      project: 'Project 1',
      task: 'sample task',
      date: '26-04-2018',
      details: 'Worked on the sample task'
    },
    {
      id: 3,
      project: 'Project 2',
      task: 'new task',
      date: '27-04-2018',
      details: 'Worked on a new task assigned by client'
    }
  ]

  constructor() { 

  }

  getWorkhours() : Workhours[] {
    return this.rawworkhours; 
  }

  worklogDetails( id ) : Workhours {
    for ( var i = 0 ; i < this.rawworkhours.length ; i++ ) {
      if ( this.rawworkhours[i].id == id )  {
        return this.rawworkhours[i];
      }
    }
    return null;
  }
}
