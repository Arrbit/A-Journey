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
                <v-expansion-panel>
                  <v-expansion-panel-header class="text-h6  text-center" @click="reveal = false; reveal2 = false; reveal3 = false; reveal4 = false; reveal5 = false; reveal6 = false;">
                    6.0
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                       <v-row>
                          <v-col>
                           <v-card elevation="0" style="display: grid; justify-content: center;">
                           <v-card-title>560 iLvl</v-card-title>
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
                                    Quest Gear<br/>Dungeon Gear
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
                        <v-card-title>570 iLvl</v-card-title>
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
                              Tomestone Gear
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
                         <v-card-title>580 iLvl</v-card-title>
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
                        EX Trial (Weapon + Accessories)<br/>Normal Raid 1-4 (Weekly) (Patch 6.01)<br/>Crafted Gear (Patch 6.05)
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
                         <v-card-title>590 iLvl</v-card-title>
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
                          Tomestone Gear (Weekly) (Patch 6.05)
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
                         <v-card-title>600 iLvl</v-card-title>
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
                        Savage Raid Gear (Patch 6.05)<br/>Upgraded Tomestone Gear (Patch 6.05)<br/>Savage Raid Weapon (iLvl 605) (Patch 6.05)
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
                    6.1
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>575 iLvl</v-card-title>
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
                                  Dungeon Gear
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
                            <v-card-title>590 iLvl</v-card-title>
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
                              24-man Raid No.1 (Weekly)
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
                            <v-card-title>595 iLvl</v-card-title>
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
                              EX Trial (Weapon)
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
                    6.2
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>585 iLvl</v-card-title>
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
                                  Dungeon Gear
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
                            <v-card-title>590 iLvl</v-card-title>
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
                              Tomestone Gear (Unlimited)
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
                            <v-card-title>610 iLvl</v-card-title>
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
                              Normal Raid 5-8 (Weekly)<br/>Crafted Gear
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
                            <v-card-title>615 iLvl</v-card-title>
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
                              EX Trial (Weapon)
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
                            <v-card-title>620 iLvl</v-card-title>
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
                              Tomestone Gear (Weekly)
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
                            <v-card-title>630 iLvl</v-card-title>
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
                              Savage Raid Gear<br/>Upgraded Tomestone Gear<br/>Savage Gear Weapon (iLvl 635)
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
                    6.3
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>605 iLvl</v-card-title>
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
                                  Dungeon Gear
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
                            <v-card-title>620 iLvl</v-card-title>
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
                              24-man Raid No.2 (Weekly)
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
                            <v-card-title>625 iLvl</v-card-title>
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
                              EX Trial (Weapon)
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
                    6.4
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>615 iLvl</v-card-title>
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
                                  Dungeon Gear
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
                            <v-card-title>620 iLvl</v-card-title>
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
                              Tomestone Gear (Unlimited)
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
                            <v-card-title>640 iLvl</v-card-title>
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
                              Normal Raid 9-12 (Weekly)<br/>Crafted Gear
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
                            <v-card-title>645 iLvl</v-card-title>
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
                              EX Trial (Weapon)
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
                            <v-card-title>650 iLvl</v-card-title>
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
                              Tomestone Gear (Weekly)
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
                            <v-card-title>660 iLvl</v-card-title>
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
                              Savage Raid Gear<br/>Upgraded Tomestone Gear<br/>Savage Gear Weapon (iLvl 665)
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
                    6.5
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-row>
                        <v-col>
                          <v-card elevation="0" style="display: grid; justify-content: center;">
                            <v-card-title>635 iLvl</v-card-title>
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
                                  Dungeon Gear
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
                            <v-card-title>650 iLvl</v-card-title>
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
                              24-man Raid No.3 (Weekly)
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
                            <v-card-title>655 iLvl</v-card-title>
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
                              EX Trial (Weapon)
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
