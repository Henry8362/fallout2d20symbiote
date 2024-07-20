<template>
  <div className="root-bg">
<div class="container mx-auto">
<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Fallout: The Roleplaying Game Character Sheet</h1>
</div>
<CharacterSheet/>
</div>
</template>

<script>
import CharacterSheet from './components/CharacterSheet.vue'

export default {
  name: 'App',
  components: {
    CharacterSheet
  }
}

</script>

<style>
</style>
