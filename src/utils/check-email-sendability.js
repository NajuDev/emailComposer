export const checkEmailSendability = (addresseeValidity, subjectLine, message) => {
    return addresseeValidity && subjectLine && message;
}