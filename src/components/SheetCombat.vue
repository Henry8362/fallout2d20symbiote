<template>
    <div class="container mx-auto p-4">
        <div>Combat</div>
        <div class="flex">
            <div class="flex">
                <label for="meleeDamage" class="w-3/6 bg-black text-white">Melee Damage:</label>
                <input type="text" id="meleeDamage" class="w-3/6" v-model="meleeDamage" />
            </div>
            <div class="mr-4">
                <label for="defense" class="w-3/6 bg-black text-white">Defense:</label>
                <input type="text" id="defense" class="w-3/6" v-model="defense" />
            </div>
            <div>
                <label for="initiative" class="w-3/6 bg-black text-white">Initiative:</label>
                <input type="text" id="initiative" class="w-3/6" v-model="initiative" />
            </div>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <div>
                <div class="flex p-1">
                    <label for="meleeDamage" class="w-3/6 bg-black text-white">Poison DR</label>
                    <input type="text" id="poison-dr" class="w-3/6" v-model="poison_dr" />
                </div>
                <SheetCombatBodyPart :stats="left_arm_stats" />
                <SheetCombatBodyPart :stats="left_leg_stats" />

            </div>
            <div>
                <SheetCombatBodyPart :stats="head_stats" />
                <SheetCombatBodyPart :stats="torso_stats" />


            </div>
            <div>
                <div class="flex p-1">
                    <label for="max-hp" class="w-3/6 bg-black text-white">Max HP</label>
                    <input type="text" id="max-hp" class="w-3/6" v-model="max_hp" />
                    <label for="current-hp" class="w-3/6 bg-black text-white">Current HP</label>
                    <input type="text" id="current-hp" class="w-3/6" v-model="current_hp" />


                </div>
                <SheetCombatBodyPart :stats="right_arm_stats" />
                <SheetCombatBodyPart :stats="right_leg_stats" />
            </div>
        </div>
    </div>
</template>

<script setup>
import SheetCombatBodyPart from './SheetCombatBodyPart.vue';
import { defineProps } from 'vue';

defineProps({
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
</script>
