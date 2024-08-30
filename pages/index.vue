<template lang="pug">
div
    pre {{ $breakpoints.test }}
    pre {{ someVariable.someField }}
</template>

<script setup lang="ts">

const someVariable = ref({
    someField: 123
})
</script>