import React from 'react'
import './Hero.css'
import MyImage from '/home/rguktongole/first-app/src/img/naga.png';
const Hero=()=>{
    return(
        <section className="hero-container">
            <div className='hero-content'>
                <h2>Building Digital Experience That Inspire</h2>
                <p>
                    nagalakshmi is a good girl passionate on front end developer
                    into seamless and visually stunning web solutions
                </p>
                </div>
                  <div className='hero-img'>
                      <div>
                          <div className='tech-icon'>
                              <img src="https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png" alt="" width={100} height={100}/>
                          </div>
                          <img src="https://www.wikihow.com/images/thumb/f/ff/Draw-a-Cute-Cartoon-Person-Step-14.jpg/v4-460px-Draw-a-Cute-Cartoon-Person-Step-14.jpg" alt="" height={300}/>
                        </div>
                        <div>
                            <div className='tech-icon'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9PZ1nFY2UKBVIS6zcjAdD27PkwK5Be17LiMrftCWGEQ&s" alt="" width={100} height={100}/>
                            </div>
                            <div className='tech-icon'>
                                <img src="https://icons.iconarchive.com/icons/martz90/hex/512/css-3-icon.png" alt="" width={100} height={100}/>
                            </div>
                            <div className='tech-icon'>
                                <img src="https://logowik.com/content/uploads/images/javascript.jpg" alt="" width={100} height={100}/>
                            </div>
                        </div>
                    </div>
        </section>
    );
}
export default Hero