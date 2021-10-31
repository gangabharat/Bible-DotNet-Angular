import { Component, OnInit, TemplateRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ProductService } from "../product.service";

import { faPlus, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.css"],
})
export class ProductAddComponent implements OnInit {
  newListEditor: any = {};
  listOptionsEditor: any = {};
  itemDetailsEditor: any = {};

  newListModalRef: BsModalRef;
  listOptionsModalRef: BsModalRef;
  deleteListModalRef: BsModalRef;
  itemDetailsModalRef: BsModalRef;

  faPlus = faPlus;
  faEllipsisH = faEllipsisH;

  constructor(
    private productService: ProductService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form);
    if (form.valid) {
      console.log(form.value.product);
      this.productService.add(form.value.product);
      form.resetForm();     
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
