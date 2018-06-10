import { Component, OnInit } from '@angular/core';
import {Session} from './tutoring_session.model'

@Component({
  selector: 'app-tutoring-session',
  templateUrl: './tutoring-session.component.html',
  styleUrls: ['./tutoring-session.component.css']
})
export class TutoringSessionComponent implements OnInit {



    today = new Date();

    _isCompleted=false;

    _session = new Session("Room 101, Level 4, Business School, University of Auckland, Auckland CBD", this.today, "Mark", "Maths", "Session detials", 2, "Teaching Method","",1, "Completed", "Student Requirements")
    constructor( ) {


     }

    ngOnInit() {
    }
    public isValidForm() {
     // statement(s) will execute if the boolean expression is true
     if (this._session.state=="Completed") {
         this._isCompleted=true;
     }
     return this._isCompleted;
    }

    private onConfirm(){

    }

}
