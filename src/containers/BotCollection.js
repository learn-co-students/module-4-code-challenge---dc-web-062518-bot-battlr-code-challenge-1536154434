import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {
  //your code here
  constructor() {
    super()
    this.state = {
      showBot: null
    }
  }

  addShowBot = (bot) => {
    this.setState({showBot: bot})
  }

  removeShowBot = () => {
    this.setState({showBot: null})
  }



  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.state.showBot ?
            <BotSpecs
              bot={this.state.showBot}
              removeShowBot={this.removeShowBot}
              addBot={() => this.props.addBot(this.state.showBot)}
            />
          : this.props.allBots.map(bot =>
            <BotCard
              bot={bot}
              showRemoveBot={() => this.addShowBot(bot)}
            /> )
          }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
