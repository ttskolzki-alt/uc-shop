const sendButton = document.getElementById('sendOrder');

sendButton.onclick = () => {
    const accountId = document.getElementById('account').value.trim();
    const amount = document.getElementById('amount').value.trim();

    if (!accountId || !amount) {
        alert("❌ Пожалуйста, заполните все поля");
        return;
    }

    const data = {
        action: "new_order",
        account_id: accountId,
        amount: amount
    };

    // Отправляем данные в Telegram через WebApp
    if (window.Telegram?.WebApp) {
        Telegram.WebApp.sendData(JSON.stringify(data));
        alert("✅ Заказ отправлен администратору!");
    } else {
        alert("⚠ Мини-приложение должно быть запущено внутри Telegram");
    }
};
