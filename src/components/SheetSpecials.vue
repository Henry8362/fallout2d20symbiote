<template>
<div className="container mx-auto p-4 bg-gray-300 bg-opacity-80	 border-2 rounded-lg	">
<div class="grid gap-1 grid-cols-3 md:grid-cols-7 h-80	 md:h-32">
    <div v-for="stat in specialStats" :key="stat.name" class="flex flex-col items-center gear-bg justify-center">
        <label class="bg-black self-center text-white">{{ stat.label }}</label>
        <input class="bg-black w-2/6 self-center text-white"  v-model="stat.value" type="number">
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