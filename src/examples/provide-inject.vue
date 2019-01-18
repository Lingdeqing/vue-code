<template>
    <div>
        <Inject />
        <Provide>
            <Inject />
        </Provide>
    </div>
</template>

<script>

import Provide from '@/examples/provider.vue';
import Inject from '@/examples/inject.vue';
export default {
    components: {
        Provide,
        Inject
    }
}
</script>

