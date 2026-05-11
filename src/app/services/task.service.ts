import { Injectable, signal } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private todos = signal(<Todo[]>([]))
  todos$ = this.todos.asReadonly()

  addTask(taskText: string){
    if (!taskText || !taskText.trim()) {
      return;
    }

  const newTodo: Todo = {
      id: Date.now(),
      text: taskText.trim(),
      completed: false,
      createdAt: new Date(),
  };
    this.todos.update((currentTodos) => [...currentTodos, newTodo]);
  }

  togglecomplete(id: number) {
    this.todos.update((currentTodos) =>
      currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    );
  }

  deleteTodo(id: number) {
    this.todos.update(currentTodos =>
      currentTodos.filter(todo => todo.id !== id)
    );
  }
}
