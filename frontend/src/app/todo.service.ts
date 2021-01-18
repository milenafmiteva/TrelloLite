import { Injectable } from '@angular/core';
import {Init} from './init-todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends Init{

  constructor() { 
    super();
    console.log('TodoService Initialized..');
    this.load();
  }

  getTodo(){
    var todo = JSON.parse(localStorage.getItem('todo'));
    return todo;
  }

  addTodo(newTodo){
    var todo = JSON.parse(localStorage.getItem('todo'));
    todo.push(newTodo);

    localStorage.setItem('todo', JSON.stringify(todo));
  }

  deleteTodo(todoText){
    var todo = JSON.parse(localStorage.getItem('todo'));

    for(var i = 0; i < todo.lenght; i++){
      if(todo[i].text == todoText){
        todo.sploce(i, 1);
      }
    }

    localStorage.setItem('todo', JSON.stringify(todo));
  }

  updateTodo(oldText, newText){
    var todo = JSON.parse(localStorage.getItem('todo'));

    for(var i = 0; i < todo.lenght; i++){
      if(todo[i].text == oldText){
        todo[i].text = newText;
      }
    }

    localStorage.setItem('todo', JSON.stringify(todo));
  }
}
