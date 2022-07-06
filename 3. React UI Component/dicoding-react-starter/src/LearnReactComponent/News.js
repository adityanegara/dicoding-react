import someNews from './somenews_constant';
import Header from './Header';
import Card from './Card';
const News = () =>{
    const renderCards = (someNews) =>{
        return someNews.map((news) =>(
            <Card {...news} key={news.title} />
        ))
    }
    return(
        <div>
        <Header title="Latest News" subtitle="Covering March & April 2022" />
        {renderCards(someNews)}
      </div>
    )
}

export default News;