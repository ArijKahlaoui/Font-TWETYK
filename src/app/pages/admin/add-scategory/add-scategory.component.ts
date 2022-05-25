import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category.service';
import { SousCategoryService } from 'src/app/service/sous-category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-scategory',
  templateUrl: './add-scategory.component.html',
  styleUrls: ['./add-scategory.component.css']
})
export class AddScategoryComponent implements OnInit {

  categories:any;
  ScategoryData={
    title:'',
    description:'',
    active: true,
    category:{
      cid:'',
    },
  };
  constructor(private _cat:CategoryService,private _snack:MatSnackBar,private _souscat:SousCategoryService) { }

  ngOnInit(): void {
    this._cat.categories().subscribe(
      (data:any)=>{
        this.categories = data;
        //console.log(this.categories);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error!!','error in loading data','error')
      }
    )
  }


  addScategory(){
    if(this.ScategoryData.title.trim()=='' || this.ScategoryData.title==null){
      this._snack.open('Title required!!','',{
        duration: 3000,
      });
      return 
    }
    this._souscat.addSCategory(this.ScategoryData).subscribe(
      (data:any)=>{
        Swal.fire('Success','sous category is added','success')
        this.ScategoryData.title='',
        this.ScategoryData.description='',
        this.ScategoryData. active= true,
        this.ScategoryData.category={
            cid:'',
          }
      },
      (error)=>{
        Swal.fire('Erorr!!','Erorr with adding Sous category','error')
      }
    );
  }

}
