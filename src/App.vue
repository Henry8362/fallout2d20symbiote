<template>
  <div class="root-bg">
    <div class="container mx-auto" v-if="initialized">
      <img class="pt-4 mb-2" src="@/assets/sheet_title_white.png" />
      <CharacterSheet/>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CharacterSheet from './components/CharacterSheet.vue'

const initialized = ref(false);


function onStateChangeEvent(event) {
  const msg = event.kind;
  if (msg === "hasInitialized") {
    initialized.value = true;
  }
}

window.onStateChangeEvent = onStateChangeEvent;




</script>

<style>
</style>
