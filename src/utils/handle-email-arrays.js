export const constructEmailArray = (email) => {
    return (email.split(',')).map(
        (address) => address.trim()
    );
};

export const deconstructEmailArray = (emailArray) => {
    return emailArray.join(', ');
}