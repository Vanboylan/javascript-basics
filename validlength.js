const isValidLength = (phonenumber) => {
    const validLength = 10;
    if (phonenumber.length === validLength)
    {return true;}
    else
    {return false;}
}

module.exports = isValidLength;