import requests
from bs4 import BeautifulSoup as bs
import os
from urllib.parse import urljoin 
import time
import re

os.makedirs('./MP3', exist_ok=True)

BASE_URL = 'https://www.liveatc.net' 

DOWNLOAD_DELAY = 1

def extract_media_url(playlist_content):
    """Extract first valid media URL from playlist content"""
    pls_match = re.search(r'File\d+=(http[^\s]+)', playlist_content)
    if pls_match:
        return pls_match.group(1)
    
    m3u_match = re.search(r'^(http[^\s]+)$', playlist_content, re.MULTILINE)
    if m3u_match:
        return m3u_match.group(1)
    
    return None


webpage = requests.get("https://www.liveatc.net/search/?icao=CLE")

soup = bs(webpage.text, "html.parser")

td_elements = soup.find_all(
    lambda tag: tag.name == 'td' and '(launches your MP3 player)' in tag.get_text()
)

# Print results
for td in td_elements:
    print(td)
    print("-----")


for index, td in enumerate(td_elements, start=1):
    link = td.find('a', href=True)
    if not link:
        print(f"No link in TD {index}")
        continue

    playlist_url = urljoin(BASE_URL, link['href'])
    
    try:
        # Step 1: Download playlist file
        playlist_response = requests.get(playlist_url)
        playlist_response.raise_for_status()
        
        # Step 2: Extract media URL from playlist
        media_url = extract_media_url(playlist_response.text)
        if not media_url:
            print(f"No media URL found in playlist: {playlist_url}")
            continue
            
        # Step 3: Download actual media file
        media_response = requests.get(media_url, stream=True, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
        })
        media_response.raise_for_status()
        
        # Create filename from original playlist URL
        filename = os.path.basename(link['href']).split('.')[0] + '.mp3'
        save_path = os.path.join('./MP3', filename)
        
        # Save with progress
        with open(save_path, 'wb') as f:
            for chunk in media_response.iter_content(chunk_size=8192):
                if chunk:
                    f.write(chunk)
        
        print(f"Downloaded: {filename} ({media_url})")
        
    except Exception as e:
        print(f"Failed processing {playlist_url}: {str(e)}")
    
    time.sleep(DOWNLOAD_DELAY)