
const { faker } = require("@faker-js/faker");

const posts = [];
function generateRandomPost(numberOfPosts = 1000) {
    for (let index = 0; index < numberOfPosts; index++) {
        // console.log(faker.lorem.lines());
        // console.log(faker.image.abstract(1234, 2345, true) );
        // console.log(faker.image.urlLoremFlickr({ category: 'nature', height: 1080, width: 1920 }));
        const post = { id: index + 1, title: faker.lorem.lines(1), description: faker.lorem.lines({ min: 5, max: 15 }), image: faker.image.urlLoremFlickr({ category: 'nature', height: 1080, width: 1920 }) }
        posts.push(post)
    }

    return posts;
}

console.log(generateRandomPost(5));