import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  myInput:string = '';
  num:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  clickNum(val: any){
    if(this.num){
        this.myInput = val;
        this.num = false;
    }else{
        this.myInput +=  val;
    }
}
enterOperator(val:any){
    this.myInput =this.myInput +  val;
    this.num = false;

}
clear(){
    this.myInput = '';

}
equal(){
    this.myInput = eval(this.myInput);
    this.num = true; 
}

}

