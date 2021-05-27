// function that handles the copy oasr
export const copyToClipBoard = (copyText) =>{
    // select the element content
    copyText.select();

    /* For mobile devices support*/
    copyText.setSelectionRange(0, 99999); 

    /* Copy the text inside the text field */
    document.execCommand("copy");

}