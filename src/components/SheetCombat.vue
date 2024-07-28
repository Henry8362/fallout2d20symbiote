<template>
    <div class="container mx-auto p-4 bg-gray-300 bg-opacity-80	 border-2 rounded-lg">
        <img className="pt-2 mb-2" src="@/assets/combat_heading.png" />
        <div class="flex gap-2">
            <div class="flex">
                <label for="meleeDamage" class="w-1/4 pl-1 bg-black text-white content-center font-bold">Melee Damage:</label>
                <input type="number" id="meleeDamage" class="w-3/4 content-center" :value="meleeDamage" @input="updateMeleeDamage" />
            </div>
                <div class="flex">
                    <label for="defense" class="w-2/4 pl-1 bg-black text-white content-center font-bold">Defense:</label>
                    <input type="number" id="defense" class="w-2/4 content-center" :value="defense" @input="updateDefense" />
                </div>
            <div>
                <div class="flex">
                    <label for="initiative" class="w-2/4 pl-1 bg-black text-white content-center font-bold">Initiative:</label>
                    <input type="number" id="initiative" class="w-2/4 content-center" :value="initiative" @input="updateInitiative"  />
                </div>
            </div>
        </div>
        <div class="grid grid-cols-3 gap-4 mt-1">
            <div>
                <div class="flex">
                    <label for="poison-dr" class="w-2/4 pl-1 bg-black text-white content-center font-bold">Poison DR:</label>
                    <input type="text" id="poison-dr" class="w-2/4 content-center" :value="poison_dr" @input="updatePoisonDR" />
                </div>
                <SheetCombatBodyPart class="mt-1" :stats="left_arm_stats" />
                <SheetCombatBodyPart class="mt-1" :stats="left_leg_stats" />

            </div>
            <div>
                <SheetCombatBodyPart class="mt-1" :stats="head_stats" />
                <SheetCombatBodyPart class="mt-1" :stats="torso_stats" />


            </div>
            <div>
                <div class="flex p-1">
                    <label for="max-hp" class="w-3/6 bg-black text-white content-center pl-1">Max HP</label>
                    <input type="text" id="max-hp" class="w-3/6" v-model="max_hp" />
                    <label for="current-hp" class="w-3/6 bg-black text-white content-center pl-1">Current HP</label>
                    <input type="text" id="current-hp" class="w-3/6" v-model="current_hp" />


                </div>
                <SheetCombatBodyPart class="mt-1" :stats="right_arm_stats" />
                <SheetCombatBodyPart class="mt-1" :stats="right_leg_stats" />
            </div>
        </div>
    </div>
</template>

<script setup>
import SheetCombatBodyPart from './SheetCombatBodyPart.vue';
import { defineProps, defineEmits } from 'vue';

defineProps({
    meleeDamage: {
        type: Number,
        required: true
    },
    defense: {
        type: Number,
        required: true
    },
    initiative: {
        type: Number,
        required: true
    },
    left_arm_stats: {
        type: Array,
        required: true
    },
    left_leg_stats: {
        type: Array,
        required: true
    },
    head_stats: {
        type: Array,
        required: true
    },
    torso_stats: {
        type: Array,
        required: true
    },
    right_arm_stats: {
        type: Array,
        required: true
    },
    right_leg_stats: {
        type: Array,
        required: true
    },
});

const emit = defineEmits(['updateMeleeDamage', 'updateDefense', 'updateInitiative']);

const updateMeleeDamage = (newMeleeDamage) => {
    const meleeDamage = newMeleeDamage.target.value;
    emit('updateMeleeDamage', meleeDamage);
};

const updateDefense = (newDefense) => {
    const defense = newDefense.target.value;
    emit('updateDefense', defense);
};

const updateInitiative = (newInitiative) => {
    const initiative = newInitiative.target.value;
    emit('updateInitiative', initiative);
};


</script>
