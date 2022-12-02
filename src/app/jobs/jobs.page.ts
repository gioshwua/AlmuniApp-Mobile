import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage {
  page = 0;
  perPage = 5;
  array: any[] = [
    {
      id: 1,
      image: 'pic ',
      company: 'COMPANY NAME',
      comloc: 'LOCATION',
      positions:
        '(Positions they are hiring e.g Project Manager | IT Consultant | Software Developer)',
      quali: 'College Graduate with degree in IT',
    },
    {
      id: 2,
      image: 'pic ',
      company: 'COMPANY NAME',
      comloc: 'LOCATION',
      positions:
        '(Positions they are hiring e.g Project Manager | IT Consultant | Software Developer)',
      quali: 'College Graduate with degree in IT',
    },
    {
      id: 3,
      image: 'pic ',
      company: 'COMPANY NAME',
      comloc: 'LOCATION',
      positions:
        '(Positions they are hiring e.g Project Manager | IT Consultant | Software Developer)',
      quali: 'College Graduate with degree in IT',
    },
    {
      id: 4,
      image: 'pic ',
      company: 'COMPANY NAME',
      comloc: 'LOCATION',
      positions:
        '(Positions they are hiring e.g Project Manager | IT Consultant | Software Developer)',
      quali: 'College Graduate with degree in IT',
    },
    {
      id: 5,
      image: 'pic ',
      company: 'COMPANY NAME',
      comloc: 'LOCATION',
      positions:
        '(Positions they are hiring e.g Project Manager | IT Consultant | Software Developer)',
      quali: 'College Graduate with degree in IT',
    },
    {
      id: 6,
      image: 'pic ',
      company: 'COMPANY NAME',
      comloc: 'LOCATION',
      positions:
        '(Positions they are hiring e.g Project Manager | IT Consultant | Software Developer)',
      quali: 'College Graduate with degree in IT',
    },
    {
      id: 7,
      image: 'pic ',
      company: 'COMPANY NAME',
      comloc: 'LOCATION',
      positions:
        '(Positions they are hiring e.g Project Manager | IT Consultant | Software Developer)',
      quali: 'College Graduate with degree in IT',
    },
    {
      id: 8,
      image: 'pic ',
      company: 'COMPANY NAME',
      comloc: 'LOCATION',
      positions:
        '(Positions they are hiring e.g Project Manager | IT Consultant | Software Developer)',
      quali: 'College Graduate with degree in IT',
    },
    {
      id: 9,
      image: 'pic ',
      company: 'COMPANY NAME',
      comloc: 'LOCATION',
      positions:
        '(Positions they are hiring e.g Project Manager | IT Consultant | Software Developer)',
      quali: 'College Graduate with degree in IT',
    },
    {
      id: 10,
      image: 'pic ',
      company: 'COMPANY NAME',
      comloc: 'LOCATION',
      positions:
        '(Positions they are hiring e.g Project Manager | IT Consultant | Software Developer)',
      quali: 'College Graduate with degree in IT',
    },
  ];
  lists: any[] = [];

  constructor(private loadingCtrl: LoadingController) {}

  ngOnInit(): void {
    this.lists = this.paginateArray();
  }

  paginateArray() {
    this.page++;
    return this.array.filter(
      (x) =>
        x.id > this.page * this.perPage - this.perPage &&
        x.id <= this.page * this.perPage
    );
  }

  loadMore(event) {
    console.log(event);
    setTimeout(() => {
      const array = this.paginateArray();
      console.log('new data: ', array);
      this.lists = this.lists.concat(array);
      console.log('list data: ', this.lists);
      event.target.complete();
      if (array?.length < this.perPage) {
        event.target.disabled = true;
      }
    }, 1000);
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Retrieving Data...',
      duration: 2000,
      spinner: 'circles',
    });

    loading.present();
  }
}
