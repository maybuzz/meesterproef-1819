const express   = require('express')
const puppeteer = require('puppeteer')
const router    = express.Router()
const {getDataWithToken} = require('./helper')
const {getData} = require('./helper')
const {filterOutChar} = require('./helper')
const {replaceSpace} = require('./helper')
const {replaceSpacePlus} = require('./helper')
const {onlyUnique} = require('./helper')

router.get('/', login)
router.get('/home', index)
router.get('/search', search)
router.post('/search', searchArtist)
router.get('/artist/:id', getArtist)
router.get('/profile', profile)
router.get('/offline', offline)
router.get('/*', error)

function login(req,res){
  res.render('login')
}

function index(req,res){
  const data = []
  res.render('main', {data})
}

function search(req, res) {
  const data = []
  res.render('index', {data})
}

function profile(req, res) {
  const data = []
  res.render('profile', {data})
}

async function searchArtist(req, res) {
  let searchVal = req.body.search
  let acces_token = req.session.acces_token

  if (acces_token === undefined ) {
    console.log("oops, session over");
    res.render('login')
  }

  const config = {
            url: `https://api.spotify.com/v1/search?q=${searchVal}&type=artist&limit=5&offset=0`,
            acces_token
        }

  const data = await getDataWithToken(config)

  res.render('index', {
    data: data.artists.items
  })
}

async function getArtist(req, res) {
  let searchVal = req.params.id
  let acces_token = req.session.acces_token
  console.log(acces_token)

  if (acces_token === undefined ) {
    console.log("oops, session over")
    res.render('login')
  }

  const config = {
            url: `https://api.spotify.com/v1/artists/${searchVal}`,
            acces_token
        }

  const config_toptracks = {
            url: `https://api.spotify.com/v1/artists/${searchVal}/top-tracks?limit=4&country=NL`,
            acces_token
        }

  const config_related = {
              url: `https://api.spotify.com/v1/artists/${searchVal}/related-artists`,
              acces_token
        }

  const config_albums = {
              url: `https://api.spotify.com/v1/artists/${searchVal}/albums?include_groups=album`,
              acces_token
        }

  const data = await getDataWithToken(config)
  const tracks = await getDataWithToken(config_toptracks)
  const related = await getDataWithToken(config_related)
  const albums = await getDataWithToken(config_albums)

  if (data === {}) {
    res.render('login')
  }

  const attractions_url = `https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=${filterOutChar(data.name)}&countryCode=NL&apikey=${process.env.TICKETMASTER_CONSUMER_KEY}`
  const attractions = await getData(attractions_url)

  const wiki_url = `https://en.wikipedia.org/api/rest_v1/page/summary/${replaceSpace(data.name)}`
  const wiki_data = await getData(wiki_url)

  const nyt_url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${replaceSpacePlus(data.name)}&fq=source:("The New York Times")&api-key=${process.env.NYTIMES_API_KEY}`
  const nyt_data = await getData(nyt_url)

  // console.log("nyt", nyt_data.response.docs[0])

  res.render('artist', {
    data: data,
    tracks: tracks.tracks,
    related: related,
    albums: albums.items,
    tickets: attractions._embedded.attractions[0],
    wiki: wiki_data.extract,
    nyt: nyt_data.response.docs
    // youtube: urls
  })
}

function offline(req, res){
  res.render('offline')
}

function error(req, res){
  res.render('error')
}

// const filterOUt = attractions._embedded.attractions.filter(item=>item.name.trim().toLowerCase()===data.name.trim().toLowerCase())
// req.session.artist = {
//   name: data.name,
//   youtube: filterOUt[0].externalLinks.youtube[0].url
// }

// const scrape = await scrapeVideos(req.session.artist.youtube)
// const urls =  scrape
//   .filter(onlyUnique)
//   .map(i=>i.split('watch?v=')[1])
// // const url = filterOUt[0].externalLinks.youtube[0].url

//
// router.get('/artist/:id/youtube', async (req,res)=>{
//   const scrape = await scrapeVideos(req.session.artist.youtube)
//   const urls =  scrape
//     .filter(onlyUnique)
//     .map(i=>i.split('watch?v=')[1])
//   res.render('youtube', {urls})
// })
//
//
// async function scrapeVideos(url){
//   const browser = await puppeteer.launch()
//   const page = await browser.newPage()
//   await page.goto(url)
//   const allA = await page.evaluate(()=>{
//     let elements = Array.from(document.querySelectorAll('a'))
//     let links = elements
//       .map(el=>el.href)
//       .filter(el=>el.includes("watch?"))
//       .filter(el=>!el.includes("list"))
//       // .filter(onlyUnique)
//
//     return links
//   })
//   await browser.close()
//   return allA
// }


module.exports = router
