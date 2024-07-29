<template>
<div>
    <div class="bg-black text-white text-center">
        {{ props.stats.label }}
    </div>
    <div class="flex flex-col">
                <div class="grid grid-cols-2 bg-green-300">
                    <div className="flex">
                        <label for="left-arm-phys-dr" className="w-4/6 content-center pl-1">Phys. DR:</label>
                        <input type="number" id="left-arm-phys-dr" className="w-2/6" :="props.stats.phys_dr" @input="updateStats('phys_dr', $event)" />
                    </div>
                    <div className="flex">
                        <label for="left-arm-rad-dr" className="w-4/6 content-center pl-1">Rad. DR:</label>
                        <input type="number" id="left-arm-rad-dr" className="w-2/6" :="props.stats.rad_dr" @input="updateState('rad_dr', $event)" />
                    </div>
                </div>
        <div class="grid grid-cols-2 bg-green-100">
            <div className="flex">
                <label for="left-arm-en-dr" className="w-4/6 content-center pl-1">En. DR:</label>
                <input type="number" id="left-arm-en-dr" className="w-2/6" :="props.stats.en_dr" @input="updateStats('en_dr', $event)" />
            </div>
            <div className="flex">
                <label for="left-arm-hp" className="w-4/6 content-center pl-1">HP:</label>
                <input type="number" id="left-arm-hp" className="w-2/6" :="props.stats.hp" @input="updateStats('hp', $event)" />
            </div>
        </div>
    </div>
</div> 
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
    stats: {
        type: Object,
        required: true
    }
});

// stats is an object 
// stats = {
//     label: 'Left Arm',
//     label_id: 'left_arm',
//     phys_dr: 0,
//     rad_dr: 0,
//     en_dr: 0,
//     hp: 0
// }




const emit = defineEmits(['updateStats']);

const updateStats = (changedStat, event) => {
    

    emit('updateStats', props.stats, changedStat, event.target.value);

}




</script>