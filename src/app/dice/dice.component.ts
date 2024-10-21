import { Component } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {
    num1:number=0;
    result:number=0;
    dice(){
        const rndint=Math.floor(Math.random()*6)+1;
        this.num1=rndint;
        this.result=this.num1;
    }
    
}

