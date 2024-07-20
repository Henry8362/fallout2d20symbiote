<template>
<div className="container mx-auto p-4">
<div class="flex">
    <div v-for="stat in specialStats" :key="stat.name" class="flex flex-col items-center">
        <label>{{ stat.name }}</label>
        <input v-model="stat.value" type="number" class="mt-2">
    </div>
</div>
</div>

</template>
<script setup>
import { defineProps } from 'vue';

defineProps({
  specialStats: {
    type: Array,
    required: true
  }
});

</script>