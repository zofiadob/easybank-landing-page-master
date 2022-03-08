import React from 'react'
import currency from './images/image-currency.jpg'
import restaurant from './images/image-restaurant.jpg'
import plane from './images/image-plane.jpg'
import confetti from './images/image-confetti.jpg'
import './css/Article.css'

export default function Article() {

    const articlesList = [
        {
          imgSrc: currency,
          author: 'Claire Robinson',
          headerText: "Receive money in any currency with no fees",
          descText:
            "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
        },
    
        {
          imgSrc: restaurant,
          author: 'Wilson Hutton',
          headerText: "Treat yourself without worrying about money",
          descText:
            "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
        },
    
        {
          imgSrc: plane,
          author: 'Wilson Hutton',
          headerText: "Take your Easybank card wherever you go",
          descText:
            "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
        },
    
        {
          imgSrc: confetti,
          author: 'Claire Robinson',
          headerText: "Our invite-only Beta accounts are now live!",
          descText:
            "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
        }
      ];

  return (
      <>
    {articlesList.map(arc => {
        return <section className='article'>
            <div className='img-box'>
            <img src={arc.imgSrc} alt={arc.headerText}/>
            </div>
            <div className='article-text-box'>
                <p className='author'>By {arc.author}</p>
                <h3>{arc.headerText}</h3>
                <p className='small-text'>{arc.descText}</p>
            </div>
        </section>
    })}
    </>
  )
}
