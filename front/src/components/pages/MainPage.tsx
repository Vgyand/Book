import Banner from '../common/Banner/Banner';
import Header from '../common/Header/Header';
import List from '../common/List/List';
import imgUrl from '../../assets/images/BookCard/PlaceBook.svg'
import News from '../common/News/News';

const MainPage = () => {
    return (
        <>
            <Header />
            <Banner />
            <List title="Popular" imgUrl={imgUrl} name="BookName" author="AuthorName" />
            <List title="New" imgUrl={imgUrl} name="BookName" author="AuthorName" />
            <News />
        </>
    )
}

export default MainPage
