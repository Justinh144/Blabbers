const { Blabber } = require('../../models');


const router = require('express').Router();




// Define routes
router.get('/', async (req, res) => {
    try {
        const blabbers = await Blabber.find({});
        res.json(blabbers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newBlabber = new Blabber(req.body);
        const savedBlabber = await newBlabber.save();
        res.status(201).json(savedBlabber);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        const updatedBlabber = await Blabber.findByIdAndUpdate(id, updateData, {new: true });
        if (!updatedBlabber) {
            return res.status(404).json({ message: "No ID found"})
        }
    

    res.json(updatedBlabber);
} catch (err) {
    res.status(500).json({ message: err.message });
}
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBlabber = await Blabber.findByIdAndDelete(id);
        if(!deletedBlabber) {
            return res.status(404).json({ message: "Blabber not found"})
        }
 
        res.json({ message: "Blabber deleted", deletedBlabber });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    });

    router.post('/:id/reactions', async (req, res) => {
        const { id } = req.params;
        const { reactionBody, username } = req.body;
    
        try {
            const updatedBlabber = await Blabber.findByIdAndUpdate(
                id,
                { $push: { reactions: { reactionBody, username } } },
                { new: true, runValidators: true }
            );
            if (!updatedBlabber) {
                return res.status(404).json({ message: "No Blabber found with this ID." });
            }
            res.json(updatedBlabber);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "An error occurred while adding the reaction.", err });
        }
    });
    
    module.exports = router;



// => res.send('Response from blabberRoutes'));

// Export the router
module.exports = router;