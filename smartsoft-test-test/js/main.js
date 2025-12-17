// Первая форма
$('#contactForm').on('submit', function (e) {
e.preventDefault();


const name = $('#name').val().trim();
const email = $('#email').val().trim();
const message = $('#message').val().trim();


if (name.length < 3) {
alert('Имя должно быть минимум 3 символа');
return;
}


$.ajax({
url: 'http://127.0.0.1',
method: 'POST',
data: { name, email, message },
success: function () {
alert('Форма отправлена');
},
error: function () {
alert('AJAX запрос отправлен (сервер не обязателен)');
}
});
});


// Вторая форма
$('#orderForm').on('submit', function (e) {
e.preventDefault();


const name = $('#orderName').val();
const comment = $('#orderComment').val();


Swal.fire({
title: 'Заказ создан',
html: `<b>Имя:</b> ${name}<br><b>Комментарий:</b> ${comment}`,
icon: 'success'
});
});


// Отзывы (JSON)
const reviewsData = [
{ name: 'Николай', text: 'Very good!!!' },
{ name: 'Владимир', text: 'найс.' },
{ name: 'Александр', text: 'спасибо!.' },
{ name: 'Екатерина', text: 'Классно работает' }
];


reviewsData.forEach(review => {
$('#reviews').append(`
<div class="col-md-4 mb-3">
<div class="card p-3 h-100">
<h6>${review.name}</h6>
<p class="mb-0">${review.text}</p>
</div>
</div>
`);
});
