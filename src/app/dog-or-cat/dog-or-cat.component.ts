import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-or-cat',
  templateUrl: './dog-or-cat.component.html',
  styleUrls: ['./dog-or-cat.component.css']
})
export class DogOrCatComponent implements OnInit {


  picVisable:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }



  witchOne(){
    this.picVisable = !this.picVisable
  }
}
