<script setup lang="ts">
  import Cell from "./Cell.vue"
  import { onMounted, ref } from "vue"

  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

  const currentPlayer = ref('O');
  const win = ref(false);
  const winnerName = ref(".");
  const winningToken = ref("/");

  // How the fuck do I fucking access the value form the button that im clicking so that I can look through them
  // and see if there is a win or not FUCK I hate this shit

// Ok I have it set up to be able to win and shit I literally just don't know how to access the components in the cells
  const array = [["O", "O", "O"], [".", "X", "."], ["X", ".", "O"]];

  function evaluateBoard(){
    let winCounter = 0;

    // Horiz check
    for (let y = 0; y < 3; y++) {
      if(array[y][0] != "."){
        winningToken.value = array[y][0];

        winCounter = 0;

        for(let x = 0; x < 3; x++){
          if(array[y][x] == winningToken.value){
            winCounter++;
          } else {
            break;
          }
        }

        if(winCounter == 3){
          win.value = true;
          winnerName.value = currentPlayer.value;

          break;
        }     
      } else {
        continue;
      }
    }

    // Vert check
    for (let y = 0; y < 3; y++) {
      if(array[0][y] != "."){
        winningToken.value = array[0][y];

        winCounter = 0;

        for(let x = 0; x < 3; x++){
          if(array[x][y] == winningToken.value){
            winCounter++;
          } else {
            break;
          }
        }

        if(winCounter == 3){
          win.value = true;
          winnerName.value = currentPlayer.value;

          break;
        }     
      } else {
        continue;
      }
    }

    // Vert check
    if(array[0][0] != "."){
      winningToken.value = array[0][0];

      if(array[0][0] == winningToken.value && array[1][1] == winningToken.value && array[2][2] == winningToken.value){
        win.value = true;
        winnerName.value = currentPlayer.value;
      }
    }

    if(array[2][0] != "."){
      winningToken.value = array[2][0];

      if(array[2][0] == winningToken.value && array[1][1] == winningToken.value && array[0][2] == winningToken.value){
        win.value = true;
        winnerName.value = currentPlayer.value;
      }
    }
  }

  function switchPlayer(){
    // Make a switch maybe idfk
    if(currentPlayer.value == "O"){
      currentPlayer.value = "X";
    } else if (currentPlayer.value == "X"){
      currentPlayer.value = "O";
    }
  }

  function takeTurn(){
    evaluateBoard();

    switchPlayer();
  }
</script>

<template>
  <h4>TicTacToe</h4>
  <h6>{{ currentPlayer }} turn</h6>

  <div>
    <table>
      <tr>
        <td>
          <Cell 
            :player="currentPlayer"
            @response="takeTurn"
          ></Cell>
        </td>

        <td>
          <Cell 
            :player="currentPlayer"
            @response="takeTurn"
          ></Cell>
        </td>

        <td>
          <Cell 
            :player="currentPlayer"
            @response="takeTurn"
          ></Cell>
        </td>
      </tr>

      <tr>
        <td>
          <Cell 
            :player="currentPlayer"
            @response="takeTurn"
          ></Cell>
        </td>

        <td>
          <Cell 
            :player="currentPlayer"
            @response="takeTurn"
          ></Cell>
        </td>

        <td>
          <Cell 
            :player="currentPlayer"
            @response="takeTurn"
          ></Cell>
        </td>
      </tr>

      <tr>
        <td>
          <Cell 
            :player="currentPlayer"
            @response="takeTurn"
          ></Cell>
        </td>

        <td>
          <Cell 
            :player="currentPlayer"
            @response="takeTurn"
          ></Cell>
        </td>

        <td>
          <Cell 
            :player="currentPlayer"
            @response="takeTurn"
          ></Cell>
        </td>
      </tr>
    </table>
  </div>
  

  <h4 v-if="win">{{ winnerName }} Win!</h4>
</template>
