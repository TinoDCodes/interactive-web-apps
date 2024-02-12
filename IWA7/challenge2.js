const nickname = "Timmy";
const firstname = "Timothy";
const msgEnd =
  (nickname && `, ${nickname}!`) || (firstname && `, ${firstname}!`) || "!";

console.log(`Good Morning${msgEnd}`);
