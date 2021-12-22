import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employ } from '../emp';
import { ListService } from '../list.service';

@Component({
  selector: 'app-emp-upd',
  templateUrl: './emp-upd.component.html',
  styleUrls: ['./emp-upd.component.css']
})
export class EmpUpdComponent implements OnInit {
  employ=new Employ();
  userForm:FormGroup|any;
  @Input() public parentdata:any;
  constructor(private ps:ListService,private router:Router) { }
  onSubmit()
  {
if(this.parentdata){
  console.log("this.employ");
  this.ps.update(this.employ.id,this.employ).subscribe((res)=>{

    console.log("crea",res);
  })
}
else{
this.ps.create(this.employ).subscribe((res)=>{
  alert("succesfully added");

  this.router.navigate([""])
  console.log("success",res);
})
}


    console.log(this.employ);
    
  }



  ngOnInit() {
    if(this.parentdata){
      this.employ=this.parentdata
    }
  console.log(this.parentdata)

  }

}
