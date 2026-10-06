<template>
    <div class="herro--main-container">
        <div class="herro--container">
            <div class="right-container">
                <div class="hero__content">
                    <div>
                        <h1>Profesional repair of chainsaws and generators in Donetsk</h1>
                        <p>Warranty on all works, original parts</p>
                    </div>
                    <button @click="openModal()" class="button herro--button">📅 Book diagnosin</button>
                </div>
            </div>
            <div class="left-container"></div>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
const emit =defineEmits(["open-modal"]);

function openModal() {
    emit("open-modal")
}

onMounted(() => {
    console.log("Hero mounted")
})
</script>
<style scoped>
    @import "./Herro.css";
</style>