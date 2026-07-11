// add bootstrap classes to tables
$(document).ready(function() {
  $('table').each(function() {
    if (document.documentElement.getAttribute("data-theme") == "dark") {
      $(this).addClass('table-dark');
    } else {
      $(this).removeClass('table-dark');
    }

    // Add a restrained hover treatment to content tables outside news and CV cards.
    if($(this).parents('[class*="news"]').length==0 &&
        $(this).parents('[class*="card"]').length==0 &&
        $(this).parents('code').length == 0) {
      $(this).addClass('table-hover');
    }
  })
});

