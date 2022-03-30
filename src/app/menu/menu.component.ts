import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  links:any[] = [];
  constructor() {
     this.webFun();
  //this.links = [
  //  {title:'Google',link:'https://google.com', target:'_blank'},
  //  {title:'Yahoo',link:'https://yahoo.com', target: '_blank'},
  //  {title:'Ynet', link:'https://ynet.co.il', target:'_blank'},
  //  {title:'Walla', link:'https://walla.co.il', target:'_blank'},
  //];

   }

  ngOnInit(): void {
  }

  webFun(){
    this.links.push({title: 'Google',link:'https://www.google.com'});
    this.links.push({title: 'Yahoo',link:'https://www.yahoo.com'});
    this.links.push({title: 'Ynet',link:'https://www.ynet.co.il'});
    this.links.push({title: 'Walla',link:'https://www.walla.co.il'});
  }

}
