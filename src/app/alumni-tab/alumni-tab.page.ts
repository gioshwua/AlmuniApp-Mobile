import { Component, OnInit } from '@angular/core';
import { RequestlibService } from '../Services/requestlib.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-alumni-tab',
  templateUrl: './alumni-tab.page.html',
  styleUrls: ['./alumni-tab.page.scss'],
})
export class AlumniTabPage {
  page = 0;
  perPage = 5;
  array: any[] = [
    {
      id: 1,
      image: 'pic ',
      name: 'Yeet',
      address: 'dummy address',
      department: '12344556',
      course: 'BSCS',
      stat: 'TAMBAY',
    },
    {
      id: 2,
      image: 'pic ',
      name: 'Hubert Espinola',
      address: 'dummy',
      department: 'ffdfdfsdfdfsfrs',
      course: 'BSCS',
      stat: 'TAMBAY',
    },
    {
      id: 3,
      image: 'pic ',
      name: 'Jello Santos',
      address: 'dummy',
      department: '545454545',
      course: 'BSCS',
      stat: 'TAMBAY',
    },
    {
      id: 4,
      image: 'pic ',
      name: 'Joshua Reano',
      address: 'dummy address',
      department: '12344556',
      course: 'BSCS',
      stat: 'TAMBAY',
    },
    {
      id: 5,
      image: 'pic ',
      name: 'Joshua Reano',
      address: 'dummy address',
      department: '12344556',
      course: 'BSCS',
      stat: 'TAMBAY',
    },
    {
      id: 6,
      image: 'pic ',
      name: 'Joshua Reano',
      address: 'dummy address',
      department: '12344556',
      course: 'BSCS',
      stat: 'TAMBAY',
    },
    {
      id: 7,
      image: 'pic ',
      name: 'Joshua Reano',
      address: 'dummy address',
      department: '12344556',
      course: 'BSCS',
      stat: 'TAMBAY',
    },
    {
      id: 8,
      image: 'pic ',
      name: 'Joshua Reano',
      address: 'dummy address',
      department: '12344556',
      course: 'BSCS',
      stat: 'TAMBAY',
    },
    {
      id: 9,
      image: 'pic ',
      name: 'Joshua Reano',
      address: 'dummy address',
      department: '12344556',
      course: 'BSCS',
      stat: 'TAMBAY',
    },
    {
      id: 10,
      image: 'pic',
      name: 'Joshua Reano',
      address: 'dummy address',
      department: '12344556',
      course: 'BSCS',
      stat: 'TAMBAY',
    },
  ];
  lists: any[] = [];

  constructor(
    private requestlib: RequestlibService,
    private loadingCtrl: LoadingController
  ) {}

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
