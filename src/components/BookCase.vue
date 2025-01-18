<template>
  <div>
    <div class="three">
      <h1
        class="text-[28px] font-medium tracking-normal leading-[1.5em] pb-4 relative font-raleway text-gray-900 transition-all duration-400 ease-in-out before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[5px] before:w-[55px] before:bg-gray-900 after:content-[''] after:absolute after:left-0 after:bottom-[2px] after:h-[1px] after:w-[95%] after:max-w-[255px] after:bg-gray-700 mb-4">
        Bookcase
      </h1>
    </div>
    <div class="books-holder flex flex-wrap gap-4 max-w-[40%]">
      <book-card v-for="book in books" :key="book.title" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BookCard from 'src/components/BookCard.vue';
import { books } from 'src/tests/mocks/booksMock';

</script>
