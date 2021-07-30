


films.forEach((x) => {
    let newimg = document.createElement('img')
    let newli = document.createElement('li')
    let newh = document.createElement('h2')
    let newh3 = document.createElement('h3')
    let newdate = document.createElement('time')
    let newh5 = document.createElement('h5')
    let newh6 = document.createElement('h6')
    let elInput = document.getElementById('input')
    console.log(elInput)
   let date = new Date(x.release_date)
let year = date.getFullYear()
let month = String(date.getMonth()).padStart(2, "0")
let Day = date.getDate()
let full = `${year}.${month}.${Day}`
newli.setAttribute('class', 'item')
newli.appendChild(newimg)
newimg.setAttribute('src', x.poster)
newli.appendChild(newh)
newh.textContent = x.title
newli.appendChild(newh3)
newli.appendChild(newh5)
newh5.textContent = `id:${x.id}`
newli.appendChild(newdate)
newdate.textContent = full
newli.appendChild(newh6)
newh6.textContent = x.overview
newh3.textContent = x.genres


list.appendChild(newli)


})