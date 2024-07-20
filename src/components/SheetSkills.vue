<template>
<div className="container mx-auto p-4 bg-gray-300">
<div className="font-bold">Skills</div>
<table className="table-auto w-full">
    <thead>
        <tr>
            <th class="bg-black text-white text-start">Name</th>
            <th class="bg-black text-white text-start">Tag</th>
            <th class="bg-black text-white text-start">Rank</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(skill, index) in skills" :key="skill.name" :class="index % 2 === 0 ? 'bg-orange-200' : 'bg-orange-100'">
            <td><span className="font-bold">{{ skill.name }}</span> - [{{ skill.stat }}]</td>
            <td><input type="checkbox" v-model="skill.tagged" /></td>
            <td>{{ skill.rank }}</td>
        </tr>
    </tbody>
</table>
</div>
</template>
<script setup>
import { defineProps } from 'vue';

defineProps({
  skills: {
    type: Array,
    required: true
  }
});

</script>