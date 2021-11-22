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
                <v-expansion-panel v-for="patch in endwalker.patches" :key="patch">
                  <v-expansion-panel-header class="text-h6  text-center" @click="reveal = false; reveal2 = false; reveal3 = false; reveal4 = false; reveal5 = false; reveal6 = false;">
                    {{ patch.name }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                     <v-row>
                        <v-col v-for="content in patch.content" :key="content.ilvl">
                           <v-tooltip bottom>
                              <template v-slot:activator="{ on, attrs }">
                                 <v-card elevation="0" class="pb-5" style="display: grid; justify-content: center;" v-bind="attrs" v-on="on">
                                  <v-card-title>{{ content.ilvl }} iLvl</v-card-title>
                                    <div class="d-flex flex-row" style="justify-content: center;">
                                       <div v-for="type in content.type" :key="type">
                                       <v-img
                                          contain
                                          style= "max-width: max-content; justify-self: center;"
                                          :src="type.icon"
                                       ></v-img>
                                       </div>
                                    </div>
                                 </v-card>
                              </template>
                              <v-card-text v-for="type in content.type" :key="type" class="text-body-1">
                                 {{ type.text }}
                                 <v-card-text v-if="type.weekly!=false || type.gearType!=null || type.midPatch!=null">
                                  <v-row>
                                    <template v-if="type.weekly!=false">Weekly</template>
                                    <template v-if="type.weekly!=false && type.gearType!=null || type.weekly!=false && type.midPatch!=null"><v-divider vertical class="mx-3"></v-divider></template>
                                    <template v-if="type.midPatch!=null">Patch {{ type.midPatch }}</template>
                                    <template v-if="type.gearType!=null && type.midPatch!=null"><v-divider vertical class="mx-3"></v-divider></template> 
                                    <template v-if="type.gearType!=null">{{ type.gearType }}</template>
                                    <template v-if="type.gearType!=null && type.midIlvl!=null"><v-divider vertical class="mx-3"></v-divider></template>
                                    <template v-if="type.midIlvl!=null">iLvl {{ type.midIlvl }}</template>
                                  </v-row>
                                 </v-card-text>
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
import expacs from '../../data.js';

  export default {
    data: () => {
      return {
          endwalker: expacs.endwalker
    }
  }
}
</script>