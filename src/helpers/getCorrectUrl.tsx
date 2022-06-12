/**
 * getCorrectUrl
 * This method replace a url http for https
 * @param incorrectUrl 
 * @returns {string} correctUrl
 */

export function getCorrectUrl(incorrectUrl: string){
    let pathWithoutHttp=incorrectUrl.split('http')[1]
    let correctUrl='https'+pathWithoutHttp
    return correctUrl;
}