import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Notice } from './notice/notice';
import { Contect } from './contect/contect';
import { Gallery } from './gallery/gallery';
import { Admission } from './admission/admission';
import { About } from './about/about';

export const routes: Routes = [
      {
    path: '',
    component: Home
  },
       {
    path: 'about',
    component: About
  },
       {
    path: 'admission',
    component: Admission
  },
       {
    path: 'gallery',
    component: Gallery
  },
       {
    path: 'contact',
    component: Contect
  },
       {
    path: 'notice',
    component: Notice
  },
];
