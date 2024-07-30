<template>
<div>
  <form className="container max-w-full mx-auto p-1">
    <SheetHead :charname="charname" @update-charName="handleUpdateCharName" :xp_earned="xp_earned" @update-XpEarned="handlexpEarned" :xp_next_level="xp_next_level" @update-XpNextLevel="handlexpNextLevel" :char_origin="char_origin" @update-charOrigin="handleCharOrigin" :level="level" @update-level="handleLevel"  />
    <SheetSpecials :specialStats="specialStats" @update-special="handleUpdateSpecials" />
    
    <div class="grid grid-cols-1  gap-2 md:grid-cols-2 mt-2">
    <SheetSkills :skills="skills" @update-skill="handleUpdateSkill" />
    <SheetCombat className="w-full p-1 bg-gray-300 bg-opacity-80	 border-2 rounded-lg" @update-stats="handleUpdateCombatStats" :max_hp="max_hp" @update-maxHP="handleUpdateMaxHP" :current_hp="current_hp" @update-currentHP="handleCurrentHP" :poison_dr="poison_dr" @update-poisonDR="handlePoisonDR" :right_arm_stats="right_arm_stats" :right_leg_stats="right_leg_stats" :torso_stats="torso_stats" :left_arm_stats="left_arm_stats" :left_leg_stats="left_leg_stats" :head_stats="head_stats" :meleeDamage="meleeDamage"  @update-meleeDamage="handlemeleeDamage" :defense="defense" @update-defense="handleUpdateDefense" :initiative="initiative" @update-initiative="handleUpdateInitiative"  />
    </div>
    <SheetWeapons :weapons="weapons" @update-weapons="handleUpdateWeapons" @remove-weapons="handleRemoveWeapons" />
    <SheetBiography :caps="caps" @update-caps="handleUpdateCaps" :ammo="ammo" @add-ammo="handleAddAmmo" @update-ammo="handleUpdateAmmo" @remove-ammo="handleRemoveAmmo" :gear="gear" @add-gear="handleAddGear" @update-gear="handleUpdateGear" @remove-gear="handleRemoveGear" :perks="perks" @add-perk="handleAddPerk" @update-perk="handleUpdatePerk" @remove-perk="handleRemovePerk" :biography="biography" @update-biography="handleUpdateBiography" />
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
      if(data != null && data != undefined && data != "") {
      
      const parsedData = JSON.parse(data);
      // update the props with the stored data
      charname.value = parsedData.charname;
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
      max_hp.value = parsedData.max_hp;
      current_hp.value = parsedData.current_hp;
      poison_dr.value = parsedData.poison_dr;

      }

    
    });

}

});

/* SHEETHEAD STUFF ALL FIELDS ARE WORKING */


/* Props for sheet header */

const charname = ref("Vault Dweller");
const xp_earned = ref(0);
const xp_next_level = ref(0);
const char_origin = ref("Vault 13");
const level = ref(0);

/* Handlers and watchers for SheetHead component */

watch([charname, xp_earned, xp_next_level, char_origin, level], (updatedProp) => {
  console.log("updated prop" + updatedProp);
  handlePropUpdate(updatedProp);
});

const handleUpdateCharName = (newName) => {
  console.log("new name:" + newName);
  charname.value = newName;
};

const handlexpEarned = (newXp) => {
  console.log("new xp:" + newXp);
  xp_earned.value = newXp;
};

const handlexpNextLevel = (newXpNextLevel) => {
  console.log("new xp next level:" + newXpNextLevel);
  xp_next_level.value = newXpNextLevel;
};

const handleCharOrigin = (newCharOrigin) => {
  console.log("new char origin:" + newCharOrigin);
  char_origin.value = newCharOrigin;
};

const handleLevel = (newLevel) => {
  console.log("new level:" + newLevel);
  level.value = newLevel;
};


/* SHEET SPECIALS STUFF - DONE */

const specialStats = ref([
    { name: 'Strength', value: 5, label: 'STR' },
    { name: 'Perception', value: 5, label: 'PER' },
    { name: 'Endurance', value: 5, label: 'END' },
    { name: 'Charisma', value: 5, label: 'CHA' },
    { name: 'Intelligence', value: 5, label: 'INT' },
    { name: 'Agility', value: 5, label: 'AGI' },
    { name: 'Luck', value: 5, label: 'LUK'}


])

const handleUpdateSpecials = (name, value) => {
  const index = specialStats.value.findIndex(special => special.name === name);
    const updatedSpecialStats = specialStats.value.map((special, i) =>
      i === index ? { ...special, value: value } : special
    );
    specialStats.value = updatedSpecialStats;
  
};

watch([specialStats], (updatedProp) => {
  console.log("updated prop" + updatedProp);
  handlePropUpdate(updatedProp);
}, { deep: true });





/* props for biography section */

const caps = ref(0);
const ammo = ref([]);
const gear = ref([]);
const perks = ref([]);
const biography = ref("");

watch([caps, ammo, gear, perks, biography], (updatedProp) => {
  console.log("updated prop" + updatedProp);
  handlePropUpdate(updatedProp);
}, { deep: true });

const handleAddAmmo = (newAmmo) => {
  ammo.value.push(newAmmo);
};

const handleUpdateAmmo = (updateAmmo) => {
  // get the index of the ammo object in the array
  const index = ammo.value.findIndex(ammo => ammo.caliber === updateAmmo.caliber);
  const updatedAmmo = ammo.value.map((ammo, i) =>
      i === index ? { ...ammo, quantity: updateAmmo.quantity } : ammo
    );
  console.log("values:" + updateAmmo.caliber + updateAmmo.quantity);
  ammo.value = updatedAmmo;



};

const handleRemoveAmmo = (index) => {
  console.log("index:" + index);
  ammo.value.splice(index, 1);

};


const handleAddGear = (newGear) => {
  gear.value.push(newGear);
};

const handleUpdateGear = (updateGear) => {
  // get the index of the gear object in the array
  const index = gear.value.findIndex(gear => gear.name === updateGear.name);
  console.log("values:" + updateGear.name + updateGear.quantity);
  // update it with the new gear object values
  gear.value[index] = updateGear;

  console.log(gear.value)

};


const handleRemoveGear = (index) => {
  console.log("index:" + index);
  gear.value.splice(index, 1);

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

const handleRemovePerk = (index) => {
  console.log("index:" + index);
  perks.value.splice(index, 1);

};

const handleUpdateBiography = (newBiography) => {
  biography.value = newBiography;
};

const handleUpdateCaps = (newCaps) => {
  caps.value = newCaps;
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

watch([skills], (updatedProp) => {
  handlePropUpdate(updatedProp);
}, {deep: true});

const handleUpdateSkill = (index, value, type) => {


  // update it with the new skill object values
  if(type === 'T') {
    skills.value[index].tagged = value;
  } else {
    console.log([skills.value[index]]);
    skills.value[index].rank = value;
  }

  console.log(skills.value)

};




/* COMBAT SECTION - Complete */



/* Combat stats */
const meleeDamage = ref(0);
const defense = ref(0);
const initiative = ref(0);
const current_hp = ref(0);
const max_hp = ref(0);
const poison_dr = ref(0);
const left_arm_stats = ref({
  label: 'Left Arm (9-11)',
  label_id: 'left_arm',
  phys_dr: 0,
  en_dr: 0,
  hp: 0,
  rad_dr: 0
})
const left_leg_stats = ref({
  label: 'Left Leg (15-17)',
  label_id: 'left_leg',
  phys_dr: 0,
  en_dr: 0,
  hp: 0,
  rad_dr: 0

})
const head_stats = ref({
  label: 'Head (1-2)',
  label_id: 'head',
  phys_dr: 0,
  en_dr: 0,
  hp: 0,
  rad_dr: 0
})
const torso_stats = ref({
  label: 'Torso (3-8)',
  label_id: 'torso',
  phys_dr: 0,
  en_dr: 0,
  hp: 0,
  rad_dr: 0
})
const right_arm_stats = ref({
  label: 'Right Arm (12-14)',
  label_id: 'right_arm',
  phys_dr: 0,
  en_dr: 0,
  hp: 0,
  rad_dr: 0
})
const right_leg_stats = ref({
  label: 'Right Leg (18-20)',
  label_id: 'right_leg',
  phys_dr: 0,
  en_dr: 0,
  hp: 0,
  rad_dr: 0
})


const handlemeleeDamage = (newMeleeDamage) => {
  meleeDamage.value = newMeleeDamage;
};

const handleUpdateDefense = (newDefense) => {
  defense.value = newDefense;
};

const handleUpdateInitiative = (newInitiative) => {
  initiative.value = newInitiative;
};

const handleUpdateMaxHP = (newMaxHP) => {
  max_hp.value = newMaxHP;
};

const handleCurrentHP = (newCurrentHP) => {
  current_hp.value = newCurrentHP;
};

const handlePoisonDR = (newPoisonDR) => {
  console.log("new poison dr:" + newPoisonDR);
  poison_dr.value = newPoisonDR;
};

const handleUpdateCombatStats = (newStats, stat, value) => {
  console.log("new stats on parent:" + newStats, stat, value);
  console.log(newStats);
  switch(newStats) {
    case 'left_arm':
      left_arm_stats.value[stat] = value;
      break;
    case 'left_leg':
      left_leg_stats.value[stat] = value;
      break;
    case 'head':
      head_stats.value[stat] = value;
      break;
    case 'torso':
      torso_stats.value[stat] = value;
      break;
    case 'right_arm':
      right_arm_stats.value[stat] = value;
      break;
    case 'right_leg':
      right_leg_stats.value[stat] = value;
      break;
  }
};

watch([current_hp,max_hp,poison_dr,meleeDamage, defense, initiative, left_arm_stats, left_leg_stats, head_stats, torso_stats, right_arm_stats, right_leg_stats ], (updatedProp) => {
  console.log("Watcher triggered for combat stats");
  handlePropUpdate(updatedProp);
}, { deep: true });







/* Handlers and watchers for weapon section */


const weapons = ref([]);
const handleUpdateWeapons = (newWeapons) => {
  weapons.value = newWeapons;
};
const handleRemoveWeapons = (index) => {
  weapons.value.splice(index, 1);
};

/* When any sheet prop is updated, we need to save the updated value to the localStorage */

// Listen for any props being updated
const handlePropUpdate = (updatedProp) => {
  if (typeof TS !== 'undefined' && TS.localStorage && TS.localStorage.campaign) {
    console.log("updated prop" + updatedProp);
    const data = prepareBlobStructure(updatedProp);
    console.log("updating the talespire blob");
    TS.localStorage.campaign.setBlob(JSON.stringify(data));
    console.log("updated the talespire blob");
  } else {
    console.error('TS or required methods are not available');
  }
};


const prepareBlobStructure = () => {
  return {
  charname: charname.value,
  xp_earned: xp_earned.value,
  xp_next_level: xp_next_level.value,
  char_origin: char_origin.value,
  level: level.value,
  caps: caps.value,
  ammo: ammo.value,
  gear: gear.value,
  perks: perks.value,
  biography: biography.value,
  skills: skills.value,
  specialStats: specialStats.value,
  meleeDamage: meleeDamage.value,
  defense: defense.value,
  initiative: initiative.value,
  max_hp: max_hp.value,
  current_hp: current_hp.value,
  poison_dr: poison_dr.value,
  left_arm_stats: left_arm_stats.value,
  left_leg_stats: left_leg_stats.value,
  head_stats: head_stats.value,
  torso_stats: torso_stats.value,
  right_arm_stats: right_arm_stats.value,
  right_leg_stats: right_leg_stats.value,
  weapons: weapons.value
};

};

</script>