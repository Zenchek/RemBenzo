<template>

<Header />

<Hero @open-modal="openModal"/>

<Advantages 
:advantages="advantages"/>

<Services  />

<WhyChooseUs />

<Contacts
    @open-modal="openModal"
    :contacts="сontactsInfo" />

<Modal 
    v-if="isOpen"
    @close-modal="closeModal" />

</template>

<script setup>
import Header from '@/components/Header/Header.vue';
import Hero from '@/components/Hero/Hero.vue';
import Advantages from '@/components/Advantages/Advantages.vue';
import Services from '@/components/Services/Services.vue';
import Modal from '@/components/Modal/Modal.vue';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs.vue';
import Contacts from '@/components/Contacts/Contacts.vue';

import { ref } from "vue";
const isOpen = ref(false);

function openModal() {
    isOpen.value = true
}

function closeModal() {
    isOpen.value = false
}

const сontactsInfo = {
    phone: "79494275408",
    address: "ул. Артёма д. 267",
    grafic: "вт-вс"
}

import advantages from '@/data/advantages';
</script>
<style scoped>
</style>