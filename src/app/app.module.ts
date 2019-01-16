import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/issues.component';
import { IsDetailComponent } from './is-detail/is-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    IsDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
