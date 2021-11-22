<template>
    <v-sheet
    style="background-color: unset;"
              min-height="70vh"
              rounded="lg"
            >
            <v-card-title style="justify-content: center;" class="text-caption">
            Endwalker Information is based on past expansions' content cycle and will be updated as information comes out
            </v-card-title>
              <v-expansion-panels accordion>
               <v-expansion-panel v-for="level in levels" :key="level">
                  <v-expansion-panel-header class="text-h6  text-center" @click="reveal = false; reveal2 = false; reveal3 = false; reveal4 = false; reveal5 = false; reveal6 = false;">
                    {{ level.title }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                     <v-row>
                        <v-col v-for="patch in level.patches" :key="patch">
                           <v-tooltip bottom>
                              <template v-slot:activator="{ on, attrs }">
                                 <v-card elevation="0" class="pb-5" style="display: grid; justify-content: center;" v-bind="attrs" v-on="on">
                                    <v-card-title>Patch {{ patch.number }}</v-card-title>
                                    <div class="d-flex flex-row" style="justify-content: center;">
                                       <div v-for="icon in patch.icons" :key="icon">
                                       <v-img
                                          contain
                                          style= "max-width: max-content; justify-self: center;"
                                          :src="icon.icon"
                                       ></v-img>
                                       </div>
                                    </div>
                                 </v-card>
                              </template>
                              <v-card-text class="text-body-1">
                                 {{ patch.text }}
                              </v-card-text>
                           </v-tooltip>
                        </v-col>
                     </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-sheet>
</template>
<style scoped>
.v-expansion-panel-header--active{
  color: #0091ea;
}
.v-expansion-panel--active{
  background-color: #e8e8e8 !important;
}

.v-card{
  background-color: #e8e8e8;
}

.v-card__text{
    white-space: pre;
}
</style>


<script>
const crafted = require('../../assets/crafted.png')
const dungeon = require('../../assets/dungeon.png')
const quest = require('../../assets/quest.png')
const raid = require('../../assets/raid.png')
const savage = require('../../assets/savage.png')
const tomestone = require('../../assets/tomestone.png')
const trial = require('../../assets/trial.png')

  export default {
    data: () => {
      return {
       levels: [
            {
            title: '560',
            patches: [
               { number: '6.0', 
                 icons: [
                    { icon: quest }, 
                    { icon: dungeon }, 
                  ],
                  text: `Quest Gear\nDungeon Gear`
               },
               ]
            },
            {
            title: '570',
            patches: [
               { number: '6.0', 
                 icons: [
                    { icon: tomestone }, 
                  ],
                  text: `Tomestone Gear`
               },
               { number: '6.1',
                  icons: [
                    { icon: dungeon },
                  ],
                  text: `Dungeon Gear` 
               },
               ]
            },
            {
            title: '580',
            patches: [
               { number: '6.0',
                  icons: [
                    { icon: trial },
                  ],
                  text: `EX Trial (Weapon + Accessories)`
               },
               { number: '6.01',
                  icons: [
                    { icon: raid },
                  ],
                  text: `Normal Raid 1-4 (Weekly) `
               },
               { number: '6.05',
                  icons: [
                    { icon: crafted },
                  ],
                  text: `Crafted Gear`
               },
               { number: '6.2',
                  icons: [
                    { icon: dungeon },
                  ],
                  text: `Dungeon Gear`
               },
               ]
            },
            {
            title: '590',
            patches: [
               { number: '6.05', 
                 icons: [
                    { icon: tomestone }, 
                  ],
                  text: `Tomestone Gear (Weekly)`
               },
               { number: '6.1',
                  icons: [
                    { icon: raid },
                    { icon: trial },
                  ],
                  text: `24-man Normal No.1 (Weekly)\nEX Trial (Weapon) (iLvl 595)` 
               },
               { number: '6.2',
                  icons: [
                    { icon: tomestone },
                  ],
                  text: `Tomestone Gear (Unlimited)`
               },
               ]
            },
            {
            title: '600',
            patches: [
               { number: '6.05',
                  icons: [
                    { icon: tomestone },
                    { icon: savage },
                  ],
                  text: `Upgraded Tomestone Gear\nSavage Raid Gear\nSavage Raid Weapon (iLvl 605)`
               },
               { number: '6.3',
                  icons: [
                    { icon: dungeon },
                  ],
                  text: `Dungeon Gear`
               },
               ]
            },
            {
            title: '610',
            patches: [
               { number: '6.2', 
                 icons: [
                    { icon: raid }, 
                    { icon: crafted }, 
                    { icon: trial }, 
                  ],
                  text: `Normal Raid 5-8 (Weekly)\nCrafted Gear\nEX Trial (Weapon) (iLvl 615)`
               },
               { number: '6.4',
                  icons: [
                    { icon: dungeon },
                  ],
                  text: `Dungeon Gear` 
               },
               ]
            },
            {
            title: '620',
            patches: [
               { number: '6.2', 
                 icons: [
                    { icon: tomestone }, 
                  ],
                  text: `Tomestone Gear (Weekly)`
               },
               { number: '6.3',
                  icons: [
                    { icon: raid },
                    { icon: trial },
                  ],
                  text: `24-man Normal No.2 (Weekly)\nEX Trial (Weapon) (iLvl 625)` 
               },
               { number: '6.4',
                  icons: [
                    { icon: tomestone },
                  ],
                  text: `Tomestone Gear (Unlimited)`
               },
               ]
            },
            {
            title: '630',
            patches: [
               { number: '6.2',
                  icons: [
                    { icon: tomestone },
                    { icon: savage },
                  ],
                  text: `Upgraded Tomestone Gear\nSavage Raid Gear\nSavage Raid Weapon (iLvl 635)`
               },
               { number: '6.5',
                  icons: [
                    { icon: dungeon },
                  ],
                  text: `Dungeon Gear`
               },
               ]
            },
            {
            title: '640',
            patches: [
               { number: '6.4', 
                 icons: [
                    { icon: raid }, 
                    { icon: crafted }, 
                    { icon: trial }, 
                  ],
                  text: `Normal Raid 9-12 (Weekly)\nCrafted Gear\nEX Trial (Weapon) (iLvl 645)`
               },
               ]
            },
            {
            title: '650',
            patches: [
               { number: '6.4', 
                 icons: [
                    { icon: tomestone }, 
                  ],
                  text: `Tomestone Gear (Weekly)`
               },
               { number: '6.5',
                  icons: [
                    { icon: raid },
                    { icon: trial },
                  ],
                  text: `24-man Normal No.3 (Weekly)\nEX Trial (Weapon) (iLvl 655)` 
               },
               ]
            },
            {
            title: '660',
            patches: [
               { number: '6.4',
                  icons: [
                    { icon: tomestone },
                    { icon: savage },
                  ],
                  text: `Upgraded Tomestone Gear\nSavage Raid Gear\nSavage Raid Weapon (iLvl 665)`
               },
               ]
            },
      ],
    }
  }
}
</script>