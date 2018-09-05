import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super()
    this.state = {
      allBots: [],
      botArmy: [],
      filter: "No Filter",
      filteredBots: []
    }
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(r => r.json())
      .then(allBots => this.setState({allBots, filteredBots: allBots}))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filter !== this.state.filter) {
      if (this.state.filter != "No Filter") {
        let filteredBots = this.state.allBots.filter(bot => bot.bot_class === this.state.filter)
        this.setState({filteredBots})
      } else {
        this.setState({filteredBots: this.props.allBots})
      }
    }
  }

  addToBotArmy = (bot) => {
    if (this.state.botArmy.includes(bot) === false) {
      this.setState({botArmy: [...this.state.botArmy, bot]})
    } else {
      alert("You already have that bot in your army!")
    }
  }

  removeFromBotArmy = (bot) => {
    let newArmy = this.state.botArmy.filter(b => b.id !== bot.id)
    this.setState({botArmy: newArmy})
  }

  changeFilter = (e) => {
    e.preventDefault()
    e.persist()
    let type = e.target.querySelector('#botType').value
    this.setState({filter: type})
  }

  render() {
    return (
      <div>
        <YourBotArmy
          botArmy={this.state.botArmy}
          removeBot={this.removeFromBotArmy}/>
        <BotCollection
          bots={this.state.filteredBots}
          addBot={this.addToBotArmy}
          changeFilter={this.changeFilter}
        />
      </div>
    );
  }

}

export default BotsPage;
