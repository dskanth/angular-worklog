import { Component, OnInit } from '@angular/core';

import { WorklogService } from '../worklog.service';
import { Workhours } from '../workhours.class';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-worklog',
  templateUrl: './worklog.component.html',
  styleUrls: ['./worklog.component.css'],
  providers: [  ]
})

export class WorklogComponent implements OnInit {

  projectModel:String;
  taskModel: String;
  dateModel: String;
  detailsModel: String;
  workhours: Workhours[];
  totalWorkhours: number;

  constructor(private worklogService : WorklogService, private router: Router) {
    // initialize model values to ''
    this.projectModel = '';
    this.taskModel = '';
    this.dateModel = '';
    this.detailsModel = '';

    // add the workhour to workhours array 
    this.workhours = worklogService.getWorkhours();
    this.totalWorkhours = this.workhours.length;
  }

  ngOnInit() {
  }

  // add function to create new worklog entries
  createWorklog() {
    this.totalWorkhours += 1;
    // initialize a new worklog using data coming from template [ using 2 way data binding ]
    let newWorkhours : Workhours = {
      id : this.getId(),
      project: this.projectModel , 
      task : this.taskModel , 
      date : this.dateModel,
      details: this.detailsModel
    };
    
    // push the newly created Workhours object to Workhours array 
    this.workhours.push( newWorkhours );
    
    // set the model values to '' again 
    this.projectModel = this.taskModel = this.dateModel = this.detailsModel = ''; 
  }

  details( id ) {
    this.router.navigate(['/details' , id ]);
  }

  getId() {
    return this.totalWorkhours;
  }
}
