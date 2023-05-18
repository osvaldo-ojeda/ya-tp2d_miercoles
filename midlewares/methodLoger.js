const methodLoger = (req, res, next) => { 
    console.log("🚀 method:", req.method, req.url)
    next()
}
export default methodLoger