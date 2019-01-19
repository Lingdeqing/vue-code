<template>
    <div>
        <button @click="show = !show">click</button>
        <transition name="bounce"
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @enter-cancelled="enterCancelled"
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
            @leave-cancelled="leaveCancelled"
            >
            <p v-if="show" class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
        </transition>
    </div>
</template>
<script>
export default {
    data(){
        return {
            show: true
        }
    },
    methods: {
        beforeEnter(){
            console.log('beforeEnter: '+ 0)
            this.last = Date.now();
        },
        enter(){
            const now = Date.now()
            console.log('enter: '+ (now - this.last))
            this.last = now;
        },
        afterEnter(){
            const now = Date.now()
            console.log('afterEnter: '+ (now - this.last))
            this.last = now;
        },
        enterCancelled(){
            const now = Date.now()
            console.log('enterCancelled: '+ (now - this.last))
            this.last = now;
        },

        beforeLeave(){
            console.log('beforeLeave: '+ 0)
            this.last = Date.now();
        },
        leave(){
            const now = Date.now()
            console.log('leave: '+ (now - this.last))
            this.last = now;
        },
        afterLeave(){
            const now = Date.now()
            console.log('afterLeave: '+ (now - this.last))
            this.last = now;
        },
        leaveCancelled(){
            const now = Date.now()
            console.log('leaveCancelled: '+ (now - this.last))
            this.last = now;
        },
    }
}
</script>
<style scoped>
.bounce-enter-active{
    animation: bounce-in .5s;
}
.bounce-leave-active{
    animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
    0%{
        transform: scale(0);
    }
    50%{
        transform: scale(1.5);
    }
    100%{
        transform: scale(1);
    }
}
</style>
