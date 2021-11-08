<template>
<v-main>
      <v-navigation-drawer class="d-sm-block d-block d-md-none" v-model="drawer" absolute temporary>
            <v-list nav dense>
                <v-list-item v-for="xpac in xpacs" :key="xpac.text" :to="xpac.route" @click="savexpac(xpac.route)" link>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{xpac.text}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item v-for="mode in modes" :key="mode.text" :to="currentxpac + mode.route" link>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{mode.text}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

            </v-list>
        </v-navigation-drawer>

    <v-container fluid>

        <v-row>
            <v-col class="d-sm-none d-none d-md-block" cols="1">
                <router-link to="/">
                    <v-img contain height="200" class="img_flip ma-3" alt="SDS Logo" src="https://sleepingdragons.eu/wp-content/themes/New-Sleeping-Dragons/assets/logos/VectorRed_Transparent.png" />
                </router-link>
            </v-col>

            <v-col class="d-sm-none d-none d-md-block" cols="1">

                <v-card class="mx-auto" max-width="300">
                    <v-list>
                        <v-list-item v-for="xpac in xpacs" :key="xpac.text" :to="xpac.route" @click="savexpac(xpac.route)" link>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{xpac.text}}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-divider class="my-2"></v-divider>

                        <v-list-item v-for="mode in modes" :key="mode.text" :to="currentxpac + mode.route" link>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{mode.text}}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                    </v-list>
                </v-card>
            </v-col>

            <v-col>
                <router-view />

            </v-col>
        </v-row>
    </v-container>

                <v-app-bar-nav-icon class="float-right d-sm-block d-block d-md-none" @click="drawer = true"></v-app-bar-nav-icon>

</v-main>
</template>

<script>
export default {
    data: () => ({
        currentxpac: "",
        drawer: false,
        modes: [{
                text: 'Level Progression',
                route: "/ilevel"
            },
            {
                text: 'Patch Progression',
                route: "/patch"
            }
        ],

        xpacs: [{
                text: 'A Realm Reborn',
                route: '/a-realm-reborn'
            },
            {
                text: 'Heavensward',
                route: '/heavensward'
            },
            {
                text: 'Stormblood',
                route: '/stormblood'
            },
            {
                text: 'Shadowbringer',
                route: '/shadowbringers'
            },
            {
                text: 'Endwalker',
                route: '/endwalker'
            }
        ]
    }),

    methods: {
        savexpac(newXpac) {
            this.currentxpac = newXpac
        }
    },
}
</script>

<style scoped>
.img_flip {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
}
</style>
