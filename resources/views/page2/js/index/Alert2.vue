<template>
    <div class="alert" v-text="message"></div>
</template>

<script>
export default {
    data() {
        return {
            message: 'I am an alert 2.'
        };
    }
};
</script>

<style>
.alert {
    background: green;
}
</style>
