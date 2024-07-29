<template>
<div class="grid md:grid-cols-2 gap-2">
    <div>
        <img className="pt-2 mb-2 " src="@/assets/caps_heading.png" />
        <div class="w-full md:w-3/6">
            <input type="text" id="caps" class="w-2/6" :value="props.caps" @input="updateCaps" />
        </div>
        <img className="pt-2 mb-2 " src="@/assets/ammo_heading.png" />
        <button @click="addAmmo" type="button" class="ml-1 mb-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
        <div class="w-full md:w-5/6">
            <table>
                <thead>
                    <tr>
                        <th class="bg-black text-white text-start text-lg">CALIBER</th>
                        <th class="bg-black text-white text-start text-lg">QUANTITY</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="ammo in props.ammo" :key="ammo.name" class=" font-bold text-lg bg-white text-black p-1 border-b-2 border-dotted border-gray-400" :class="{ 'border-b-0': ammo === ammo[ammo.length - 1] }">
                        <td><input type="text" v-model="ammo.caliber" @input="updateAmmo(ammo.caliber, ammo.quantity)"></td>
                        <td><input type="number" v-model="ammo.quantity" @input="updateAmmo(ammo.caliber, ammo.quantity)"></td>
                    </tr>
                </tbody>

            </table>
        </div>
        <img className="pt-2 mb-2 " src="@/assets/gear_heading.png" />
        <button @click="addGear" type="button" class="ml-1 mb-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>

        <div class="w-full md:w-5/6">
            <table>
                <thead>
                    <tr>
                        <th class="bg-black text-white text-start text-lg">AMOUNT</th>
                        <th class="bg-black text-white text-start text-lg">ITEM</th>
                        <th class="bg-black text-white text-start text-lg">LBS.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="gear in props.gear" :key="gear.name" class=" font-bold text-lg bg-white text-black p-1 border-b-2 border-dotted border-gray-400" :class="{ 'border-b-0': ammo === ammo[ammo.length - 1] }">
                        <td><input type="number" v-model="gear.quantity" @input="updateGear"></td>
                        <td><input type="text" v-model="gear.name" @input="updateGear"></td>
                        <td><input type="number" v-model="gear.weight" @input="updateGear"></td>
                    </tr>
                </tbody>

            </table>
        </div>
    </div>
    <div>
        <img className="pt-2 mb-2 " src="@/assets/perks_heading.png" />
        <button @click="addPerk" type="button" class="ml-1 mb-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
        <div class="w-full md:w-5/6">
            <table>
                <thead>
                    <tr>
                        <th class="bg-black text-white text-start text-lg">NAME</th>
                        <th class="bg-black text-white text-start text-lg">RANK</th>
                        <th class="bg-black text-white text-start text-lg">EFFECT</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="perk in props.perks" :key="perk.name" class=" font-bold text-lg bg-white text-black p-1 border-b-2 border-dotted border-gray-400" :class="{ 'border-b-0': perk === perk[perk.length - 1] }">
                        <td><input type="text" v-model="perk.name" @input="updatePerk"></td>
                        <td><input type="number" v-model="perk.rank" @input="updatePerk"></td>
                        <td><input type="text" v-model="perk.effect" @input="updatePerk"></td>
                    </tr>
                </tbody>

            </table>
        </div>
        <img className="pt-2 mb-2 " src="@/assets/biography_heading.png" />
        <div class="w-full md:w-5/6">
            <textarea class="w-full" id="biography" :value="props.biography" @input="updateBiography"></textarea>
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
    perks: {
        type: Array,
        required: true
    },
    biography: {
        type: String,
        required: true
    },
    caps: {
        type: Number,
        required: true
    },
});
const emit = defineEmits(['addAmmo', 'updateAmmo', 'addGear', 'updateGear', 'addPerk', 'updatePerk', 'updateBiography','updateCaps']);
const addAmmo = () => {
// add a new empty ammo object to the ammo array
const newAmmo = {
    caliber: '',
    quantity: 0
};
// Emit the new weapons array to the parent component
emit('addAmmo', newAmmo);
};

const addGear = () => {
// add a new empty gear object to the gear array
const newGear = {
    name: '',
    weight: 0,
    quantity: 0
};

emit('addGear', newGear);


};

const addPerk = () => {
// add a new empty perk object to the perk array
const newPerk = {
    name: '',
    rank: 0,
    effect: '',
};
emit('addPerk', newPerk);
};

const updatePerk = () => {
console.log('updatePerk');
// get the index of the ammo object in the array
const index = props.perks.findIndex(perk => perk.name === perk.name);
console.log(index);
// emit the caliber and quantity to the parent component
const updatePerk = {
    name: props.perks[index].name,
    rank: props.perks[index].rank,
    effect: props.perks[index].effect
};
emit('updatePerk', updatePerk);
};




const updateAmmo = (caliber, quantity) => {

// emit the caliber and quantity to the parent component
const updateAmmo = {
    caliber: caliber,
    quantity: quantity
};

emit('updateAmmo', updateAmmo);
};

const updateGear = () => {
console.log('updateGear');
// get the index of the ammo object in the array
const index = props.gear.findIndex(gear => gear.name === gear.name);
console.log(index);
// emit the caliber and quantity to the parent component
const updateGear = {
    caliber: props.gear[index].name,
    weight: props.gear[index].weight,
    quantity: props.gear[index].quantity
};

emit('updateGear', updateGear);
};


const updateBiography = (biography) => {

emit('updateBiography', biography.target.value);

};


const updateCaps = (caps) => { 
emit('updateCaps', caps.target.value);
};

</script>