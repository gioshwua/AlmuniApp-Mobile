import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingPageModule),
  },
  {
    path: 'alumni-tab',
    loadChildren: () =>
      import('./alumni-tab/alumni-tab.module').then(
        (m) => m.AlumniTabPageModule
      ),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./news/news.module').then((m) => m.NewsPageModule),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./events/events.module').then((m) => m.EventsPageModule),
  },

  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'register1',
    loadChildren: () =>
      import('./register1/register1.module').then((m) => m.Register1PageModule),
  },
  {
    path: 'register2',
    loadChildren: () =>
      import('./register2/register2.module').then((m) => m.Register2PageModule),
  },
  {
    path: 'register3',
    loadChildren: () =>
      import('./register3/register3.module').then((m) => m.Register3PageModule),
  },
  {
    path: 'jobs',
    loadChildren: () =>
      import('./jobs/jobs.module').then((m) => m.JobsPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'sendmail',
    loadChildren: () =>
      import('./sendmail/sendmail.module').then((m) => m.SendmailPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
