<template>
    <v-main class="grey lighten-3">
        <v-container>
            <v-row>
                <v-col cols="2">
                    <v-sheet rounded="lg">
                        <v-list color="transparent">
                            <v-list-item
                             v-for="xpacs in xpacs"
                             :key="xpacs"
                             :to="xpacs.route"
                             v-on:click="setXpac()"
                             link>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{xpacs.text}}
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-divider class="my-2"></v-divider>

                            <v-list-item v-for="modes in modes" :key="modes" :to="modes.route" link>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{modes.text}}
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                        </v-list>
                    </v-sheet>
                </v-col>

                <v-col>
                    <v-sheet min-height="70vh" rounded="lg">
                        {{this.expansion}}
                        <router-view />

                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
<script>
    export default {
        name: 'App',
        data() {
            return {
                expansion: "kein test",

                methods: {
                    setXpac() {return 'newxpac'}
                },

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
                        route: '/'
                    },
                ],

                modes: [{
                        text: 'Level Progression',
                        route: "/ilevel"
                    },
                    {
                        text: 'Patch Progression',
                        route: "/patch"
                    },
                ],
            }
        }
    }
</script>