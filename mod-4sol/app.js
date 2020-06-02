var arr=["Yaakov","John","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];
for(var i=0;i<arr.length;i++)
{ if(arr[i].charAt(0)=='j'|| arr[i].charAt(0)=='J')
byeSpeaker.speak(arr[i]);
else helloSpeaker.speak(arr[i]);
}