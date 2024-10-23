<template>
  <q-layout view="lHh Lpr lFf">
    <MainHeader @toggle-left-drawer="toggleLeftDrawer" />


    <LeftDrawer :left-drawer-open="leftDrawerOpen" />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MainHeader from 'src/components/MainHeader.vue';
import LeftDrawer from 'src/components/LeftDrawer.vue';

defineOptions({
  name: 'MainLayout'
});


const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
