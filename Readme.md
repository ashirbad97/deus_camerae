
The purpose of this prototype is to create an application for the recording and storing of a viedo file, which is to be uploaded to the server for future analysis.

The following guide was referenced to create this : https://developers.google.com/web/fundamentals/media/recording-video

Trial 1:

There was difficulty adjusting to the camera settings with the Android version for the above guide so due to this, a normal form for file upload will be created with focus on the background handling of the video file

MongoDB to store info and the file name

Admin Interface is simple HTML Table Listing

Trial 2:

Unable to make the video player play the video files, so made the download option available
For download the easiest way was to change the upload directory to one in the public folder, but doing so is unsafe as it will risk the file of being shown to everyone

In future remove this option and make the video upload directory a secure one and not in public