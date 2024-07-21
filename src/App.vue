<template>
  <div className="root-bg">
<div class="container mx-auto">
<img className="pt-4 mb-2" src="@/assets/sheet_title_white.png" />
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
