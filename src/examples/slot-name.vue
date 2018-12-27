<template>
    <div>
        <header>
            <slot name="header"></slot>
        </header>
        <footer>
            <slot name="footer"></slot>
        </footer>
        <main>
            <slot></slot>
        </main>
        <section>
            <slot name="defaultVal">default</slot>
        </section>
    </div>
</template>

<script>
export default {
    
}
</script>

