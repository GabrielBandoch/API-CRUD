import express from "express"

import {informacoes} from "../controller/controller_info.js"

let router = express.Router()
router.get('/informacoes', informacoes.all);
router.post('/informacoes', informacoes.create);
router.put('/informacoes/:idResp', informacoes.update);
router.delete('/informacoes/:idResp', informacoes.delete);

export { router } 