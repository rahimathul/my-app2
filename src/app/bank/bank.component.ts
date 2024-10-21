import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent {
  bank:any=[];
  constructor(private _bankService:BankService){

    _bankService.getbank().subscribe(
      (data:any)=>{
        this.bank=data;
      },
      (error:any)=>{
        alert("internal server error")
      }
    )
  }
}
    
