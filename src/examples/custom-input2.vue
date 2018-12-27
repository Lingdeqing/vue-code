<template>
    <div>
        setValue: <input type="text" :value="value.value" @input="onInputValue"/> {{value.value}} <br>
        setLabel: <input type="text" :value="value.label" @input="onInputLabel"/> {{value.label}} <br>
    </div>
</template>

<script>
export default {
    props: ['value'],
    methods: {
        onInputValue(e){
            this.$emit('input', {
                ...this.value,
                value: e.target.value
            });
        },
        onInputLabel(e){
            this.$emit('input', {
                ...this.value,
                label: e.target.value
            });
        }
    }
}
</script>
