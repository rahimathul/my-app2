import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
    a:number=0;
    res:number=0;
    cir(){
      this.res=this.a*this.a*3.14;

    }
    
   
    
  
  }


