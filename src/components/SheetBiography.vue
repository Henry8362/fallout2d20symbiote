<template>
<div class="grid grid-cols-2 gap-2">
    <div>
        <img className="pt-2 mb-2 " src="@/assets/caps_heading.png" />
        <div class="w-3/6">
            <input type="text" id="caps" class="w-2/6" v-model="caps" />
        </div>
        <img className="pt-2 mb-2 " src="@/assets/ammo_heading.png" />
        <button @click="addAmmo" type="button" class="ml-1 mb-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
        <div class="w-5/6">
            <table>
                <thead>
                    <tr>
                        <th class="bg-black text-white text-start text-lg">CALIBER</th>
                        <th class="bg-black text-white text-start text-lg">QUANTITY</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="ammo in props.ammo" :key="ammo.name" class=" font-bold text-lg bg-white text-black p-1 border-b-2 border-dotted border-gray-400" :class="{ 'border-b-0': ammo === ammo[ammo.length - 1] }">
                        <td><input type="text" v-model="ammo.caliber" @input="updateAmmo"></td>
                        <td><input type="number" v-model="ammo.quantity" @input="updateAmmo"></td>
                    </tr>
                </tbody>

            </table>
        </div>
        <img className="pt-2 mb-2 " src="@/assets/gear_heading.png" />
        <div class="w-5/6">
            <table>
                <thead>
                    <tr>
                        <th class="bg-black text-white text-start text-lg">ITEM</th>
                        <th class="bg-black text-white text-start text-lg">LBS.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="gear in props.gear" :key="gear.name" class=" font-bold text-lg bg-white text-black p-1 border-b-2 border-dotted border-gray-400" :class="{ 'border-b-0': ammo === ammo[ammo.length - 1] }">
                        <td>{{ gear.caliber }}</td>
                        <td>{{ gear.quantity }}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    </div>
    <div>
        <img className="pt-2 mb-2 " src="@/assets/perks_heading.png" />
        <div class="w-5/6">
            <table>
                <thead>
                    <tr>
                        <th class="bg-black text-white text-start text-lg">NAME</th>
                        <th class="bg-black text-white text-start text-lg">RANK</th>
                        <th class="bg-black text-white text-start text-lg">EFFECT</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="perk in perks" :key="perk.name" class=" font-bold text-lg bg-white text-black p-1 border-b-2 border-dotted border-gray-400" :class="{ 'border-b-0': perk === perk[perk.length - 1] }">
                        <td>{{ perk.name }}</td>
                        <td>{{ perk.rank }}</td>
                        <td>{{ perk.effect }}</td>
                    </tr>
                </tbody>

            </table>
        </div>
        <img className="pt-2 mb-2 " src="@/assets/biography_heading.png" />
        <div class="w-5/6">
            <input type="text" id="biography" v-model="biography" />
        </div>
    </div>

</div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    ammo: {
        type: Array,
        required: true
    },
    gear: {
        type: Array,
        required: true
    },
});
const emit = defineEmits(['addAmmo', 'updateAmmo']);
const addAmmo = () => {
// add a new empty ammo object to the ammo array
const newAmmo = {
    caliber: '',
    quantity: 0
};

// Emit the new weapons array to the parent component
emit('addAmmo', newAmmo);
};
const updateAmmo = () => {
console.log('updateAmmo');
// get the index of the ammo object in the array
const index = props.ammo.findIndex(ammo => ammo.caliber === ammo.caliber);
console.log(index);
// emit the caliber and quantity to the parent component
const updateAmmo = {
    caliber: props.ammo[index].caliber,
    quantity: props.ammo[index].quantity
};

emit('updateAmmo', updateAmmo);
};
</script>