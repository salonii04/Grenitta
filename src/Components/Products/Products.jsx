import React from 'react'
import './Products.css'

import wowgut from '../../assets/wowgut.png'
import abelcox90 from '../../assets/abelcox90.png'
import abelcoxP from '../../assets/abelcoxP.png'
import albenor from '../../assets/albenor.png'
import savbone from '../../assets/savbone.png'
import savboned360K from '../../assets/savboned360K.png'
import wowgutd40 from '../../assets/wowgutd40.png'
import wowgutl from '../../assets/wowgutl.png'
import wowgutl25 from '../../assets/wowgutl25.png'
import bottle from '../../assets/bottle.png'
import capsule from '../../assets/capsule.png'
import tablet from '../../assets/tablet.png'


const Products = () => {
  return (
    <div className="productss">
    <div className='products'>
      <div className="product">
        <img src={wowgut} alt="" />
        <div className="caption">
          <img src={bottle} alt="" />
          <p>WOWGUT</p>
        </div>
      </div>
      <div className="product">
        <img src={abelcox90} alt="" />
        <div className="caption">
          <img src={tablet} alt="" />
          <p>ABELCOX-90</p>
        </div>
      </div> 
      <div className="product">
        <img src={abelcoxP} alt="" />
        <div className="caption">
          <img src={tablet} alt="" />
          <p>ABELCOX-P</p>
        </div>
      </div> 
      <div className="product">
        <img src={albenor} alt="" />
        <div className="caption">
          <img src={tablet} alt="" />
          <p>ALBENOR-P</p>
        </div>
      </div>
      <div className="product">
        <img src={savbone} alt="" />
        <div className="caption">
          <img src={capsule} alt="" />
          <p>SAVBONE</p>
        </div>
      </div>
    </div>
    <div className='products'>
      <div className="product">
        <img src={savboned360K} alt="" />
        <div className="caption">
          <img src={capsule} alt="" />
          <p>SAVBONE-D3 60K</p>
        </div>
      </div>
      <div className="product">
        <img src={wowgutd40} alt="" />
        <div className="caption">
          <img src={capsule} alt="" />
          <p>WOWGUT-D 40</p>
        </div>
      </div>
      <div className="product">
        <img src={wowgutl} alt="" />
        <div className="caption">
          <img src={tablet} alt="" />
          <p>WOWGUT-L</p>
        </div>
      </div>
      <div className="product">
        <img src={wowgutl25} alt="" />
        <div className="caption">
          <img src={tablet} alt="" />
          <p>WOWGUT-L 25</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Products