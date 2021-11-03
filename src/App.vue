<template>
  <v-app id="app">
        <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-btn text
                  href="/">
        <v-img
          alt="SDS Logo"
          class="shrink mr-2"
          contain
          src="https://sleepingdragons.eu/wp-content/themes/New-Sleeping-Dragons/assets/logos/VectorRed_Transparent.png"
          transition="scale-transition"
          width="40"
        /></v-btn>


        <v-btn
          v-for="hlinks in hlinks"
          :key="hlinks"
          text
          :href="hlinks.href"
        >
          {{ hlinks.text }}
        </v-btn>
        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>

    <router-view/>



    <v-footer
      padless="padless"
    >
      <v-card
        flat
        tile
        width="100%"
        class="grey lighten-1 text-center black--text"
      >
        <v-card-text>
          <v-btn
            v-for="flinks in flinks"
            :key="flinks"
            text
            class="mx-4"
            :href="flinks.href"
          >
          {{ flinks.text }}
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="black--text">
          {{ new Date().getFullYear() }} — <strong>SleepingDragons</strong>
        </v-card-text>
      </v-card>
    </v-footer>


  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
        hlinks: [
       {text: 'Home', href: 'https://sleepingdragons.eu/' },
       {text: 'Events', href: 'https://sleepingdragons.eu/upcoming-events/' },
       {text: 'Guides', href: 'https://sleepingdragons.eu/guides/' },
       {text: 'Letters', href: 'https://sleepingdragons.eu/letter/' },
       {text: 'Members', href: 'https://sleepingdragons.eu/members/' },
       {text: 'Discord', href: 'https://discord.com/invite/4xh39AD' },
      ],
    flinks: [
       {text: 'Legal Disclosure', href: 'https://sleepingdragons.eu/contact/' },
       {text: 'Privacy Policy', href: 'https://sleepingdragons.eu/privacypolicy/' },
       {text: 'Netlifys GDPR', href: 'https://www.netlify.com/gdpr-ccpa/' },
       {text: 'Contact', href: 'https://sleepingdragons.eu/contact/' },
      ],
  }),
};
</script>