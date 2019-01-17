<template>
    <div>
        <button @click="show = !show">click</button>
        <transition name="fade">
            <p v-if="show" class="">hello</p>
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
.fade-enter-active, .fade-leave-active{
    transition: opacity 5s;
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}
</style>
