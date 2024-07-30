<template>
    <div class="weapon-card w-full p-1 bg-gray-300 bg-opacity-80	 border-2 rounded-lg">
        <h5 class="mb-2 text-2xl font-bold tracking-tight">{{ weapon.name }}</h5>
        <div class="grid grid-cols-2">
            <div class="flex flex-col">
        <p>Skill: {{ weapon.skill }}</p>
        <p>TN: {{ weapon.tn }}</p>
        <p>Tag: {{ weapon.tag }}</p>
        <p>Damage: {{ weapon.damage }}</p>
        <p>Effects: {{ weapon.effects }}</p>
        <p>Type: {{ weapon.type }}</p>
    </div>
    <div class="flex flex-col">
        <p>Rate: {{ weapon.rate }}</p>
        <p>Range: {{ weapon.range }}</p>
        <p>Qualities: {{ weapon.qualities }}</p>
        <p>Ammo: {{ weapon.ammo }}</p>
        <p>Weight: {{ weapon.weight }}</p>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    props: {
        weapon: {
            type: Object,
            required: true
        }
    }
}
</script>