module.exports = (req, res, next) => {
    const { content, title } = req.body;
    if (!title || !content) { 
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    
    return next();
    };