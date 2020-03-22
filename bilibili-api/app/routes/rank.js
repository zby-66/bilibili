import Router from 'koa-router'
import axios from 'axios'
import { ranking0, ranking1, randking2, rankbase } from './urlConfig'

const router = Router()

// 排行
// 三日排行
router.get('/ranking0', async (ctx, next) => {
  let response = await axios.get(ranking0)
  ctx.body = response.data
})

// 一周排行
router.get('/ranking1', async (ctx, next) => {
  let response = await axios.get(ranking1)
  console.log('七日排行')
  ctx.body = response.data
})

// 昨日排行
router.get('/randking2', async (ctx, next) => {
  let response = await axios.get(randking2)
  ctx.body = response.data
})

// contentrank -分类下三日排行
router.post('/contentrank', async (ctx, next) => {
	const body = ctx.request.body
  let categoryId = body.categoryId
	
  let url = rankbase + categoryId + '-3day.json'
  let response = await axios.get(url)
  ctx.body = response.data
})

// contentrank -分类下一周排行
router.post('/contentrankweek', async (ctx, next) => {
  const body = ctx.request.body
  let categoryId = body.categoryId
  
  let url = rankbase + categoryId + '-week.json'
  let response = await axios.get(url)
  ctx.body = response.data
})

export default router