<template>
  <div class="books-holder flex flex-wrap gap-4 max-w-[40%]">
    <book-card v-for="book in books" :key="book.title" />
  </div>
</template>

<script setup lang="ts">
import BookCard from 'src/components/BookCard.vue';
import { books } from 'src/tests/mocks/booksMock';

</script>
