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
import { CookieService } from "ngx-cookie-service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})

export class HeaderComponent implements OnInit {


  categoriesList: ICategory[] = [];

  lang = localStorage.getItem('lang');

  userFormGroup!: FormGroup;

  filterTerm!: string;

  constructor(
    private categoryservice: CategoyService,
    private router: Router,
    private translate: TranslateService,
    private formBulider: FormBuilder,
    private userservice: UserService,
    private interactionservice:InteractionService,
    private cookieService: CookieService
    )
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
    // this.userFormGroup = this.formBulider.group({
    //   // create Account
    //   firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{3,20}')]],
    //   lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{3,20}')]],
    //   email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{3,}@(gmail|yahoo)(.com)')]],
    //   password: ['', [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$")]],


    //   // login in
    //   emailLogin: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{4,15}@(gmail|yahoo)(.com)')]],
    //   Passwordlogin: ['', [Validators.required, Validators.pattern('[a-zA-Z]{4,10}[0-9]{2}@')]],
    // }); 
    this.userFormGroup = this.formBulider.group({
      // create Account
      ufirstName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{4,10}')]],
      ulastName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{4,10}')]],
      Uemail: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{4,15}@(gmail|yahoo)(.com)')]],
      Upassword: ['', [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
      )]],


      // login in
      Emaillogin: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{4,15}@(gmail|yahoo)(.com)')]],
      Passwordlogin: ['', [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$")]],
    });
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
//------------------ Translate --------------
selectedLanguage(event: any) {

  // this.translate.use(event.target.value);
    // ---------- set lang in local storage --------------
  localStorage.setItem('lang', event.target.value);
  this.translate.use(this.lang?this.lang:'en');
    location.reload();
    
  }


  searchpro(str: string) {
    this.router.navigate(['/AllCategory'])
    setTimeout(() => {
      this.interactionservice.sendAll(str);
    }, 100);
  
  }
  //navbar sub categories
  SubCategory(cat: string) {
    this.router.navigate(['/AllCategory']);
    setTimeout(() => {
      this.interactionservice.sendAll(undefined,cat);
    }, 100);
  }

  //parent cat

  UserEmail!: string;

  ///login user
  LogIn(email: string, pass: string) {
    var logiuser = new Login(email, pass);
    this.userservice.logIn(logiuser).subscribe({
      next: (data) => {
        window.location.reload();
        this.cookieService.set("useremail",email);
        console.log("Login success");

      }, error: (err) => {
        console.log(err.message);
      }
    }
    );
  }
   

  emailIsExist :boolean = false;
  //register 
  Registeration(email:string, pass:string, fname:string, lname:string) {
    var registeruser = new Register(email, pass, fname, lname);
    this.userservice.Registeruser(registeruser).subscribe({
      next: (data) => {
        this.LogIn(email, pass);
        window.location.reload();
        console.log("registeration success");
        
       // this.router.navigate(['/Home']);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.message);
        this.emailIsExist = true;
      } 
    }
    );
   
  }

  // cart quantity
  cartQuantity!: number;
  ngOnInit(): void {
    this.interactionservice.addToCart$.subscribe((data) => {
      this.cartQuantity = data[0];
    });
    if(this.cookieService.get('cart')!=null){
      this.cartQuantity = JSON.parse(this.cookieService.get('cart')).reduce((acc: any, item: any) => acc + item.quantity, 0);
    }
  }
  
  // ---------------- logout ---------------------
  // logout() {
  //   this.userservice.logout().subscribe({
  //     next: (data) => {
  //       window.location.reload();
  //       //this.router.navigate(['/Home']);
  //     }
  //   });
  // }
}


