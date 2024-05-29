Create manifest.json->This file tells Chrome about your extension, its permissions, and what scripts to run.
create content.js->This script will be injected into the LinkedIn homepage to modify the profile pictures.
create style.css
Installation

    Load the Extension:
        Open Chrome and go to chrome://extensions/.
        Enable "Developer mode" (toggle in the top right).
        Click "Load unpacked" and select your extension's directory.

    Test the Extension:
        Navigate to LinkedIn's homepage (https://www.linkedin.com/feed/).
        The profile pictures in the posts should be replaced with your custom image.
