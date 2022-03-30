import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-meter',
  templateUrl: './temp-meter.component.html',
  styleUrls: ['./temp-meter.component.css']
})
export class TempMeterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tempDesc:string = '';

  tempFunc(temp:Number){

  }

}
