import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './components/main-view/main-view.component';


const routes: Routes = [
  { path: '', redirectTo: 'boards', pathMatch: 'full' },
  { path: 'boards', component: MainViewComponent},
  { path: 'boards/:boardId', component: MainViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
