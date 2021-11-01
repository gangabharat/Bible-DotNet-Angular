import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../product.model";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  public products$ = new Observable<Product[]>();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    //this.loadProducts();
    this.products$ = this.productService.puppies$;
    //this.productService.removePuppy()
  }

  onRemove(product: Product) {
    //console.log(product);
    //this.productService.removePuppy(product);
  }


}
