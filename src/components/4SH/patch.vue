<template>
    <v-sheet
    style="background-color: unset;"
              min-height="70vh"
              rounded="lg"
            >
              <v-expansion-panels accordion>
                <v-expansion-panel>
                  <v-expansion-panel-header class="text-h6  text-center" @click="reveal = false; reveal2 = false; reveal3 = false; reveal4 = false; reveal5 = false; reveal6 = false;">
                    5.0
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                       <v-row>
                          <v-col>
                           <v-card elevation="0" style="display: grid; justify-content: center;">
                           <v-card-title>430 iLvl</v-card-title>
                           <div class="d-flex flex-row" style="justify-content: center;">
                              <v-img
                                contain
                                style= "max-width: max-content; justify-self: center;"
                                src="https://sleepingdragons.eu/wp-content/uploads/2020/05/quest_Icon.png"
                              ></v-img>
                              <v-img
                                contain
                                style= "max-width: max-content; justify-self: center;"
                                src="https://sleepingdragons.eu/wp-content/uploads/2020/05/dungeon-1.png"
                            ></v-img>
                           </div>
                           <v-card-actions class="pt-1" style="justify-self: center;">
                                 <v-btn
                                 text
                                 color="light-blue accent-4"
                                 @click="reveal = true"
                                 >
                                 Learn More
                                 </v-btn>
                              </v-card-actions>
                              <v-expand-transition>
                                 <v-card
                                 elevation="0"
                                 v-if="reveal"
                                 class="transition-fast-in-fast-out v-card--reveal"
                                 style="display: grid; justify-content: center; height: 100%;"
                                 >
                                 <v-card-text class="pb-0">
                                    Quest Gear<br/>Amaurot, The Twinning and Akadaemia Anyder.
                                 </v-card-text>
                                 <v-card-actions class="pt-1" style="justify-self: center;">
                                    <v-btn
                                       text
                                       color="light-blue accent-4"
                                       @click="reveal = false"
                                    >
                                       Close
                                    </v-btn>
                                 </v-card-actions>
                                 </v-card>
                              </v-expand-transition>
                           </v-card>
                          </v-col>
                      <v-divider vertical />
                      <v-col>
                      <v-card elevation="0" style="display: grid; justify-content: center;">
                        <v-card-title>440 iLvl</v-card-title>
                          <v-img
                            style= "max-width: max-content; justify-self: center;"
                            src="https://sleepingdragons.eu/wp-content/uploads/2020/05/roulette.png"
                          ></v-img>
                      <v-card-actions class="pt-1" style="justify-self: center;">
                           <v-btn
                           text
                           color="light-blue accent-4"
                           @click="reveal2 = true"
                           >
                           Learn More
                           </v-btn>
                        </v-card-actions>
                        <v-expand-transition>
                           <v-card
                           elevation="0"
                           v-if="reveal2"
                           class="transition-fast-in-fast-out v-card--reveal"
                           style="display: grid; justify-content: center; height: 100%;"
                           >
                           <v-card-text class="pb-0">
                              Purchased from Ilfroy in Eulmore or Xylle at The Crystarium for Sack of Nuts.
                           </v-card-text>
                           <v-card-actions class="pt-1" style="justify-self: center;">
                              <v-btn
                                 text
                                 color="light-blue accent-4"
                                 @click="reveal2 = false"
                              >
                                 Close
                              </v-btn>
                           </v-card-actions>
                           </v-card>
                        </v-expand-transition>
                      </v-card>
                      </v-col>
                      <v-divider vertical />
                     <v-col>
                      <v-card elevation="0" style="display: grid; justify-content: center;">
                         <v-card-title>450 iLvl</v-card-title>
                         <div class="d-flex flex-row" style="justify-content: center;">
                          <v-img
                            style= "max-width: max-content; justify-self: center;"
                            src="https://sleepingdragons.eu/wp-content/uploads/2020/05/trial-1.png"
                          ></v-img>
                          <v-img
                            style= "max-width: max-content; justify-self: center;"
                            src="https://sleepingdragons.eu/wp-content/uploads/2020/05/raid.png"
                          ></v-img>
                          <v-img
                            style= "max-width: max-content; justify-self: center;"
                            src="https://sleepingdragons.eu/wp-content/uploads/2020/05/crafted-1.png"
                          ></v-img>
                        </div>
                      <v-card-actions class="pt-1" style="justify-self: center;">
                           <v-btn
                           text
                           color="light-blue accent-4"
                           @click="reveal3 = true"
                           >
                           Learn More
                           </v-btn>
                        </v-card-actions>
                        <v-expand-transition>
                        <v-card
                        elevation="0"
                        v-if="reveal3"
                        class="transition-fast-in-fast-out v-card--reveal"
                        style="display: grid; justify-content: center; height: 100%;"
                        >
                        <v-card-text class="pb-0">
                        The Dancing Plague (Extreme) (Weapon)<br/>
                        The Crown of the Immaculate (Extreme) (Accessories)<br/>
                        Eden's Gate (Normal) (Patch 5.01)<br/>
                        Crafted Gear (Patch 5.05)
                        </v-card-text>
                        <v-card-actions class="pt-1" style="justify-self: center;">
                           <v-btn
                              text
                              color="light-blue accent-4"
                              @click="reveal3 = false"
                           >
                              Close
                           </v-btn>
                        </v-card-actions>
                        </v-card>
                     </v-expand-transition>
                        </v-card>
                      </v-col>
                      <v-divider vertical />
                     <v-col>
                      <v-card elevation="0" style="display: grid; justify-content: center;">
                         <v-card-title>460 iLvl</v-card-title>
                         <div class="d-flex flex-row" style="justify-content: center;">
                          <v-img
                            style= "max-width: max-content; justify-self: center;"
                            src="https://sleepingdragons.eu/wp-content/uploads/2020/05/roulette.png"
                          ></v-img>
                        </div>
                      <v-card-actions class="pt-1" style="justify-self: center;">
                           <v-btn
                           text
                           color="light-blue accent-4"
                           @click="reveal4 = true"
                           >
                           Learn More
                           </v-btn>
                        </v-card-actions>
                        <v-expand-transition>
                        <v-card
                        elevation="0"
                        v-if="reveal4"
                        class="transition-fast-in-fast-out v-card--reveal"
                        style="display: grid; justify-content: center; height: 100%;"
                        >
                        <v-card-text class="pb-0">
                          Purchased from Ilfroy in Eulmore or Xylle at The Crystarium for Sack of Nuts. (Patch 5.05)
                        </v-card-text>
                        <v-card-actions class="pt-1" style="justify-self: center;">
                           <v-btn
                              text
                              color="light-blue accent-4"
                              @click="reveal4 = false"
                           >
                              Close
                           </v-btn>
                        </v-card-actions>
                        </v-card>
                     </v-expand-transition>
                        </v-card>
                      </v-col>
                       <v-divider vertical />
                     <v-col>
                      <v-card elevation="0" style="display: grid; justify-content: center;">
                         <v-card-title>470 iLvl</v-card-title>
                         <div class="d-flex flex-row" style="justify-content: center;">
                          <v-img
                            style= "max-width: max-content; justify-self: center;"
                            src="https://sleepingdragons.eu/wp-content/uploads/2020/05/roulette.png"
                          ></v-img>
                          <v-img
                            style= "max-width: max-content; justify-self: center;"
                            src="https://sleepingdragons.eu/wp-content/uploads/2020/05/realraid.png"
                          ></v-img>
                        </div>
                      <v-card-actions class="pt-1" style="justify-self: center;">
                           <v-btn
                           text
                           color="light-blue accent-4"
                           @click="reveal5 = true"
                           >
                           Learn More
                           </v-btn>
                        </v-card-actions>
                        <v-expand-transition>
                        <v-card
                        elevation="0"
                        v-if="reveal5"
                        class="transition-fast-in-fast-out v-card--reveal"
                        style="display: grid; justify-content: center; height: 100%;"
                        >
                        <v-card-text class="pb-0">
                        Eden's Gate (Savage) (Patch 5.05)<br/>Upgraded Tomestone Gear (Patch 5.05)<br/>Eden's Gate (Savage) (Weapon) (iLvl 475) (Patch 5.05)
                        </v-card-text>
                        <v-card-actions class="pt-1" style="justify-self: center;">
                           <v-btn
                              text
                              color="light-blue accent-4"
                              @click="reveal5 = false"
                           >
                              Close
                           </v-btn>
                        </v-card-actions>
                        </v-card>
                      </v-expand-transition>
                      </v-card>
                      </v-col>
                    </v-row>
                    </v-list>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                <v-expansion-panel-header class="text-h6  text-center" @click="reveal = false; reveal2 = false; reveal3 = false; reveal4 = false; reveal5 = false; reveal6 = false;">
                    5.1
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>445 iLvl</v-card-title>
                            <v-img
                              style= "max-width: max-content; justify-self: center;"
                              src="https://sleepingdragons.eu/wp-content/uploads/2020/05/dungeon-1.png"
                            ></v-img>
                            <v-card-actions class="pt-1" style="justify-self: center;">
                                <v-btn
                                text
                                color="light-blue accent-4"
                                @click="reveal = true"
                                >
                                Learn More
                                </v-btn>
                              </v-card-actions>
                              <v-expand-transition>
                              <v-card
                              elevation="0"
                              v-if="reveal"
                              class="transition-fast-in-fast-out v-card--reveal"
                              style="display: grid; justify-content: center; height: 100%;"
                              >
                                <v-card-text class="pb-0">
                                  The Grand Cosmos
                                </v-card-text>
                                <v-card-actions class="pt-1" style="justify-self: center;">
                                  <v-btn
                                      text
                                      color="light-blue accent-4"
                                      @click="reveal = false"
                                  >
                                      Close
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                              </v-expand-transition>
                            </v-card>
                        </v-col>
                        <v-divider vertical />
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>460 iLvl</v-card-title>
                            <v-img
                              style= "max-width: max-content; justify-self: center;"
                              src="https://sleepingdragons.eu/wp-content/uploads/2020/05/raid.png"
                           ></v-img>
                          <v-card-actions class="pt-1" style="justify-self: center;">
                            <v-btn
                            text
                            color="light-blue accent-4"
                            @click="reveal2 = true"
                            >
                            Learn More
                            </v-btn>
                          </v-card-actions>
                          <v-expand-transition>
                          <v-card
                          elevation="0"
                          v-if="reveal2"
                          class="transition-fast-in-fast-out v-card--reveal"
                          style="display: grid; justify-content: center; height: 100%;"
                          >
                            <v-card-text class="pb-0">
                              The Copied Factory
                            </v-card-text>
                            <v-card-actions class="pt-1" style="justify-self: center;">
                              <v-btn
                                  text
                                  color="light-blue accent-4"
                                  @click="reveal2 = false"
                              >
                                  Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                          </v-expand-transition>
                          </v-card>
                        </v-col>
                        <v-divider vertical />
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>465 iLvl</v-card-title>
                            <v-img
                              style= "max-width: max-content; justify-self: center;"
                              src="https://sleepingdragons.eu/wp-content/uploads/2020/05/trial-1.png"
                          ></v-img>
                          <v-card-actions class="pt-1" style="justify-self: center;">
                            <v-btn
                            text
                            color="light-blue accent-4"
                            @click="reveal3 = true"
                            >
                            Learn More
                            </v-btn>
                          </v-card-actions>
                          <v-expand-transition>
                          <v-card
                          elevation="0"
                          v-if="reveal3"
                          class="transition-fast-in-fast-out v-card--reveal"
                          style="display: grid; justify-content: center; height: 100%;"
                          >
                            <v-card-text class="pb-0">
                              The Minstrel's Ballad: Hades's Elegy (Weapon)
                            </v-card-text>
                            <v-card-actions class="pt-1" style="justify-self: center;">
                              <v-btn
                                  text
                                  color="light-blue accent-4"
                                  @click="reveal3 = false"
                              >
                                  Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                          </v-expand-transition>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-list>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header class="text-h6  text-center" @click="reveal = false; reveal2 = false; reveal3 = false; reveal4 = false; reveal5 = false; reveal6 = false;">
                    5.2
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>455 iLvl</v-card-title>
                            <v-img
                              style= "max-width: max-content; justify-self: center;"
                              src="https://sleepingdragons.eu/wp-content/uploads/2020/05/dungeon-1.png"
                            ></v-img>
                            <v-card-actions class="pt-1" style="justify-self: center;">
                                <v-btn
                                text
                                color="light-blue accent-4"
                                @click="reveal = true"
                                >
                                Learn More
                                </v-btn>
                              </v-card-actions>
                              <v-expand-transition>
                              <v-card
                              elevation="0"
                              v-if="reveal"
                              class="transition-fast-in-fast-out v-card--reveal"
                              style="display: grid; justify-content: center; height: 100%;"
                              >
                                <v-card-text class="pb-0">
                                  Anamnesis Anyder
                                </v-card-text>
                                <v-card-actions class="pt-1" style="justify-self: center;">
                                  <v-btn
                                      text
                                      color="light-blue accent-4"
                                      @click="reveal = false"
                                  >
                                      Close
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                              </v-expand-transition>
                            </v-card>
                        </v-col>
                        <v-divider vertical />
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>460 iLvl</v-card-title>
                            <v-img
                              style= "max-width: max-content; justify-self: center;"
                              src="https://sleepingdragons.eu/wp-content/uploads/2020/05/roulette.png"
                            ></v-img>
                          <v-card-actions class="pt-1" style="justify-self: center;">
                            <v-btn
                            text
                            color="light-blue accent-4"
                            @click="reveal2 = true"
                            >
                            Learn More
                            </v-btn>
                          </v-card-actions>
                          <v-expand-transition>
                          <v-card
                          elevation="0"
                          v-if="reveal2"
                          class="transition-fast-in-fast-out v-card--reveal"
                          style="display: grid; justify-content: center; height: 100%;"
                          >
                            <v-card-text class="pb-0">
                              Purchased from Ilfroy in Eulmore or Xylle at The Crystarium for Sack of Nuts.
                            </v-card-text>
                            <v-card-actions class="pt-1" style="justify-self: center;">
                              <v-btn
                                  text
                                  color="light-blue accent-4"
                                  @click="reveal2 = false"
                              >
                                  Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                          </v-expand-transition>
                          </v-card>
                        </v-col>
                        <v-divider vertical />
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>480 iLvl</v-card-title>
                            <div class="d-flex flex-row" style="justify-content: center;">
                              <v-img
                                style= "max-width: max-content; justify-self: center;"
                                src="https://sleepingdragons.eu/wp-content/uploads/2020/05/raid.png"
                              ></v-img>
                              <v-img
                                  style= "max-width: max-content; justify-self: center;"
                                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/crafted-1.png"
                              ></v-img>
                              <v-img
                                style= "max-width: max-content; justify-self: center;"
                                src="https://sleepingdragons.eu/wp-content/uploads/2020/05/trial-1.png"
                              ></v-img>
                            </div>
                          <v-card-actions class="pt-1" style="justify-self: center;">
                            <v-btn
                            text
                            color="light-blue accent-4"
                            @click="reveal3 = true"
                            >
                            Learn More
                            </v-btn>
                          </v-card-actions>
                          <v-expand-transition>
                          <v-card
                          elevation="0"
                          v-if="reveal3"
                          class="transition-fast-in-fast-out v-card--reveal"
                          style="display: grid; justify-content: center; height: 100%;"
                          >
                            <v-card-text class="pb-0">
                              Eden's Verse (Normal)<br/>Crafted Gear<br/>Memoria Misera (Extreme)
                            </v-card-text>
                            <v-card-actions class="pt-1" style="justify-self: center;">
                              <v-btn
                                  text
                                  color="light-blue accent-4"
                                  @click="reveal3 = false"
                              >
                                  Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                          </v-expand-transition>
                          </v-card>
                        </v-col>
                        <v-divider vertical />
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>485 iLvl</v-card-title>
                              <v-img
                                style= "max-width: max-content; justify-self: center;"
                                src="https://sleepingdragons.eu/wp-content/uploads/2020/05/trial-1.png"
                              ></v-img>
                          <v-card-actions class="pt-1" style="justify-self: center;">
                            <v-btn
                            text
                            color="light-blue accent-4"
                            @click="reveal4 = true"
                            >
                            Learn More
                            </v-btn>
                          </v-card-actions>
                          <v-expand-transition>
                          <v-card
                          elevation="0"
                          v-if="reveal4"
                          class="transition-fast-in-fast-out v-card--reveal"
                          style="display: grid; justify-content: center; height: 100%;"
                          >
                            <v-card-text class="pb-0">
                              Cinder Drift (Extreme) (Weapon)
                            </v-card-text>
                            <v-card-actions class="pt-1" style="justify-self: center;">
                              <v-btn
                                  text
                                  color="light-blue accent-4"
                                  @click="reveal4 = false"
                              >
                                  Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                          </v-expand-transition>
                          </v-card>
                        </v-col>
                        <v-divider vertical />
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>490 iLvl</v-card-title>
                              <v-img
                                style= "max-width: max-content; justify-self: center;"
                                src="https://sleepingdragons.eu/wp-content/uploads/2020/05/roulette.png"
                              ></v-img>
                          <v-card-actions class="pt-1" style="justify-self: center;">
                            <v-btn
                            text
                            color="light-blue accent-4"
                            @click="reveal5 = true"
                            >
                            Learn More
                            </v-btn>
                          </v-card-actions>
                          <v-expand-transition>
                          <v-card
                          elevation="0"
                          v-if="reveal5"
                          class="transition-fast-in-fast-out v-card--reveal"
                          style="display: grid; justify-content: center; height: 100%;"
                          >
                            <v-card-text class="pb-0">
                              Purchased from Aymark in Eulmore for Allagan Tomestone of Allegory.
                            </v-card-text>
                            <v-card-actions class="pt-1" style="justify-self: center;">
                              <v-btn
                                  text
                                  color="light-blue accent-4"
                                  @click="reveal5 = false"
                              >
                                  Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                          </v-expand-transition>
                          </v-card>
                        </v-col>
                        <v-divider vertical />
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>500 iLvl</v-card-title>
                            <div class="d-flex flex-row" style="justify-content: center;">
                              <v-img
                                style= "max-width: max-content; justify-self: center;"
                                src="https://sleepingdragons.eu/wp-content/uploads/2020/05/realraid.png"
                              ></v-img>
                              <v-img
                                  style= "max-width: max-content; justify-self: center;"
                                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/roulette.png"
                              ></v-img>
                            </div>
                          <v-card-actions class="pt-1" style="justify-self: center;">
                            <v-btn
                            text
                            color="light-blue accent-4"
                            @click="reveal6 = true"
                            >
                            Learn More
                            </v-btn>
                          </v-card-actions>
                          <v-expand-transition>
                          <v-card
                          elevation="0"
                          v-if="reveal6"
                          class="transition-fast-in-fast-out v-card--reveal"
                          style="display: grid; justify-content: center; height: 100%;"
                          >
                            <v-card-text class="pb-0">
                              Eden's Verse (Savage)<br/>Upgraded Tomestone Gear<br/>Eden's Verse (Savage) (Weapon) (iLvl 505)
                            </v-card-text>
                            <v-card-actions class="pt-1" style="justify-self: center;">
                              <v-btn
                                  text
                                  color="light-blue accent-4"
                                  @click="reveal6 = false"
                              >
                                  Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                          </v-expand-transition>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-list>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header class="text-h6  text-center" @click="reveal = false; reveal2 = false; reveal3 = false; reveal4 = false; reveal5 = false; reveal6 = false;">
                    5.3
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>475 iLvl</v-card-title>
                            <v-img
                              style= "max-width: max-content; justify-self: center;"
                              src="https://sleepingdragons.eu/wp-content/uploads/2020/05/dungeon-1.png"
                            ></v-img>
                            <v-card-actions class="pt-1" style="justify-self: center;">
                                <v-btn
                                text
                                color="light-blue accent-4"
                                @click="reveal = true"
                                >
                                Learn More
                                </v-btn>
                              </v-card-actions>
                              <v-expand-transition>
                              <v-card
                              elevation="0"
                              v-if="reveal"
                              class="transition-fast-in-fast-out v-card--reveal"
                              style="display: grid; justify-content: center; height: 100%;"
                              >
                                <v-card-text class="pb-0">
                                  The Heroes' Gauntlet
                                </v-card-text>
                                <v-card-actions class="pt-1" style="justify-self: center;">
                                  <v-btn
                                      text
                                      color="light-blue accent-4"
                                      @click="reveal = false"
                                  >
                                      Close
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                              </v-expand-transition>
                            </v-card>
                        </v-col>
                        <v-divider vertical />
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>490 iLvl</v-card-title>
                            <v-img
                              style= "max-width: max-content; justify-self: center;"
                              src="https://sleepingdragons.eu/wp-content/uploads/2020/05/raid.png"
                           ></v-img>
                          <v-card-actions class="pt-1" style="justify-self: center;">
                            <v-btn
                            text
                            color="light-blue accent-4"
                            @click="reveal2 = true"
                            >
                            Learn More
                            </v-btn>
                          </v-card-actions>
                          <v-expand-transition>
                          <v-card
                          elevation="0"
                          v-if="reveal2"
                          class="transition-fast-in-fast-out v-card--reveal"
                          style="display: grid; justify-content: center; height: 100%;"
                          >
                            <v-card-text class="pb-0">
                              The Puppets' Bunker
                            </v-card-text>
                            <v-card-actions class="pt-1" style="justify-self: center;">
                              <v-btn
                                  text
                                  color="light-blue accent-4"
                                  @click="reveal2 = false"
                              >
                                  Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                          </v-expand-transition>
                          </v-card>
                        </v-col>
                        <v-divider vertical />
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>495 iLvl</v-card-title>
                            <v-img
                              style= "max-width: max-content; justify-self: center;"
                              src="https://sleepingdragons.eu/wp-content/uploads/2020/05/trial-1.png"
                          ></v-img>
                          <v-card-actions class="pt-1" style="justify-self: center;">
                            <v-btn
                            text
                            color="light-blue accent-4"
                            @click="reveal3 = true"
                            >
                            Learn More
                            </v-btn>
                          </v-card-actions>
                          <v-expand-transition>
                          <v-card
                          elevation="0"
                          v-if="reveal3"
                          class="transition-fast-in-fast-out v-card--reveal"
                          style="display: grid; justify-content: center; height: 100%;"
                          >
                            <v-card-text class="pb-0">
                              The Seat of Sacrifice (Extreme) (Weapon)
                            </v-card-text>
                            <v-card-actions class="pt-1" style="justify-self: center;">
                              <v-btn
                                  text
                                  color="light-blue accent-4"
                                  @click="reveal3 = false"
                              >
                                  Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                          </v-expand-transition>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-list>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                 <v-expansion-panel>
                <v-expansion-panel-header class="text-h6  text-center" @click="reveal = false; reveal2 = false; reveal3 = false; reveal4 = false; reveal5 = false; reveal6 = false;">
                    5.4
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>485 iLvl</v-card-title>
                            <v-img
                              style= "max-width: max-content; justify-self: center;"
                              src="https://sleepingdragons.eu/wp-content/uploads/2020/05/dungeon-1.png"
                            ></v-img>
                            <v-card-actions class="pt-1" style="justify-self: center;">
                                <v-btn
                                text
                                color="light-blue accent-4"
                                @click="reveal = true"
                                >
                                Learn More
                                </v-btn>
                              </v-card-actions>
                              <v-expand-transition>
                              <v-card
                              elevation="0"
                              v-if="reveal"
                              class="transition-fast-in-fast-out v-card--reveal"
                              style="display: grid; justify-content: center; height: 100%;"
                              >
                                <v-card-text class="pb-0">
                                  Matoya's Relict
                                </v-card-text>
                                <v-card-actions class="pt-1" style="justify-self: center;">
                                  <v-btn
                                      text
                                      color="light-blue accent-4"
                                      @click="reveal = false"
                                  >
                                      Close
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                              </v-expand-transition>
                            </v-card>
                        </v-col>
                        <v-divider vertical />
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>490 iLvl</v-card-title>
                            <v-img
                              style= "max-width: max-content; justify-self: center;"
                              src="https://sleepingdragons.eu/wp-content/uploads/2020/05/roulette.png"
                            ></v-img>
                          <v-card-actions class="pt-1" style="justify-self: center;">
                            <v-btn
                            text
                            color="light-blue accent-4"
                            @click="reveal2 = true"
                            >
                            Learn More
                            </v-btn>
                          </v-card-actions>
                          <v-expand-transition>
                          <v-card
                          elevation="0"
                          v-if="reveal2"
                          class="transition-fast-in-fast-out v-card--reveal"
                          style="display: grid; justify-content: center; height: 100%;"
                          >
                            <v-card-text class="pb-0">
                              Purchased from Aymark in Eulmore for Allagan Tomestone of Allegory.
                            </v-card-text>
                            <v-card-actions class="pt-1" style="justify-self: center;">
                              <v-btn
                                  text
                                  color="light-blue accent-4"
                                  @click="reveal2 = false"
                              >
                                  Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                          </v-expand-transition>
                          </v-card>
                        </v-col>
                        <v-divider vertical />
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>510 iLvl</v-card-title>
                            <div class="d-flex flex-row" style="justify-content: center;">
                              <v-img
                                style= "max-width: max-content; justify-self: center;"
                                src="https://sleepingdragons.eu/wp-content/uploads/2020/05/raid.png"
                              ></v-img>
                              <v-img
                                  style= "max-width: max-content; justify-self: center;"
                                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/crafted-1.png"
                              ></v-img>
                            </div>
                          <v-card-actions class="pt-1" style="justify-self: center;">
                            <v-btn
                            text
                            color="light-blue accent-4"
                            @click="reveal3 = true"
                            >
                            Learn More
                            </v-btn>
                          </v-card-actions>
                          <v-expand-transition>
                          <v-card
                          elevation="0"
                          v-if="reveal3"
                          class="transition-fast-in-fast-out v-card--reveal"
                          style="display: grid; justify-content: center; height: 100%;"
                          >
                            <v-card-text class="pb-0">
                              Eden's Promise (Normal)<br/>Crafted Gear
                            </v-card-text>
                            <v-card-actions class="pt-1" style="justify-self: center;">
                              <v-btn
                                  text
                                  color="light-blue accent-4"
                                  @click="reveal3 = false"
                              >
                                  Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                          </v-expand-transition>
                          </v-card>
                        </v-col>
                        <v-divider vertical />
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>515 iLvl</v-card-title>
                              <v-img
                                style= "max-width: max-content; justify-self: center;"
                                src="https://sleepingdragons.eu/wp-content/uploads/2020/05/trial-1.png"
                              ></v-img>
                          <v-card-actions class="pt-1" style="justify-self: center;">
                            <v-btn
                            text
                            color="light-blue accent-4"
                            @click="reveal4 = true"
                            >
                            Learn More
                            </v-btn>
                          </v-card-actions>
                          <v-expand-transition>
                          <v-card
                          elevation="0"
                          v-if="reveal4"
                          class="transition-fast-in-fast-out v-card--reveal"
                          style="display: grid; justify-content: center; height: 100%;"
                          >
                            <v-card-text class="pb-0">
                              Castrum Marinum (Extreme) (Weapon)
                            </v-card-text>
                            <v-card-actions class="pt-1" style="justify-self: center;">
                              <v-btn
                                  text
                                  color="light-blue accent-4"
                                  @click="reveal4 = false"
                              >
                                  Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                          </v-expand-transition>
                          </v-card>
                        </v-col>
                        <v-divider vertical />
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>520 iLvl</v-card-title>
                              <v-img
                                style= "max-width: max-content; justify-self: center;"
                                src="https://sleepingdragons.eu/wp-content/uploads/2020/05/roulette.png"
                              ></v-img>
                          <v-card-actions class="pt-1" style="justify-self: center;">
                            <v-btn
                            text
                            color="light-blue accent-4"
                            @click="reveal5 = true"
                            >
                            Learn More
                            </v-btn>
                          </v-card-actions>
                          <v-expand-transition>
                          <v-card
                          elevation="0"
                          v-if="reveal5"
                          class="transition-fast-in-fast-out v-card--reveal"
                          style="display: grid; justify-content: center; height: 100%;"
                          >
                            <v-card-text class="pb-0">
                              Purchased from Aymark in Eulmore for Allagan Tomestone of Revelation. (Weekly)
                            </v-card-text>
                            <v-card-actions class="pt-1" style="justify-self: center;">
                              <v-btn
                                  text
                                  color="light-blue accent-4"
                                  @click="reveal5 = false"
                              >
                                  Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                          </v-expand-transition>
                          </v-card>
                        </v-col>
                        <v-divider vertical />
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>530 iLvl</v-card-title>
                            <div class="d-flex flex-row" style="justify-content: center;">
                              <v-img
                                style= "max-width: max-content; justify-self: center;"
                                src="https://sleepingdragons.eu/wp-content/uploads/2020/05/realraid.png"
                              ></v-img>
                              <v-img
                                  style= "max-width: max-content; justify-self: center;"
                                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/roulette.png"
                              ></v-img>
                            </div>
                          <v-card-actions class="pt-1" style="justify-self: center;">
                            <v-btn
                            text
                            color="light-blue accent-4"
                            @click="reveal6 = true"
                            >
                            Learn More
                            </v-btn>
                          </v-card-actions>
                          <v-expand-transition>
                          <v-card
                          elevation="0"
                          v-if="reveal6"
                          class="transition-fast-in-fast-out v-card--reveal"
                          style="display: grid; justify-content: center; height: 100%;"
                          >
                            <v-card-text class="pb-0">
                             Eden's Promise (Savage)<br/>Upgraded Tomestone Gear<br/>Eden's Promise (Savage) (Weapon) (iLvl 535)
                            </v-card-text>
                            <v-card-actions class="pt-1" style="justify-self: center;">
                              <v-btn
                                  text
                                  color="light-blue accent-4"
                                  @click="reveal6 = false"
                              >
                                  Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                          </v-expand-transition>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-list>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                 <v-expansion-panel>
                <v-expansion-panel-header class="text-h6  text-center" @click="reveal = false; reveal2 = false; reveal3 = false; reveal4 = false; reveal5 = false; reveal6 = false;">
                    5.5
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>505 iLvl</v-card-title>
                            <v-img
                              style= "max-width: max-content; justify-self: center;"
                              src="https://sleepingdragons.eu/wp-content/uploads/2020/05/dungeon-1.png"
                            ></v-img>
                            <v-card-actions class="pt-1" style="justify-self: center;">
                                <v-btn
                                text
                                color="light-blue accent-4"
                                @click="reveal = true"
                                >
                                Learn More
                                </v-btn>
                              </v-card-actions>
                              <v-expand-transition>
                              <v-card
                              elevation="0"
                              v-if="reveal"
                              class="transition-fast-in-fast-out v-card--reveal"
                              style="display: grid; justify-content: center; height: 100%;"
                              >
                                <v-card-text class="pb-0">
                                  Paglth'an
                                </v-card-text>
                                <v-card-actions class="pt-1" style="justify-self: center;">
                                  <v-btn
                                      text
                                      color="light-blue accent-4"
                                      @click="reveal = false"
                                  >
                                      Close
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                              </v-expand-transition>
                            </v-card>
                        </v-col>
                        <v-divider vertical />
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>520 iLvl</v-card-title>
                            <v-img
                              style= "max-width: max-content; justify-self: center;"
                              src="https://sleepingdragons.eu/wp-content/uploads/2020/05/raid.png"
                           ></v-img>
                          <v-card-actions class="pt-1" style="justify-self: center;">
                            <v-btn
                            text
                            color="light-blue accent-4"
                            @click="reveal2 = true"
                            >
                            Learn More
                            </v-btn>
                          </v-card-actions>
                          <v-expand-transition>
                          <v-card
                          elevation="0"
                          v-if="reveal2"
                          class="transition-fast-in-fast-out v-card--reveal"
                          style="display: grid; justify-content: center; height: 100%;"
                          >
                            <v-card-text class="pb-0">
                              The Tower at Paradigm's Breach (Weekly)
                            </v-card-text>
                            <v-card-actions class="pt-1" style="justify-self: center;">
                              <v-btn
                                  text
                                  color="light-blue accent-4"
                                  @click="reveal2 = false"
                              >
                                  Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                          </v-expand-transition>
                          </v-card>
                        </v-col>
                        <v-divider vertical />
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>525 iLvl</v-card-title>
                            <v-img
                              style= "max-width: max-content; justify-self: center;"
                              src="https://sleepingdragons.eu/wp-content/uploads/2020/05/trial-1.png"
                          ></v-img>
                          <v-card-actions class="pt-1" style="justify-self: center;">
                            <v-btn
                            text
                            color="light-blue accent-4"
                            @click="reveal3 = true"
                            >
                            Learn More
                            </v-btn>
                          </v-card-actions>
                          <v-expand-transition>
                          <v-card
                          elevation="0"
                          v-if="reveal3"
                          class="transition-fast-in-fast-out v-card--reveal"
                          style="display: grid; justify-content: center; height: 100%;"
                          >
                            <v-card-text class="pb-0">
                              The Cloud Deck (Extreme) (Weapon)
                            </v-card-text>
                            <v-card-actions class="pt-1" style="justify-self: center;">
                              <v-btn
                                  text
                                  color="light-blue accent-4"
                                  @click="reveal3 = false"
                              >
                                  Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                          </v-expand-transition>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-list>
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
.v-expansion-panel-content__wrap{
  background-color: #e8e8e8;
}
.v-list{
  background-color: #e8e8e8;
}
.v-card{
  background-color: #e8e8e8;
}
.v-divider{
  border-color: #0090ea3f;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>

<script>
  export default {
    data: () => ({
      reveal: false,
      reveal2: false,
      reveal3: false,
      reveal4: false,
      reveal5: false,
      reveal6: false
    }),
  }
</script>
