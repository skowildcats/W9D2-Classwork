class View {
  constructor(game, el) {
    this.game = game
    this.el = el
    
  }

  

  setupBoard() {
    let ul = document.createElement("ul")
    // debugger
    this.el.appendChild(ul)
    for (let i = 0; i < 9; i++) {
      let li = document.createElement("li")
      li.setAttribute('data-ttt-type', i)
      ul.appendChild(li)
    }
  }
  
  bindEvents() {
    addEventListener('click', this.handleClick.bind(this));
    
  }


  handleClick(e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("done", true);
      let tmp = e.target
      let txt = document.createTextNode(`${this.game.currentPlayer}`)
      tmp.appendChild(txt)
      let tttData = Number(tmp.dataset.tttType)
      this.game.playMove([Math.floor(tttData / 3), tttData % 3])
      this.checkWin()
    }
  }

  checkWin() {
    if (this.game.isOver()) {
      let winMessage = document.createTextNode("You Win!!!!!!")
      this.el.appendChild(winMessage)
    }
  }

}


module.exports = View;
