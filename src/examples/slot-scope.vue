<template>
    <ul>
        <li v-for="item in list" :key="item">
            <slot name="slot1" :item="item">
                {{item}}
            </slot>
            <slot :item="item">
                {{item}}
            </slot>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['list']
}
</script>

