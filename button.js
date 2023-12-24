
  
function openWebsite() {
  var url ='https://www.timeanddate.com/weather/';
  window.open(url, '_blank');

  
}
document.getElementById('btn1').addEventListener('click', openWebsite);
function openWebsite2() {
  var url2 ='https://housefresh.com/the-most-humid-cities-in-the-world/';
  window.open(url2, '_blank');}
document.getElementById('btn2').addEventListener('click', openWebsite2);
function openWebsite3() {
  var url3 = 'https://zoom.earth/maps/wind-speed/#view=18.1,88.1,4z/model=icon';
  window.open(url3, '_blank');}
document.getElementById('btn3').addEventListener('click', openWebsite3);

var playAudio = document.getElementById('songPlay');
playAudio.addEventListener('click', playSong);



function playSong(){
  
  if(playAudio.paused){
    playAudio.play();
  }else {
    playAudio.pause();
  }
}