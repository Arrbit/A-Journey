<template>
  <v-sheet
  style="background-color: unset;"
  min-height="70vh"
  rounded="lg"
  >
    <v-card-title style="justify-content: center;" class="text-caption">
    Endwalker Information is based on past expansions' content cycle and will be updated as information comes out
    </v-card-title>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th v-for="patch in headers" :key="patch" class="text-left">
              {{ patch.text }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="content in content" :key="content" >
            <td>
              {{ content.ilvl }}
            </td>
            <td>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <div class="d-flex flex-row">
                  <div v-for="icon in content.patchZeroIcons" :key="icon">
                  <img
                    v-bind="attrs"
                    v-on="on"
                    :src="icon.icon" />
                  </div>
                  </div>
                </template>
                <v-card-text class="text-body-1">
                  {{ content.patchZero }}
                </v-card-text>
              </v-tooltip>
            </td>
            <td>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <div class="d-flex flex-row">
                  <div v-for="icon in content.patchOneIcons" :key="icon">
                  <img
                    v-bind="attrs"
                    v-on="on"
                    :src="icon.icon" />
                  </div>
                  </div>
                </template>
                <v-card-text class="text-body-1">
                  {{ content.patchOne }}
                </v-card-text>
              </v-tooltip>
            </td>
            <td>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <div class="d-flex flex-row">
                  <div v-for="icon in content.patchTwoIcons" :key="icon">
                  <img
                    v-bind="attrs"
                    v-on="on"
                    :src="icon.icon" />
                  </div>
                  </div>
                </template>
                <v-card-text class="text-body-1">
                  {{ content.patchTwo }}
                </v-card-text>
              </v-tooltip>
            </td>
            <td>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <div class="d-flex flex-row">
                  <div v-for="icon in content.patchThreeIcons" :key="icon">
                  <img
                    v-bind="attrs"
                    v-on="on"
                    :src="icon.icon" />
                  </div>
                  </div>
                </template>
                <v-card-text class="text-body-1">
                  {{ content.patchThree }}
                </v-card-text>
              </v-tooltip>
            </td>
            <td>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <div class="d-flex flex-row">
                  <div v-for="icon in content.patchFourIcons" :key="icon">
                  <img
                    v-bind="attrs"
                    v-on="on"
                    :src="icon.icon" />
                  </div>
                  </div>
                </template>
                <v-card-text class="text-body-1">
                  {{ content.patchFour }}
                </v-card-text>
              </v-tooltip>
            </td>
            <td>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <div class="d-flex flex-row">
                  <div v-for="icon in content.patchFiveIcons" :key="icon">
                  <img
                    v-bind="attrs"
                    v-on="on"
                    :src="icon.icon" />
                  </div>
                  </div>
                </template>
                <v-card-text class="text-body-1">
                  {{ content.patchFive }}
                </v-card-text>
              </v-tooltip>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-sheet>
</template>

<style scoped>
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
         headers: [
          {
            text: '',
            align: 'start',
            sortable: false,
            value: 'ilvl',
          },
          { text: '6.0', value: 'patchZero' },
          { text: '6.1', value: 'patchOne' },
          { text: '6.2', value: 'patchTwo' },
          { text: '6.3', value: 'patchThree' },
          { text: '6.4', value: 'patchFour' },
          { text: '6.5', value: 'patchFive' },
        ],
        content: [
           {
              ilvl: '560',
              patchZero: 'Quest Gear\nDungeon Gear',
              patchZeroIcons: [
                    { icon: quest }, 
                    { icon: dungeon }, 
                ],
           },
           {
              ilvl: '570',
              patchZero: 'Tomestone Gear',
              patchZeroIcons: [
                    { icon: tomestone }, 
                ],
              patchOne: 'Dungeon Gear (iLvl 575)',
              patchOneIcons: [
                    { icon: dungeon }, 
                ],
           },
           {
              ilvl: '580',
              patchZero: 'EX Trial (Weapon + Accessories)\nNormal Raid 1-4 (Weekly)\nCrafted Gear',
              patchZeroIcons: [
                    { icon: trial }, 
                    { icon: raid }, 
                    { icon: crafted }, 
                ],
              patchTwo: 'Dungeon Gear (iLvl 585)',
              patchTwoIcons: [
                    { icon: dungeon }, 
                ],
           },
           {
              ilvl: '590',
              patchZero: 'Tomestone Gear (Weekly)',
              patchZeroIcons: [
                    { icon: tomestone }, 
                ],
              patchOne: '24-man raid No.1 (Weekly)\nEX Trial (Weapon)',
              patchOneIcons: [
                    { icon: raid }, 
                    { icon: trial }, 
                ],
              patchTwo: 'Tomestone Gear (Unlimited)',
              patchTwoIcons: [
                    { icon: tomestone }, 
                ],
           },
           {
              ilvl: '600',
              patchZero: 'Upgraded Tomestone Gear\nSavage Raid Gear\nSavage Raid Weapon (iLvl 605)',
              patchZeroIcons: [
                    { icon: tomestone }, 
                    { icon: savage }, 
                ],
              patchThree: 'Dungeon Gear (iLvl 605)',
              patchThreeIcons: [
                    { icon: dungeon }, 
                ],
           },
           {
              ilvl: '610',
              patchTwo: 'Normal Raid 5-8 (Weekly)\nCrafted Gear\nEX Trial (Weapon) (iLvl 615)',
              patchTwoIcons: [
                    { icon: raid }, 
                    { icon: crafted }, 
                    { icon: trial }, 
                ],
              patchFour: 'Dungeon Gear (iLvl 615)',
              patchFourIcons: [
                    { icon: dungeon }, 
                ],
           },
           {
              ilvl: '620',
              patchTwo: 'Tomestone Gear (Weekly)',
              patchTwoIcons: [
                    { icon: tomestone }, 
                ],
              patchThree: '24-man Raid No.2 (Weekly)\nEX Trial (Weapon) (iLvl 625)',
              patchThreeIcons: [
                    { icon: raid }, 
                    { icon: trial }, 
                ],
              patchFour: 'Tomestone Gear (Unlimited)',
              patchFourIcons: [
                    { icon: tomestone },
                ],
           },
           {
              ilvl: '630',
              patchTwo: 'Upgraded Tomestone Gear\nSavage Raid Gear\nSavage Raid Weapon (iLvl 635)',
              patchTwoIcons: [
                    { icon: tomestone }, 
                    { icon: savage }, 
                ],
              patchFive: 'Dungeon Gear (iLvl 635)',
              patchFiveIcons: [ 
                    { icon: dungeon }, 
                ],
           },
           {
              ilvl: '640',
              patchFour: 'Normal Raid 9-12 (Weekly)\nCrafted Gear\nEX Trial (Weapon)',
              patchFourIcons: [
                    { icon: raid }, 
                    { icon: crafted }, 
                    { icon: trial }, 
                ],
           },
           {
              ilvl: '650',
              patchFour: 'Tomestone Gear (Weekly)',
              patchFourIcons: [
                    { icon: tomestone }, 
                ],
              patchFive: '24-man Raid No.3 (Weekly)\nEX Trial (Weapon) (iLvl 655)',
              patchFiveIcons: [
                    { icon: raid }, 
                    { icon: trial }, 
                ],
           },
           {
              ilvl: '660',
              patchFour: 'Upgraded Tomestone Gear\nSavage Raid Gear\nSavage Raid Weapon (iLvl 665)',
              patchFourIcons: [
                    { icon: tomestone }, 
                    { icon: savage }, 
                ],
           },
        ]
    }
  }
}
</script>