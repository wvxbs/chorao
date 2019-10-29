const Req = () => {

    var base = "https://chorao.herokuapp.com"


    var method = {
        "ListAll" : base + "/api/explorer/file",
        "CreateFile" : base + "/api/explorer/file",
        "RenameFile" : base + "/api/explorer/file",
        "ExcludeFile" : base + "/api/explorer/file",
    }

}

export default Req