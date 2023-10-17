function displayWebpage(projectlink) {
    // Get the href attribute of the link
    var href = projectlink.getAttribute("href");
  
    // Create a new window
    var window = window.open(href, "_blank");
  
    // Set the window's width and height
    window.width = 500;
    window.height = 300;
  
    // Focus the window
    window.focus();
  }

