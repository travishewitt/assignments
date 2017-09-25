
window.onload = function() {
    var context = new window.AudioContext() || new window.webkitAudioContext(),
        //an oscillator makes a sound wave
        osc = context.createOscillator(),
        vol = context.createGain(),
        panner = context.createStereoPanner(),
        freqGain = context.createGain(),
        lfo = context.createOscillator(),
        volControl = document.getElementById("volume"),
        panControl = document.getElementById("panner");

    //connect panner to destination
    panner.connect(context.destination);


    vol.gain.value = volControl.value;
    //connect volume to panner
    vol.connect(panner);

    osc.frequency.value = 440;
    osc.connect(vol);
    
    //pitch variation
    freqGain.gain.value = 60;
    freqGain.connect(osc.frequency);

    //vibrato
    lfo.frequency.value = 8;
    lfo.connect(freqGain);
    //this changes the wave type and thus alters how the pitch changes
    lfo.type = "sine"


    volControl.addEventListener("input", function() {
        vol.gain.value = volControl.value
    });

    panControl.addEventListener("input", function() {
        panner.pan.value = panControl.value;
    })

    osc.start();
    lfo.start();
}