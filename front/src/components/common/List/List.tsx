import { FC } from 'react'
import BookCard from './BookCard/BookCard'
import style from './List.module.scss'

type ListType = {
    title: string,
    imgUrl: string,
    name: string,
    author: string
}

const List: FC<ListType> = ({
    title, imgUrl, name, author
}) => {
    return (
        <div className="container">
            <h2 className={style.popular__title}>{title}</h2>
            <div className={`${style.popular__list} row`}>
                <BookCard imgUrl={imgUrl} name={name} author={author} />
                <BookCard imgUrl={imgUrl} name={name} author={author} />
                <BookCard imgUrl={imgUrl} name={name} author={author} />
                <BookCard imgUrl={imgUrl} name={name} author={author} />
                <BookCard imgUrl={imgUrl} name={name} author={author} />
                <BookCard imgUrl={imgUrl} name={name} author={author} />
            </div>
        </div>
    )
}

export default List