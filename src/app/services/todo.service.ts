import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient:HttpClient) { }

  addTodo(obj){
   return this.httpClient.post('https://jsonplaceholder.typicode.com/posts',obj);
  }

  getAllTodos()
  {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos')
  }

  updateTodo(){}
}
