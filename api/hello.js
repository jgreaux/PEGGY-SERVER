function helloWorld(req) {
    const name = req.query.name
    if (name === undefined || name.length === 0) {
        return {message:"hello world !"}
    }else{
        return {message:"hello "+ name +" !"}
    }
}

module.exports = helloWorld;