import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Login, SignUp } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller:SellerService,private  router:Router) {}
  showLogin=false;
  authError:string="";
  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  signUp(data:SignUp): void{
    // console.warn(data);
     this.seller.userSignUp(data)
     //.subscribe((result)=>{
    //   console.warn(result);
    //   if(result){
    //     this.router.navigate(['seller-home']);
    //   }
    // }
   // );
  }
  login(data:Login): void{
    // console.warn(data);
    this.authError="";
     this.seller.userLogin(data);
     this.seller.isLogginError.subscribe((e)=>{
       if(e){
        this.authError="Email or Password is incorrect";
       }
     })
  }
  openLogin(){
    this.showLogin=true;
  }
  openSignup(){
    this.showLogin=false;
  }

}
