import io from 'automattic/socket.io-client/socket.io';

export default class MoviesSocketAPI {

  constructor() {
    this.init();
  }

  init() {
    let socket = io();

    socket.on('connect', () => {
      console.log('socket is wired up on client')
    })
  }

}
