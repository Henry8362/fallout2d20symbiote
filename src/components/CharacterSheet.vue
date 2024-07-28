<template>
<div>
  <form className="container mx-auto">
    <SheetHead :name="name" @update-name="handleUpdateName" :xp_earned="xp_earned" :xp_next_level="xp_next_level" :char_origin="char_origin" :level="level"  />
    <SheetSpecials :specialStats="specialStats" />
    
    <div class="grid grid-cols-1  gap-2 md:grid-cols-2 mt-2">
    <SheetSkills :skills="skills" />
    <SheetCombat className="w-full p-1 bg-gray-300 bg-opacity-80	 border-2 rounded-lg" :right_arm_stats="right_arm_stats" :right_leg_stats="right_leg_stats" :torso_stats="torso_stats" :left_arm_stats="left_arm_stats" :left_leg_stats="left_leg_stats" :head_stats="head_stats" :meleeDamage="meleeDamage" :defense="defense" :initiative="initiative"  />
    </div>
    <SheetWeapons :weapons="weapons" @update-weapons="handleUpdateWeapons" />
    <SheetBiography :caps="caps" :ammo="ammo" @add-ammo="handleAddAmmo" @update-ammo="handleUpdateAmmo" :gear="gear" @add-gear="handleAddGear" @update-gear="handleUpdateGear" :perks="perks" @add-perk="handleAddPerk" @update-perk="handleUpdatePerk" :biography="biography" />

</form> 

</div>

</template>
<script setup>
import { ref, onBeforeMount, watch  } from 'vue';
import SheetSkills from './SheetSkills.vue';
import SheetHead from './SheetHead.vue';
import SheetSpecials from './SheetSpecials.vue';
import SheetCombat from './SheetCombat.vue';
import SheetWeapons from './SheetWeapons.vue';
import SheetBiography from './SheetBiography.vue';

/* When a prop is updated, the parent component will receive the updated value and should use the talespire 
    * to update the character sheet. 
    *  data is stored via localStorage.campaign.setBlob() and retrieved via localStorage.campaign.getBlob()
    * The parent component will then pass the updated value to the child component via props.
*/



onBeforeMount(() => {
  if (typeof TS !== 'undefined' && TS.localStorage && TS.localStorage.campaign) {
    TS.localStorage.campaign.getBlob().then((storedData) => {
      const data = storedData;
      // data is a JSON string, so we need to parse it
      const parsedData = JSON.parse(data);
      // update the props with the stored data
      name.value = parsedData.name;
      xp_earned.value = parsedData.xp_earned;
      xp_next_level.value = parsedData.xp_next_level;
      char_origin.value = parsedData.char_origin;
      level.value = parsedData.level;
      caps.value = parsedData.caps;
      ammo.value = parsedData.ammo;
      gear.value = parsedData.gear;
      perks.value = parsedData.perks;
      biography.value = parsedData.biography;
      skills.value = parsedData.skills;
      specialStats.value = parsedData.specialStats;
      meleeDamage.value = parsedData.meleeDamage;
      defense.value = parsedData.defense;
      initiative.value = parsedData.initiative;
      left_arm_stats.value = parsedData.left_arm_stats;
      left_leg_stats.value = parsedData.left_leg_stats;
      head_stats.value = parsedData.head_stats;
      torso_stats.value = parsedData.torso_stats;
      right_arm_stats.value = parsedData.right_arm_stats;
      right_leg_stats.value = parsedData.right_leg_stats;
      weapons.value = parsedData.weapons;

    
    });

}

watch([ammo, gear, perks, biography, name, xp_earned, xp_next_level, char_origin, level], (updatedProp) => {
  console.log("updated prop" + updatedProp);
  handlePropUpdate(updatedProp);
});
});

const handleUpdateName = (newName) => {
  console.log("new name:" + newName);
  name.value = newName;
};



/* When any sheet prop is updated, we need to save the updated value to the localStorage */

// Listen for any props being updated
const handlePropUpdate = (updatedProp) => {
  if (typeof TS !== 'undefined' && TS.localStorage && TS.localStorage.campaign) {
    const data = prepareBlobStructure(updatedProp);
    TS.localStorage.campaign.setBlob(JSON.stringify(data));
  } else {
    console.error('TS or required methods are not available');
  }
};


const prepareBlobStructure = () => {
  return {
  name: name.value,
  xp_earned: xp_earned.value,
  xp_next_level: xp_next_level.value,
  char_origin: char_origin.value,
  level: level.value,
  caps: caps.value,
  ammo: ammo.value,
  gear: gear.value,
  perks: perks.value,
  biography: biography.value,
  skills: skills,
  specialStats: specialStats,
  meleeDamage: meleeDamage,
  defense: defense,
  initiative: initiative,
  left_arm_stats: left_arm_stats,
  left_leg_stats: left_leg_stats,
  head_stats: head_stats,
  torso_stats: torso_stats,
  right_arm_stats: right_arm_stats,
  right_leg_stats: right_leg_stats,
  weapons: weapons.value
};

};



/* Props for sheet header */

const name = ref("Vault Dweller");
const xp_earned = ref(0);
const xp_next_level = ref(0);
const char_origin = ref("Vault 13");
const level = ref(0);


/* props for biography section */

const caps = ref(0);
const ammo = ref([]);
const gear = ref([]);
const perks = ref([]);
const biography = ref("");

const handleAddAmmo = (newAmmo) => {
  ammo.value.push(newAmmo);
};

const handleUpdateAmmo = (updateAmmo) => {
  // get the index of the ammo object in the array
  const index = ammo.value.findIndex(updateAmmo => updateAmmo.caliber === updateAmmo.caliber);
  console.log("values:" + updateAmmo.caliber + updateAmmo.quantity);
  // update it with the new ammo object values
  ammo.value[index] = updateAmmo;

  console.log(ammo.value)
};


const handleAddGear = (newGear) => {
  gear.value.push(newGear);
};

const handleUpdateGear = (updateGear) => {
  // get the index of the gear object in the array
  const index = gear.value.findIndex(updateGear => updateGear.name === updateGear.name);
  console.log("values:" + updateGear.name + updateGear.quantity);
  // update it with the new gear object values
  gear.value[index] = updateGear;

  console.log(gear.value)

};

const handleAddPerk = (newPerk) => {
  perks.value.push(newPerk);
};

const handleUpdatePerk = (updatePerk) => {
  // get the index of the perk object in the array
  const index = perks.value.findIndex(updatePerk => updatePerk.name === updatePerk.name);
  console.log("values:" + updatePerk.name + updatePerk.rank);
  // update it with the new perk object values
  perks.value[index] = updatePerk;

  console.log(perks.value)

};



// list of skills for SheetSkills component
const skills = ref([
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
])

const specialStats = ref([
    { name: 'Strength', value: 5, label: 'STR' },
    { name: 'Perception', value: 5, label: 'PER' },
    { name: 'Endurance', value: 5, label: 'END' },
    { name: 'Charisma', value: 5, label: 'CHA' },
    { name: 'Intelligence', value: 5, label: 'INT' },
    { name: 'Agility', value: 5, label: 'AGI' },
    { name: 'Luck', value: 5, label: 'LUK'}


])


/* Combat stats */
const meleeDamage = ref(0);
const defense = ref(0);
const initiative = ref(0);
const left_arm_stats = ref({
  label: 'Left Arm (9-11)',
  phys_dr: 0,
  en_dr: 0
})
const left_leg_stats = ref({
  label: 'Left Leg (15-17)',
  phys_dr: 0,
  en_dr: 0
})
const head_stats = ref({
  label: 'Head (1-2)',
  phys_dr: 0,
  en_dr: 0
})
const torso_stats = ref({
  label: 'Torso (3-8)',
  phys_dr: 0,
  en_dr: 0
})
const right_arm_stats = ref({
  label: 'Right Arm (12-14)',
  phys_dr: 0,
  en_dr: 0
})
const right_leg_stats = ref({
  label: 'Right Leg (18-20)',
  phys_dr: 0,
  en_dr: 0
})

const weapons = ref([]);
const handleUpdateWeapons = (newWeapons) => {
  weapons.value = newWeapons;
};



</script>