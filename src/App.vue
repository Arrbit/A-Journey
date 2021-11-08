<template>
<v-app id="app">

    <v-app-bar app class="lighten-4 grey black--text" dense>
        <v-container class="py-0 fill-height">

            <v-spacer />
            <v-btn v-for="links in hlinks" :key="links.text" text :href="links.href">
                {{ links.text }}
                <v-icon v-if="!hlinks.icon"> {{ links.icon }} </v-icon>
            </v-btn>
            <v-spacer />
        </v-container>
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
