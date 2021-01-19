import React, { Component } from 'react'
import {RoomContext} from "../context";

export default class Featured extends Component {
  static contextType = RoomContext

  render() {
      return (
      <div>
        featured 
      </div>
    )
  }
}
