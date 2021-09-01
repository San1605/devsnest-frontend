interface ActionType {
    type: string,
    payload: (number|string)
}
const notes = (state:any=[], action: ActionType) => {
    switch (action.type) {
        case "ADD_NOTE":
            return [...state,action.payload];
        case "DEL_NOTE":
            return state.filter((_:string,index:number)=>index!==action.payload);
        default:
            return state
    }
}

export default notes
