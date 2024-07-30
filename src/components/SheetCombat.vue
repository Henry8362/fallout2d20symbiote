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
        <div class="flex gap-2">
            <div class="flex">
                <label for="poison-dr" class="w-2/4 pl-1 bg-black text-white content-center font-bold">Poison DR:</label>
                    <input type="number" id="poison-dr" class="w-2/4 content-center" :value="poison_dr" @input="updatePoisonDR" />
            </div>
                <div class="flex">
                    <label for="max-hp" class="w-3/6 bg-black text-white content-center pl-1">Max HP</label>
                    <input type="number" id="max-hp" class="w-3/6" :value="max_hp" @input="updateMaxHP" />
                </div>
            <div>
                <div class="flex">
                    <label for="current-hp" class="w-3/6 bg-black text-white content-center pl-1">Current HP</label>
                    <input type="text" id="current-hp" class="w-3/6" :value="current_hp" @input="updateCurrentHP" />
                </div>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-1">
            <div class="flex flex-col">
                <SheetCombatBodyPart class="mt-1" :stats="head_stats" @update-stats="handleStats" />
                <SheetCombatBodyPart class="mt-1" :stats="left_arm_stats" @update-stats="handleStats" />
                <SheetCombatBodyPart class="mt-1" :stats="left_leg_stats"  @update-stats="handleStats" />

            </div>
            <div class="flex flex-col">
                <SheetCombatBodyPart class="mt-1" :stats="torso_stats" @update-stats="handleStats" />
                <SheetCombatBodyPart class="mt-1" :stats="right_arm_stats" @update-stats="handleStats" />
                <SheetCombatBodyPart class="mt-1" :stats="right_leg_stats" @update-stats="handleStats" />

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
    poison_dr: {
        type: Number,
        required: true
    },
    max_hp: {
        type: Number,
        required: true
    },
    current_hp: {
        type: Number,
        required: true
    },
    left_arm_stats: {
        type: Object,
        required: true
    },
    left_leg_stats: {
        type: Object,
        required: true
    },
    head_stats: {
        type: Object,
        required: true
    },
    torso_stats: {
        type: Object,
        required: true
    },
    right_arm_stats: {
        type: Object,
        required: true
    },
    right_leg_stats: {
        type: Object,
        required: true
    },
});

const emit = defineEmits(['updateMeleeDamage', 'updateDefense', 'updateInitiative', 'updatePoisonDR', 'updateMaxHP', 'updateCurrentHP']);

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

const updatePoisonDR = (newPoisonDR) => {
    const poison_dr = newPoisonDR.target.value;
    emit('updatePoisonDR', poison_dr);
};

const updateMaxHP = (newMaxHP) => {
    const max_hp = newMaxHP.target.value;
    emit('updateMaxHP', max_hp);
};

const updateCurrentHP = (newCurrentHP) => {
    const current_hp = newCurrentHP.target.value;
    emit('updateCurrentHP', current_hp);
};

const handleStats = (newStats, stat, value) => {
    console.log('handleStats on SheetCombat.vue');
    console.log(newStats, stat, value);
    emit('updateStats', newStats, stat, value);
};

</script>
