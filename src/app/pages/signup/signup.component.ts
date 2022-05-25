import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService, private snack:MatSnackBar) { }

  public user ={
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    };

  ngOnInit(): void {
  }


  formSubmit(){
    console.log(this.user);
    if(this.user.username=='' || this.user.username==null){
      this.snack.open('username is required' , '',{
        duration: 3000,
        //verticalPosition: 'top',
        //horizontalPosition: 'left',
      });

      return ;
    }
    if(this.user.password=='' || this.user.password==null){
      this.snack.open('password is required' , '',{
        duration: 3000,
        //verticalPosition: 'top',
        //horizontalPosition: 'left',
      });

      return ;
    }
    if(this.user.firstName=='' || this.user.firstName==null){
      this.snack.open('firstName is required' , '',{
        duration: 3000,
        //verticalPosition: 'top',
        //horizontalPosition: 'left',
      });

      return ;
    }
    if(this.user.lastName=='' || this.user.lastName==null){
      this.snack.open('lastName is required' , '',{
        duration: 3000,
        //verticalPosition: 'top',
        //horizontalPosition: 'left',
      });

      return ;
    }
    if(this.user.email=='' || this.user.email==null){
      this.snack.open('email is required' , '',{
        duration: 3000,
        //verticalPosition: 'top',
        //horizontalPosition: 'left',
      });

      return ;
    }
    if(this.user.phone=='' || this.user.phone==null){
      this.snack.open('phone is required' , '',{
        duration: 3000,
        //verticalPosition: 'top',
        //horizontalPosition: 'left',
      });

      return ;
    }
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        console.log(data)
        Swal.fire('Success','Congrat ' +' ' +data.username + ' you have been successfully registred','success')
      },
      (error: any)=>{
        console.log(error)
        this.snack.open('something went wrong' , '',{
          duration: 3000
        });
      }
    )
  }

}
