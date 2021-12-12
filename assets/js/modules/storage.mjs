/**
 * Stores user code submissions and completion in localStorage
 */
export class ChallengeStorage {
    /**
     * Loads stored data for the given day
     * @param {String or Number} day 
     * @returns {Object}
     */
    getChallengeData(day) {
        const success = (localStorage.getItem(`day${day}-success`) === 'true');
        const code = localStorage.getItem(`day${day}-code`);
        return {
            success: success,
            code: code
        };
    }

    getChallengeSuccess(day) {
        return (localStorage.getItem(`day${day}-success`) === 'true');
    }

    getChallengeCode(day) {
        return localStorage.getItem(`day${day}-code`);
    }

    setChallengeData(day, token) {
        localStorage.setItem(`day${day}-success`, token.success);
        localStorage.setItem(`day${day}-code`, token.code);
    }

    setChallengeSuccess(day, success) {
        localStorage.setItem(`day${day}-success`, success);
    }

    setChallengeCode(day, code) {
        localStorage.setItem(`day${day}-code`, code);
    }
}