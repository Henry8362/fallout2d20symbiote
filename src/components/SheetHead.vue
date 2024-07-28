<template>
    <div class="container mx-auto p-4 mb-2 bg-gray-300 bg-opacity-80 border-2 rounded-lg">
        <div class="grid grid-cols-3">
            <div class="flex flex-col">
                <div className="h-2/6 md:w-3/6 flex">
                <label class="w-1/4 pl-1 bg-black text-white content-center font-bold" for="charname">Name:</label>
                <input class="w-3/4 content-center" type="text" id="charname" name="charname" :value="props.charname" @input="updateCharName">
            </div>
                <label class="inline-flex cursor-pointer mt-2">
  <input type="checkbox" value="" class="sr-only peer">
  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ms-3 text-sm font-medium">Human / Robot</span>
</label>
            </div>
        <div class="flex items-center">
                <div class="flex flex-col">
                    <div class="flex items-center bg-black border-b-2 border-dotted border-gray-400">
                        <label class="w-2/4 pl-1 bg-black text-white content-center font-bold" for="xp-earned">XP Earned:</label>
                        <input class="w-3/4 content-center" type="text" id="xp-earned" name="xp-earned" :value="props.xp_earned" @input="updateXpEarned">
                    </div>
                    <div class="flex items-center bg-black border-b-2 border-dotted border-gray-400">
                        <label class="w-2/4 pl-1 bg-black text-white content-center font-bold h-full	" for="xp-next-level">XP to next level:</label>
                        <input class="w-3/4  content-center" type="text" id="xp-next-level" name="xp-next-level" :value="props.xp_next_level" @input="updateXpNextLevel" >
                    </div>
                    <div class="flex items-center bg-black">
                        <label class="w-2/4 pl-1 bg-black text-white content-center font-bold h-full	" for="char-origin">Origin:</label>
                        <input class="w-3/4 content-center" type="text" id="char-origin" name="char-origin" :value="props.char_origin" @input="updateCharOrigin" >
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center gear-bg">
                    <label class="w-2/6 bg-black text-white text-center" for="char-origin">Level:</label>
                    <input type="number" className="w-2/6" id="level" name="level" :value="props.level" @input="updateLevel" >
                </div>
        </div>
    </div>
</template>
<script setup>
// get props from parent
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
    charname: {
        type: String,
        required: true
    },
    xp_earned: {
        type: Number,
        required: true
    },
    xp_next_level: {
        type: Number,
        required: true
    },
    char_origin: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    }
});

const emit = defineEmits(['updateCharName', 'updateXpEarned', 'updateXpNextLevel', 'updateCharOrigin', 'updateLevel']);

const updateCharName = (newName) => {
    const charname = newName.target.value;
    emit('updateCharName', charname);
};

const updateXpEarned = (newXp) => {
    const xp = newXp.target.value;
    emit('updateXpEarned', xp);
};

const updateXpNextLevel = (newXpNextLevel) => {
    const xpNextLevel = newXpNextLevel.target.value;
    emit('updateXpNextLevel', xpNextLevel);
};

const updateCharOrigin = (newCharOrigin) => {
    const charOrigin = newCharOrigin.target.value;
    emit('updateCharOrigin', charOrigin);
};

const updateLevel = (newLevel) => {
    const level = newLevel.target.value;
    emit('updateLevel', level);
};





</script>