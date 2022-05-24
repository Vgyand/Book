import React from 'react'
import New from './New/New'
import style from './News.module.scss'
import baseNew from '../../../assets/images/News/baseNew.svg'

const News = () => {
    return (
        <div className={style.news}>
            <div className="container">
                <h2 className={style.news__title}>News</h2>
                <div className="row">
                    <New title="New Title" content="Lorem ipsum Lorem ipsumLorem ipsum" imgUrl={baseNew} />
                    <New title="New Title" content="Lorem ipsum Lorem ipsumLorem ipsum" imgUrl={baseNew} />
                    <New title="New Title" content="Lorem ipsum Lorem ipsumLorem ipsum" imgUrl={baseNew} />
                </div>
            </div>
        </div>
    )
}

export default News