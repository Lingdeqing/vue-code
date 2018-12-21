<template>
    <div>
        <form @submit.prevent="addNewTodo">
            <input type="text" v-model="newTodoText">
            <button>add</button>
        </form>
        <ul>
            <li
                is="todo-item"
                v-for="(todo, index) in todos"
                :key="todo.id"
                :title="todo.title"
                @remove="removeTodo(index)"
            >
            </li>
        </ul>
    </div>
</template>

<script>

import TodoItem from './todo-item';
export default {
    data(){
        return {
            newTodoText: '',
            todos: [
                {
                    id: 1,
                    title: 'eat shit'
                }
            ],
            nextTodoId: 2
        }
    },
    methods: {
        addNewTodo(){
            this.todos.push({
                id: this.nextTodoId ++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        },
        removeTodo(index){
            this.todos.splice(index, 1);
        }
    },
    components: {
        TodoItem
    }
}
</script>
