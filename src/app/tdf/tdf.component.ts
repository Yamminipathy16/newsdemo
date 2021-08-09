import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {
  user:Users=new Users('','','');
  constructor() { }

  ngOnInit(): void {
  }
  Login(loginForm:any){
    console.log(loginForm.value);
  }

}
class Users
{
  username:string;
  password:string;
  cpassword:string;
  constructor(username: string,password: string,cpassword: string)
  {
    this.username=username;
    this.password=password;
    this.cpassword=cpassword;
  }
}
