<template>
<v-app id="app">
     <v-navigation-drawer class="d-sm-block d-block d-md-flex" v-model="header" absolute temporary>
            <v-list nav dense>
                <v-list-item  v-for="links in hlinks" :key="links.text" text :href="links.href">
                    <v-list-item-content>
                        <v-list-item-title>
                           {{ links.text }}
                                <v-icon v-if="!hlinks.icon"> {{ links.icon }} </v-icon>

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

    <v-app-bar app class="lighten-4 grey black--text" dense>
          <v-spacer />

            <v-btn class="d-sm-none d-none d-md-flex" v-for="links in hlinks" :key="links.text" text :href="links.href">
                {{ links.text }}
                <v-icon v-if="!hlinks.icon"> {{ links.icon }} </v-icon>
            </v-btn>
            <v-spacer />
            <v-app-bar-nav-icon class="float-right d-sm-block d-block d-md-none" @click="header = true"></v-app-bar-nav-icon>
    </v-app-bar>

    <router-view />

    <v-footer padless>

        <v-card flat tile width="100%" class="lighten-4 grey text-center black--text">

            <v-btn v-for="links in flinks" :key="links.text" :href="links.href" text small rounded class="my-2">
                {{ links.text }}
            </v-btn>

            <v-divider />

            <v-card-text class="black--text">
                Hosted by Netlify | {{ new Date().getFullYear() }} — <strong>SleepingDragons</strong>
            </v-card-text>
        </v-card>
    </v-footer>

</v-app>
</template>

<script>
export default {
    name: 'App',

    data: () => ({
        header: false,
        hlinks: [{
                text: 'Home',
                href: 'https://sleepingdragons.eu/'
            },
            {
                text: 'Events',
                href: 'https://sleepingdragons.eu/upcoming-events/'
            },
            {
                text: 'Guides',
                href: 'https://sleepingdragons.eu/guides/'
            },
            {
                text: 'Letters',
                href: 'https://sleepingdragons.eu/letter/'
            },
            {
                text: 'Members',
                href: 'https://sleepingdragons.eu/members/'
            },
            {
                text: 'Discord',
                href: 'https://discord.com/invite/4xh39AD',
                icon: 'mdi-discord'
            },
        ],
        flinks: [{
                text: 'Legal Disclosure',
                href: 'https://sleepingdragons.eu/contact/'
            },
            {
                text: 'Privacy Policy',
                href: 'https://sleepingdragons.eu/privacypolicy/'
            },
            {
                text: 'Netlifys GDPR',
                href: 'https://www.netlify.com/gdpr-ccpa/'
            },
        ],
    }),
};
</script>
