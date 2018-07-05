import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { InputErrorsExampleComponent } from './input-errors-example/input-errors-example.component';


@NgModule({
  declarations: [
    AppComponent,
    InputErrorsExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
