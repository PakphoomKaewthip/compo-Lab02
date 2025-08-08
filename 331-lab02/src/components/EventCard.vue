<script setup lang="ts">
import { type Event } from '@/types'
defineProps<{
  event: Event
}>()
</script>

<template>
  <RouterLink
    class="no-underline text-[#2c3e50]"
    :to="{ name: 'event-detail-view', params: { id: event.id } }"
  >
    <div
      class="cursor-pointer border border-[#39495c] p-5 w-[250px] mb-[18px] transition-transform duration-200 hover:scale-[1.01] hover:shadow-[0_3px_12px_rgba(0,0,0,0.2)]"
    >
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>
