import { Component } from '@angular/core';
import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
 
  title1 = 'rashmi';
  newTodo: Todo = new Todo();
  
  todo_test: Todo = new Todo();
// todos: Todo[];

  constructor(private todoDataService: TodoDataService) {
  // this.todos = this.todoDataService.getAll();
  }
   toggle(todo) {
	this.todoDataService.toggleTodoComplete(todo);
    


  }
  removeTodo(todo)

  {
    console.log(todo);
 this.todoDataService.deleteTodoById(todo.id);
  }

   addTodo(){
     console.log(this.newTodo);
this.todoDataService.addTodo(this.newTodo);
  this.newTodo = new Todo();
  }

get todos() {
  return this.todoDataService.getAll();
}

 
}


