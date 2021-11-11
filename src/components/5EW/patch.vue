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
                <v-expansion-panel v-for="patch in patches" :key="patch">
                  <v-expansion-panel-header class="text-h6  text-center" @click="reveal = false; reveal2 = false; reveal3 = false; reveal4 = false; reveal5 = false; reveal6 = false;">
                    {{ patch.title }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                     <v-row>
                        <v-col v-for="ilvl in patch.ilvls" :key="ilvl">
                           <v-tooltip bottom>
                              <template v-slot:activator="{ on, attrs }">
                                 <v-card elevation="0" class="pb-5" style="display: grid; justify-content: center;" v-bind="attrs" v-on="on">
                                  <v-card-title>{{ ilvl.number }} iLvl</v-card-title>
                                    <div class="d-flex flex-row" style="justify-content: center;">
                                       <div v-for="icon in ilvl.icons" :key="icon">
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
                                 {{ ilvl.text }}
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
       patches: [
            {
            title: '6.0',
            ilvls: [
               { number: '560', 
                 icons: [
                    { icon: quest }, 
                    { icon: dungeon }, 
                  ],
                  text: `Quest Gear\nDungeon Gear`
               }, 
               {  number: '570',
                  icons: [
                     { icon: tomestone },
                  ],
                  text: `Tomestone Gear`
               },
               { number: '580',
                  icons: [
                    { icon: trial }, 
                    { icon: raid },
                    { icon: crafted },
                  ],
                  text: `EX Trial (Weapon + Accessories)\nNormal Raid 1-4 (Weekly) (Patch 6.01)\nCrafted Gear (Patch 6.05)` 
               },
               { number: '590',
                  icons: [
                    { icon: tomestone },
                  ],
                  text: `Tomestone Gear (Weekly) (Patch 6.05)`
               },
               { number: '600',
                  icons: [
                    { icon: tomestone },
                    { icon: savage },
                  ],
                  text: `Savage Raid Gear (Patch 6.05)\nUpgraded Tomestone Gear (Patch 6.05)\nSavage Raid Weapon (iLvl 605) (Patch 6.05)`
               },
               ]
            },
            {
            title: '6.1',
            ilvls: [
               { number: '575', 
                 icons: [
                    { icon: dungeon }, 
                  ],
                  text: `Dungeon Gear`
               },
               { number: '590',
                  icons: [
                    { icon: raid },
                  ],
                  text: `24-man Raid No.1 (Weekly)` 
               },
               { number: '595',
                  icons: [
                    { icon: trial },
                  ],
                  text: `EX Trial (Weapon)`
               },
               ]
            },
            {
            title: '6.2',
            ilvls: [
               { number: '585',
                  icons: [
                    { icon: dungeon },
                  ],
                  text: `Dungeon Gear`
               },
               { number: '590',
                  icons: [
                    { icon: tomestone },
                  ],
                  text: `Tomestone Gear (Unlimited)`
               },
               { number: '610',
                  icons: [
                    { icon: raid },
                    { icon: crafted },
                  ],
                  text: `Normal Raid 5-8 (Weekly)\nCrafted Gear`
               },
               { number: '615',
                  icons: [
                    { icon: trial },
                  ],
                  text: `EX Trial (Weapon)`
               },
               { number: '620',
                  icons: [
                    { icon: tomestone },
                  ],
                  text: `Tomestone Gear (Weekly)`
               },
               { number: '630',
                  icons: [
                    { icon: tomestone },
                    { icon: savage },
                  ],
                  text: `Upgraded Tomestone Gear\nSavage Raid Gear\nSavage Gear Weapon (iLvl 635)`
               },
               ]
            },
            {
            title: '6.3',
            ilvls: [
               { number: '605', 
                 icons: [
                    { icon: dungeon }, 
                  ],
                  text: `Dungeon Gear`
               },
               { number: '620',
                  icons: [
                    { icon: raid },
                  ],
                  text: `24-man Raid No.2 (Weekly)` 
               },
               { number: '625',
                  icons: [
                    { icon: trial },
                  ],
                  text: `EX Trial (Weapon)`
               },
               ]
            },
            {
            title: '6.4',
            ilvls: [
               { number: '615',
                  icons: [
                    { icon: dungeon },
                  ],
                  text: `Dungeon Gear`
               },
               { number: '620',
                  icons: [
                    { icon: tomestone },
                  ],
                  text: `Tomestone Gear (Unlimited)`
               },
               { number: '640',
                  icons: [
                    { icon: raid },
                    { icon: crafted },
                  ],
                  text: `Normal Raid 9-12 (Weekly)\nCrafted Gear`
               },
               { number: '645',
                  icons: [
                    { icon: trial },
                  ],
                  text: `EX Trial (Weapon)`
               },
               { number: '650',
                  icons: [
                    { icon: tomestone },
                  ],
                  text: `Tomestone Gear (Weekly)`
               },
               { number: '660',
                  icons: [
                    { icon: tomestone },
                    { icon: savage },
                  ],
                  text: `Upgraded Tomestone Gear\nSavage Raid Gear\nSavage Gear Weapon (iLvl 665)`
               },
               ]
            },
            {
            title: '6.5',
            ilvls: [
               { number: '635', 
                 icons: [
                    { icon: dungeon }, 
                  ],
                  text: `Dungeon Gear`
               },
               { number: '650',
                  icons: [
                    { icon: raid },
                  ],
                  text: `24-man Raid No.3 (Weekly)` 
               },
               { number: '655',
                  icons: [
                    { icon: trial },
                  ],
                  text: `EX Trial (Weapon)`
               },
               ]
            },
      ]
    }
  }
}
</script>