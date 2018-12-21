<template>
    <div class="outer"  @click.self="clickOuter">
        <div class="inner" @click="clickInner">
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        clickInner(){
            console.log('内部的内部')
        },
        clickOuter(){
            console.log('内部的外部')
        }
    }
}
</script>
<style scoped>
.outer{padding: 50px;background: orangered;}
.inner{padding: 50px; background: orange;}
</style>

