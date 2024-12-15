import { catsData } from '/data.js'

const emotionRadios = document.getElementById("emotion-radios")
const getImageBtn = document.getElementById("get-image-btn")

function getEmotionsArray(cats) {
    let emotionsArray = []
    for (let cat of cats) {
        for (let emotion of cat.emotionTags) {
            if (!emotionsArray.includes(emotion)) {
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}

getImageBtn.addEventListener("click", function () {
    console.log(getEmotionsArray(catsData))
})

function renderEmotionRadios(cats) {
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions) {
        radioItems += `
        <div  class="radio">
            <label for="radio">${emotion}</label>
            <input 
            type="radio"
            id=${emotion}
            name=${emotion}>
        </div>
    `}
    emotionRadios.innerHTML = radioItems
}

renderEmotionRadios(catsData)