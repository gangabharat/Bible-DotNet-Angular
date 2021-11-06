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
    private bsModalService: BsModalService,
    //private productAddComponent: ProductAddComponent
  ) {}

  ngOnInit(): void {
    //this.products$ = this.productService.puppies$;
    this.loadProducts();

    
  }

  onAdd(){
    this.modalRef = this.bsModalService.show(ProductAddComponent, {
      animated: true,
      backdrop: "static",
    });

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

  loadProducts() {
    for (let i = 0; i < 50; i++) {
      const product: Product = {
        id: `${i * 10 * Math.random()}`,
        address: `${i * 10 * Math.random()}`,
        model: `${i * 10 * Math.random()}`,
        name: `${i * 10 * Math.random()}`,
        number: `${i * 10 * Math.random()}`,
      };
      this.productService.load(product);
    }
  }
}
