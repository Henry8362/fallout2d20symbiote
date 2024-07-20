<template>
<div className="container mx-auto p-4">
    <div className="flex flex-row">
        <div className="w-3/5">
    <label for="name">Character Name:</label>
    <input type="text" id="name" name="name" v-model="name">
</div>
<div className="w-2/5 flex flex-col">
    <label for="xp-earned">XP Earned:</label>
    <input type="text" id="xp-earned" name="xp-earned" v-model="xp_earned">
    <label for="xp-next-level">XP to next level:</label>
    <input type="text" id="xp-next-level" name="xp-next-level" v-model="xp_next_level">
    <label for="char-origin">Origin:</label>
    <input type="text" id="char-origin" name="char-origin" v-model="char_origin">
    <label for="char-level">Level:</label>
    <input type="text" id="char-level" name="char-level" v-model="char_level">
</div>

</div>
</div>
</template>
<script setup>
</script>