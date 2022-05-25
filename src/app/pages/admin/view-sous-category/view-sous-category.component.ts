import { Component, OnInit } from '@angular/core';
import { SousCategoryService } from 'src/app/service/sous-category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-sous-category',
  templateUrl: './view-sous-category.component.html',
  styleUrls: ['./view-sous-category.component.css']
})
export class ViewSousCategoryComponent implements OnInit {

  sousCategories=[
    {
      sid:23,
      title:'T-shirt',
      description:'no description available',
      active:'',
      category:{title:'women',}
    },
    {
      sid:23,
      title:'T-shirt',
      description:'Soon',
      active:'',
      category:{title:'kids',}
    },
    {
      sid:23,
      title:'Robe',
      description:'Soon',
      active:'',
      category:{title:'women',}
    },
    

  ]
  constructor(private _sousCategory:SousCategoryService) { }

  ngOnInit(): void {
    this._sousCategory.sousCategories().subscribe(
      (data:any)=>{
        this.sousCategories =data;
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error!','error in loading data!','error');
      }
    )
  }

}
