<template>
<div class="p-1">
    <div class="bg-black text-white text-center">
        {{ stats.label }}
    </div>
    <div class="flex flex-col">
                <div class="grid grid-cols-2 bg-green-300">
                    <div className="flex">
                        <label for="left-arm-phys-dr" className="w-4/6">Phys. DR:</label>
                        <input type="text" id="left-arm-phys-dr" className="w-2/6" v-model="left_arm_phys_dr" />
                    </div>
                    <div className="flex">
                        <label for="left-arm-rad-dr" className="w-4/6">Rad. DR:</label>
                        <input type="text" id="left-arm-rad-dr" className="w-2/6" v-model="left_arm_rad_dr" />
                    </div>
                </div>
        <div class="grid grid-cols-2 bg-green-100">
            <div className="flex">
                <label for="left-arm-en-dr" className="w-4/6">En. DR:</label>
                <input type="text" id="left-arm-en-dr" className="w-2/6" v-model="left_arm_en_dr" />
            </div>
            <div className="flex">
                <label for="left-arm-hp" className="w-4/6">HP:</label>
                <input type="text" id="left-arm-hp" className="w-2/6" v-model="left_arm_hp" />
            </div>
        </div>
    </div>
</div> 
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
    stats: {
        type: Array,
        required: true
    }
});



</script>