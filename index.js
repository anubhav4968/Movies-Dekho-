function submit()
{
    let movie_name=document.getElementById("search").value
    // console.log(movie_name)
    const url=`https://www.omdbapi.com/?apikey=6e713f50&t=${movie_name}`
    fetch(url)
    .then(function(res){
       return res.json();
    })
    .then(function(res){
        if(res.Response!="False")
        {
            // console.log("in")
            console.log(res)
            append(res)
        }
        else
        {
            error()
        }
        // console.log(res)
    })
    .catch(function(Error){
        console.log(Error,"err")
    })
}
let movie=document.getElementById("movies")
function append(ele)
{
    // if(ele.Responsse=="False")
    // {
    //     console.log("in")
    // }
    movie.innerHTML=null
    let box=document.createElement("div")
    box.setAttribute("id","box")
    let image=document.createElement("img")
    image.src=ele.Poster
    
    let div=document.createElement("div")
    div.setAttribute("id","div")
    let name=document.createElement("p")
   name.innerText=`Movie: ${ele.Title}.`
   
    let actor=document.createElement("p")
    actor.innerText=`Actors: ${ele.Actors}.`
 
    let dire=document.createElement("p")
    dire.innerText=`Director: ${ele.Director}.`

    let gen=document.createElement("p")
    gen.innerText=ele.Genre;

    let lang=document.createElement("p")
    lang.innerText=`Language: ${ele.Language}.`;

    let rate=document.createElement("p")
    rate.innerText=`IMDB: ${ele.Ratings[0].Value}.`;

    let DVD=document.createElement("p")
    DVD.innerText=`Release Date: ${ele.Released}.`
     
   div.append(name,actor,dire,DVD,gen,lang,rate)
    box.append(image,div)
    movie.append(box)

    if(Number(ele.imdbRating)>8.5)
  {
      let rec=document.createElement("button")
      rec.innerText="Recommended"
      rec.setAttribute("id","rec")
      div.append(rec,name,actor,dire,DVD,gen,lang,rate)
    
  }
}
function error()
{
    movie.innerHTML=null
    let div=document.createElement("div")
    let image=document.createElement("img")
    image.src="https://media1.giphy.com/media/RWUqVYucDBD4A/giphy.webp?cid=ecf05e47ngv0lq84c3nebo09lqqqex3bk8p00c7vwxw32oin&rid=giphy.webp&ct=g"
    image.setAttribute("id","imag")

    let err=document.createElement("h2")
    err.setAttribute("id","err")
    err.innerText="Bhaiya Dyan Se Typr Kro Error H !!!!!!!"
    div.append(image,err)
    movie.append(div)
}