import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'
import Filter from '../components/Filter'

class BotCollection extends React.Component {
  //your code here
  constructor(props) {
    super(props)
    this.state = {
      showBot: null
    }
  }

  componentDidMount() {
    this.setState({bots: this.props.allBots})
  }

  addShowBot = (bot) => {
    this.setState({showBot: bot})
  }

  removeShowBot = () => {
    this.setState({showBot: null})
  }

  whichRender() {
    if (this.state.showBot) {
      return(<BotSpecs
        bot={this.state.showBot}
        removeShowBot={this.removeShowBot}
        addBot={() => this.props.addBot(this.state.showBot)}
      />)
    } else {
      return (this.props.bots.map(bot =>
        <BotCard bot={bot} showRemoveBot={() => this.addShowBot(bot)}/>))
    }
  }

  render(){

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.state.showBot ? null : <Filter changeFilter={this.props.changeFilter}/>}
          {this.whichRender()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
