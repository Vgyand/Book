import style from './Banner.module.scss';
import banner from '../../../assets/images/Banner/Banner.svg'

const Banner = () => {
    return (
        <div className={style.banner}>
            <div className="container">
                <div className="row">
                    <div className={`${style.banner__content} col-md-6`}>
                        <img src={banner} alt="banner" />
                    </div>
                    <div className={`${style.banner__bestBooks} col-md-4`}>
                        <div className={style.banner__bestBooks_wrapper}>
                            <div className={style.banner__bestBooks_title}>Best of all time</div>
                            <ul>
                                <li>In Search of Lost Time by Marcel Proust</li>
                                <li>In Search of Lost Time by Marcel Proust</li>
                                <li>In Search of Lost Time by Marcel Proust</li>
                                <li>In Search of Lost Time by Marcel Proust</li>
                                <li>In Search of Lost Time by Marcel Proust</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${style.banner__mood} col-md-2`}>
                        mood
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Banner