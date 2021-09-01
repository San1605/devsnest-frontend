
const initialState="";
const formE = (state=initialState,action) => {
  
    switch(action.type){
        case "email":
            return action.payLoad ;

       

                default:
                    return state;
    }
}

export default formE