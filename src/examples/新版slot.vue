<template>
    <div>
        <SlotDefault>default</SlotDefault>
        <SlotName>
            <div>haha</div>
            <template v-slot:footer>footer</template>
            <template v-slot:header>header</template>
            <div>hehe</div>
        </SlotName>
        <SlotName>
            <div>haha</div>
            <template #footer>footer</template>
            <template #header>header</template>
            <div>hehe</div>
        </SlotName>
        <SlotScope :list="list">
            <template v-slot="scope">
                default: {{scope.item}}
            </template>
            <template v-slot:slot1="scope">
                slot1: {{scope.item}}
            </template>
        </SlotScope>
    </div>        
</template>

<script>
import SlotDefault from './slot-default'
import SlotName from './slot-name'
import SlotScope from './slot-scope'
export default {
    data(){
        return {
            list: [
                'aaa',
                'bbb',
                'ccc'
            ]
        }
    },
    components: {
        SlotDefault,
        SlotName,
        SlotScope,
    }
}
</script>
