import { Component, OnInit } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Observable } from "rxjs";
import { Product } from "../product/product.model";
import { ProductService } from "../product/product.service";

import { ContactAddComponent } from "./contact-add/contact-add.component";
import { ContactDeleteComponent } from "./contact-delete/contact-delete.component";
import { ContactDetailComponent } from "./contact-detail/contact-detail.component";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.css"],
})
export class ContactsComponent implements OnInit {
  products$ = new Observable<Product[]>();
  bsModalRef: BsModalRef;
  constructor(
    private bsModalService: BsModalService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.products$ = this.productService.puppies$;
  }

  onAdd() {
    this.bsModalRef = this.bsModalService.show(ContactAddComponent, {
      initialState: { hideClose: true },
    });
  }

  onDetails(product: Product) {
    this.bsModalRef = this.bsModalService.show(ContactDetailComponent, {
      initialState: { product: product, hideClose: false },
    });
  }

  onRemove(product: Product) {
    this.bsModalRef = this.bsModalService.show(ContactDeleteComponent, {
      initialState: { product: product, hideClose: false },
    });
  }
}
