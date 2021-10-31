import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NotificationService } from '../shared/notification.service';
import { Product } from './product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Make _puppiesSource private so it's not accessible from the outside, 
  // expose it as puppies$ observable (read-only) instead.
  // Write to _puppiesSource only through specified store methods below.
  private readonly _puppiesSource = new BehaviorSubject<Product[]>([]);
  //private readonly _puppiesSource = new BehaviorSubject<Puppy[]>([]);

  // Exposed observable (read-only).
  readonly puppies$ = this._puppiesSource.asObservable();

  constructor(private ns: NotificationService) {}

  // Get last value without subscribing to the puppies$ observable (synchronously).
  get(): Product[] {
    return this._puppiesSource.getValue();
  }

  private _setPuppies(puppies: Product[]): void {
    this._puppiesSource.next(puppies);
  }

  add(puppy: Product): void {
    this.ns.success(puppy.name,`${puppy.name} added`)
    const puppies = [...this.get(), puppy];
    this._setPuppies(puppies);
  }

  removePuppy(puppy: Product): void {
    const puppies = this.get().filter(p => p.id !== puppy.id);
    this._setPuppies(puppies);
  }
}
