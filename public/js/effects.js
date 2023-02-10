function HideShow(x) {

    document.getElementById("welcome").style.display = 'none';
    document.getElementById("aboutme").style.display = 'none';
    document.getElementById("experience").style.display = 'none';
    document.getElementById("internships").style.display = 'none';
    document.getElementById("projects").style.display = 'none';

    document.getElementById(x).style.display = 'block';

}