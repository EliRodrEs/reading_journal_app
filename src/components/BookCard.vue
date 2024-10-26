<template>
  <q-card class="my-card">
    <q-img :src="book.img">
      <div class="absolute-bottom">
        <div class="text-h6">{{ book.title }}</div>
        <div class="text-subtitle2">{{ book.subtitle }}</div>
      </div>
    </q-img>

    <q-card-actions>
      <q-btn v-if="book.tier">Rate me!</q-btn>
      <q-btn flat>Edit</q-btn>
      <q-btn flat>Delete</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { Book } from 'src/types/Book.type';

defineProps({
  book: {
    type: Object as () => Book,
    default: () => ({})
  }
})
</script>
