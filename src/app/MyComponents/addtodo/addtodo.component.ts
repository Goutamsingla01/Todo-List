import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup,FormControl, ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
 
import { Todo } from '../../Todo';
@Component({
  selector: 'app-addtodo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addtodo.component.html',
  styleUrl: './addtodo.component.css'
})
export class AddtodoComponent {
  title!: string;
  desc!:string
  
  @Output() addTodo =new EventEmitter<Todo>();
    onSubmit(){
      console.log(this.title)
      const todo={
        title:this.title,
        desc:this.desc,
        srno:8,
        active:true
      }
      this.addTodo.emit(todo);
      console.log(this.title)
      this.title = '';
      this.desc = '';
    }
}
