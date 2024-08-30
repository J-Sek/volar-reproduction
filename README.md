# Nuxt 3 Minimal Starter

Minimal reproduction for [vuejs/language-tools #4759](https://github.com/vuejs/language-tools/issues/4759)

## Setup

Make sure to install the dependencies:

```bash
bun install
```

## Problem (regression, it used to work)

### Expected: Autocomplete in Pug

```vue
<template lang="pug">
div
  pre {{ $pinia.state.value }}
  pre {{ $breakpoints.test }}
</template>
```

### Actual: I only works in HTML

```vue
<template>
  <div>
    <pre>{{ $pinia.state.value }}</pre>
    <pre>{{ $breakpoints.test }}</pre>
  </div>
</template>
```
