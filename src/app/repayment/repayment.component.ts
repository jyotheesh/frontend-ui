import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repayment',
  templateUrl: './repayment.component.html',
  styleUrls: ['./repayment.component.css']
})
export class RepaymentComponent implements OnInit {

  cols: any[];
  cars;

  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'sno', header: 'Sr.No' },
      { field: 'repaidInstallment', header: 'Repaid Installment' },
      { field: 'interest', header: 'Interest' },
      { field: 'principal', header: 'Principal' },
      { field: 'balance', header: 'Balance' },
    ];

  }

}
