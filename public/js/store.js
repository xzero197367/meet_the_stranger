let state = {
    socketId: null,
    localStream: null,
    remoteStream: null,
    screenSharingActive: false,
    screenSharingStream: null,
    allowConnectionsFromStrangers: false,
};


export const setSocketId = (socketId) =>{
    state = {
        ...state,
        socketId: socketId,
    };
    console.log(state);
};

export const setLocalStream = (stream)=>{
    state = {
        ...state,
        localStream: stream,
    };
};

export const setRemoteStream = (stream)=>{
    state = {
        ...state,
        remoteStream: stream,
    };
};

export const setAllowConnectionsFromStrangers = (allowConnection)=>{
    state = {
        ...state,
        allowConnectionsFromStrangers: allowConnection,
    };
};

export const setScreenSharingActive = (screenSharingActivie)=>{
    state = {
        ...state,
        screenSharingActive:screenSharingActivie
    };
};

export const setScreenSharingStream = (stream)=>{
    state = {
        ...state,
        screenSharingStream: stream,
    };
};

export const getState = ()=>{
    return state;
};


