const isLoged = () => {
    if (sessionStorage.getItem('id') && sessionStorage.getItem('userId')) {
        return true;
    }
    return false;
}

export default isLoged;