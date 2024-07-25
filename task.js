const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Снимаем активные классы со всех вкладок и содержимого
    tabs.forEach(t => t.classList.remove('tab_active'));
    tabContents.forEach(c => c.classList.remove('tab__content_active'));

    // Добавляем активные классы текущей вкладке и ее содержимому
    tab.classList.add('tab_active');
    tabContents[index].classList.add('tab__content_active');
  });
});