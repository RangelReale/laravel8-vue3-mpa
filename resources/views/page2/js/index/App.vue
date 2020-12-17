<template>
    <Alert color="yellow" message="I am an alert 2."></Alert>
    <Alert2></Alert2>
</template>

<script>
import Alert from '@vuecommon/Alert.vue';
import Alert2 from './Alert2.vue';

export default {
    components: { Alert, Alert2 },
};
</script>

<style>
</style>
