import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanActivateGuard } from './guards/can-activate.guard';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: '**',
    component: Pagina404Component
  }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }