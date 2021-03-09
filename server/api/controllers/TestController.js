const hello = async (req, res) => {
    res.json({ response: 'hello' });
};

const TestController = {
    hello
};

export default TestController;
