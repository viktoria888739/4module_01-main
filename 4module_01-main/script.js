document.addEventListener("DOMContentLoaded", () => {
  // вот это лучше вам не трогать, внутри тултипов оставил подсказки к выполнению задач
  enableTooltips();

  const groupsData = {
    curator: "Глазунова",
    groups: [
      {
        id: "britsp252",
        title: "БРИЦП252",
        students: [
          { name: "Белов Александр" },
          { name: "Борисова Виктория" },
          { name: "Бухарина Василиса" },
          { name: "Дегай Всеволод" },
          { name: "Исаев Артём" },
          { name: "Камнев Иван" },
          { name: "Колодяжный Степан" },
          { name: "Курпаяниди Эллина" },
          { name: "Куфаев Владислав" },
          { name: "Ломсадзе Олег" },
          { name: "Никифорова Елизавета" },
          { name: "Носкова Анастасия" },
          { name: "Пилипенко Дмитрий" },
          { name: "Салмин Пётр" },
          { name: "Степанова Софья" },
          { name: "Сукоркин Мирон" },
          { name: "Шамров Данил" },
          { name: "Этука Александр" },
        ],
      },
      {
        id: "britsp251",
        title: "БРИЦП251",
        students: [
          { name: "Абеленцев Марк" },
          { name: "Бородин Александр" },
          { name: "Казазян Арина" },
          { name: "Карпив Полина" },
          { name: "Куренков Всеволод" },
          { name: "Ли Вадим" },
          { name: "Морунов Пётр" },
          { name: "Мосоровчук Анна" },
          { name: "Нечаев Валерий" },
          { name: "Николенко Софья" },
          { name: "Новикова Полина" },
          { name: "Олейник София" },
          { name: "Саблина Мария" },
          { name: "Смирнов Илья" },
          { name: "Смирнов Макар" },
          { name: "Тищенко Глафира" },
          { name: "Эверглен Мелани" },
        ],
      },
    ],
  };

  //task36
  btns_t36 = document.querySelector('[data-js="t36-buttons"]');
  list_t36 = document.querySelector('[data-js="t36-list"]')
  for (const button_t36 of btns_t36.children) {
    button_t36.addEventListener("click", () => {
      let group_t36 = groupsData.groups.find(g36 => g36.id === button_t36.dataset.groupId);
      list_t36.innerHTML = '';
      group_t36.students.forEach(student => {
        let li_t36 = document.createElement('li');
        li_t36.textContent = student.name;
        list_t36.appendChild(li_t36);
      });
    });
  }
  //task37
  btns_t37 = document.querySelector('[data-js="t37-buttons"]');
  out_t37 = document.querySelector('[data-js="t37-out"]')
  for (const button_t37 of btns_t37.children) {
    button_t37.addEventListener("click", () => {
      let group_t37 = groupsData.groups.find(g37 => g37.id === button_t37.dataset.groupId);
      let groupCount = group_t37.students.length;
      out_t37.textContent = "Студентов: " + groupCount;
    })
  }

  //task38
  btns_t38 = document.querySelector('[data-js="t38-buttons"]');
  pick_t38 = document.querySelector('[data-js="t38-pick"]');
  currentGroup = document.querySelector('[data-js="t38-current"]');
  out_t38 = document.querySelector('[data-js="t38-out"]');

  let currentGroupId = "britsp251";

  for (const button_t38 of btns_t38.children) {
    button_t38.addEventListener("click", () => {
      let group_t38 = groupsData.groups.find(g38 => g38.id === button_t38.dataset.groupId);
      currentGroup.textContent = "Текущая группа: " + group_t38.title;
      currentGroupId = button_t38.dataset.groupId;
    })
  }
  pick_t38.addEventListener("click", () => {
    let group_t38 = groupsData.groups.find(g => g.id === currentGroupId);
    let randomIndex = Math.floor(Math.random() * group_t38.students.length);
    let randomStudent = group_t38.students[randomIndex];
    out_t38.textContent = "Студент: " + randomStudent.name;
  });

  //task39
  btns_t39 = document.querySelector('[data-js="t39-buttons"]');
  title_t39 = document.querySelector('[data-js="t39-title"]');
  curator_t39 = document.querySelector('[data-js="t39-curator"]');
  list_t39 = document.querySelector('[data-js="t39-list"]');

  for (const button_t39 of btns_t39.children) {
    button_t39.addEventListener("click", () => {
      let group_t39 = groupsData.groups.find(g39 => g39.id === button_t39.dataset.groupId);
      title_t39.textContent = group_t39.title;
      curator_t39.textContent = "Куратор: " + groupsData.curator;
      list_t39.innerHTML = '';
      group_t39.students.forEach(student => {
        let li_t39 = document.createElement('li');
        li_t39.textContent = student.name;
        list_t39.appendChild(li_t39);
      });
    })
  }

  //task40
  btns_t40 = document.querySelector('[data-js="t40-buttons"]');
  list_t40 = document.querySelector('[data-js="t40-list"]');
  out_t40 = document.querySelector('[data-js="t40-count"]');

  function render(groupId) {
    const group_t40 = groupsData.groups.find(g40 => g40.id === groupId);

    if (!group_t40) return;

    out_t40.textContent = "Студентов: " + group_t40.students.length;
    list_t40.innerHTML = '';

    group_t40.students.forEach(student_t40 => {
      const li_t40 = document.createElement('li');
      li_t40.textContent = student_t40.name;
      list_t40.appendChild(li_t40);
    });
  }

  for (const button_t40 of btns_t40.children) {
    button_t40.addEventListener("click", () => {
      for (const btn_t40 of btns_t40.children) {
        btn_t40.classList.remove('is-active');
      }
      button_t40.classList.add('is-active');
      render(button_t40.dataset.groupId);
    });
  }
});