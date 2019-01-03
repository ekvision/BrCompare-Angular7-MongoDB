import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-broker-detail',
  templateUrl: './broker-detail.component.html',
  styleUrls: ['./broker-detail.component.scss']
})
export class BrokerDetailComponent implements OnInit {

  id: number;
  name: string;
  brBewertung: string;
  regulated: string;
  hebel: string;
  linkGoToBroker: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  goToBroker(){
    window.open(this.linkGoToBroker, "_target")
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.http.get(`http://localhost:4000/brokerdetail/${this.id = params['id']}`)
        .subscribe(data => {
          this.name = data[0].brokerName;
          this.brBewertung = data[0].brBewertung;
          this.regulated = data[0].regulated;
          this.hebel = data[0].hebel;
          this.linkGoToBroker = data[0].linkGoToBroker;
        })
      })
    }

}
