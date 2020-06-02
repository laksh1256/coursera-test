var arr=["laksh","jatin","jai","yash","sddgcvd","jwjkdbw"];
for(var i=0;i<6;i++)
{ if(arr[i].charAt(0)=='j'|| arr[i].charAt(0)=='J')
byeSpeaker.speak(arr[i]);
else helloSpeaker.speak(arr[i]);
}