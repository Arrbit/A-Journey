<template>
    <v-main class="grey lighten-3">
        <v-container>
            <v-row>
                <v-col cols="2">
                    <v-sheet rounded="lg">
                        <v-list color="transparent">
                            <v-list-item
                             v-for="xpac in xpacs"
                             :key="xpac.text"
                             :to="xpac.route"
                             @click="savexpac(xpac.route)"
                             link>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{xpac.text}}
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-divider class="my-2"></v-divider>

                            <v-list-item 
                             v-for="mode in modes" 
                             :key="mode.text" 
                             :to="currentxpac + mode.route" 
                            link>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{mode.text}}
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                        </v-list>
                    </v-sheet>
                </v-col>

                <v-col>
                    <v-sheet style="background-color: unset;" rounded="lg">
                        <router-view />
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
<script>
export default {
  data: () => ({
        currentxpac:"",
        modes: [
            {text: 'Level Progression', route: "/ilevel"},
            {text: 'Patch Progression', route: "/patch"}],

        xpacs: [
            {text: 'A Realm Reborn', route: '/a-realm-reborn'},
            {text: 'Heavensward', route: '/heavensward'},
            {text: 'Stormblood',route: '/stormblood'},
            {text: 'Shadowbringers',route: '/shadowbringers'},
            {text: 'Endwalker',route: '/endwalker'}]}
        ),

    methods: {
        savexpac(newXpac){
            this.currentxpac = newXpac
        }
    },
}
    
</script>