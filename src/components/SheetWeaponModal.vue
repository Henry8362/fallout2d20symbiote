<template>
  <!-- Main modal -->
  <div id="new-weapon-modal" tabindex="-1" aria-hidden="true" :class="{ 'hidden': !modalState}"  class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" >
      <div class="relative p-4 w-full max-w-2xl max-h-full">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <!-- Modal header -->
              <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                      Add a Weapon
                  </h3>
                  <button type="button" @click="emit('updateModalState', !modalState)" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                      <span class="sr-only">Close</span>
                  </button>
              </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4">
                <div>
                    <label for="category" class="block text-sm font-medium text-white">Select from a template (Optional)</label>
                    <select @change="setWeaponTemplate" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        <option value="">Select a template</option>
                        <option v-for="weapon in weapon_templates.weapons" :key="weapon.name" :value="weapon.name">{{ weapon.name }}</option>
                    </select>

                </div>
                <div>
                    <label for="name" class="block text-sm font-medium text-white">Name</label>
                    <input type="text" id="name" v-model="weapon_details.name" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div>
                    <label for="skill" class="block text-sm font-medium text-white">Skill</label>
                    <input type="text" id="skill" v-model="weapon_details.skill" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div>
                    <label for="tn" class="block text-sm font-medium text-white">TN</label>
                    <input type="text" id="tn" v-model="weapon_details.tn" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div>
                    <label for="tag" class="block text-sm font-medium text-white">Tag</label>
                    <input type="text" id="tag" v-model="weapon_details.tag" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div>
                    <label for="damage" class="block text-sm font-medium text-white">Damage</label>
                    <input type="text" id="damage" v-model="weapon_details.damage" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div>
                    <label for="effects" class="block text-sm font-medium text-white">Effects</label>
                    <input type="text" id="effects" v-model="weapon_details.effects" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div>
                    <label for="type" class="block text-sm font-medium text-white">Type</label>
                    <input type="text" id="type" v-model="weapon_details.type" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div>
                    <label for="rate" class="block text-sm font-medium text-white">Rate</label>
                    <input type="text" id="rate" v-model="weapon_details.rate" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div>
                    <label for="range" class="block text-sm font-medium text-white">Range</label>
                    <input type="text" id="range" v-model="weapon_details.range" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div>
                    <label for="qualities" class="block text-sm font-medium text-white">Qualities</label>
                    <input type="text" id="qualities" v-model="weapon_details.qualities" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div>
                    <label for="ammo" class="block text-sm font-medium text-white">Ammo</label>
                    <input type="text" id="ammo" v-model="weapon_details.ammo" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div>
                    <label for="weight" class="block text-sm font-medium text-white">Weight</label>
                    <input type="text" id="weight" v-model="weapon_details.weight" class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
            </div>
              <!-- Modal footer -->
              <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button @click="addWeapon" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Weapon to sheet</button>
              </div>
          </div>
      </div>
  </div>
    </template>
<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import { onMounted } from 'vue';
import axios from 'axios';
const weapon_details = ref({
    name: '',
    skill: '',
    tn: '',
    tag: '',
    damage: '',
    effects: '',
    type: '',
    rate: '',
    range: '',
    qualities: '',
    ammo: '',
    weight: ''
})

const props = defineProps({
  weapons: {
    type: Array,
    required: true,
  },
  modalState: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['updateWeapons', 'updateModalState']);



const weapon_templates = ref([]);
onMounted(async () => {
    try {
        const response = await axios.get('weapons.json');
        weapon_templates.value = response.data;
    } catch (error) {
        console.error(error);
    }
});

const setWeaponTemplate = (event) => {
    const selected_weapon = weapon_templates.value.weapons.find(weapon => weapon.name === event.target.value);
    // for each key in the selected weapon, update the weapon_details object
    for (const key in selected_weapon) {
        weapon_details.value[key] = selected_weapon[key];
    }
}

const addWeapon = () => {
  // Add the weapon_details object to the weapons array
  const newWeapons = [...props.weapons, { ...weapon_details.value }];

  // Emit the new weapons array to the parent component
  emit('updateWeapons', newWeapons);

  // Clear the weapon_details object
  for (const key in weapon_details.value) {
    weapon_details.value[key] = '';
  }
};


</script>