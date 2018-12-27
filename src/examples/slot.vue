<template>
    <div>
        <SlotDefault>default</SlotDefault>
        <SlotName>
            <div>haha</div>
            <template slot="footer">footer</template>
            <template slot="header">header</template>
            <div>hehe</div>
        </SlotName>
        <SlotScope :list="list">
            <template slot-scope="scope">
                haha: {{scope.item}}
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
