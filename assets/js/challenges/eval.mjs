/**
 * Manages loading of challenge code and execution of user submission code
 * 
 */
const testing = true;
export class ChallengeManager {
    constructor() {
        this._challenge = null;
        this._day = 0;
    }

    _loaded(module, callback) {
        this._challenge = module.challenge;
        if (callback) callback();
    }

    _loadFailed(err, day, callback) {
        console.warn(`Challenge loading failed for day ${day}! ${err}`);
        alert(`This is embarrassing, it looks like we couldn't load that challenge! ${err}`);
        this._challenge = null;
        if (callback) callback();
    }

    /**
     * Accesses the currently loaded challenge
     */
    get challenge() { return this._challenge; }

    /**
     * Attempts to load the challenge module for the day specified.
     * @param {*} day - Day to load
     * @param {Function} callback - Function to call when loaded
     */
    loadChallenge(day, success, failure) {
        const date = new Date();
        const today = date.getDate();
        const month = date.getMonth() + 1;

        if (testing || (month===12 && today >= day)) {
            this._day = day;
            this._challenge = null;

            import(`./day${day}.mjs`)
            .then(module => this._loaded(module, success))
            .catch(err => this._loadFailed(err, day, failure));
        }
    }

    /**
     * Attempts to run the solution code provided. Test result messages sent to callback function 'output'
     * @param {String} solution
     * @param {Function} output
     * @returns {Boolean} whether the result matches expected result
     */
    evaluate(solution, output=null) {
        try {
            if (this._challenge) {
                // Setup
                const args = this._challenge.setup();
                // Create function
                const func = new Function('...args', (this._challenge.boilerPlate + solution));
                // Run code
                return this._challenge.runTests(func, output);
            }
        } catch(err) {
            if (output) output(`\nError: ${err}`);
        }
        return false;
    }
};

