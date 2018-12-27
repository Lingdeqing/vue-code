<template>
    <div>
        <input type="text" :value="value" @input="onInput"/>
        data: {{data.value}}
        <input type="text" :value="data.value" @input="data.value = $event.target.value" />
    </div>
</template>

<script>
export default {
    props: {
        value: String,
        title: {
            type: Number,
            required: true
        },
        data: Object
    },
    methods: {
        onInput(e){
            this.$emit('input', e.target.value);
        }
    }
}
</script>
