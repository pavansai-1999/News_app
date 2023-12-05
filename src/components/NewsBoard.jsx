import { useEffect, useState } from "react"
import NewsItem from "./NewsItem"


const NewsBoard = ({category,SetCategory}) => {
  const [articledata, setArticaldata] = useState([])


  useEffect(() => { getNewsData() }, [category])
  const getNewsData = async () => {
    
    //let url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=89e8b8ce979d4c87a3c473230ef72d74"
    let url_headlines=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=89e8b8ce979d4c87a3c473230ef72d74`
    let res = await fetch(url_headlines)
    let actualdata = await res.json()
    setArticaldata(actualdata.articles)
    //console.log(actualdata.articles)
  }

  return (
    <>

      <h2 className="text-center">LATEST <span className="badge text-bg-danger">NEWS</span></h2>

      {
        articledata.map((n, id) => {
          return <NewsItem title={n.title} description={n.description} urlToImage={n.urlToImage} url={n.url} key={id}/>
        })
      }
    </>
  )
}

export default NewsBoard