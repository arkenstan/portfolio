import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'brittany', pathMatch: 'full' },
  {
    path: 'brittany',
    loadChildren: () =>
      import('src/app/brittany/brittany.module').then((m) => m.BrittanyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
