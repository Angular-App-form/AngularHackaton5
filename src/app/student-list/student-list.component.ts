import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  elements: any = [];
  headElements = ['ID', 'Full Name', 'Municipality', 'Contact', 'Action'];
  constructor() { }

  ngOnInit() {

    for (let i = 1; i <= 15; i++) {
      this.elements.push({
        id: i, fullName: 'User' + i, municipality: 'Municipality ' + i, contact: 'Contact ' + i, handle:
          'Handle ' + i
      });
    }
  }
  }


