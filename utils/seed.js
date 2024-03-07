const connection = require('../config/connection');
const { Blabber } = require('../models');
const { getRandomName, blabbers, getRandomBlabber } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    try {
        await Blabber.deleteMany({});
        console.log('Cleared old Blabber data');
        console.log('Check1')
        // Seeds new Blabber
        const seedData = [];
        for (let i = 0; i < blabbers.length; i++) {
            const blabber = getRandomBlabber();
            seedData.push({ name: blabber.name, blabs: blabber.blabs, 
                 reactionBody: blabber.reactionBody });
        }

// username: blabber.username,

    await Blabber.insertMany(seedData);
    console.log('Seed Success');
    } catch (error) {
        console.error('Error Seeding', error);
    } finally {
        connection.close();
        console.log('Database Connection Closed');
    }

});