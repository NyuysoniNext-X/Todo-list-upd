import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../../services/task.service';
import { Todo } from '../../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  private taskService = inject(TaskService);

  newTask: string = '';
  todos = this.taskService.todos$;

  addTodo() {
    this.taskService.addTask(this.newTask);
    this.newTask = '';
  }

  toggleComplete(id: number) {
    this.taskService.togglecomplete(id);
  }

  deleteTodo(id: number) {
    this.taskService.deleteTodo(id);
  }
}
