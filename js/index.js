function checkbox() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementsByClassName('top_nav')[0].style.backgroundColor = '#3C3B3A';
    var cols = document.getElementsByClassName('user_timeline');
    for(i = 0; i < cols.length; i++) {
      cols[i].style.backgroundColor = '#3C3B3A';
    }
}

function myfunction() {
    location.href = "uster_data.html";
}