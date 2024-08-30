<template lang="pug">
div
  pre {{ $pinia.state.value }}
  pre {{ $breakpoints.md }}
  pre {{ $vuetify.display.width }}
</template>
