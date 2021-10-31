import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { Observable } from "rxjs";
import { ProductService } from "./product.service";
import { Product } from "./product.model";

import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { ProductAddComponent } from "./product-add/product-add.component";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  public products$ = new Observable<Product[]>();
  displayStyle = "none";
  @ViewChild("template") template: TemplateRef<HTMLDivElement>;
  modalRef: BsModalRef;

  options: string[];

  selectedOption: string;

  constructor(
    private productService: ProductService,
    private bsModalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.products$ = this.productService.puppies$;
  }

  openModal() {
    this.modalRef = this.bsModalService.show(this.template, {
      animated: true,
      backdrop: "static",
    });
  }

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
