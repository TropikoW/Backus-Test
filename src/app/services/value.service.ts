import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  private value : string = 'Ronaldo';

  getValue() {
    return this.value;
  }

  getPromise() {
    return Promise.resolve('promise value');
  }

  getObservable() {
    return of('observable value');
  }

  setValue(change : string) {
    this.value = change
    return this.value;
  }

  constructor() { }
}
