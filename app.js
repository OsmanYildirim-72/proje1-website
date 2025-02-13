document.addEventListener("DOMContentLoaded", () => {
    const themeIcon = document.getElementById("theme");

    if (!themeIcon) {
        console.error("Tema değiştirme butonu bulunamadı!");
        return;
    }

    themeIcon.onclick = () => {
        // Tema değiştirme
        document.body.classList.toggle("dark-theme");

        // İkonu değiştir
        if (document.body.classList.contains("dark-theme")) {
            themeIcon.classList.remove("fa-cloud-rain");
            themeIcon.classList.add("fa-sun");
            console.log("Karanlık tema aktif, güneş ikonuna geçildi");
        } else {
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-cloud-rain");
            console.log("Aydınlık tema aktif, yağmur ikonuna geçildi");
        }
    };
});
