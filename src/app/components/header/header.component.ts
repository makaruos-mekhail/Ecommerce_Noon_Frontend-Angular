import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ICategory } from "src/app/Models/icategory";
import { CategoyService } from "src/app/Services/categoy.service";
import { ProductService } from "src/app/Services/product.service";
import { Location } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements  OnInit{

  categoriesList: ICategory[] = [];


  userFormGroup: FormGroup;
  userloginFormGroup: FormGroup;

  constructor(private categoryservice: CategoyService,private productservice: ProductService,private router :Router, private location :Location,private formBulider : FormBuilder)
  {
       //Get Dropdown category
       this.categoryservice.getAllCategories().subscribe((data) => {
       console.log(data);
       this.categoriesList = data;
       });



       this.userFormGroup = this.formBulider.group({
        // create Account
        ufirstName : ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]{4,10}')]],
        ulastName : ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]{4,10}')]],
        Uemail :['',[Validators.required,Validators.pattern('[a-zA-Z0-9]{4,15}@(gmail|yahoo)(.com)')]],
        Upassword :['',[Validators.required,Validators.pattern('[a-zA-Z]{4,10}[0-9]{2}@')]],


        // login in
        Emaillogin :['',[Validators.required,Validators.pattern('[a-zA-Z0-9]{4,15}@(gmail|yahoo)(.com)')]],
        Passwordlogin :['',[Validators.required,Validators.pattern('[a-zA-Z]{4,10}[0-9]{2}@')]],
      });



      this.userloginFormGroup = this.formBulider.group({

      });

  }


  ngOnInit(): void {

  }

  searchpro(str :any){
    this.router.navigate(['AllCategory',str]);

  }




    //convert firstname to property
    get Fname(){
      return this.userFormGroup.get('ufirstName');
    }
    get Lname(){
      return this.userFormGroup.get('ulastName');
    }
    get EmailU(){
      return this.userFormGroup.get('Uemail');
    }
    get passwordU(){
      return this.userFormGroup.get('Upassword');
    }



    get EmailLogin(){
      return this.userFormGroup.get('Emaillogin');
    }
    get PassLogin(){
      return this.userFormGroup.get('Passwordlogin');
    }
}
