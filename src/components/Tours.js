import React from 'react'
import { Title } from './Title'
import { tours } from '../data'

export const Tours = () => {
  return (
    <section class="section" id="tours">
        <Title title='featured' subTitle='tours' />

    <div class="section-center featured-center">
        {tours.map((tour) => {
            const {id, img, date, title, cost, text, location, duration} = tour
            return (
                <article key={id} className='tour-card'>
                    <div className='tour-img-container'>
                        <img src={img} className='tour-img' alt={title} />
                        <p className='tour-date'>{date}</p>
                    </div>
                    <div className='tour-info'>
                        <h4>{title}</h4>
                        <p>{text}</p>
                        <div className='tour-footer'>
                            <p>
                                <span><i className='fas fa-map'></i></span>{location}
                            </p>
                            <p>{duration} days</p>
                            <p>from ${cost}</p>
                        </div>
                    </div>
                </article>
            )
        })}
    </div>
  </section>
  )
}
