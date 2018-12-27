<template>
    <div>
        <CustomInput v-model="msg" :title="title" haha="abc"  :data="obj2"/>
        {{msg}}<br>
        obj2: {{obj2.value}}
        <CustomInput2 v-model="obj"/>
        {{JSON.stringify(obj)}}<br>
        <base-input v-model="msg" class="base-input" placeholder="enter"/>
    </div>
</template>
<script>
import CustomInput from './custom-input';
import CustomInput2 from './custom-input2';

export default {
    components: {
        CustomInput,
        CustomInput2
    },
    data(){
        return {
            title: 0,
            msg: '',
            obj: {
                value: 'A',
                label: '啊啊啊'
            },
            obj2: {
                value: 'B'
            }
        }
    },
    created(){
        window.vm = this;
    }
}
</script>

