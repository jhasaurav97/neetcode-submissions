class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let count = new Array(26).fill(0);
        for(let char of s){
            let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            count[index]++;
        }
        for(let char of t){
            let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            count[index]--;
        }
        for(let value of count){
            if(value !== 0){
                return false;
            }
        }
        return true;
    }
}
