import React from "react"
import "./Home.css"
import hero from "../pics/hero.png"
import skill1 from "../pics/skill1.png"
import skill2 from "../pics/skill2.png"
import skill3 from "../pics/skill3.png"
import html from "../pics/html.png"
import css from "../pics/css.png"
import js from "../pics/javascript.png"
import react from "../pics/react.jpg"
import jira from "../pics/jira.png"
import python from "../pics/python.jpg"
import java from "../pics/java.png"
import android from "../pics/android.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Yeshwanth</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Professional Coder.", " Versatile Developer.", "Creative Designer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
                <button className='btn_shadow'>
                    <img src={jira} alt='' />
                </button>
                <button className='btn_shadow'>
                    <img src={python} alt='' />
                </button>
                <button className='btn_shadow'>
                    <img src={react} alt='' />
                </button>
                <button className='btn_shadow'>
                    <img src={java} alt='' />
                </button>
                <button className='btn_shadow'>
                    <img src={html} alt='' />
                </button>
                <button className='btn_shadow'>
                    <img src={css} alt='' />
                </button>
                <button className='btn_shadow'>
                    <img src={js} alt='' />
                </button>
                <button className='btn_shadow'>
                    <img src={android} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home