import { observable, action, decorate } from "mobx";

export class CounterStore {
  count = 0;
  status = ["Add your task"];

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  addTodos(param: string) {
    this.status.push(param);
  }

  deleteTodos(index: number) {
    this.status.splice(index, 1);
  }
}
decorate(CounterStore, {
  count: observable,
  status: observable,
  increment: action,
  decrement: action,
  addTodos: action,
  deleteTodos: action,
});
