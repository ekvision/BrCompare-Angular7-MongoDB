import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './broker-list.component.html',
  styleUrls: ['./broker-list.component.scss']
})
export class BrokerListComponent implements OnInit {

  brokers = [
    {id: 2, name: 'Admiral Market', assessment: '92%'},
    {id: 3, name: 'Tickmill', assessment: '90%'},
    {id: 1, name: 'FxPro', assessment: '81%'},
    {id: 4, name: 'Pepperstone'},
    {id: 5, name: 'AxiTrader'},
    {id: 6, name: 'AVA Trade', link: 'http://www.avatraderussia.ru/join-ava/real-account?tradingplatform=2&dealtype=1&mtsrv=mt1&tag=88228&tag2=~profile_default'},
    {id: 7, name: 'Orbex'},
    {id: 8, name: 'XM'},
  ];
  //link: string;

  constructor(private router: Router) { }

  goToBroker(broker) {
    window.open(broker.link, "_blank")
  }
  // brokerDetailShow(broker){
  //   this.router.navigate(['/footer']);
  // }

  ngOnInit(){
  }

}
