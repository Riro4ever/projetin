<script setup>
import GameMove from './GameMove.vue';
import { ref, onMounted, computed, reactive} from 'vue';
import { state, makeMove } from "./socket";

let player = reactive({
  name: 'playername',
  side: 1,
});

let isTurn = true;

const tryMove = (i, j, state) => {
  if(!isTurn) {
    console.log('Não é seu turno')
    return;
  }
  if(state > 0) {
    console.log("Jogada invalida");
    return;
  }
  //Send move to server
  makeMove(i, j);
};

let currentState = computed(() => {
  return state;
});

</script>

<template>
  {{ currentState }}
  <div class="page">
    <div>
      <table class="board">
        <tbody>
          <tr v-for="(row, i) in currentState.gameState" :key="i" class="board-row">
            <td v-for="(state, j) in row" :key="j" class="board-item">
              <GameMove :state="state"
                @click="tryMove(i, j, state)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page{
  display: flex;
  flex-direction: column;
  align-items: center;
}
table.board{
  width: 600px;
  height: 600px;
  background-color: white;
  background: #333;
  tbody{
    background-color: white;
    tr.board-row{
      width: 100%;
      height: 33%;
      td.board-item{
        width: 190px;
        height: 190px;
        border: 3px solid #333;
      }
    }
  }
}


</style>