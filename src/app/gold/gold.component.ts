import {Component, OnInit} from '@angular/core';
import {exhaustMap, interval, map, startWith} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {NgxCsvParser} from "ngx-csv-parser";


@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.scss']
})
export class GoldComponent implements OnInit {

  subscribe$!: any;
  product!: any[][];

  constructor(private http: HttpClient, private ngxCsvParser: NgxCsvParser) {
  }

  ngOnInit() {

    this.subscribe$ = interval(5000).pipe(startWith(0), exhaustMap(() =>

      this.http
        .get("/assets/organizations-100.csv", {responseType: 'text'})
        .pipe(
          map(data => {
              this.product = this.ngxCsvParser.csvStringToArray(data, ",");
              console.log(this.product)
            }
          )
        ).pipe(map(() => this.product.splice(0,1))))).subscribe()
  }

  ngOnDestroy() {
    this.subscribe$.unsubscribe();
  }


}
