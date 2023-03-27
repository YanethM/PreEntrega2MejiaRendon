const pen_socialbutton_theme_switch = () => {
  const el = document.getElementById(`theme_button`);
  el.setAttribute(
    `style`,
    pen_socialbutton_theme_buttons[pen_socialbutton_theme].style
  );
  el.setAttribute(
    `title`,
    pen_socialbutton_theme_buttons[pen_socialbutton_theme].title
  );
  el.innerHTML =
    pen_socialbutton_theme_buttons[pen_socialbutton_theme].innerHTML;

  document.body.className = pen_socialbutton_theme;
};

let pen_socialbutton_re_hide_notification_timeout = null;
$(".option").click(function () {
  $(".option").removeClass("active");
  $(this).addClass("active");
});
