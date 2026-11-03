export function duel (a, b) {
    if (a === b) {
        return "égalité"
    }
    if (a === "esclave" && b === "empereur") {
        return "victoire"
    }
    if (a === "citoyen" && b === "esclave") {
        return "victoire"
    }
    if (a === "empereur" && b === "citoyen") {
        return "victoire"
    }
    return "défaite"
}

console.log(duel("empereur", "empereur"))
console.log(duel("empereur", "citoyen"))
console.log(duel("empereur", "esclave"))
console.log(duel("citoyen", "citoyen"))
console.log(duel("citoyen", "esclave"))
console.log(duel("citoyen", "empereur"))
console.log(duel("esclave", "esclave"))
console.log(duel("esclave", "empereur"))
console.log(duel("esclave", "citoyen"))
