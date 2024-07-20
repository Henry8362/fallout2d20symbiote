<template>
<div>
  <form className="container mx-auto">
    <SheetHead />
    <SheetSpecials :specialStats="specialStats" />
    <div class="flex">
    <SheetSkills :skills="skills" className="w-1/5" />
    <SheetCombat className="w-4/5" :right_arm_stats="right_arm_stats" :right_leg_stats="right_leg_stats" :torso_stats="torso_stats" :left_arm_stats="left_arm_stats" :left_leg_stats="left_leg_stats" :head_stats="head_stats" :meleeDamage="meleeDamage" :defense="defense" :initiative="initiative"  />
    </div>
    <SheetWeapons :weapons="weapons" />

</form> 

</div>

</template>
<script setup>
import SheetSkills from './SheetSkills.vue';
import SheetHead from './SheetHead.vue';
import SheetSpecials from './SheetSpecials.vue';
import SheetCombat from './SheetCombat.vue';
import SheetWeapons from './SheetWeapons.vue';

// list of skills for SheetSkills component
const skills = [
  { name: 'Athletics', tagged: false, stat: 'STR', rank: 0 },
  { name: 'Barter', tagged: false, stat: 'CHA', rank: 0 },
  { name: 'Big Guns', tagged: false, stat: 'END',rank: 0 },
  { name: 'Energy Weapons', tagged: false, stat: 'PER',rank: 0 },
  { name: 'Explosives', tagged: false, stat: 'PER',rank: 0 },
  { name: 'Lockpick', tagged: false, stat: 'PER',rank: 0 },
  { name: 'Medicine', tagged: false, stat: 'INT',rank: 0 },
  { name: 'Melee Weapons', tagged: false, stat: 'STR',rank: 0 },
  { name: 'Pilot', tagged: false, stat: 'PER',rank: 0 },
  { name: 'Repair', tagged: false, stat: 'INT',rank: 0 },
  { name: 'Science', tagged: false, stat: 'INT',rank: 0 },
  { name: 'Small Guns', tagged: false, stat: 'AGI',rank: 0 },
  { name: 'Sneaks', tagged: false, stat: 'AGI',rank: 0 },
  { name: 'Speech', tagged: false, stat: 'CHA',rank: 0 },
  { name: 'Survival', tagged: false, stat: 'PER',rank: 0 },
  { name: 'Throwing', tagged: false, stat: 'AGI',rank: 0 },
  { name: 'Unarmed', tagged: false, stat: 'STR',rank: 0 },
]

const specialStats = [
    { name: 'Strength', value: 5 },
    { name: 'Perception', value: 5 },
    { name: 'Endurance', value: 5 },
    { name: 'Charisma', value: 5 },
    { name: 'Intelligence', value: 5 },
    { name: 'Agility', value: 5 },
    { name: 'Luck', value: 5 },


]


/* Combat stats */
const meleeDamage = 0;
const defense = 0;
const initiative = 0;
const left_arm_stats = {
  label: 'Left Arm (9-11)',
  phys_dr: 0,
  en_dr: 0
}
const left_leg_stats = {
  label: 'Left Leg (15-17)',
  phys_dr: 0,
  en_dr: 0
}
const head_stats = {
  label: 'Head (1-2)',
  phys_dr: 0,
  en_dr: 0
}
const torso_stats = {
  label: 'Torso (3-8)',
  phys_dr: 0,
  en_dr: 0
}
const right_arm_stats = {
  label: 'Right Arm (12-14)',
  phys_dr: 0,
  en_dr: 0
}
const right_leg_stats = {
  label: 'Right Leg (18-20)',
  phys_dr: 0,
  en_dr: 0
}

const weapons = { 


}

</script>