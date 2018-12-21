<template>
    <div class="outer-outer"  @click="clickOuter">
        <div class="outer-inner" @click.stop="clickInner">
            <InnerComponent @click="clickInnerComponent"/>
        </div>
    </div>
</template>
<script>
import InnerComponent from "./事件-内部";
export default {
    methods: {
        clickInner(){
            console.log('外部的内部')
        },
        clickOuter(){
            console.log('外部的外部')
        },
        clickInnerComponent(){  // 无效
            console.log('点击组件')
        }
    },
    components: {
        InnerComponent
    }
}
</script>
<style scoped>
.outer-outer{padding: 50px; background: palegreen;}
.outer-inner{padding: 50px; background: rebeccapurple;}
</style>

