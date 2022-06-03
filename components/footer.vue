<!--
Copyright © 2022-present Adnan-Aidan Taha
This file is part of "botato.gq".

"botato.gq" is free software: you can redistribute it and/or modify it under the terms
of the GNU General Public License as published by the Free Software Foundation,
either version 3 of the License, or (at your option) any later version.

"botato.gq" is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with "botato.gq".
If not, see <https://www.gnu.org/licenses/>.
-->

<template>
  <footer class="footer">
    <a v-for="(item, index) in social" :key="index" :href="item.url">
      <octicons
        v-if="item.icon.source === 'octicons'"
        :name="item.icon.identifier"
        size="24"
      />
      <span
        v-else-if="item.icon.source === 'material'"
        class="material-icons"
        >{{ item.icon.identifier }}</span
      >
      <img v-else :src="item.icon.identifier" />
      {{ item.name }}
    </a>
  </footer>
</template>

<script type="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FooterBar',
  async asyncData({ $content }) {
    return await $content('social')
  }
});
</script>
