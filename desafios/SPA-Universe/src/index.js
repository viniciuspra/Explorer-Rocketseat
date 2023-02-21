import { Router } from './Router.js';

const router = new Router()
router.add("/desafios/SPA-Universe/index.html", "/desafios/SPA-Universe/pages/home.html")
router.add("/universe", "/desafios/SPA-Universe/pages/universe.html")
router.add("/exploration", "/desafios/SPA-Universe/pages/exploration.html")
router.add(404, "/desafios/SPA-Universe/pages/404.html")
router.add("/more", "/desafios/SPA-Universe/pages/universe.html")

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()