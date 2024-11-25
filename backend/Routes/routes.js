const express=require('express')
const { new_user, login, fetch, request_service, feedback } = require('../controllers/router_controllers')
const router=express.Router()

router.route("/register").post(new_user)
router.route("/login").post(login)
router.route("/fetch/:job").get(fetch)
router.route("/request").post(request_service)
router.route("/feedback").post(feedback)

module.exports = router