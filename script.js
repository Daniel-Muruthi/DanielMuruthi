$(function() {
    // Sidebar toggle behavior
    $('#sidebarCollapse').on('click', function() {
      $('#sidebar, #content').toggleClass('active');
    });
  });

  const navToggle = document.querySelector('.nav-toggle');
  navToggle.addEventListener('click', () => {
      document.body.classList.toggle('intro')
  })


$(function () {
  $('.chart').easyPieChart({
    size: 160,
    barColor: "#36e617",
    scaleLength: 0,
    lineWidth: 15,
    trackColor: "#525151",
    lineCap: "circle",
    animate: 2000,
  });
});