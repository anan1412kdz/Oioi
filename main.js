// Nội dung bức thư
var letterContent = "Cảm ơn em đã dành thời gian để nhìn những trò trẻ con của anhh và anh có những điều muốn gởi gắm đến tình iu của anhh❤️. Cảm ơn em đã đến bên anhh những lúc anh cô đơn buồn tủi nhất. Cuộc sống thực sự chẳng có ý nghĩa gì nếu không có em. Em làm cho anh luôn cảm thấy đặc biệt và hoàn hảo. Anh chẳng biết nói gì ngoài lời cảm ơn em, anh rất yêu em💕";

// Tốc độ viết chữ (50 là tốc độ khá phù hợp)
var durationWrite = 50;

// Hiệu ứng gõ chữ
function effectWrite() {
    var boxLetter = document.querySelector(".letterContent");
    var letterContentSplited = letterContent.split("");

    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val;
        }, durationWrite * index);
    });
}

// Khi trang tải xong
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active");
    }, 500);
});

// Xử lý mở thiệp Valentine
var openBtn = document.querySelector(".openBtn");
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active");
    document.querySelector(".container").classList.add("close");
});

// Xử lý khi nhấn vào thiệp
var cardValentine = document.querySelector(".cardValentine");

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open");

    if (cardValentine.classList.contains("open")) {
        setTimeout(effectWrite, 500);
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = "";
        }, 1000);
    }
});

// Xử lý phát nhạc tự động và khi người dùng nhấn vào trang
document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("music");

    // Kiểm tra nếu trình duyệt không cho phép autoplay
    let playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {
            // Nếu bị chặn, yêu cầu người dùng nhấn vào nút để phát nhạc
            document.body.addEventListener("click", function () {
                audio.play();
            }, { once: true });
        });
    }
});