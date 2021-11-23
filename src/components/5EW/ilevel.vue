<template>
    <v-sheet
    style="background-color: unset;"
              min-height="70vh"
              rounded="lg"
            >
            <v-card-title style="justify-content: center;" class="text-caption">
            Endwalker Information is based on past expansions' content cycle and will be updated as information comes out
            </v-card-title>
              <v-card rounded elevation="0" class="mb-5" v-for="level in endwalker.levels" :key="level">
                  <v-card-title class="text-h6 font-weight-bold text-center header" style="justify-content: center;">
                    {{ level.name }}
                  </v-card-title>
                  <v-divider />
                  <v-card-text>
                     <v-row>
                        <v-col v-for="content in level.content" :key="content.ilvl">
                           <v-tooltip bottom>
                              <template v-slot:activator="{ on, attrs }">
                                 <v-card rounded elevation="0" class="pb-5" style="display: grid; justify-content: center;" v-bind="attrs" v-on="on">
                                  <v-card-title>Patch {{ content.patch }}</v-card-title>
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
                  </v-card-text>
              </v-card>
            </v-sheet>
</template>
<style scoped>
.header{
  color: #0091ea !important;
}

.v-card__title{
  color: #3c3c3c;
}

.v-card{
  background-color: #e8e8e8;
}

.v-card:hover{
  background-color: #dbdbdb;
}

.v-card__text{
    white-space: pre;
}

.v-divider{
  margin-right: 500px;
  margin-left: 500px;
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