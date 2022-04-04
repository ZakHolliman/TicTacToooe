<script setup lang="ts">
import { onMounted, ref } from "vue"

const buttonClicked = ref(false);

const buttonTextNew = ref("");

const props = defineProps({
    player: String,
    indexX: Number,
    indexY: Number
})

const emit = defineEmits(['response'])

const buttonText = ref(props.player);

onMounted(() => {
  buttonTextNew.value = ".";
})

function takeTurn(){
    if(buttonClicked.value == false){
        buttonText.value = props.player
        emit('response', 'hello from child');
        buttonClicked.value = true;
    }
}

</script>

<template>
    <button @click="takeTurn">{{ buttonText }}</button>
</template>
