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