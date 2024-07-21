<template>
<img className="pt-2 mb-2 " src="@/assets/weapon_heading.png" />
<table className="table-auto w-full">
    <thead>
        <tr>
            <th class="bg-black text-white text-start text-lg">Name</th>
            <th class="bg-black text-white text-start text-lg">Skill</th>
            <th class="bg-black text-white text-start text-lg">TN</th>
            <th class="bg-black text-white text-start text-lg">TAG</th>
            <th class="bg-black text-white text-start text-lg">DAMAGE</th>
            <th class="bg-black text-white text-start text-lg">EFFECTS</th>
            <th class="bg-black text-white text-start text-lg">TYPE</th>
            <th class="bg-black text-white text-start text-lg">RATE</th>
            <th class="bg-black text-white text-start text-lg">RANGE</th>
            <th class="bg-black text-white text-start text-lg">QUALITIES</th>
            <th class="bg-black text-white text-start text-lg">AMMO</th>
            <th class="bg-black text-white text-start text-lg">WEIGHT</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="weapon in weapons" :key="weapon.name" class=" font-bold text-lg bg-white text-black p-1 border-b-2 border-dotted border-gray-400" :class="{ 'border-b-0': weapon === weapons[weapons.length - 1] }">
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
<button data-modal-target="new-weapon-modal" data-modal-toggle="new-weapon-modal" type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 my-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add a new weapon</button>
<SheetWeaponModal :weapons="props.weapons" @updateWeapons="updateWeapons" />

</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
import SheetWeaponModal from './SheetWeaponModal.vue';

const props = defineProps({
  weapons: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['updateWeapons']);

const updateWeapons = (newWeapons) => {
  emit('updateWeapons', newWeapons);
};

</script>