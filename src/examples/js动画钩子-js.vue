<template>
    <div>
        <button @click="show = !show">click</button>
        <transition name="bounce"
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
            :css="false"
            >
            <p v-if="show" class="">Hello</p>
        </transition>
    </div>
</template>
<script>
export default {
    data(){
        return {
            show: false
        }
    },
    methods: {
        beforeEnter(el){
            el.style.opacity = 0;
            el.style.transformOrigin = 'left'
        },
        enter(el, done){
            Velocity(el, {opacity: 1, fontSize: '1.4em'}, {duration: 300});
            Velocity(el, {fontSize: '1em'}, {complete: done});
        },
        leave(el, done){
            Velocity(el, {translateX: '15px', rotateZ: '50deg'}, {duration: 600});
            Velocity(el, {rotateZ: '100deg'}, {loop: 2});
            Velocity(el, {translateX: '30px',translateY: '30px',  rotateZ: '45deg', opacity: 0}, {complete: done});
        },
    }
}
</script>
<style scoped>
</style>
