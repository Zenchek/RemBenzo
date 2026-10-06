<template>
    <div id="modal-1" class="modal">
        <form id="closeBtn" class="form"
            @submit.prevent = "sendForm">
            <button @click="closeModal" class="cloase-button" type="button"><span>❌</span></button>
            <div class="modal__after modal__services">
                <span>Book diagnostics</span>
                <input type="text"
                    v-model="service"/>
            </div>
            <div class="modal__after modal__name">
                <span>Name</span>
                <input type="text"
                    v-model="name"/>
            </div>
            <div class="modal__after modal__phone">
                <span>Phone</span>
                <input type="tel"
                    v-model="phone"/>
            </div>
            <input class="button modal__button" type="Submit"
                :disabled="isSubmitDisabled"/>
        </form>
    </div>
</template>
<script setup>
import { computed, ref, watch, onMounted, onUnmounted } from "vue";
const emit = defineEmits(["close-modal"])
const name = ref("");
const phone = ref("");
const service = ref("");

const isSubmitDisabled = computed(() => {
    return !name.value || !phone.value || !service.value
})

watch(name, (newValue) => {
    if(newValue[0] != newValue[0].toUpperCase()){
        const first = newValue[0].toUpperCase();
        
        const rest = [...newValue]

        rest.slice(1)

        const result =[first, ...rest].join('')
        
        console.log(result)
        name.value = result
    }
})

function closeModal() {
    emit("close-modal")
}

function sendForm() {
    if(!name.value || !phone.value || !service.value){
        alert("Заполните все поля")
        return
    }
    else{
        console.log({
        name: name.value,
        phone: phone.value,
        service: service.value
    })

        name.value="";
        phone.value="";
        service.value="";
        emit("close-modal")
    }
}

onMounted(() =>{
    console.log("Modal mounted")
})

onUnmounted(()=>{
    console.log("Modal destroyed")
})
</script>
<style scoped>
@import "./Modal.css";
</style>