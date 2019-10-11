import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cols: any[];
  token;

  constructor(private service: CommonService, private http: HttpClient) { }

  ngOnInit() {
    this.cols = [
      { field: 'sno', header: 'Sr.No' },
      { field: 'monthlyInstallment', header: 'Monthly Installment' },
      { field: 'interest', header: 'Interest' },
      { field: 'principal', header: 'Principal' },
      { field: 'balance', header: 'Balance' },
    ];

    if (localStorage.getItem("UserDetails") != null) {
      let localUser = localStorage.getItem("UserDetails");
      this.token = JSON.parse(localUser).token;
      console.log(this.token);
    }

  }

}
