import React from 'react'
import BookCard from './BookCard/BookCard'
import style from './Popular.module.scss'
import imgUrl from '../../../assets/images/BookCard/PlaceBook.svg'

const Popular = () => {
    return (
        <div className="container">
            <h2 className={style.popular__title}>Popular</h2>
            <div className={`${style.popular__list} row`}>
                <BookCard imgUrl={imgUrl} name="Book name" author="Author name" />
                <BookCard imgUrl={imgUrl} name="Book name" author="Author name" />
                <BookCard imgUrl={imgUrl} name="Book name" author="Author name" />
                <BookCard imgUrl={imgUrl} name="Book name" author="Author name" />
                <BookCard imgUrl={imgUrl} name="Book name" author="Author name" />
                <BookCard imgUrl={imgUrl} name="Book name" author="Author name" />
            </div>
        </div>
    )
}

export default Popular