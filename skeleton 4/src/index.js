const View = require('./ttt-view.js')
const Game = require('../ttt_node/game.js')

document.addEventListener("DOMContentLoaded", () => {
  let game = new Game();
  let el = document.querySelector(".ttt")
  let view = new View(game, el)

  view.setupBoard()
  view.bindEvents()


});
