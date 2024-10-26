<template>
  <q-header elevated class="bg-yellow-950">
    <q-toolbar>
      <q-btn class="text-accent" flat dense round icon="menu" aria-label="Menu" @click="$emit('toggleLeftDrawer')" />

      <q-toolbar-title class="text-accent">
        Reading Journal
      </q-toolbar-title>

      <div class="btn-holder flex gap-4">
        <q-btn class="text-accent" flat icon="import_contacts" label="New book" />
        <q-btn class="text-accent" flat icon="rate_review" label="New review" />
      </div>
    </q-toolbar>
  </q-header>
</template>
