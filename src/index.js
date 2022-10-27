
import './styles.css';
import {Todo, TodoList} from './classes/index.js';
import { CrearTodoHtml } from './js/componentes';

export const todoList= new TodoList();

todoList.todos.forEach(todo => CrearTodoHtml(todo));
// todoList.todos.forEach(CrearTodoHtml); oopción válida

// const newTodo = new Todo('aprender java');
// todoList.nuevoTodo(newTodo);


console.log('todos', todoList.todos);
