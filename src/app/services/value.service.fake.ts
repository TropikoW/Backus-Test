export class ValueServiceFake {

  getValue() {
    return 'Ronaldo';
  }

  getPromise() {
    return Promise.resolve('promise value');
  }

  setValue(change : string) {
    return change;
  }

  constructor() { }
}
