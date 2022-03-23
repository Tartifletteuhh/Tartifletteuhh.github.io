function test(item) {
    fileList = item.files

    document.getElementById('filename').textContent = fileList[0].name

    if (fileList) {
        canvas()
    }
}
function canvas() {
    try{fileList}catch{return} 
    var canvas = document.getElementById('canvas')
    var checkBox = document.getElementById("myCheck")

    layout = canvas.getContext('2d')
    layout.clearRect(0, 0, 1024, 575)
    
    var img = new Image()
    img.src = URL.createObjectURL(fileList[0])

    var Online = new Image()
    Online.crossOrigin = "anonymous";
    Online.src = "./online.png"
    
    img.onload = function() {
        let OnlineH = Online.height

        if(!checkBox.checked) layout.drawImage(img, 0, 0, 1024, 575)
        else {
            layout.drawImage(img, 0, 0, 1024, 575)
            layout.drawImage(Online, 0, (680-OnlineH), 512, OnlineH*0.67) 
        }
    }
            
        
}
function download() {
    var download = document.getElementById("download")
    var image = document.getElementById("canvas").toDataURL("image/webp")
        .replace("image/png", "image/octet-stream")
    download.setAttribute("download", `${fileList[0].name.replace(/\.[^/.]+$/, "")}_ShibaGamesCrack.webp`)
    download.setAttribute("href", image)
    }
