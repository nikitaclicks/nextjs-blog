export default function handler(req, res) {
    res.status(200).json({ 
        text: 'Hello there',
        url: process.env.WEBSITE_RUN_FROM_PACKAGE,
        time: new Date()
     });
}