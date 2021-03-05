import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
