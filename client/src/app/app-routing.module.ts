import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrokerListComponent} from './broker-list/broker-list.component';
import {FooterComponent} from './footer/footer.component';
import {BrokerDetailComponent} from './broker-detail/broker-detail.component';

const routes: Routes = [
  {path: '', component: BrokerListComponent},
  {path: 'brokerdetail/:id', component: BrokerDetailComponent},
  //{path: 'brokerdetail/:id/:name', component: BrokerDetailComponent},
  {path: 'footer', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
