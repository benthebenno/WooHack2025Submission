import numpy as np
import librosa
import librosa.display
import scipy.signal as signal
import noisereduce as nr
import soundfile as sf

def load_audio(file_path, target_sr=16000):
    y, sr = librosa.load(file_path, sr=target_sr)
    return y, sr

def denoise_audio(y, sr):
    return nr.reduce_noise(y=y, sr=sr)

def apply_bandpass_filter(y, sr, lowcut=150, highcut=5000, order=5):
    nyquist = 0.5 * sr
    low = lowcut / nyquist
    high = highcut / nyquist
    b, a = signal.butter(order, [low, high], btype="band")
    return signal.filtfilt(b, a, y)

#normalize the audio to a target volume
def rms_normalize(y, target_dB=-20):
    rms = np.sqrt(np.mean(y**2))  
    target_rms = 10 ** (target_dB / 20) 
    return y * (target_rms / rms)  

def to_mono(y):
    # if stereo, we average the channels to convert it to mono
    if len(y.shape) > 1:  
        return np.mean(y, axis=0)
    return y  

def preprocess_audio(file_path, save_path=None):
    print(" Loading audio...")
    y, sr = load_audio(file_path)

    print(" Denoising audio...")
    y_denoised = denoise_audio(y, sr)

    print(" Applying bandpass filter...")
    y_filtered = apply_bandpass_filter(y_denoised, sr)

    print(" Normalizing volume...")
    y_normalized = rms_normalize(y_filtered)

    print(" Converting to mono...")
    y_final = to_mono(y_normalized)

    if save_path:
        print(f"✅ Saving preprocessed audio to {save_path}")
        sf.write(save_path, y_final, sr)

    print("🚀 Preprocessing complete!")
    return y_final, sr

# Example usage:
if __name__ == "__main__":
    input_audio = 'Test Audio 4.wav'      
    output_audio = "atc_audio.wav"  

    y_processed, sr_processed = preprocess_audio(input_audio, output_audio)

