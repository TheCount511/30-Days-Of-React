let emptyArr = [];
let ArrayStore = [
  "PUBG",
  "Fortnite",
  "GTA V",
  "Red Dead",
  "Cyberpunk",
  "Hitman",
  "Call of Duty",
];
const gamesLength = ArrayStore.length;
console.log(gamesLength);

//first and last item
console.log(ArrayStore[0], ArrayStore[gamesLength - 1]);

//mid item
const ArrayStoreMid = Math.ceil(gamesLength / 2);

//mid item
console.log(ArrayStore.indexOf(ArrayStore[ArrayStoreMid]));

//Mixed data type array
let mixedDataTypes = [
  1,
  "Boy",
  { name: "Fadhil" },
  [2, 3, 4],
  4,
  "string",
  true,
];
const mixedDataTypesLength = mixedDataTypes.length;

//IT companies array
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
  "Netflix"
];
console.log(itCompanies.length, itCompanies);

const itCompaniesMid = Math.ceil(itCompanies.length / 2);

console.log(
  itCompanies[0],
  itCompanies[itCompaniesMid],
  itCompanies[itCompanies.length - 1]
);

itCompanies.map((company) => console.log(company));

itCompanies.map((company) => console.log(company.toUpperCase()));

console.log(itCompanies.join(", "));

const CompanyChecker = (company) => {
  if (itCompanies.includes(company)) {
    console.log(company);
  } else {
    console.log(`${company} not found in array`);
  }
};

CompanyChecker("Google");

//O checker
const ZeroChecker = (company) => {
  if (company.toLowerCase().includes("o")) {
    let comparr = [...company].sort().join("");
    let zeroindex = comparr.toLowerCase().indexOf("o");
    if (zeroindex == comparr.length - 1) {
      return false;
    } else if (comparr[zeroindex + 1] === "o") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

let filterArr = [];

itCompanies.map((comp) => {
  if (ZeroChecker(comp)) {
    filterArr.push(comp);
  }
});

console.log(filterArr);

//sort IT companies
// console.log(itCompanies.sort())
//console.log(itCompanies.reverse())

//IT companies slice
// console.log(itCompanies.slice(0,3))

// console.log(itCompanies.slice(-3))

//IT Companies mid

const mids =(companies)=>{
    let mid = Math.floor(companies.length/2)
if (companies.length%2 !== 0){

    console.log(companies.slice(mid,mid+1))
}
else{
    console.log(companies.slice(mid-1, mid+1))
}
}

mids(itCompanies)
//Remove first element
//itCompanies.shift()

//remove mid elements
// let mid = Math.floor(itCompanies.length/2)
// itCompanies.splice(mid-1,2)

// itCompanies.pop()
//  console.log(itCompanies)

itCompanies.splice(0,itCompanies.length)
console.log(itCompanies)