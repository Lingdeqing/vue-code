<template>
    <div>
        <button @click="show = !show">click</button>
        <transition name="slide-fade">
            <p v-if="show" key="1">hello</p>
            <p v-else key="2">world</p>
        </transition>
    </div>
</template>
<script>
export default {
    data(){
        return {
            show: true
        }
    }
}
</script>
<style scoped>
.slide-fade-enter-active{
    transition: all 2s ease;
}
.slide-fade-leave-active{
    transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
    opacity: 0;
    transform: translateX(10px);
}
</style>
