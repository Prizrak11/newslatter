import '../sass/main.scss'
//Images
import '../static/bg_instagram.jpg'
import '../static/nt_001_cover.jpg'
import '../static/nt_001_extra.png'
import '../static/nt_001_extra2.jpg'
import '../static/nt_002_cover.jpeg'
import '../static/nt_003_cover.jpg'
import '../static/nt_004_cover.jpg'
import '../static/nt_004_extra.jpg'
import '../static/nt_005_cover.jpg'
import '../static/nt_005_extra.jpg'
import '../static/nt_006_extra.jpg'
import '../static/nt_006_extra2.jpg'
//MasonryLayout
import '../static/masonry/ms_1.jpg'
import '../static/masonry/ms_2.jpg'
import '../static/masonry/ms_3.jpg'
import '../static/masonry/ms_4.jpg'
import '../static/masonry/ms_5.jpg'
import '../static/masonry/ms_6.jpg'
import '../static/masonry/ms_7.jpg'
import '../static/masonry/ms_8.jpg'
import '../static/masonry/ms_9.jpg'
import '../static/masonry/ms_10.jpg'
import '../static/masonry/ms_11.jpg'
import '../static/masonry/ms_12.jpg'
import '../static/masonry/ms_13.jpg'
import '../static/masonry/ms_14.jpg'
import '../static/masonry/ms_15.jpg'
import '../static/masonry/ms_16.jpg'
import '../static/masonry/ms_17.jpg'
import '../static/masonry/ms_18.jpg'
import '../static/masonry/ms_19.jpg'
import '../static/masonry/ms_20.jpg'
import '../static/masonry/ms_21.jpg'
import '../static/masonry/ms_22.jpg'
import '../static/masonry/ms_23.jpg'
import '../static/masonry/ms_24.jpg'
import '../static/masonry/ms_25.jpg'
import '../static/masonry/ms_26.jpg'
import '../static/masonry/ms_27.jpg'
import '../static/masonry/ms_28.jpg'
//Babel
import "core-js/stable";
import "regenerator-runtime/runtime";
//JavaScript
import { router } from '../js/router/routes'


window.onload = () => {
    window.location.hash = '#/'
    document.querySelector(`#menu-icon`).addEventListener(`click`, () => {
        document.querySelector(`.nav-main`).classList.toggle(`hidden`)
    })
}
router('#/')
window.addEventListener('hashchange', () => {
    router(window.location.hash)
    document.querySelector(`#menu-icon`).addEventListener(`click`, () => {
        document.querySelector(`.nav-main`).classList.toggle(`hidden`)
    })
})