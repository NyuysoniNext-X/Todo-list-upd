import { Component, signal } from '@angular/core';
import { TodoList } from './features/tasks/todo-list/todo-list';

@Component({
  selector: 'app-root',
  imports: [TodoList],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'NyuysoniNext-X todo - Updated';
}
