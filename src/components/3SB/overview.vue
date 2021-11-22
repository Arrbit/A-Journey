<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            
          </th>
          <th class="text-left">
            4.0
          </th>
          <th class="text-left">
            4.01
          </th>
          <th class="text-left">
            4.05
          </th>
          <th class="text-left">
            4.1
          </th>
          <th class="text-left">
            4.2
          </th>
          <th class="text-left">
            4.3
          </th>
          <th class="text-left">
            4.4
          </th>
          <th class="text-left">
            4.5
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>300</td>
          <td>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/quest_Icon.png" />
              </template>
              <span>Quest Gear</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/dungeon-1.png" />
              </template>
              <span>The Temple of the Fist, Kugane Castle and Ala Mhigo.</span>
            </v-tooltip> 
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr> 
          <td>310</td>
          <td>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/roulette.png" />
              </template>
              <span>Purchased from Billebaut in Rhalgr's Reach for Centurio Seals.</span>
            </v-tooltip>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr> 
          <td>315</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/dungeon-1.png" />
              </template>
              <span>The Drowned City of Skalla</span>
            </v-tooltip>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr> 
          <td>320</td>
          <td>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/trial-1.png" />
              </template>
              <span>
                The Pool of Tribute (Extreme) (Weapon)<br/>
                Emanation (Extreme) (Accessories)
              </span>
            </v-tooltip>
          </td>
          <td>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/raid.png" />
              </template>
              <span>Omega: Deltascape (Normal)</span>
            </v-tooltip>
          </td>
          <td>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/crafted-1.png" />
              </template>
              <span>Crafted Gear</span>
            </v-tooltip>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr> 
          <td>325</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/dungeon-1.png" />
              </template>
              <span>Hells' Lid<br/>The Fractal Continuum (Hard)</span>
            </v-tooltip>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr> 
          <td>330</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/raid.png" />
              </template>
              <span>The Royal City of Rabanastre</span>
            </v-tooltip>
          </td>
          <td>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/roulette.png" />
              </template>
              <span>Unavailable, existing armor can be upgraded with Allagan Tomestone of Poetics at E'bolaff in Rhalgr's Reach.</span>
            </v-tooltip>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr> 
          <td>335</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/trial-1.png" />
              </template>
              <span>The Minstrel's Ballad: Shinryu's Domain (Weapon)</span>
            </v-tooltip>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr> 
          <td>340</td>
          <td></td>
          <td></td>
           <td>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/realraid.png" />
              </template>
              <span>Deltascape (Savage)</span>
            </v-tooltip>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/roulette.png" />
              </template>
              <span>Upgraded Tomestone Gear</span>
            </v-tooltip>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr> 
          <td>345</td>
          <td></td>
          <td></td>
          <td>
          <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <img
                v-bind="attrs"
                v-on="on"
                src="https://sleepingdragons.eu/wp-content/uploads/2020/05/realraid.png" />
            </template>
            <span>Deltascape (Savage) (Weapon)</span>
          </v-tooltip>
          </td>
          <td></td>
          <td></td>
          <td>
          <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <img
                v-bind="attrs"
                v-on="on"
                src="https://sleepingdragons.eu/wp-content/uploads/2020/05/dungeon-1.png" />
            </template>
            <span>The Swallow's Compass</span>
          </v-tooltip>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr> 
          <td>350</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
          <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <img
                v-bind="attrs"
                v-on="on"
                src="https://sleepingdragons.eu/wp-content/uploads/2020/05/raid.png" />
            </template>
            <span>Omega: Sigmascape (Normal)</span>
          </v-tooltip>
          <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <img
                v-bind="attrs"
                v-on="on"
                src="https://sleepingdragons.eu/wp-content/uploads/2020/05/crafted-1.png" />
            </template>
            <span>Crafted Gear</span>
          </v-tooltip>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr> 
          <td>355</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/trial-1.png" />
              </template>
              <span>The Jade Stoa (Extreme) (Weapon)</span>
            </v-tooltip>
          </td>
          <td></td>
          <td>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/dungeon-1.png" />
              </template>
              <span>The Burn<br/>Saint Mocianne's Arboretum (Hard)</span>
            </v-tooltip>
          </td>
          <td></td>
        </tr>
        <tr> 
          <td>360</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/raid.png" />
              </template>
              <span>The Ridorana Lighthouse</span>
            </v-tooltip>
          </td>
          <td>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/roulette.png" />
              </template>
              <span>Unavailable, existing armor can be upgraded with Allagan Tomestone of Poetics at E'bolaff in Rhalgr's Reach </span>
            </v-tooltip>
          </td>
          <td></td>
        </tr>
        <tr> 
          <td>365</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/trial-1.png" />
              </template>
              <span>The Minstrel's Ballad: Tsukuyomi's Pain (Weapon)</span>
            </v-tooltip>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr> 
          <td>370</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/realraid.png" />
              </template>
              <span>Sigmascape (Savage)</span>
            </v-tooltip>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/roulette.png" />
              </template>
              <span>Upgraded Tomestone Gear</span>
            </v-tooltip>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr> 
          <td>375</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/realraid.png" />
              </template>
              <span>Sigmascape (Savage) (Weapon)</span>
            </v-tooltip>
          </td>
          <td></td>
          <td></td>
          <td>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/dungeon-1.png" />
              </template>
              <span>The Ghimlyt Dark</span>
            </v-tooltip>
          </td>
        </tr>
        <tr> 
          <td>380</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/raid.png" />
              </template>
              <span>Omega: Alphascape (Normal)</span>
            </v-tooltip>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/crafted-1.png" />
              </template>
              <span>Crafted Gear</span>
            </v-tooltip>
          </td>
          <td></td>
        </tr>
        <tr> 
          <td>385</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/trial-1.png" />
              </template>
              <span>Hells' Kier (Extreme) (Weapon)</span>
            </v-tooltip>
          </td>
          <td></td>
        </tr>
        <tr> 
          <td>390</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/roulette.png" />
              </template>
              <span>Unavailable, existing armor can be upgraded with Allagan Tomestone of Poetics at E'bolaff in Rhalgr's Reach</span>
            </v-tooltip>
          </td>
          <td>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/raid.png" />
              </template>
              <span>The Orbonne Monastery</span>
            </v-tooltip>
          </td>
        </tr>
        <tr> 
          <td>395</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/trial-1.png" />
              </template>
              <span>The Wreath of Snakes (Extreme) (Weapon)</span>
            </v-tooltip>
          </td>
        </tr>
        <tr> 
          <td>400</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  max-height="max-content"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/realraid.png" />
              </template>
              <span>Alphascape (Savage)</span>
            </v-tooltip>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/roulette.png" />
              </template>
              <span>Upgraded Tomestone Gear</span>
            </v-tooltip>
          </td>
          <td></td>
        </tr>
        <tr> 
          <td>405</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  src="https://sleepingdragons.eu/wp-content/uploads/2020/05/realraid.png" />
              </template>
              <span>Alphascape (Savage) (Weapon)</span>
            </v-tooltip>
          </td>
          <td></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>