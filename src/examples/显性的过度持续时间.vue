<template>
    <div>
        <button @click="show = !show">click</button>
        <transition 
            enter-active-class="animated tada"
            leave-active-class="animated bounceOutRight"
            :duration="{enter: 1000, leave: 800}"
        >
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
</style>
