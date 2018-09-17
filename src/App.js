import React, { Component } from 'react';
import Layout from './components/Layout';
import Grid from './components/Main/Grid';
import Aux from './hoc/Auxilliary';
import Modal from './components/Modal/Modal';
import Streamer from './components/Streamer/Streamer';

class App extends Component {
  state = {
    data: [],
    isLoading: false,
    showModal: false,
    streamerInfo: []
  }

  componentDidMount(){
    this.requestStreams();
  }

  requestStreams = () => {
    const url = `https://api.twitch.tv/kraken/streams/featured?limit=12`;
    const options = {
      method: 'GET',
      headers: {
        'Client-ID': 'mnjxuz1js2d8ix4azjyvpa656pi5w9'
      }
    };
    this.setState({isLoading: true})
    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data.featured,
          isLoading: false
        });
      })
      .catch(err => {
        console.error(err);
      })
  };

  showModalHandler = (streamerId) => {
    const options = {
      method: 'GET',
      headers: {
        'Client-ID': 'mnjxuz1js2d8ix4azjyvpa656pi5w9'
      }
    };
    fetch(`https://api.twitch.tv/kraken/channels/${streamerId}`, options)
      .then(res => res.json())
      .then(data => {
        this.setState({
          streamerInfo: data,
          showModal: true
        });
      })
      .catch(err => {
        console.error(err);
      })
  };

  hideModalHandler = () => {
    this.setState({showModal: false});
  };

  render() {
    return (
      <Aux>
        <Modal showModal={this.state.showModal}
                hideModalHandler={this.hideModalHandler}>
          <Streamer streamerInfo={this.state.streamerInfo} 
                    hideModalHandler={this.hideModalHandler}/>
        </Modal>
        <Layout>
          <Grid streams={this.state.data}
                isLoading={this.state.isLoading}
                showModalHandler={this.showModalHandler}/>
        </Layout>
      </Aux>
    );
  }
}

export default App;
