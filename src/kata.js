const greet = (nameArr = ["my friend"]) => {
    let namePlaceholder = nameArr[0];
    let greetingObj = {
        punc: ".",
        greeting: "Hello,",
    };
    let shoutNamesArr = [];
    let shoutGreeting = "";

    for (let i = 0; i < nameArr.length; i++) {
        filterUppercaseNames(nameArr, i, shoutNamesArr);
        filterCommaSeperatedNames(nameArr, i);
        removeDoubleQuotes(nameArr, i);
    }
    namePlaceholder = concatPlaceholderNames(nameArr, namePlaceholder);
    shoutGreeting = concatShoutedNames(shoutNamesArr, nameArr, shoutGreeting);
    singleShoutObj = singleShoutedName(nameArr, greetingObj);

    return `${greetingObj.greeting} ${namePlaceholder}${greetingObj.punc}${shoutGreeting}`;
};

const filterUppercaseNames = (nameArr, i, shoutNamesArr) => {
    if (nameArr[i] === nameArr[i].toUpperCase()) {
        const tempShoutArr = nameArr.splice(i, 1);
        shoutNamesArr.push(tempShoutArr[0]);
    }
};

const filterCommaSeperatedNames = (nameArr, i) => {
    if (
        nameArr.length > 0 &&
        nameArr[i].includes(",") &&
        !nameArr[i].startsWith('"')
    ) {
        const tempCommaArr = nameArr[i].split(",");
        nameArr.splice(i, 1, tempCommaArr[0].trim(), tempCommaArr[1].trim());
    }
};

const removeDoubleQuotes = (nameArr, i) => {
    if (nameArr.length > 0 && nameArr[i].startsWith('"')) {
        nameArr[i] = nameArr[i].replaceAll('"', "");
    }
};

const concatPlaceholderNames = (nameArr, namePlaceholder) => {
    if (nameArr.length > 1) {
        for (let i = 1; i < nameArr.length - 1; i++) {
            namePlaceholder += `, ${nameArr[i]}`;
        }
        if (nameArr.length > 2) {
            namePlaceholder += ",";
        }
        namePlaceholder += ` and ${nameArr.slice(-1)}`;
    }
    return namePlaceholder;
};

const concatShoutedNames = (shoutNamesArr, nameArr, shoutGreeting) => {
    if (shoutNamesArr.length > 0) {
        if (nameArr.length != 0) {
            shoutGreeting = ` AND HELLO ${shoutNamesArr[0]}!`;
        }
    }
    return shoutGreeting;
};

const singleShoutedName = (nameArr, greetingObj) => {
    if (nameArr.length === 0) {
        greetingObj.greeting = greetingObj.greeting.toUpperCase();
        greetingObj.punc = "!";
    }
    return greetingObj;
};

module.exports = greet;
