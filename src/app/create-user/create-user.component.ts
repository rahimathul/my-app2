import { Component } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  public userform:FormGroup=new FormGroup({
 name:new FormControl(),
 age:new FormControl(),
 phone:new FormControl(),
 email:new FormControl(),
 address:new FormGroup({
 city:new FormControl(),
 pin:new FormControl(),
}),
type:new FormControl(),
//busfee:new FormControl(),
//hostelfee:new FormControl(),
cards:new FormArray([])
})
get cardsformarray(){
  return this.userform.get('cards') as FormArray;
}
addcard(){
  this.cardsformarray.push(
    new FormGroup({
      Number:new FormControl(),
      expiry:new FormControl(),
      cc:new FormControl(),
    })
  )
}
delete(i:number){
  this.cardsformarray.removeAt(i);
  }




  
constructor(){
  this.userform.get('type')?.valueChanges.subscribe(
    (data:any)=>{
      if(data=='dayscholor'){
        this.userform.addControl('busfee',new FormControl());
        this.userform.removeControl('hostelfee');
      }
      else{
        this.userform.addControl('hostelfee',new FormControl());
        this.userform.removeControl('busfee')
      }
      }
    )
      
    


  


}
submit(){
  console.log(this.userform.value);
}

}
