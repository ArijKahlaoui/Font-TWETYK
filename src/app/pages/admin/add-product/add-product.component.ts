import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from 'src/app/service/product.service';
import { SousCategoryService } from 'src/app/service/sous-category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  sousCategories:any
  product={
    name:'',
    stock:'',
    content:'',
    price:'',
    active:false,
    sousCategory:{
      sid:'',
    }
  }

  constructor(private _product:ProductService,private _snack:MatSnackBar,private _souscat:SousCategoryService) { }

  ngOnInit(): void {
    this._souscat.sousCategories().subscribe(
      (data:any)=>{
        this.sousCategories = data;
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error!!','error in loading data','error')
      }
    );
  }

  formSubmit(){
    if(this.product.name.trim()=='' || this.product.name==null){
      this._snack.open("Title Required!!",'',{
        duration:3000
      })
      return 
    }


    this._product.addProduct(this.product).subscribe(
      (data:any)=>{
        this.product.name ='';
        this.product.content='';
        this.product.price='';
        this.product.stock='';
        this.product.sousCategory={
          sid:'',
        }
        Swal.fire('Success!!','Product is added successfuly','success');
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','server error !!','error')
      }
    );
  }

}
