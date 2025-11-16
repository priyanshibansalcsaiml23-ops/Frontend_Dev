let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

console.log(isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside ? "Secure" : "Unsafe");

isOwnerInside = false;
console.log(isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside ? "Secure" : "Unsafe");

isAlarmOn = false;
console.log(isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside ? "Secure" : "Unsafe");
