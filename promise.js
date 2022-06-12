const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {
    try {
        // Get data from all Cinemas API
        const [dataIXX, dataVGC] = await Promise.all([
            promiseTheaterIXX(),
            promiseTheaterVGC(),
        ]);

        //Count the type of emotion based on the parameter
        return [...dataIXX, ...dataVGC]?.filter(
            (item) => item.hasil === emotion
        ).length;
    } catch (e) {
        console.log("Oops, there was an error: " + e);
    }
};

module.exports = {
    promiseOutput,
};
