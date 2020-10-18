import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SampleComponent } from './sample/sample.component';
import { MainsComponent } from './mains/mains.component';
import { AdvanceComponent } from './advance/advance.component';
import { CollegeService } from "./college.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SampleComponent,
    MainsComponent,
    AdvanceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "advance",component:SampleComponent },
      { path: "mains",component: MainsComponent},
      { path: "",component: AdvanceComponent}
    ]),
    NgbModule,
   
  ],
  providers: [CollegeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
