<template>
  <q-drawer :model-value="leftDrawerOpen" @update:model-value="updateLeftDrawer" show-if-above bordered
    class="bg-secondary">
    <q-list>
      <q-item-label header>
        Essential Links
      </q-item-label>

      <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
    </q-list>
  </q-drawer>
</template>


<script setup lang="ts">
import { EssentialLinkProps } from './EssentialLink.vue';

defineProps({
  leftDrawerOpen: {
    type: Boolean,
    required: true,
  }
})
const emit = defineEmits(['update:leftDrawerOpen']);

const updateLeftDrawer = (value: boolean) => {
  emit('update:leftDrawerOpen', value);
}
const linksList: EssentialLinkProps[] = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
];
</script>
