class Client {
    constructor(){

    }

    load(f){
        let text;
        let rawFile = new XMLHttpRequest();
        rawFile.open('GET', f, false);
        rawFile.onreadystatechange = function(){
            if(rawFile.readyState === 4){
                if(rawFile.status === 200 || rawFile.status == 0){
                    let res = rawFile.responseText;
                    text = res;
                }
            }
        }
        rawFile.send();
        return text;
    }
}