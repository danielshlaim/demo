import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codyright',
  template: `<p class="copy"> copyright: {{name}} , current year: {{getYear()}}</p>`,
  styles:[`
    .copy{
      font-weight:700; 
      color:gray;
    };
    
  
  
  `],
})
export class CodyrightComponent implements OnInit {

  constructor() { }

  name:string = 'daniel';

  getYear() : number{
    let date =  new Date;
     let year = date.getFullYear();
     return year;
  }

  ngOnInit(): void {
  }

}
