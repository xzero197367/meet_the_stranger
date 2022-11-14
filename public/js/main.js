import * as store from "./store.js";
import * as wss from "./wss.js";
import * as webRTCHandler from "./webRTCHandler.js";
import * as constants from "./constants.js";

// initialization of socket IO connection
const socket = io('/');
wss.registerSocketEvents(socket);

// register event for personal code copy button
const personalCodeCyBtn = document.getElementById("personal_code_copy_button");
personalCodeCyBtn.addEventListener("click", ()=>{
    const  personalCode = store.getState().socketId;
    navigator.clipboard && navigator.clipboard.writeText(personalCode);
});

// register event listeners for connection buttons
const personalCodeChatBtn = document.getElementById(
    "personal_code_chat_button"
);
const personalCodeVideoBtn = document.getElementById(
    "personal_code_video_button"
);
personalCodeChatBtn.addEventListener("click", ()=>{
    const calleePersonalCode = document.getElementById("personal_code_input").value;
    const callType = constants.callType.CHAT_PERSONAL_CODE;
    webRTCHandler.sendPreOffer(callType, calleePersonalCode);
});
personalCodeVideoBtn.addEventListener("click", ()=>{
    const calleePersonalCode = document.getElementById("personal_code_input").value;
    const callType = constants.callType.VIDEO_PERSONAL_CODE;
    webRTCHandler.sendPreOffer(callType, calleePersonalCode);
});