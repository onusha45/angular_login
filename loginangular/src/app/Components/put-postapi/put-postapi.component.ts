import { HttpClient } from '@angular/common/http';
import { Component, inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { deptuserObj } from '../../../model/department';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-put-postapi',
  imports: [FormsModule,JsonPipe],
  templateUrl: './put-postapi.component.html',
  styleUrl: './put-postapi.component.css'
})
export class PutPostapiComponent implements OnInit{
departmentList : deptuserObj[]=[];
deptuserObj:deptuserObj=new deptuserObj();
isdelete:boolean = true;
http= inject(HttpClient);

ngOnInit(): void {
  this.getDepartment();
  debugger
    
}
onSave(){
  console.log(JSON.stringify(this.deptuserObj))
  debugger;
  this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.deptuserObj).subscribe((res:any)=>{
    if(res.result){
      alert("Department Created sucessfulley")
      this.getDepartment();
    }else{
      alert(res.message)
    }
  })

}
getDepartment(){
  this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>{
    this.departmentList = res.data;

  })
}
onEdit(data: any){
  this.deptuserObj = data;

}
onUpdate(){
  console.log(JSON.stringify(this.deptuserObj))
  debugger;
  this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment",this.deptuserObj).subscribe((res:any)=>{
    if(res.result){
      alert("Department Created sucessfulley")
      this.getDepartment();
    }else{
      alert(res.message)
    }
  })
  
}
onDelete(id:number){
  alert("Are you sure you want to delete?")
  debugger;
  if (this.isdelete){
  this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" +id).subscribe((res:any)=>{
    if(res.result){
      alert("Department deleted sucessfulley")
      this.getDepartment();
    }else{
      alert(res.message)
    }
  })}

}
}
