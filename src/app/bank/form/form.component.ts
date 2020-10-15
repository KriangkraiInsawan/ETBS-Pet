import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

id:any;
bankform:any;
bankdata:FormGroup;


  constructor(private fb: FormBuilder,private bankService:BankService,private route:ActivatedRoute) {}

  onSubmit() {
    alert('Thanks!');
  }

  ngOnInit(): void {
// console.log(this.route.snapshot.data.item.data)
let data = this.route.snapshot.data.item.data;
this.bankdata = this.createform(data)
console.log(this.bankdata)
  }



createform(data){
  return this.fb.group({
    name:data.name,
    image:data.image
  })
}




}
