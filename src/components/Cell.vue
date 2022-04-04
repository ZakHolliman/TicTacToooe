<script setup lang="ts">
import { onMounted, ref } from "vue"
import { mapActions, storeToRefs } from "pinia";
import { newBoard } from "../stores/newBoard"

const buttonClicked = ref(false);

const props = defineProps({
    indexX: Number,
    indexY: Number
})

const main = newBoard();

onMounted(() => {
  main.board[Number(props.indexX)][Number(props.indexY)] = ".";
})

function takeTurn(){
    if(buttonClicked.value == false){
        main.board[Number(props.indexX)][Number(props.indexY)] = main.currentPlayer;

        if(main.currentPlayer == "O"){
            main.currentPlayer = "X";
        } else if (main.currentPlayer == "X"){
            main.currentPlayer = "O";
        }
        
        buttonClicked.value = true;
    }
}

</script>

<template>
    <button @click="takeTurn">{{ main.board[Number(props.indexX)][Number(props.indexY)] }}</button>
</template>
