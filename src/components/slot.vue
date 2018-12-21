<template>
    <div>
        <slot :message="message">default</slot>
    </div>
</template>

<script>
export default {
    data(){
        console.log(this.$attrs)
        return {
            message: 'hehe'
        }
    }
}
</script>

