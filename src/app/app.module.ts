import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdfComponent } from './tdf/tdf.component';
import { VdfComponent } from './vdf/vdf.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { ChildComponent } from './child/child.component';
import { OutputComponent } from './output/output.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
@NgModule({
  declarations: [
    AppComponent,
    TdfComponent,
    VdfComponent,
    TestComponent,
    ChildComponent,
    OutputComponent,
    StudentdetailsComponent,
    StudentlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
