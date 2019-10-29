const Req = () => {

    var base = "https://chorao.herokuapp.com"


    var method = {
        "ListAll" : {
            method : "GET",
            name : base + "/api/explorer/file"
        },
        "CreateFile" : {
            method : "POST",
            name : base + "/api/explorer/file"
        },
        "RenameFile" : {
            method : "PUT",
            name : base + "/api/explorer/file"
        },
        "ExcludeFile" : {
            method : "DEL",
            name : base + "/api/explorer/file"
        },
    }

}

export default Req