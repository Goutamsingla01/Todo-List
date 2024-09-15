import { Component, Injectable } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Todo} from '../../Todo';
import { TodoComponent } from '../todo-component/todo-component.component';
import {AddtodoComponent} from '../addtodo/addtodo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoComponent,AddtodoComponent ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})

export class TodosComponent {
  todos:Todo[]=[];
  // constructor(@Inject(DOCUMENT) private document: Document) {     //can also do this
  //   const localStorage = document.defaultView?.localStorage;      // or can also off the ssr in setting of angular
  //   if ( localStorage !=undefined) {
  constructor() {  
    if (typeof localStorage !== 'undefined') {
      const savedTodos = localStorage.getItem('token');
      if (savedTodos) {
        this.todos = JSON.parse(savedTodos);
      }
    }
    
   }

    deleteTodo(todo:Todo){
      const index=this.todos.indexOf(todo);
      this.todos.splice(index,1);
      localStorage.setItem('token',JSON.stringify(this.todos))
      console.log(index);
    }
    doneTodo(todo:Todo){
      const index=this.todos.indexOf(todo);
      this.todos[index].active=!this.todos[index].active;
      localStorage.setItem('token',JSON.stringify(this.todos))
      console.log(index);
    }
    addTodo(todo:Todo){
      this.todos.push(todo);
      console.log(todo)
      localStorage.setItem('token',JSON.stringify(this.todos))
      console.log(localStorage.getItem('token'));
    }
}
