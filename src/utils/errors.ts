const extractErrorMessage = (err: any) => {
    const errorMsg = err.graphQLErrors[0]?.extensions?.originalError.message;

    if (Array.isArray(errorMsg)) {
        return formatErrorMsg(errorMsg[0]);
    } else {
        return formatErrorMsg(errorMsg);
    }

}

const formatErrorMsg = (errorMsg: string) => {
    return errorMsg.charAt(0).toUpperCase() + errorMsg.slice(1);
}

export { extractErrorMessage };