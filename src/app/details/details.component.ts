import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { WorklogService } from '../worklog.service';
import { Workhours } from '../workhours.class';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  id : string; 
  workhours : Workhours;

  constructor(private route: ActivatedRoute,
    private router: Router , 
    private service : WorklogService) {

    }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.workhours = this.service.worklogDetails(+this.id);
  }

  initialize() {
  }

}
