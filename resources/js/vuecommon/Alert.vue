<template>
    <div class="alert" v-bind:style="{ backgroundColor: color }" v-text="message"></div>
</template>

<script>
export default {
    props: ['color', 'message'],
    data() {
        return {};
    }
};
</script>

<style>
</style>
