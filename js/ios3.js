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
    document.getElementById('parallax1').style.backgroundAttachment = 'unset';
    if(screen.width > 750){
        document.getElementById('parallax1').style.backgroundSize = 'contain';
        document.getElementById('parallax1').style.backgroundPosition = 'center center';
    }
    document.getElementById('parallax2').style.backgroundSize = 'cover';
    if(screen.width > 992){
        document.getElementById('parallax2').style.backgroundSize = 'cover';
    }
    document.getElementById('parallax2').style.backgroundAttachment = 'unset';
    document.getElementById('parallax3').style.backgroundAttachment = 'unset';
  }