<template>
<div className="container mx-auto">
<table className="table-auto w-full">
    <thead>
        <tr>
            <th class="bg-black text-white text-start p-1">Name</th>
            <th class="bg-black text-white text-start">Tag</th>
            <th class="bg-black text-white text-start">Rank</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(skill, index) in skills" :key="skill.name" :class="index % 2 === 0 ? 'bg-orange-200' : 'bg-orange-100'">
            <td className="p-1"><span className="font-bold">{{ skill.name }}</span> <span className="text-orange-700" >- [{{ skill.stat }}]</span></td>
            <td className="p-1"><input type="checkbox" v-model="skill.tagged" /></td>
            <td className="p-1">{{ skill.rank }}</td>
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