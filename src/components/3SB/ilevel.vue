<template>
    <v-sheet
    style="background-color: unset;"
              min-height="70vh"
              rounded="lg"
            >
              <v-expansion-panels accordion>
                <v-expansion-panel>
                  <v-expansion-panel-header class="text-h6  text-center" @click="reveal = false">
                    300
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                     <v-card elevation="0" style="display: grid; justify-content: center;">
                        <v-card-title>Patch 4.0</v-card-title>
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
                              Quest Gear<br/>The Temple of the Fist, Kugane Castle and Ala Mhigo.
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
                    310
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>Patch 4.0</v-card-title>
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
                                  Purchased from Billebaut in Rhalgr's Reach for Centurio Seals.
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
                            <v-card-title>Patch 4.1</v-card-title>
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
                                The Drowned City of Skalla (315 iLvl).
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
                    320
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                     <v-row>
                        <v-col>
                           <v-card elevation="0" style="display: grid; justify-content: center;">
                              <v-card-title style="justify-self: center;">Patch 4.0</v-card-title>
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
                                  The Pool of Tribute (Extreme) (Weapon)<br/>
                                  Emanation (Extreme) (Accessories)
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
                              <v-card-title style="justify-self: center;">Patch 4.01</v-card-title>
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
                                    Omega: Deltascape (Normal)
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
                              <v-card-title style="justify-self: center;">Patch 4.05</v-card-title>
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
                        <v-card-title>Patch 4.2</v-card-title>
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
                               Hells' Lid (325 iLvl)<br/>The Fractal Continuum (Hard) (325 iLvl)
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
                    330
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                       <v-row>
                      <v-col>
                      <v-card elevation="0" style="display: grid; justify-content: center;">
                        <v-card-title>Patch 4.1</v-card-title>
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
                              The Royal City of Rabanastre<br />The Minstrel's Ballad: Shinryu's Domain (Weapon) (iLvl 335)
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
                         <v-card-title>Patch 4.2</v-card-title>
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
                        Unavailable, existing armor can be upgraded with Allagan Tomestone of Poetics at E'bolaff in Rhalgr's Reach.
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
                    340
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                              <v-card-title>Patch 4.05</v-card-title>
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
                                    Deltascape (Savage)<br/>Upgraded Tomestone Gear<br/>Deltascape (Savage) (Weapon) (iLvl 345)
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
                          <v-card-title>Patch 4.3</v-card-title>
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
                                The Swallow's Compass (345 iLvl)
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
                    350
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>Patch 4.2</v-card-title>
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
                                  Omega: Sigmascape (Normal)<br/>Crafted Gear<br/>The Jade Stoa (Extreme) (Weapon) (iLvl 485)
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
                            <v-card-title>Patch 4.4</v-card-title>
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
                                  The Burn (355 iLvl)<br/>Saint Mocianne's Arboretum (Hard) (355 iLvl)
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
                    360
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>Patch 4.3</v-card-title>
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
                                The Ridorana Lighthouse<br/>The Minstrel's Ballad: Tsukuyomi's Pain (Weapon) (iLvl 365)
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
                            <v-card-title>Patch 4.4</v-card-title>
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
                                Unavailable, existing armor can be upgraded with Allagan Tomestone of Poetics at E'bolaff in Rhalgr's Reach.
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
                    370
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                              <v-card-title>Patch 4.2</v-card-title>
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
                                   Sigmascape (Savage))<br/>Upgraded Tomestone Gear<br/>Sigmascape (Savage) (Weapon) (iLvl 375)
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
                          <v-card-title>Patch 4.5</v-card-title>
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
                                The Ghimlyt Dark (375 iLvl)
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
                    380
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>Patch 4.4</v-card-title>
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
                                  Omega: Alphascape (Normal)<br/>Crafted Gear<br/>Hells' Kier (Extreme) (Weapon) (iLvl 385)
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
                  390
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>Patch 4.4</v-card-title>
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
                               Unavailable, existing armor can be upgraded with Allagan Tomestone of Poetics at E'bolaff in Rhalgr's Reach
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
                            <v-card-title>Patch 4.5</v-card-title>
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
                                The Orbonne Monastery<br/>The Wreath of Snakes (Extreme) (Weapon) (iLvl 395)
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
                    400
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                              <v-card-title>Patch 4.4</v-card-title>
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
                                    Alphascape (Savage)<br/>Upgraded Tomestone Gear<br/>Alphascape (Savage) (Weapon) (iLvl 405)
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