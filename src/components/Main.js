import { useEffect, useState } from "react"
import NewsCard from "./NewsCard"

export default function Main() {

    const [news, setNew] = useState([])

    const getNews = async() =>{
        const response = await fetch('https://newsapi.org/v2/everything?q=sons-of-the-forest&apiKey=a952366fbfc543b49eb3c655c545cc90')
        const data = await response.json()
        console.log(data)
        setNews(data.articles)
    }
    console.log(news)

    useEffect(() =>{
        getNews()
    },[])

    return (
        <>
            <h2>Her kommer Main</h2>
            {news.map((item, index) =>(
                <NewsCard key={index} img={item.urlToImage} title={item.title} ingress={item.description} />
            ))}
        </>
    )
}