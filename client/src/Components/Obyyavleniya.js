import React from "react"
import '../index.css'
import img1 from './static/123.jpg'
import img2 from './static/756281458904605.jpg'
import img3 from './static/1234.jpg'
import { Search } from "./Search"
import { Sidebar } from "./Sidebar"
//import { useState } from "react"

export const Obyavleniya = (() => {

  const posts = [

    {
      id: 1,
      title: '2-х комнатная квартира',
      comment: "Ул.Пушкина дом 61",
      img: img1
    },
    {
      id: 2,
      title: '2-х комнатная квартира ',
      comment: "Ул. университетская 33",
      img: img2
    }, {
      id: 3,
      title: '3х комнатная квартира',
      comment: "Юмашева 22",
      img: img3
    }, {
      id: 1,
      title: '2-х комнатная квартира',
      comment: "Ул.Пушкина дом 61",
      img: img1
    },
    {
      id: 2,
      title: '2-х комнатная квартира ',
      comment: "Ул. университетская 33",
      img: img2
    }, {
      id: 3,
      title: '3х комнатная квартира',
      comment: "Юмашева 22",
      img: img3
    }

  ]



  const Posts = posts.map((item) => {

    return (<div className="obyav">
      <div key={item.id} >
        <div class="col m6 s6">
          <div class="card">
            <div class="card-image">
              <img src={item.img} alt="description" />
              <span class="card-title">{item.title}</span>
            </div>
            <div class="card-content">
              <p>{item.comment}</p>
            </div>
            <div class="card-action">

              <a>Подробнее</a>
              <div>
                <br />
                <a class="waves-effect red accent-2 btn">Like</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)

  })

  return (

    <div>
      
      <Search />
      
      <br />
      {Posts}

    </div>








  )
})