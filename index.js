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

    var Seal = new Image()
    Seal.crossOrigin = "anonymous";
    Seal.src = "./SGC-Seal_of_quality.png"
    Seal.onload = function() {

    
        img.onload = function() {
            let OnlineH = Online.height
            let SealW = Seal.width
            let SealH = Seal.height

            layout.drawImage(img, 0, 0, 1024, 575)
            layout.drawImage(Seal, 1024-(SealW*0.3), 575-(SealH*0.3), SealW*0.3, SealH*0.3)

            if(checkBox.checked) layout.drawImage(Online, 0, (680-OnlineH), 512, OnlineH*0.67)
            
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
