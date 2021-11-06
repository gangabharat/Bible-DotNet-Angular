import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { News } from "./news.model";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  
  // Make _puppiesSource private so it's not accessible from the outside,
  // expose it as puppies$ observable (read-only) instead.
  // Write to _puppiesSource only through specified store methods below.
  private readonly _puppiesSource = new BehaviorSubject<News[]>([]);
  //private readonly _puppiesSource = new BehaviorSubject<Puppy[]>([]);

  // Exposed observable (read-only).
  readonly puppies$ = this._puppiesSource.asObservable();

  private puppies: News[] = [];
  private allPuppies: News[] = [];

  constructor() {}

  // Get last value without subscribing to the puppies$ observable (synchronously).
  get(): News[] {
    return this._puppiesSource.getValue();
  }

  private _setPuppies(puppies: News[]): void {
    this._puppiesSource.next(puppies);
  }

  load(puppy: News[]): void {
    this.allPuppies = puppy;
  }

  loadMore() {
    if (this.getNextPuppies()) {
      this._setPuppies(this.puppies);
    }
  }

  add(puppy: News): void {
    const puppies = [...this.get(), puppy];
    this._setPuppies(puppies);
  }

  updatePuppy(puppy: News): void {
    const puppies = this.get().map((obj) =>
      obj.Title === puppy.Title ? puppy : obj
    );
    this._setPuppies(puppies);
  }

  removePuppy(puppy: News): void {
    const puppies = this.get().filter((p) => p.Title !== puppy.Title);
    this._setPuppies(puppies);
  }

  private getNextPuppies(): boolean {
    if (this.puppies.length >= this.allPuppies.length) {
      return false;
    }
    const remainingLength = Math.min(
      5,
      this.allPuppies.length - this.puppies.length
    );
    this.puppies.push(
      ...this.allPuppies.slice(
        this.puppies.length,
        this.puppies.length + remainingLength
      )
    );
    return true;
  }
}
