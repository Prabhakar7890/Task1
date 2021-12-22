import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from '../list.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  employs: any;
  data: any;

  constructor(private lt:ListService, private route:Router) { }

  ngOnInit() {
    this.empDet();
    
   
  }
  empDet(){
      this.lt.getEmp().subscribe(res=>{
        this.employs=res
        console.log(res.id);
      })
  }
 
     toUpdate(id:any){
      this.lt.getslectedrow(id).subscribe((res)=>{
        console.log("update  ts",res)
        this.data=res;
        console.log("checkk",this.data);
        
        this.route.navigate(['update'])
      })
    }
  
  toDelete(id:any){
    this.lt.delEmp(id).subscribe((res)=>{
      console.log("delete ts",res);
this.empDet()      
    })

  }


}

