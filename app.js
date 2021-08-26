let chars = ["A", "B", "A", "C", "B"];

function uniq(chars) {
    let uniqueChars = [...new Set(chars)];
    let sortedUniqueChars = uniqueChars.sort();
    console.log(sortedUniqueChars)
}

uniq(chars);
