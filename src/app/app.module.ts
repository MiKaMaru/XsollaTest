import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';

import { ChartModule } from 'primeng/chart';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    ButtonModule,
    FormsModule,
    ChartModule,
    BrowserModule,
    AppRoutingModule,
    TableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TabMenuModule,
    MenuModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
