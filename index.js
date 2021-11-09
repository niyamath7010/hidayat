var collection={
    "1":{
        "album":"abc",
        "artist":"coldplay",
        "track":["song1","song"]
    }
}

function newupdate(id,prop,value){
    if(collection.hasOwnProperty(id)){
        if(collection[id].hasOwnProperty(prop)){
            if(value===""){
                delete collection[id][prop];
                return collection;
            }else{
                collection[id][prop]=value
            }
        }else{
            return "prop not found"
        }
    }else{
        return "false"
    }
}