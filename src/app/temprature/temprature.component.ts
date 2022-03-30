import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temprature',
  templateUrl: './temprature.component.html',
  styleUrls: ['./temprature.component.css']
})
export class TempratureComponent implements OnInit {
  
  tempDesc = '';

  constructor() { }

  ngOnInit(): void {
  }
  
  handleTempChange(temp:string ){
    let tempHasNum = parseFloat(temp);
    if(tempHasNum < 20){
      this.tempDesc = `הטמפרטורה אצלך היא ${temp} - לכן עליך ללבוש מעיל`;
    }else{
      this.tempDesc = `הטמפרטורה אצלך היא ${temp} - איזה כיף! אפשר להסתובב עם חולצה קצרה`;
    }
  }
}
