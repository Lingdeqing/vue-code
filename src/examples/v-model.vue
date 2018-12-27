<template>
    <div>
        <CustomInput v-model="msg"/>
        {{msg}}
        <CustomInput2 v-model="obj"/>
        {{JSON.stringify(obj)}}<br>
        <base-input :value="msg"/>
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
            msg: '',
            obj: {
                value: 'A',
                label: '啊啊啊'
            },
        }
    },
    created(){
        window.vm = this;
    }
}
</script>

