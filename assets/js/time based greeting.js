document.addEventListener("DOMContentLoaded", function() {
    // Dapatkan referensi ke elemen widget
    var greetingWidget = document.getElementById("greetingWidget");

    // Dapatkan waktu saat ini
    var hourOfDay = new Date().getHours();

    // Sesuaikan kelas latar belakang berdasarkan waktu
    if (hourOfDay >= 6 && hourOfDay < 12) {
        // Pagi
        greetingWidget.classList.add("morning");
        document.getElementById("greetingText").innerHTML = "Selamat Pagi!";
    } else if (hourOfDay >= 12 && hourOfDay < 18) {
        // Siang
        greetingWidget.classList.add("afternoon");
        document.getElementById("greetingText").innerHTML = "Selamat Siang!";
    } else {
        // Malam
        greetingWidget.classList.add("evening");
        document.getElementById("greetingText").innerHTML = "Selamat Malam!";
    }
});