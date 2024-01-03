var i = 0;
var txt1 =
  "Baccha jb se ap meri life m aaye ho apke sath bitaya hr ek pal yadgar bn gaya h . Apki baate apka pyaar sb kuch bahut khash h . Ap jaan bn gaye ho meri 💖 . Ab apke bina raha bhi nhi jata h 🥺. M khud ko bahut lucky  smjhti hu kyuki mujhe ap mile 💖. Baccha ap humesha mere sath rhna kabhi mujhse dur mt jana . I love you so much meri jaan 🥰. thank you so mujhe humesha special feel krvane k liye 💖 i miss you so much ap acche se padhai kro or jldi se neet clear kr lo . apki pyari moti. 😘 !untoldcoding";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
