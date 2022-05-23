const text = document.querySelector('.text');
const alisher = Number(prompt("Alisher qancha puling bor?"));

const dollorsom = Number(10896.61);
const eurosom = Number(12247.79);

const ticket = Number(500 * dollorsom);
const hotel = Number(250 * dollorsom);
const entertainment = Number(120 * eurosom);

const allexpenses = Number(ticket + hotel + entertainment);

if (alisher >= allexpenses) {
    text.textContent = "Oq yo'l, Alisher!😉"
}else {
    text.textContent = "Alisher, ozgina sabr qilish kerak bo'lar ekan.🤨"
};
console.log(text);