<script setup lang="ts">
  // import Board from "../components/Board.vue";

  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

  import { onMounted, ref } from 'vue'
  import { mapActions, storeToRefs } from "pinia";
  import { newBoard } from "../stores/newBoard"
  import Cell from '../components/Cell.vue';

  const main = newBoard();

  const {board, currentPlayer} = storeToRefs(main);

  onMounted(() => {
    for(let y = 0; y < 3; y++){
      for(let x = 0; x < 3; x++){
        //board.value[y][x].text = ".";
      }
    }
  })

  

  function getCell(){

  }

</script>

<template>
  <h4>TicTacToe</h4>
  <h6>{{ currentPlayer }} turn</h6>

  <table>
    
      <tr v-for="(cellRow, indY) in board">
        <td v-for="(cellHoriz, indX) in board[indY]">
          <Cell :indexX="indX" :indexY="indY"></Cell>
        </td>
    </tr>
  </table>
</template>