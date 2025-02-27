import { HttpClient } from '@angular/common/http';
import { Component, inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-put-postapi',
  imports: [FormsModule],
  templateUrl: './put-postapi.component.html',
  styleUrl: './put-postapi.component.css'
})
export class PutPostapiComponent implements OnInit{
departmentList : any[]=[];
deptuserObj:any ={
  "departmentId":0,
  "departmentName":"",
  "departmentLogo":""
}
http= inject(HttpClient);
ngOnInit(): void {
  this.getDepartment();
    
}
onSave(){
  debugger;
  this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.deptuserObj).subscribe((res:any)=>{
    debugger;
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

}
