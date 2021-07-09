import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TableroComponent } from './tablero/tablero.component';
import { BuscaminasComponent } from './buscaminas/buscaminas.component';
import { TatetiBoardComponent } from './tateti-board/tateti-board.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'memorygame', component: TableroComponent },
  { path: 'buscaminas', component: BuscaminasComponent },
  { path: 'tateti', component: TatetiBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routinComponents = [
  HomepageComponent,
  TableroComponent,
  BuscaminasComponent,
  TatetiBoardComponent,
];
