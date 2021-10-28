<template>
  <v-app id="app">

       <v-app-bar
      app
      color="white"
      light
    >
      <div class="d-flex align-center">
        <v-img
          alt="SDS Logo"
          class="shrink mr-2"
          contain
          src="https://sleepingdragons.eu/wp-content/themes/New-Sleeping-Dragons/assets/logos/VectorRed_Transparent.png"
          transition="scale-transition"
          width="40"
        />

        SleepingDragons ilvl-helper

      </div>

      <v-spacer></v-spacer>

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
    flinks: [
       {text: 'Legal Disclosure', href: 'https://sleepingdragons.eu/contact/' },
       {text: 'Privacy Policy', href: 'https://sleepingdragons.eu/privacypolicy/' },
       {text: 'Netlifys GDPR', href: 'https://www.netlify.com/gdpr-ccpa/' },
       {text: 'Contact', href: 'https://sleepingdragons.eu/contact/' },
      ],
  }),
};
</script>
