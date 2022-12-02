import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  constructor(private loadingCtrl: LoadingController) {}

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait..',
      duration: 1000,
      spinner: 'circles',
    });

    loading.present();
  }
}
