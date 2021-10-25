<template>
  <v-app>
    <v-main>
      <ilvlhelper/>
    </v-main>
  </v-app>
</template>

<script>
import ilvlhelper from './components/ilvl_helper.vue'

export default {
  name: 'App',

  components: {
    ilvlhelper,
  },

  data: () => ({
    //
  }),
}
</script>
