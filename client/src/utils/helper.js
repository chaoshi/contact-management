/**
 * Format phone number string to format (xxx) xxx-xxx
 * @param {String} phoneNumberString 
 * @returns  {String} formatted phone number string 
 */
export const formatPhoneNumber = phoneNumberString => {
    var cleaned = ("" + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    return (!match) ? null : "(" + match[1] + ") " + match[2] + "-" + match[3];
}

/**
 * Format name string
 * @param {*} name 
 * @returns {String} name with special characters replaced with space
 */
export const formatName = name => {
    var cleaned = name.replace(/[^\w\s]/gi, ' ')
    return cleaned;
}