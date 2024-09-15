import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Todo} from '../../Todo'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-component.component.html',
  styleUrl: './todo-component.component.css'
})


export class TodoComponent {
 @Input() todo!: Todo;
 @Input() i!: number;
 @Output() deleteTodo =new EventEmitter<Todo>();
 @Output() doneTodo =new EventEmitter<Todo>();
 contructor(){}
 ngOnInit(): void{
 }
 onClick(todo:Todo){
  this.deleteTodo.emit(todo);
  console.log("Hi")
 }
 onDone(todo:Todo){
  this.doneTodo.emit(todo);
 }
}
