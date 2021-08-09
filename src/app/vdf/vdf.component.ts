import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vdf',
  templateUrl: './vdf.component.html',
  styleUrls: ['./vdf.component.css']
})
export class VdfComponent implements OnInit {
  ReactiveLogin=new FormGroup({
    uname:new FormControl('',[Validators.required,Validators.minLength(5)]),
    pwd:new FormControl(),
    cpwd:new FormControl(),
    ct:new FormControl(),
    ra1:new FormControl('',[Validators.required]),
    
  })
  constructor() { }

  ngOnInit(): void {
  }
  Check()
  {
    console.log(this.ReactiveLogin.value);
  }
  get uname1()
  {
    return this.ReactiveLogin.get('uname');
  }
  get pwd1()
  {
    return this.ReactiveLogin.get('pwd');
  }
  get cpwd1()
  {
    return this.ReactiveLogin.get('cpwd');
  }
  get ct1()
  {
    return this.ReactiveLogin.get('ct');
  }
  get rd1()
  {
    return this.ReactiveLogin.get('ra1');
  }
  
}
