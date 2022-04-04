import { defineStore } from "pinia";
import cell from "../components/NewCell.vue";

export const newBoard = defineStore("main", {
    state: ()=> ({
        // Data?
        board: [
            [".",".","."],
            [".",".","."],
            [".",".","."]
        ],
        currentPlayer: "O"
    })
});