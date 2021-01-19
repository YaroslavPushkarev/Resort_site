import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"
import Title from './Title'

export default class Services extends Component {
  state={
    services:[
      {
        icon:<FaCocktail/>,
        title:"free cocktails",
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nulla.'
      },
      {
        icon:<FaHiking/>,
        title:"Free shuttle",
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nulla.'
      },
      {
        icon:<FaShuttleVan/>,
        title:"Strongest Beer",
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nulla.'
      },
      {
        icon:<FaBeer/>,
        title:"free cocktails",
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nulla.'
      }
    ]
  }

  render() {
    return (
      <section className="services">
        <Title title="services"/>
        <div className="services-center">
            {this.state.services.map((item, index)=>{
              return(
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
              )
            })}
        </div>
      </section>
    )
  }
}
