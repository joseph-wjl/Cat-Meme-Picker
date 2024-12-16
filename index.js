import { catsData } from '/data.js'

const emotionRadios = document.getElementById("emotion-radios")
const getImageBtn = document.getElementById("get-image-btn")
const gifOnly = document.getElementById("gif-only")
const modal = document.getElementById("modal")
// const closeModalBtn = document.getElementById("close-modal-btn")

const display = document.getElementById("display")

getImageBtn.addEventListener("click", renderCat)

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

function getMatchingArray(cats) {
    if (document.querySelector('input[type="radio"]:checked')) {
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        const isGif = gifOnly.checked
        const matchingArray = catsData.filter(function (cat) {
            if (isGif) {
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif
            } else {
                return cat.emotionTags.includes(selectedEmotion)
            }
        })
        return matchingArray
    }
}

function getMatchingCat() {
    const catsArray = getMatchingArray()
    if (catsArray.length === 1) {
        return catsArray[0]
    } else {
        const randomNumber = Math.floor(Math.random()) * catsArray.length
        return catsArray[randomNumber]
    }
}

function renderCat() {
    const selectedCat = getMatchingCat()
    modal.innerHTML = `
    <img
    src="images/${selectedCat.image}"
    alt="${selectedCat.alt}">
    `
    modal.style.display = "flex"
}

