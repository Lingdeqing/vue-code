<template>
    <div>
        <button @click="add">add</button>
        <button @click="remove">remove</button>
        <button @click="shuffle">shuffle</button>
        <transition-group tag="p" name="list">
            <span v-for="item in items" :key="item" class="list-item">{{item}}</span>
        </transition-group>
    </div>
</template>
<script>
export default {
    data(){
        return {
            items: [1,2,3,4,5,6,7,8,9],
            nextNum: 10
        }
    },
    methods: {
        randomIndex(){
            return Math.floor(Math.random() * this.items.length);
        },
        add(){
            this.items.splice(this.randomIndex(), 0, this.nextNum++);
        },
        remove(){
            this.items.splice(this.randomIndex(), 1);
        },
        shuffle(){
            this.items.sort(()=>Math.random()*2-1)
        }
    }
}
</script>
<style scoped>
.list-item{display: inline-block; margin-right: 10px;}
.list-enter-active, .list-leave-active, .list-move{transition: all 1s;}
.list-leave-to, .list-enter{opacity: 0;transform: translateY(30px);}
.list-leave-active{position: absolute;}
</style>
