import NewsItem from "./Newsitem"
import sampleNews from "/Aryaan Vedak/Scrimba/newznow/samplenews.json"

import React, { Component } from 'react'

export class News extends Component {

  articles = [
    {
        "source": {
            "id": "lequipe",
            "name": "L'equipe"
        },
        "author": "L'EQUIPE",
        "title": "Programme TV foot : à quelle heure et sur quelle chaîne voir les matchs de ce soir (18 mars 2023) ?",
        "description": "Retrouvez l'intégralité des retransmissions des matches de football du jour retransmis sur toutes les chaînes du bouquet TNT, Câble et Satellite. Ligue 1, Ligue 2, Premier League, coupes d'Europe... Suivez tous les matches en direct sur votre télévision ou en…",
        "url": "https://www.lequipe.fr/Football/Actualites/Programme-tv-foot-a-quelle-heure-et-sur-quelle-chaine-voir-les-matchs-de-ce-soir-18-mars-2023/1386581",
        "urlToImage": "https://medias.lequipe.fr/img-photo-jpg/-/1500000001560314/0:0,2496:1664-640-427-75/0de70.jpg",
        "publishedAt": "2023-03-18T06:15:14+00:00",
        "content": "Premier League : 28e journée \r\n- Southampton - Tottenham : à 16 heures en direct sur Canal+ Foot - Aston Villa - Bournemouth : à 16 heures en direct sur Canal + Multisports 1 - Brentford - Leicester … [+178 chars]"
    },
    {
        "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
        },
        "author": "Hafsa Adil",
        "title": "Karachi United: Giving hope to footballers in impoverished areas",
        "description": "Most of KU’s community centres operate out of low-income areas of Karachi.",
        "url": "http://www.aljazeera.com/sports/2023/3/18/giving-hope-footballers-in-impoverished-areas",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/03/SOR07954-standard.jpg?resize=1920%2C1440",
        "publishedAt": "2023-03-18T05:33:50Z",
        "content": "Doha, Qatar Karachi Uniteds footballer Sanjar Qadir gets a pass from his captain and races towards the goal with the ball.\r\nIt is the dying moments of the match. The score is tied 0-0. If Qadir score… [+8366 chars]"
    },
    {
        "source": {
            "id": "bbc-sport",
            "name": "BBC Sport"
        },
        "author": null,
        "title": "Leiva retires aged 36 because of heart condition",
        "description": "Former Brazil and Liverpool midfielder Lucas Leiva announces his immediate retirement from football because of a heart condition.",
        "url": "http://www.bbc.co.uk/sport/football/64996779",
        "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/170E0/production/_129023449_leivanindex2_getty.jpg",
        "publishedAt": "2023-03-17T23:07:19.1631905Z",
        "content": "Lucas Leiva was presented an award by Kenny Dalglish at Anfield for his 10 years of service in May 2017\r\nFormer Liverpool player Lucas Leiva has announced his retirement from football, aged 36, becau… [+1261 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
        "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
        "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
        "publishedAt": "2020-04-27T07:20:43Z",
        "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
    }
  ]
  constructor(){
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {

    return (
      <div className="container my-3">
            <h2>Top Headlines</h2>
            
            <div className="row">
              {this.state.articles.map((item)=>{
                return <div className="col-md-3">
                    <NewsItem
                      key={item.url}
                      className="news"
                      title={item.title.slice(0,70)}
                      description={item.description.slice(0,120)}
                      imageUrl={item.urlToImage}
                    />
                  </div>
              })}
            </div>
        </div>
    )
  }
}

export default News