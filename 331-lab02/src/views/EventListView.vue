<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import CategoryInfo from '@/components/CategoryInfo.vue'
import EventService from '../../services/EventService'
import type { Event } from '@/types'
import { ref , onMounted } from 'vue'


const events = ref<Event[]>([])

onMounted (() => {
  EventService.getEvents()
    .then((response) =>{
      events.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!' , error)
    })
})
</script>

<template>
  <h1>Events For Good</h1>
  <!-- new elements -->
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
  <div class="category">
    <CategoryInfo v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .category {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
