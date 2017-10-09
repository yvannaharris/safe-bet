from bs4 import BeautifulSoup
import pandas as pd
import urllib
import os
os.chdir('/home/helios/Documents/nodeFiles/fight-card-/scraping')

# Open the main page with events listed
sock = urllib.urlopen('http://www.ufc.com/schedule')
page = sock.read()
soup = BeautifulSoup(page)

# Scrape event URLs from the main page
event_urls = []
div = soup.find(id='event_content')
arrows = div.findChildren('div', {'class' : 'btn-ltgray-arrow'})
for a in arrows:
    link = a.findChildren('a')
    event = link[0].get('href')
    event_urls.append('http://www.ufc.com' + event)
print event_urls
# Pull Fight URLs from each Event URL
fight_urls = []
for event_url in event_urls: 
    print 'event_url: ' + event_url
    try:
        sock = urllib.urlopen(event_url)
        event_html = sock.read()
        event_soup = BeautifulSoup(event_html)

        tds = event_soup.find_all('td')
        for td in tds:
            for link in td.find_all('a'):
                url = link.get('href')
                print url
                if url != None:
                    fight_urls.append(url)
    
    except IOError:
        pass

# Save fight URLs to a csv file
print fight_urls
fight_urls = pd.DataFrame(fight_urls, columns=['link'])
event_urls = pd.DataFrame(event_urls, columns=['link'])
fight_urls.to_csv('fight urls.csv', index=False)
event_urls.to_csv('event urls.csv', index=False)

