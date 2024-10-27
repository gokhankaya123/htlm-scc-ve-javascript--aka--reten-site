const jokes = [
    "Neden bilgisayar soğuktan şikayet eder? Çünkü donmuş!",
    "Bir matematikçi, bir fizikçi ve bir mühendis barda buluşur... Bunun sonu iyi bitmez.",
    "Bilgisayarın kötü bir gün geçirdiğini nasıl anlarsın? İçinde solucan varsa!",
    "Doktor neden takvim kullanır? Çünkü zamanla ilgili bir doktor!",
    "Neden ördekler bilgisayarı sever? Çünkü web sitelerini çok seviyorlar!"
];

function generateJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById("jokeDisplay").innerText = jokes[randomIndex];
}
