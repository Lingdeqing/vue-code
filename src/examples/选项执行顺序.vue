<template>
    <div>
        <Child :p1="p1" v-if="show" />
        <button @click="changeProps">外部修改组件props</button>
        <button @click="show = false">销毁组件</button>

        <h2>创建</h2>
        <p>
            beforeCreate<br>
            props(如果没有传值,执行default函数)<br>
            data<br>
            watch(immediately)<br>
            provide<br>
            created<br>
            beforeMount<br>
            compute<br>
            methods(模板里面调用的method)<br>
            mounted<br>
        </p>

        <h2>更新props</h2>
        <p>
            watch(props)<br>
            beforeUpdate<br>
            （取决于模板中的顺序）compute(修改了依赖的prop) / methods(模板里面调用的method)<br>
            updated<br>
        </p>

        <h2>更新状态</h2>
        <p>
            watch(data)<br>
            beforeUpdate<br>
            （取决于模板中的顺序）compute(修改了依赖的data) / methods(模板里面调用的method)<br>
            updated<br>
        </p>

        <h2>销毁组件</h2>
        <p>
            beforeDestroy<br>
            destroyed<br>
        </p>
    </div>
</template>
<script>
import Child from '@/examples/选项执行顺序1.vue';

export default {
    data(){
        return {
            p1: 'haha',
            show: true,
        }
    },
    methods: {
        changeProps(){
            this.p1 = 'hehe';
        }
    },
    components: {
        Child
    }
}
</script>

