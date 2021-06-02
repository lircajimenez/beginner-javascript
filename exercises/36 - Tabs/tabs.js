const tabs = document.querySelector(".tabs");
const tabBtn = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

const handleTabClick = (ev) => {
  //console.log(ev.currentTarget);
  //when somebody clicks on a tab:

  //hide all tab panels
  tabPanels.forEach((panel) => {
    //console.log(panel);
    panel.hidden = true;
  });
  //mark all tabs as unselected'
  tabBtn.forEach((tab) => {
    tab.setAttribute("aria-selected", false);
  });
  //mark the clicked tab as selected
  ev.currentTarget.setAttribute("aria-selected", true);
  //find the associated tabpanel and show it
  const { id } = ev.currentTarget;
  console.log(id);
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  console.log(tabPanel);
  tabPanel.hidden = false;
};

tabBtn.forEach((button) => {
  button.addEventListener("click", handleTabClick);
});
