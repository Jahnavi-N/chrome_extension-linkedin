document.addEventListener('DOMContentLoaded', function() {
    const newProfilePicUrl = 'https://via.placeholder.com/100'; // URL of the new profile picture
  
    function replaceProfilePictures() {
      const profilePics = document.querySelectorAll('img');
      profilePics.forEach(img => {
        if (img.src.includes('profile') || img.alt.includes('profile')) { // Heuristic to identify profile pictures
          img.src = newProfilePicUrl;
        }
      });
    }
  
    // Initial replacement
    replaceProfilePictures();
  
    // Observe changes to the DOM and replace new profile pictures
    const observer = new MutationObserver(replaceProfilePictures);
    observer.observe(document.body, { childList: true, subtree: true });
  });
  