import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { Observable } from "rxjs";
import { ProductService } from "./product.service";
import { Product } from "./product.model";

import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { ProductAddComponent } from "./product-add/product-add.component";
import { Store } from "@ngrx/store";
import { AppState } from "../store/app.reducer";
import * as productActions from "./store/product.action";

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
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    //this.products$ = this.productService.puppies$;
    this.store.select("products").subscribe((res) => {
      console.log(res.products);
      //res.product
    });
  }

  onAdd() {
    this.loadProducts();
    //this.modalRef = this.bsModalService.show(ProductAddComponent);
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
    let products: Product[] = [];
    for (let i = 0; i < 50; i++) {
      const product: Product = {
        id: `${i * 10 * Math.random()}`,
        address: `${i * 10 * Math.random()}`,
        model: `${i * 10 * Math.random()}`,
        name: `${i * 10 * Math.random()}`,
        number: `${i * 10 * Math.random()}`,
      };
      products.push(product);
    }
    this.store.dispatch(new productActions.AddProducts(products));
  }
}
