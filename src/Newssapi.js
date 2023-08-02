import React, { useState,useEffect } from 'react'
import axios from 'axios'
const Newssapi = () => {
    const [articles,setArticles]=useState([])
    const myStyle={
        // backgroundImage:url({wed}),
       marginLeft:'300px',marginRight:'300px',marginTop:'30px'
   }
    const getNews =async()=>{
        await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-07-02&sortBy=publishedAt&apiKey=a15c03bf65214451b04a52a9527dadc1').then((res)=>{
              console.log(res.data)
              setArticles(res.data.articles)
          }).catch((err)=>{console.log('error',err)})
      }
    useEffect(()=>{
        getNews()
    },[])
  return (
    <div style={myStyle}>
        <center><h1 style={{fontSize:'50px',color:'red',marginBottom:'20px'}}><marquee>NEWS API</marquee></h1></center>
      <div className='card' style={{boxShadow:'3px 2px 3px 3px pink',width:'700px'}}>
        <center><div className='card-title' style={{marginTop:'10px',color:'black'}}><h1>TODAYS NEWS</h1></div></center>
        <div className='card-body'>
            {
                articles.map(article=>{
                    return(
                        <div class='card'style={{marinTop:'20px',marginBottom:'20px',boxShadow:'3px 2px 3px 3px grey'}}>
                             {/* <div  style={{marinTop:'20px'}}></div> */}
                        <div className='card-image'>
                       <center> <img src={article.urlToImage} style={{width:'300px',height:'300px'}} alt='p'/></center>
                        </div>
                        <div className='card-title'><h2><a href={article.url} style={{color:'blue'}}>{article.title}</a></h2>
                            </div>
                            <div className='card-body'>{article.description}
                        </div>
                       
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Newssapi
//https://newsapi.org/v2/everything?q=tesla&from=2023-06-30&sortBy=publishedAt&apiKey=a15c03bf65214451b04a52a9527dadc1
