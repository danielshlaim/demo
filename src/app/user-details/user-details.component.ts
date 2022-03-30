import { Component, OnInit } from '@angular/core';
import type {User} from '../Interface/User';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user:User =  {
    name:'Person1',
    email:'Person123@gmail.com',
    birthDate:Date.parse('1996-08-04'),
    contact:'Email',
  };
  color:string = 'orange'; // 1
  switchColor:boolean = false; //2
  change :boolean =true; //3
  onOff:boolean = true;
  MyClass:any = {};

  someObj = {};

  constructor() {
     this.rightWrong();
     this.setMyClasses();
   }

  getsomestring(){
    return 'Wow!';
  }

  calculateAge(dateOfBirth:any){
    let dob = new Date(dateOfBirth);
    let diff_ms = Date.now() - dob.getTime();
    let age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  rightWrong(){
    this.someObj = {
      'color': this.change ? 'blue' : 'red',
      'font-size' : this.change ? '100px': '30px',
    }
  }

  setMyClasses(){
    this.MyClass = {
      'style1':true,
      'style2': false,
    }
  }

  ngOnInit(): void {
  }

}
