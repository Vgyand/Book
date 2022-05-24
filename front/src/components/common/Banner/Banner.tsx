import { Carousel } from 'react-responsive-carousel';
import banner from '../../../assets/images/Banner/Banner.svg'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import style from './Banner.module.scss';
import emotion1 from '../../../assets/images/Banner/emotions/image 6.svg'
import emotion2 from '../../../assets/images/Banner/emotions/image 7.svg'
import emotion3 from '../../../assets/images/Banner/emotions/image 8.svg'
import emotion4 from '../../../assets/images/Banner/emotions/image 9.svg'
import emotion5 from '../../../assets/images/Banner/emotions/image 10.svg'
import emotion6 from '../../../assets/images/Banner/emotions/image 11.svg'

const Banner = () => {
    return (
        <div className={style.banner}>
            <div className="container">
                <div className="row">
                    <div className={`${style.banner__content} col-md-7`}>
                        <Carousel>
                            <div>
                                <img src={banner} alt="banner" />
                            </div>
                            <div>
                                <img src={banner} alt="banner" />
                            </div>
                            <div>
                                <img src={banner} alt="banner" />
                            </div>
                        </Carousel>
                    </div>
                    <div className={`${style.banner__bestBooks} col-md-3`}>
                        <div className={style.banner__bestBooks_wrapper}>
                            <div className={style.banner__bestBooks_title}>Best of all time</div>
                            <ul className={style.banner__bestBooks_content}>
                                <li>In Search of Lost Time by Marcel Proust</li>
                                <li>In Search of Lost Time by Marcel Proust</li>
                                <li>In Search of Lost Time by Marcel Proust</li>
                                <li>In Search of Lost Time by Marcel Proust</li>
                                <li>In Search of Lost Time by Marcel Proust</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${style.banner__mood} col-md-2`}>
                        <h2 className={style.banner__mood_title}>Choose you book by your mood</h2>
                        <div className={style.banner__mood_emotion}>
                            <img src={emotion1} alt="" />
                            <img src={emotion2} alt="" />
                            <img src={emotion3} alt="" />
                            <img src={emotion4} alt="" />
                            <img src={emotion5} alt="" />
                            <img src={emotion6} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Banner