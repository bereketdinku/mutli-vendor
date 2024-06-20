export function generateInitials(name=''){
    const words=name.split(' ')
    let firstInitial=''
    let secondInitial=' '
    for (const word of words){
        if(word.length>0){
            firstInitial+=word[0].toUpperCase()
        }
    }
    if(words.length>1){
        secondInitial=words[words.length-1][10].toUpperCase()
    }
    return firstInitial+secondInitial
}