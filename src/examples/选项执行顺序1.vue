<template>
    <div>
        <p>c1: {{c1}}</p>
        <p>m1: {{m1()}}</p>
        <p>d1: {{d1}}</p>
        <p>p1: {{p1}}</p>
        <button @click="changeState">组件内部状态修改</button>
    </div>
</template>
<script>
let counter = 1;
export default {
    provide(){
        console.log('provide')
        return {
            p: 1
        }
    },
    props: {
        p1: {
            type: String,
            default(){
                console.log('props');
                return 'p1';
            }
        }
    },
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
            d1: 'd1'
        }
    },
    watch: {
        p1: {
            immediate: true,
            handler(){
                console.log('watch p1');
            }
        },
        d1: {
            immediate: true,
            handler(){
                console.log('watch d1');
            }
        }
    },
    computed: {
        c1(){
            console.log('compute');
            return 'compute-: '+ this.p1 + '-' + this.d1;
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

