import { Router } from "./router.js"

const router = new Router()
router.add( "/JavaScript/conceitos-de-SPA/index.html",
    "/JavaScript/conceitos-de-SPA/pages/home.html")
router.add( "/about", "/JavaScript/conceitos-de-SPA/pages/about.html",)
router.add( "/contact", "/JavaScript/conceitos-de-SPA/pages/contact.html",)
router.add( 404, "/JavaScript/conceitos-de-SPA/pages/404.html",)

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()
