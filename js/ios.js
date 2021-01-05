function iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }
  
  // Use like this...
  if(iOS()){ 
    console.log('ThisWhat')
    document.getElementById('parallax1').style.backgroundAttachment = 'unset';
    document.getElementById('parallax2').style.backgroundAttachment = 'unset';
    // document.getElementById('parallax1').style.backgroundSize = 'cover';
    // document.getElementById('parallax2').style.backgroundSize = 'cover';
  }