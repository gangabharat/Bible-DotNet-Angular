import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { faTrash } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  @Input() product : Product;
  newListModalRef: BsModalRef;
  faTrash = faTrash;
  loading = false;
  
  constructor(private productService: ProductService ,private modalService: BsModalService) { }

  ngOnInit(): void {
    console.log(this.product);
    //this.form.control.patchValue({product : {name : 'nice name'}});
  }

  showModal(template: TemplateRef<any>): void {
    this.newListModalRef = this.modalService.show(template, {
      focus: true,
      ignoreBackdropClick: true,
    });
  }

  onDelete(){
    this.loading = true;
    this.productService.removePuppy(this.product);
    this.newListCancelled();
    setTimeout(() => {     
      this.loading = false;
    }, 1000 * 5);
  }
  newListCancelled(): void {
    this.newListModalRef.hide();    
  }

}
