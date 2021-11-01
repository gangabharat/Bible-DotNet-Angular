import { Component, OnInit, TemplateRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ProductService } from "../product.service";

import { faPlus, faSave, faUndo } from "@fortawesome/free-solid-svg-icons";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Product } from "../product.model";

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.css"],
})
export class ProductAddComponent implements OnInit {

  newListModalRef: BsModalRef;
  faPlus = faPlus;
  faSave = faSave
  faUndo= faUndo;
  loading = false;

  constructor(
    private productService: ProductService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    //this.form.
  }

  onSubmit(form: NgForm) {
   
    if (form.valid) {
      this.loading = true;
      const product = (form.value.product) as Product;   
      product.id =  new Date().valueOf().toString();
      console.log(product);
      this.productService.add(product);
      form.resetForm();

      this.newListCancelled();

      setTimeout(() => {
        this.loading = false;
      }, 1000 * 2);
    }
  }

  showModal(template: TemplateRef<any>): void {
    this.newListModalRef = this.modalService.show(template, {
      focus: true,
      ignoreBackdropClick: true,
    });
  }
  newListCancelled(): void {
    this.newListModalRef.hide();
  }
}