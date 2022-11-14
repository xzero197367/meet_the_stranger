import * as wss from './wss.js';
import * as constants from "./constants.js";

let connectUserDetails;

export const sendPreOffer = (callType, calleePersonalCode)=>{
    const data = {
        callType,
        calleePersonalCode,
    }

    wss.sendPreOffer(data)
};

export const handlePreOffer = (data) => {
    const {callType, callerSocketId} = data;

    connectUserDetails = {
        socketId: callerSocketId,
        callType,
    };

    if (callType === constants.callType.CHAT_PERSONAL_CODE || callType === constants.callType.VIDEO_PERSONAL_CODE){
        ui.showInCommingCallDialog(callType, acceptCallHandler, rejectCalHandler);
    }
};

const acceptCallHandler = ()=>{
    console.log("call accepted");
};

