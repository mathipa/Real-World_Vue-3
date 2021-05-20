<template>
  <div class="events">
     <h1>Events for Good</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue';
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'Home',
  components: {
  //  HelloWorld,
    EventCard
  },
  data() {
    return {

      events:[
        {
          id: 236541,
          category: 'Anaimal',
          title: 'cat event day',
          description: 'This is a cat',
          location: 'Kenya',
          date: 'Jan 25, 2020',
          time: '12:00',
          petsAllowed: true,
          organizer: 'Kat lavoer'
       },
        {
        id: 236542,
        category: 'People',
        title: 'Dog event day',
        description: 'This is a Dog',
        location: 'Moz',
        date: 'Jan 23, 2021',
        time: '11:00',
        petsAllowed: true,
        organizer: 'Moes lavoer'
       },
       {
        id: 236543,
        category: 'Cars',
        title: 'Zoom event day',
        description: 'This is a Dog',
        location: 'Moz',
        date: 'Jan 23, 2021',
        time: '11:00',
        petsAllowed: true,
        organizer: 'Moes lavoer'
       }

      ]
   
    }
  }
    
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>