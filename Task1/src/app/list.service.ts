import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  baseUrl = `${"http://localhost:4000"}/employee`;

  constructor(private hp: HttpClient) { }

  getEmp(): Observable<any> {
    return this.hp.get("http://localhost:4000/employee")
  }
  delEmp(id: any) {
    return this.hp.delete(`${this.baseUrl}/${id}`);
  }
  update(id:any,data:any) {
    console.log("upd serr",id);
    
    return this.hp.put("http://localhost:4000/employee/"+id,data);
  }

  create(data:any):Observable<any>
  {
    console.log("ok")
    return this.hp.post<any>("http://localhost:4000/employee",data);
  }
  
  getslectedrow(id:any):Observable<any>
  {
    console.log("sele serr",id);

    return this.hp.get<any>("http://localhost:4000/employee/"+id);
  }
}
