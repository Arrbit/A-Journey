<template>
    <v-sheet
    style="background-color: unset;"
              min-height="70vh"
              rounded="lg"
            >
              <v-expansion-panels accordion>
                <v-expansion-panel>
                  <v-expansion-panel-header class="text-h6  text-center" @click="reveal = false">
                    430
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                     <v-card elevation="0" style="display: grid; justify-content: center;">
                        <v-card-title>Patch 5.0</v-card-title>
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
                    </v-list>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                 <v-expansion-panel>
                  <v-expansion-panel-header class="text-h6  text-center" @click="reveal = false; reveal2 = false; reveal3 = false; reveal4 = false;">
                    440
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>Patch 5.0</v-card-title>
                            <v-img
                              style= "max-width: max-content; justify-self: center;"
                              src="https://sleepingdragons.eu/wp-content/uploads/2020/05/roulette.png"
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
                                  Purchased from Ilfroy in Eulmore or Xylle at The Crystarium for Sack of Nuts.
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
                            <v-card-title>Patch 5.1</v-card-title>
                            <v-img
                              style= "max-width: max-content; justify-self: center;"
                              src="https://sleepingdragons.eu/wp-content/uploads/2020/05/dungeon-1.png"
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
                                The Grand Cosmos (445 iLvl).
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
                      </v-row>
                    </v-list>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                 <v-expansion-panel>
                  <v-expansion-panel-header class="text-h6  text-center" @click="reveal = false; reveal2 = false; reveal3 = false; reveal4 = false;">
                    450
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                     <v-row>
                        <v-col>
                           <v-card elevation="0" style="display: grid; justify-content: center;">
                              <v-card-title style="justify-self: center;">Patch 5.0</v-card-title>
                              <v-img
                              style= "max-width: max-content; justify-self: center;"
                              src="https://sleepingdragons.eu/wp-content/uploads/2020/05/trial-1.png"
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
                                    The Dancing Plague (Extreme) (Weapon)<br/>
                                    The Crown of the Immaculate (Extreme) (Accessories)
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
                        <v-divider  vertical />
                        <v-col>
                           <v-card elevation="0" style="display: grid; justify-content: center;">
                              <v-card-title style="justify-self: center;">Patch 5.01</v-card-title>
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
                                    Eden's Gate (Normal)
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
                        <v-divider  vertical />
                        <v-col>
                           <v-card elevation="0" style="display: grid; justify-content: center;">
                              <v-card-title style="justify-self: center;">Patch 5.05</v-card-title>
                              <v-img
                              style= "max-width: max-content; justify-self: center;"
                              src="https://sleepingdragons.eu/wp-content/uploads/2020/05/crafted-1.png"
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
                                    Crafted Gear
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
                        <v-card-title>Patch 6.2</v-card-title>
                        <v-img
                          style= "max-width: max-content; justify-self: center;"
                          src="https://sleepingdragons.eu/wp-content/uploads/2020/05/dungeon-1.png"
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
                               Anamnesis Anyder (455 iLvl).
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
                    </v-row>
                  </v-list>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                 <v-expansion-panel>
                  <v-expansion-panel-header class="text-h6  text-center" @click="reveal = false; reveal2 = false; reveal3 = false; reveal4 = false;">
                    460
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                       <v-row>
                      <v-col>
                      <v-card elevation="0" style="display: grid; justify-content: center;">
                        <v-card-title>Patch 5.1</v-card-title>
                        <div class="d-flex flex-row" style="justify-content: center;">
                          <v-img
                            style= "max-width: max-content; justify-self: center;"
                            src="https://sleepingdragons.eu/wp-content/uploads/2020/05/raid.png"
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
                              The Copied Factory<br />The Minstrel's Ballad: Hades's Elegy (Weapon) (iLvl 465)
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
                         <v-card-title>Patch 5.2</v-card-title>
                      <v-img
                        style= "max-width: max-content; justify-self: center;"
                        src="https://sleepingdragons.eu/wp-content/uploads/2020/05/roulette.png"
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
                          Purchased from Ilfroy in Eulmore or Xylle at The Crystarium for Sack of Nuts.
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
                  <v-expansion-panel-header class="text-h6  text-center" @click="reveal = false; reveal2 = false; reveal3 = false; reveal4 = false;">
                    470
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                              <v-card-title>Patch 5.05</v-card-title>
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
                                    Eden's Gate (Savage)<br/>Upgraded Tomestone Gear<br/>Eden's Gate (Savage) (Weapon) (iLvl 475)
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
                          <v-card-title>Patch 5.3</v-card-title>
                          <v-img
                            style= "max-width: max-content; justify-self: center;"
                            src="https://sleepingdragons.eu/wp-content/uploads/2020/05/dungeon-1.png"
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
                                The Heroes' Gauntlet (475 iLvl)
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
                      </v-row>
                    </v-list>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header class="text-h6  text-center" @click="reveal = false; reveal2 = false; reveal3 = false; reveal4 = false;">
                    480
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>Patch 5.2</v-card-title>
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
                                  Eden's Verse (Normal)<br/>Crafted Gear<br/>Memoria Misera (Extreme)<br/>Cinder Drift (Extreme) (Weapon) (iLvl 485)
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
                            <v-card-title>Patch 5.4</v-card-title>
                            <v-img
                              style= "max-width: max-content; justify-self: center;"
                            src="https://sleepingdragons.eu/wp-content/uploads/2020/05/dungeon-1.png"
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
                                  Matoya's Relict (485 iLvl)
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
                      </v-row>
                    </v-list>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                 <v-expansion-panel>
                  <v-expansion-panel-header class="text-h6  text-center" @click="reveal = false; reveal2 = false; reveal3 = false; reveal4 = false;">
                    490
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>Patch 5.3</v-card-title>
                            <div class="d-flex flex-row" style="justify-content: center;">
                                <v-img
                                  style= "max-width: max-content; justify-self: center;"
                                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/raid.png"
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
                                The Puppets' Bunker<br/>The Seat of Sacrifice (Extreme) (Weapon) (iLvl 495)
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
                            <v-card-title>Patch 5.4</v-card-title>
                            <v-img
                              style= "max-width: max-content; justify-self: center;"
                              src="https://sleepingdragons.eu/wp-content/uploads/2020/05/roulette.png"
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
                                Purchased from Aymark in Eulmore for Allagan Tomestone of Allegory. 
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
                  <v-expansion-panel-header class="text-h6  text-center" @click="reveal = false; reveal2 = false; reveal3 = false; reveal4 = false;">
                    500
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                              <v-card-title>Patch 5.2</v-card-title>
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
                                   Eden's Verse (Savage)<br/>Upgraded Tomestone Gear<br/>Eden's Verse (Savage) (Weapon) (iLvl 505)
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
                          <v-card-title>Patch 5.5</v-card-title>
                          <v-img
                            style= "max-width: max-content; justify-self: center;"
                            src="https://sleepingdragons.eu/wp-content/uploads/2020/05/dungeon-1.png"
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
                                Paglth'an (505 iLvl)
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
                      </v-row>
                    </v-list>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                <v-expansion-panel-header class="text-h6  text-center" @click="reveal = false; reveal2 = false; reveal3 = false; reveal4 = false;">
                    510
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>Patch 5.4</v-card-title>
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
                                  Eden's Promise (Normal)<br/>Crafted Gear<br/>Castrum Marinum (Extreme) (Weapon) (iLvl 515)
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
                      </v-row>
                    </v-list>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                <v-expansion-panel-header class="text-h6  text-center" @click="reveal = false; reveal2 = false; reveal3 = false; reveal4 = false;">
                  520
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>Patch 5.4</v-card-title>
                            <v-img
                              style= "max-width: max-content; justify-self: center;"
                              src="https://sleepingdragons.eu/wp-content/uploads/2020/05/roulette.png"
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
                                Purchased from Aymark in Eulmore for Allagan Tomestone of Revelation. (Weekly)
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
                            <v-card-title>Patch 5.5</v-card-title>
                            <div class="d-flex flex-row" style="justify-content: center;">
                                <v-img
                                  style= "max-width: max-content; justify-self: center;"
                                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/raid.png"
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
                                The Tower at Paradigm's Breach (Weekly)<br/>The Cloud Deck (Extreme) (Weapon) (iLvl 525)
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
                      </v-row>
                    </v-list>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header class="text-h6  text-center" @click="reveal = false; reveal2 = false; reveal3 = false; reveal4 = false;">
                    530
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                              <v-card-title>Patch 5.4</v-card-title>
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
                                    Eden's Promise (Savage)<br/>Upgraded Tomestone Gear<br/>Eden's Promise (Savage) (Weapon) (iLvl 535)
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
      reveal4: false
    }),
  }
</script>