import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { userloginObj } from '../../../model/department';
@Component({
  selector: 'app-login-component',
  imports: [FormsModule,CommonModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
  
userList: userloginObj[]=[];
constructor(private http:HttpClient){

}

loginAlert (message :string){
  alert(message);
}
userloginObj:userloginObj=new userloginObj();

 htttp =inject(HttpClient);
 onSave(){
  debugger;
  this.http.post("http://103.191.130.38/api/Authentication",this.userloginObj).subscribe((res:any)=>{
   debugger;
    if(res.result){
      alert ("login sucess");
    }else{
      alert(res.msg)
    }
  })

 }

}
