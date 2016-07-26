document.addEventListener("DOMContentLoaded", function(event) {
  //////////// SOUNDCLOUD AUTH //////////////////////////////

  SC.initialize({
    client_id: '19f527fc69b85cf2de94a95f9c538487',
    redirect_uri: ''
  });

var audioCtx = new AudioContext();
var osc = document.getElementById('osc');

  osc.onmousedown = function(){
    var oscPitch = document.getElementById('oscPitch').value;
    var oscGain = document.getElementById('oscGain').value;

    oscillator = audioCtx.createOscillator();
    gainNode = audioCtx.createGain();

      oscillator.type = "sine";
      oscillator.frequency.value = oscPitch;
      gainNode.gain.value = oscGain;
      //oscillator.connect(audioCtx.destination); // not needed b/c gain node
      oscillator.start(0);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

  };

osc.onmouseup = function(){
  oscillator.disconnect();
}

var osc2 = document.getElementById('osc2');

osc2.onmousedown = function(){
  var oscPitch2 = document.getElementById('oscPitch2').value;
  oscillator = audioCtx.createOscillator(), //Creates oscillator
  oscillator.type = "sine";
  oscillator.frequency.value = oscPitch2;
  oscillator.connect(audioCtx.destination);
  oscillator.start(0);
};

osc2.onmouseup = function(){
  oscillator.disconnect();
}

var osc3 = document.getElementById('osc3');

osc3.onmousedown = function(){
  var oscPitch3 = document.getElementById('oscPitch3').value;
  oscillator = audioCtx.createOscillator(), //Creates oscillator
  oscillator.type = "sine";
  oscillator.frequency.value = oscPitch3;
  oscillator.connect(audioCtx.destination);
  oscillator.start(0);
};

osc3.onmouseup = function(){
  oscillator.disconnect();
}
});
