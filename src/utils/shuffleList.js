/** A function taking a list,
 * returns random unique n items
 */
export const shuffleList = (list, n) => {
    if (list.length < n) return;
    let res = [];
    for (let index = 0; index < n; index++) {
        const selected = list[Math.floor(Math.random() * list.length)];
        if (res.includes(selected)) {
            index--;
            continue;
        }
        else
            res.push(selected)
    }
}