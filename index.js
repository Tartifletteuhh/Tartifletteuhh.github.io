function test(item) {
    fileList = item.files

    document.getElementById('filename').textContent = fileList[0].name

    if (fileList) {
        canvas()
    }
}
function canvas() {
    document.getElementById("onlineChoice").style.display = "none"

    var sealChoice = document.querySelector('input[name=group1]:checked').value;
    var onlineChoice = document.querySelector('input[name=group2]:checked').value;

    console.log(sealChoice)
    console.log(onlineChoice)

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
    
        img.onload = setTimeout(function() {


            let OnlineH = Online.height
            let OnlineW = Online.width
            let SealW = Seal.width
            let SealH = Seal.height

            layout.drawImage(img, 0, 0, 1024, 575)

            switch (sealChoice) {
                case "BG":
                    layout.drawImage(Seal, 0, 575-(SealH*0.3), SealW*0.3, SealH*0.3)
                    break
                case "BD":
                    layout.drawImage(Seal, 1024-(SealW*0.3), 575-(SealH*0.3), SealW*0.3, SealH*0.3)
                    break
                case "HG":
                    layout.drawImage(Seal, 0, 0, SealW*0.3, SealH*0.3)
                    break
                case "HD":
                    layout.drawImage(Seal, 1024-(SealW*0.3), 0, SealW*0.3, SealH*0.3)
                    break
                default :
                    console.log("error Seal")
                
            }
            

            if(checkBox.checked) {

                document.getElementById("onlineChoice").style.display = "block"

                switch (onlineChoice) {
                    case "BG":
                        layout.drawImage(Online, 0, (680-OnlineH), 512, OnlineH*0.67)
                        break
                    case "BD":
                        layout.drawImage(Online, (1024-512), (680-OnlineH), 512, OnlineH*0.67)
                        break
                    case "HG":
                        layout.drawImage(Online, 0, 0, 512, OnlineH*0.67)
                        break
                    case "HD":
                        layout.drawImage(Online, (1024-512), 0, 512, OnlineH*0.67)
                        break
                    default :
                        console.log("error Online")
                }
                
            }
            
        }, 100)
    }
    
            
        
}
function download() {
    var download = document.getElementById("download")
    var image = document.getElementById("canvas").toDataURL("image/webp")
        .replace("image/png", "image/octet-stream")
    download.setAttribute("download", `${fileList[0].name.replace(/\.[^/.]+$/, "")}_ShibaGamesCrack.webp`)
    download.setAttribute("href", image)
    }
