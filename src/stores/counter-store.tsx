import { observable, action, computed, decorate } from "mobx";

export class CounterStore {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  get doubleCount() {
    return this.count * 2;
  }
}
decorate(CounterStore, {
  count: observable,
  increment: action,
  decrement: action,
  doubleCount: computed,
});
