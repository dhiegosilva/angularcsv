import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoldComponent } from './gold/gold.component';
import { SilverComponent } from './silver/silver.component';
import {FormsModule} from "@angular/forms";
import {NgxCsvParserModule} from "ngx-csv-parser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {TableModule} from "primeng/table";

@NgModule({
  declarations: [
    AppComponent,
    GoldComponent,
    SilverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxCsvParserModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
