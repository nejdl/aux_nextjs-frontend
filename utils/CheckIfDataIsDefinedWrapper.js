const CheckIfDataIsDefinedWrapper = ({ data, children }) => {
    // check if data is not: null | undefined | NaN | empty | 0 | false
    if(data){
        // check if data is not an empty array
        // return children if defined
        if (data.length != 0){
            return (
                <>
                    {children}
                </>
            )
        // return null if undefined
        } else {
            return null;
        }
    } return null;
}

export default CheckIfDataIsDefinedWrapper;