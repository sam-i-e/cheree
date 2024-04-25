

# -------------------------------------------------------Method One--------------------------------------------------

from gtts import gTTS
import os

myText=input("Enter the text\n")
language ="en"

#Converting text to audio
speech = gTTS(text=myText, lang=language, slow=False)

# Saving the converted audio in a mp3 file
speech.save("audio.mp3")

# Playing the converted file
os.system("audio.mp3")
# ----------------------------------------------------------End------------------------------------------------------