
const initialState="";
const formU = (state=initialState,action) => {
  
    switch(action.type){
        case "username":
            return action.payLoad ;

       

                default:
                    return state;
    }
}

export default formU
