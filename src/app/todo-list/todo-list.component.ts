import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: TodoItem[];
  filterInput: string;
  addItemInput: string;

  constructor() { }

  ngOnInit() {
    this.todoList = [
      {task: 'pick up grandma', completed: false},
      {task: 'go to the beach', completed: true},
      {task: 'buy chocolate', completed: false},
    ];
  }

  removeItem(item: TodoItem): void {
    const itemIndex = this.todoList.indexOf(item);
    this.todoList.splice(itemIndex, 1);
  }

  addItem() {
    const taskValue: string = this.addItemInput;
    const newTodoItem: TodoItem = {
      task: taskValue,
      completed: false
    };
    this.todoList.push(newTodoItem);
  }

  sayHello() {
    return 'hello';
  }

  filter() {
    if (!this.filterInput) {
      return this.todoList;
    }
    return this.todoList.filter(todo => todo.task.includes(this.filterInput));
  }
}