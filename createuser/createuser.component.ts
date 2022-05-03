import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {


  user: User= new User();
  constructor(private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {

  }

  goToUserList(){
    this.router.navigate(['/users'])
  }

  saveUser(){
    this.userService.createUser(this.user).subscribe(data=>{
      console.log(data);
      alert(`Thank you ${this.user.firstName} for Registering!`);
      this.goToUserList();
    })

  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
  };




}
