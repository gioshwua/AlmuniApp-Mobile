import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  searchTerm: string;
  employees = [
    {
      name: 'TRISTAN',
      position: 'STUDENT',
      department: 'CICS',
    },
    {
      name: 'DIREK MARC',
      position: 'DIRECTOR',
      department: 'CICS',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
