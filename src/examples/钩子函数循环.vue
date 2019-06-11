<template>
    <div>
        <p>c1: {{c1}}</p>
        <p>m1: {{m1()}}</p>
        <p>d1: {{d1}}</p>
        <button @click="changeState">组件内部状态修改</button>
        <p>compute中不能依赖watch修改的属性d2会造成死循环</p>
    </div>
</template>
<script>
let counter = 1;
export default {
    beforeCreate(){
        console.log('beforeCreate')
    },
    created(){
        console.log('created')
    },
    beforeMount(){
        console.log('beforeMount')
    },
    mounted(){
        console.log('mounted')
    },
    beforeUpdate(){
        console.log('beforeUpdate')
        this.d1 = 'd' + ++counter;
    },
    updated(){
        console.log('updated')
    },
    beforeDestroy(){
        console.log('beforeDestroy')
    },
    destroyed(){
        console.log('destroyed')
    },
    data(){
        console.log('data');
        return {
            d1: 'd1',
            d2: 'd2',
            d3: 'd3'
        }
    },
    watch: {
        d1: {
            immediate: true,
            handler(){
                console.log('watch d1');
                this.d2 = 'd2-'+ ++counter;
            }
        }
    },
    computed: {
        c1(){
            console.log('compute');
            return 'compute: d1:' +this.d1+ ', d2:' +this.d2+ 'd3: '+this.d3;
        }
    },
    methods: {
        m1(){
            console.log('methods');
            return 'm1';
        },
        changeState(){
            this.d1 = 'd' + ++counter;
        }
    }
}
</script>

