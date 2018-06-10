import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  sche: any;
  token: string;
  id: string;
  tutorProfile:any;
  // baseUrl= 'http://learnspace.co.nz/api/public/api'
  baseUrl= 'http://proprius.co.nz/api/public/api'

  headers1= new HttpHeaders({
    //  'Content-Type':  'application/json',
      'Authorization': "Bearer "+localStorage.getItem('lsaToken_access')});

  constructor(private http:HttpClient) {
  }
  // getTutorSchedules(){
  //   this.id = localStorage.getItem('lsaUserId');
  //   this.sche=this.http.get(this.baseUrl+'/tutorschedule/'+this.id);
  //   return this.sche
  // }
  //
  getDashboardProfile(){
    this.id = localStorage.getItem('lsaUserId');
    console.log(this.id);
    this.tutorProfile =  this.http.get(this.baseUrl+'/tutorsedit/'+this.id, {headers: this.headers1})
    return this.tutorProfile
  }
  //
  // updateTutor(tutorUpdate ){
  //   this.id = localStorage.getItem('lsaUserId');
  //   return this.http.post(this.baseUrl+'/tutorsedit/'+this.id, tutorUpdate, {headers: this.headers1});
  // }
  //
  // newPost(aa){
  //   this.id = localStorage.getItem('lsaUserId');
  //   return this.http.post(this.baseUrl+'/tutors/'+this.id+'/post', aa, {headers: this.headers1});
  // }

  newPost2(aa){
    console.log(aa)
      this.id = localStorage.getItem('lsaUserId');
      return this.http.post(this.baseUrl+'/tutors/'+this.id+'/resourcepost', aa, {headers: this.headers1});
  }


}
