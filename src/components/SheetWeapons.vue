<template>
<div>Weapons</div>
<table className="table-auto">
    <thead>
        <tr>
            <th class="bg-black text-white text-start">Name</th>
            <th class="bg-black text-white text-start">Skill</th>
            <th class="bg-black text-white text-start">TN</th>
            <th class="bg-black text-white text-start">TAG</th>
            <th class="bg-black text-white text-start">DAMAGE</th>
            <th class="bg-black text-white text-start">EFFECTS</th>
            <th class="bg-black text-white text-start">TYPE</th>
            <th class="bg-black text-white text-start">RATE</th>
            <th class="bg-black text-white text-start">RANGE</th>
            <th class="bg-black text-white text-start">QUALITIES</th>
            <th class="bg-black text-white text-start">AMMO</th>
            <th class="bg-black text-white text-start">WEIGHT</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="weapon in weapons" :key="weapon.name">
            <td>{{ weapon.name }}</td>
            <td>{{ weapon.skill }}</td>
            <td>{{ weapon.tn }}</td>
            <td>{{ weapon.tag }}</td>
            <td>{{ weapon.damage }}</td>
            <td>{{ weapon.effects }}</td>
            <td>{{ weapon.type }}</td>
            <td>{{ weapon.rate }}</td>
            <td>{{ weapon.range }}</td>
            <td>{{ weapon.qualities }}</td>
            <td>{{ weapon.ammo }}</td>
            <td>{{ weapon.weight }}</td>
        </tr>
    </tbody>
</table>
<button data-modal-target="new-weapon-modal" data-modal-toggle="new-weapon-modal" type="button">Open Modal</button>
<SheetWeaponModal />

</template>
<script setup>
import { defineProps } from 'vue';
import SheetWeaponModal from './SheetWeaponModal.vue';
defineProps({
    weapons: {
        type: Array,
        required: true
    }
});

</script>