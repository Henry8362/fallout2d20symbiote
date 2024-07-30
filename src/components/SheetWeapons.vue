<template>
<img className="pt-2 mb-2 " src="@/assets/weapon_heading.png" />
<table className="table-auto max-w-full	 w-full">
    <thead>
        <tr>
            <th class="bg-black text-white text-start text-md md:text-lg">Name</th>
            <th class="bg-black text-white text-start text-md md:text-lg"></th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="weapon in props.weapons" :key="weapon.name" class=" font-bold text-md md:text-lg bg-white text-black p-1 border-b-2 border-dotted border-gray-400" :class="{ 'border-b-0': weapon === weapons[weapons.length - 1] }">
            <td>{{ weapon.name }}</td>
            <td ><button type="button" class="bg-blue-700 text-white focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 my-2" @click="viewCard(weapon)">Details</button>
              <button type="button" class="bg-red-700 text-white focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 my-2" @click="removeWeapons(weapon)">Remove</button>
            </td>
        </tr>
    </tbody>
</table>
<button @click="modalState = !modalState" type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 my-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add a new weapon</button>
<SheetWeaponModal :weapons="props.weapons" @updateWeapons="updateWeapons" :modalState="modalState" @update-modalState="handleUpdateModalState"/>
<WeaponCard :weapon="selectedWeapon" v-if="selectedWeapon" @closeCard="handleCloseCard"/>
</template>
<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import SheetWeaponModal from './SheetWeaponModal.vue';
import WeaponCard from './WeaponCard.vue';

const props = defineProps({
  weapons: {
    type: Array,
    required: true,
  },
});

const selectedWeapon = ref(null);

const viewCard = (weapon) => {
  selectedWeapon.value = weapon;
};

const handleCloseCard = () => {
  selectedWeapon.value = null;
};

const modalState = ref(false);

const handleUpdateModalState = (newState) => {
  modalState.value = newState;
};

const emit = defineEmits(['updateWeapons','removeWeapons']);

const updateWeapons = (newWeapons) => {
  emit('updateWeapons', newWeapons);
};

const removeWeapons = (weapon) => {
  const index = props.weapons.indexOf(weapon);
  emit('removeWeapons', index);
};

</script>