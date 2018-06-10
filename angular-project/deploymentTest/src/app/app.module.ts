import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NewResourceComponent } from './new-resource/new-resource.component';
import { IndexComponent } from './index/index.component';
import { TutoringSessionComponent } from './tutoring-session/tutoring-session.component';
import { PostServiceService } from './post-service.service';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule,FormGroup,FormControl, Validators, NG_VALIDATORS,FormBuilder } from '@angular/forms';


const appRoutes: Routes=[

  {path:'', component: IndexComponent},
{path:'new-resource', component: NewResourceComponent},
{path:'tutoring-session', component: TutoringSessionComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NewResourceComponent,
    IndexComponent,
    TutoringSessionComponent
  ],
  imports: [
    BrowserModule,AngularFontAwesomeModule,  RouterModule.forRoot(appRoutes),FormsModule,HttpClientModule,ReactiveFormsModule

  ],
  providers: [PostServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
