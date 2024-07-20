<template>
<div>
  <form className="container mx-auto">
    <SheetHead :name="name" :xp_earned="xp_earned" :xp_next_level="xp_next_level" :char_origin="char_origin" :level="level" />
    <SheetSpecials :specialStats="specialStats" />
    
    <div class="grid grid-cols-1  md:grid-cols-2 mt-2">
    <SheetSkills :skills="skills" className="w-full md:w-5/6 bg-gray-300 border-2 border-black" />
    <SheetCombat className="w-full bg-gray-300 border-2 border-black" :right_arm_stats="right_arm_stats" :right_leg_stats="right_leg_stats" :torso_stats="torso_stats" :left_arm_stats="left_arm_stats" :left_leg_stats="left_leg_stats" :head_stats="head_stats" :meleeDamage="meleeDamage" :defense="defense" :initiative="initiative"  />
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

/* When a prop is updated, the parent component will receive the updated value and should use the talespire 
    * to update the character sheet. 
    *  data is stored via localStorage.campaign.setBlob() and retrieved via localStorage.campaign.getBlob()
    * The parent component will then pass the updated value to the child component via props.
*/






/* Props for sheet header */

const name = "Henry";
const xp_earned = 200
const xp_next_level = 600
const char_origin = "Vault 13";
const level = 0;





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
    { name: 'Strength', value: 5, label: 'STR' },
    { name: 'Perception', value: 5, label: 'PER' },
    { name: 'Endurance', value: 5, label: 'END' },
    { name: 'Charisma', value: 5, label: 'CHA' },
    { name: 'Intelligence', value: 5, label: 'INT' },
    { name: 'Agility', value: 5, label: 'AGI' },
    { name: 'Luck', value: 5, label: 'LUK'}


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