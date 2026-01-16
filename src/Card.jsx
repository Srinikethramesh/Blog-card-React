import React from 'react'
import "./Card.css"
import Inner from './Inner'

export default function card(){
  return (
    <div>
            <div className="card">
              <img src="public/illustration-article.svg" alt="" />
                <Inner />
            </div>
    </div>
  )
}
