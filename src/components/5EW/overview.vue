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
            <th></th>
            <th v-for="patch in endwalker.patches" :key="patch" class="text-left">
              {{ patch.name }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="overview in endwalker.overview" :key="overview">
            <td>
              {{ overview.ilvl }}
            </td>
            <td>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <div class="d-flex flex-row" v-bind="attrs" v-on="on">
                      <div v-for="type in overview.patchZero" :key="type">
                      <v-img
                        contain
                        style= "max-width: max-content; justify-self: center;"
                        :src="type.icon"
                      ></v-img>
                      </div>
                  </div>
                </template>
                <v-card-text v-for="content in overview.patchZero" :key="content" class="text-body-1">
                    {{ content.text }}
                    <v-card-text v-if="content.weekly!=false || content.gearType!=null || content.midPatch!=null">
                      <v-row>
                        <template v-if="content.weekly!=false">Weekly</template>
                        <template v-if="content.weekly!=false && content.gearType!=null || content.weekly!=false && content.midPatch!=null"><v-divider vertical class="mx-3"></v-divider></template>
                        <template v-if="content.midPatch!=null">Patch {{ content.midPatch }}</template>
                        <template v-if="content.gearType!=null && content.midPatch!=null"><v-divider vertical class="mx-3"></v-divider></template> 
                        <template v-if="content.gearType!=null">{{ content.gearType }}</template>
                        <template v-if="content.gearType!=null && content.midIlvl!=null"><v-divider vertical class="mx-3"></v-divider></template>
                        <template v-if="content.midIlvl!=null">iLvl {{ content.midIlvl }}</template>
                      </v-row>
                    </v-card-text>
                </v-card-text>
              </v-tooltip>
            </td>
            <td>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <div class="d-flex flex-row" v-bind="attrs" v-on="on">
                      <div v-for="type in overview.patchOne" :key="type">
                      <v-img
                        contain
                        style= "max-width: max-content; justify-self: center;"
                        :src="type.icon"
                      ></v-img>
                      </div>
                  </div>
                </template>
                <v-card-text v-for="content in overview.patchOne" :key="content" class="text-body-1">
                    {{ content.text }}
                    <v-card-text v-if="content.weekly!=false || content.gearType!=null || content.midPatch!=null || content.midIlvl!=null">
                      <v-row>
                        <template v-if="content.weekly!=false">Weekly</template>
                        <template v-if="content.weekly!=false && content.gearType!=null || content.weekly!=false && content.midPatch!=null"><v-divider vertical class="mx-3"></v-divider></template>
                        <template v-if="content.midPatch!=null">Patch {{ content.midPatch }}</template>
                        <template v-if="content.gearType!=null && content.midPatch!=null"><v-divider vertical class="mx-3"></v-divider></template> 
                        <template v-if="content.gearType!=null">{{ content.gearType }}</template>
                        <template v-if="content.gearType!=null && content.midIlvl!=null"><v-divider vertical class="mx-3"></v-divider></template>
                        <template v-if="content.midIlvl!=null">iLvl {{ content.midIlvl }}</template>
                      </v-row>
                    </v-card-text>
                </v-card-text>
              </v-tooltip>
            </td>
            <td>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <div class="d-flex flex-row" v-bind="attrs" v-on="on">
                      <div v-for="type in overview.patchTwo" :key="type">
                      <v-img
                        contain
                        style= "max-width: max-content; justify-self: center;"
                        :src="type.icon"
                      ></v-img>
                      </div>
                  </div>
                </template>
                <v-card-text v-for="content in overview.patchTwo" :key="content" class="text-body-1">
                    {{ content.text }}
                    <v-card-text v-if="content.weekly!=false || content.gearType!=null || content.midPatch!=null || content.midIlvl!=null">
                      <v-row>
                        <template v-if="content.weekly!=false">Weekly</template>
                        <template v-if="content.weekly!=false && content.gearType!=null || content.weekly!=false && content.midPatch!=null"><v-divider vertical class="mx-3"></v-divider></template>
                        <template v-if="content.midPatch!=null">Patch {{ content.midPatch }}</template>
                        <template v-if="content.gearType!=null && content.midPatch!=null"><v-divider vertical class="mx-3"></v-divider></template> 
                        <template v-if="content.gearType!=null">{{ content.gearType }}</template>
                        <template v-if="content.gearType!=null && content.midIlvl!=null"><v-divider vertical class="mx-3"></v-divider></template>
                        <template v-if="content.midIlvl!=null">iLvl {{ content.midIlvl }}</template>
                      </v-row>
                    </v-card-text>
                </v-card-text>
              </v-tooltip>
            </td>
            <td>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <div class="d-flex flex-row" v-bind="attrs" v-on="on">
                      <div v-for="type in overview.patchThree" :key="type">
                      <v-img
                        contain
                        style= "max-width: max-content; justify-self: center;"
                        :src="type.icon"
                      ></v-img>
                      </div>
                  </div>
                </template>
                <v-card-text v-for="content in overview.patchThree" :key="content" class="text-body-1">
                    {{ content.text }}
                    <v-card-text v-if="content.weekly!=false || content.gearType!=null || content.midPatch!=null || content.midIlvl!=null">
                      <v-row>
                        <template v-if="content.weekly!=false">Weekly</template>
                        <template v-if="content.weekly!=false && content.gearType!=null || content.weekly!=false && content.midPatch!=null"><v-divider vertical class="mx-3"></v-divider></template>
                        <template v-if="content.midPatch!=null">Patch {{ content.midPatch }}</template>
                        <template v-if="content.gearType!=null && content.midPatch!=null"><v-divider vertical class="mx-3"></v-divider></template> 
                        <template v-if="content.gearType!=null">{{ content.gearType }}</template>
                        <template v-if="content.gearType!=null && content.midIlvl!=null"><v-divider vertical class="mx-3"></v-divider></template>
                        <template v-if="content.midIlvl!=null">iLvl {{ content.midIlvl }}</template>
                      </v-row>
                    </v-card-text>
                </v-card-text>
              </v-tooltip>
            </td>
            <td>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <div class="d-flex flex-row" v-bind="attrs" v-on="on">
                      <div v-for="type in overview.patchFour" :key="type">
                      <v-img
                        contain
                        style= "max-width: max-content; justify-self: center;"
                        :src="type.icon"
                      ></v-img>
                      </div>
                  </div>
                </template>
                <v-card-text v-for="content in overview.patchFour" :key="content" class="text-body-1">
                    {{ content.text }}
                    <v-card-text v-if="content.weekly!=false || content.gearType!=null || content.midPatch!=null || content.midIlvl!=null">
                      <v-row>
                        <template v-if="content.weekly!=false">Weekly</template>
                        <template v-if="content.weekly!=false && content.gearType!=null || content.weekly!=false && content.midPatch!=null"><v-divider vertical class="mx-3"></v-divider></template>
                        <template v-if="content.midPatch!=null">Patch {{ content.midPatch }}</template>
                        <template v-if="content.gearType!=null && content.midPatch!=null"><v-divider vertical class="mx-3"></v-divider></template> 
                        <template v-if="content.gearType!=null">{{ content.gearType }}</template>
                        <template v-if="content.gearType!=null && content.midIlvl!=null"><v-divider vertical class="mx-3"></v-divider></template>
                        <template v-if="content.midIlvl!=null">iLvl {{ content.midIlvl }}</template>
                      </v-row>
                    </v-card-text>
                </v-card-text>
              </v-tooltip>
            </td>
            <td>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <div class="d-flex flex-row" v-bind="attrs" v-on="on">
                      <div v-for="type in overview.patchFive" :key="type">
                      <v-img
                        contain
                        style= "max-width: max-content; justify-self: center;"
                        :src="type.icon"
                      ></v-img>
                      </div>
                  </div>
                </template>
                <v-card-text v-for="content in overview.patchFive" :key="content" class="text-body-1">
                    {{ content.text }}
                    <v-card-text v-if="content.weekly!=false || content.gearType!=null || content.midPatch!=null || content.midIlvl!=null">
                      <v-row>
                        <template v-if="content.weekly!=false">Weekly</template>
                        <template v-if="content.weekly!=false && content.gearType!=null || content.weekly!=false && content.midPatch!=null"><v-divider vertical class="mx-3"></v-divider></template>
                        <template v-if="content.midPatch!=null">Patch {{ content.midPatch }}</template>
                        <template v-if="content.gearType!=null && content.midPatch!=null"><v-divider vertical class="mx-3"></v-divider></template> 
                        <template v-if="content.gearType!=null">{{ content.gearType }}</template>
                        <template v-if="content.gearType!=null && content.midIlvl!=null"><v-divider vertical class="mx-3"></v-divider></template>
                        <template v-if="content.midIlvl!=null">iLvl {{ content.midIlvl }}</template>
                      </v-row>
                    </v-card-text>
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
import expacs from '../../data.js';

  export default {
    data: () => {
      return {
          endwalker: expacs.endwalker,
    }
  }
}
</script>