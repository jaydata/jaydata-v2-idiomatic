var mongodb = {}


mongodb.getCollection("products").filter({"comments":{$elemMatch:{"author":"Me"}}})


jaydata(mongo => {
    mongo.products.filter(p => p.comments.some(c => c.author == "Me"))
})

mongodb.getCollection("products").filter({"topics":{$elemMatch:{$elemMatch:{"author":"me"}}}})

jaydata( (mongo) => {
    var result = mongo.products.filter(p => p.topics.some(topic => topic.some(item => item.author =="me")))
    return result
})


mongodb.getCollection("products").filter({"comments":{$size:1}})

var x = (mongo) => {
    mongo.products.filter(p => p.comments.length === 1)
}

