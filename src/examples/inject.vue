<template>
    <div>
        {{fooAlias}}
    </div>
</template>

<script>
export default {
    // inject: ['foo'],
    inject: {
        fooAlias:  {
            from: 'foo',
            default: 'default data'
        }
    },
    created(){
        console.log(this.foo)
    }
}
</script>

