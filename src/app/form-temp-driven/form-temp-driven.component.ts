import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-temp-driven',
  templateUrl: './form-temp-driven.component.html',
  styleUrls: ['./form-temp-driven.component.css']
})
export class FormTempDrivenComponent implements OnInit {
  person:any = {};
  //person:{firstName:string,lastName:string,iD:string} = {firstName:'',lastName:'',iD:''};
  constructor() { }

  ngOnInit(): void {
  }

  getInfoFrom(info:any){
    this.person = info;
  }
}
