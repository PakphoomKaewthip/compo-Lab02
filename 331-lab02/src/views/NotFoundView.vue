<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
const props = withDefaults(
    defineProps<{
        resource: String
    }>(),
    {
        resource: 'page'
    }
)
</script>
<template>
    <h1>Oops!</h1>
    <h3>{{ resource }} you're looking for is not here.</h3>
    <RouterLink :to="{ name: 'event-list-view' }">
        Back to the home page
    </RouterLink>
</template>