<template>
    <ul>
        <li v-for="item in list" :key="item">
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

