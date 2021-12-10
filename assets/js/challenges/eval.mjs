/**
 * Manages loading of challenge code and execution of user submission code
 * 
 */
export class ChallengeManager {
    constructor() {
        this._challenge = null;
    }

    _loaded(module) {
        this._challenge = module;
    }

    _loadFailed(err) {
        console.warn(`Challenge loading failed! ${err}`);
        this._challenge = null;
    }

    /**
     * Attempts to load the challenge module for the day specified.
     * @param {Number} day 
     */
    loadChallenge(day) {
        import(`./day${day}.mjs`)
          .then(module => this._loaded(module))
          .catch(err => this._loadFailed(err));
    }

    /**
     * Attempts to run the solution code provided
     * @param {String} solution 
     * @returns {Boolean} whether the result matches expected result
     */
    evaluate(solution) {
        if (this._challenge) {
            // Setup
            const args = this._challenge.setup();
            // Create function
            const func = new Function('...args', submission);
            // Run code
            const result = func(args);
            // Check result
            return this._challenge.test(result);
        }
        return false;
    }
};

