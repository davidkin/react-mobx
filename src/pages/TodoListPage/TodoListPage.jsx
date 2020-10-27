import React from 'react';
import { observer } from 'mobx-react';
import { TodoItem } from '../../components';
import styles from './TodoListPage.module.scss';

import { observableTodoStore as store } from '../../stores';

const TodoListPage = () => {
  const onNewTodo = () => {
    store.addTodo(prompt('Enter a new todo:', 'coffee plz'));
  };

  return (
    <div>
      {store.report}
      <ul>
        {store.todos.map((todo, idx) => (
          <TodoItem todo={todo} key={idx} />
        ))}
      </ul>
      {store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null}
      <button onClick={onNewTodo}>New Todo</button>
      <small> (double-click a todo to edit)</small>
    </div>
  );
};

export default observer(TodoListPage);
