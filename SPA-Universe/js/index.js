import Router from './routes.js'
import { backgroundChange } from './backgroundChange.js'

const nav1 = document.querySelector('nav :nth-child(2)')
const nav2 = document.querySelector('nav :nth-child(3)')
const nav3 = document.querySelector('nav :nth-child(4)')
const bodyPage = document.querySelector('body')
const button = document.querySelector('#more')

const router = new Router()
const backgroundChanges = backgroundChange({ bodyPage })

router.add('/', './pages/home.html')
router.add('/index.html', './pages/home.html')
router.add('/universe', './pages//universe.html')
router.add('/explore', './pages/explore.html')
router.add(404, './pages/404.html')

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()

nav1.addEventListener('click', backgroundChanges.home)
nav2.addEventListener('click', backgroundChanges.universe)
nav3.addEventListener('click', backgroundChanges.exploration)
button.addEventListener('click', backgroundChanges.exploration)