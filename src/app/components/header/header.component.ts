import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ICategory } from "src/app/Models/icategory";
import { CategoyService } from "src/app/Services/categoy.service";
import { ProductService } from "src/app/Services/product.service";
import { Location } from '@angular/common';
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";
import DetailsComponent from "../details/details.component";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IUserLogin } from "src/app/Models/iuser-login";
import { Login } from "src/app/Models/login";
import { UserService } from "src/app/Services/user.service";
import { Register } from "src/app/Models/register";
import { InteractionService } from "src/app/Services/interaction.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent  {

  categoriesList: ICategory[] = [];

  lang = localStorage.getItem('lang');

  userFormGroup!: FormGroup;
  userloginFormGroup!: FormGroup;

  filterTerm!: string;

  constructor(
    private categoryservice: CategoyService,
    private router: Router,
    private translate: TranslateService,
    private formBulider: FormBuilder,
    private userservice: UserService,
    private interactionservice:InteractionService)
  {
       //Get Dropdown category
       this.categoryservice.getAllCategories().subscribe((data) => {
       console.log(data);
       this.categoriesList = data;
       });
       if (this.lang == null) {
        this.lang = 'en';
      }
    this.translate.use(this.lang);
    
    
    //form
    this.userFormGroup = this.formBulider.group({
      // create Account
      ufirstName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{4,10}')]],
      ulastName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{4,10}')]],
      Uemail: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{4,15}@(gmail|yahoo)(.com)')]],
      Upassword: ['', [Validators.required, Validators.pattern('[a-zA-Z]{4,10}[0-9]{2}@')]],


      // login in
      Emaillogin: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{4,15}@(gmail|yahoo)(.com)')]],
      Passwordlogin: ['', [Validators.required, Validators.pattern('[a-zA-Z]{4,10}[0-9]{2}@')]],
    });
    this.userloginFormGroup = this.formBulider.group({
    });  
  }

//------------------ Translate --------------
selectedLanguage(event: any) {

  // this.translate.use(event.target.value);
    // ---------- set lang in local storage --------------
  localStorage.setItem('lang', event.target.value);
  this.translate.use(this.lang?this.lang:'en');

    // setTimeout(()=>{
    // }, 1000);
    location.reload();
    console.log(event.target.value);
  }
//   search2() {
//     this.interactionservice.sendMessage(this.filterTerm);
// }


  searchpro(str: string) {
    this.router.navigate(['/AllCategory'])
    setTimeout(() => {
      this.interactionservice.sendAll(str);
    }, 100);
  

    //this.interactionservice.sendMessage(str);
   
  }
  //convert firstname to property
  get Fname() {
    return this.userFormGroup.get('ufirstName');
  }
  get Lname() {
    return this.userFormGroup.get('ulastName');
  }
  get EmailU() {
    return this.userFormGroup.get('Uemail');
  }
  get passwordU() {
    return this.userFormGroup.get('Upassword');
  }
  get EmailLogin() {
    return this.userFormGroup.get('Emaillogin');
  }
  get PassLogin() {
    return this.userFormGroup.get('Passwordlogin');
  }
  ///login user
  LogIn(email: string, pass: string) {
    var logiuser = new Login(email, pass);
    this.userservice.logIn(logiuser).subscribe({
      next: (data) => {
        window.location.reload();
        //this.router.navigate(['/Cart']);
      }, error: (err) => {
        console.log(err.message);
      }
    }
    );
  }
  //register 
  Registeration(email:string, pass:string, fname:string, lname:string) {
    var registeruser = new Register(email, pass, fname, lname);
    this.userservice.Registeruser(registeruser).subscribe({
      next: (data) => {
        this.LogIn(email, pass);
        window.location.reload();
       // this.router.navigate(['/Home']);
      },
      error: (err) => {
        console.log(err.message);
      }
    }
    );
  }
  }


