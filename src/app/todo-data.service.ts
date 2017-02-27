import { Injectable } from '@angular/core';
import {Todo} from './todo';


@Injectable()
export class TodoDataService {
	lastId: number =0;
  name: string="";
	todos: Todo[] = [];
  constructor() { }
  addTodo(todo:Todo):TodoDataService{
    if(!todo.id){
      todo.id = this.lastId++;
    }
    this.todos.push(todo);
    return this;
    
    
  }
  deleteTodoById(id:number):TodoDataService{
    this.todos = this.todos.filter(todo=>todo.id!=id);
    return this;
  }
  getToDoById(id:number):Todo{
    return this.todos.filter(todo=>todo.id===id).pop();
  }
  updateTodoById(id:number, value:Object={}):Todo{
    let todo = this.getToDoById(id);
    if(!todo){
      return null;
    }
    Object.assign(todo,value);
    return todo;
  }
  getAll():Todo[]{
    return this.todos;
  }
  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {complete: !todo.complete});
    return updatedTodo;
   
  }

}
