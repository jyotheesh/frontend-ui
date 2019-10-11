import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-primeng',
  templateUrl: './table-primeng.component.html',
  styleUrls: ['./table-primeng.component.css']
})
export class TablePrimengComponent implements OnInit {

  @Input() columns = [];

  @Input() rows = [];

  constructor() { }

  ngOnInit() {
  }

}
