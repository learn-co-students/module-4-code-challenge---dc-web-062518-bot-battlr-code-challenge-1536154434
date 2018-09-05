import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super()
    this.state = {
      allBots: [],
      botArmy: []
    }
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(r => r.json())
      .then(allBots => this.setState({allBots}))
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

  render() {
    return (
      <div>
        <YourBotArmy
          botArmy={this.state.botArmy}
          removeBot={this.removeFromBotArmy}/>
        <BotCollection
          allBots={this.state.allBots}
          addBot={this.addToBotArmy}
        />
      </div>
    );
  }

}

export default BotsPage;
