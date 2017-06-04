import { Component, OnInit, OnDestroy} from '@angular/core';
import template from './user.component.html';
import { textContent } from './user.component.styl';

@Component({
  selector: 'app-user',
  template,
  styles: [textContent]
})
export class UserComponent implements OnDestroy, OnInit{

  username: string;
  name:string;
  password:string;
  cofpassword:string;
  email:string;
  avatar :string;
  
  ngOnInit(){

  }
  onSubmit(){
    if(this.password==this.cofpassword)
    console.log(this.name,this.username,this.password,this.email,this.avatar);
  }

  ngOnDestroy(){
    
  }
}
