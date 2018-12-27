<template>
    <Comp a="1" :b="{msg:1}" @click="log">
        hahah
    </Comp>
</template>

<script>
import Comp from './函数式组件1'
export default {
    components: {
        Comp
    },
    methods: {
        log(){
            alert(1)
        }
    }
}
</script>

