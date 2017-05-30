import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.styl']
})
export class UserComponent {

  username: string;
  name:string;
  password:string;
  cofpassword:string;
  email:string;
  avatar :string;

  onSubmit(){
    if(this.password==this.cofpassword)
    console.log(this.name,this.username,this.password,this.email,this.avatar);
  }
}
