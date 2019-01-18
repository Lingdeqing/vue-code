<template>
    <div>
        <Inject />
        slot:
        <slot></slot>
    </div>
</template>

<script>

import Inject from '@/examples/inject.vue';
export default {
    // provide: {
    //     foo: 'data from foo'
    // },
    provide(){
        return {
            foo: 'data from foo'
        }
    },
    components: {
        Inject
    }
}
</script>

