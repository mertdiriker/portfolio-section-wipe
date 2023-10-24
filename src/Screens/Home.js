import { Controller, Scene } from 'react-scrollmagic';
import sistemreklamcilik from "../assets/images/sistemreklamcilik.gif"
import sistemled from "../assets/images/sistemled.gif"
import sistemyapi from "../assets/images/sistemyapi.gif"
import sistemraf from "../assets/images/sistemraf.gif"
import bambugames from "../assets/images/bambugames.png"
import gaminvest from "../assets/images/gaminvest.png"

const Home = () => {
    return (
        <div className="home">
            <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
                <Scene pin>
                    <div className="panel blue">
                        <h1>Hi, I'm Mert Diriker.</h1>
                    </div>
                </Scene>
                <Scene pin>
                    <div className="panel turqoise">
                        <div className='container'>
                                <br></br>
                                <br></br>
                            <h1><b>I'm a Full-Stack Developer.</b></h1>
                                <br></br>
                                <br></br>
                            <h2>I'm a passionate web and mobile app developer with 3 years of experience in designing and developing user-friendly websites,
                                 mobile apps, and web applications. I specialize in creating responsive and intuitive interfaces that provide a seamless user experience.</h2>
                            <h2>
                            <br></br>
                            <h1>Technologies</h1>
                            - Front-end development: HTML,CSS,JavaScript,React,Electron
                            <br></br>
                            - Back-end development: Node.js,PHP
                            <br></br>
                            - Mobile app development: React Native
                            <br></br>
                            - Database management: MongoDB, MySQL
                            <br></br>
                            </h2>
                        </div>
                    </div>
                </Scene>
                <Scene pin>
                    <div className="panel green">
                        <div className='container d-flex justify-content-center'>
                            <div className='row w-100 d-flex justify-content-center'>
                                <div className='col-12 d-flex justify-content-center flex-column'>
                                    <h1 className='mb-xl-5 mt-xl-3 mb-0 mt-0'>My Works</h1>
                                </div>
                                <div className='col-lg-6 col-12 d-flex justify-content-center'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <h3 className='card-title'>Sistem Reklamcılık</h3>
                                            <a target='_blank' href='https://www.sistemreklamcilik.com'>
                                                <img src={sistemreklamcilik}></img>
                                            </a>
                                            <p className='card-text'>
                                                The website now boasts a sleek, modern design that is both visually appealing and user-friendly.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-12 d-flex justify-content-center'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <h3 className='card-title'>Sistem Led</h3>
                                            <a target='_blank' href='https://www.sistem-led.com'>
                                                <img src={sistemled}></img>
                                            </a>
                                            <p className='card-text'>
                                            The color scheme and typography were chosen to align with SistemLed's branding, creating a cohesive look and feel.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Scene>
                <Scene pin>
                    <div className="panel green">
                        <div className='container d-flex justify-content-center'>
                            <div className='row w-100 d-flex justify-content-center'>
                                <div className='col-lg-6 col-12 d-flex justify-content-center'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <h3 className='card-title'>Sistem İnşaat</h3>
                                            <a target='_blank' href='https://www.sistem-yapi.com'>
                                                <img src={sistemyapi}></img>
                                            </a>
                                            <p className='card-text'>
                                            Custom graphics and visuals were used to reinforce the brand's identity.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-12 d-flex justify-content-center'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <h3 className='card-title'>Sistem Raf</h3>
                                            <a target='_blank' href='https://www.sistem-raf.com'>
                                                <img src={sistemyapi}></img>
                                            </a>
                                            <p className='card-text'>
                                                I incorporated a responsive design to ensure optimal performance on all devices.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Scene>
                <Scene pin>
                <div className="panel green">
                        <div className='container d-flex justify-content-center'>
                            <div className='row w-100 d-flex justify-content-center'>
                                <div className='col-lg-6 col-12 d-flex justify-content-center'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <h3 className='card-title'>BambuGames</h3>
                                            <a target='_blank' href='https://bambugames.com.tr'>
                                                <img src={bambugames}></img>
                                            </a>
                                            <p className='card-text'>
                                                I had the privilege of collaborating with Bambu Games to design and develop a cutting-edge game table interface,along with a mobile app, enhancing their gaming experience.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-12 d-flex justify-content-center'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <h3 className='card-title'>GameInvest</h3>
                                            <a target='_blank' href='https://gaminvest.io'>
                                                <img src={gaminvest}></img>
                                            </a>
                                            <p className='card-text'>
                                            In the ever-evolving world of gaming, I had the opportunity to create a dynamic and innovative "Play2Earn" website that redefines the way gamers interact with their favorite titles while reaping rewards.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Scene>
                <Scene pin>
                <div className="panel green">
                        <div className='container d-flex justify-content-center'>
                            <div className='row w-100 d-flex justify-content-center'>
                                <div className='col-12 d-flex justify-content-center flex-column'>
                                    <br></br>
                                    <br></br>
                                    <h1>Contact</h1>
                                    <br></br>
                                    <br></br>
                                </div>
                                <div className='col-lg-6 col-12 d-flex'>
                                    <div className='card'>
                                    I'm always excited to collaborate on new projects and contribute to the success of businesses through innovative and high-quality web and mobile app development.
                                        <div className='card-body d-flex align-items-start flex-column'>
                                            <li>Email: <a href='mailto:mertdiriker.98@gmail.com'>mertdiriker.98@gmail.com</a></li>
                                            <li>Phone: <a href='tel:+905315925207'>+90 531 592 52 07</a></li>
                                            <li>Github: <a href='https://github.com/mertdiriker'>mertdiriker</a></li>
                                            <li>Linkedin: <a href='https://www.linkedin.com/in/mertdiriker'>mertdiriker</a></li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Scene>
            </Controller>
        </div>
    )
}

export default Home;